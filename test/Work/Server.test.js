const BaseTestUnit = require('../BaseTestUnit');
const { Work, ServerRequest } = require('../../dist/');
const { parseXml } = require('../../dist/Core/Support/Utils');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should response the same echostr', async () => {
      let request = (new ServerRequest('GET', 'http://www.easywechat.com/')).withQueryParams({
        echostr: 'P9nAzCzyDtyTWESHep1vC5X9xho/qYX3Zpb4yKa9SKld1DsH3Iyt3tP3zNdtp+4RPcs8TgAE7OaBO+FZXvnaqQ==',
        msg_signature: '5c45ff5e21c57e6ad56bac8758b79b1d9ac89fd3',
        timestamp: '1409659589',
        nonce: '263014780',
      });

      let app = new Work({
        corp_id: 'wx5823bf96d3bd56c7',
        secret: 'secret',
        token: 'QDG6eK',
        aes_key: 'jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C',
      });
      app.setRequest(request);
      let response = await app.getServer().serve();

      this.assert.strictEqual(response.getBody().toString(), '1616140317555161061');
    });

    it('Should response the same echostr via IncomingMessage', async () => {
      let req = {
        url: 'http://www.easywechat.com/?echostr=P9nAzCzyDtyTWESHep1vC5X9xho%2FqYX3Zpb4yKa9SKld1DsH3Iyt3tP3zNdtp%2B4RPcs8TgAE7OaBO%2BFZXvnaqQ%3D%3D&msg_signature=5c45ff5e21c57e6ad56bac8758b79b1d9ac89fd3&timestamp=1409659589&nonce=263014780',
        method: 'post',
        headers: {
          'content-length': 0,
          'content-type': 'text/xml',
        },
      };
      let request = await ServerRequest.createFromIncomingMessage(req, {
        foo: 'bar',
      });

      let app = new Work({
        corp_id: 'wx5823bf96d3bd56c7',
        secret: 'secret',
        token: 'QDG6eK',
        aes_key: 'jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C',
      });
      app.setRequest(request);
      let response = await app.getServer().serve();

      this.assert.strictEqual(response.getBody().toString(), '1616140317555161061');
    });

    it('Should response success without handler', async () => {
      let body = `<xml>
        <ToUserName><![CDATA[wx5823bf96d3bd56c7]]></ToUserName>
        <Encrypt><![CDATA[RypEvHKD8QQKFhvQ6QleEB4J58tiPdvo+rtK1I9qca6aM/wvqnLSV5zEPeusUiX5L5X/0lWfrf0QADHHhGd3QczcdCUpj911L3vg3W/sYYvuJTs3TUUkSUXxaccAS0qhxchrRYt66wiSpGLYL42aM6A8dTT+6k4aSknmPj48kzJs8qLjvd4Xgpue06DOdnLxAUHzM6+kDZ+HMZfJYuR+LtwGc2hgf5gsijff0ekUNXZiqATP7PF5mZxZ3Izoun1s4zG4LUMnvw2r+KqCKIw+3IQH03v+BCA9nMELNqbSf6tiWSrXJB3LAVGUcallcrw8V2t9EL4EhzJWrQUax5wLVMNS0+rUPA3k22Ncx4XXZS9o0MBH27Bo6BpNelZpS+/uh9KsNlY6bHCmJU9p8g7m3fVKn28H3KDYA5Pl/T8Z1ptDAVe0lXdQ2YoyyH2uyPIGHBZZIs2pDBS8R07+qN+E7Q==]]></Encrypt>
        <AgentID><![CDATA[218]]></AgentID>
      </xml>`;
      let request = (new ServerRequest('POST', 'http://www.easywechat.com/', {}, body)).withQueryParams({
        msg_signature: '477715d11cdb4164915debcba66cb864d751f3e6',
        timestamp: '1409659813',
        nonce: '1372623149',
      });

      let app = new Work({
        corp_id: 'wx5823bf96d3bd56c7',
        secret: 'secret',
        token: 'QDG6eK',
        aes_key: 'jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C',
      });
      app.setRequest(request);
      let response = await app.getServer().serve();

      this.assert.strictEqual(response.getBody().toString(), 'SUCCESS');
    });

    it('Should response from message handler', async () => {
      let app = new Work({
        corp_id: 'wx5823bf96d3bd56c7',
        secret: 'secret',
        token: 'QDG6eK',
        aes_key: 'jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C',
      });

      let body = `<xml>
        <ToUserName><![CDATA[toUser]]></ToUserName>
        <FromUserName><![CDATA[fromUser]]></FromUserName>
        <CreateTime>1403610513</CreateTime>
        <MsgType><![CDATA[event]]></MsgType>
        <Event><![CDATA[change_contact]]></Event>
        <ChangeType>change_contact</ChangeType>
        <UserID><![CDATA[zhangsan]]></UserID>
      </xml>`;
      let request = await this.createEncryptedMessageRequest(body, app.getEncryptor());

      app.setRequest(request);
      let server = app.getServer();

      server
      .addMessageListener('event', function (message) {
        return 'foo';
      })
      .addEventListener('change_contact', function (message) {
        return 'bar';
      });

      let response = await server.serve();

      let xml = await this.decryptMessage(response.getBody().toString(), app.getEncryptor());

      this.assert.strictEqual(xml.ToUserName, 'fromUser');
      this.assert.strictEqual(xml.FromUserName, 'toUser');
      this.assert.strictEqual(xml.MsgType, 'text');
      this.assert.strictEqual(xml.Content, 'foo');
    });

    it('Should response from event handler', async () => {

      let app = new Work({
        corp_id: 'wx5823bf96d3bd56c7',
        secret: 'secret',
        token: 'QDG6eK',
        aes_key: 'jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C',
      });

      let body = `<xml>
        <ToUserName><![CDATA[toUser]]></ToUserName>
        <FromUserName><![CDATA[fromUser]]></FromUserName>
        <CreateTime>1403610513</CreateTime>
        <MsgType><![CDATA[event]]></MsgType>
        <Event><![CDATA[change_contact]]></Event>
        <ChangeType>update_user</ChangeType>
        <UserID><![CDATA[zhangsan]]></UserID>
      </xml>`;
      let request = await this.createEncryptedMessageRequest(body, app.getEncryptor());

      app.setRequest(request);
      let server = app.getServer();

      server
      .addMessageListener('text', function (message) {
        return 'message';
      })
      .handleUserUpdated(function (message) {
        return 'update_user';
      })
      .addEventListener('unsubscribe', function (message) {
        return 'unsubscribe';
      });

      let response = await server.serve();

      let xml = await this.decryptMessage(response.getBody().toString(), app.getEncryptor());

      this.assert.strictEqual(xml.ToUserName, 'fromUser');
      this.assert.strictEqual(xml.FromUserName, 'toUser');
      this.assert.strictEqual(xml.MsgType, 'text');
      this.assert.strictEqual(xml.Content, 'update_user');
    });

  }
}

new TestUnit('Work/Server');
