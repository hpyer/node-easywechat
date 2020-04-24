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
const RawBody = require("raw-body");
const Response_1 = require("../../Core/Http/Response");
class BaseClient {
    constructor(app) {
        this.app = null;
        this.serverIp = '';
        this.app = app;
    }
    prepends() {
        return {};
    }
    request(endpoint, params = {}, method = 'post', options = {}, returnResponse = false) {
        let base = {
            mch_id: this.app['config']['mch_id'],
            nonce_str: Utils_1.randomString(32),
            sub_mch_id: this.app['config']['sub_mch_id'] || '',
            sub_appid: this.app['config']['sub_appid'] || '',
        };
        let localParams = Merge(base, this.prepends(), params);
        localParams['sign_type'] = localParams['sign_type'] || 'md5';
        let secretKey = this.app['getKey'](endpoint);
        localParams['sign'] = Utils_1.makeSignature(localParams, secretKey, localParams['sign_type']);
        let XmlBuilder = new Xml2js.Builder({
            cdata: true,
            renderOpts: {
                pretty: false,
                indent: '',
                newline: '',
            }
        });
        let payload = Merge(options, {
            url: endpoint,
            method,
            body: XmlBuilder.buildObject(localParams)
        });
        return this.doRequest(payload, returnResponse)
            .then((body) => __awaiter(this, void 0, void 0, function* () {
            if (!returnResponse) {
                try {
                    body = yield this.parseXml(body);
                }
                catch (e) { }
            }
            return body;
        }));
    }
    parseXml(xml) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield Xml2js.parseStringPromise(xml);
            res = Utils_1.singleItem(res);
            if (res['xml'])
                res = res['xml'];
            return res;
        });
    }
    safeRequest(endpoint, params = {}, method = 'post', options = {}) {
        options = Merge(options, {
            agentOptions: {
                pfx: Fs.readFileSync(this.app['config']['cert_path']),
                passphrase: this.app['config']['mch_id'],
            }
        });
        return this.request(endpoint, params, method, options);
    }
    requestRaw(endpoint, params = {}, method = 'post', options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            options['encoding'] = null;
            let res = yield this.request(endpoint, params, method, options, true);
            let body = yield RawBody(res);
            return new Response_1.default(body, res.statusCode, res.headers);
        });
    }
    wrap(endpoint) {
        return this.app['inSandbox']() ? `sandboxnew/${endpoint}` : endpoint;
    }
    getServerIp() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.serverIp) {
                let res = yield this.doRequest({
                    baseUrl: '',
                    url: 'https://api.ipify.org?format=json',
                    method: 'GET',
                });
                if (res && res['ip']) {
                    this.serverIp = res['ip'];
                }
            }
            return this.serverIp;
        });
    }
    getClientIp() {
        return this.app['request'].getClientIp();
    }
    // Rewrite by HttpMixin
    doRequest(payload, returnResponse = false) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
;
Utils_1.applyMixins(BaseClient, [HttpMixin_1.default]);
exports.default = BaseClient;
