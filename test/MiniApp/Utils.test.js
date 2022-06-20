const BaseTestUnit = require('../BaseTestUnit');
const HttpClient = require('../../dist/Core/HttpClient/HttpClient')
const { MiniApp } = require('../../dist/');
const Utils = require('../../dist/MiniApp/Utils');

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
      client.mock('get', '/sns/jscode2session').reply(200, result);

      let app = new MiniApp({
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

    it('Should return decrypt data correctly', () => {

      let sessionKey = 'tiihtNczf5v6AKRyjwEUhQ==';
      let encryptedData = `CiyLU1Aw2KjvrjMdj8YKliAjtP4gsMZM
QmRzooG2xrDcvSnxIMXFufNstNGTyaGS
9uT5geRa0W4oTOb1WT7fJlAC+oNPdbB+
3hVbJSRgv+4lGOETKUQz6OYStslQ142d
NCuabNPGBzlooOmB231qMM85d2/fV6Ch
evvXvQP8Hkue1poOFtnEtpyxVLW1zAo6
/1Xx1COxFvrc2d7UL/lmHInNlxuacJXw
u0fjpXfz/YqYzBIBzD6WUfTIF9GRHpOn
/Hz7saL8xz+W//FRAUid1OksQaQx4CMs
8LOddcQhULW4ucetDf96JcR3g0gfRK4P
C7E/r7Z6xNrXd2UIeorGj5Ef7b1pJAYB
6Y5anaHqZ9J6nKEBvB4DnNLIVWSgARns
/8wR2SiRS7MNACwTyrGvt9ts8p12PKFd
lqYTopNHR1Vf7XjfhQlVsAJdNiKdYmYV
oKlaRv85IfVunYzO0IKXsyl7JCUjCpoG
20f0a04COwfneQAGGwd5oa+T8yO5hzuy
Db/XcxxmK01EpqOyuxINew==`;
      let iv = 'r7BXXKkLb8qrSNn05n0qiA==';

      let app = new MiniApp({
        app_id: 'mock-appid',
        secret: 'mock-secret',
        token: 'mock-token',
        aes_key: 'mock-aes_key',
      });

      let utils = new Utils(app);

      let res = utils.decryptSession(sessionKey, iv, encryptedData);
      this.assert.deepStrictEqual(res, {
        'openId': 'oGZUI0egBJY1zhBYw2KhdUfwVJJE',
        'nickName': 'Band',
        'gender': 1,
        'language': 'zh_CN',
        'city': 'Guangzhou',
        'province': 'Guangdong',
        'country': 'CN',
        'avatarUrl': 'http://wx.qlogo.cn/mmopen/vi_32/aSKcBBPpibyKNicHNTMM0qJVh8Kjgiak2AHWr8MHM4WgMEm7GFhsf8OYrySdbvAMvTsw3mo8ibKicsnfN5pRjl1p8HQ/0',
        'unionId': 'ocMvos6NjeKLIBqg5Mr9QjxrP1FA',
        'watermark': {
          'timestamp': 1477314187,
          'appid': 'wx4f4bc4dec97d474b',
        },
      });
    });

  }
}

new TestUnit('MiniApp/Utils');
