const BaseTestUnit = require('../BaseTestUnit');
const Server = require('../../dist/Pay/Server');
const Merchant = require('../../dist/Pay/Merchant');
const { ServerRequest } = require('../../dist/');
const Path = require('path');

class TestUnit extends BaseTestUnit {

  test() {

    let merchantConfig = {
      mch_id: 'mock-mch-id',
      certificate: Path.resolve(__dirname, '../temp/test_rsa_cert.pem'),
      private_key: Path.resolve(__dirname, '../temp/test_rsa_private.key'),
      v2_secret_key: 'mock-v2-secret-key',
      secret_key: '0123456789abcdef0123456789abcdef',
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

    it('Should response from event handler', async () => {
      let body = { "id": "EV-2018022511223320873", "create_time": "2015-05-20T13:29:35+08:00", "resource_type": "encrypt-resource", "event_type": "TRANSACTION.SUCCESS", "summary": "\u652f\u4ed8\u6210\u529f", "resource": { "nonce": "0123456789abcdef", "associated_data": "mockaad", "ciphertext": "E70TloqenrKxuodHJa/pi4JcH5iMkg/auLbh82nv" } };
      let request = new ServerRequest('POST', 'http://www.easywechat.com/', {}, body);

      let server = new Server(merchant, request);

      server.with((message, next) => {
        this.assert.strictEqual(message.attributes['foo'], 'bar');
      });

      let response = await server.serve();

      this.assert.strictEqual(response.getBody().toString(), '{"code":"SUCCESS","message":"成功"}');
    });

  }
}

new TestUnit('Pay/Server');
