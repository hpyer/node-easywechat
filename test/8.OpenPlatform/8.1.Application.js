
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

  }
}

new TestUnit('OpenPlatform', 'constuctor', {
  app_id: 'mock-app_id',
  secret: 'mock-secret',
  token: 'mock-token',
  aes_key: 'mock-aes_key',
});
