const BaseTestUnit = require('../BaseTestUnit');
const { Work } = require('../../dist/');
const Config = require('../../dist/Work/Config');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should fetch correct config from application', () => {
      let app = new Work({
        corp_id: 'mock-corpid',
        secret: 'mock-secret',
        token: 'mock-token',
      });
      let appConfig = app.getConfig();
      this.assert.strictEqual(appConfig.get('corp_id'), 'mock-corpid');
      this.assert.strictEqual(appConfig.has('aes_key'), false);

      let newConfig = new Config({
        corp_id: 'mock-access_token-corpid',
        secret: 'mock-access_token-secret',
        token: 'mock-access_token-token',
        aes_key: 'mock-access_token-aes_key',
      });
      app.setConfig(newConfig);
      appConfig = app.getConfig();
      this.assert.strictEqual(appConfig.get('corp_id'), 'mock-access_token-corpid');
      this.assert.strictEqual(appConfig.has('aes_key'), true);
    });

    it('Should throw correct error', () => {
      try {
        new Config({
          secret: 'mock-access_token-secret',
        });
      }
      catch (e) {
        this.assert.strictEqual(e.message, 'corp_id cannot be empty.');
      }
    });

  }
}

new TestUnit('Work/Config');
