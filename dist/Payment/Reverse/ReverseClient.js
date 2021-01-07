'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../Core/BaseClient"));
class ReverseClient extends BaseClient_1.default {
    /**
     * 通过商户订单号撤销订单
     * @param outTradeNumber 商户订单号
     */
    byOutTradeNumber(outTradeNumber) {
        return this.reverse(outTradeNumber, 'out_trade_no');
    }
    /**
     * 通过支付交易号撤销订单
     * @param transactionId 支付交易号
     */
    byTransactionId(transactionId) {
        return this.reverse(transactionId, 'transaction_id');
    }
    reverse(number, type) {
        let params = {
            appid: this.app.config.app_id,
        };
        params[type] = number;
        return this.safeRequest(this.wrap('secapi/pay/reverse'), params);
    }
}
exports.default = ReverseClient;
