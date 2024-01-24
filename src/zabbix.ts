import zabbixFetch, {
  ZabbixRequestOptions,
  ZabbixRequestParams
} from './zabbix-fetch'
import { ZabbixResponse } from './types/zabbix-response'
import { IZabbix } from './interfaces/Zabbix.interface'
import { ZabbixUserLoginParams } from './types/user'

export default class Zabbix implements IZabbix {
  private readonly username: string
  private readonly password: string
  protected readonly apiURL: string
  readonly options: ZabbixRequestOptions
  authToken: string = ''

  constructor(
    url: string,
    username: string,
    password: string,
    options?: ZabbixRequestOptions
  ) {
    if (!url) {
      throw new Error('url parameter not found in constructor')
    }
    if (!username) {
      throw new Error('username parameter not found in constructor')
    }
    if (!password) {
      throw new Error('password parameter not found in constructor')
    }
    this.apiURL = url
    this.username = username
    this.password = password
    this.options = options || {}
    const { authToken } = options || {}
    if (authToken) {
      this.authToken = authToken
    }
  }

  async login(params: ZabbixUserLoginParams): Promise<ZabbixResponse<string>> {
    const response = await zabbixFetch(this.apiURL, 'user.login', {
      username: params.username,
      password: params.password
    })
    if (!response.ok) {
      throw new Error(
        `Login HTTP error! [${response.status}]: ${response.statusText}`
      )
    }
    const res = (await response.json()) as ZabbixResponse<string>
    return res
  }

  async logout(): Promise<void> {
    await zabbixFetch(this.apiURL, 'user.logout')
  }

  async request(
    apiMethod: string,
    params: ZabbixRequestParams
  ): Promise<ZabbixResponse<any>> {
    const response = await this.getDataAPI(apiMethod, params)
    const data: ZabbixResponse<any> =
      (await response.json()) as ZabbixResponse<any>
    return data
  }

  async getDataAPI(apiMethod: string, params: ZabbixRequestParams) {
    try {
      if (!this.authToken) {
        await this.getAuthToken()
      }
      const response = await zabbixFetch(this.apiURL, apiMethod, params, {
        ...this.options,
        authToken: this.authToken
      })
      if (!response.ok) {
        throw new Error(`[${response.status}]: ${response.statusText}`)
      }
      return response
    } catch (err) {
      if (err instanceof Response) {
        throw new Error(`[${err.status}]: ${err.statusText}`)
      }
      throw err
    }
  }

  private async getAuthToken(): Promise<void> {
    const auth = await this.login({
      username: this.username,
      password: this.password
    })
    this.authToken = auth.result as string
  }
}
