const BaseTestUnit = require('../../BaseTestUnit');
const HttpClient = require('../../../dist/Core/HttpClient/HttpClient');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should has correct request params', async () => {
      let client = HttpClient.create();
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

    it('Should retry when request failed', async () => {
      let retries = 0;
      let client = HttpClient.create({
        retry: {
          retries: 3,
          retryDelay(retryCount, error) {
            retries = retryCount;
            return 100;
          }
        },
      });
      client = this.getMockedHttpClient(client);
      client.mock('get', 'https://example.com/test/api')
        .reply(500, {
          'foo': 'bar',
        });

      try {
        let response = await client.request('get', 'https://example.com/test/api', {
          headers: {
            accept: 'application/json'
          }
        });
      }
      catch(e) {
        this.assert.strictEqual(retries, 3);
      }

    });

  }
}

new TestUnit('Core/HttpClient/HttpClient');
