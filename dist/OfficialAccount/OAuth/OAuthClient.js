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
exports.AccessToken = void 0;
const BaseClient_1 = require("../../Core/BaseClient");
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
         * 原始数据
         * @var {object}
         */
        this.original = null;
        /**
         * AccessToken
         * @var {AccessToken}
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
}
;
/**
 * OAuth授权后的AccessToken对象
 */
class AccessToken {
    constructor(info) {
        /**
         * 网页授权接口调用凭证
         * @var {string}
         */
        this.access_token = '';
        /**
         * 调用凭证的超时时间，单位（秒）
         * @var {number}
         */
        this.expires_in = 0;
        /**
         * 刷新access_token
         * @var {string}
         */
        this.refresh_token = '';
        /**
         * 用户唯一标识，openid
         * @var {string}
         */
        this.openid = '';
        /**
         * 授权的作用域
         * @var {string}
         */
        this.scope = null;
        this.access_token = info.access_token;
        this.expires_in = info.expires_in;
        this.refresh_token = info.refresh_token;
        this.openid = info.openid;
        this.scope = info.scope;
    }
}
exports.AccessToken = AccessToken;
;
/**
 * OAuth客户端
 */
class OAuthClient extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this._scope = 'snsapi_userinfo';
        this._callback = '';
        this._state = '';
        this._code = '';
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
     * 获取配置中的app_id
     */
    getAppId() {
        return this.app['config']['app_id'];
    }
    /**
     * 生成授权链接
     * @param callback 授权后的回调地址
     */
    redirect(callback = null) {
        if (!this.app['config']['oauth']) {
            throw new Error('Please config `oauth` section');
        }
        let scope = this._scope || this.app['config']['oauth']['scope'] || 'snsapi_userinfo';
        if (!callback) {
            callback = this._callback || this.app['config']['oauth']['callback'] || '';
        }
        if (callback.substr(0, 7) !== 'http://' && callback.substr(0, 8) !== 'https://') {
            throw new Error('Please set callback url start with "http://" or "https://"');
        }
        let params = {
            appid: this.getAppId(),
            redirect_uri: callback,
            response_type: 'code',
            scope: scope,
            state: '',
        };
        if (this._state) {
            params.state = this._state;
        }
        return 'https://open.weixin.qq.com/connect/oauth2/authorize?' + Utils_1.buildQueryString(params) + '#wechat_redirect';
    }
    /**
     * 获取授权后的token
     */
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.doRequest({
                url: '/sns/oauth2/access_token',
                method: 'GET',
                qs: {
                    appid: this.getAppId(),
                    secret: this.app['config']['secret'],
                    code: this._code,
                    grant_type: 'authorization_code',
                },
            });
            if (!res || res['errcode']) {
                this.app['log']('Fail to fetch access_token', res);
                throw new Error('Fail to fetch access_token');
            }
            return new AccessToken(res);
        });
    }
    /**
     * 根据code获取用户信息
     * @param code 授权后回调地址带回的code
     */
    user(code) {
        return __awaiter(this, void 0, void 0, function* () {
            this._code = code;
            let token = yield this.getToken();
            let user = new User;
            user.id = token['openid'];
            user.token = token;
            if (this.app['config']['scope'] != 'snsapi_base') {
                let params = {
                    access_token: token.access_token,
                    openid: user.id,
                    lang: 'zh_CN'
                };
                let res = yield this.httpGet('/sns/userinfo', params);
                if (res && !res['errcode']) {
                    user.unionid = res['unionid'] || '';
                    user.nickname = res['nickname'];
                    user.name = res['nickname'];
                    user.avatar = res['headimgurl'];
                    user.original = res;
                }
            }
            return user;
        });
    }
}
exports.default = OAuthClient;
