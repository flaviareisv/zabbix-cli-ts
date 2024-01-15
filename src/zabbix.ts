import zabbixFetch, { ZabbixRequestParams } from './zabbix-fetch'
import { ZabbixResponse } from './types/zabbix-response'
import { IZabbix } from './interfaces/Zabbix.interface'
import { ZabbixUserLoginParams } from './types/user'

export default class Zabbix implements IZabbix {
  private readonly username: string
  private readonly password: string
  protected readonly apiURL: string
  authToken: string = ''

  constructor(
    url: string,
    username: string,
    password: string,
    authToken?: string
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
      throw new Error(`Login HTTP error! status: ${response.status}`)
    }
    return response.json()
  }

  async logout(): Promise<void> {
    await zabbixFetch(this.apiURL, 'user.logout')
  }

  async request(
    apiMethod: string,
    params: ZabbixRequestParams
  ): Promise<ZabbixResponse<any>> {
    const response = await this.getDataAPI(apiMethod, params)
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
    const data: ZabbixResponse<any> = await response.json()
    return data
  }

  async getDataAPI(apiMethod: string, params: ZabbixRequestParams) {
    if (!this.authToken) {
      await this.getAuthToken()
    }
    return zabbixFetch(this.apiURL, apiMethod, params, this.authToken)
  }

  private async getAuthToken(): Promise<void> {
    const auth = await this.login({
      username: this.username,
      password: this.password
    })
    this.authToken = auth.result as string
  }
}
