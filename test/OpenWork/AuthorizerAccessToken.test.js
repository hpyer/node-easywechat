const BaseTestUnit = require('../BaseTestUnit');
const HttpClient = require('../../dist/Core/HttpClient/HttpClient');
const SuiteTicket = require('../../dist/OpenWork/SuiteTicket');
const SuiteAccessToken = require('../../dist/OpenWork/SuiteAccessToken');
const AuthorizerAccessToken = require('../../dist/OpenWork/AuthorizerAccessToken');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should get correct corpid and token', async () => {

      let cache = this.getMockedCacheClient();
      cache.mock('cached-suite_ticket', 'key-suite_ticket');
      cache.mock('cached-suite_access_token', 'key-suite_access_token');

      let ticket = new SuiteTicket('mock-suite-id', cache, 'key-suite_ticket');

      let client = this.getMockedHttpClient(HttpClient.create());

      let suiteAccessToken = new SuiteAccessToken(
        'mock-suite-id',
        'mock-suite-secret',
        ticket,
        'key-suite_access_token',
        cache,
        client,
      );

      let token = new AuthorizerAccessToken(
        'fake-corpid',
        'fake-code',
        suiteAccessToken,
        null,
        cache,
        client,
      );

      client.mock('post', '/cgi-bin/service/get_corp_token').reply(200, {
        errcode: 0,
        errmsg: 'ok',
        access_token: 'fake-access_token',
        expires_in: 7200,
      });

      this.assert.strictEqual(token.getCorpId(), 'fake-corpid');
      this.assert.strictEqual(await token.getToken(), 'fake-access_token');
      this.assert.deepStrictEqual(await token.toQuery(), {
        access_token: 'fake-access_token',
      });
    });

  }
}

new TestUnit('OpenWork/AuthorizerAccessToken');
