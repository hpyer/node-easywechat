
const BaseClientTest = require('../BaseClientTest');
const EasyWechat = require('../../dist');

class TestUnit extends BaseClientTest {

  test() {

    let xml = `<xml>
<AppId>wx-appid</AppId>
<InfoType>component_verify_ticket</InfoType>
<ComponentVerifyTicket>mock-verify-ticket</ComponentVerifyTicket>
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

    it(`Should response SUCCESS`, async () => {
      this.app.rebind('request', request);

      let response = await this.app.server.serve();

      this.assert.strictEqual(response.content.toString(), 'success');
    });

  }
}

new TestUnit('OpenPlatform', 'Server', {
  app_id: 'mock-app_id',
  secret: 'mock-secret',
  token: 'mock-token',
  aes_key: 'mock-aes_key',
  file_cache: {
    path: './test/temp/',
  },
});
