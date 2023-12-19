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
      v2_secret_key: '88888888888888888888888888888888',
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

    it('Should handle V3 message correctly', async () => {
      let body = { "id": "EV-2018022511223320873", "create_time": "2015-05-20T13:29:35+08:00", "resource_type": "encrypt-resource", "event_type": "TRANSACTION.SUCCESS", "summary": "\u652f\u4ed8\u6210\u529f", "resource": { "nonce": "0123456789abcdef", "associated_data": "mockaad", "ciphertext": "E70TloqenrKxuodHJa/pi4JcH5iMkg/auLbh82nv" } };
      let request = new ServerRequest(
        'POST',
        'http://www.easywechat.com/',
        {},
        body
      );

      let server = new Server(merchant, request);

      server.with((message, next) => {
        this.assert.strictEqual(message.attributes['foo'], 'bar');
      });

      let response = await server.serve();

      this.assert.strictEqual(response.getBody().toString(), '{"code":"SUCCESS","message":"成功"}');
    });

    it('Should handle V2 message correctly', async () => {
      let body = `<xml>
<foo>bar</foo>
<sign>834A25C9A5B48305AB997C9A7E101530</sign>
</xml>`;
      let request = new ServerRequest(
        'POST',
        'http://www.easywechat.com/',
        { 'Content-Type': 'text/xml', },
        body
      );

      let server = new Server(merchant, request);

      server.with((message, next) => {
        this.assert.strictEqual(message.attributes['foo'], 'bar');
      });

      let response = await server.serve();

      this.assert.strictEqual(response.getBody().toString(), '<xml><return_code>SUCCESS</return_code><return_msg/></xml>');
    });

    it('Should handle V2 message (with req_info) correctly', async () => {
      let body = `<xml>
<req_info>eS7yGNBVkDf6Ufcsw7pL/dYFubMjMQglJCS1w9HIfH8=</req_info>
<sign>7E802A0EF3492B74CDEB4CD3EE5F85EE</sign>
</xml>`;
      let request = new ServerRequest(
        'POST',
        'http://www.easywechat.com/',
        { 'Content-Type': 'text/xml', },
        body
      );

      let server = new Server(merchant, request);

      server.with((message, next) => {
        this.assert.deepStrictEqual(message.toObject(), {
          foo: {
            bar: '123'
          },
        });
      });

      let response = await server.serve();

      this.assert.strictEqual(response.getBody().toString(), '<xml><return_code>SUCCESS</return_code><return_msg/></xml>');
    });

  }
}

new TestUnit('Pay/Server');
