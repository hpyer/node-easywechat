'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../Core/BaseClient"));
class ProfitSharingClient extends BaseClient_1.default {
    prepends() {
        return {
            sign_type: 'HMAC-SHA256',
        };
    }
    addReceiver(receiver) {
        let params = {
            appid: this.app.config.app_id,
            receiver: JSON.stringify(receiver),
        };
        return this.request('pay/profitsharingaddreceiver', params);
    }
    deleteReceiver(receiver) {
        let params = {
            appid: this.app.config.app_id,
            receiver: JSON.stringify(receiver),
        };
        return this.request('pay/profitsharingremovereceiver', params);
    }
    share(transactionId, outOrderNo, receivers) {
        let params = {
            appid: this.app.config.app_id,
            transaction_id: transactionId,
            out_order_no: outOrderNo,
            receivers: JSON.stringify(receivers),
        };
        return this.safeRequest('secapi/pay/profitsharing', params);
    }
    multiShare(transactionId, outOrderNo, receivers) {
        let params = {
            appid: this.app.config.app_id,
            transaction_id: transactionId,
            out_order_no: outOrderNo,
            receivers: JSON.stringify(receivers),
        };
        return this.safeRequest('secapi/pay/multiprofitsharing', params);
    }
    markOrderAsFinished(params) {
        params['appid'] = this.app.config.app_id;
        params['sub_appid'] = null;
        return this.safeRequest('secapi/pay/profitsharingfinish', params);
    }
    query(transactionId, outOrderNo) {
        let params = {
            sub_appid: null,
            transaction_id: transactionId,
            out_order_no: outOrderNo,
        };
        return this.request('pay/profitsharingquery', params);
    }
}
exports.default = ProfitSharingClient;
