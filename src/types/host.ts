import { ZabbixGetParamsCommon } from './get-common'
import { zabbixGraph } from './graph'
import { ZabbixHostGroup } from './host-group'
import { ZabbixHostInterface } from './host-interface'
import { ZabbixHTTPTest } from './http-test'
import { ZabbixItem } from './item'
import { ZabbixLLDRule } from './lld-rule'
import { ZabbixTemplate } from './template'
import { ZabbixTemplateDashboard } from './template-dashboard'
import { ZabbixTrigger } from './trigger'
import { ZabbixUserMacro } from './user-macro'
import { ZabbixValueMap } from './value-map'
import {
  ZabbixObjStringGeneric,
  ZabbixSeverity,
  ZabbixTag
} from './zabbix-common'

export type ZabbixHost = {
  hostid: string
  host: string
  flags: ZabbixHostFlags
  inventory_mode: ZabbixHostInventoryMode
  ipmi_authtype: ZabbixHostAuthtype
  ipmi_password: string
  ipmi_privilege: ZabbixHostPrivilege
  ipmi_username: string
  maintenance_from: number
  maintenance_status: ZabbixHostMaitenanceStatus
  maintenance_type: ZabbixHostMaitenanceType
  maintenanceid: string
  name: string
  proxy_hostid: string
  status: ZabbixHostStatus
  tls_connect: ZabbixHostTLSConnect
  tls_accept: ZabbixHostTLSAccept
  tls_issuer: string
  tls_subject: string
  tls_psk_identity: string
  tls_psk: string
}

type ZabbixHostFlags = 0 | 4

type ZabbixHostInventoryMode = -1 | 0 | 1

type ZabbixHostAuthtype = -1 | 0 | 1 | 2 | 4 | 5 | 6

type ZabbixHostPrivilege = 1 | 2 | 3 | 4 | 5

type ZabbixHostMaitenanceStatus = 0 | 1

type ZabbixHostMaitenanceType = 0 | 1

type ZabbixHostStatus = 0 | 1

type ZabbixHostTLSConnect = 1 | 2 | 4

type ZabbixHostTLSAccept = 1 | 2 | 4

export type ZabbixHostGetParams = {
  output?: ZabbixHostOutput[] | 'extend'
  groupids?: string | string[]
  dserviceids?: string | string[]
  graphids?: string | string[]
  hostids?: string | string[]
  httptestids?: string | string[]
  interfaceids?: string | string[]
  itemids?: string | string[]
  maintenanceids?: string | string[]
  monitored_hosts?: boolean | null
  proxy_hosts?: boolean | null
  proxyids?: string | string[]
  templated_hosts?: boolean | null
  templateids?: string | string[]
  triggerids?: string | string[]
  with_items?: boolean | null
  with_item_prototypes?: boolean | null
  with_simple_graph_item_prototypes?: boolean | null
  with_graphs?: boolean | null
  with_graph_prototypes?: boolean | null
  with_httptests?: boolean | null
  with_monitored_httptests?: boolean | null
  with_monitored_items?: boolean | null
  with_monitored_triggers?: boolean | null
  with_simple_graph_items?: boolean | null
  with_triggers?: boolean | null
  withProblemsSuppressed?: boolean | null
  evaltype?: ZabbixHostGetEvaltype
  severities?: ZabbixSeverity | ZabbixSeverity[]
  tags?: ZabbixHostGetTags | ZabbixHostGetTags[]
  inheritedTags?: boolean
  selectDiscoveries?: ZabbixHostGetSelectDiscoveries[] | 'extend' | 'count'
  selectDiscoveryRule?: ZabbixHostGetSelectDiscoveries[] | 'extend'
  selectGraphs?: zabbixGraph[] | 'extend' | 'count'
  selectHostDiscovery?: ZabbixHostGetSelectDiscovery[] | 'extend'
  selectHostGroups?: ZabbixHostGetSelectHostGroup[] | 'extend'
  selectHttpTests?: ZabbixHostGetSelectHTTPTest[] | 'extend' | 'count'
  selectInterfaces?: ZabbixHostGetSelectInterfaces[] | 'extend' | 'count'
  selectInventory?: ZabbixHostGetSelectInventory[] | 'extend'
  selectItems?: ZabbixHostGetSelectItems[] | 'extend' | 'count'
  selectMacros?: ZabbixHostGetSelectMacros[] | 'extend'
  selectParentTemplates?:
    | ZabbixHostGetSelectParentTemplates[]
    | 'extend'
    | 'count'
  selectDashboards?: ZabbixHostGetSelectDashboards[] | 'extend' | 'count'
  selectTags?: string[] | 'extend'
  selectInheritedTags?: string[] | 'extend'
  selectTriggers?: ZabbixHostGetSelectTriggers[] | 'extend' | 'count'
  selectValueMaps?: ZabbixHostGetSelectValueMaps[] | 'extend'
  filter?: Partial<ZabbixHostGetFilter>
  limitSelects?: number
  search?: ZabbixObjStringGeneric[]
  searchInventory?: ZabbixObjStringGeneric[]
} & ZabbixGetParamsCommon

