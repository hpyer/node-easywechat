'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../Core/BaseClient");
const Merge = require("merge");
class Client extends BaseClient_1.default {
    byOutTradeNumber(number, refundNumber, totalFee, refundFee, optional = {}) {
        return this.refund(refundNumber, totalFee, refundFee, Merge({}, optional, {
            out_trade_no: number,
        }));
    }
    byTransactionId(transactionId, refundNumber, totalFee, refundFee, optional = {}) {
        return this.refund(refundNumber, totalFee, refundFee, Merge({}, optional, {
            transaction_id: transactionId,
        }));
    }
    refund(refundNumber, totalFee, refundFee, optional = {}) {
        let params = Merge({
            appid: this.app['config'].app_id,
            out_refund_no: refundNumber,
            total_fee: totalFee,
            refund_fee: refundFee,
        }, optional);
        return this.safeRequest(this.wrap(this.app['inSandbox']() ? 'pay/refund' : 'secapi/pay/refund'), params);
    }
    queryByTransactionId(transactionId) {
        return this.query(transactionId, 'transaction_id');
    }
    queryByOutTradeNumber(outTradeNumber) {
        return this.query(outTradeNumber, 'out_trade_no');
    }
    queryByOutRefundNumber(outRefundNumber) {
        return this.query(outRefundNumber, 'out_refund_no');
    }
    queryByRefundId(refundId) {
        return this.query(refundId, 'refund_id');
    }
    query(number, type) {
        let params = {
            appid: this.app['config'].app_id,
        };
        params[type] = number;
        return this.request(this.wrap('pay/refundquery'), params);
    }
}
exports.default = Client;
