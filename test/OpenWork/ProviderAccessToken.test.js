const BaseTestUnit = require('../BaseTestUnit');
const ProviderAccessToken = require('../../dist/OpenWork/ProviderAccessToken');
const HttpClient = require('../../dist/Core/HttpClient/HttpClient');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should set and get cache key correctly', async () => {

      let token = new ProviderAccessToken(
        'mock-corpid',
        'mock-secret',
        null,
      );
      this.assert.strictEqual(token.getKey(), 'open_work.access_token.mock-corpid');

      token.setKey('custom-token-cache-key');
      this.assert.strictEqual(token.getKey(), 'custom-token-cache-key');
    });

    it('Should get correct token from cache', async () => {
      let cache_key = 'key-provider_access_token';

      let cache = this.getMockedCacheClient();
      cache.mock('cached-provider_access_token', cache_key);

      let token = new ProviderAccessToken(
        'mock-corpid',
        'mock-secret',
        cache_key,
        cache
      );
      this.assert.strictEqual(await token.getToken(), 'cached-provider_access_token');
    });

    it('Should get correct token from server', async () => {
      let result = {
        provider_access_token: 'fake-provider_access_token',
        expires_in: '7200',
      };

      let cache = this.getMockedCacheClient();
      cache.mock('mock-verify_ticket', 'key-verify_ticket');

      let client = this.getMockedHttpClient(HttpClient.create());
      client.mock('post', '/cgi-bin/service/get_provider_token').reply(200, result);

      let token = new ProviderAccessToken(
        'mock-corpid',
        'mock-secret',
        null,
        cache,
        client,
      );

      this.assert.strictEqual(await token.getToken(), result.provider_access_token);
    });

  }
}

new TestUnit('OpenWork/ProviderAccessToken');
