'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseApplication_1 = require("../Core/BaseApplication");
const Utils_1 = require("../Core/Utils");
const Paid_1 = require("./Notify/Paid");
const Refunded_1 = require("./Notify/Refunded");
const Scanned_1 = require("./Notify/Scanned");
class Application extends BaseApplication_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
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
            'Payment/Base',
            'Payment/Bill',
            'Payment/Coupon',
            'Payment/Jssdk',
            'Payment/Merchant',
            'Payment/Order',
            'Payment/Redpack',
            'Payment/Refund',
            'Payment/Reverse',
            'Payment/Sandbox',
            'Payment/Transfer',
            'Payment/Security',
            'Payment/ProfitSharing',
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
    handlePaidNotify(closure) {
        return (new Paid_1.default(this)).handle(closure);
    }
    handleRefundedNotify(closure) {
        return (new Refunded_1.default(this)).handle(closure);
    }
    handleScannedNotify(closure) {
        return (new Scanned_1.default(this)).handle(closure);
    }
    // map to `base` module
    pay() {
        return this['base'].pay.apply(this, arguments);
    }
    authCodeToOpenid() {
        return this['base'].authCodeToOpenid.apply(this, arguments);
    }
}
exports.default = Application;
;
