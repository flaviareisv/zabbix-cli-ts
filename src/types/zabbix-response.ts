export type ZabbixResponse<T> = {
  jsonrpc: string
  result: T[] | T
  id: number
}
