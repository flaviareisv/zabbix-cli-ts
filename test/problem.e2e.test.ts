import Zabbix from '../src/zabbix'

describe('Method problem (e2e)', () => {
  let zabbix: Zabbix

  beforeEach(() => {
    zabbix = new Zabbix()
  })

  afterEach(() => {
    zabbix.logout()
  })

  it('checks the return object in problem.get', async () => {
    const items = await zabbix.problem({
      severities: [5, 4, 3, 2, 1, 0],
      limit: 1,
      output: 'extend'
    })
    expect(items).toEqual({
      jsonrpc: '2.0',
      result: expect.arrayContaining([
        {
          eventid: expect.any(String),
          source: expect.any(String),
          object: expect.any(String),
          objectid: expect.any(String),
          clock: expect.any(String),
          ns: expect.any(String),
          r_eventid: expect.any(String),
          r_clock: expect.any(String),
          r_ns: expect.any(String),
          correlationid: expect.any(String),
          userid: expect.any(String),
          name: expect.any(String),
          acknowledged: expect.any(String),
          severity: expect.any(String),
          opdata: expect.any(String),
          suppressed: expect.any(String),
          urls: expect.anything()
        }
      ]),
      id: expect.any(Number)
    })
  })
})
