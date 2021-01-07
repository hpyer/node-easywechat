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
const Paid_1 = __importDefault(require("./Notify/Paid"));
const Refunded_1 = __importDefault(require("./Notify/Refunded"));
const Scanned_1 = __importDefault(require("./Notify/Scanned"));
const AccessToken_1 = __importDefault(require("../OfficialAccount/Auth/AccessToken"));
const UrlClient_1 = __importDefault(require("../BaseService/Url/UrlClient"));
const PaymentBase_1 = __importDefault(require("./Base/PaymentBase"));
const BillClient_1 = __importDefault(require("./Bill/BillClient"));
const CouponClient_1 = __importDefault(require("./Coupon/CouponClient"));
const JssdkClient_1 = __importDefault(require("./Jssdk/JssdkClient"));
const MerchantClient_1 = __importDefault(require("./Merchant/MerchantClient"));
const OrderClient_1 = __importDefault(require("./Order/OrderClient"));
const RedpackClient_1 = __importDefault(require("./Redpack/RedpackClient"));
const RefundClient_1 = __importDefault(require("./Refund/RefundClient"));
const ReverseClient_1 = __importDefault(require("./Reverse/ReverseClient"));
const SandboxClient_1 = __importDefault(require("./Sandbox/SandboxClient"));
const TransferClient_1 = __importDefault(require("./Transfer/TransferClient"));
const SecurityClient_1 = __importDefault(require("./Security/SecurityClient"));
const ProfitSharingClient_1 = __importDefault(require("./ProfitSharing/ProfitSharingClient"));
class Payment extends BaseApplication_1.default {
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
        this.base = null;
        this.bill = null;
        this.coupon = null;
        this.jssdk = null;
        this.merchant = null;
        this.order = null;
        this.redpack = null;
        this.refund = null;
        this.reverse = null;
        this.sandbox = null;
        this.transfer = null;
        this.security = null;
        this.profit_sharing = null;
        this.access_token = null;
        this.url = null;
        this.registerProviders();
    }
    registerProviders() {
        super.registerCommonProviders();
        this.offsetSet('base', function (app) {
            return new PaymentBase_1.default(app);
        });
        this.offsetSet('bill', function (app) {
            return new BillClient_1.default(app);
        });
        this.offsetSet('coupon', function (app) {
            return new CouponClient_1.default(app);
        });
        this.offsetSet('jssdk', function (app) {
            return new JssdkClient_1.default(app);
        });
        this.offsetSet('merchant', function (app) {
            return new MerchantClient_1.default(app);
        });
        this.offsetSet('order', function (app) {
            return new OrderClient_1.default(app);
        });
        this.offsetSet('redpack', function (app) {
            return new RedpackClient_1.default(app);
        });
        this.offsetSet('refund', function (app) {
            return new RefundClient_1.default(app);
        });
        this.offsetSet('reverse', function (app) {
            return new ReverseClient_1.default(app);
        });
        this.offsetSet('sandbox', function (app) {
            return new SandboxClient_1.default(app);
        });
        this.offsetSet('transfer', function (app) {
            return new TransferClient_1.default(app);
        });
        this.offsetSet('security', function (app) {
            return new SecurityClient_1.default(app);
        });
        this.offsetSet('profit_sharing', function (app) {
            return new ProfitSharingClient_1.default(app);
        });
        // OfficialAccount
        if (!this.access_token) {
            this.offsetSet('access_token', function (app) {
                return new AccessToken_1.default(app);
            });
        }
        // BaseService
        this.offsetSet('url', function (app) {
            return new UrlClient_1.default(app);
        });
    }
    scheme(product_id) {
        let params = {
            appid: this.config['app_id'],
            mch_id: this.config['mch_id'],
            time_stamp: Utils_1.getTimestamp(),
            nonce_str: Utils_1.randomString(16),
            product_id,
        };
        params['sign'] = Utils_1.makeSignature(params, this.config['key']);
        return 'weixin://wxpay/bizpayurl?' + Utils_1.buildQueryString(params);
    }
    codeUrlScheme(codeUrl) {
        return 'weixin://wxpay/bizpayurl?sr=' + codeUrl;
    }
    setSubMerchant(mchId, appId = null) {
        this.config['sub_mch_id'] = mchId;
        this.config['sub_appid'] = appId;
        return this;
    }
    inSandbox() {
        return !!this.config['sandbox'];
    }
    getKey(endpoint = null) {
        return __awaiter(this, void 0, void 0, function* () {
            if ('sandboxnew/pay/getsignkey' === endpoint) {
                return this.config.key;
            }
            let key = this.inSandbox() ? yield this['sandbox'].getKey() : this.config.key;
            if (!key) {
                throw new Error('config key should not empty.');
            }
            if (32 !== key.length) {
                throw new Error(`'${key}' should be 32 chars length.`);
            }
            return key;
        });
    }
    /**
     * 处理付款结果通知
     * @param closure 处理函数。需接收2个参数，第1个参数通知消息message，第2个参数为设置错误消息的方法。处理函数需要return true;表示处理成功
     */
    handlePaidNotify(closure) {
        return (new Paid_1.default(this)).handle(closure);
    }
    /**
     * 处理退款结果通知
     * @param closure 处理函数。需接收3个参数，第1个参数通知消息message，第2个参数为message['req_info']解密后的信息，第3个参数为设置错误消息的方法。处理函数需要return true;表示处理成功
     */
    handleRefundedNotify(closure) {
        return (new Refunded_1.default(this)).handle(closure);
    }
    /**
     * 扫码支付通知
     * @param closure 处理函数。需接收3个参数，第1个参数通知消息message，第2个参数返回“通信错误”给微信，第3个参数返回“业务错误”给微信。处理函数需要return prepay_id
     */
    handleScannedNotify(closure) {
        return (new Scanned_1.default(this)).handle(closure);
    }
    // map to `base` module
    /**
     * 刷卡支付
     * @param params 支付订单参数
     */
    pay() {
        return this.base.pay.apply(this.base, arguments);
    }
    /**
     * 付款码查询openid
     * @param auth_code 扫码支付付款码
     */
    authCodeToOpenid() {
        return this.base.authCodeToOpenid.apply(this.base, arguments);
    }
}
exports.default = Payment;
;
