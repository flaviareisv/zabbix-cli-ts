import ZabbixAPI from '../src/index'

describe('Method Trigger (e2e)', () => {
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

  it('checks the return object in trigger.get', async () => {
    const item = await zabbix.trigger({
      limit: 1,
      output: 'extend'
    })
    expect(item).toEqual({
      jsonrpc: '2.0',
      result: expect.arrayContaining([
        {
          triggerid: expect.any(String),
          expression: expect.any(String),
          description: expect.any(String),
          url: expect.any(String),
          status: expect.any(String),
          value: expect.any(String),
          priority: expect.any(String),
          lastchange: expect.any(String),
          comments: expect.any(String),
          error: expect.any(String),
          templateid: expect.any(String),
          type: expect.any(String),
          state: expect.any(String),
          flags: expect.any(String),
          recovery_mode: expect.any(String),
          recovery_expression: expect.any(String),
          correlation_mode: expect.any(String),
          correlation_tag: expect.any(String),
          manual_close: expect.any(String),
          opdata: expect.any(String),
          event_name: expect.any(String),
          uuid: expect.any(String)
        }
      ]),
      id: expect.any(Number)
    })
  })
})
