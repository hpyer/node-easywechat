
const { default: MiniProgram } = require('../../dist/MiniProgram/Application');
const { default: Work } = require('../../dist/Work/Application');
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it('Should return instance of Work', async () => {
      let wok_app = await this.app.work('mock-auth-corp_id', 'mock-permanent-code');
      this.assert.strictEqual(wok_app instanceof Work, true);
    });

    it('Should return instance of MiniProgram', async () => {
      let mp_app = await this.app.miniProgram();
      this.assert.strictEqual(mp_app instanceof MiniProgram, true);
    });

  }
}

new TestUnit('OpenWork', 'base', {
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