type ZabbixHostOutput = keyof ZabbixHost

type ZabbixHostGetEvaltype = 0 | 2

type ZabbixHostGetTags = ZabbixTag & {
  operator: ZabbixHostGetTagsOperator
}

type ZabbixHostGetTagsOperator = 0 | 1 | 2 | 3 | 4 | 5

type ZabbixHostGetSelectDiscoveries = keyof ZabbixLLDRule

type ZabbixHostGetSelectDiscovery =
  | 'host'
  | 'hostid'
  | 'parent_hostid'
  | 'parent_itemid'
  | 'lastcheck'
  | 'ts_delete'

type ZabbixHostGetSelectHostGroup = keyof ZabbixHostGroup

type ZabbixHostGetSelectHTTPTest = keyof ZabbixHTTPTest

type ZabbixHostGetSelectInterfaces = keyof ZabbixHostInterface

type ZabbixHostGetSelectInventory = keyof ZabbixHostInventory

type ZabbixHostGetSelectItems = keyof ZabbixItem

type ZabbixHostGetSelectMacros = keyof ZabbixUserMacro

type ZabbixHostGetSelectParentTemplates = keyof ZabbixTemplate

type ZabbixHostGetSelectDashboards = keyof ZabbixTemplateDashboard

type ZabbixHostGetSelectTriggers = keyof ZabbixTrigger

type ZabbixHostGetSelectValueMaps = keyof ZabbixValueMap

type ZabbixHostGetFilter = {
  [Property in keyof ZabbixHost]: string | string[]
}

type ZabbixHostInventory = {
  alias?: string
  asset_tag?: string
  chassis?: string
  contact?: string
  contract_number?: string
  date_hw_decomm?: string
  date_hw_expiry?: string
  date_hw_install?: string
  date_hw_purchase?: string
  deployment_status?: string
  hardware?: string
  hardware_full?: string
  host_netmask?: string
  host_networks?: string
  host_router?: string
  hw_arch?: string
  installer_name?: string
  location?: string
  location_lat?: string
  location_lon?: string
  macaddress_a?: string
  macaddress_b?: string
  model?: string
  name?: string
  notes?: string
  oob_ip?: string
  oob_netmask?: string
  oob_router?: string
  os?: string
  os_full?: string
  os_short?: string
  poc_1_cell?: string
  poc_1_email?: string
  poc_1_name?: string
  poc_1_notes?: string
  poc_1_phone_a?: string
  poc_1_phone_b?: string
  poc_1_screen?: string
  poc_2_cell?: string
  poc_2_email?: string
  poc_2_name?: string
  poc_2_notes?: string
  poc_2_phone_a?: string
  poc_2_phone_b?: string
  poc_2_screen?: string
  serialno_a?: string
  serialno_b?: string
  site_address_a?: string
  site_address_b?: string
  site_address_c?: string
  site_city?: string
  site_country?: string
  site_notes?: string
  site_rack?: string
  site_state?: string
  site_zip?: string
  software?: string
  software_app_a?: string
  software_app_b?: string
  software_app_c?: string
  software_app_d?: string
  software_app_e?: string
  software_full?: string
  tag?: string
  type?: string
  type_full?: string
  url_a?: string
  url_b?: string
  url_c?: string
  vendor?: string
}
