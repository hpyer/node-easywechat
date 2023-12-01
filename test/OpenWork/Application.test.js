const BaseTestUnit = require('../BaseTestUnit');
const { ServerRequest } = require('../../dist');
const OpenWork = require('../../dist/OpenWork/Application');
const Account = require('../../dist/OpenWork/Account');
const SuiteAccessToken = require('../../dist/OpenWork/SuiteAccessToken');
const SuiteTicket = require('../../dist/OpenWork/SuiteTicket');
const Server = require('../../dist/OpenWork/Server');
const Encryptor = require('../../dist/OpenWork/Encryptor');
const HttpClient = require('../../dist/Core/HttpClient/HttpClient');
const Authorization = require('../../dist/OpenWork/Authorization');
const JsApiTicket = require('../../dist/OpenWork/JsApiTicket');
const ProviderAccessToken = require('../../dist/OpenWork/ProviderAccessToken');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should set and get account successful', async () => {
      let app = new OpenWork({
        corp_id: 'mock-corpid',
        provider_secret: 'mock-secret',
        suite_id: 'mock-suite-id',
        suite_secret: 'mock-suite-secret',
        token: 'mock-token',
        aes_key: 'mock-aes_key',
      });

      this.assert.strictEqual(app.getAccount() instanceof Account, true);

      let account = new Account(
        'mock-account-corpid',
        'mock-account-secret',
        'mock-account-suite-id',
        'mock-account-suite-secret',
        'mock-account-token',
        'mock-account-aes_key',
      );
      app.setAccount(account);
      this.assert.deepStrictEqual(app.getAccount(), account);
    });

    it('Should set and get encryptor successful', async () => {
      let app = new OpenWork({
        corp_id: 'mock-corpid',
        provider_secret: 'mock-secret',
        suite_id: 'mock-suite-id',
        suite_secret: 'mock-suite-secret',
        token: 'mock-token',
        aes_key: 'mock-aes_key',
      });

      this.assert.strictEqual(app.getEncryptor() instanceof Encryptor, true);

      let encryptor = new Encryptor(
        'mock-encryptor-corpid',
        'mock-encryptor-token',
        'mock-encryptor-aeskey'
      );
      app.setEncryptor(encryptor);
      this.assert.deepStrictEqual(app.getEncryptor(), encryptor);
    });

    it('Should throw error when getServer before set ServerRequest', async () => {
      let app = new OpenWork({
        corp_id: 'mock-corpid',
        provider_secret: 'mock-secret',
        suite_id: 'mock-suite-id',
        suite_secret: 'mock-suite-secret',
        token: 'mock-token',
        aes_key: 'mock-aes_key',
      });

      try {
        app.getServer();
      }
      catch (e) {
        this.assert.strictEqual(e.message, 'Please set request instance before use.');
      }
    });

    it('Should set and get server successful', async () => {
      let app = new OpenWork({
        corp_id: 'mock-corpid',
        provider_secret: 'mock-secret',
        suite_id: 'mock-suite-id',
        suite_secret: 'mock-suite-secret',
        token: 'mock-token',
        aes_key: 'mock-aes_key',
      });

      let encryptor = new Encryptor(
        'mock-encryptor-appid',
        'mock-encryptor-token',
        'mock-encryptor-aeskey'
      );
      let request = new ServerRequest('GET', 'http://www.easywechat.com/?echostr=mock-echostr');
      app.setRequest(request);
      let server = new Server(encryptor, request);
      app.setServer(server);
      this.assert.deepStrictEqual(app.getServer(), server);
    });

    it('Should set and get provider_access_token successful', async () => {
      let app = new OpenWork({
        corp_id: 'mock-corpid',
        provider_secret: 'mock-secret',
        suite_id: 'mock-suite-id',
        suite_secret: 'mock-suite-secret',
        token: 'mock-token',
        aes_key: 'mock-aes_key',
      });

      this.assert.strictEqual(app.getProviderAccessToken() instanceof ProviderAccessToken, true);

      let access_token = new ProviderAccessToken('wx3cf0f39249000060', 'mock-secret');
      app.setProviderAccessToken(access_token);
      this.assert.deepStrictEqual(app.getProviderAccessToken(), access_token);
    });

    it('Should set and get jsapi_ticket successful', async () => {
      let app = new OpenWork({
        corp_id: 'mock-corpid',
        provider_secret: 'mock-secret',
        suite_id: 'mock-suite-id',
        suite_secret: 'mock-suite-secret',
        token: 'mock-token',
        aes_key: 'mock-aes_key',
      });

      this.assert.strictEqual(await app.getJsApiTicket() instanceof JsApiTicket, true);
    });

    it('Should get authorization correctly', async () => {
      let app = new OpenWork({
        corp_id: 'mock-corpid',
        provider_secret: 'mock-secret',
        suite_id: 'mock-suite-id',
        suite_secret: 'mock-suite-secret',
        token: 'mock-token',
        aes_key: 'mock-aes_key',
      });

      let cache = this.getMockedCacheClient();
      cache.mock('cached-suite_ticket', 'key-suite_ticket');
      cache.mock('cached-suite_access_token', 'key-suite_access_token');
      cache.mock('cached-provider_access_token', 'key-provider_access_token');
      app.setCache(cache);

      let ticket = new SuiteTicket('mock-suite-id', 'key-verify_ticket', cache);
      app.setSuiteTicket(ticket);

      let client = this.getMockedHttpClient(HttpClient.create());

      let providerToken = new ProviderAccessToken(
        'mock-provider-id',
        'mock-provider-secret',
        'key-provider_access_token',
        cache,
        client,
      );
      app.setProviderAccessToken(providerToken);

      let token = new SuiteAccessToken(
        'mock-suite-id',
        'mock-suite-secret',
        ticket,
        'key-suite_access_token',
        cache,
        client,
      );
      app.setSuiteAccessToken(token);

      client.mock('post', '/cgi-bin/service/get_auth_info').reply(200, {
        auth_corp_info: {
          corpid: 'fake-corpid',
          corp_name: 'fake-name',
          corp_type: 'fake-type',
        },
        auth_info: {
          agent: {
            agentid: 123,
            name: 'fake-agent',
          }
        }
      });
      app.setHttpClient(client);

      let authorization = await app.getAuthorization('mock-corpid', 'mock-permanent_code', token);

      this.assert.strictEqual(authorization instanceof Authorization, true);
      this.assert.strictEqual(authorization.getCorpId(), 'fake-corpid');
      this.assert.strictEqual(authorization.get('auth_corp_info')['corp_name'], 'fake-name');
      this.assert.strictEqual(authorization.get('auth_info')['agent']['agentid'], 123);
    });

    it('Should pre authorization code correctly', async () => {
      let app = new OpenWork({
        corp_id: 'mock-corpid',
        provider_secret: 'mock-secret',
        suite_id: 'mock-suite-id',
        suite_secret: 'mock-suite-secret',
        token: 'mock-token',
        aes_key: 'mock-aes_key',
      });

      let cache = this.getMockedCacheClient();
      cache.mock('cached-suite_ticket', 'key-suite_ticket');
      cache.mock('cached-suite_access_token', 'key-suite_access_token');
      cache.mock('cached-provider_access_token', 'key-provider_access_token');
      app.setCache(cache);

      let ticket = new SuiteTicket('mock-suite-id', cache, 'key-suite_ticket');
      app.setSuiteTicket(ticket);

      let client = this.getMockedHttpClient(HttpClient.create());

      let providerToken = new ProviderAccessToken(
        'mock-provider-id',
        'mock-provider-secret',
        'key-provider_access_token',
        cache,
        client,
      );
      app.setProviderAccessToken(providerToken);

      let token = new SuiteAccessToken(
        'mock-appid',
        'mock-secret',
        ticket,
        'key-suite_access_token',
        cache,
        client,
      );
      app.setSuiteAccessToken(token);

      client.mock('get', '/cgi-bin/service/get_pre_auth_code').reply(200, {
        errcode: 0,
        errmsg: 'ok',
        pre_auth_code: 'fake-pre_auth_code',
        expires_in: 7200,
      });
      app.setHttpClient(client);

      let response = await app.createPreAuthorizationCode();

      this.assert.strictEqual(response['pre_auth_code'], 'fake-pre_auth_code');
    });

  }
}

new TestUnit('OpenWork/Application');
