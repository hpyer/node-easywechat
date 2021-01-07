'use strict';

import Response from './Http/Response';
import BaseApplication from './BaseApplication';
import { Message, Text, News, NewsItem, Raw as RawMessage } from './Messages';
import { createHash, isString, isNumber, isArray, getTimestamp } from './Utils';
import Xml2js from 'xml2js';
import FinallResult from './Decorators/FinallResult';
import TerminateResult from './Decorators/TerminateResult';

export default class ServerGuard
{
  static SUCCESS_EMPTY_RESPONSE: string = 'success';

  static MESSAGE_TYPE_MAPPING: object = {
    text: Message.TEXT,
    image: Message.IMAGE,
    voice: Message.VOICE,
    video: Message.VIDEO,
    shortvideo: Message.SHORT_VIDEO,
    location: Message.LOCATION,
    link: Message.LINK,
    device_event: Message.DEVICE_EVENT,
    device_text: Message.DEVICE_TEXT,
    event: Message.EVENT,
    file: Message.FILE,
    miniprogrampage: Message.MINIPROGRAM_PAGE,
  };

  protected app: BaseApplication = null;

  protected alwaysValidate: boolean = false;

  protected handlers: Object = {}


  constructor(app: BaseApplication)
  {
    this.app = app;
  }

  /**
   * 注册消息处理器
   * @param condition EasyWechat.Messages.Message.xxx，用于处理特定消息类型，默认：* 表示全部
   * @param handler 处理函数，该函数需要接收一个消息对象
   */
  on(condition: string, handler: Function): void
  {
    this.push(handler, condition);
  }
  /**
   * 注册消息处理器
   * @param condition EasyWechat.Messages.Message.xxx，用于处理特定消息类型，默认：* 表示全部
   * @param handler 处理函数，该函数需要接收一个消息对象
   */
  observe(condition: string, handler: Function): void
  {
    this.push(handler, condition);
  }

  /**
   * 注册消息处理器
   * @param handler 处理函数，该函数需要接收一个消息对象
   * @param condition EasyWechat.Messages.Message.xxx，用于处理特定消息类型，默认：* 表示全部
   */
  push (handler: Function, condition: string = '*'): void
  {
    if (!this.handlers[condition]) {
      this.handlers[condition] = [];
    }
    this.handlers[condition].push(handler);
  }

  protected dispatch(event: string, payload: any): Promise<any>
  {
    return this.notify(event, payload);
  }

  protected async notify(event: string, payload: any): Promise<any>
  {
    let result = null;

    for (let condition in this.handlers) {
      let handlers = this.handlers[condition];
      if (condition == '*' || condition == event || Number(Number(condition) & Number(event)) == Number(event)) {
        let isBreak = false;
        for (let i=0; i<handlers.length; i++) {
          let handler = handlers[i];

          let res = await this._callHandler(handler, payload);

          if (res instanceof TerminateResult) {
            return res.content;
          }
          else if (res === true) {
            break;
          }
          else if (res === false) {
            isBreak = true;
            break;
          }
          else if (res && !(result instanceof FinallResult)) {
            result = res;
          }
        }
        if (isBreak) {
          break;
        }
      }
    }

    return result instanceof FinallResult ? result.content : result;
  }

  protected async _callHandler(handler: Function, payload: any): Promise<any>
  {
    try {
      if (typeof handler == 'function') {
        return await handler.call(this, payload);
      }
    }
    catch (e) {
      this.app['log']('ServerGuard.notify: ', e);
    }
    return false;
  }


  /**
   * 处理消息
   */
  async serve(): Promise<Response>
  {
    let content = await this.app['request'].getContent();
    this.app['log']('Request received:', {
      'method': this.app['request'].getMethod(),
      'uri': this.app['request'].getUri(),
      'content-type': this.app['request'].getContentType(),
      'content': content ? content.toString() : '',
    });

    await this.validate();
    let res = await this.resolve();

    this.app['log']('Server response created:', {
      content: res.getContent().toString()
    });

    return res;
  }

  protected async validate(): Promise<this>
  {
    if (!this.alwaysValidate && !(await this.isSafeMode())) {
      return this;
    }

    let signature = await this.app['request'].get('signature');
    let timestamp = await this.app['request'].get('timestamp');
    let nonce = await this.app['request'].get('nonce');

    if (signature !== this.signature([ this.getToken(), timestamp, nonce ])) {
      throw new Error('Invalid request signature.');
    }

    return this;
  }

  protected forceValidate(): this
  {
    this.alwaysValidate = true;
    return this;
  }

