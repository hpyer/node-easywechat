'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../Core/BaseClient");
class Client extends BaseClient_1.default {
    prepends() {
        return {
            sign_type: 'HMAC-SHA256',
        };
    }
    addReceiver(receiver) {
        let params = {
            appid: this.app['config'].app_id,
            receiver: JSON.stringify(receiver),
        };
        return this.requestApi('pay/profitsharingaddreceiver', params);
    }
    deleteReceiver(receiver) {
        let params = {
            appid: this.app['config'].app_id,
            receiver: JSON.stringify(receiver),
        };
        return this.requestApi('pay/profitsharingremovereceiver', params);
    }
    share(transactionId, outOrderNo, receivers) {
        let params = {
            appid: this.app['config'].app_id,
            transaction_id: transactionId,
            out_order_no: outOrderNo,
            receivers: JSON.stringify(receivers),
        };
        return this.safeRequestApi('secapi/pay/profitsharing', params);
    }
    multiShare(transactionId, outOrderNo, receivers) {
        let params = {
            appid: this.app['config'].app_id,
            transaction_id: transactionId,
            out_order_no: outOrderNo,
            receivers: JSON.stringify(receivers),
        };
        return this.safeRequestApi('secapi/pay/multiprofitsharing', params);
    }
    markOrderAsFinished(params) {
        params['appid'] = this.app['config'].app_id;
        params['sub_appid'] = null;
        return this.safeRequestApi('secapi/pay/profitsharingfinish', params);
    }
    query(transactionId, outOrderNo) {
        let params = {
            sub_appid: null,
            transaction_id: transactionId,
            out_order_no: outOrderNo,
        };
        return this.requestApi('pay/profitsharingquery', params);
    }
}
exports.default = Client;
