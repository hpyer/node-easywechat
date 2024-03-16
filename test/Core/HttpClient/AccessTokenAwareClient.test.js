const BaseTestUnit = require('../../BaseTestUnit');
const { FormData } = require('../../../dist/');
const AccessTokenInterface = require('../../../dist/Core/Contracts/AccessTokenInterface');
const AccessTokenAwareClient = require('../../../dist/Core/HttpClient/AccessTokenAwareClient');
const path = require('path');

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

    it('Should send correctly data with postJson', async () => {
      let client = new AccessTokenAwareClient();
      client = this.getMockedHttpClient(client);
      client.mock('post', 'https://example.com/test/api').reply(200, 'success');

      let response = await client.postJson('https://example.com/test/api', {
        'foo': 'bar',
      });
      this.assert.deepStrictEqual(response.getInfo()['data'], '{"foo":"bar"}');
      this.assert.deepStrictEqual(response.getInfo()['method'], 'post');
    });

    it('Should send correctly data with patchJson', async () => {
      let client = new AccessTokenAwareClient();
      client = this.getMockedHttpClient(client);
      client.mock('patch', 'https://example.com/test/api').reply(200, 'success');

      let response = await client.patchJson('https://example.com/test/api', {
        'foo': 'bar',
      });
      this.assert.deepStrictEqual(response.getInfo()['data'], '{"foo":"bar"}');
      this.assert.deepStrictEqual(response.getInfo()['method'], 'patch');
    });

    it('Should send correctly data with postXml', async () => {
      let client = new AccessTokenAwareClient();
      client = this.getMockedHttpClient(client);
      client.mock('post', 'https://example.com/test/api').reply(200, 'success');

      let response = await client.postXml('https://example.com/test/api', {
        'foo': 'bar',
      });
      this.assert.deepStrictEqual(response.getInfo()['data'], '<xml><foo>bar</foo></xml>');
      this.assert.deepStrictEqual(response.getInfo()['method'], 'post');

      let response2 = await client.postXml('https://example.com/test/api', '<foo>bar</foo>');
      this.assert.deepStrictEqual(response2.getInfo()['data'], '<foo>bar</foo>');
      this.assert.deepStrictEqual(response2.getInfo()['method'], 'post');
    });

  }
}

new TestUnit('Core/HttpClient/AccessTokenAwareClient');