  protected async resolve(): Promise<Response>
  {
    let result = await this.handleRequest();

    let res;
    if (await this.shouldReturnRawResponse()) {
      res = new Response(Buffer.from(result['response']));
    } else {
      res = new Response(
        Buffer.from(await this.buildResponse(result['to'], result['from'], result['response'])),
        200,
        { 'Content-Type': 'application/xml' }
      );
    }

    return res;
  }

  protected async shouldReturnRawResponse(): Promise<boolean>
  {
    return false;
  }

  protected async buildResponse(to: string, from: string, message: any): Promise<string>
  {
    if (!message || ServerGuard.SUCCESS_EMPTY_RESPONSE === message) {
      return ServerGuard.SUCCESS_EMPTY_RESPONSE;
    }

    if (message instanceof RawMessage) {
      return message.get('content', ServerGuard.SUCCESS_EMPTY_RESPONSE);
    }

    if (isString(message) || isNumber(message)) {
      message = new Text(message + '');
    }

    if (isArray(message) && message[0] instanceof NewsItem) {
      message = new News(message);
    }

    if (message instanceof NewsItem) {
      message = new News([message]);
    }

    if (!(message instanceof Message)) {
      throw new Error('The message object should be instance of EasyWechat.Messages.*');
    }

    return await this.buildReply(to, from, message);
  }

  protected async buildReply(to: string, from: string, message: Message): Promise<string>
  {
    let prepends = {
      ToUserName: to,
      FromUserName: from,
      CreateTime: getTimestamp(),
      MsgType: message.getType(),
    };

    let res = message.transformToXml(prepends);

    if (await this.isSafeMode()) {
      this.app['log']('Messages safe mode is enabled.');
      let XmlBuilder = new Xml2js.Builder({
        cdata: true,
        renderOpts: {
          pretty: false,
          indent: '',
          newline: '',
        }
      });
      return XmlBuilder.buildObject(this.app['encryptor'].encrypt(res));
    }

    return res;
  }

  protected getToken(): string
  {
    return this.app.config.token;
  }

  protected async isSafeMode(): Promise<boolean>
  {
    let signature = await this.app['request'].get('signature');
    let encrypt_type = await this.app['request'].get('encrypt_type');
    return signature && 'aes' === encrypt_type;
  }

  protected signature(params): string
  {
    params.sort();

    return createHash(params.join(''), 'sha1');
  }

  protected async handleRequest(): Promise<object>
  {
    let castedMessage = await this.getMessage();

    let response = await this.notify(ServerGuard.MESSAGE_TYPE_MAPPING[castedMessage['MsgType'] || castedMessage['msg_type'] || 'text'], castedMessage);

    return {
      to: castedMessage['FromUserName'] || '',
      from: castedMessage['ToUserName'] || '',
      response,
    };
  }

  /**
   * 获取消息
   */
  async getMessage(): Promise<object>
  {
    let content = await this.app['request'].getContent();
    let message = await this.parseMessage(content ? content.toString() : '');

    // console.log('message', message, typeof message);

    // if (!message) {
    //   throw new Error('No message received.');
    // }

    if (await this.isSafeMode() && message['Encrypt']) {
      let decrypted = await this.decryptMessage(message);
      message = await this.parseMessage(decrypted);
    }

    return message;
  }

  protected async parseMessage(content): Promise<any>
  {
    try {
      if (!content) {
        return {};
      }
      else if (0 === content.indexOf('<')) {
        content = await this.parseXmlMessage(content);
      } else {
        // Handle JSON format.
        try {
          content = JSON.parse(content);
        }
        catch (e) {}
      }

      return content;
    } catch (e) {
      throw new Error(`Invalid message content: ${content}`);
    }
  }

  protected parseXmlMessage(xml): Promise<any>
  {
    return new Promise((resolve, reject) => {
      Xml2js.parseString(xml, (err, result) => {
        if (err) {
          reject(err);
        }
        else {
          let message
          if (result && result.xml) {
            message = {}
            for (let k in result.xml) {
              message[k] = result.xml[k][0];
            }
          }
          resolve(message);
        }
      })
    })
    .catch((err) => {
      this.app['log']('server.parseMessage()', err)
    });
  }

  protected async decryptMessage(message: object)
  {
    return this.app['encryptor'].decrypt(
      message['Encrypt'],
      await this.app['request'].get('msg_signature'),
      await this.app['request'].get('nonce'),
      await this.app['request'].get('timestamp')
    );
  }

};
