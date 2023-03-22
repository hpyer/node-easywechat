const BaseTestUnit = require('../BaseTestUnit');
const Server = require('../../dist/OpenWork/Server');
const Encryptor = require('../../dist/OpenWork/Encryptor');
const SuiteEncryptor = require('../../dist/OpenWork/SuiteEncryptor');
const { ServerRequest } = require('../../dist/');
const { parseXml } = require('../../dist/Core/Support/Utils');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should handle correctly with auth events', async () => {
      let suiteEncryptor = new SuiteEncryptor('ww4asffe9xxx4c0f4c', 'QDG6eK', 'jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C');

      let providerEncryptor = new Encryptor('wx5823bf96d3bd56c7', 'QDG6eK', 'jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C');

      let body = `<xml>
	<SuiteId><![CDATA[ww4asffe9xxx4c0f4c]]></SuiteId>
	<AuthCode><![CDATA[AUTHCODE]]></AuthCode>
	<InfoType><![CDATA[create_auth]]></InfoType>
	<TimeStamp>1403610513</TimeStamp>
	<State><![CDATA[123]]></State>
</xml>`;
      let request = await this.createEncryptedMessageRequest(body, suiteEncryptor);

      let server = new Server(suiteEncryptor, providerEncryptor, request);
      let handleResult = '';
      server.handleAuthCreated(function (message) {
        handleResult = 'auth-created';
      });
      let response = await server.serve();

      this.assert.strictEqual(response.getBody().toString(), 'success');
      this.assert.strictEqual(handleResult, 'auth-created');
    });

    it('Should handle correctly with user events', async () => {
      let suiteEncryptor = new SuiteEncryptor('ww4asffe9xxx4c0f4c', 'QDG6eK', 'jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C');

      let providerEncryptor = new Encryptor('wx5823bf96d3bd56c7', 'QDG6eK', 'jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C');

      let body = `<xml>
	<SuiteId><![CDATA[ww4asffe99e54c0f4c]]></SuiteId>
	<AuthCorpId><![CDATA[wxf8b4f85f3axxxxxx]]></AuthCorpId>
	<InfoType><![CDATA[change_contact]]></InfoType>
	<TimeStamp>1403610513</TimeStamp>
	<ChangeType><![CDATA[create_user]]></ChangeType>
	<UserID><![CDATA[zhangsan]]></UserID>
	<OpenUserID><![CDATA[woxxx]]></OpenUserID>
	<Name><![CDATA[张三]]></Name>
</xml>`;
      let request = await this.createEncryptedMessageRequest(body, suiteEncryptor);

      let server = new Server(suiteEncryptor, providerEncryptor, request);
      let handleResult = '';
      server.handleUserCreated(function (message) {
        handleResult = 'user-created';
      });
      let response = await server.serve();

      this.assert.strictEqual(response.getBody().toString(), 'success');
      this.assert.strictEqual(handleResult, 'user-created');
    });

  }
}

new TestUnit('OpenWork/Server');
