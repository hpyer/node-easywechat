const BaseTestUnit = require('../BaseTestUnit');
const Authorization = require('../../dist/OpenPlatform/Authorization');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should get correct appid', () => {
      let authorization = new Authorization({
        authorization_info: {
          authorizer_appid: 'mock-appid',
        },
      });
      this.assert.strictEqual(authorization.getAppId(), 'mock-appid');
    });

    it('Should get correct access_token', async () => {
      let authorization = new Authorization({
        authorization_info: {
          authorizer_appid: 'mock-appid',
          authorizer_access_token: 'mock-access_token',
        },
      });
      this.assert.strictEqual(await authorization.getAccessToken().getToken(), 'mock-access_token');
    });

    it('Should get correct refresh_token', () => {
      let authorization = new Authorization({
        authorization_info: {
          authorizer_appid: 'mock-appid',
          authorizer_refresh_token: 'mock-refresh_token',
        },
      });
      this.assert.strictEqual(authorization.getRefreshToken(), 'mock-refresh_token');
    });

  }
}

new TestUnit('OpenPlatform/Authorization');
