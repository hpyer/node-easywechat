
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it('getToken()', async () => {
      this.mockResponse({
        errcode: 0,
        errmsg: 'ok',
        access_token: 'moke-token',
        expires_in: 7200
      });

      let res = await this.app.access_token.getToken(true);

      this.assert.strictEqual(res.getAccessToken(), 'moke-token');
      this.assert.strictEqual(res.getExpires(), 7200);
    });

  }
}

new TestUnit('Work', 'access_token', {
  corp_id: 'abc@123',
  secret: '123456',
  file_cache: {
    path: './test/temp/',
  },
});
