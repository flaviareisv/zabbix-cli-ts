import ZabbixAPI from '../src/index'

jest.setTimeout(50000)

describe('Method Event (e2e)', () => {
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

  it('checks the return object in event.get', async () => {
    const item = await zabbix.event({
      limit: 1,
      output: 'extend'
    })
    expect(item).toEqual({
      jsonrpc: '2.0',
      result: expect.arrayContaining([
        {
          acknowledged: expect.any(String),
          c_eventid: expect.any(String),
          clock: expect.any(String),
          correlationid: expect.any(String),
          eventid: expect.any(String),
          name: expect.any(String),
          ns: expect.any(String),
          object: expect.any(String),
          objectid: expect.any(String),
          opdata: expect.any(String),
          r_eventid: expect.any(String),
          severity: expect.any(String),
          source: expect.any(String),
          suppressed: expect.any(String),
          urls: expect.anything(),
          userid: expect.any(String),
          value: expect.any(String)
        }
      ]),
      id: expect.any(Number)
    })
  })
})
