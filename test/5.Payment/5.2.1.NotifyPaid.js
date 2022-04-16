
const BaseClientTest = require('../BaseClientTest');
const EasyWechat = require('../../dist');
const { parseXml } = require('../../dist/Core/Utils');

class TestUnit extends BaseClientTest {

  test() {

    let xml = `<xml>
<foo>bar</foo>
<sign>834A25C9A5B48305AB997C9A7E101530</sign>
</xml>`;

    let req = {};
    req.url = 'https://www.example.com/wx/notify/paid';
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
      response = await this.app.handlePaidNotify(async (message, setFail) => {

        this.assert.deepStrictEqual(message, {
          foo: 'bar',
          sign: '834A25C9A5B48305AB997C9A7E101530',
        });

        return true;
      });
    });

    it(`Should response SUCCESS`, async () => {
      let res = await parseXml(response.content);
      this.assert.deepStrictEqual(res, {
        return_code: 'SUCCESS',
        return_msg: '',
      });
    });

    it(`Should response FAIL`, async () => {
      response = await this.app.handlePaidNotify(async (message, setFail) => {
        return false;
      });

      let res = await parseXml(response.content);
      this.assert.deepStrictEqual(res, {
        return_code: 'FAIL',
        return_msg: '',
      });
    });

    it(`Should response FAIL with none return`, async () => {
      response = await this.app.handlePaidNotify(async (message, setFail) => {
      });

      let res = await parseXml(response.content);
      this.assert.deepStrictEqual(res, {
        return_code: 'FAIL',
        return_msg: '',
      });
    });

    it(`Should response FAIL with custom error message`, async () => {
      response = await this.app.handlePaidNotify(async (message, setFail) => {
        setFail('custom_error');
      });

      let res = await parseXml(response.content);
      this.assert.deepStrictEqual(res, {
        return_code: 'FAIL',
        return_msg: 'custom_error',
      });
    });

  }
}

new TestUnit('Payment', 'NotifyPaid', {
  app_id: 'abc@123',
  key: '88888888888888888888888888888888',
  mch_id: '888888',
});
