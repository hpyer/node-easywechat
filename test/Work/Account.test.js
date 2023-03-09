const BaseTestUnit = require('../BaseTestUnit');
const { Work } = require('../../dist/');
const Account = require('../../dist/Work/Account');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should fetch correct account config from application', () => {
      let appConfig = {
        corp_id: 'mock-corpid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aes_key',
      };
      let app = new Work(appConfig);
      let appAccount = app.getAccount();
      this.assert.strictEqual(appAccount.getCorpId(), appConfig.corp_id);
      this.assert.strictEqual(appAccount.getSecret(), appConfig.secret);
      this.assert.strictEqual(appAccount.getToken(), appConfig.token);
      this.assert.strictEqual(appAccount.getAesKey(), appConfig.aes_key);

      let accountConfig = {
        corp_id: 'mock-access_token-corpid',
        secret: 'mock-access_token-secret',
        token: 'mock-access_token-token',
        aes_key: 'mock-access_token-aes_key',
      };
      let newAccount = new Account(
        accountConfig.corp_id,
        accountConfig.secret,
        accountConfig.token,
        accountConfig.aes_key
      );
      app.setAccount(newAccount);
      appAccount = app.getAccount();
      this.assert.strictEqual(appAccount.getCorpId(), accountConfig.corp_id);
      this.assert.strictEqual(appAccount.getSecret(), accountConfig.secret);
      this.assert.strictEqual(appAccount.getToken(), accountConfig.token);
      this.assert.strictEqual(appAccount.getAesKey(), accountConfig.aes_key);
    });

    it('Should fetch corrent config from account', () => {
      let accountConfig = {
        corp_id: 'mock-access_token-corpid',
        secret: 'mock-access_token-secret',
        token: 'mock-access_token-token',
        aes_key: 'mock-access_token-aes_key',
      };
      let account = new Account(
        accountConfig.corp_id,
        accountConfig.secret,
        accountConfig.token,
        accountConfig.aes_key
      );
      this.assert.strictEqual(account.getCorpId(), accountConfig.corp_id);
      this.assert.strictEqual(account.getSecret(), accountConfig.secret);
      this.assert.strictEqual(account.getToken(), accountConfig.token);
      this.assert.strictEqual(account.getAesKey(), accountConfig.aes_key);
    });

  }
}

new TestUnit('Work/Account');
