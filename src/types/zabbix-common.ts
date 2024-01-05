export type ZabbixSeverity = 0 | 1 | 2 | 3 | 4 | 5

export type ZabbixTag = {
  tag: string
  value: string
}

export type ZabbixObjStringGeneric = {
  [key: string]: string
}
