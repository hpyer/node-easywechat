const BaseTestUnit = require('../BaseTestUnit');
const Merchant = require('../../dist/Pay/Merchant');
const Client = require('../../dist/Pay/Client');
const HttpClient = require('../../dist/Core/HttpClient/HttpClient');

class TestUnit extends BaseTestUnit {

  test() {

    let merchantConfig = {
      mch_id: 'mock-mch-id',
      certificate: '../temp/test_public_key.pem',
      private_key: '../temp/test_private_key.pem',
      v2_secret_key: 'mock-v2-secret-key',
      secret_key: 'mock-secret-key',
      platform_certs: [],
    };
    let merchant = new Merchant(
      merchantConfig.mch_id,
      merchantConfig.private_key,
      merchantConfig.certificate,
      merchantConfig.secret_key,
      merchantConfig.v2_secret_key,
      merchantConfig.platform_certs,
    );

    let httpclient = this.getMockedHttpClient(HttpClient.create());

    let client = new Client(
      merchant,
      httpclient
    );

    it('Should fetch correct response with GET method', async () => {
      let result = 'mock-get';
      httpclient.mock('get', '/test-url').reply(200, result, { 'Content-Type': 'text/plain' });
      let response = await client.get('/test-url');
      this.assert.strictEqual(response.toString(), result);
    });

    it('Should fetch correct response with POST method', async () => {
      let result = 'mock-post';
      httpclient.mock('post', '/test-url').reply(200, result, { 'Content-Type': 'text/plain' });
      let response = await client.post('/test-url');
      this.assert.strictEqual(response.toString(), result);
    });

    it('Should fetch correct response with PATCH method', async () => {
      let result = 'mock-patch';
      httpclient.mock('patch', '/test-url').reply(200, result, { 'Content-Type': 'text/plain' });
      let response = await client.patch('/test-url');
      this.assert.strictEqual(response.toString(), result);
    });

    it('Should fetch correct response with PUT method', async () => {
      let result = 'mock-put';
      httpclient.mock('put', '/test-url').reply(200, result, { 'Content-Type': 'text/plain' });
      let response = await client.put('/test-url');
      this.assert.strictEqual(response.toString(), result);
    });

    it('Should fetch correct response with DELETE method', async () => {
      let result = 'mock-delete';
      httpclient.mock('delete', '/test-url').reply(200, result, { 'Content-Type': 'text/plain' });
      let response = await client.delete('/test-url');
      this.assert.strictEqual(response.toString(), result);
    });

  }
}

new TestUnit('Pay/Client');
