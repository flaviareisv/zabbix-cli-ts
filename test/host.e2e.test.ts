import Zabbix from '../src/zabbix'

describe('Method host (e2e)', () => {
  let zabbix: Zabbix

  beforeEach(() => {
    zabbix = new Zabbix()
  })

  afterEach(() => {
    zabbix.logout()
  })

  it('checks the return object in host.get', async () => {
    const items = await zabbix.host({
      limit: 1,
      output: 'extend'
    })
    expect(items).toEqual({
      jsonrpc: '2.0',
      result: expect.arrayContaining([
        {
          hostid: expect.any(String),
          proxy_hostid: expect.any(String),
          host: expect.any(String),
          status: expect.any(String),
          lastaccess: expect.any(String),
          ipmi_authtype: expect.any(String),
          ipmi_privilege: expect.any(String),
          ipmi_username: expect.any(String),
          ipmi_password: expect.any(String),
          maintenanceid: expect.any(String),
          maintenance_status: expect.any(String),
          maintenance_type: expect.any(String),
          maintenance_from: expect.any(String),
          name: expect.any(String),
          flags: expect.any(String),
          templateid: expect.any(String),
          description: expect.any(String),
          tls_connect: expect.any(String),
          tls_accept: expect.any(String),
          tls_issuer: expect.any(String),
          tls_subject: expect.any(String),
          proxy_address: expect.any(String),
          auto_compress: expect.any(String),
          custom_interfaces: expect.any(String),
          uuid: expect.any(String),
          inventory_mode: expect.any(String)
        }
      ]),
      id: expect.any(Number)
    })
  })
})
