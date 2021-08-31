
const Path = require('path');
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it('upload()', async () => {
      this.mockResponse('mock-result');

      let resp = await this.mockRequest('upload', Path.resolve(__dirname, '../temp/blank.png'));

      this.assert.strictEqual(resp.data, 'mock-result');
    });

  }
}

new TestUnit('MicroMerchant', 'media', {
  mch_id: 'mock-mch_id',
  key: 'mock-key123456789101234567891011',
  apiv3_key: 'mock-apiv3_key123456789101234567891011',
  cert_path: Path.resolve(__dirname, '../temp/test.pfx'),
});
