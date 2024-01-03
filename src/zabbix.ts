import * as dotenv from 'dotenv'
import zabbixFetch, { ZabbixRequestParams } from './zabbix-fetch'
import { ZabbixProblem, ZabbixProblemGetParams } from './types/problem'
import { ZabbixResponse } from './types/zabbix-response'
import { IZabbix } from './interfaces/Zabbix.interface'
import { ZabbixHostGroupGetParams, ZabbixHostGroup } from './types/host-group'

dotenv.config()

const ZABBIX_API_URL = process.env.ZABBIX_API_URL || ''
const ZABBIX_API_USER = process.env.ZABBIX_API_USER || ''
const ZABBIX_API_PASS = process.env.ZABBIX_API_PASS || ''

export default class Zabbix implements IZabbix {
  private user: string
  private pass: string
  apiURL: string
  authToken: string = ''

  constructor(
    url: string = ZABBIX_API_URL,
    user: string = ZABBIX_API_USER,
    pass: string = ZABBIX_API_PASS,
    authToken?: string
  ) {
    if (!url) {
      throw new Error('url parameter not found in constructor')
    }
    if (!user) {
      throw new Error('user parameter not found in constructor')
    }
    if (!pass) {
      throw new Error('pass parameter not found in constructor')
    }
    this.apiURL = url
    this.user = user
    this.pass = pass
    if (authToken) {
      this.authToken = authToken
    }
  }

  private async getAuthToken(): Promise<void> {
    const response = await zabbixFetch(this.apiURL, 'user.login', {
      username: this.user,
      password: this.pass
    })
    if (!response.ok) {
      throw new Error(`Login HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    this.authToken = data.result
  }

  private async getDataAPI(apiMethod: string, params: ZabbixRequestParams) {
    if (!this.authToken) {
      await this.getAuthToken()
    }
    return zabbixFetch(this.apiURL, apiMethod, params, this.authToken)
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

  async logout(): Promise<void> {
    await zabbixFetch(this.apiURL, 'user.logout')
  }

  async apiinfo(): Promise<string> {
    const response = await zabbixFetch(this.apiURL, 'apiinfo.version')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data.result
  }

  async problem(
    params: ZabbixProblemGetParams
  ): Promise<ZabbixResponse<ZabbixProblem>> {
    const response = await this.getDataAPI('problem.get', params)
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
    const data: ZabbixResponse<ZabbixProblem> = await response.json()
    return data
  }

  async hostGroup(
    params: ZabbixHostGroupGetParams
  ): Promise<ZabbixResponse<ZabbixHostGroup>> {
    const response = await this.getDataAPI('hostgroup.get', params)
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
    const data: ZabbixResponse<ZabbixHostGroup> = await response.json()
    return data
  }
}
