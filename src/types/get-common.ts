export type ZabbixGetParamsCommon = {
  countOutput?: boolean
  editable?: boolean
  excludeSearch?: boolean
  filter?: ZabbixGetParamsCommonObj
  limit?: number
  preservekeys?: boolean
  search?: ZabbixGetParamsCommonObj
  searchByAny?: boolean
  searchWildcardsEnabled?: boolean
  sortfield?: string | string[]
  sortorder?: string | string[]
  startSearch?: boolean
}

type ZabbixGetParamsCommonObj = {
  [propName: string]: any
}
