export type ZabbixHostInterface = {
  interfaceid: string
  available: ZabbixHostInterfaceAvailable
  hostid: string
  type: ZabbixHostInterfaceType
  ip: string
  dns: string
  port: string
  useip: ZabbixHostInterfaceUseip
  main: ZabbixHostInterfaceMain
  details: ZabbixHostInterfaceDetails
  disable_until: number
  error: string
  errors_from: number
}

type ZabbixHostInterfaceAvailable = 0 | 1 | 2

type ZabbixHostInterfaceType = 1 | 2 | 3 | 4

type ZabbixHostInterfaceUseip = 0 | 1

type ZabbixHostInterfaceMain = 0 | 1

type ZabbixHostInterfaceDetails = {
  version: ZabbixHostInterfaceDetailsVersion
  bulk: ZabbixHostInterfaceDetailsBulk
  community: string
  max_repetitions: number
  securityname: string
  securitylevel: ZabbixHostInterfaceDetailsSecurityLevel
  authpassphrase: string
  privpassphrase: string
  authprotocol: ZabbixHostInterfaceDetailsAuthprotocol
  privprotocol: ZabbixHostInterfaceDetailsPrivprotocol
  contextname: string
}

type ZabbixHostInterfaceDetailsVersion = 1 | 2 | 3

type ZabbixHostInterfaceDetailsBulk = 0 | 1

type ZabbixHostInterfaceDetailsSecurityLevel = 0 | 1 | 2

type ZabbixHostInterfaceDetailsAuthprotocol = 0 | 1 | 2 | 3 | 4 | 5

type ZabbixHostInterfaceDetailsPrivprotocol = 0 | 1 | 2 | 3 | 4 | 5
