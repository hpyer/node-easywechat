
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    it('buildConfig()', async () => {
      this.mockResponse(JSON.stringify({
        ticket: 'mock-ticket',
        expires_in: 7200,
      }));

      let res = await this.app.jssdk.buildConfig(['api1', 'api2'], false, false, false, [], 'http://www.exapmle.com');

      this.assert.strictEqual(JSON.stringify(res.jsApiList), '["api1","api2"]');
      this.assert.strictEqual(res.debug, false);
      this.assert.strictEqual(res.beta, false);
      this.assert.strictEqual(JSON.stringify(res.openTagList), '[]');
      this.assert.strictEqual(res.appId, 'abc@123');
    });

  }
}

new TestUnit('BaseService', 'jssdk', {
  app_id: 'abc@123',
  file_cache: {
    path: './test/temp/',
  },
});
