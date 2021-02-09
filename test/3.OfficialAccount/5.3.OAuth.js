
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it(`Should redirect to the config url`, async () => {
      let url = await this.app.oauth.redirect();
      this.assert.strictEqual(url, 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=abc%40123&redirect_uri=http%3A%2F%2Fwww.example.com%2Fwx%2Flogin%2Fcallback&response_type=code&scope=snsapi_userinfo&state=&connect_redirect=1#wechat_redirect');
    });

    it(`Should redirect with custom data`, async () => {
      let url = await this.app.oauth.scopes('test_scope').state('test_state').redirect('http://www.test.com/wx/login/callback');
      this.assert.strictEqual(url, 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=abc%40123&redirect_uri=http%3A%2F%2Fwww.test.com%2Fwx%2Flogin%2Fcallback&response_type=code&scope=test_scope&state=test_state&connect_redirect=1#wechat_redirect');
    });

    let access_token = null;
    it(`Should fetch AccessToken`, async () => {
      this.mockResponse(JSON.stringify({
        openid: 'fake-openid',
        access_token: 'fake-access-token',
        refresh_token: 'fake-refresh-token',
        expires_in: 7200,
      }));
      access_token = await this.mockRequest('getToken');

      this.assert.strictEqual(access_token.openid, 'fake-openid');
      this.assert.strictEqual(access_token.access_token, 'fake-access-token');
      this.assert.strictEqual(access_token.refresh_token, 'fake-refresh-token');
      this.assert.strictEqual(access_token.expires_in, 7200);
    });

    it(`Should fetch User`, async () => {
      this.mockResponse(JSON.stringify({
        errcode: 0,
        openid: 'fake-openid',
        nickname: 'fake-nickname',
        headimgurl: 'fake-headimgurl',
      }));
      let user = await this.mockRequest('user', 'fake-code', access_token);

      this.assert.strictEqual(user.id, 'fake-openid');
      this.assert.strictEqual(user.nickname, 'fake-nickname');
      this.assert.strictEqual(user.avatar, 'fake-headimgurl');
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
