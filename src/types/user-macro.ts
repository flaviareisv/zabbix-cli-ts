export type ZabbixUserMacro = {
  globalmacroid: string
  macro: string
  value: string
  type: ZabbixUserMacroType
  description: string
}

type ZabbixUserMacroType = 0 | 1 | 2
