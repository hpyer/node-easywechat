
const Path = require('path');
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it('Should return correct URL of getPreAuthorizationUrl()', async () => {
      this.mockResponse({
        errcode: 0,
        errmsg: 'ok',
        pre_auth_code: 'mock-pre_auth_code',
        expires_in: 1200,
      });

      let url = await this.mockRequest('getPreAuthorizationUrl', '', '', 'mock-state');

      this.assert.strictEqual(url, 'https://open.work.weixin.qq.com/3rdapp/install?suite_id=mock-suite_id&redirect_uri=mock-uri_install&pre_auth_code=mock-pre_auth_code&state=mock-state');
    });

    it('Should return correct URL of getOAuthRedirectUrl()', async () => {
      let url = await this.mockRequest('getOAuthRedirectUrl', '', 'snsapi_userinfo', 'mock-state');

      this.assert.strictEqual(url, 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=mock-suite_id&redirect_uri=mock-uri_oauth&response_type=code&scope=snsapi_userinfo&state=mock-state');
    });

    it('Should return correct response of unionidToExternalUserid()', async () => {
      this.mockResponse({
        errcode: 0,
        errmsg: 'ok',
        external_userid_info: [
          { corpid: 'AAA', external_userid: 'aaa'},
          { corpid: 'BBB', external_userid: 'bbb'},
        ]
      });

      let res = await this.mockRequest('unionidToExternalUserid', 'mock-unionid', 'mock-openid');

      this.assert.deepStrictEqual(res.external_userid_info, [
        { corpid: 'AAA', external_userid: 'aaa' },
        { corpid: 'BBB', external_userid: 'bbb' },
      ]);
    });

  }
}

new TestUnit('OpenWork', 'corp', {
  corp_id: 'mock-corp_id',
  secret: 'mock-secret',
  suite_id: 'mock-suite_id',
  suite_secret: 'mock-suite_secret',
  token: 'mock-token',
  aes_key: 'mock-aes_key',
  reg_template_id: 'mock-tpl_id',
  redirect_uri_install: 'mock-uri_install',
  redirect_uri_single: 'mock-uri_single',
  redirect_uri_oauth: 'mock-uri_oauth',
  file_cache: {
    path: './test/temp/',
  },
});
