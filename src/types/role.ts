export type ZabbixRole = {
  roleid: string
  name: string
  type: ZabbixRoleType
  readonly: ZabbixRoleReadonly
}

type ZabbixRoleType = 1 | 2 | 3

type ZabbixRoleReadonly = 0 | 1
