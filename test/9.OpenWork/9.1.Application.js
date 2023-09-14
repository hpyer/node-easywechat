
const Path = require('path');
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    [
      'provider_access_token', 'suite_ticket', 'suite_access_token', 'corp',
      'mini_program', 'provider', 'encryptor_corp', 'encryptor', 'server',
    ].map(module => {
      it(`Should has module ${module}`, () => {
        this.assert.strictEqual(this.app[module] && typeof this.app[module] == 'object', true);
      });
    })

    it(`Should get provider's access_token correctly`, async () => {
      this.mockResponse({
        errcode: 0,
        errmsg: 'ok',
        provider_access_token: 'fake-provider-access-token',
        expires_in: 7200,
      });
      let accessToken = await this.app.provider_access_token.getToken(true);
      let token = accessToken.getAccessToken();
      this.assert.strictEqual(token, 'fake-provider-access-token');
    });

    it(`Should get suite's access_token correctly`, async () => {
      this.mockResponse({
        errcode: 0,
        errmsg: 'ok',
        suite_access_token: 'fake-suite-access-token',
        expires_in: 7200,
      });
      await this.app.suite_ticket.setTicket('mock-suite-ticket');
      let accessToken = await this.app.suite_access_token.getToken(true);
      let token = accessToken.getAccessToken();
      this.assert.strictEqual(token, 'fake-suite-access-token');
    });

    it('Should get client and send request correctly', async () => {
      let client = this.app.getClient();
      this.assert.strictEqual(client.httpGet && typeof client.httpGet == 'function', true);

      let key = await this.app.provider_access_token.getCacheKey();
      this.mockCache({
        access_token: 'mock-access_token',
        expires_in: 7200,
      }, key);

      this.mockResponse({
        foo: 'bar',
      });
      let resp = await client.httpGet('/mock-url');
      this.assert.deepStrictEqual(resp, { foo: 'bar' });
    });

  }
}

new TestUnit('OpenWork', 'constuctor', {
  corp_id: 'mock-corp_id',
  secret: 'mock-secret',
  suite_id: 'mock-suite_id',
  suite_secret: 'mock-suite_secret',
  token: 'mock-token',
  aes_key: 'mock-aes_key',
  reg_template_id: 'mock-tpl_id',
  redirect_uri_install: 'mock-uri_install',
  redirect_uri_single: 'mock-uri_single',
  redirect_uri_oauth: 'mock-oauth',
  file_cache: {
    path: './test/temp/',
  },
});
