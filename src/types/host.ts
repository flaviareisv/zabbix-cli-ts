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
