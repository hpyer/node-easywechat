import BaseClient from '../Core/BaseClient';
export default class RefundClient extends BaseClient {
    /**
     * 根据商户订单号退款
     * @param number 商户订单号
     * @param refundNumber 商户退款订单号
     * @param totalFee 订单金额
     * @param refundFee 退款金额
     * @param optional 其它参数
     */
    byOutTradeNumber(number: string, refundNumber: string, totalFee: number, refundFee: number, optional?: object): Promise<any>;
    /**
     * 根据支付交易号退款
     * @param transactionId 支付交易号
     * @param refundNumber 商户退款订单号
     * @param totalFee 订单金额
     * @param refundFee 退款金额
     * @param optional 其它参数
     */
    byTransactionId(transactionId: string, refundNumber: string, totalFee: number, refundFee: number, optional?: object): Promise<any>;
    protected refund(refundNumber: string, totalFee: number, refundFee: number, optional?: object): Promise<any>;
    /**
     * 根据支付交易号查询退款
     * @param transactionId 支付交易号
     */
    queryByTransactionId(transactionId: string): Promise<any>;
    /**
     * 根据商户订单号查询退款
     * @param outTradeNumber 商户订单号
     */
    queryByOutTradeNumber(outTradeNumber: string): Promise<any>;
    /**
     * 根据商户退款订单号查询退款
     * @param outRefundNumber 商户退款订单号
     */
    queryByOutRefundNumber(outRefundNumber: string): Promise<any>;
    /**
     * 根据退款交易号查询
     * @param refundId 退款交易号
     */
    queryByRefundId(refundId: string): Promise<any>;
    protected query(number: string, type: string): Promise<any>;
}
