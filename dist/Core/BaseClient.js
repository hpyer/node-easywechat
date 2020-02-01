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
const HttpMixin_1 = require("./Mixins/HttpMixin");
const Utils_1 = require("./Utils");
const Fs = require("fs");
const Merge = require("merge");
const Response_1 = require("./Http/Response");
class BaseClient {
    constructor(app, accessToken = null) {
        this.accessToken = null;
        this.app = null;
        this.app = app;
        this.accessToken = accessToken || this.app['access_token'];
    }
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    getAccessToken() {
        return this.accessToken;
    }
    request(payload, returnResponse = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!payload['qs']) {
                payload['qs'] = {};
            }
            if (this.accessToken) {
                payload['qs'].access_token = yield this.accessToken['getToken']();
            }
            if (!payload['method']) {
                payload['method'] = 'POST';
            }
            return this.doRequest(payload, returnResponse);
        });
    }
    httpUpload(url, files = {}, form = {}, query = {}) {
        let formData = {};
        for (let name in files) {
            if (Utils_1.isString(files[name])) {
                formData[name] = Fs.createReadStream(files[name]);
            }
            else {
                formData[name] = files[name];
            }
        }
        formData = Merge(formData, form);
        return this.request({
            url,
            formData,
            method: 'POST',
            qs: query,
        });
    }
    httpGet(url, query = {}) {
        let payload = {
            url,
            method: 'GET',
            qs: query,
        };
        return this.request(payload);
    }
    httpPost(url, formData = {}) {
        let payload = {
            url,
            method: 'POST',
            formData,
        };
        return this.request(payload);
    }
    httpPostJson(url, data = {}, query = {}) {
        let payload = {
            url,
            method: 'POST',
            json: true,
            body: data,
            qs: query,
        };
        return this.request(payload);
    }
    requestRaw(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            payload = payload || {};
            payload['encoding'] = null;
            let res = yield this.request(payload, true);
            return new Response_1.default(res.body, res.statusCode, res.headers);
        });
    }
    // Rewrite by HttpMixin
    doRequest(payload, returnResponse = false) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
;
Utils_1.applyMixins(BaseClient, [HttpMixin_1.default]);
exports.default = BaseClient;
