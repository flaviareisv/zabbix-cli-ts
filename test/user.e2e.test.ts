import ZabbixAPI from '../src/zabbix-api'

describe('Method User (e2e)', () => {
  let zabbix: ZabbixAPI

  beforeEach(() => {
    zabbix = new ZabbixAPI()
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
})
