const BaseTestUnit = require('../../BaseTestUnit');
const AccessTokenInterface = require('../../../dist/Core/Contracts/AccessTokenInterface');
const AccessTokenAwareClient = require('../../../dist/Core/HttpClient/AccessTokenAwareClient');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should has correct request params', async () => {
      let client = new AccessTokenAwareClient();
      client = this.getMockedHttpClient(client);
      client.mock('get', 'https://example.com/test/api').reply(200, {
        'foo': 'bar',
      });

      let response = await client.request('get', 'https://example.com/test/api', {
        headers: {
          accept: 'application/json'
        }
      });
      this.assert.strictEqual(response.getInfo()['method'], 'get');
      this.assert.strictEqual(response.getInfo()['url'], 'https://example.com/test/api');

    });

    it('Should auto convert request params', async () => {
      let client = new AccessTokenAwareClient();
      client = this.getMockedHttpClient(client);
      client.mock('get', 'https://example.com/test/api')
        .reply(200, {
          'foo': 'bar',
        });

      let response = await client.request('get', 'https://example.com/test/api', {
        xml: {
          'mock-foo': 'mock-bar'
        }
      });
      this.assert.strictEqual(response.getInfo()['method'], 'get');
      this.assert.strictEqual(response.getInfo()['data'], '<xml><mock-foo>mock-bar</mock-foo></xml>');

      let response2 = await client.request('get', 'https://example.com/test/api', {
        json: {
          'mock-foo': 'mock-bar'
        }
      });
      this.assert.strictEqual(response2.getInfo()['method'], 'get');
      this.assert.strictEqual(response2.getInfo()['data'], '{"mock-foo":"mock-bar"}');

    });

    it('Should request with AccessToken', async () => {
      let client = new AccessTokenAwareClient();
      client = this.getMockedHttpClient(client);
      client.mock('get', 'https://example.com/test/api')
        .reply(200, {
          'foo': 'bar',
        });

      client.withAccessToken(new class extends AccessTokenInterface {
        async getToken() {
          return 'mock-access-token';
        }
        async toQuery() {
          return {
            access_token: 'mock-access-token',
          };
        }
      });

      let response = await client.request('get', 'https://example.com/test/api');
      this.assert.strictEqual(response.getInfo()['url'], 'https://example.com/test/api');
      this.assert.strictEqual(JSON.stringify(response.getInfo()['params']) , '{"access_token":"mock-access-token"}');

    });

  }
}

new TestUnit('Core/HttpClient/AccessTokenAwareClient');
