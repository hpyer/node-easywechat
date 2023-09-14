
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
        'url',

        // OpenPlatform 额外增加的模块
        'mini_program',
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

        // OpenPlatform 额外增加的模块
        'code', 'domain', 'account', 'setting', 'tester',
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

    it('Should get client and send request correctly', async () => {
      let client = this.app.getClient();
      this.assert.strictEqual(client.httpGet && typeof client.httpGet == 'function', true);

      let key = await this.app.access_token.getCacheKey();
      this.mockCache({
        access_token: 'mock-access_token',
        expires_in: 7200,
      }, key);

      this.mockResponse({
        foo: 'bar',
      });
      let resp = await client.httpGet('/mock-url');
      this.assert.deepStrictEqual(resp, { foo: 'bar' });
    });

    it('Should get client and send request correctly with proxy OfficialAccount', async () => {
      let oa_appid = 'mock-oa_appid';
      let oa_app = this.app.officialAccount(oa_appid);
      let oa_client = oa_app.getClient();

      let oa_key = await oa_app.access_token.getCacheKey();
      this.mockCache({
        authorizer_access_token: 'mock-oa_access_token',
        authorizer_refresh_token: 'mock-oa_refresh_token',
        expires_in: 7200,
      }, oa_key);

      this.mockResponse({
        oa_foo: 'oa_bar',
      });
      let oa_resp = await oa_client.requestRaw({
        url: '/mock-oa_url',
      });
      this.assert.deepStrictEqual(oa_resp.getContent(), { oa_foo: 'oa_bar' });
      this.assert.deepStrictEqual(oa_resp.getConfig().params, { access_token: 'mock-oa_access_token' });
    });

    it('Should get client and send request correctly with proxy MiniProgram', async () => {
      let mp_appid = 'mock-mp_appid';
      let mp_app = this.app.officialAccount(mp_appid);
      let mp_client = mp_app.getClient();

      let mp_key = await mp_app.access_token.getCacheKey();
      this.mockCache({
        authorizer_access_token: 'mock-mp_access_token',
        authorizer_refresh_token: 'mock-mp_refresh_token',
        expires_in: 7200,
      }, mp_key);

      this.mockResponse({
        mp_foo: 'mp_bar',
      });
      let mp_resp = await mp_client.requestRaw({
        url: '/mock-mp_url',
      });
      this.assert.deepStrictEqual(mp_resp.getContent(), { mp_foo: 'mp_bar' });
      this.assert.deepStrictEqual(mp_resp.getConfig().params, { access_token: 'mock-mp_access_token' });
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
