
const BaseClientTest = require('../BaseClientTest');
const Path = require('path');

class TestUnit extends BaseClientTest {

  test() {

    it('checkText()', async () => {
      this.mockResponse('mock-result');

      let resp = await this.mockRequest('checkText', 'foo');

      this.assert.strictEqual(resp, 'mock-result');
    });

    it('checkImage()', async () => {
      this.mockResponse('mock-result');

      let resp = await this.mockRequest('checkImage', Path.resolve(__dirname, '../temp/blank.png'));

      this.assert.strictEqual(resp, 'mock-result');
    });

  }
}

new TestUnit('BaseService', 'content_security', {
  app_id: 'abc@123',
});
