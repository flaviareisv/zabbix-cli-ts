import { IZabbixAPI } from './interfaces/ZabbixApi.interface'
import { ZabbixEvent, ZabbixEventGetParams } from './types/event'
import { ZabbixHost, ZabbixHostGetParams } from './types/host'
import { ZabbixHostGroup, ZabbixHostGroupGetParams } from './types/host-group'
import { ZabbixProblem, ZabbixProblemGetParams } from './types/problem'
import { ZabbixResponse } from './types/zabbix-response'
import Zabbix from './zabbix'
import zabbixFetch from './zabbix-fetch'

export default class ZabbixAPI extends Zabbix implements IZabbixAPI {
  constructor() {
    super()
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

  async host(params: ZabbixHostGetParams): Promise<ZabbixResponse<ZabbixHost>> {
    const response = await this.getDataAPI('host.get', params)
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
    const data: ZabbixResponse<ZabbixHost> = await response.json()
    return data
  }

  async event(
    params: ZabbixEventGetParams
  ): Promise<ZabbixResponse<ZabbixEvent>> {
    const response = await this.getDataAPI('event.get', params)
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
    const data: ZabbixResponse<ZabbixEvent> = await response.json()
    return data
  }
}
