type ZabbixRequestParams = {
  [propName: string]: any
}

function zabbixFetch(
  url: string,
  apiMethod: string,
  params: ZabbixRequestParams = {}
): Promise<Response> {
  const data = {
    jsonrpc: '2.0',
    method: apiMethod,
    params: params,
    id: 1
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
