'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../Core/BaseClient");
class ReverseClient extends BaseClient_1.default {
    byOutTradeNumber(outTradeNumber) {
        return this.reverse(outTradeNumber, 'out_trade_no');
    }
    byTransactionId(transactionId) {
        return this.reverse(transactionId, 'transaction_id');
    }
    reverse(number, type) {
        let params = {
            appid: this.app['config']['app_id'],
        };
        params[type] = number;
        return this.safeRequest(this.wrap('secapi/pay/reverse'), params);
    }
}
exports.default = ReverseClient;
