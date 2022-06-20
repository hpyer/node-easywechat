const BaseTestUnit = require('../BaseTestUnit');
const { OfficialAccount, ServerRequest } = require('../../dist/');
const Account = require('../../dist/OfficialAccount/Account');
const AccessTokenAwareClient = require('../../dist/Core/HttpClient/AccessTokenAwareClient');
const Server = require('../../dist/OfficialAccount/Server');
const Encryptor = require('../../dist/Core/Encryptor');
const AccessToken = require('../../dist/OfficialAccount/AccessToken');
const JsApiTicket = require('../../dist/OfficialAccount/JsApiTicket');
const Utils = require('../../dist/OfficialAccount/Utils');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should create correct instance', async () => {
      let app = new OfficialAccount({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
      });

      this.assert.strictEqual(app instanceof OfficialAccount, true);
    });

    it('Should set and get account successful', async () => {
      let app = new OfficialAccount({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
      });

      this.assert.strictEqual(app.getAccount() instanceof Account, true);

      let account = new Account('mock-account-appid', 'mock-account-secret', 'mock-account-token');
      app.setAccount(account);
      this.assert.deepStrictEqual(app.getAccount(), account);
    });

    it('Should set and get client successful', async () => {
      let app = new OfficialAccount({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
      });

      this.assert.strictEqual(app.getClient() instanceof AccessTokenAwareClient, true);

      let client = new AccessTokenAwareClient();
      app.setClient(client);
      this.assert.deepStrictEqual(app.getClient(), client);
    });

    it('Should set and get encryptor successful', async () => {
      let app = new OfficialAccount({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      this.assert.strictEqual(app.getEncryptor() instanceof Encryptor, true);

      let encryptor = new Encryptor('mock-encryptor-appid', 'mock-encryptor-secret', 'mock-encryptor-token', 'mock-encryptor-aeskey');
      app.setEncryptor(encryptor);
      this.assert.deepStrictEqual(app.getEncryptor(), encryptor);
    });

    it('Should throw error when getServer before set ServerRequest', async () => {
      let app = new OfficialAccount({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      try {
        app.getServer();
      }
      catch (e) {
        this.assert.strictEqual(e.message, 'Please set request instance before use.');
      }
    });

    it('Should set and get server successful', async () => {
      let app = new OfficialAccount({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      let request = new ServerRequest('GET', 'http://www.easywechat.com/?echostr=mock-echostr');
      let server = new Server(request);
      app.setServer(server);
      this.assert.deepStrictEqual(app.getServer(), server);
    });

    it('Should set and get access_token successful', async () => {
      let app = new OfficialAccount({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      this.assert.strictEqual(app.getAccessToken() instanceof AccessToken, true);

      let access_token = new AccessToken('mock-access_token-appid', 'mock-access_token-secret');
      app.setAccessToken(access_token);
      this.assert.deepStrictEqual(app.getAccessToken(), access_token);
    });

    it('Should set and get js_tiket successful', async () => {
      let app = new OfficialAccount({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      this.assert.strictEqual(app.getTicket() instanceof JsApiTicket, true);

      let js_tiket = new JsApiTicket('mock-js_tiket-appid', 'mock-js_tiket-secret');
      app.setTicket(js_tiket);
      this.assert.deepStrictEqual(app.getTicket(), js_tiket);
    });

    it('Should get utils successful', async () => {
      let app = new OfficialAccount({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      this.assert.strictEqual(app.getUtils() instanceof Utils, true);
    });

  }
}

new TestUnit('OfficialAccount/Application');
