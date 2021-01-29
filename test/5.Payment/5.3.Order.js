
const BaseClientTest = require('../BaseClientTest');
const EasyWechat = require('../../dist');
const Utils = require('../../dist/Core/Utils');
const Xml2js = require('xml2js');

class TestUnit extends BaseClientTest {

  test() {

    it('unify()', async () => {
      this.mockResponse('mock-result');

      let resp = null;
      let server_ip = await this.app.order.getServerIp();
      let order = {
        spbill_create_ip: server_ip,
        appid: 'wx123456',
      };

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
      this.mockResponse('mock-result');

      let resp = null;
      let server_ip = await this.app.order.getServerIp();
      let order = {
        spbill_create_ip: server_ip,
        appid: 'wx123456',
        contract_appid: 'wx123456',
        contract_mchid: 'foo-merchant-id',
        request_serial: 123,
      };

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
