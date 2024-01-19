import { ZabbixAPI } from './zabbix-api'
import { ZabbixAlert } from './types/alert'
import {
  ZabbixEvent,
  ZabbixEventAcknowledgeAction,
  ZabbixEventGetParams
} from './types/event'
import { ZabbixGetParamsCommon } from './types/get-common'
import { zabbixGraph } from './types/graph'
import { ZabbixHost, ZabbixHostGetParams } from './types/host'
import { ZabbixHostGroup, ZabbixHostGroupGetParams } from './types/host-group'
import { ZabbixHostInterface } from './types/host-interface'
import { ZabbixHTTPTest } from './types/http-test'
import { ZabbixItem } from './types/item'
import { ZabbixLLDRule } from './types/lld-rule'
import { ZabbixMediaType } from './types/media-type'
import { ZabbixProblem, ZabbixProblemGetParams } from './types/problem'
import { ZabbixRole } from './types/role'
import { ZabbixTemplate } from './types/template'
import { ZabbixTemplateDashboard } from './types/template-dashboard'
import { ZabbixTrigger, ZabbixTriggerGetParams } from './types/trigger'
import {
  ZabbixUser,
  ZabbixUserGetParams,
  ZabbixUserLoginParams
} from './types/user'
import { ZabbixUserGroup } from './types/user-group'
import { ZabbixUserMacro } from './types/user-macro'
import { ZabbixValueMap } from './types/value-map'
import {
  ZabbixObjStringGeneric,
  ZabbixSeverity,
  ZabbixTag
} from './types/zabbix-common'
import { ZabbixResponse } from './types/zabbix-response'
import { IZabbix } from './interfaces/Zabbix.interface'
import { IZabbixAPI } from './interfaces/ZabbixApi.interface'

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
  ZabbixResponse
}
export { IZabbix, IZabbixAPI }
