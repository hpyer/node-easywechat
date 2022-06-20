const BaseTestUnit = require('../BaseTestUnit');
const Server = require('../../dist/MiniApp/Server');
const { ServerRequest } = require('../../dist/');
const { parseXml } = require('../../dist/Core/Support/Utils');

class TestUnit extends BaseTestUnit {

  test() {

    it('Should response the same echostr', async () => {
      let request = (new ServerRequest('GET', 'http://www.easywechat.com/?echostr=mock-echostr')).withQueryParams({
        echostr: 'mock-echostr',
      });

      let server = new Server(request);
      let response = await server.serve();

      this.assert.strictEqual(response.getBody().toString(), 'mock-echostr');
    });

    it('Should response the same echostr via IncomingMessage', async () => {
      let req = {
        url: 'http://www.easywechat.com/?echostr=mock-echostr',
        method: 'post',
        headers: {
          'content-length': 0,
          'content-type': 'text/xml',
        },
      };
      let request = ServerRequest.createFromIncomingMessage(req);

      let server = new Server(request);
      let response = await server.serve();

      this.assert.strictEqual(response.getBody().toString(), 'mock-echostr');
    });

    it('Should response success without handler', async () => {
      let body = `<xml>
        <ToUserName><![CDATA[toUser]]></ToUserName>
        <FromUserName><![CDATA[fromUser]]></FromUserName>
        <CreateTime>1348831860</CreateTime>
        <MsgType><![CDATA[text]]></MsgType>
        <Content><![CDATA[this is a test]]></Content>
        <MsgId>1234567890123456</MsgId>
      </xml>`;
      let request = (new ServerRequest('POST', 'http://www.easywechat.com/', {}, body));

      let server = new Server(request);
      let response = await server.serve();

      this.assert.strictEqual(response.getBody().toString(), 'success');
    });

    it('Should response from message handler', async () => {
      let body = `<xml>
        <ToUserName><![CDATA[toUser]]></ToUserName>
        <FromUserName><![CDATA[fromUser]]></FromUserName>
        <CreateTime>1348831860</CreateTime>
        <MsgType><![CDATA[text]]></MsgType>
        <Content><![CDATA[this is a test]]></Content>
        <MsgId>1234567890123456</MsgId>
      </xml>`;
      let request = new ServerRequest('POST', 'http://www.easywechat.com/', {}, body);

      let server = new Server(request);

      server
      .addMessageListener('text', function (message) {
        return 'message';
      })
      .addEventListener('subscribe', function (message) {
        return 'subscribe';
      });

      let response = await server.serve();

      let xml = await parseXml(response.getBody().toString());

      this.assert.strictEqual(xml.ToUserName, 'fromUser');
      this.assert.strictEqual(xml.FromUserName, 'toUser');
      this.assert.strictEqual(xml.MsgType, 'text');
      this.assert.strictEqual(xml.Content, 'message');
    });

    it('Should response from event handler', async () => {
      let body = `<xml>
        <ToUserName><![CDATA[toUser]]></ToUserName>
        <FromUserName><![CDATA[fromUser]]></FromUserName>
        <CreateTime>123456789</CreateTime>
        <MsgType><![CDATA[event]]></MsgType>
        <Event><![CDATA[subscribe]]></Event>
        <EventKey><![CDATA[qrscene_123123]]></EventKey>
        <Ticket><![CDATA[TICKET]]></Ticket>
      </xml>`;
      let request = new ServerRequest('POST', 'http://www.easywechat.com/', {}, body);

      let server = new Server(request);

      server
      .addMessageListener('text', function (message) {
        return 'message';
      })
      .addEventListener('subscribe', function (message) {
        return 'subscribe';
      })
      .addEventListener('unsubscribe', function (message) {
        return 'unsubscribe';
      });

      let response = await server.serve();

      let xml = await parseXml(response.getBody().toString());

      this.assert.strictEqual(xml.ToUserName, 'fromUser');
      this.assert.strictEqual(xml.FromUserName, 'toUser');
      this.assert.strictEqual(xml.MsgType, 'text');
      this.assert.strictEqual(xml.Content, 'subscribe');
    });

  }
}

new TestUnit('MiniApp/Server');
