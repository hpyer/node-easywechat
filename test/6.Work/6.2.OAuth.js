
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it(`Should redirect to the config url`, async () => {
      let url = await this.app.oauth.redirect();
      this.assert.strictEqual(url, 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=abc%40123&redirect_uri=http%3A%2F%2Fwww.example.com%2Fwx%2Flogin%2Fcallback&response_type=code&scope=snsapi_userinfo&agentid=&state=#wechat_redirect');
    });

    it(`Should redirect with custom data`, async () => {
      let url = await this.app.oauth.scopes('test_scope').state('test_state').setAgentId(10000).redirect('http://www.test.com/wx/login/callback');
      this.assert.strictEqual(url, 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=abc%40123&redirect_uri=http%3A%2F%2Fwww.test.com%2Fwx%2Flogin%2Fcallback&response_type=code&scope=test_scope&agentid=10000&state=test_state#wechat_redirect');
    });

  }
}

new TestUnit('Work', 'oauth', {
  corp_id: 'abc@123',
  agent_id: '100000',
  secret: '123456',
  file_cache: {
    path: './test/temp/',
  },
  oauth: {
    scope: 'snsapi_userinfo',
    callback: 'http://www.example.com/wx/login/callback',
  },
});
