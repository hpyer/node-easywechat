
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it(`Should throw errors`, async () => {
      try {
        await this.app.subscribe_message.send({});
      }
      catch (e) {
        this.assert.strictEqual(e.message, 'Attribute "touser" can not be empty!');
      }

      try {
        await this.app.subscribe_message.send({
          touser: 'mock-openid',
        });
      }
      catch (e) {
        this.assert.strictEqual(e.message, 'Attribute "template_id" can not be empty!');
      }

      try {
        await this.app.subscribe_message.send({
          touser: 'mock-openid',
          template_id: 'mock-template_id',
        });
      }
      catch (e) {
        this.assert.strictEqual(e.message, 'Attribute "data" can not be empty!');
      }
    });

    it(`Should be formatted as expected message`, () => {
      this.assert.deepStrictEqual(this.app.subscribe_message.formatMessage({
        touser: 'mock-openid',
        template_id: 'mock-template_id',
        page: '',
        miniprogram: '',
        data: {
          thing1: 'thing1',
        },
      }), {
        touser: 'mock-openid',
        template_id: 'mock-template_id',
        page: '',
        miniprogram: '',
        data: {
          thing1: {
            value: 'thing1'
          },
        },
      });
    });

    it('send()', async () => {
      this.mockResponse({
        errcode: 0,
        errmsg: 'ok',
      });

      let res = await this.app.subscribe_message.send({
        touser: 'mock-openid',
        template_id: 'mock-template_id',
        page: '',
        miniprogram: '',
        data: {
          thing1: 'thing1',
        },
      });

      this.assert.strictEqual(res.errcode, 0);
      this.assert.strictEqual(res.errmsg, 'ok');
    });

  }
}

new TestUnit('OfficialAccount', 'subscribe_message', {
  app_id: 'abc@123',
  secret: '123456',
  file_cache: {
    path: './test/temp/',
  },
});
