
const BaseClientTest = require('../BaseClientTest');
const EasyWechat = require('../../dist');
const Utils = require('../../dist/Core/Utils');
const Xml2js = require('xml2js');

class TestUnit extends BaseClientTest {

  test() {

    let xml = `<xml>
<foo>bar</foo>
<sign>834A25C9A5B48305AB997C9A7E101530</sign>
</xml>`;

    let req = {};
    req.url = 'https://www.example.com/wx/notify';
    req.method = 'post';
    req.headers = {
      'content-length': xml.length,
      'content-type': 'text/xml',
      'client-ip': '123.123.123.123',
    };

    let request = new EasyWechat.Http.Request(req, xml);

    this.app.rebind('request', request);

    let response;

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
      let res = await Xml2js.parseStringPromise(response.content);
      res = Utils.singleItem(res);
      if (res['xml']) res = res['xml'];
      this.assert.deepStrictEqual(res, {
        root: {
          return_code: 'SUCCESS',
          return_msg: '',
        }
      });
    });

  }
}

new TestUnit('Payment', 'notify', {
  app_id: 'abc@123',
  key: '88888888888888888888888888888888',
  mch_id: '888888',
});
