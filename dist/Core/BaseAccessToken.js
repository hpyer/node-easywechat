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
class BaseAccessToken {
    constructor(app) {
        this.token = '';
        this.endpoint = '';
        this.app = null;
        this.app = app;
    }
    getCredentials() {
        return {};
    }
    getEndpoint() {
        if (!this.endpoint) {
            throw new Error('Unset the endpoint of AccessToken');
        }
        return this.endpoint;
    }
    getCacheKey() {
        return 'easywechat.kernel.access_token.' + Utils_1.createHash(JSON.stringify(this.getCredentials()), 'md5');
    }
    requestToken(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.getEndpoint() + '?' + Utils_1.buildQueryString(credentials);
            return yield this.doRequest({
                url,
                method: 'GET',
            });
        });
    }
    ;
    getToken(force = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (force) {
                let res = yield this.requestToken(this.getCredentials());
                yield this.setToken(res.access_token, res.expires_in);
                return this.token;
            }
            if (!this.token) {
                this.token = yield this.app.getCache().get(this.getCacheKey());
                if (!this.token) {
                    let res = yield this.requestToken(this.getCredentials());
                    yield this.setToken(res.access_token, res.expires_in);
                }
            }
            return this.token;
        });
    }
    setToken(access_token, expires_in = 7200) {
        return __awaiter(this, void 0, void 0, function* () {
            this.token = access_token;
            yield this.app.getCache().set(this.getCacheKey(), access_token, expires_in);
        });
    }
    ;
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getToken(true);
            return this;
        });
    }
    // Rewrite by HttpMixin
    doRequest(payload, returnResponse = false) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
;
Utils_1.applyMixins(BaseAccessToken, [HttpMixin_1.default]);
exports.default = BaseAccessToken;
