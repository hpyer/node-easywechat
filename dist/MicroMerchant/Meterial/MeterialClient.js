'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../../Core/Utils");
const BaseClient_1 = __importDefault(require("../Core/BaseClient"));
class MeterialClient extends BaseClient_1.default {
    setSettlementCard(params) {
        let newParams = this.processParams((0, Utils_1.merge)((0, Utils_1.merge)({}, params), {
            sub_mch_id: params['sub_mch_id'] || this.app.config.sub_mch_id,
            version: '1.0',
            cert_sn: '',
            sign_type: 'HMAC-SHA256',
            nonce_str: (0, Utils_1.randomString)(18),
        }));
        return this.safeRequest('applyment/micro/modifyarchives', newParams);
    }
    updateContact(params) {
        let newParams = this.processParams((0, Utils_1.merge)((0, Utils_1.merge)({}, params), {
            sub_mch_id: params['sub_mch_id'] || this.app.config.sub_mch_id,
            version: '1.0',
            cert_sn: '',
            sign_type: 'HMAC-SHA256',
            nonce_str: (0, Utils_1.randomString)(18),
        }));
        return this.safeRequest('applyment/micro/modifycontactinfo', newParams);
    }
}
exports.default = MeterialClient;
