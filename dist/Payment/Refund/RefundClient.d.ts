import BaseClient from '../Core/BaseClient';
export default class RefundClient extends BaseClient {
    byOutTradeNumber(number: string, refundNumber: string, totalFee: number, refundFee: number, optional?: object): Promise<any>;
    byTransactionId(transactionId: string, refundNumber: string, totalFee: number, refundFee: number, optional?: object): Promise<any>;
    protected refund(refundNumber: string, totalFee: number, refundFee: number, optional?: object): Promise<any>;
    queryByTransactionId(transactionId: string): Promise<any>;
    queryByOutTradeNumber(outTradeNumber: string): Promise<any>;
    queryByOutRefundNumber(outRefundNumber: string): Promise<any>;
    queryByRefundId(refundId: string): Promise<any>;
    protected query(number: string, type: string): Promise<any>;
}
