
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it('generate()', async () => {
      this.mockResponse({
        errcode: 0,
        errmsg: 'ok',
        url_link: 'mock_link',
      });

      let res = await this.mockRequest('generate', {
        "path": "/pages/publishHomework/publishHomework",
        "query": "",
        "is_expire": true,
        "expire_type": 1,
        "expire_interval": 1,
        "env_version": "release",
        "cloud_base":
        {
          "env": "xxx",
          "domain": "xxx.xx",
          "path": "/jump-wxa.html",
          "query": "a=1&b=2"
        }
      });

      this.assert.strictEqual(res.errcode, 0);
      this.assert.strictEqual(res.errmsg, 'ok');
      this.assert.strictEqual(res.url_link, 'mock_link');
    });

  }
}

new TestUnit('MiniProgram', 'url_link', {
  app_id: 'abc@123',
  secret: '123456',
});
