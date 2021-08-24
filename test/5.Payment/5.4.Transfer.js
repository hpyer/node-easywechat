
const BaseClientTest = require('../BaseClientTest');
const Path = require('path');

class TestUnit extends BaseClientTest {

  test() {

    it('toBalance()', async () => {

      let xml = `<xml>
<return_code><![CDATA[SUCCESS]]></return_code>
<return_msg><![CDATA[支付成功]]></return_msg>
<result_code><![CDATA[SUCCESS]]></result_code>
<err_code><![CDATA[SUCCESS]]></err_code>
<err_code_des><![CDATA[微信侧受理成功]]></err_code_des>
<nonce_str><![CDATA[50780e0cca98c8c8e814883e5caa672e]]></nonce_str>
<mch_id><![CDATA[2302758702]]></mch_id>
<partner_trade_no><![CDATA[1212121221278]]></partner_trade_no>
<amount>500</amount>
<payment_no><![CDATA[10000600500852017030900000020006012]]></payment_no>
<cmms_amt>0</cmms_amt>
</xml>`;

      let headers = {
        'content-type': 'text/xml',
      };

      this.mockResponseMulti([
        { body: '{"ip":"123.123.123.123"}' },
        { body: xml, headers },
      ]);

      let resp = await this.mockRequest('toBalance', {
        partner_trade_no: '1233455',
        openid: 'oxTWIuGaIt6gTKsQRLau2M0yL16E',
        check_name: 'FORCE_CHECK',
        re_user_name: '王小帅',
        amount: 10000,
        desc: '理赔',
      });
      this.assert.strictEqual(resp.return_code, 'SUCCESS');
      this.assert.strictEqual(resp.result_code, 'SUCCESS');
      this.assert.strictEqual(resp.payment_no, '10000600500852017030900000020006012');


      this.mockRest();
    });

    it('toBankCard()', async () => {

      let xml = `<xml>
<return_code><![CDATA[SUCCESS]]></return_code>
<return_msg><![CDATA[支付成功]]></return_msg>
<result_code><![CDATA[SUCCESS]]></result_code>
<err_code><![CDATA[SUCCESS]]></err_code>
<err_code_des><![CDATA[微信侧受理成功]]></err_code_des>
<nonce_str><![CDATA[50780e0cca98c8c8e814883e5caa672e]]></nonce_str>
<mch_id><![CDATA[2302758702]]></mch_id>
<partner_trade_no><![CDATA[1212121221278]]></partner_trade_no>
<amount>500</amount>
<payment_no><![CDATA[10000600500852017030900000020006012]]></payment_no>
<cmms_amt>0</cmms_amt>
</xml>`;

      let headers = {
        'content-type': 'text/xml',
      };

      this.mockResponse(xml, headers);

      let resp = await this.mockRequest('toBankCard', {
        partner_trade_no: '1229222022',
        enc_bank_no: '6214830901234564',
        enc_true_name: '张三',
        bank_code: '1001',
        amount: 100,
        desc: '测试',
      });
      this.assert.strictEqual(resp.return_code, 'SUCCESS');
      this.assert.strictEqual(resp.result_code, 'SUCCESS');
      this.assert.strictEqual(resp.payment_no, '10000600500852017030900000020006012');

    });

  }
}

new TestUnit('Payment', 'transfer', {
  app_id: 'abc@123',
  key: '88888888888888888888888888888888',
  mch_id: '888888',
  cert_path: Path.resolve(__dirname, '../temp/test.pfx'),
  rsa_public_key_path: Path.resolve(__dirname, '../temp/test_public_key.pem'),
  notify_url: 'http://www.example.com/wx/notify/paied',
  contract_notify_url: 'http://www.example.com/wx/notify/contract',
});
