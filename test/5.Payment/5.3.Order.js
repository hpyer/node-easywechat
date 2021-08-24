
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it('unify()', async () => {
      this.mockResponse('{"ip":"123.123.123.123"}');

      let resp = null;
      let server_ip = await this.app.order.getServerIp();
      let order = {
        spbill_create_ip: server_ip,
        appid: 'wx123456',
      };

      this.mockResponse('mock-result');
      order.trade_type = 'NATIVE';
      resp = await this.mockRequest('unify', order);
      this.assert.strictEqual(resp, 'mock-result');

      order.trade_type = 'JSAPI';
      resp = await this.mockRequest('unify', order);
      this.assert.strictEqual(resp, 'mock-result');

      order.trade_type = 'JSAPI';
      order.spbill_create_ip = '';
      resp = await this.mockRequest('unify', order);
      this.assert.strictEqual(resp, 'mock-result');
    });

    it('unify() with contract', async () => {
      this.mockResponse('{"ip":"123.123.123.123"}');

      let resp = null;
      let server_ip = await this.app.order.getServerIp();
      let order = {
        spbill_create_ip: server_ip,
        appid: 'wx123456',
        contract_appid: 'wx123456',
        contract_mchid: 'foo-merchant-id',
        request_serial: 123,
      };

      this.mockResponse('mock-result');

      order.trade_type = 'NATIVE';
      resp = await this.mockRequest('unify', order, true);
      this.assert.strictEqual(resp, 'mock-result');

      order.trade_type = 'JSAPI';
      resp = await this.mockRequest('unify', order, true);
      this.assert.strictEqual(resp, 'mock-result');

      order.trade_type = 'JSAPI';
      order.spbill_create_ip = '';
      resp = await this.mockRequest('unify', order, true);
      this.assert.strictEqual(resp, 'mock-result');
    });

  }
}

new TestUnit('Payment', 'order', {
  app_id: 'abc@123',
  key: '88888888888888888888888888888888',
  mch_id: '888888',
  notify_url: 'http://www.example.com/wx/notify/paied',
  contract_notify_url: 'http://www.example.com/wx/notify/contract',
});
