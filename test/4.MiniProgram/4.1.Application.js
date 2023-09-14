
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    [
      'access_token', 'auth', 'encryptor', 'server', 'data_cube', 'app_code',
      'template_message', 'customer_service', 'uniform_message', 'activity_message',
      'open_data', 'plugin', 'plugin_dev', 'express', 'nearby_poi', 'ocr', 'soter',
      'subscribe_message', 'realtime_log', 'search', 'media', 'content_security',
      'url_link', 'url_scheme', 'risk_control', 'live', 'broadcast', 'union',
      'shop_account', 'shop_aftersale', 'shop_basic', 'shop_delivery',
      'shop_order', 'shop_register', 'shop_spu',
    ].map(module => {
      it(`Should has module ${module}`, () => {
        this.assert.strictEqual(this.app[module] && typeof this.app[module] == 'object', true);
      });
    })

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

  }
}

new TestUnit('MiniProgram', 'constuctor', {
  app_id: 'abc@123',
  secret: '123456',
});
