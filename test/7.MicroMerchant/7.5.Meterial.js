
const Fs = require('fs');
const Path = require('path');
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it('setSettlementCard()', async () => {
      this.mockResponse('mock-result');

      let params = {
        account_number: '122222',
        bank_name: '浙商银行xxx支行',
      };
      let resp = await this.mockRequest('setSettlementCard', params);

      this.assert.strictEqual(resp, 'mock-result');
    });

    it('updateContact()', async () => {
      this.mockResponse('mock-result');

      let params = {
        mobile_phone: '13200000000',
        email: '13200000000@163.com',
      };
      let resp = await this.mockRequest('updateContact', params);

      this.assert.strictEqual(resp, 'mock-result');
    });

  }
}

new TestUnit('MicroMerchant', 'material', {
  mch_id: 'mock-mch_id',
  key: 'mock-key123456789101234567891011',
  apiv3_key: 'mock-apiv3_key123456789101234567891011',
  cert_path: Path.resolve(__dirname, '../temp/test.pfx'),
  serial_no: 'mock-serial_no',
  certificate: Fs.readFileSync(Path.resolve(__dirname, '../temp/test_public_key.pem')),
});
