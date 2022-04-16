
const BaseClientTest = require('../BaseClientTest');
const EasyWechat = require('../../dist');
const { parseXml } = require('../../dist/Core/Utils');

class TestUnit extends BaseClientTest {

  test() {

    let xml = `<xml>
<foo>bar</foo>
<sign>280F9CB28E99DC917792FCC7AC1B88C4</sign>
</xml>`;

    let req = {};
    req.url = 'https://www.example.com/wx/notify/scanned';
    req.method = 'post';
    req.headers = {
      'content-length': xml.length,
      'content-type': 'text/xml',
      'client-ip': '123.123.123.123',
    };

    let request = new EasyWechat.Http.Request(req, xml);

    this.app.rebind('request', request);

    let response = {
      content: ''
    };

    it(`Should the same message`, async () => {
      response = await this.app.handleScannedNotify(async (message, setFail, setAlert) => {

        this.assert.deepStrictEqual(message, {
          foo: 'bar',
          sign: '280F9CB28E99DC917792FCC7AC1B88C4',
        });

        return 'prepay-id';
      });
    });

    it(`Should response SUCCESS`, async () => {
      let res = await parseXml(response.content);

      this.assert.strictEqual(res.return_code !== undefined, true);
      this.assert.strictEqual(res.return_msg !== undefined, true);
      this.assert.strictEqual(res.result_code !== undefined, true);
      this.assert.strictEqual(res.err_code_des !== undefined, true);
      this.assert.strictEqual(res.appid !== undefined, true);
      this.assert.strictEqual(res.mch_id !== undefined, true);
      this.assert.strictEqual(res.nonce_str !== undefined, true);
      this.assert.strictEqual(res.prepay_id, 'prepay-id');
      this.assert.strictEqual(res.sign !== undefined, true);
    });

    it(`Should response FAIL with custom error message`, async () => {
      response = await this.app.handleScannedNotify(async (message, setFail, setAlert) => {
        setFail('custom_error');
      });

      let res = await parseXml(response.content);
      this.assert.strictEqual(res.return_code, 'FAIL');
      this.assert.strictEqual(res.return_msg, 'custom_error');
      this.assert.strictEqual(res.result_code, 'FAIL');
      this.assert.strictEqual(res.err_code_des, '');
      this.assert.strictEqual(res.sign !== undefined, true);
    });

  }
}

new TestUnit('Payment', 'NotifyScanned', {
  app_id: 'abc@123',
  key: '88888888888888888888888888888888',
  mch_id: '888888',
});
