import ZabbixAPI from '../src/zabbix-api'

describe('Method User (e2e)', () => {
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

  it('checks the return object in user.login', async () => {
    const ZABBIX_API_USER = process.env.ZABBIX_API_USER || ''
    const ZABBIX_API_PASS = process.env.ZABBIX_API_PASS || ''
    const auth = await zabbix.login({
      username: ZABBIX_API_USER,
      password: ZABBIX_API_PASS
    })
    expect(auth).toEqual({
      jsonrpc: '2.0',
      result: expect.any(String),
      id: expect.any(Number)
    })
  })

  it('checks the return object in user.get', async () => {
    const item = await zabbix.user({
      limit: 1,
      output: 'extend'
    })
    expect(item).toEqual({
      jsonrpc: '2.0',
      result: expect.arrayContaining([
        {
          userid: expect.any(String),
          username: expect.any(String),
          name: expect.any(String),
          surname: expect.any(String),
          url: expect.any(String),
          autologin: expect.any(String),
          autologout: expect.any(String),
          lang: expect.any(String),
          refresh: expect.any(String),
          theme: expect.any(String),
          attempt_failed: expect.any(String),
          attempt_ip: expect.any(String),
          attempt_clock: expect.any(String),
          rows_per_page: expect.any(String),
          timezone: expect.any(String),
          roleid: expect.any(String)
        }
      ]),
      id: expect.any(Number)
    })
  })
})
