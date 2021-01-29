
const BaseClientTest = require('../BaseClientTest');
const EasyWechat = require('../../dist');
const Utils = require('../../dist/Core/Utils');
const Xml2js = require('xml2js');

class TestUnit extends BaseClientTest {

  test() {

    let xml = `<xml>
<req_info>eS7yGNBVkDf6Ufcsw7pL/dYFubMjMQglJCS1w9HIfH8=</req_info>
<sign>7E802A0EF3492B74CDEB4CD3EE5F85EE</sign>
</xml>`;

    let req = {};
    req.url = 'https://www.example.com/wx/notify/refunded';
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
      response = await this.app.handleRefundedNotify(async (message, reqInfo, setFail) => {

        this.assert.deepStrictEqual(reqInfo, {
          foo: {
            bar: '123'
          },
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

    it(`Should response FAIL`, async () => {
      response = await this.app.handleRefundedNotify(async (message, reqInfo, setFail) => {
        return false;
      });

      let res = await Xml2js.parseStringPromise(response.content);
      res = Utils.singleItem(res);
      if (res['xml']) res = res['xml'];
      this.assert.deepStrictEqual(res, {
        root: {
          return_code: 'FAIL',
          return_msg: '',
        }
      });
    });

    it(`Should response FAIL with none return`, async () => {
      response = await this.app.handleRefundedNotify(async (message, reqInfo, setFail) => {
      });

      let res = await Xml2js.parseStringPromise(response.content);
      res = Utils.singleItem(res);
      if (res['xml']) res = res['xml'];
      this.assert.deepStrictEqual(res, {
        root: {
          return_code: 'FAIL',
          return_msg: '',
        }
      });
    });

    it(`Should response FAIL with custom error message`, async () => {
      response = await this.app.handleRefundedNotify(async (message, reqInfo, setFail) => {
        setFail('custom_error');
      });

      let res = await Xml2js.parseStringPromise(response.content);
      res = Utils.singleItem(res);
      if (res['xml']) res = res['xml'];
      this.assert.deepStrictEqual(res, {
        root: {
          return_code: 'FAIL',
          return_msg: 'custom_error',
        }
      });
    });

  }
}

new TestUnit('Payment', 'NotifyRefunded', {
  app_id: 'abc@123',
  key: '88888888888888888888888888888888',
  mch_id: '888888',
});
