import { ZabbixEvent, ZabbixEventGetParams } from '@/types/event'
import { ZabbixHost, ZabbixHostGetParams } from '@/types/host'
import { ZabbixHostGroup, ZabbixHostGroupGetParams } from '@/types/host-group'
import { ZabbixProblem, ZabbixProblemGetParams } from '@/types/problem'
import { ZabbixTrigger, ZabbixTriggerGetParams } from '@/types/trigger'
import { ZabbixUser, ZabbixUserGetParams } from '@/types/user'
import { ZabbixResponse } from '@/types/zabbix-response'

export interface IZabbixAPI {
  apiinfo(): Promise<string>
  problem(
    params: ZabbixProblemGetParams
  ): Promise<ZabbixResponse<ZabbixProblem>>
  hostGroup(
    params: ZabbixHostGroupGetParams
  ): Promise<ZabbixResponse<ZabbixHostGroup>>
  host(params: ZabbixHostGetParams): Promise<ZabbixResponse<ZabbixHost>>
  event(params: ZabbixEventGetParams): Promise<ZabbixResponse<ZabbixEvent>>
  trigger(
    params: ZabbixTriggerGetParams
  ): Promise<ZabbixResponse<ZabbixTrigger>>
  user(params: ZabbixUserGetParams): Promise<ZabbixResponse<ZabbixUser>>
}
