import { ZabbixAlert } from './alert'
import { ZabbixGetParamsCommon } from './get-common'
import { ZabbixHost } from './host'
import {
  ZabbixObjStringGeneric,
  ZabbixSeverity,
  ZabbixSuppressionData,
  ZabbixTag
} from './zabbix-common'

export type ZabbixEvent = {
  eventid: string
  source: ZabbixEventSource
  object: ZabbixEventObject
  objectid: string
  acknowledged: number
  clock: number
  ns: number
  name: string
  value: ZabbixEventValue
  severity: ZabbixSeverity
  r_eventid: string
  c_eventid: string
  correlationid: string
  userid: string
  suppressed: ZabbixEventSuppressed
  opdata: string
  urls: ZabbixEventUrls[]
  hosts?: Partial<ZabbixHost>[]
  relatedObject?: ZabbixObjStringGeneric[]
  alerts?: Partial<ZabbixAlert>[]
  acknowledges?: Partial<ZabbixEventAcknowledge>[]
  tags?: Partial<ZabbixTag>[]
  suppression_data?: Partial<ZabbixSuppressionData>[]
}

type ZabbixEventSource = 0 | 1 | 2 | 3 | 4

type ZabbixEventObject = 0 | 1 | 2 | 3 | 4 | 5 | 6

type ZabbixEventValue = 0 | 1 | 2 | 3

type ZabbixEventSuppressed = 0 | 1

type ZabbixEventUrls = {
  name: string
  url: string
}

export type ZabbixEventGetParams = {
  output?: ZabbixEventOutput[] | 'extend'
  eventids?: string | string[]
  groupids?: string | string[]
  hostids?: string | string[]
  objectids?: string | string[]
  source?: ZabbixEventSource
  object?: ZabbixEventObject
  acknowledged?: boolean
  suppressed?: boolean
  severities?: ZabbixSeverity | ZabbixSeverity[]
  evaltype?: ZabbixEventGetEvaltype
  tags?: ZabbixEventGetTags[]
  eventid_from?: string
  eventid_till?: string
  time_from?: number
  time_till?: number
  problem_time_from?: number
  problem_time_till?: number
  value?: number | number[]
  selectHosts?: ZabbixEventGetSelectHosts[] | 'extend'
  selectRelatedObject?: string[] | 'extend'
  select_alerts?: ZabbixEventGetSelectAlerts[] | 'extend'
  select_acknowledges?: ZabbixEventGetSelectAcknowledges[] | 'extend' | 'count'
  selectTags?: ZabbixEventGetSelectTags[] | 'extend'
  selectSuppressionData?: ZabbixEventGetSelectSuppressionData[] | 'extend'
} & ZabbixGetParamsCommon

type ZabbixEventOutput = keyof ZabbixEvent

type ZabbixEventGetEvaltype = 0 | 2

type ZabbixEventGetTags = ZabbixTag & {
  operator: ZabbixEventGetTagsOperator
}

type ZabbixEventGetTagsOperator = 0 | 1 | 2 | 3 | 4 | 5

type ZabbixEventGetSelectHosts = keyof ZabbixHost

type ZabbixEventGetSelectAlerts = keyof ZabbixAlert

type ZabbixEventGetSelectAcknowledges = keyof ZabbixEventAcknowledge

type ZabbixEventGetSelectTags = keyof ZabbixEventGetTags

type ZabbixEventGetSelectSuppressionData = keyof ZabbixSuppressionData

export type ZabbixEventAcknowledgeAction = 1 | 2 | 4 | 8 | 16

type ZabbixEventAcknowledge = {
  acknowledgeid: string
  userid: string
  eventid: string
  clock: number
  message: string
  action: ZabbixEventAcknowledgeAction
  old_severity: ZabbixSeverity
  new_severity: ZabbixSeverity
  username: string
  name: string
  surname: string
}
