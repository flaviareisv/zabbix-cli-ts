import ZabbixAPI from '../src/zabbix-api'

describe('Method Host group (e2e)', () => {
  let zabbix: ZabbixAPI

  beforeEach(() => {
    zabbix = new ZabbixAPI()
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
