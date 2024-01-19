import ZabbixAPI from '../src/index'

describe('Method Problem (e2e)', () => {
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

  it('checks the return object in problem.get', async () => {
    const items = await zabbix.problem({
      severities: [5, 4, 3, 2, 1, 0],
      limit: 1,
      output: 'extend'
    })
    expect(items).toEqual({
      jsonrpc: '2.0',
      result: expect.arrayContaining([
        {
          eventid: expect.any(String),
          source: expect.any(String),
          object: expect.any(String),
          objectid: expect.any(String),
          clock: expect.any(String),
          ns: expect.any(String),
          r_eventid: expect.any(String),
          r_clock: expect.any(String),
          r_ns: expect.any(String),
          correlationid: expect.any(String),
          userid: expect.any(String),
          name: expect.any(String),
          acknowledged: expect.any(String),
          severity: expect.any(String),
          opdata: expect.any(String),
          suppressed: expect.any(String),
          urls: expect.anything()
        }
      ]),
      id: expect.any(Number)
    })
  })
})
