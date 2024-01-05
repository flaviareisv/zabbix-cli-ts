import { ZabbixSeverity } from './zabbix-common'

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
