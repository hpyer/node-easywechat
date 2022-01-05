
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it(`Should redirect to the config url`, async () => {
      let url = await this.app.oauth.redirect();
      this.assert.strictEqual(url, 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=abc%40123&redirect_uri=http%3A%2F%2Fwww.example.com%2Fwx%2Flogin%2Fcallback&scope=snsapi_userinfo&response_type=code&connect_redirect=1#wechat_redirect');
    });

    it(`Should redirect with custom data`, async () => {
      let url = await this.app.oauth.scopes('test_scope').withState('test_state').redirect('http://www.test.com/wx/login/callback');
      this.assert.strictEqual(url, 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=abc%40123&redirect_uri=http%3A%2F%2Fwww.test.com%2Fwx%2Flogin%2Fcallback&scope=test_scope&response_type=code&connect_redirect=1&state=test_state#wechat_redirect');
    });

    it(`Should fetch user from code`, async () => {

      this.mockRest();

      this.mockResponseMulti([
        {
          openid: 'fake-openid',
          access_token: 'fake-access-token',
          refresh_token: 'fake-refresh-token',
          expires_in: 7200,
        },
        {
          openid: 'fake-openid',
          nickname: 'fake-nickname',
          headimgurl: 'fake-avatar',
        },
      ]);
      let user = await this.app.oauth.userFromCode('123456');

      this.assert.strictEqual(user.id, 'fake-openid');
      this.assert.strictEqual(user.nickname, 'fake-nickname');
      this.assert.strictEqual(user.name, 'fake-nickname');
      this.assert.strictEqual(user.avatar, 'fake-avatar');
      this.assert.strictEqual(user.access_token, 'fake-access-token');
      this.assert.strictEqual(user.refresh_token, 'fake-refresh-token');
    });

    it(`Should throw error while calling old APIs.`, async () => {
      try {
        this.app.oauth.state('test');
      }
      catch (e) {
        this.assert.strictEqual(e.message, 'Please use withState() instead.');
      }

      try {
        this.app.oauth.user();
      }
      catch (e) {
        this.assert.strictEqual(e.message, 'Please use userFromCode() instead.');
      }
    });

  }
}

new TestUnit('OfficialAccount', 'oauth', {
  app_id: 'abc@123',
  secret: '123456',
  file_cache: {
    path: './test/temp/',
  },
  oauth: {
    scope: 'snsapi_userinfo',
    callback: 'http://www.example.com/wx/login/callback',
  },
});
