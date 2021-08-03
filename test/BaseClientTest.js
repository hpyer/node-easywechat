
const EasyWechat = require('../dist');
const Sinon = require('sinon');
const axios = require('axios');
const assert = require('assert');

/**
 * 通用模块测试
 */
module.exports = class BaseClientTest {

  /**
   * 构造通用模块测试用例
   * @param {string} service 要测试的服务名称，可选值：'BaseService' | 'OfficialAccount' | 'MiniProgram' | 'OpenPlatform' | 'Payment'
   * @param {string} module 要测试的功能模块
   * @param {import('../dist/Core/Types').EasyWechatConfig} config 对应的配置参数
   * @param {boolean} 是否自动运行测试用例
   */
  constructor(service, module, config, autoRun = true) {

    /**
     * 服务名称
     * @type {string}
     */
    this.service = service;
    /**
     * 功能模块名称
     * @type {string}
     */
    this.module = module;
    /**
     * 断言方法
     * @type {typeof assert}
     */
    this.assert = assert;
    /**
     * Easywechat实例
     */
    this.app = EasyWechat.Factory.getInstance(service, config);

    if (autoRun) {
      this.run();
    }
  }

  /**
   * 配置模拟请求的响应结果
   * @param {string} body 响应结果
   * @param {object} headers 响应 headers
   * @param {number} status 响应状态码，默认：200
   */
  mockResponse(body, headers = {}, status = 200) {
    this._request.resolves({
      status,
      headers,
      data: body,
    });

    return this;
  }

  /**
   * 配置多次模拟请求的响应结果
   * @param {object[]} responses [{body: xxxx, headers: {a: '111'}, status: 200}]
   */
  mockResponseMulti(responses) {
    for (let i = 0; i < responses.length; i++) {
      let response = responses[i];
      if (typeof response.body == 'undefined' && typeof response.status == 'undefined' && typeof response.headers == 'undefined') {
        response = {
          body: response,
          status: 200,
          headers: null,
        }
      }
      this._request.onCall(i).resolves({
        status: response.status || 200,
        headers: response.headers || null,
        data: response.body,
      });
    }

    return this;
  }

  /**
   * 发起模拟请求（在当前模块中）
   * @param {string} method 要执行的方法
   * @param {any} args
   */
  mockRequest() {
    let args = [...arguments];
    let method = args.shift();
    return this.app[this.module][method].apply(this.app[this.module], args);
  }

  /**
   * 重置模拟请求
   */
  mockRest() {
    this._request.reset();
  }

  /**
   * 具体的测试方法，需要被继承
   */
  test() {
  }

  /**
   * 执行测试用例
   */
  run() {

    describe(this.service, () => {

      describe(this.module, () => {

        before(() => {
          this._request = Sinon.stub(axios, 'request');
        });

        after(() => {
          axios.request.restore();
        });

        this.test();

      });
    });
  }

}
