import Zabbix from '../src/zabbix'

describe('Method hostgroup (e2e)', () => {
  let zabbix: Zabbix

  beforeEach(() => {
    zabbix = new Zabbix()
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
      jsonrpc: expect.any(String),
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
