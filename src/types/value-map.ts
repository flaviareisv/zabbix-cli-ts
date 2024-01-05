export type ZabbixValueMap = {
  valuemapid: string
  hostid: string
  name: string
  mappings: ZabbixValueMapMappings
  uuid: string
}

type ZabbixValueMapMappings = {
  type: ZabbixValueMapMappingsType
  value: string
  newvalue: string
}

type ZabbixValueMapMappingsType = 0 | 1 | 2 | 3 | 4 | 5
