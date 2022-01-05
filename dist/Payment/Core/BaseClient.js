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
const fs_1 = __importDefault(require("fs"));
const Response_1 = __importDefault(require("../../Core/Http/Response"));
const https_1 = __importDefault(require("https"));
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
        return __awaiter(this, void 0, void 0, function* () {
            let base = {
                mch_id: this.app.config.mch_id,
                nonce_str: (0, Utils_1.randomString)(32),
            };
            if (this.app.config.sub_mch_id) {
                base['sub_mch_id'] = '';
            }
            if (this.app.config.sub_appid) {
                base['sub_appid'] = '';
            }
            let localParams = (0, Utils_1.merge)((0, Utils_1.merge)(base, this.prepends()), params);
            let secretKey = yield this.app.getKey(endpoint);
            localParams['sign'] = (0, Utils_1.makeSignature)(localParams, secretKey, localParams['sign_type'] || 'MD5');
            let payload = (0, Utils_1.merge)((0, Utils_1.merge)({}, options), {
                url: endpoint,
                method,
                responseType: 'text',
                data: (0, Utils_1.buildXml)(localParams)
            });
            let response = yield this.doRequest(payload);
            if (returnResponse) {
                return response;
            }
            else {
                let body = response.data;
                try {
                    body = yield (0, Utils_1.parseXml)(body);
                }
                catch (e) { }
                return body;
            }
        });
    }
    safeRequest(endpoint, params = {}, method = 'post', options = {}) {
        options = (0, Utils_1.merge)((0, Utils_1.merge)({}, options), {
            httpsAgent: new https_1.default.Agent({
                pfx: fs_1.default.readFileSync(this.app.config.cert_path),
                passphrase: this.app.config.mch_id,
            }),
        });
        return this.request(endpoint, params, method, options);
    }
    requestRaw(endpoint, params = {}, method = 'post', options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            options.responseType = 'arraybuffer';
            let res = yield this.request(endpoint, params, method, options, true);
            return new Response_1.default(res.data, res.status, res.headers);
        });
    }
    wrap(endpoint) {
        return this.app.inSandbox() ? `sandboxnew/${endpoint}` : endpoint;
    }
    getServerIp() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.serverIp) {
                let res = yield this.doRequest({
                    baseURL: '',
                    url: 'https://api.ipify.org?format=json',
                    method: 'GET',
                    responseType: 'json',
                });
                let body = null;
                try {
                    body = JSON.parse(res.data);
                }
                catch (e) { }
                if (body && body['ip']) {
                    this.serverIp = body['ip'];
                }
            }
            return this.serverIp;
        });
    }
    getClientIp() {
        return this.app.request.getClientIp();
    }
    // Rewrite by HttpMixin
    doRequest(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
}
;
(0, Utils_1.applyMixins)(BaseClient, [HttpMixin_1.default]);
exports.default = BaseClient;
