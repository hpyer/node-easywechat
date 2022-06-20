const BaseTestUnit = require('../BaseTestUnit');
const { OfficialAccount } = require('../../dist/');
const Account = require('../../dist/OfficialAccount/Account');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should fetch correct account config from application', () => {
      let appConfig = {
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aes_key',
      };
      let app = new OfficialAccount(appConfig);
      let appAccount = app.getAccount();
      this.assert.strictEqual(appAccount.getAppId(), appConfig.app_id);
      this.assert.strictEqual(appAccount.getSecret(), appConfig.secret);
      this.assert.strictEqual(appAccount.getToken(), appConfig.token);
      this.assert.strictEqual(appAccount.getAesKey(), appConfig.aes_key);

      let accountConfig = {
        app_id: 'mock-access_token-appid',
        secret: 'mock-access_token-secret',
        token: 'mock-access_token-token',
        aes_key: 'mock-access_token-aes_key',
      };
      let newAccount = new Account(
        accountConfig.app_id,
        accountConfig.secret,
        accountConfig.token,
        accountConfig.aes_key
      );
      app.setAccount(newAccount);
      appAccount = app.getAccount();
      this.assert.strictEqual(appAccount.getAppId(), accountConfig.app_id);
      this.assert.strictEqual(appAccount.getSecret(), accountConfig.secret);
      this.assert.strictEqual(appAccount.getToken(), accountConfig.token);
      this.assert.strictEqual(appAccount.getAesKey(), accountConfig.aes_key);
    });

    it('Should fetch corrent config from account', () => {
      let accountConfig = {
        app_id: 'mock-access_token-appid',
        secret: 'mock-access_token-secret',
        token: 'mock-access_token-token',
        aes_key: 'mock-access_token-aes_key',
      };
      let account = new Account(
        accountConfig.app_id,
        accountConfig.secret,
        accountConfig.token,
        accountConfig.aes_key
      );
      this.assert.strictEqual(account.getAppId(), accountConfig.app_id);
      this.assert.strictEqual(account.getSecret(), accountConfig.secret);
      this.assert.strictEqual(account.getToken(), accountConfig.token);
      this.assert.strictEqual(account.getAesKey(), accountConfig.aes_key);
    });

  }
}

new TestUnit('OfficialAccount/Account');
