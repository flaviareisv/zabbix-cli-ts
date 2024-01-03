import { ZabbixGetParamsCommon } from './get-common'
import { ZabbixHost } from './host'
import { ZabbixTemplate } from './template'

export type ZabbixHostGroup = {
  groupid: string
  name: string
  flags: ZabbixHostGroupFlags
  internal: ZabbixHostGroupInternal
  uuid: string
}

type ZabbixHostGroupFlags = 0 | 4

type ZabbixHostGroupInternal = 0 | 1

export type ZabbixHostGroupGetParams = {
  output?: ZabbixHostGroupOutput[] | 'extend'
  graphids?: string | string[]
  groupids?: string | string[]
  hostids?: string | string[]
  maintenanceids?: string | string[]
  monitored_hosts?: boolean | null
  real_hosts?: boolean | null
  templated_hosts?: boolean | null
  templateids?: string | string[]
  triggerids?: string | string[]
  with_graphs?: boolean | null
  with_graph_prototypes?: boolean | null
  with_hosts_and_templates?: boolean | null
  with_httptests?: boolean | null
  with_items?: boolean | null
  with_item_prototypes?: boolean | null
  with_simple_graph_item_prototypes?: boolean | null
  with_monitored_httptests?: boolean | null
  with_monitored_items?: boolean | null
  with_monitored_triggers?: boolean | null
  with_simple_graph_items?: boolean | null
  with_triggers?: boolean | null
  selectDiscoveryRule?: ZabbixHostGroupDiscoveryRuleKeys[] | 'extend' | 'count'
  selectGroupDiscovery?: ZabbixHostGroupGroupDiscovery[] | 'extend' | 'count'
  selectHosts?: ZabbixHostGroupHosts[] | 'extend' | 'count'
  selectTemplates?: ZabbixHostGroupTemplates[] | 'extend' | 'count'
  limitSelects?: number
} & ZabbixGetParamsCommon

type ZabbixHostGroupOutput = keyof ZabbixHostGroup

type ZabbixHostGroupDiscoveryRule = {
  druleid: string
  iprange: string
  name: string
  delay: string
  nextcheck: number
  proxy_hostid: string
  status: ZabbixHostGroupDiscoveryRuleStatus
}

type ZabbixHostGroupDiscoveryRuleKeys = keyof ZabbixHostGroupDiscoveryRule

type ZabbixHostGroupDiscoveryRuleStatus = 0 | 1

type ZabbixHostGroupGroupDiscovery =
  | 'groupid'
  | 'lastcheck'
  | 'name'
  | 'parent_group_prototypeid'
  | 'ts_delete'

type ZabbixHostGroupHosts = keyof ZabbixHost

type ZabbixHostGroupTemplates = keyof ZabbixTemplate
