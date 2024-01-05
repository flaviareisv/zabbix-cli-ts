export type ZabbixTemplateDashboard = {
  dashboardid: string
  name: string
  templateid: string
  display_period: ZabbixTemplateDashboardDisplayPeriod
  auto_start: ZabbixTemplateDashboardAutoStart
  uuid: string
}

type ZabbixTemplateDashboardDisplayPeriod =
  | 10
  | 30
  | 60
  | 120
  | 600
  | 1800
  | 3600

type ZabbixTemplateDashboardAutoStart = 0 | 1
