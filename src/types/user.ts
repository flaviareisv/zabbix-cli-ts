import { ZabbixGetParamsCommon } from './get-common'
import { ZabbixMediaType } from './media-type'
import { ZabbixRole } from './role'
import { ZabbixUserGroup } from './user-group'

export type ZabbixUserLoginParams = {
  password: string
  username: string
  userData?: boolean | null
}

export type ZabbixUser = {
  userid: string
  username: string
  roleid: string
  attempt_clock: number
  attempt_failed: number
  attempt_ip: string
  autologin: ZabbixUserAutologin
  autologout: string
  lang: string
  name: string
  refresh: string
  rows_per_page: number
  surname: string
  theme: string
  url: string
  timezone: string
}

type ZabbixUserAutologin = 0 | 1

export type ZabbixUserGetParams = {
  mediaids?: string | string[]
  mediatypeids?: string | string[]
  userids?: string | string[]
  usrgrpids?: string | string[]
  getAccess?: boolean | null
  selectMedias?: ZabbixUserGetSelectMedias[] | 'extend'
  selectMediatypes?: ZabbixUserGetSelectMediatypes[] | 'extend'
  selectUsrgrps?: ZabbixUserGetSelectUsrgrps[] | 'extend'
  selectRole?: ZabbixUserGetSelectRole[] | 'extend'
} & ZabbixGetParamsCommon

type ZabbixUserGetSelectMedias = keyof ZabbixUserMedia

type ZabbixUserGetSelectMediatypes = keyof ZabbixMediaType

type ZabbixUserGetSelectUsrgrps = keyof ZabbixUserGroup

type ZabbixUserGetSelectRole = keyof ZabbixRole

type ZabbixUserMedia = {
  mediatypeid: string
  sendto: string | string[]
  active: ZabbixUserMediaActive
  severity: number
  period: string
}

type ZabbixUserMediaActive = 0 | 1
