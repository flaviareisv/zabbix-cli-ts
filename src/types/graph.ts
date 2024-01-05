export type zabbixGraph = {
  graphid: string
  height: number
  name: string
  width: string
  flags: ZabbixGraphFlag
  graphtype: ZabbixGraphType
  percent_left: number
  percent_right: number
  show_3d: ZabbixGraphShow3D
  show_legend: ZabbixGraphShowLegend
  show_work_period: ZabbixGraphShowWorkPeriod
  show_triggers: ZabbixGraphShowTriggers
  templateid: string
  yaxismax: number
  yaxismin: number
  ymax_itemid: string
  ymax_type: ZabbixGraphYmaxType
  ymin_itemid: string
  ymin_type: ZabbixGraphYminType
  uuid: string
}

type ZabbixGraphFlag = 0 | 4

type ZabbixGraphType = 0 | 1 | 2 | 3

type ZabbixGraphShow3D = 0 | 1

type ZabbixGraphShowLegend = 0 | 1

type ZabbixGraphShowWorkPeriod = 0 | 1

type ZabbixGraphShowTriggers = 0 | 1

type ZabbixGraphYmaxType = 0 | 1 | 2

type ZabbixGraphYminType = 0 | 1 | 2
