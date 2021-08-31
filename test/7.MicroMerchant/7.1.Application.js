
const Path = require('path');
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    [
      'certficates', 'media', 'merchantConfig', 'material', 'withdraw',
    ].map(module => {
      it(`Should has module ${module}`, () => {
        this.assert.strictEqual(this.app[module] && typeof this.app[module] == 'object', true);
      });
    })

  }
}

new TestUnit('MicroMerchant', 'constuctor', {
  mch_id: 'mock-mch_id',
  key: 'mock-key123456789101234567891011',
  apiv3_key: 'mock-apiv3_key123456789101234567891011',
  cert_path: Path.resolve(__dirname, '../temp/test.pfx'),
});
