
const BaseClientTest = require('../BaseClientTest');

class TestUnit extends BaseClientTest {

  test() {

    [
      'oa', 'agent', 'calendar', 'chat', 'corp_group', 'department', 'external_contact',
      'contact_way', 'external_contact_statistics', 'external_contact_message',
      'school', 'external_contact_moment', 'group_robot', 'group_robot_messenger',
      'invoice', 'jssdk', 'live', 'media', 'menu', 'message', 'messenger',
      'msg_audit', 'user', 'tag', 'encryptor', 'server', 'oauth',
    ].map(module => {
      it(`Should has module ${module}`, () => {
        this.assert.strictEqual(this.app[module] && typeof this.app[module] == 'object', true);
      });
    })

    it('Should get client and send request correctly', async () => {
      let client = this.app.getClient();
      this.assert.strictEqual(client.httpGet && typeof client.httpGet == 'function', true);

      let key = await this.app.access_token.getCacheKey();
      this.mockCache({
        access_token: 'mock-access_token',
        expires_in: 7200,
      }, key);

      this.mockResponse({
        foo: 'bar',
      });
      let resp = await client.httpGet('/mock-url');
      this.assert.deepStrictEqual(resp, { foo: 'bar' });
    });

  }
}

new TestUnit('Work', 'constuctor', {
  corp_id: 'abc@123',
  agent_id: '100000',
  secret: '123456',
});
