
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

  }
}

new TestUnit('Work', 'oauth', {
  corp_id: 'abc@123',
  agent_id: '100000',
  secret: '123456',
});
