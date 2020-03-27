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
const BaseApplication_1 = require("../Core/BaseApplication");
const Merge = require("merge");
const Utils_1 = require("../Core/Utils");
const AccessToken_1 = require("./Authorizer/Auth/AccessToken");
const Guard_1 = require("./Authorizer/Server/Guard");
const Application_1 = require("./Authorizer/OfficialAccount/Application");
const Client_1 = require("./Authorizer/OfficialAccount/OAuth/Client");
const Client_2 = require("./Authorizer/OfficialAccount/Account/Client");
const Application_2 = require("./Authorizer/MiniProgram/Application");
const Client_3 = require("./Authorizer/MiniProgram/Auth/Client");
class Application extends BaseApplication_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
        let providers = [
            'OpenPlatform/Auth',
            'OpenPlatform/Base',
            'OpenPlatform/Server',
            'OpenPlatform/CodeTemplate',
            'OpenPlatform/Component',
        ];
        super.registerProviders(providers);
    }
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
            return 'https://mp.weixin.qq.com/cgi-bin/componentloginpage?' + Utils_1.buildQueryString(Merge({}, optional, {
                component_appid: this['config']['app_id'],
                redirect_uri: callbackUrl,
            }));
        });
    }
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
            return 'https://mp.weixin.qq.com/safe/bindcomponent?' + Utils_1.buildQueryString(Merge({}, optional, {
                component_appid: this['config']['app_id'],
                redirect_uri: callbackUrl,
                action: 'bindcomponent',
                no_scan: 1,
            }));
        });
    }
    getAuthorizerConfig(appId, refreshToken = null) {
        return Merge({}, this['config'], {
            component_app_id: this['config']['app_id'],
            app_id: appId,
            refresh_token: refreshToken,
        });
    }
    getReplaceServices(accessToken = null) {
        let services = {
            access_token: accessToken || function (app) {
                return new AccessToken_1.default(app, this);
            },
            server: function (app) {
                return new Guard_1.default(app);
            },
        };
        let that = this;
        ['cache', 'log', 'request'].map(reuse => {
            if (that[reuse]) {
                services[reuse] = that[reuse];
            }
        });
        return services;
    }
    officialAccount(appId, refreshToken = null, accessToken = null) {
        let that = this;
        let services = Merge({}, this.getReplaceServices(accessToken), {
            encryptor: this['encryptor'],
            request: this['request'],
            cache: this['cache'],
            account: function (app) {
                return new Client_2.default(app, that);
            },
            oauth: function (app) {
                return new Client_1.default(that);
            },
        });
        return new Application_1.default(this.getAuthorizerConfig(appId, refreshToken), services);
    }
    miniProgram(appId, refreshToken = null, accessToken = null) {
        let that = this;
        let services = Merge({}, this.getReplaceServices(accessToken), {
            request: this['request'],
            cache: this['cache'],
            auth: function (app) {
                return new Client_3.default(app, that);
            },
        });
        return new Application_2.default(this.getAuthorizerConfig(appId, refreshToken), services);
    }
    // map to `base` module
    handleAuthorize() {
        return this['base'].handleAuthorize.apply(this['base'], arguments);
    }
    getAuthorizer() {
        return this['base'].getAuthorizer.apply(this['base'], arguments);
    }
    getAuthorizerOption() {
        return this['base'].getAuthorizerOption.apply(this['base'], arguments);
    }
    setAuthorizerOption() {
        return this['base'].setAuthorizerOption.apply(this['base'], arguments);
    }
    getAuthorizers() {
        return this['base'].getAuthorizers.apply(this['base'], arguments);
    }
    createPreAuthorizationCode() {
        return this['base'].createPreAuthorizationCode.apply(this['base'], arguments);
    }
    clearQuota() {
        return this['base'].clearQuota.apply(this['base'], arguments);
    }
}
exports.default = Application;
;
