
const Path = require('path');
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    [
      'verify_ticket', 'access_token', 'encryptor', 'server', 'code_template',
      'component',
    ].map(module => {
      it(`Should has module ${module}`, () => {
        this.assert.strictEqual(this.app[module] && typeof this.app[module] == 'object', true);
      });
    })

    it(`Should get component access_token correctly`, async () => {
      this.mockResponse({
        component_access_token: 'fake-component-access-token',
        expires_in: 7200,
      });
      await this.app.verify_ticket.setTicket('mock-component-verify_ticket');
      let accessToken = await this.app.access_token.getToken(true);
      let token = accessToken.getAccessToken();
      this.assert.strictEqual(token, 'fake-component-access-token');
    });

    it(`Should proxy OfficialAccount correctly`, async () => {
      let oa_appid = 'mock-oa_appid';
      let oa_app = this.app.officialAccount(oa_appid);

      [
        'access_token', 'encryptor', 'server', 'user', 'user_tag', 'oauth', 'menu',
        'template_message', 'material', 'customer_service', 'customer_service_session',
        'semantic', 'data_cube', 'poi', 'auto_reply', 'broadcasting', 'card', 'device',
        'shake_around', 'store', 'comment', 'ocr', 'goods', 'jssdk', 'media', 'qrcode',
        'url'
      ].map(module => {
        this.assert.strictEqual(oa_app[module] && typeof oa_app[module] == 'object', true);
      })

      this.mockResponse({
        errcode: 0,
        errmsg: 'ok',
      });
      let res = await oa_app.subscribe_message.send({
        touser: 'mock-openid',
        template_id: 'mock-template_id',
        page: '',
        miniprogram: '',
        data: {
          thing1: 'thing1',
        },
      });
      this.assert.strictEqual(res.errcode, 0);
      this.assert.strictEqual(res.errmsg, 'ok');
    });

    it(`Should proxy MiniProgram correctly`, async () => {
      let mp_appid = 'mock-mp_appid';
      let mp_app = this.app.miniProgram(mp_appid);

      [
        'access_token', 'auth', 'encryptor', 'server', 'data_cube', 'app_code',
        'template_message', 'customer_service', 'uniform_message', 'activity_message',
        'open_data', 'plugin', 'plugin_dev', 'express', 'nearby_poi', 'ocr', 'soter',
        'subscribe_message', 'realtime_log', 'search', 'media', 'content_security',
        'url_link', 'url_scheme', 'risk_control', 'live', 'broadcast', 'union',
        'shop_account', 'shop_aftersale', 'shop_basic', 'shop_delivery',
        'shop_order', 'shop_register', 'shop_spu',
      ].map(module => {
        this.assert.strictEqual(mp_app[module] && typeof mp_app[module] == 'object', true);
      })

      this.mockResponse({
        errcode: 0,
        errmsg: 'ok',
        phone_info: {
          "phoneNumber": "mock-phone-number",
          "purePhoneNumber": "xxxxxx",
          "countryCode": 86,
          "watermark": {
            "timestamp": 1637744274,
            "appid": "xxxx"
          }
        },
      });
      let res = await mp_app.phone_number.getUserPhoneNumber('mock-code');
      this.assert.strictEqual(res.errcode, 0);
      this.assert.strictEqual(res.errmsg, 'ok');
      this.assert.strictEqual(res.phone_info.phoneNumber, 'mock-phone-number');
    });

  }
}

new TestUnit('OpenPlatform', 'constuctor', {
  app_id: 'mock-app_id',
  secret: 'mock-secret',
  token: 'mock-token',
  aes_key: 'mock-aes_key',
  file_cache: {
    path: './test/temp/',
  },
});
