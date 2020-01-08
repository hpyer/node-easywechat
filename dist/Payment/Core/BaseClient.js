'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpMixin_1 = require("../../Core/Mixins/HttpMixin");
const Utils_1 = require("../../Core/Utils");
const Merge = require("merge");
const Xml2js = require("xml2js");
const Fs = require("fs");
class BaseClient {
    constructor(app) {
        this.app = null;
        this.app = app;
    }
    prepends() {
        return [];
    }
    requestApi(endpoint, params = {}, method = 'post', options = {}) {
        let base = {
            mch_id: this.app['config']['mch_id'],
            nonce_str: Utils_1.randomString(32),
            sub_mch_id: this.app['config']['sub_mch_id'],
            sub_appid: this.app['config']['sub_appid'],
        };
        params = Merge(base, this.prepends(), params);
        params['sign_type'] = params['sign_type'] || 'md5';
        let secretKey = this.app['getKey'](endpoint);
        params['sign'] = Utils_1.makeSignature(params, secretKey, params['sign_type']);
        let XmlBuilder = new Xml2js.Builder;
        let payload = Merge(options, {
            url: endpoint,
            method,
            body: XmlBuilder.buildObject(params)
        });
        return this.request(payload);
    }
    safeRequestApi(endpoint, params = {}, method = 'post', options = {}) {
        options = Merge(options, {
            agentOptions: {
                pfx: Fs.readFileSync(this.app['config']['cert_path']),
                passphrase: this.app['config']['mch_id'],
            }
        });
        return this.requestApi(endpoint, params, method, options);
    }
    wrap(endpoint) {
        return this.app['inSandbox']() ? `sandboxnew/${endpoint}` : endpoint;
    }
    // Rewrite by HttpMixin
    httpGet(url, payload = null) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    httpPost(url, payload = null) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    httpFile(url, payload = null) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    request(payload) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
;
Utils_1.applyMixins(BaseClient, [HttpMixin_1.default]);
exports.default = BaseClient;
