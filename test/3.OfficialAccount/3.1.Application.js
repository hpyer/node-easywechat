
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    [
      'access_token', 'encryptor', 'server', 'user', 'user_tag', 'oauth', 'menu',
      'template_message', 'material', 'customer_service', 'customer_service_session',
      'semantic', 'data_cube', 'poi', 'auto_reply', 'broadcasting', 'card', 'device',
      'shake_around', 'store', 'comment', 'ocr', 'goods', 'jssdk', 'media', 'qrcode',
      'url'
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

new TestUnit('OfficialAccount', 'constuctor', {
  app_id: 'abc@123',
  secret: '123456',
});
