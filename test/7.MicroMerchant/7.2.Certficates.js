
const Path = require('path');
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it(`get()`, async () => {
      this.mockResponse({
        return_code: 'SUCCESS',
        return_msg: 'OK',
        result_code: 'SUCCESS',
        nonce_str: 'mock-nonce_str',
        sign: 'mock-sign',
        mch_id: 'mock-mch_id',
        certificates: '{"data":[{"serial_no":"mock-serial_no","encrypt_certificate":{"nonce":"mock-nonce","associated_data":"mock-aad","ciphertext":"G+Eu6w4YL9QpnIl2IVCs/GlKp51er+CQvq2A1ntkiacK"}}]}',
      });
      let resp = await this.mockRequest('get');
      this.assert.strictEqual(resp.serial_no, 'mock-serial_no');
      this.assert.deepStrictEqual(resp.certificates, 'mock-certificates');
    });

  }
}

new TestUnit('MicroMerchant', 'certficates', {
  mch_id: 'mock-mch_id',
  key: 'mock-key123456789101234567891011',
  apiv3_key: 'mock-apiv3_key123456789101234567',
  cert_path: Path.resolve(__dirname, '../temp/test.pfx'),
});
