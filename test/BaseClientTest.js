
const EasyWechat = require('../dist');
const Sinon = require('sinon');
const request = require('request');
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

    // 关闭请求日志
    this.app.rebind('log', () => {
      return function () { };
    });

    if (autoRun) {
      this.run();
    }
  }

  /**
   * 配置模拟请求的响应结果
   * @param {string} body 响应结果
   * @param {object} headers 响应 headers
   * @param {number} statusCode 响应状态码，默认：200
   */
  mockResponse(body, headers = null, statusCode=200) {
    this._get.yields(null, {statusCode, headers}, body);
    this._post.yields(null, {statusCode, headers}, body);
    this._head.yields(null, {statusCode, headers}, body);
    this._options.yields(null, {statusCode, headers}, body);
    this._put.yields(null, {statusCode, headers}, body);
    this._patch.yields(null, {statusCode, headers}, body);
    this._delete.yields(null, {statusCode, headers}, body);

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
    return this.app[this.module][method].call(this.app[this.module], args);
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
          this._get = Sinon.stub(request, 'get');
          this._post = Sinon.stub(request, 'post');
          this._head = Sinon.stub(request, 'head');
          this._options = Sinon.stub(request, 'options');
          this._put = Sinon.stub(request, 'put');
          this._patch = Sinon.stub(request, 'patch');
          this._delete = Sinon.stub(request, 'delete');
        });

        after(() => {
          request.get.restore();
          request.post.restore();
          request.head.restore();
          request.options.restore();
          request.put.restore();
          request.patch.restore();
          request.delete.restore();
        });

        this.test();

      });
    });
  }

}
