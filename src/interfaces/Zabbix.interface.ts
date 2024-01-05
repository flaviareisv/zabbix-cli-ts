import { ZabbixHost, ZabbixHostGetParams } from '@/types/host'
import { ZabbixHostGroup, ZabbixHostGroupGetParams } from '@/types/host-group'
import { ZabbixProblem, ZabbixProblemGetParams } from '@/types/problem'
import { ZabbixResponse } from '@/types/zabbix-response'
import { ZabbixRequestParams } from '@/zabbix-fetch'

export interface IZabbix {
  request(
    method: string,
    params: ZabbixRequestParams
  ): Promise<ZabbixResponse<any>>
  logout(): Promise<void>
  apiinfo(): Promise<string>
  problem(
    params: ZabbixProblemGetParams
  ): Promise<ZabbixResponse<ZabbixProblem>>
  hostGroup(
    params: ZabbixHostGroupGetParams
  ): Promise<ZabbixResponse<ZabbixHostGroup>>
  host(params: ZabbixHostGetParams): Promise<ZabbixResponse<ZabbixHost>>
}
