
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    [
      'access_token', 'auth', 'encryptor', 'server', 'data_cube', 'app_code',
      'template_message', 'customer_service', 'uniform_message', 'activity_message',
      'open_data', 'plugin', 'plugin_dev', 'express', 'nearby_poi', 'ocr', 'soter',
      'subscribe_message', 'realtime_log', 'search', 'media', 'content_security',
      'url_link', 'url_scheme', 'risk_control', 'live', 'broadcast', 'union'
    ].map(module => {
      it(`Should has module ${module}`, () => {
        this.assert.strictEqual(this.app[module] && typeof this.app[module] == 'object', true);
      });
    })

  }
}

new TestUnit('MiniProgram', 'constuctor', {
  app_id: 'abc@123',
  secret: '123456',
});
