const BaseTestUnit = require('../BaseTestUnit');
const { Pay, ServerRequest } = require('../../dist');
const Merchant = require('../../dist/Pay/Merchant');
const Server = require('../../dist/Pay/Server');
const Utils = require('../../dist/Pay/Utils');
const HttpClient = require('../../dist/Core/HttpClient/HttpClient');
const Path = require('path');
const RSA = require('../../dist/Core/Support/RSA');
const { getTimestamp, randomString } = require('../../dist/Core/Support/Utils');
const Message = require('../../dist/Pay/Message');
const { PublicKey } = require('../../dist/Core/Support/PublicKey');

class TestUnit extends BaseTestUnit {

  test() {

    let payConfig = {
      mch_id: 'mock-mch-id',
      certificate: Path.resolve(__dirname, '../temp/test_rsa_cert.pem'),
      private_key: Path.resolve(__dirname, '../temp/test_rsa_private.key'),
      v2_secret_key: 'mock-v2-secret-key',
      secret_key: 'mock-secret-key',
      platform_certs: [
        Path.resolve(__dirname, '../temp/test_rsa_cert.pem'),
      ],
    };
    const app = new Pay(payConfig);

    it('Should create correct instance', async () => {
      this.assert.strictEqual(app instanceof Pay, true);
    });

    it('Should set and get merchant successful', async () => {
      this.assert.strictEqual(app.getMerchant() instanceof Merchant, true);

      let merchant = new Merchant('mock-merchant-mchid', payConfig.private_key, payConfig.certificate, 'mock-merchant-secret', 'mock-merchant-token');
      app.setMerchant(merchant);
      this.assert.deepStrictEqual(app.getMerchant(), merchant);
    });

    it('Should set and get server successful', async () => {
      let request = new ServerRequest('GET', 'http://www.easywechat.com/?echostr=mock-echostr');
      app.setRequest(request);
      let server = new Server(request);
      app.setServer(server);
      this.assert.deepStrictEqual(app.getServer(), server);
    });

    it('Should get utils successful', async () => {
      this.assert.strictEqual(app.getUtils() instanceof Utils, true);
    });

    it('Should set data successful by using with()', async () => {
      let result = 'mock-post';
      let httpclient = this.getMockedHttpClient(HttpClient.create());
      httpclient.mock('post', '/test-url').reply(200, result, { 'Content-Type': 'text/plain' });
      app.setHttpClient(httpclient);

      let client = app.getClient();
      let response = await client.withMchId().with('foo', 'bar').post('/test-url');
      this.assert.strictEqual(response.response.config.data, '{"mch_id":"mock-mch-id","foo":"bar"}');
      this.assert.strictEqual(response.toString(), result);
    });

    it('Should use Validator correctly', async () => {
      let app = new Pay(payConfig);
      let merchant = app.getMerchant();

      // v3
      let timestamp = getTimestamp();
      let nonce = randomString(8);
      let serial = merchant.getCertificate().getSerialNo();
      let body = 'mock-body';
      let message = `${timestamp}\n${nonce}\n${body}\n`;

      let rsa = new RSA;
      rsa.setPublicKey(merchant.getCertificate().toString());
      rsa.setPrivateKey(merchant.getPrivateKey().toString());
      let sign = rsa.sign(message);

      let validator = app.getValidator();
      let request = new ServerRequest('GET', 'http://www.easywechat.com/', {
        'Wechatpay-Timestamp': timestamp,
        'Wechatpay-Nonce': nonce,
        'Wechatpay-Serial': serial,
        'Wechatpay-Signature': sign,
      }, body);

      let result = await validator.validate(request);

      this.assert.strictEqual(result, true);

      // v2
      let messageV2 = new Message({
        appId: 'mock-appid',
        timeStamp: '1601234567',
        nonceStr: 'mock-nonce',
        package: "prepay_id=mock-prepay-id",
        signType: 'MD5',
        sign: 'C52D6B09E8A039D6E8696A014BB37160',
      });
      let resultV2 = validator.validateV2(messageV2);

      this.assert.strictEqual(resultV2, true);
    });

    it('Should use load platform certs correctly', async () => {
      delete payConfig.platform_certs;
      payConfig.secret_key = 'mock-secret-key1mock-secret-key1';
      let app = new Pay(payConfig);

      let now = new Date;
      now.setTime(now.getTime() + 87000*1000);  // 确保默认证书有效期一天以上
      let httpclient = this.getMockedHttpClient(app.getHttpClient());
      httpclient.mock('get', '/v3/certificates').reply(200, {
        data: [
          {
            serial_no: 'fake-serial_no',
            effective_time: '2018-06-08T10:34:56+08:00',
            expire_time: now.toISOString(),
            encrypt_certificate: {
              algorithm: 'AEAD_AES_256_GCM',
              nonce: '61f9c719728a',
              associated_data: 'certificate',
              ciphertext: 'uSoUWvLdxCjDQgZd6pTFmnSGS2ifBGdw5awOgYejbg==',
            },
          }
        ]
      });
      app.setHttpClient(httpclient);

      let merchant = app.getMerchant();
      await merchant.loadPlatformCerts();
      let cert = await merchant.getPlatformCert('fake-serial_no');
      this.assert.strictEqual(cert instanceof PublicKey, true);
      this.assert.strictEqual(cert.getValue().toString(), 'fake-ciphertext');
    });

  }
}

new TestUnit('Pay/Application');
