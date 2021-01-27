
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    [
      'bill', 'coupon', 'jssdk', 'merchant', 'order', 'redpack',
      'refund', 'reverse', 'sandbox', 'transfer', 'security', 'profit_sharing',
    ].map(module => {
      it(`Should has module ${module}`, () => {
        this.assert.strictEqual(this.app[module] && typeof this.app[module] == 'object', true);
      });
    })

  }
}

new TestUnit('Payment', 'constuctor', {
  app_id: 'abc@123',
  key: '123456',
  mch_id: '888888',
});
