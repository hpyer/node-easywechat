const BaseTestUnit = require('../BaseTestUnit');
const AccessToken = require('../../dist/MiniApp/AccessToken');
const HttpClient = require('../../dist/Core/HttpClient/HttpClient');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should fetch correct access_token from network', async () => {
      let result = {
        'access_token': 'mock-access_token',
        'expires_in': '1500',
      };

      let client = this.getMockedHttpClient(HttpClient.create());
      client.mock('get', 'cgi-bin/token').reply(200, result);

      let accessToken = new AccessToken(
        'mock-access_token-appid',
        'mock-access_token-secret',
        null,
        null,
        client
      );
      this.assert.strictEqual(await accessToken.getToken(), result.access_token);
    });

    it('Should fetch correct access_token from cache', async () => {
      let result = {
        'access_token': 'mock-access_token',
        'expires_in': '1500',
      };

      let cache = this.getMockedCacheClient();
      cache.mock(result.access_token);

      let accessToken = new AccessToken(
        'mock-access_token-appid',
        'mock-access_token-secret',
        null,
        cache
      );
      this.assert.strictEqual(await accessToken.getToken(), result.access_token);
    });

    it('Should use custom key for cache correctly', () => {
      let key = 'mock-access_token-cache-key';

      let accessToken = new AccessToken(
        'mock-access_token-appid',
        'mock-access_token-secret',
        key
      );
      this.assert.strictEqual(accessToken.getKey(), key);
    });

  }
}

new TestUnit('MiniApp/AccessToken');
