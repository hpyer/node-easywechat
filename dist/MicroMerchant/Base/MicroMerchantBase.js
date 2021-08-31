'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../../Core/Utils");
const BaseClient_1 = __importDefault(require("../Core/BaseClient"));
class MicroMerchantBase extends BaseClient_1.default {
    submitApplication(params) {
        let newParams = this.processParams(Utils_1.merge(Utils_1.merge({}, params), {
            version: '3.0',
            cert_sn: '',
            sign_type: 'HMAC-SHA256',
            nonce_str: Utils_1.randomString(18),
        }));
        return this.safeRequest('applyment/micro/submit', newParams);
    }
    getStatus(applymentId, businessCode = '') {
        let params = {
            version: '1.0',
            sign_type: 'HMAC-SHA256',
            nonce_str: Utils_1.randomString(18),
        };
        if (applymentId) {
            params['applyment_id'] = applymentId;
        }
        else {
            params['business_code'] = businessCode;
        }
        return this.safeRequest('applyment/micro/getstate', params);
    }
    upgrade(params) {
        let newParams = this.processParams(Utils_1.merge(Utils_1.merge({}, params), {
            sub_mch_id: params['sub_mch_id'] || this.app.config.sub_mch_id,
            version: '1.0',
            cert_sn: '',
            sign_type: 'HMAC-SHA256',
            nonce_str: Utils_1.randomString(18),
        }));
        return this.safeRequest('applyment/micro/submitupgrade', newParams);
    }
    getUpgradeStatus(subMchId = '') {
        let params = {
            sub_mch_id: subMchId || this.app.config.sub_mch_id,
            version: '1.0',
            sign_type: 'HMAC-SHA256',
            nonce_str: Utils_1.randomString(18),
        };
        return this.safeRequest('applyment/micro/getupgradestate', params);
    }
}
exports.default = MicroMerchantBase;
