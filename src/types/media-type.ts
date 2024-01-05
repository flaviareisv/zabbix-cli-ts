export type ZabbixMediaType = {
  mediatypeid: string
  name: string
  type: ZabbixMediaTypeType
  exec_path: string
  gsm_modem: string
  passwd: string
  smtp_email: string
  smtp_helo: string
  smtp_server: string
  smtp_port: number
  smtp_security: ZabbixMediaTypeSMTPSecurity
  smtp_verify_host: ZabbixMediaTypeSMTPVerifyHost
  smtp_verify_peer: ZabbixMediaTypeSMTPVerifyPeer
  smtp_authentication: ZabbixMediaTypeSMTPAuthentication
  status: ZabbixMediaTypeStatus
  username: string
  exec_params: string
  maxsessions: number
  maxattempts: number
  attempt_interval: string
  content_type: ZabbixMediaTypeContentType
  script: string
  timeout: string
  process_tags: ZabbixMediaTypeProcessTags
  show_event_menu: ZabbixMediaTypeShowEventMenu
  event_menu_url: string
  event_menu_name: string
  parameters: ZabbixMediaTypeWebhookParameters[]
  description: string
}

type ZabbixMediaTypeType = 0 | 1 | 2 | 4

type ZabbixMediaTypeSMTPSecurity = 0 | 1 | 2

type ZabbixMediaTypeSMTPVerifyHost = 0 | 1

type ZabbixMediaTypeSMTPVerifyPeer = 0 | 1

type ZabbixMediaTypeSMTPAuthentication = 0 | 1

type ZabbixMediaTypeStatus = 0 | 1

type ZabbixMediaTypeContentType = 0 | 1

type ZabbixMediaTypeProcessTags = 0 | 1

type ZabbixMediaTypeShowEventMenu = 0 | 1

type ZabbixMediaTypeWebhookParameters = {
  name: string
  value: string
}
