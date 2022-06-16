const BaseTestUnit = require('../BaseTestUnit');
const Application = require('../../dist/MiniApp/Application');
const Account = require('../../dist/MiniApp/Account');
const Server = require('../../dist/MiniApp/Server');
const Encryptor = require('../../dist/Core/Encryptor');
const ServerRequest = require('../../dist/Core/Http/ServerRequest');
const AccessToken = require('../../dist/MiniApp/AccessToken');
const Utils = require('../../dist/MiniApp/Utils');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should create correct instance', async () => {
      let app = new Application({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
      });

      this.assert.strictEqual(app instanceof Application, true);
    });

    it('Should set and get account successful', async () => {
      let app = new Application({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
      });

      this.assert.strictEqual(app.getAccount() instanceof Account, true);

      let account = new Account('mock-account-appid', 'mock-account-secret', 'mock-account-token');
      app.setAccount(account);
      this.assert.deepStrictEqual(app.getAccount(), account);
    });

    it('Should set and get encryptor successful', async () => {
      let app = new Application({
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
      let app = new Application({
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
      let app = new Application({
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
      let app = new Application({
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

    it('Should get utils successful', async () => {
      let app = new Application({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      this.assert.strictEqual(app.getUtils() instanceof Utils, true);
    });

  }
}

new TestUnit('MiniApp/Application');
