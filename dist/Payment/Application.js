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
const Utils_1 = require("../Core/Utils");
class Application extends BaseApplication_1.default {
    constructor(config = {}) {
        super(config);
        this.defaultConfig = {
            // 必要配置
            app_id: '',
            mch_id: '',
            key: '',
            http: {
                baseUrl: 'https://api.mch.weixin.qq.com/',
            },
        };
        let providers = [
            'OfficialAccount/Auth',
            'BaseService/Url',
            'Payment/Base'
        ];
        super.registerProviders(providers);
    }
    scheme(product_id) {
        let params = {
            appid: this['config']['app_id'],
            mch_id: this['config']['mch_id'],
            time_stamp: Utils_1.getTimestamp(),
            nonce_str: Utils_1.randomString(16),
            product_id,
        };
        params['sign'] = Utils_1.makeSignature(params, this['config']['key']);
        return 'weixin://wxpay/bizpayurl?' + Utils_1.buildQueryString(params);
    }
    codeUrlScheme(codeUrl) {
        return 'weixin://wxpay/bizpayurl?sr=' + codeUrl;
    }
    setSubMerchant(mchId, appId = null) {
        this['config']['sub_mch_id'] = mchId;
        this['config']['sub_appid'] = appId;
        return this;
    }
    inSandbox() {
        return !!this['config']['sandbox'];
    }
    getKey(endpoint = null) {
        if ('sandboxnew/pay/getsignkey' === endpoint) {
            return this['config']['key'];
        }
        let key = this.inSandbox() ? this['sandbox'].getKey() : this['config']['key'];
        if (!key) {
            throw new Error('config key should not empty.');
        }
        if (32 !== key.length) {
            throw new Error(`'${key}' should be 32 chars length.`);
        }
        return key;
    }
    pay(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this['app']['base'].pay(params);
        });
    }
}
exports.default = Application;
;
