
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it(`Should redirect to the config url`, async () => {
      let url = await this.app.oauth.redirect();
      this.assert.strictEqual(url, 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=abc%40123&redirect_uri=http%3A%2F%2Fwww.example.com%2Fwx%2Flogin%2Fcallback&response_type=code&scope=snsapi_base#wechat_redirect');
    });

    it(`Should redirect with custom data`, async () => {
      let url = await this.app.oauth.scopes('snsapi_base').withState('test_state').setAgentId(10000).redirect('http://www.test.com/wx/login/callback');
      this.assert.strictEqual(url, 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=abc%40123&redirect_uri=http%3A%2F%2Fwww.test.com%2Fwx%2Flogin%2Fcallback&response_type=code&scope=snsapi_base&agentid=10000&state=test_state#wechat_redirect');
    });

    it(`Should fetch user from code (with detailed)`, async () => {
      this.mockRest();

      this.mockResponseMulti([
        {
          "errcode": 0,
          "errmsg": "ok",
          "access_token": "fake-access-token",
          "expires_in": 7200,
        },
        {
          "errcode": 0,
          "errmsg": "ok",
          "userid": "fake-userid",
          "user_ticket": "fake-user-ticket",
          "user_doc_ticket": "fake-user-doc-ticket"
        },
        {
          "errcode": 0,
          "errmsg": "ok",
          "userid": "fake-userid",
          "name": "fake-name",
          "department": [1, 2],
          "order": [1, 2],
          "position": "后台工程师",
          "is_leader_in_dept": [1, 0],
          "direct_leader":["lisi"],
          "alias": "fake-alias",
          "open_userid": "xxxxxx",
          "main_department": 1,
          "status": 1,
          "external_position": "产品经理"
        },
        {
          "errcode": 0,
          "errmsg": "ok",
          "userid": "fake-userid",
          "gender": "1",
          "avatar": "fake-avatar",
          "mobile": "13800000000",
          "email": "fake-email",
        },
      ]);

      let user = await this.app.oauth.detailed().userFromCode('123456');

      this.assert.strictEqual(user.id, 'fake-userid');
      this.assert.strictEqual(user.nickname, '');
      this.assert.strictEqual(user.name, 'fake-name');
      this.assert.strictEqual(user.email, 'fake-email');
      this.assert.strictEqual(user.avatar, 'fake-avatar');
      this.assert.strictEqual(user.raw.alias, 'fake-alias');
      this.assert.strictEqual(user.raw.mobile, '13800000000');
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

new TestUnit('Work', 'oauth', {
  corp_id: 'abc@123',
  agent_id: 100000,
  secret: '123456',
  file_cache: {
    path: './test/temp/',
  },
  oauth: {
    callback: 'http://www.example.com/wx/login/callback',
  },
});
