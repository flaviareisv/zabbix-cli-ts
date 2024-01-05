import ZabbixAPI from '../src/zabbix-api'

describe('Method apiinfo (e2e)', () => {
  let zbxAPI: ZabbixAPI

  beforeEach(() => {
    zbxAPI = new ZabbixAPI()
  })

  afterEach(() => {
    zbxAPI.logout()
  })

  it('apiinfo successfully', async () => {
    const version = await zbxAPI.apiinfo()
    expect(typeof version).toBe('string')
  })
})
