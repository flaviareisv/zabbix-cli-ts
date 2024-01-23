import ZabbixAPI from '../src/index'

describe('Method Host group (e2e)', () => {
  let zabbix: ZabbixAPI

  beforeEach(() => {
    const ZABBIX_API_URL = process.env.ZABBIX_API_URL || ''
    const ZABBIX_API_USER = process.env.ZABBIX_API_USER || ''
    const ZABBIX_API_PASS = process.env.ZABBIX_API_PASS || ''

    zabbix = new ZabbixAPI(ZABBIX_API_URL, ZABBIX_API_USER, ZABBIX_API_PASS)
  })

  afterEach(() => {
    zabbix.logout()
  })

  it('checks the return object in hostgroup.get', async () => {
    const items = await zabbix.hostGroup({
      limit: 1,
      output: 'extend'
    })
    expect(items).toEqual({
      jsonrpc: '2.0',
      result: expect.arrayContaining([
        {
          groupid: expect.any(String),
          name: expect.any(String),
          flags: expect.any(String),
          internal: expect.any(String),
          uuid: expect.any(String)
        }
      ]),
      id: expect.any(Number)
    })
  })
})
