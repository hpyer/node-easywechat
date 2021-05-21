
const { Markdown } = require('../../dist/Core/Messages');
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it('messenger.send()', async () => {
      this.mockResponse({
        "errcode": 0,
        "errmsg": "ok",
        "invaliduser": "userid1|userid2",
        "invalidparty": "partyid1|partyid2",
        "invalidtag": "tagid1|tagid2"
      });

      let message = new Markdown({
        content: `mock-content`
      });

      let res = await this.app.messenger.ofAgent(123456).toUser('username').send(message);

      this.assert.strictEqual(res.errcode, 0);
      this.assert.strictEqual(res.errmsg, 'ok');
      this.assert.strictEqual(res.invaliduser, 'userid1|userid2');
      this.assert.strictEqual(res.invalidparty, 'partyid1|partyid2');
      this.assert.strictEqual(res.invalidtag, 'tagid1|tagid2');
    });

  }
}

new TestUnit('Work', 'message', {
  corp_id: 'abc@123',
  secret: '123456',
});
