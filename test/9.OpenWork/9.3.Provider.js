
const Path = require('path');
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it('Should return correct URL of getLoginUrl()', async () => {
      let url = await this.mockRequest('getLoginUrl', '', 'admin', 'mock-state');

      this.assert.strictEqual(url, 'https://open.work.weixin.qq.com/wwopen/sso/3rd_qrConnect?appid=mock-corp_id&redirect_uri=mock-uri_single&usertype=admin&state=mock-state');
    });

    it('Should return correct userInfo with getLoginInfo()', async () => {
      this.mockResponse({
        errcode: 0,
        errmsg: 'ok',
        usertype: 1,
        user_info: {
          userid: 'mock-userid',
          open_userid: 'mock-open_userid',
          name: 'mock-name',
          avatar: 'mock-avatar',
        },
      });

      let info = await this.mockRequest('getLoginInfo', '', 'admin', 'mock-state');

      this.assert.strictEqual(info.usertype, 1);
      this.assert.strictEqual(info.user_info.userid, 'mock-userid');
      this.assert.strictEqual(info.user_info.open_userid, 'mock-open_userid');
    });

    it('Should return correct URL of getRegisterUri()', async () => {
      this.mockResponse({
        errcode: 0,
        errmsg: 'ok',
        register_code: 'mock-register_code',
        expires_in: 600,
      });

      let url = await this.mockRequest('getRegisterUri');

      this.assert.strictEqual(url, 'https://open.work.weixin.qq.com/3rdservice/wework/register?register_code=mock-register_code');
    });

  }
}

new TestUnit('OpenWork', 'provider', {
  corp_id: 'mock-corp_id',
  secret: 'mock-secret',
  suite_id: 'mock-suite_id',
  suite_secret: 'mock-suite_secret',
  token: 'mock-token',
  aes_key: 'mock-aes_key',
  reg_template_id: 'mock-tpl_id',
  redirect_uri_install: 'mock-uri_install',
  redirect_uri_single: 'mock-uri_single',
  redirect_uri_oauth: 'mock-oauth',
  file_cache: {
    path: './test/temp/',
  },
});
