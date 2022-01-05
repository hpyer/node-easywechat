'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseApplication_1 = __importDefault(require("../Core/BaseApplication"));
const Utils_1 = require("../Core/Utils");
const MicroMerchantBase_1 = __importDefault(require("./Base/MicroMerchantBase"));
const CertficatesClient_1 = __importDefault(require("./Certficates/CertficatesClient"));
const MediaClient_1 = __importDefault(require("./Media/MediaClient"));
const MerchantConfigClient_1 = __importDefault(require("./MerchantConfig/MerchantConfigClient"));
const MeterialClient_1 = __importDefault(require("./Meterial/MeterialClient"));
const WithdrawClient_1 = __importDefault(require("./Withdraw/WithdrawClient"));
class MicroMerchant extends BaseApplication_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
        this.defaultConfig = {
            // 必要配置
            app_id: '',
            mch_id: '',
            key: '',
            http: {
                baseURL: 'https://api.mch.weixin.qq.com/',
            },
        };
        this.base = null;
        this.certficates = null;
        this.media = null;
        this.merchantConfig = null;
        this.material = null;
        this.withdraw = null;
        this.registerProviders();
    }
    registerProviders() {
        super.registerCommonProviders();
        this.offsetSet('base', function (app) {
            return new MicroMerchantBase_1.default(app);
        });
        this.offsetSet('certficates', function (app) {
            return new CertficatesClient_1.default(app);
        });
        this.offsetSet('media', function (app) {
            return new MediaClient_1.default(app);
        });
        this.offsetSet('merchantConfig', function (app) {
            return new MerchantConfigClient_1.default(app);
        });
        this.offsetSet('material', function (app) {
            return new MeterialClient_1.default(app);
        });
        this.offsetSet('withdraw', function (app) {
            return new WithdrawClient_1.default(app);
        });
    }
    getKey() {
        let key = this.config.key;
        if (!key) {
            throw new Error('config key should not empty.');
        }
        if (32 !== key.length) {
            throw new Error(`'${key}' should be 32 chars length.`);
        }
        return key;
    }
    setSubMchId(subMchId, appId = '') {
        this.config.sub_mch_id = subMchId;
        if (appId) {
            this.config.appid = appId;
        }
        return this;
    }
    setCertificate(certificate, serialNo = '') {
        this.config.certificate = certificate;
        this.config.serial_no = serialNo;
        return this;
    }
    verifySignature(data) {
        if (typeof data['sign'] == 'undefined' || !data['sign']) {
            return false;
        }
        let sign = data['sign'];
        delete data['sign'];
        let signType = sign.length > 32 ? 'HMAC-SHA256' : 'MD5';
        let secretKey = this.getKey();
        if ((0, Utils_1.makeSignature)(data, secretKey, signType) === sign) {
            return true;
        }
        throw new Error('return value signature verification error');
    }
    // map to `base` module
    submitApplication() {
        return this.base.submitApplication.apply(this.base, arguments);
    }
    getStatus() {
        return this.base.getStatus.apply(this.base, arguments);
    }
    upgrade() {
        return this.base.upgrade.apply(this.base, arguments);
    }
    getUpgradeStatus() {
        return this.base.getUpgradeStatus.apply(this.base, arguments);
    }
}
exports.default = MicroMerchant;
;
