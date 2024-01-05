export type ZabbixUserLoginParams = {
  password: string
  username: string
  userData?: boolean | null
  /** @deprecated This parameter is deprecated, please use username instead */
  user?: string
}
