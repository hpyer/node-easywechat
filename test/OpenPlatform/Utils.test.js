const BaseTestUnit = require('../BaseTestUnit');
const HttpClient = require('../../dist/Core/HttpClient/HttpClient')
const { OpenPlatform } = require('../../dist/');
const Utils = require('../../dist/OpenPlatform/Utils');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should return correctly via codeToSession', async () => {

      let result = {
        openid: 'o6_bmjrPTlm6_2sgVt7hMZOPxxxx',
        session_key: 'tiihtNczf5v6AKRyjwExxxx=',
        unionid: 'o6_bmasdasdsad6_2sgVt7hMZOxxxx',
        errcode: 0,
        errmsg: 'ok',
      };

      let client = HttpClient.create();
      client = this.getMockedHttpClient(client);
      client.mock('get', '/sns/oauth2/access_token').reply(200, result);

      let app = new OpenPlatform({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aes_key',
      });

      app.setHttpClient(client);

      let utils = new Utils(app);

      let res = await utils.codeToSession('mock-js-code');
      this.assert.deepStrictEqual(res, result);
    });

  }
}

new TestUnit('OpenPlatform/Utils');
