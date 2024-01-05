import { ZabbixObjStringGeneric } from './zabbix-common'

export type ZabbixLLDRule = {
  itemid: string
  delay: string
  hostid: string
  interfaceid: string
  key_: string
  name: string
  type: ZabbixLLDRuleType
  url: string
  allow_traps: ZabbixLLDRuleAllowTraps
  authtype: ZabbixLLDRuleAuthtype
  description: string
  error: string
  follow_redirects: ZabbixLLDRuleFollowRedirects
  headers: ZabbixObjStringGeneric
  http_proxy: string
  ipmi_sensor: string
  jmx_endpoint: string
  lifetime: string
  master_itemid: number
  output_format: ZabbixLLDRuleOutputFormat
  params: string
  parameters: string[]
  password: string
  post_type: ZabbixLLDRulePostType
  posts: string
  privatekey: string
  publickey: string
  query_fields: string[]
  request_method: ZabbixLLDRuleRquestMethod
  retrieve_mode: ZabbixLLDRuleRetrieveMode
  snmp_oid: string
  ssl_cert_file: string
  ssl_key_file: string
  ssl_key_password: string
  state: ZabbixLLDRuleState
  status: ZabbixLLDRuleStatus
  status_codes: string
  templateid: string
  timeout: string
  trapper_hosts: string
  username: string
  uuid: string
  verify_host: ZabbixLLDRuleVerifyHost
  verify_peer: ZabbixLLDRuleVerifyPeer
}

type ZabbixLLDRuleType =
  | 0
  | 2
  | 3
  | 5
  | 7
  | 10
  | 11
  | 12
  | 13
  | 14
  | 16
  | 18
  | 19
  | 20
  | 21

type ZabbixLLDRuleAllowTraps = 0 | 1

type ZabbixLLDRuleAuthtype = 0 | 1 | 2

type ZabbixLLDRuleFollowRedirects = 0 | 1

type ZabbixLLDRuleOutputFormat = 0 | 1

type ZabbixLLDRulePostType = 0 | 2 | 3

type ZabbixLLDRuleRquestMethod = 0 | 1 | 2 | 3

type ZabbixLLDRuleRetrieveMode = 0 | 1 | 2

type ZabbixLLDRuleState = 0 | 1

type ZabbixLLDRuleStatus = 0 | 1

type ZabbixLLDRuleVerifyHost = 0 | 1

type ZabbixLLDRuleVerifyPeer = 0 | 1
