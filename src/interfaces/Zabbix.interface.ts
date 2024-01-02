import { ZabbixProblem, ZabbixProblemGetParams } from '@/types/problem'
import { ZabbixResponse } from '@/types/zabbix-response'
import { ZabbixRequestParams } from '@/zabbix-fetch'

export interface IZabbix {
  request(
    method: string,
    params: ZabbixRequestParams
  ): Promise<ZabbixResponse<any>>
  apiinfo(): Promise<string>
  problem(
    params: ZabbixProblemGetParams
  ): Promise<ZabbixResponse<ZabbixProblem>>
  logout(): Promise<void>
}
