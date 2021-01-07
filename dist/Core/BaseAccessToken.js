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
exports.AccessToken = void 0;
const HttpMixin_1 = __importDefault(require("./Mixins/HttpMixin"));
const Utils_1 = require("./Utils");
/**
 * 授权后的AccessToken对象
 */
class AccessToken {
    constructor(info) {
        /**
         * 网页授权接口调用凭证
         */
        this.access_token = '';
        /**
         * 调用凭证的超时时间，单位（秒）
         */
        this.expires_in = 0;
        /**
         * 刷新access_token
         */
        this.refresh_token = '';
        /**
         * 用户唯一标识，openid
         */
        this.openid = '';
        /**
         * 授权的作用域
         */
        this.scope = null;
        this.access_token = info['access_token'] || info['accessToken'] || '';
        this.expires_in = info['expires_in'] || info['expiresIn'] || 0;
        this.refresh_token = info['refresh_token'] || info['refreshToken'] || '';
        this.openid = info['openid'] || '';
        this.scope = info['scope'] || '';
    }
    /**
     * 获取access_token
     */
    getToken() {
        return this.access_token;
    }
    /**
     * 获取access_token
     */
    getAccessToken() {
        return this.access_token;
    }
    /**
     * 获取过期时间
     */
    getExpires() {
        return this.expires_in;
    }
    /**
     * 获取refresh_token
     */
    getRefreshToken() {
        return this.refresh_token;
    }
    /**
     * 获取openid
     */
    getOpenid() {
        return this.openid;
    }
    /**
     * 获取scope
     */
    getScope() {
        return this.scope;
    }
}
exports.AccessToken = AccessToken;
;
class BaseAccessToken {
    constructor(app) {
        this.requestMethod = 'GET';
        this.token = '';
        this.queryName = '';
        this.tokenKey = 'access_token';
        this.endpointToGetToken = '';
        this.app = null;
        this.app = app;
    }
    getCredentials() {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    getEndpoint() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.endpointToGetToken) {
                throw new Error('Unset the endpoint of AccessToken');
            }
            return this.endpointToGetToken;
        });
    }
    getCacheKey() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'easywechat.kernel.access_token.' + Utils_1.createHash(JSON.stringify(yield this.getCredentials()), 'md5');
        });
    }
    requestToken(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            let payload = {
                url: yield this.getEndpoint(),
                method: this.requestMethod,
            };
            if (this.requestMethod == 'POST') {
                payload['json'] = true;
                payload['body'] = credentials;
            }
            else {
                payload['qs'] = credentials;
            }
            return yield this.doRequest(payload);
        });
    }
    ;
    /**
     * 获取Token
     * @param refresh 为true时表示强制刷新
     */
    getToken(refresh = false) {
        return __awaiter(this, void 0, void 0, function* () {
            let cacheKey = yield this.getCacheKey();
            let cache = this.app.getCache();
            if (!refresh && (yield cache.has(cacheKey))) {
                let token = yield cache.get(cacheKey);
                if (token)
                    return new AccessToken(token);
            }
            let res = yield this.requestToken(yield this.getCredentials());
            yield this.setToken(res, res.expires_in || 7200);
            return res;
        });
    }
    /**
     * 设置Token
     * @param access_token AccessToken
     * @param expires_in 有效时间，单位：秒
     */
    setToken(access_token, expires_in = 7200) {
        return __awaiter(this, void 0, void 0, function* () {
            let cacheKey = yield this.getCacheKey();
            let cache = this.app.getCache();
            yield cache.set(cacheKey, access_token, expires_in);
            if (!cache.has(cacheKey)) {
                throw new Error('Failed to cache access token.');
            }
            return this;
        });
    }
    ;
    /**
     * 刷新Token
     */
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getToken(true);
            return this;
        });
    }
    /**
     * 获取刷新后的Token
     */
    getRefreshedToken() {
        return this.getToken(true);
    }
    getTokenKey() {
        return this.tokenKey;
    }
    applyToRequest(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            payload['qs'] = payload['qs'] || {};
            if (!payload['qs'][this.queryName || this.tokenKey]) {
                payload['qs'][this.queryName || this.tokenKey] = (yield this.getToken())[this.tokenKey];
            }
            return payload;
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
