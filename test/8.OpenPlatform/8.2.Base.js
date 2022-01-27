
const { default: MiniProgram } = require('../../dist/MiniProgram/Application');
const { default: OfficialAccount } = require('../../dist/OfficialAccount/Application');
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it('Should set and get correct ticket', async () => {
      await this.app.verify_ticket.setTicket('mock-ticket');

      let ticket = await this.app.verify_ticket.getTicket();

      this.assert.strictEqual(ticket, 'mock-ticket');
    });

    it('Should return correct url from app.getPreAuthorizationUrl()', async () => {
      this.mockResponse({
        pre_auth_code: 'mock-code',
        expires_in: 600,
      });

      let url = await this.app.getPreAuthorizationUrl('http://www.example.com/callback', {
        auth_type: 1,
        biz_appid: 'mock-biz-appid',
      });
      this.assert.strictEqual(url, 'https://mp.weixin.qq.com/cgi-bin/componentloginpage?auth_type=1&biz_appid=mock-biz-appid&pre_auth_code=mock-code&component_appid=mock-app_id&redirect_uri=http%3A%2F%2Fwww.example.com%2Fcallback');
    });

    it('Should return correct url from app.getMobilePreAuthorizationUrl()', async () => {
      this.mockRest();

      this.mockResponse({
        pre_auth_code: 'mock-code',
        expires_in: 600,
      });

      let url = await this.app.getMobilePreAuthorizationUrl('http://www.example.com/callback', {
        auth_type: 1,
        biz_appid: 'mock-biz-appid',
      });
      this.assert.strictEqual(url, 'https://mp.weixin.qq.com/safe/bindcomponent?auth_type=1&biz_appid=mock-biz-appid&pre_auth_code=mock-code&component_appid=mock-app_id&redirect_uri=http%3A%2F%2Fwww.example.com%2Fcallback&action=bindcomponent&no_scan=1');
    });

    it('Should return instance of OficailAccount', async () => {
      this.mockRest();

      let oa_app = await this.app.officialAccount('mock-appid', 'mock-refresh-token');
      this.assert.strictEqual(oa_app instanceof OfficialAccount, true);
    });

    it('Should return instance of MiniProgram', async () => {
      this.mockRest();

      let mp_app = await this.app.miniProgram('mock-appid', 'mock-refresh-token');
      this.assert.strictEqual(mp_app instanceof MiniProgram, true);
    });

  }
}

new TestUnit('OpenPlatform', 'base', {
  app_id: 'mock-app_id',
  secret: 'mock-secret',
  token: 'mock-token',
  aes_key: 'mock-aes_key',
});
