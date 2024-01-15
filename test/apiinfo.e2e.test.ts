import ZabbixAPI from '../src/zabbix-api'

describe('Method apiinfo (e2e)', () => {
  let zbxAPI: ZabbixAPI

  beforeEach(() => {
    const ZABBIX_API_URL = process.env.ZABBIX_API_URL || ''
    const ZABBIX_API_USER = process.env.ZABBIX_API_USER || ''
    const ZABBIX_API_PASS = process.env.ZABBIX_API_PASS || ''

    zbxAPI = new ZabbixAPI(ZABBIX_API_URL, ZABBIX_API_USER, ZABBIX_API_PASS)
  })

  afterEach(() => {
    zbxAPI.logout()
  })

  it('apiinfo successfully', async () => {
    const version = await zbxAPI.apiinfo()
    expect(typeof version).toBe('string')
  })
})
