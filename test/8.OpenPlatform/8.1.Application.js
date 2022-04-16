
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

  }
}

new TestUnit('OpenPlatform', 'constuctor', {
  app_id: 'mock-app_id',
  secret: 'mock-secret',
  token: 'mock-token',
  aes_key: 'mock-aes_key',
});
