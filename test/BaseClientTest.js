
const EasyWechat = require('../dist');
const Sinon = require('sinon');
const request = require('request');
const assert = require('assert');

module.exports = class TestCase {

  constructor(service, config) {
    this.service = service;

    this.assert = assert;

    this.app = EasyWechat.Factory.getInstance(service, config);

    // 关闭请求日志
    this.app.rebind('log', () => {
      return function () { };
    });
  }

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

  mockRequest() {
    let args = [...arguments];
    let method = args.shift();
    return this.app[this.module][method].call(this.app[this.module], args);
  }

  run(module, callback = null) {
    this.module = module;

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

        callback && typeof callback == 'function' && callback.call(this);

      });
    });
  }

}
