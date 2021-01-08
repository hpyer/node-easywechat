'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../../Core/Utils");
const BaseClient_1 = __importDefault(require("../Core/BaseClient"));
class RefundClient extends BaseClient_1.default {
    /**
     * 根据商户订单号退款
     * @param number 商户订单号
     * @param refundNumber 商户退款订单号
     * @param totalFee 订单金额
     * @param refundFee 退款金额
     * @param optional 其它参数
     */
    byOutTradeNumber(number, refundNumber, totalFee, refundFee, optional = {}) {
        return this.refund(refundNumber, totalFee, refundFee, Utils_1.merge(Utils_1.merge({}, optional), {
            out_trade_no: number,
        }));
    }
    /**
     * 根据支付交易号退款
     * @param transactionId 支付交易号
     * @param refundNumber 商户退款订单号
     * @param totalFee 订单金额
     * @param refundFee 退款金额
     * @param optional 其它参数
     */
    byTransactionId(transactionId, refundNumber, totalFee, refundFee, optional = {}) {
        return this.refund(refundNumber, totalFee, refundFee, Utils_1.merge(Utils_1.merge({}, optional), {
            transaction_id: transactionId,
        }));
    }
    refund(refundNumber, totalFee, refundFee, optional = {}) {
        let params = Utils_1.merge({
            appid: this.app.config.app_id,
            out_refund_no: refundNumber,
            total_fee: totalFee,
            refund_fee: refundFee,
        }, optional);
        return this.safeRequest(this.wrap(this.app['inSandbox']() ? 'pay/refund' : 'secapi/pay/refund'), params);
    }
    /**
     * 根据支付交易号查询退款
     * @param transactionId 支付交易号
     */
    queryByTransactionId(transactionId) {
        return this.query(transactionId, 'transaction_id');
    }
    /**
     * 根据商户订单号查询退款
     * @param outTradeNumber 商户订单号
     */
    queryByOutTradeNumber(outTradeNumber) {
        return this.query(outTradeNumber, 'out_trade_no');
    }
    /**
     * 根据商户退款订单号查询退款
     * @param outRefundNumber 商户退款订单号
     */
    queryByOutRefundNumber(outRefundNumber) {
        return this.query(outRefundNumber, 'out_refund_no');
    }
    /**
     * 根据退款交易号查询
     * @param refundId 退款交易号
     */
    queryByRefundId(refundId) {
        return this.query(refundId, 'refund_id');
    }
    query(number, type) {
        let params = {
            appid: this.app.config.app_id,
        };
        params[type] = number;
        return this.request(this.wrap('pay/refundquery'), params);
    }
}
exports.default = RefundClient;
