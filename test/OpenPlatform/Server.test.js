const BaseTestUnit = require('../BaseTestUnit');
const Server = require('../../dist/OpenPlatform/Server');
const Encryptor = require('../../dist/Core/Encryptor');
const { ServerRequest } = require('../../dist/');
const { parseXml } = require('../../dist/Core/Support/Utils');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should handle with authorized event', async () => {
      let body = `<xml>
        <AppId>第三方平台appid</AppId>
        <CreateTime>1413192760</CreateTime>
        <InfoType>authorized</InfoType>
        <AuthorizerAppid>公众号appid</AuthorizerAppid>
        <AuthorizationCode>授权码</AuthorizationCode>
        <AuthorizationCodeExpiredTime>过期时间</AuthorizationCodeExpiredTime>
        <PreAuthCode>预授权码</PreAuthCode>
      </xml>`;

      let encryptor = new Encryptor('wx5823bf96d3bd56c7', 'QDG6eK', 'jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C');
      body = encryptor.encrypt(body);
      let xml = await parseXml(body);

      let request = new ServerRequest('POST', 'http://www.easywechat.com/', {}, body);
      request.withQueryParams({
        msg_signature: xml['MsgSignature'],
        timestamp: xml['TimeStamp'],
        nonce: xml['Nonce'],
      });

      let server = new Server(encryptor, request);
      let handleResult = '';
      server.handleAuthorized(function (message) {
        handleResult = 'authorized-event-handled';
      });
      let response = await server.serve();

      this.assert.strictEqual(response.getBody().toString(), 'success');
      this.assert.strictEqual(handleResult, 'authorized-event-handled');
    });

    it('Should handle with unauthorized event', async () => {
      let body = `<xml>
        <AppId>第三方平台appid</AppId>
        <CreateTime>1413192760</CreateTime>
        <InfoType>unauthorized</InfoType>
        <AuthorizerAppid>公众号appid</AuthorizerAppid>
      </xml>`;

      let encryptor = new Encryptor('wx5823bf96d3bd56c7', 'QDG6eK', 'jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C');
      body = encryptor.encrypt(body);
      let xml = await parseXml(body);

      let request = new ServerRequest('POST', 'http://www.easywechat.com/', {}, body);
      request.withQueryParams({
        msg_signature: xml['MsgSignature'],
        timestamp: xml['TimeStamp'],
        nonce: xml['Nonce'],
      });

      let server = new Server(encryptor, request);
      let handleResult = '';
      server.handleUnauthorized(function (message) {
        handleResult = 'unauthorized-event-handled';
      });
      let response = await server.serve();

      this.assert.strictEqual(response.getBody().toString(), 'success');
      this.assert.strictEqual(handleResult, 'unauthorized-event-handled');
    });

    it('Should handle with updateauthorized event', async () => {
      let body = `<xml>
        <AppId>第三方平台appid</AppId>
        <CreateTime>1413192760</CreateTime>
        <InfoType>updateauthorized</InfoType>
        <AuthorizerAppid>公众号appid</AuthorizerAppid>
        <AuthorizationCode>授权码</AuthorizationCode>
        <AuthorizationCodeExpiredTime>过期时间</AuthorizationCodeExpiredTime>
        <PreAuthCode>预授权码</PreAuthCode>
      </xml>`;

      let encryptor = new Encryptor('wx5823bf96d3bd56c7', 'QDG6eK', 'jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C');
      body = encryptor.encrypt(body);
      let xml = await parseXml(body);

      let request = new ServerRequest('POST', 'http://www.easywechat.com/', {}, body);
      request.withQueryParams({
        msg_signature: xml['MsgSignature'],
        timestamp: xml['TimeStamp'],
        nonce: xml['Nonce'],
      });

      let server = new Server(encryptor, request);
      let handleResult = '';
      server.handleAuthorizeUpdated(function (message) {
        handleResult = 'updateauthorized-event-handled';
      });
      let response = await server.serve();

      this.assert.strictEqual(response.getBody().toString(), 'success');
      this.assert.strictEqual(handleResult, 'updateauthorized-event-handled');
    });

    it('Should handle with component_verify_ticket event', async () => {
      let body = `<xml>
        <AppId>some_appid</AppId>
        <CreateTime>1413192605</CreateTime>
        <InfoType>component_verify_ticket</InfoType>
        <ComponentVerifyTicket>some_verify_ticket</ComponentVerifyTicket>
      </xml>`;

      let encryptor = new Encryptor('wx5823bf96d3bd56c7', 'QDG6eK', 'jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C');
      body = encryptor.encrypt(body);
      let xml = await parseXml(body);

      let request = new ServerRequest('POST', 'http://www.easywechat.com/', {}, body);
      request.withQueryParams({
        msg_signature: xml['MsgSignature'],
        timestamp: xml['TimeStamp'],
        nonce: xml['Nonce'],
      });

      let server = new Server(encryptor, request);
      let handleResult = '';
      server.handleVerifyTicketRefreshed(function (message) {
        handleResult = 'verify-ticket-event-handled';
      });
      let response = await server.serve();

      this.assert.strictEqual(response.getBody().toString(), 'success');
      this.assert.strictEqual(handleResult, 'verify-ticket-event-handled');
    });

    it('Should handle with notify_third_fasteregister event', async () => {
      let body = `<xml>
        <AppId><![CDATA[第三方平台appid]]></AppId>
        <CreateTime>1535442403</CreateTime>
        <InfoType><![CDATA[notify_third_fasteregister]]></InfoType>
        <appid>创建小程序appid</appid>
        <status>0</status>
        <auth_code>xxxxx第三方授权码</auth_code>
        <msg>OK</msg>
        <info>
        <name><![CDATA[企业名称]]></name>
        <code><![CDATA[企业代码]]></code>
        <code_type>1</code_type>
        <legal_persona_wechat><![CDATA[法人微信号]]></legal_persona_wechat>
        <legal_persona_name><![CDATA[法人姓名]]></legal_persona_name>
        <component_phone><![CDATA[第三方联系电话]]></component_phone>
        </info>
      </xml>`;

      let encryptor = new Encryptor('wx5823bf96d3bd56c7', 'QDG6eK', 'jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C');
      body = encryptor.encrypt(body);
      let xml = await parseXml(body);

      let request = new ServerRequest('POST', 'http://www.easywechat.com/', {}, body);
      request.withQueryParams({
        msg_signature: xml['MsgSignature'],
        timestamp: xml['TimeStamp'],
        nonce: xml['Nonce'],
      });

      let server = new Server(encryptor, request);
      let handleResult = '';
      server.handleThirdFastRegister(function (message) {
        handleResult = 'notify_third_fasteregister-event-handled';
      });
      let response = await server.serve();

      this.assert.strictEqual(response.getBody().toString(), 'success');
      this.assert.strictEqual(handleResult, 'notify_third_fasteregister-event-handled');
    });

  }
}

new TestUnit('OpenPlatform/Server');
