
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  /**
   *
   * @returns {import('../../dist/Payment/Application').default}
   */
  getApp() {
    return this.app;
  }

  test() {

    [
      'bill', 'coupon', 'jssdk', 'merchant', 'order', 'redpack',
      'refund', 'reverse', 'sandbox', 'transfer', 'security', 'profit_sharing',
    ].map(module => {
      it(`Should has module ${module}`, () => {
        this.assert.strictEqual(this.app[module] && typeof this.app[module] == 'object', true);
      });
    })

    it('Should get client and send request correctly', async () => {
      let client = this.getApp().getClient();
      this.assert.strictEqual(client.safeRequest && typeof client.safeRequest == 'function', true);

      let key = await this.app.access_token.getCacheKey();
      this.mockCache({
        access_token: 'mock-access_token',
        expires_in: 7200,
      }, key);

      this.mockResponse({
        foo: 'bar',
      });
      let resp = await client.request('/mock-url');
      this.assert.deepStrictEqual(resp, { foo: 'bar' });
    });

  }
}

new TestUnit('Payment', 'constuctor', {
  app_id: 'abc@123',
  key: '12345678901234567890123456789012',
  mch_id: '888888',
});
