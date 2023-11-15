const BaseTestUnit = require('../BaseTestUnit');
const Merchant = require('../../dist/Pay/Merchant');
const Client = require('../../dist/Pay/Client');
const HttpClient = require('../../dist/Core/HttpClient/HttpClient');
const Path = require('path');

class TestUnit extends BaseTestUnit {

  test() {

    let merchantConfig = {
      mch_id: 'mock-mch-id',
      certificate: Path.resolve(__dirname, '../temp/test_rsa_cert.pem'),
      private_key: Path.resolve(__dirname, '../temp/test_rsa_private.key'),
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

    it('Should upload media correctly', async () => {
      let result = 'mock-upload';
      httpclient.mock('post', '/v3/merchant/media/upload').reply(200, result, { 'Content-Type': 'text/plain' });
      let response = await client.uploadMedia('/v3/merchant/media/upload', __dirname + '/../temp/blank.png');
      this.assert.strictEqual(response.toString(), result);
    });

    it('Should create order request correctly', async () => {
      let result = {
        prepay_id: 'mock-prepay_id'
      };
      httpclient.mock('post', '/v3/pay/transactions/jsapi').reply(200, result, { 'Content-Type': 'text/plain' });
      let response = await client.postJson('/v3/pay/transactions/jsapi', {
        data: {
          mchid: 'mock-mch-id',
          out_trade_no: 'mock-out_trade_no',
          appid: 'mock-appid',
          description: 'mock-description',
          notify_url: 'https://example.com/pay/callback',
          amount: {
            total: 1,
            currency: 'CNY',
          },
          payer: {
            openid: 'mock-openid',
          }
        }
      });
      this.assert.deepStrictEqual(response.toObject(), result);
    });

  }
}

new TestUnit('Pay/Client');
