
const Path = require('path');
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it('queryWithdrawalStatus()', async () => {
      this.mockResponse('mock-result');

      let date = '20210801';
      let sub_mch_id = '1900000109';
      let resp = await this.mockRequest('queryWithdrawalStatus', date, sub_mch_id);

      this.assert.strictEqual(resp, 'mock-result');
    });

    it('requestWithdraw()', async () => {
      this.mockResponse('mock-result');

      let date = '20210801';
      let sub_mch_id = '1900000109';
      let resp = await this.mockRequest('requestWithdraw', date, sub_mch_id);

      this.assert.strictEqual(resp, 'mock-result');
    });

  }
}

new TestUnit('MicroMerchant', 'withdraw', {
  mch_id: 'mock-mch_id',
  key: 'mock-key123456789101234567891011',
  apiv3_key: 'mock-apiv3_key123456789101234567891011',
  cert_path: Path.resolve(__dirname, '../temp/test.pfx'),
});
