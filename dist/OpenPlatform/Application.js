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
const BaseApplication_1 = __importDefault(require("../Core/BaseApplication"));
const Utils_1 = require("../Core/Utils");
const AccessToken_1 = __importDefault(require("./Authorizer/Auth/AccessToken"));
const Guard_1 = __importDefault(require("./Authorizer/Server/Guard"));
const Application_1 = __importDefault(require("./Authorizer/OfficialAccount/Application"));
const Client_1 = __importDefault(require("./Authorizer/OfficialAccount/OAuth/Client"));
const Client_2 = __importDefault(require("./Authorizer/OfficialAccount/Account/Client"));
const Application_2 = __importDefault(require("./Authorizer/MiniProgram/Application"));
const Client_3 = __importDefault(require("./Authorizer/MiniProgram/Auth/Client"));
const VerifyTicket_1 = __importDefault(require("./Auth/VerifyTicket"));
const AccessToken_2 = __importDefault(require("./Auth/AccessToken"));
const OpenPlatformBase_1 = __importDefault(require("./Base/OpenPlatformBase"));
const Encryptor_1 = __importDefault(require("../Core/Encryptor"));
const OpenPlatformGuard_1 = __importDefault(require("./Server/OpenPlatformGuard"));
const CodeTemplateClient_1 = __importDefault(require("./CodeTemplate/CodeTemplateClient"));
const ComponentClient_1 = __importDefault(require("./Component/ComponentClient"));
class OpenPlatform extends BaseApplication_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
        this.verify_ticket = null;
        this.access_token = null;
        this.base = null;
        this.encryptor = null;
        this.server = null;
        this.code_template = null;
        this.component = null;
        this.registerProviders();
    }
    registerProviders() {
        super.registerCommonProviders();
        this.offsetSet('verify_ticket', function (app) {
            return new VerifyTicket_1.default(app);
        });
        this.offsetSet('access_token', function (app) {
            return new AccessToken_2.default(app);
        });
        this.offsetSet('base', function (app) {
            return new OpenPlatformBase_1.default(app);
        });
        this.offsetSet('encryptor', function (app) {
            return new Encryptor_1.default(app.config['app_id'], app.config['token'], app.config['aes_key']);
        });
        this.offsetSet('server', function (app) {
            return new OpenPlatformGuard_1.default(app);
        });
        this.offsetSet('code_template', function (app) {
            return new CodeTemplateClient_1.default(app);
        });
        this.offsetSet('component', function (app) {
            return new ComponentClient_1.default(app);
        });
    }
    /**
     * 获取用户授权页 URL
     * @param callbackUrl 回调地址
     * @param optional 其它参数
     */
    getPreAuthorizationUrl(callbackUrl, optional = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Utils_1.isString(optional)) {
                optional = {
                    pre_auth_code: optional,
                };
            }
            else {
                optional['pre_auth_code'] = (yield this.createPreAuthorizationCode())['pre_auth_code'];
            }
            return 'https://mp.weixin.qq.com/cgi-bin/componentloginpage?' + Utils_1.buildQueryString(Utils_1.merge(Utils_1.merge({}, optional), {
                component_appid: this.config['app_id'],
                redirect_uri: callbackUrl,
            }));
        });
    }
    /**
     * 获取移动端用户授权页 URL
     * @param callbackUrl 回调地址
     * @param optional 其它参数
     */
    getMobilePreAuthorizationUrl(callbackUrl, optional = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Utils_1.isString(optional)) {
                optional = {
                    pre_auth_code: optional,
                };
            }
            else {
                optional['pre_auth_code'] = yield this.createPreAuthorizationCode()['pre_auth_code'];
            }
            return 'https://mp.weixin.qq.com/safe/bindcomponent?' + Utils_1.buildQueryString(Utils_1.merge(optional, {
                component_appid: this.config['app_id'],
                redirect_uri: callbackUrl,
                action: 'bindcomponent',
                no_scan: 1,
            }));
        });
    }
    getAuthorizerConfig(appId, refreshToken = null) {
        return Utils_1.merge(Utils_1.merge({}, this.config), {
            component_app_id: this.config['app_id'],
            app_id: appId,
            refresh_token: refreshToken,
        });
    }
    getReplaceServices(accessToken = null) {
        let that = this;
        let services = {
            access_token: accessToken || function (app) {
                return new AccessToken_1.default(app, that);
            },
            server: function (app) {
                return new Guard_1.default(app);
            },
        };
        ['cache', 'log', 'request'].forEach(function (reuse) {
            if (that[reuse]) {
                services[reuse] = that[reuse];
            }
        });
        return services;
    }
    /**
     * 代理公众号实现业务，返回SDK实例
     * @param appId 授权方公众号 APPID，非开放平台第三方平台 APPID
     * @param refreshToken 为授权方的 refresh_token
     * @param accessToken
     */
    officialAccount(appId, refreshToken = null, accessToken = null) {
        let that = this;
        let services = Utils_1.merge(Utils_1.merge({}, this.getReplaceServices(accessToken)), {
            encryptor: this.encryptor,
            account: function (app) {
                return new Client_2.default(app, that);
            },
            oauth: function (app) {
                return new Client_1.default(that);
            },
        });
        return new Application_1.default(this.getAuthorizerConfig(appId, refreshToken), services);
    }
    /**
     * 代理小程序实现业务，返回SDK实例
     * @param appId 授权方小程序 APPID，非开放平台第三方平台 APPID
     * @param refreshToken 为授权方的 refresh_token
     * @param accessToken
     */
    miniProgram(appId, refreshToken = null, accessToken = null) {
        let that = this;
        let services = Utils_1.merge(Utils_1.merge({}, this.getReplaceServices(accessToken)), {
            auth: function (app) {
                return new Client_3.default(app, that);
            },
        });
        return new Application_2.default(this.getAuthorizerConfig(appId, refreshToken), services);
    }
    // map to `base` module
    /**
     * 使用授权码换取接口调用凭据和授权信息
     * @param authCode 授权码, 会在授权成功的回调返回给第三方平台
     */
    handleAuthorize() {
        return this.base.handleAuthorize.apply(this.base, arguments);
    }
    /**
     * 获取授权方的帐号基本信息
     * @param appId 授权方app_id
     */
    getAuthorizer() {
        return this.base.getAuthorizer.apply(this.base, arguments);
    }
    /**
     * 设置授权方的选项信息
     * @param appId 授权方app_id
     * @param name 选项名称
     */
    getAuthorizerOption() {
        return this.base.getAuthorizerOption.apply(this.base, arguments);
    }
    /**
     * 设置授权方的选项信息
     * @param appId 授权方app_id
     * @param name 选项名称
     * @param value 选项值
     */
    setAuthorizerOption() {
        return this.base.setAuthorizerOption.apply(this.base, arguments);
    }
    /**
     * 获取已授权的授权方列表
     * @param offset 起始位置，从0开始
     * @param count 获取记录数，最大500
     */
    getAuthorizers() {
        return this.base.getAuthorizers.apply(this.base, arguments);
    }
    /**
     * 获取预授权码
     */
    createPreAuthorizationCode() {
        return this.base.createPreAuthorizationCode.apply(this.base, arguments);
    }
    /**
     * 清零调用次数
     */
    clearQuota() {
        return this.base.clearQuota.apply(this.base, arguments);
    }
}
exports.default = OpenPlatform;
;
