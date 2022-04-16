
const BaseClientTest = require('../BaseClientTest');
const EasyWechat = require('../../dist');

class TestUnit extends BaseClientTest {

  test() {

    it('Should return correct message', async () => {
      const news = new EasyWechat.Messages.News(
        [
          {
            'title': 'Happy Day Michael Ray',
            'description': 'Is Really A Happy Day',
            'url': 'URL',
            'picurl': 'PIC_URL'
          },
        ]
      );

      let message = await this.app.customer_service.message(news).to('mock-openid').getMessage();

      this.assert.strictEqual(message instanceof EasyWechat.Messages.Message, true);

      let finalMessage = message.transformForJsonRequest({
        customservice: {
          kf_account: 'mock-account',
        }
      });

      this.assert.strictEqual(finalMessage.msgtype, 'news');
      this.assert.strictEqual(finalMessage.customservice.kf_account, 'mock-account');
      this.assert.strictEqual(finalMessage.news.articles[0].title, 'Happy Day Michael Ray');
    });

    it('send()', async () => {
      this.mockResponse({
        errcode: 0,
        errmsg: 'ok',
      });

      const news = new EasyWechat.Messages.News(
        [
          {
            'title': 'Happy Day Michael Ray',
            'description': 'Is Really A Happy Day',
            'url': 'URL',
            'picurl': 'PIC_URL'
          },
        ]
      );

      let res = await this.app.customer_service.message(news).to('mock-openid').send();

      this.assert.strictEqual(res.errcode, 0);
      this.assert.strictEqual(res.errmsg, 'ok');
    });

  }
}

new TestUnit('OfficialAccount', 'customer_service', {
  app_id: 'abc@123',
  secret: '123456',
  file_cache: {
    path: './test/temp/',
  },
});
