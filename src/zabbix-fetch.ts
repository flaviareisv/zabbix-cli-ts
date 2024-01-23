export type ZabbixRequestParams = {
  [propName: string]: any
}

export type ZabbixRequestOptions = {
  authToken?: string
  timeout?: number
}

function zabbixFetch(
  url: string,
  apiMethod: string,
  params: ZabbixRequestParams = {},
  options?: ZabbixRequestOptions
): Promise<Response> {
  const { authToken, timeout } = options || {}
  const data = {
    jsonrpc: '2.0',
    method: apiMethod,
    params: params,
    auth: authToken || null,
    id: Math.floor(Math.random() * 100)
  }
  const signal = timeout ? AbortSignal.timeout(timeout) : undefined
  console.log('TIMEOUT', timeout, signal)
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-rpc'
    },
    body: JSON.stringify(data),
    signal
  })
}

export default zabbixFetch
