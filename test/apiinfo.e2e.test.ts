import Zabbix from '../src/zabbix'

describe('Method apiinfo (e2e)', () => {
  let zabbix: Zabbix

  beforeEach(() => {
    zabbix = new Zabbix()
  })

  afterEach(() => {
    zabbix.logout()
  })

  it('apiinfo successfully', async () => {
    const version = await zabbix.apiinfo()
    expect(typeof version).toBe('string')
  })
})
