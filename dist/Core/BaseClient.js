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
const HttpMixin_1 = __importDefault(require("./Mixins/HttpMixin"));
const Utils_1 = require("./Utils");
const fs_1 = __importDefault(require("fs"));
const Response_1 = __importDefault(require("./Http/Response"));
const form_data_1 = __importDefault(require("form-data"));
class BaseClient {
    constructor(app, accessToken = null) {
        this.accessToken = null;
        this.app = null;
        this.app = app;
        this.accessToken = accessToken || this.app.access_token;
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
            payload = payload || {};
            if (!payload.method) {
                payload.method = 'POST';
            }
            if (!payload.params) {
                payload.params = {};
            }
            if (this.accessToken) {
                payload = yield this.accessToken.applyToRequest(payload);
            }
            let response = yield this.doRequest(payload);
            return returnResponse ? response : response.data;
        });
    }
    httpUpload(url, files = {}, form = {}, query = {}) {
        let formData = new form_data_1.default;
        for (let name in files) {
            if (Utils_1.isString(files[name])) {
                formData.append(name, fs_1.default.createReadStream(files[name]));
            }
            else {
                formData.append(name, files[name]);
            }
        }
        for (let name in form) {
            formData.append(name, form[name]);
        }
        return this.request({
            url,
            data: formData,
            method: 'POST',
            params: query,
        });
    }
    httpGet(url, query = {}) {
        return this.request({
            url,
            method: 'GET',
            params: query,
        });
    }
    httpPost(url, formData = {}) {
        return this.request({
            url,
            method: 'POST',
            data: formData,
        });
    }
    httpPostJson(url, data = {}, query = {}) {
        return this.request({
            url,
            method: 'POST',
            data: data,
            params: query,
        });
    }
    requestRaw(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            payload = payload || {};
            payload.responseType = 'arraybuffer';
            let res = yield this.request(payload, true);
            return new Response_1.default(res.data, res.status, res.headers);
        });
    }
    // Rewrite by HttpMixin
    doRequest(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
}
;
Utils_1.applyMixins(BaseClient, [HttpMixin_1.default]);
exports.default = BaseClient;
