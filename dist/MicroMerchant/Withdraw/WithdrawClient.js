'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../../Core/Utils");
const BaseClient_1 = __importDefault(require("../Core/BaseClient"));
class WithdrawClient extends BaseClient_1.default {
    queryWithdrawalStatus(date, subMchId) {
        let params = {
            date,
            sub_mch_id: subMchId || this.app.config.sub_mch_id,
            sign_type: 'HMAC-SHA256',
            nonce_str: (0, Utils_1.randomString)(18),
        };
        return this.safeRequest('fund/queryautowithdrawbydate', params);
    }
    requestWithdraw(date, subMchId) {
        let params = {
            date,
            sub_mch_id: subMchId || this.app.config.sub_mch_id,
            sign_type: 'HMAC-SHA256',
            nonce_str: (0, Utils_1.randomString)(18),
        };
        return this.safeRequest('fund/reautowithdrawbydate', params);
    }
}
exports.default = WithdrawClient;
