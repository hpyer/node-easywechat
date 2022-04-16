const BaseTestUnit = require('../BaseTestUnit');
const Application = require('../../dist/OfficialAccount/Application');
const Config = require('../../dist/OfficialAccount/Config');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should fetch correct config from application', () => {
      let app = new Application({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
      });
      let appConfig = app.getConfig();
      this.assert.strictEqual(appConfig.get('app_id'), 'mock-appid');
      this.assert.strictEqual(appConfig.has('aes_key'), false);

      let newConfig = new Config({
        app_id: 'mock-access_token-appid',
        secret: 'mock-access_token-secret',
        token: 'mock-access_token-token',
        aes_key: 'mock-access_token-aes_key',
      });
      app.setConfig(newConfig);
      appConfig = app.getConfig();
      this.assert.strictEqual(appConfig.get('app_id'), 'mock-access_token-appid');
      this.assert.strictEqual(appConfig.has('aes_key'), true);
    });

    it('Should throw correct error', () => {
      try {
        new Config({
          secret: 'mock-access_token-secret',
        });
      }
      catch (e) {
        this.assert.strictEqual(e.message, 'app_id cannot be empty.');
      }
    });

  }
}

new TestUnit('OfficialAccount/Config');
