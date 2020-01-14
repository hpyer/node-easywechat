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
        return {};
    }
    requestApi(endpoint, params = {}, method = 'post', options = {}, returnRaw = false) {
        let base = {
            mch_id: this.app['config']['mch_id'],
            nonce_str: Utils_1.randomString(32),
            sub_mch_id: this.app['config']['sub_mch_id'],
            sub_appid: this.app['config']['sub_appid'],
        };
        let localParams = Merge(base, this.prepends(), params);
        localParams['sign_type'] = localParams['sign_type'] || 'md5';
        let secretKey = this.app['getKey'](endpoint);
        localParams['sign'] = Utils_1.makeSignature(localParams, secretKey, localParams['sign_type']);
        let XmlBuilder = new Xml2js.Builder;
        let payload = Merge(options, {
            url: endpoint,
            method,
            body: XmlBuilder.buildObject(localParams)
        });
        return this.request(payload)
            .then((body) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!returnRaw) {
                    body = yield this.parseXml(body);
                }
            }
            catch (e) { }
            return body;
        }));
    }
    parseXml(xml) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield Xml2js.parseStringPromise(xml);
            res = Utils_1.singleItem(res);
            return res;
        });
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
    requestApiRaw(endpoint, params = {}, method = 'post', options = {}) {
        return this.requestApi(endpoint, params, method, options, true);
    }
    wrap(endpoint) {
        return this.app['inSandbox']() ? `sandboxnew/${endpoint}` : endpoint;
    }
    getServerIp() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.httpGet('http://ip.taobao.com/service/getIpInfo.php?ip=myip');
            if (res && !res['code'] && res['data'] && res['data']['ip']) {
                return res['data']['ip'];
            }
            return '';
        });
    }
    getClientIp() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.app['request'].getClientIp();
        });
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
