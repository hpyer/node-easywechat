
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

  }
}

new TestUnit('OfficialAccount', 'constuctor', {
  app_id: 'abc@123',
  secret: '123456',
});
