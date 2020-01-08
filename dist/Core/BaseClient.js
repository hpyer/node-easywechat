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
    requestWithAccessToken(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!payload['qs']) {
                payload['qs'] = {};
            }
            if (this.accessToken) {
                payload['qs'].accessToken = yield this.accessToken['getToken']();
            }
            if (!payload['method']) {
                payload['method'] = 'POST';
            }
            yield this.request(payload);
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
