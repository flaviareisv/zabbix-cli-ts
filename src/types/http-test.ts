export type ZabbixHTTPTest = {
  httptestid: string
  hostid: string
  name: string
  agent: string
  authentication: ZabbixHTTPTestAuthentication
  delay: string
  headers: string[]
  http_password: string
  http_proxy: string
  http_user: string
  retries: number
  ssl_cert_file: string
  ssl_key_file: string
  ssl_key_password: string
  status: ZabbixHTTPTestStatus
  templateid: string
  variables: string[]
  verify_host: ZabbixHTTPTestVerifyHost
  verify_peer: ZabbixHTTPTestVerifyPeer
  uuid: string
}

type ZabbixHTTPTestAuthentication = 0 | 1 | 2

type ZabbixHTTPTestStatus = 0 | 1

type ZabbixHTTPTestVerifyHost = 0 | 1

type ZabbixHTTPTestVerifyPeer = 0 | 1
