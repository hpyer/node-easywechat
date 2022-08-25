const BaseTestUnit = require('../BaseTestUnit');
const { Pay, ServerRequest } = require('../../dist');
const Merchant = require('../../dist/Pay/Merchant');
const Server = require('../../dist/Pay/Server');
const Utils = require('../../dist/Pay/Utils');
const HttpClient = require('../../dist/Core/HttpClient/HttpClient');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should create correct instance', async () => {
      let app = new Pay({
        mch_id: 'mock-mch-id',
        certificate: '../temp/test_public_key.pem',
        private_key: '../temp/test_private_key.pem',
        v2_secret_key: 'mock-v2-secret-key',
        secret_key: 'mock-secret-key',
        platform_certs: [],
      });

      this.assert.strictEqual(app instanceof Pay, true);
    });

    it('Should set and get merchant successful', async () => {
      let app = new Pay({
        mch_id: 'mock-mch-id',
        certificate: '../temp/test_public_key.pem',
        private_key: '../temp/test_private_key.pem',
        v2_secret_key: 'mock-v2-secret-key',
        secret_key: 'mock-secret-key',
        platform_certs: [],
      });

      this.assert.strictEqual(app.getMerchant() instanceof Merchant, true);

      let merchant = new Merchant('mock-merchant-mchid', 'mock-merchant-secret', 'mock-merchant-token');
      app.setMerchant(merchant);
      this.assert.deepStrictEqual(app.getMerchant(), merchant);
    });

    it('Should set and get server successful', async () => {
      let app = new Pay({
        mch_id: 'mock-mch-id',
        certificate: '../temp/test_public_key.pem',
        private_key: '../temp/test_private_key.pem',
        v2_secret_key: 'mock-v2-secret-key',
        secret_key: 'mock-secret-key',
        platform_certs: [],
      });

      let request = new ServerRequest('GET', 'http://www.easywechat.com/?echostr=mock-echostr');
      let server = new Server(request);
      app.setServer(server);
      this.assert.deepStrictEqual(app.getServer(), server);
    });

    it('Should get utils successful', async () => {
      let app = new Pay({
        mch_id: 'mock-mch-id',
        certificate: '../temp/test_public_key.pem',
        private_key: '../temp/test_private_key.pem',
        v2_secret_key: 'mock-v2-secret-key',
        secret_key: 'mock-secret-key',
        platform_certs: [],
      });

      this.assert.strictEqual(app.getUtils() instanceof Utils, true);
    });

    it('Should set data successful by using with()', async () => {
      let app = new Pay({
        mch_id: 'mock-mch-id',
        certificate: '../temp/test_public_key.pem',
        private_key: '../temp/test_private_key.pem',
        v2_secret_key: 'mock-v2-secret-key',
        secret_key: 'mock-secret-key',
        platform_certs: [],
      });

      let result = 'mock-post';
      let httpclient = this.getMockedHttpClient(HttpClient.create());
      httpclient.mock('post', '/test-url').reply(200, result, { 'Content-Type': 'text/plain' });
      app.setHttpClient(httpclient);

      let client = app.getClient();
      let response = await client.withMchId().with('foo', 'bar').post('/test-url');
      this.assert.strictEqual(response.response.config.data, '{"mch_id":"mock-mch-id","foo":"bar"}');
      this.assert.strictEqual(response.toString(), result);
    });

  }
}

new TestUnit('Pay/Application');
