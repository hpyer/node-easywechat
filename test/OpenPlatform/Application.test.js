const BaseTestUnit = require('../BaseTestUnit');
const { OfficialAccount, MiniApp, ServerRequest } = require('../../dist/');
const OpenPlatform = require('../../dist/OpenPlatform/Application');
const Account = require('../../dist/OpenPlatform/Account');
const ComponentAccessToken = require('../../dist/OpenPlatform/ComponentAccessToken');
const VerifyTicket = require('../../dist/OpenPlatform/VerifyTicket');
const VerifyTicketInterface = require('../../dist/OpenPlatform/Contracts/VerifyTicketInterface');
const Server = require('../../dist/OpenPlatform/Server');
const Encryptor = require('../../dist/Core/Encryptor');
const HttpClient = require('../../dist/Core/HttpClient/HttpClient');
const Authorization = require('../../dist/OpenPlatform/Authorization');
const AuthorizerAccessToken = require('../../dist/OpenPlatform/AuthorizerAccessToken');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should set and get account successful', async () => {
      let app = new OpenPlatform({
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
      let app = new OpenPlatform({
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
      let app = new OpenPlatform({
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
      let app = new OpenPlatform({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      let encryptor = new Encryptor('mock-encryptor-appid', 'mock-encryptor-secret', 'mock-encryptor-token', 'mock-encryptor-aeskey');
      let request = new ServerRequest('GET', 'http://www.easywechat.com/?echostr=mock-echostr');
      app.setRequest(request);
      let server = new Server(encryptor, request);
      app.setServer(server);
      this.assert.deepStrictEqual(app.getServer(), server);
    });

    it('Should set and get component_access_token successful', async () => {
      let app = new OpenPlatform({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      this.assert.strictEqual(app.getAccessToken() instanceof ComponentAccessToken, true);

      let access_token = new ComponentAccessToken('wx3cf0f39249000060', 'mock-secret', app.getVerifyTicket());
      app.setComponentAccessToken(access_token);
      this.assert.deepStrictEqual(app.getAccessToken(), access_token);
    });

    it('Should set and get verify_ticket successful', async () => {
      let app = new OpenPlatform({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      this.assert.strictEqual(app.getVerifyTicket() instanceof VerifyTicket, true);

      let tiket = new VerifyTicket('mock-new-appid');
      app.setVerifyTicket(tiket);
      this.assert.deepStrictEqual(app.getVerifyTicket(), tiket);
    });

    it('Should get authorization correctly', async () => {
      let app = new OpenPlatform({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      let cache = this.getMockedCacheClient();
      cache.mock('cached-verify_ticket', 'key-verify_ticket');
      cache.mock('cached-component_access_token', 'key-component_access_token');

      let ticket = new VerifyTicket('mock-appid', 'key-verify_ticket', cache);
      app.setVerifyTicket(ticket);

      let client = this.getMockedHttpClient(HttpClient.create());
      client.mock('post', '/cgi-bin/component/api_component_token').reply(200, {
        component_access_token: 'mock-component_access_token',
        expires_in: '7200',
      });

      let token = new ComponentAccessToken(
        'mock-appid',
        'mock-secret',
        ticket,
        null,
        cache,
        client,
      );
      app.setComponentAccessToken(token);

      client.mock('post', '/cgi-bin/component/api_query_auth').reply(200, {
        authorization_info: {
          authorizer_appid: 'mock-authorizer_appid',
        },
      });
      app.setHttpClient(client);

      let authorization = await app.getAuthorization();

      this.assert.strictEqual(authorization instanceof Authorization, true);
      this.assert.strictEqual(authorization.getAppId(), 'mock-authorizer_appid');
    });

    it('Should refresh authorizer token correctly', async () => {
      let app = new OpenPlatform({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      let cache = this.getMockedCacheClient();
      cache.mock('cached-verify_ticket', 'key-verify_ticket');
      cache.mock('cached-component_access_token', 'key-component_access_token');

      let ticket = new VerifyTicket('mock-appid', 'key-verify_ticket', cache);
      app.setVerifyTicket(ticket);

      let client = this.getMockedHttpClient(HttpClient.create());
      client.mock('post', '/cgi-bin/component/api_component_token').reply(200, {
        component_access_token: 'mock-component_access_token',
        expires_in: '7200',
      });

      let token = new ComponentAccessToken(
        'mock-appid',
        'mock-secret',
        ticket,
        null,
        cache,
        client,
      );
      app.setComponentAccessToken(token);

      client.mock('post', '/cgi-bin/component/api_authorizer_token').reply(200, {
        authorizer_access_token: 'mock-authorizer_access_token',
        expires_in: 7200,
        authorizer_refresh_token: 'mock-authorizer_refresh_token',
      });
      app.setHttpClient(client);

      let response = await app.refreshAuthorizerToken('authorizer_appid', 'authorizer_refresh_token');

      this.assert.strictEqual(response['authorizer_access_token'], 'mock-authorizer_access_token');
      this.assert.strictEqual(response['authorizer_refresh_token'], 'mock-authorizer_refresh_token');
    });

    it('Should get OfficialAccount application correctly', async () => {
      let app = new OpenPlatform({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      let oa_app = await app.getOfficialAccount(
        new AuthorizerAccessToken('mock-authorizer-appid', 'mock-authorizer-token'),
        {
          'secret': 'mock-authorizer-secret',
        }
      );

      this.assert.strictEqual(oa_app instanceof OfficialAccount, true);
      this.assert.strictEqual(oa_app.getConfig().get('app_id'), 'mock-authorizer-appid');
      this.assert.strictEqual(oa_app.getConfig().get('secret'), 'mock-authorizer-secret');
    });

    it('Should get MiniApp application correctly', async () => {
      let app = new OpenPlatform({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      let cache = this.getMockedCacheClient();
      cache.mock('cached-verify_ticket', 'key-verify_ticket');

      let ticket = new VerifyTicket('mock-appid', 'key-verify_ticket', cache);
      app.setVerifyTicket(ticket);

      let client = this.getMockedHttpClient(HttpClient.create());
      client.mock('post', '/cgi-bin/component/api_component_token').reply(200, {
        component_access_token: 'fake-component_access_token',
        expires_in: 7200,
      });
      app.setHttpClient(client);

      const ma_app = app.getMiniApp(
        new AuthorizerAccessToken('mock-authorizer-appid', 'mock-authorizer-token'),
        {
          'secret': 'mock-authorizer-secret',
        }
      );

      this.assert.strictEqual(ma_app instanceof MiniApp, true);
      this.assert.strictEqual(ma_app.getAccount().getAppId(), 'mock-authorizer-appid');
      this.assert.strictEqual(ma_app.getAccount().getSecret(), 'mock-authorizer-secret');

      client.mock('get', '/sns/component/jscode2session').reply(200, {
        openid: 'fake-openid',
        session_key: 'fake-session_key',
        unionid: 'fake-unionid',
      });
      ma_app.setHttpClient(client);

      const utils = ma_app.getUtils();
      const res = await utils.code2Session('xxx');
      this.assert.strictEqual(res.openid, 'fake-openid');
      this.assert.strictEqual(res.session_key, 'fake-session_key');
      this.assert.strictEqual(res.unionid, 'fake-unionid');
    });

    it('Should create preAuthorizationCode correctly', async () => {
      let app = new OpenPlatform({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      let client = this.getMockedHttpClient(HttpClient.create());
      client.mock('post', '/cgi-bin/component/api_create_preauthcode').reply(200, {
        pre_auth_code: 'fake-pre_auth_code',
        expires_in: 7200,
      });
      app.setHttpClient(client);

      let cache = this.getMockedCacheClient();
      cache.mock('cached-verify_ticket', 'key-verify_ticket');
      cache.mock('cached-component_access_token', 'key-component_access_token');

      let ticket = new VerifyTicket('mock-appid', 'key-verify_ticket', cache);
      app.setVerifyTicket(ticket);

      let token = new ComponentAccessToken(
        'mock-appid',
        'mock-secret',
        ticket,
        'key-component_access_token',
        cache,
        client,
      );
      app.setComponentAccessToken(token);

      let res = await app.createPreAuthorizationCode();

      this.assert.strictEqual(res.pre_auth_code, 'fake-pre_auth_code');
    });

    it('Should create preAuthorizationUrl correctly', async () => {
      let app = new OpenPlatform({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aeskey',
      });

      let callback = 'https://www.example.com/callback';
      let preAuthCode = 'fake-pre_auth_code';
      let url = await app.createPreAuthorizationUrl(callback, preAuthCode);

      this.assert.strictEqual(url, 'https://mp.weixin.qq.com/cgi-bin/componentloginpage?component_appid=mock-appid&redirect_uri=https%3A%2F%2Fwww.example.com%2Fcallback&pre_auth_code=fake-pre_auth_code');
    });

  }
}

new TestUnit('OpenPlatform/Application');
