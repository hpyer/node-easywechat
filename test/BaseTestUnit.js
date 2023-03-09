const MockAdapter = require('axios-mock-adapter');
const assert = require('assert');
const CacheInterface = require('../dist/Core/Contracts/CacheInterface');
const { parseXml } = require('../dist/Core/Support/Utils');
const { ServerRequest } = require('../dist/');

/**
 * 通用模块测试
 */
module.exports = class BaseTestUnit {

  /**
   * 构造通用模块测试用例
   * @param {string} module 测试模块
   */
  constructor(module) {
    /**
     * 断言方法
     * @type {typeof assert}
     */
    this.assert = assert;

    describe(module, () => {
      this.test();
    });
  }

  /**
   * 创建模拟的 HttpClient
   * @param client HttpClient实例
   */
  getMockedHttpClient(client) {
    client.__mockedAxios = new MockAdapter(client.getInstance());

    /**
     * 模拟请求
     * @param method 请求方式，如：get, post
     * @param url 请求地址
     * @param data 请求参数，默认：undefined
     */
    client.mock = function (method, url, data = undefined) {
      method = method.toLowerCase();
      method = 'on' + method.substring(0, 1).toUpperCase() + method.substring(1);
      return this.__mockedAxios[method](url, data);
    };

    return client;
  }

  /**
   * 创建模拟的缓存客户端
   */
  getMockedCacheClient() {
    return new class MockCache extends CacheInterface {
      constructor() {
        super();
        this.__mockData = {};
      }
      /**
       * 模拟缓存数据
       * @param value 数据值
       * @param key 键名，默认：'*' 表示所有
       */
      mock(value, key = '*') {
        this.__mockData[key] = value;
      }
      async get(key) {
        if (!this.has(key) || !this.has('*')) return null;
        return this.__mockData[key] || this.__mockData['*'];
      }
      async has(key) {
        return typeof this.__mockData[key] === 'undefined';
      }
      async set(key, value, lifetime) {
        this.__mockData[key] = value;
        return true;
      }
      async delete(key) {
        this.__mockData[key] = undefined;
        delete this.__mockData[key];
        return true;
      }

    }
  }

  /**
   * 具体的测试方法，需要被继承
   */
  test() {
  }

  async createEncryptedMessageRequest(plainMessage, encryptor, query = {}) {
    let body = encryptor.encrypt(plainMessage);

    let xml = await parseXml(body);
    let request = (new ServerRequest('POST', 'http://www.easywechat.com/', {}, body)).withQueryParams({
      msg_signature: xml['MsgSignature'],
      timestamp: xml['TimeStamp'],
      nonce: xml['Nonce'],
      ...query,
    });

    return request;
  }

  async decryptMessage(body, encryptor) {
    let message = await parseXml(body);
    return await parseXml(encryptor.decrypt(
      message['Encrypt'],
      message['MsgSignature'],
      message['Nonce'],
      message['TimeStamp'],
    ));
  }

}
