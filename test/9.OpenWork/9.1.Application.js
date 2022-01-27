
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
});
