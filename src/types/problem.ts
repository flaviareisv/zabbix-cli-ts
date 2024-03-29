import { ZabbixEventAcknowledgeAction } from './event'
import { ZabbixGetParamsCommon } from './get-common'
import {
  ZabbixSeverity,
  ZabbixSuppressionData,
  ZabbixTag
} from './zabbix-common'

export type ZabbixProblem = {
  eventid: string
  source: ZabbixProblemSource
  object: ZabbixProblemObject
  objectid: string
  clock: number
  ns: number
  r_eventid: string
  r_clock: number
  r_ns: number
  correlationid: string
  userid: string
  name: string
  acknowledged: ZabbixProblemAcknowledged
  severity: ZabbixSeverity
  suppressed: ZabbixProblemSuppressed
  opdata: string
  urls: ZabbixProblemURL[]
  acknowledges?: Partial<ZabbixProblemGetSelectAcknowledges>[]
  tags?: Partial<ZabbixTag>[]
  suppression_data?: Partial<ZabbixSuppressionData>[]
}

type ZabbixProblemSource = 0 | 3 | 4

type ZabbixProblemObject = 0 | 4 | 5 | 6

type ZabbixProblemAcknowledged = 0 | 1

type ZabbixProblemSuppressed = 0 | 1

type ZabbixProblemURL = {
  name: string
  url: string
}

export type ZabbixProblemGetParams = {
  output?: ZabbixProblemOutput[] | 'extend'
  eventids?: string | string[]
  groupids?: string | string[]
  hostids?: string | string[]
  objectids?: string | string[]
  source?: ZabbixProblemSource
  object?: ZabbixProblemObject
  acknowledged?: boolean
  suppressed?: boolean
  severities?: ZabbixSeverity | ZabbixSeverity[]
  evaltype?: ZabbixProblemGetParamsEvaltype
  tags?: ZabbixProblemGetParamsTags[]
  recent?: boolean
  eventid_from?: string
  eventid_till?: string
  time_from?: number
  time_till?: number
  selectAcknowledges?: ZabbixProblemGetParamsAcknowledges[] | 'extend' | 'count'
  selectTags?: ZabbixProblemGetParamsSelectTags[] | 'extend' | 'count'
  selectSuppressionData?:
    | ZabbixProblemGetParamsSuppressionData[]
    | 'extend'
    | 'count'
} & ZabbixGetParamsCommon

type ZabbixProblemOutput = keyof ZabbixProblem

type ZabbixProblemGetParamsEvaltype = 0 | 2

type ZabbixProblemGetParamsTags = ZabbixTag & {
  operator: ZabbixProblemGetParamsTagsOperator
}

type ZabbixProblemGetParamsTagsOperator = 0 | 1 | 2 | 3 | 4 | 5

export type ZabbixProblemGetSelectAcknowledges = {
  acknowledgeid: string
  userid: string
  eventid: string
  clock: number
  message: string
  action: ZabbixEventAcknowledgeAction
  old_severity: ZabbixSeverity
  new_severity: ZabbixSeverity
}

type ZabbixProblemGetParamsAcknowledges =
  keyof ZabbixProblemGetSelectAcknowledges

type ZabbixProblemGetParamsSelectTags = keyof ZabbixProblemGetParamsTags

type ZabbixProblemGetParamsSuppressionData = keyof ZabbixSuppressionData
