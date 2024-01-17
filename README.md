<h1 align="center" style="border-bottom: none;">📦 zabbix-cli-ts</h1>
<h3 align="center">Zabbix API Client in TypeScript</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/zabbix-cli-ts">
    <img alt="npm latest version" src="https://img.shields.io/npm/v/zabbix-cli-ts/latest.svg">
  </a>
</p>

This is a typescript lib to make calls to the zabbix api.

> Validated in version **6.0** of Zabbix API

## Getting started

Install this lib:

```bash
npm install zabbix-cli-ts
```

The available methods are:

- apiinfo.version
- user.login
- user.logout
- user.get
- problem.get
- hostgroup.get
- host.get
- event.get
- trigger.get

## Usage examples

The example below calls the `event.get` method:

```js
import ZabbixAPI from 'zabbix-cli-ts'

async function getEvent() {
  const zabbix = new ZabbixAPI('[ZBX_URL]', '[ZBX_USER]', '[ZBX_PASS]')

  const item = await zabbix.event({
    limit: 1,
    output: 'extend'
  })

  zabbix.logout()
}

getEvent()
```

The library has a method to call any method from the zabbix api, it just won't be typed with the same call and return parameters:

```js
import ZabbixAPI from 'zabbix-cli-ts'

async function getResquest() {
  const zabbix = new ZabbixAPI('[ZBX_URL]', '[ZBX_USER]', '[ZBX_PASS]')

  const item = await zabbix.request('history.get', {
    limit: 1,
    output: 'extend'
  })

  zabbix.logout()
}

getRequest()
```
