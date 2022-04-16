
const BaseClientTest = require('../BaseClientTest');
const EasyWechat = require('../../dist');

class TestUnit extends BaseClientTest {

  test() {

    it(`Should response echostr`, async () => {

      let req = {};
      req.url = 'https://www.example.com/wx/server?echostr=hello';
      req.method = 'post';
      req.headers = {
        'content-length': 0,
        'content-type': 'text/xml',
        'client-ip': '123.123.123.123',
      };

      let request = new EasyWechat.Http.Request(req, {});
      this.app.rebind('request', request);

      let response = await this.app.server.serve();
      this.assert.strictEqual(response.content.toString(), 'hello');
    });



    let xml = `<xml>
<foo>bar</foo>
<sign>834A25C9A5B48305AB997C9A7E101530</sign>
</xml>`;
    let req = {};
    req.url = 'https://www.example.com/wx/server?foo=bar';
    req.method = 'post';
    req.headers = {
      'content-length': xml.length,
      'content-type': 'text/xml',
      'client-ip': '123.123.123.123',
    };

    let request = new EasyWechat.Http.Request(req, xml);

    let response = {
      content: '',
    };

    it(`Should the same message`, async () => {
      this.app.rebind('request', request);

      this.app.server.push(async function (message) {
        this.assert.deepStrictEqual(message, {
          foo: 'bar',
          sign: '834A25C9A5B48305AB997C9A7E101530',
        });

        return true;
      });

      response = await this.app.server.serve();

    });

    it(`Should response SUCCESS`, async () => {
      this.assert.strictEqual(response.content.toString(), 'success');
    });

  }
}

new TestUnit('OfficialAccount', 'Server', {
  app_id: 'abc@123',
  secret: '123456',
});
