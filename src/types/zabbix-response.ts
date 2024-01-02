export type ZabbixResponse<T> = {
  jsonrpc: string
  result: T[]
  id: number
}
