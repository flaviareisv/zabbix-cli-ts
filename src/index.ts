import { ZabbixAPI } from './zabbix-api'

export default ZabbixAPI
export {
  ZabbixAlert,
  ZabbixEvent,
  ZabbixEventAcknowledgeAction,
  ZabbixEventGetParams,
  ZabbixGetParamsCommon,
  zabbixGraph,
  ZabbixHost,
  ZabbixHostGetParams,
  ZabbixHostGroup,
  ZabbixHostGroupGetParams,
  ZabbixHostInterface,
  ZabbixHTTPTest,
  ZabbixItem,
  ZabbixLLDRule,
  ZabbixMediaType,
  ZabbixProblem,
  ZabbixProblemGetParams,
  ZabbixRole,
  ZabbixTemplate,
  ZabbixTemplateDashboard,
  ZabbixTrigger,
  ZabbixTriggerGetParams,
  ZabbixUser,
  ZabbixUserGetParams,
  ZabbixUserLoginParams,
  ZabbixUserGroup,
  ZabbixUserMacro,
  ZabbixValueMap,
  ZabbixObjStringGeneric,
  ZabbixSeverity,
  ZabbixTag,
  ZabbixResponse,
  ZabbixEventAcknowledge,
  ZabbixProblemGetSelectAcknowledges
} from './types'
export { IZabbix, IZabbixAPI } from './interfaces'
export { ZabbixRequestOptions } from './zabbix-fetch'
