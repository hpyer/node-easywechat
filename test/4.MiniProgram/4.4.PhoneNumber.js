
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it('getUserPhoneNumber()', async () => {
      this.mockResponse({
        errcode: 0,
        errmsg: 'ok',
        phone_info: {
          "phoneNumber": "mock-phone-number",
          "purePhoneNumber": "xxxxxx",
          "countryCode": 86,
          "watermark": {
            "timestamp": 1637744274,
            "appid": "xxxx"
          }
        },
      });

      let res = await this.mockRequest('getUserPhoneNumber', 'mock-code');

      this.assert.strictEqual(res.errcode, 0);
      this.assert.strictEqual(res.errmsg, 'ok');
      this.assert.strictEqual(res.phone_info.phoneNumber, 'mock-phone-number');
    });

  }
}

new TestUnit('MiniProgram', 'phone_number', {
  app_id: 'abc@123',
  secret: '123456',
});
