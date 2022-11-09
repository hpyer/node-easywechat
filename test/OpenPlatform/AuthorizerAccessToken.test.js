const BaseTestUnit = require('../BaseTestUnit');
const AuthorizerAccessToken = require('../../dist/OpenPlatform/AuthorizerAccessToken');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should get correct appid and token', async () => {
      let token = new AuthorizerAccessToken('mock-appid', 'mock-access_token');
      this.assert.strictEqual(token.getAppId(), 'mock-appid');
      this.assert.strictEqual(await token.getToken(), 'mock-access_token');
      this.assert.strictEqual(token.toString(), 'mock-access_token');
      this.assert.deepStrictEqual(await token.toQuery(), {
        'access_token': 'mock-access_token',
      });
    });

  }
}

new TestUnit('OpenPlatform/AuthorizerAccessToken');
