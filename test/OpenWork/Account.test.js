const BaseTestUnit = require('../BaseTestUnit');
const { OpenWork } = require('../../dist/');
const Account = require('../../dist/OpenWork/Account');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should fetch correct account config from application', () => {
      let appConfig = {
        corp_id: 'mock-corpid',
        provider_secret: 'mock-secret',
        suite_id: 'mock-suite-id',
        suite_secret: 'mock-suite-secret',
        token: 'mock-token',
        aes_key: 'mock-aes_key',
      };
      let app = new OpenWork(appConfig);
      let appAccount = app.getAccount();
      this.assert.strictEqual(appAccount.getCorpId(), appConfig.corp_id);
      this.assert.strictEqual(appAccount.getProviderSecret(), appConfig.provider_secret);
      this.assert.strictEqual(appAccount.getSuiteId(), appConfig.suite_id);
      this.assert.strictEqual(appAccount.getSuiteSecret(), appConfig.suite_secret);
      this.assert.strictEqual(appAccount.getToken(), appConfig.token);
      this.assert.strictEqual(appAccount.getAesKey(), appConfig.aes_key);

    });

    it('Should fetch corrent config from account', () => {
      let accountConfig = {
        corp_id: 'mock-access_token-corpid',
        provider_secret: 'mock-access_token-secret',
        suite_id: 'mock-access_token-suite-id',
        suite_secret: 'mock-access_token-suite-secret',
        token: 'mock-access_token-token',
        aes_key: 'mock-access_token-aes_key',
      };
      let account = new Account(
        accountConfig.corp_id,
        accountConfig.provider_secret,
        accountConfig.suite_id,
        accountConfig.suite_secret,
        accountConfig.token,
        accountConfig.aes_key
      );
      this.assert.strictEqual(account.getCorpId(), accountConfig.corp_id);
      this.assert.strictEqual(account.getProviderSecret(), accountConfig.provider_secret);
      this.assert.strictEqual(account.getSuiteId(), accountConfig.suite_id);
      this.assert.strictEqual(account.getSuiteSecret(), accountConfig.suite_secret);
      this.assert.strictEqual(account.getToken(), accountConfig.token);
      this.assert.strictEqual(account.getAesKey(), accountConfig.aes_key);
    });

  }
}

new TestUnit('OpenWork/Account');
