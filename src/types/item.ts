import { ZabbixObjStringGeneric } from './zabbix-common'

export type ZabbixItem = {
  itemid: string
  delay: string
  hostid: string
  interfaceid: string
  key_: string
  name: string
  type: ZabbixItemType
  url: string
  value_type: ZabbixItemValueType
  allow_traps: ZabbixItemAllowTraps
  authtype: ZabbixItemAuthtype
  description: string
  error: string
  flags: ZabbixItemFlags
  follow_redirects: ZabbixItemFollowRedirects
  headers: ZabbixObjStringGeneric
  history: string
  http_proxy: string
  inventory_link: number
  ipmi_sensor: string
  jmx_endpoint: string
  lastclock: number
  lastns: number
  lastvalue: string
  logtimefmt: string
  master_itemid: number
  output_format: ZabbixItemOutputFormat
  params: string
  parameters: string[]
  password: string
  post_type: ZabbixItemPostType
  posts: string
  prevvalue: string
  privatekey: string
  publickey: string
  query_fields: string[]
  request_method: ZabbixItemRequestMethod
  retrieve_mode: ZabbixItemRetrieveMode
  snmp_oid: string
  ssl_cert_file: string
  ssl_key_file: string
  ssl_key_password: string
  state: ZabbixItemState
  status: ZabbixItemStatus
  status_codes: string
  templateid: string
  timeout: string
  trapper_hosts: string
  trends: string
  units: string
  username: string
  uuid: string
  valuemapid: string
  verify_host: ZabbixItemVerifyHost
  verify_peer: ZabbixItemVerifyPeer
}

type ZabbixItemType =
  | 0
  | 2
  | 3
  | 5
  | 7
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21

type ZabbixItemValueType = 0 | 1 | 2 | 3 | 4

type ZabbixItemAllowTraps = 0 | 1

type ZabbixItemAuthtype = 0 | 1 | 2 | 3

type ZabbixItemFlags = 0 | 4

type ZabbixItemFollowRedirects = 0 | 1

type ZabbixItemOutputFormat = 0 | 1

type ZabbixItemPostType = 0 | 2 | 3

type ZabbixItemRequestMethod = 0 | 1 | 2 | 3

type ZabbixItemRetrieveMode = 0 | 1 | 2

type ZabbixItemState = 0 | 1

type ZabbixItemStatus = 0 | 1

type ZabbixItemVerifyHost = 0 | 1

type ZabbixItemVerifyPeer = 0 | 1
