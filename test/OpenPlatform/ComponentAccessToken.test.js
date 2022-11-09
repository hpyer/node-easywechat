const BaseTestUnit = require('../BaseTestUnit');
const ComponentAccessToken = require('../../dist/OpenPlatform/ComponentAccessToken');
const VerifyTicket = require('../../dist/OpenPlatform/VerifyTicket');
const HttpClient = require('../../dist/Core/HttpClient/HttpClient');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should set and get cache key correctly', async () => {

      let token = new ComponentAccessToken(
        'mock-appid',
        'mock-secret',
        null,
      );
      this.assert.strictEqual(token.getKey(), 'open_platform.component_access_token.mock-appid');

      token.setKey('custom-token-cache-key');
      this.assert.strictEqual(token.getKey(), 'custom-token-cache-key');
    });

    it('Should get correct token from cache', async () => {
      let cache_key = 'key-component_access_token';

      let cache = this.getMockedCacheClient();
      cache.mock('cached-component_access_token', cache_key);

      let token = new ComponentAccessToken(
        'mock-appid',
        'mock-secret',
        null,
        cache_key,
        cache
      );
      this.assert.strictEqual(await token.getToken(), 'cached-component_access_token');
    });

    it('Should get correct token from server', async () => {
      let result = {
        component_access_token: 'mock-component_access_token',
        expires_in: '7200',
      };

      let cache = this.getMockedCacheClient();
      cache.mock('mock-verify_ticket', 'key-verify_ticket');

      let ticket = new VerifyTicket('mock-appid', 'key-verify_ticket', cache);

      let client = this.getMockedHttpClient(HttpClient.create());
      client.mock('post', '/cgi-bin/component/api_component_token').reply(200, result);

      let token = new ComponentAccessToken(
        'mock-appid',
        'mock-secret',
        ticket,
        null,
        cache,
        client,
      );

      this.assert.strictEqual(await token.getToken(), result.component_access_token);
    });

  }
}

new TestUnit('OpenPlatform/ComponentAccessToken');
