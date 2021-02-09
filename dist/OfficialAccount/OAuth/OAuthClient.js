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
exports.OAuthComponent = exports.User = void 0;
const BaseAccessToken_1 = require("../../Core/BaseAccessToken");
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
/**
 * OAuth授权后的用户对象
 */
class User {
    constructor() {
        /**
         * openid
         * @var {string}
         */
        this.id = '';
        /**
         * openid
         * @var {string}
         */
        this.openid = '';
        /**
         * unionid
         * @var {string}
         */
        this.unionid = '';
        /**
         * 昵称
         * @var {string}
         */
        this.nickname = '';
        /**
         * 昵称
         * @var {string}
         */
        this.name = '';
        /**
         * 头像
         * @var {string}
         */
        this.avatar = '';
        /**
         * E-mail
         * @var {string}
         */
        this.email = '';
        /**
         * 原始数据
         * @var {object}
         */
        this.original = null;
        /**
         * AccessToken对象
         */
        this.token = null;
    }
    /**
     * 获取 openid
     * @return {string}
     */
    getId() {
        return this.id;
    }
    /**
     * 获取 openid
     * @return {string}
     */
    getOpenId() {
        return this.openid;
    }
    /**
     * 获取 unionid
     * @return {string}
     */
    getUnionId() {
        return this.unionid;
    }
    /**
     * 获取昵称
     * @return {string}
     */
    getNickname() {
        return this.nickname;
    }
    /**
     * 获取昵称
     * @return {string}
     */
    getName() {
        return this.name;
    }
    /**
     * 获取头像
     * @return {string}
     */
    getAvatar() {
        return this.avatar;
    }
    /**
     * 获取E-mail
     * @return {string}
     */
    getEmail() {
        return this.email;
    }
    /**
     * 获取原始数据
     * @return {object}
     */
    getOriginal() {
        return this.original;
    }
    /**
     * 获取AccessToken
     * @return {AccessToken}
     */
    getToken() {
        return this.token;
    }
    /**
     * 设置AccessToken
     * @param token
     */
    setToken(token) {
        this.token = token;
        return this;
    }
    merge(attrs) {
        for (let k in attrs) {
            this[k] = attrs[k];
        }
        return this;
    }
}
exports.User = User;
;
/**
 * OAuth组件
 */
class OAuthComponent {
    /**
     * 获取应用id
     */
    getAppId() {
        return null;
    }
    /**
     * 获取access_token
     */
    getToken() {
        return null;
    }
}
exports.OAuthComponent = OAuthComponent;
;
/**
 * OAuth客户端
 */
