export type ZabbixUserGroup = {
  usrgrpid: string
  name: string
  debug_mode: ZabbixUserGroupDebugMode
  gui_access: ZabbixUserGroupGuiAccess
  users_status: ZabbixUserGroupUsersStatus
}

type ZabbixUserGroupDebugMode = 0 | 1

type ZabbixUserGroupGuiAccess = 0 | 1 | 2 | 3

type ZabbixUserGroupUsersStatus = 0 | 1
