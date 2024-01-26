export enum ZabbixSeverity {
  NOT_CLASSIFIED = 0,
  INFORMATION = 1,
  WARNING = 2,
  AVERAGE = 3,
  HIGH = 4,
  DISASTER = 5
}

export type ZabbixTag = {
  tag: string
  value: string
}

export type ZabbixObjStringGeneric = {
  [key: string]: string
}

export type ZabbixSuppressionData = {
  maintenanceid: string
  suppress_until: number
}
