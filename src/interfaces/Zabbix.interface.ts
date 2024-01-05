import { ZabbixUserLoginParams } from '@/types/user'
import { ZabbixResponse } from '@/types/zabbix-response'
import { ZabbixRequestParams } from '@/zabbix-fetch'

export interface IZabbix {
  request(
    method: string,
    params: ZabbixRequestParams
  ): Promise<ZabbixResponse<any>>
  login(params: ZabbixUserLoginParams): Promise<ZabbixResponse<string>>
  logout(): Promise<void>
}
