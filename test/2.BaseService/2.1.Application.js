
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it('Should has module jssdk', async () => {
      this.assert.strictEqual(this.app.jssdk && typeof this.app.jssdk == 'object', true);
    });

    it('Should has module media', async () => {
      this.assert.strictEqual(this.app.media && typeof this.app.media == 'object', true);
    });

    it('Should has module qrcode', async () => {
      this.assert.strictEqual(this.app.qrcode && typeof this.app.qrcode == 'object', true);
    });

    it('Should has module url', async () => {
      this.assert.strictEqual(this.app.url && typeof this.app.url == 'object', true);
    });

    it('Should has module content_security', async () => {
      this.assert.strictEqual(this.app.content_security && typeof this.app.content_security == 'object', true);
    });

  }
}

new TestUnit('BaseService', 'constuctor', {
  app_id: 'abc@123',
});