class OAuthClient extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this._baseUrl = 'https://api.weixin.qq.com/sns';
        this._scope = 'snsapi_userinfo';
        this._callback = '';
        this._state = '';
        this._code = '';
        this._scopeSeparator = '';
        this._withCountryCode = false;
        this._parameters = {};
        this._component = null;
        this._token = null;
    }
    /**
     * 设置scope
     * @param scope 可选值：snsapi_userinfo、snsapi_base，默认：snsapi_userinfo
     */
    scopes(scope) {
        this._scope = scope || 'snsapi_userinfo';
        return this;
    }
    /**
     * 设置授权后的回调地址
     * @param callback 完整的URL地址
     */
    callback(callback) {
        this._callback = callback || '';
        return this;
    }
    /**
     * 设置state参数
     * @param state
     */
    state(state) {
        this._state = state || '';
        return this;
    }
    /**
     * 设置code参数
     * @param code
     */
    code(code) {
        this._code = code || '';
        return this;
    }
    /**
     * 设置scope的分隔符
     * @param separator
     */
    scopeSeparator(separator) {
        this._scopeSeparator = separator || '';
        return this;
    }
    /**
     * 设置返回国家地区语言版本
     */
    withCountryCode() {
        this._withCountryCode = true;
        return this;
    }
    component(component) {
        this._scope = 'snsapi_base';
        this._component = component;
        return this;
    }
    with(parameters) {
        this._parameters = parameters;
        return this;
    }
    formatScope(scopes, separator) {
        if (typeof scopes == 'string') {
            return scopes;
        }
        return scopes.join(separator);
    }
    getAuthUrl(state) {
        let path = 'oauth2/authorize';
        let scopes = [];
        if (typeof this._scope == 'string' && this) {
            scopes = this._scope.split(',');
        }
        if (Utils_1.inArray('snsapi_login', scopes)) {
            path = 'qrconnect';
        }
        return this.buildAuthUrlFromBase(`https://open.weixin.qq.com/connect/${path}`, state);
    }
    buildAuthUrlFromBase(url, state) {
        let query = Utils_1.buildQueryString(this.getCodeFields(state));
        return url + '?' + query + '#wechat_redirect';
    }
    getCodeFields(state = null) {
        if (this._component) {
            this.with(Utils_1.merge(this._parameters, {
                component_appid: this._component.getAppId(),
            }));
        }
        let scope = this._scope || this.app.config.oauth.scope || 'snsapi_userinfo';
        let callback = this._callback || this.app.config.oauth.callback || '';
        if (callback.substr(0, 7) !== 'http://' && callback.substr(0, 8) !== 'https://') {
            throw new Error('Please set callback url start with "http://" or "https://"');
        }
        return Utils_1.merge({
            appid: this.getAppId(),
            redirect_uri: callback,
            response_type: 'code',
            scope: this.formatScope(scope, this._scopeSeparator),
            state: state || '',
            connect_redirect: 1,
        }, this._parameters);
    }
    /**
     * 获取配置中的app_id
     */
    getAppId() {
        return this.app.config.app_id;
    }
    /**
     * 生成授权链接
     * @param callback 授权后的回调地址
     */
    redirect(callback = null) {
        if (!this.app.config.oauth) {
            this.app.config.oauth = {
                scope: 'snsapi_userinfo',
                callback: '',
            };
        }
        if (callback) {
            this._callback = callback;
        }
        return this.getAuthUrl(this._state);
    }
    getTokenFields(code) {
        return {
            appid: this.getAppId(),
            secret: this.app.config.secret,
            component_appid: this._component ? this._component.getAppId() : null,
            component_access_token: this._component ? this._component.getToken() : null,
            code: code,
            grant_type: 'authorization_code',
        };
    }
    getTokenUrl() {
        if (this._component) {
            return this._baseUrl + '/oauth2/component/access_token';
        }
        return this._baseUrl + '/oauth2/access_token';
    }
    /**
     * 获取授权后的token
     */
    getToken(code) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._token) {
                return this._token;
            }
            let res = yield this.doRequest({
                url: this.getTokenUrl(),
                method: 'GET',
                qs: this.getTokenFields(code),
            });
            if (!res || res['errcode']) {
                this.app['log']('Fail to fetch access_token', res);
                throw new Error('Fail to fetch access_token');
            }
            return this.parseAccessToken(res);
        });
    }
    parseAccessToken(res) {
        if (!res['access_token']) {
            this.app['log']('Authorize Failed', res);
            throw new Error('Authorize Failed');
        }
        return new BaseAccessToken_1.AccessToken(res);
    }
    /**
     * 设置token
     */
    setToken(token) {
        this._token = token;
        return this;
    }
    /**
     * 根据token获取用户信息
     * @param token 授权后的token
     */
    getUserByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let scopes = token.getScope().split(',');
            if (Utils_1.inArray('snsapi_base', scopes)) {
                return token;
            }
            if (!token.openid) {
                throw new Error('openid of AccessToken is required.');
            }
            let language = this._withCountryCode ? null : (this._parameters && this._parameters['lang'] ? this._parameters['lang'] : 'zh_CN');
            let res = yield this.httpGet('/sns/userinfo', {
                access_token: token.access_token,
                openid: token.openid,
                lang: language,
            });
            return res;
        });
    }
    arrayItem(data, key = null, defaultValue = null) {
        if (!data) {
            return defaultValue;
        }
        if (key === null) {
            return data;
        }
        if (typeof data[key] !== 'undefined') {
            return data[key];
        }
        let keys = key.split('.');
        for (let k in keys) {
            let segment = keys[k];
            if (!data || typeof data != 'object' || typeof data[segment] !== 'undefined') {
                return defaultValue;
            }
            data = data[segment];
        }
        return data;
    }
    mapUserToObject(userData) {
        let user = new User;
        user.id = this.arrayItem(userData, 'openid');
        user.name = this.arrayItem(userData, 'nickname');
        user.nickname = this.arrayItem(userData, 'nickname');
        user.avatar = this.arrayItem(userData, 'headimgurl');
        user.email = null;
        return user;
    }
    /**
     * 根据code获取用户信息
     * @param code 授权后回调地址带回的code
     * @param token 授权后的token
     */
    user(code = '', token = null) {
        return __awaiter(this, void 0, void 0, function* () {
            if (code) {
                this._code = code;
            }
            if (!token) {
                token = yield this.getToken(this._code);
            }
            let userData = yield this.getUserByToken(token);
            let user = this.mapUserToObject(userData).merge({
                original: userData,
            });
            return user.setToken(token);
        });
    }
}
exports.default = OAuthClient;
