const BaseTestUnit = require('../BaseTestUnit');
const JsApiTicket = require('../../dist/OfficialAccount/JsApiTicket');
const HttpClient = require('../../dist/Core/HttpClient/HttpClient');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should fetch correct ticket from network', async () => {
      let result = {
        ticket: 'mock-ticket',
        expires_in: '7200',
      };

      let client = this.getMockedHttpClient(HttpClient.create());
      client.mock('get', '/cgi-bin/ticket/getticket').reply(200, result);

      let ticket = new JsApiTicket(
        'mock-ticket-appid',
        'mock-ticket-secret',
        null,
        null,
        client
      );
      this.assert.strictEqual(await ticket.getTicket(), result.ticket);
    });

    it('Should fetch correct ticket from cache', async () => {
      let result = {
        ticket: 'mock-ticket',
        expires_in: '7200',
      };

      let cache = this.getMockedCacheClient();
      cache.mock(result.ticket);

      let ticket = new JsApiTicket(
        'mock-ticket-appid',
        'mock-ticket-secret',
        null,
        cache
      );
      this.assert.strictEqual(await ticket.getTicket(), result.ticket);
    });

    it('Should use custom key for cache correctly', () => {
      let key = 'mock-ticket-cache-key';

      let ticket = new JsApiTicket(
        'mock-ticket-appid',
        'mock-ticket-secret',
        key
      );
      this.assert.strictEqual(ticket.getKey(), key);
    });

    it('Should create sianature config correctly', async () => {
      let cache = this.getMockedCacheClient();
      cache.mock('mock-ticket', 'official_account.jsapi_ticket.mock-appid');

      let ticket = new JsApiTicket(
        'mock-appid',
        'mock-secret',
        null,
        cache
      );

      let url = 'https://www.easywechat.com/';
      let nonce = 'mock-nonce';
      let timestamp = 1601234567;

      let config = await ticket.configSignature(url, nonce, timestamp);
      this.assert.deepStrictEqual(config, {
        url,
        nonceStr: nonce,
        timestamp,
        appId: 'mock-appid',
        signature: '22772d2fb393ab9f7f6a5a54168a566fbf1ab767',
      });
    });

  }
}

new TestUnit('OfficialAccount/JsApiTicket');
