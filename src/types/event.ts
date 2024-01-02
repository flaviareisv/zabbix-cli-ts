import { ZabbixSeverity } from './severity'

export type ZabbixEventAcknowledges = {
  acknowledgeid: string
  userid: string
  eventid: string
  clock: number
  message: string
  action: ZabbixEventAction
  old_severity: ZabbixSeverity
  new_severity: ZabbixSeverity
  suppress_until: number
  taskid: string
}

type ZabbixEventAction = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256
