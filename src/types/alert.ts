export type ZabbixAlert = {
  alertid: string
  actionid: string
  alerttype: ZabbixAlertType
  clock: number
  error: string
  esc_step: number
  eventid: string
  mediatypeid: string
  message: string
  retries: number
  sendto: string
  status: ZabbixAlertStatus
  subject: string
  userid: string
  p_eventid: string
  acknowledgeid: string
}

type ZabbixAlertType = 0 | 1

type ZabbixAlertStatus = 0 | 1 | 2 | 3
