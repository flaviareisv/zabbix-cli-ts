import { ZabbixEvent } from './event'
import { ZabbixGetParamsCommon } from './get-common'
import { ZabbixHost } from './host'
import { ZabbixHostGroup } from './host-group'
import { ZabbixItem } from './item'
import { ZabbixLLDRule } from './lld-rule'
import { ZabbixSeverity, ZabbixTag } from './zabbix-common'

export type ZabbixTrigger = {
  triggerid: string
  description: string
  expression: string
  event_name: string
  opdata: string
  comments: string
  error: string
  flags: ZabbixTriggerFlags
  lastchange: number
  priority: ZabbixSeverity
  state: ZabbixTriggerState
  status: ZabbixTriggerStatus
  templateid: string
  type: ZabbixTriggerType
  url: string
  value: ZabbixTriggerValue
  recovery_mode: ZabbixTriggerRecoveryMode
  recovery_expression: string
  correlation_mode: ZabbixTriggerCorrelationMode
  correlation_tag: string
  manual_close: ZabbixTriggerManualClose
  uuid: string
}

type ZabbixTriggerFlags = 0 | 4

type ZabbixTriggerState = 0 | 1

type ZabbixTriggerStatus = 0 | 1

type ZabbixTriggerType = 0 | 1

type ZabbixTriggerValue = 0 | 1

type ZabbixTriggerRecoveryMode = 0 | 1 | 2

type ZabbixTriggerCorrelationMode = 0 | 1

type ZabbixTriggerManualClose = 0 | 1

export type ZabbixTriggerGetParams = {
  output?: ZabbixTriggerOutput[] | 'extend'
  triggerids?: string | string[]
  groupids?: string | string[]
  templateids?: string | string[]
  hostids?: string | string[]
  itemids?: string | string[]
  functions?: string | string[]
  group?: string
  host?: string
  inherited?: boolean
  templated?: boolean
  dependent?: boolean
  monitored?: boolean | null
  active?: boolean | null
  maintenance?: boolean
  withUnacknowledgedEvents?: boolean | null
  withAcknowledgedEvents?: boolean | null
  withLastEventUnacknowledged?: boolean | null
  skipDependent?: boolean | null
  lastChangeSince?: number
  lastChangeTill?: number
  only_true?: boolean | null
  min_severity?: ZabbixSeverity
  evaltype?: ZabbixTriggerGetEvaltype
  tags?: ZabbixTriggerGetTags[]
  expandComment?: boolean | null
  expandDescription?: boolean | null
  expandExpression?: boolean | null
  selectGroups?: ZabbixTriggerGetSelectGroups[] | 'extend'
  selectHosts?: ZabbixTriggerGetSelectHosts[] | 'extend'
  selectItems?: ZabbixTriggerGetSelectItems[] | 'extend'
  selectFunctions?: ZabbixTriggerGetSelectFunctions[] | 'extend'
  selectDependencies?: ZabbixTriggerOutput[] | 'extend'
  selectDiscoveryRule?: ZabbixTriggerGetSelectDiscoveryRule[] | 'extend'
  selectLastEvent?: ZabbixTriggerGetSelectEvent[] | 'extend'
  selectTags?: ZabbixTriggerGetSelectTags[] | 'extend'
  selectTriggerDiscovery?: ZabbixTriggerGetSelectTriggerDiscovery[] | 'extend'
  filter?: ZabbixTriggerGetFilter
  limitSelects?: number
} & ZabbixGetParamsCommon

type ZabbixTriggerOutput = keyof ZabbixTrigger

type ZabbixTriggerGetEvaltype = 0 | 2

type ZabbixTriggerGetTags = ZabbixTag & {
  operator: ZabbixTriggerGetTagsOperator
}

type ZabbixTriggerGetTagsOperator = 0 | 1 | 2 | 3 | 4 | 5

type ZabbixTriggerGetSelectGroups = keyof ZabbixHostGroup

type ZabbixTriggerGetSelectHosts = keyof ZabbixHost

type ZabbixTriggerGetSelectItems = keyof ZabbixItem

type ZabbixTriggerGetSelectFunctions = keyof ZabbixTriggerFunctions

type ZabbixTriggerGetSelectDiscoveryRule = keyof ZabbixLLDRule

type ZabbixTriggerGetSelectEvent = keyof ZabbixEvent

type ZabbixTriggerGetSelectTags = keyof ZabbixTriggerGetTags

type ZabbixTriggerGetSelectTriggerDiscovery = 'parent_triggerid'

type ZabbixTriggerGetFilter = {
  [Property in keyof ZabbixTriggerFilter]: string | string[]
}

type ZabbixTriggerFilter = keyof ZabbixTrigger | 'host' | 'hostid'

type ZabbixTriggerFunctions = {
  functionid: string
  itemid: string
  function: string
  parameter: string
}
