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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpMixin_1 = __importDefault(require("../../Core/Mixins/HttpMixin"));
const Utils_1 = require("../../Core/Utils");
const xml2js_1 = __importDefault(require("xml2js"));
const fs_1 = __importDefault(require("fs"));
const raw_body_1 = __importDefault(require("raw-body"));
const Response_1 = __importDefault(require("../../Core/Http/Response"));
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
            mch_id: this.app.config.mch_id,
            nonce_str: Utils_1.randomString(32),
        };
        if (this.app.config.sub_mch_id) {
            base['sub_mch_id'] = '';
        }
        if (this.app.config.sub_appid) {
            base['sub_appid'] = '';
        }
        let localParams = Utils_1.merge(Utils_1.merge(base, this.prepends()), params);
        localParams['sign_type'] = localParams['sign_type'] || 'MD5';
        let secretKey = this.app['getKey'](endpoint);
        localParams['sign'] = Utils_1.makeSignature(localParams, secretKey, localParams['sign_type']);
        let XmlBuilder = new xml2js_1.default.Builder({
            cdata: true,
            renderOpts: {
                pretty: false,
                indent: '',
                newline: '',
            }
        });
        let payload = Utils_1.merge(Utils_1.merge({}, options), {
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
            let res = yield xml2js_1.default.parseStringPromise(xml);
            res = Utils_1.singleItem(res);
            if (res['xml'])
                res = res['xml'];
            return res;
        });
    }
    safeRequest(endpoint, params = {}, method = 'post', options = {}) {
        options = Utils_1.merge(Utils_1.merge({}, options), {
            agentOptions: {
                pfx: fs_1.default.readFileSync(this.app.config.cert_path),
                passphrase: this.app.config.mch_id,
            }
        });
        return this.request(endpoint, params, method, options);
    }
    requestRaw(endpoint, params = {}, method = 'post', options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            options['encoding'] = null;
            let res = yield this.request(endpoint, params, method, options, true);
            let body = yield raw_body_1.default(res);
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
        return this.app.request.getClientIp();
    }
    // Rewrite by HttpMixin
    doRequest(payload, returnResponse = false) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
;
Utils_1.applyMixins(BaseClient, [HttpMixin_1.default]);
exports.default = BaseClient;
