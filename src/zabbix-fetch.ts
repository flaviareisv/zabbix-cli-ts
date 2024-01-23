export type ZabbixRequestParams = {
  [propName: string]: any
}

function zabbixFetch(
  url: string,
  apiMethod: string,
  params: ZabbixRequestParams = {},
  authToken?: string
): Promise<Response> {
  const data = {
    jsonrpc: '2.0',
    method: apiMethod,
    params: params,
    auth: authToken || null,
    id: Math.floor(Math.random() * 100)
  }
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-rpc'
    },
    body: JSON.stringify(data)
  })
}

export default zabbixFetch
