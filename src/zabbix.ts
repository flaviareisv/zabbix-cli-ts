import * as dotenv from 'dotenv'
import zabbixFetch from './zabbix-fetch'

dotenv.config()

const ZABBIX_API_URL = process.env.ZABBIX_API_URL || ''
const ZABBIX_API_USER = process.env.ZABBIX_API_USER || ''
const ZABBIX_API_PASS = process.env.ZABBIX_API_PASS || ''

interface IZabbix {
  // request(method: string, params: ZabbixRequestParams): Promise<any>
  apiinfo(): Promise<string>
}

export default class Zabbix implements IZabbix {
  private readonly url: string
  private readonly user: string
  private readonly password: string

  constructor(
    url: string = ZABBIX_API_URL,
    user: string = ZABBIX_API_USER,
    password: string = ZABBIX_API_PASS
  ) {
    if (!url) {
      throw new Error('url parameter not found in constructor')
    }
    if (!user) {
      throw new Error('user parameter not found in constructor')
    }
    if (!password) {
      throw new Error('password parameter not found in constructor')
    }
    this.url = url
    this.user = user
    this.password = password
  }

  async apiinfo(): Promise<string> {
    const response = await zabbixFetch(this.url, 'apiinfo.version')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data.result
  }
}
