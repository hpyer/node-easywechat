import BaseClient from '../Core/BaseClient';
export default class OrderClient extends BaseClient {
    /**
     * 统一下单
     * @param params 订单信息
     * @param isContract 是否支付中签约，默认 false
     */
    unify(params: object, isContract?: Boolean): Promise<any>;
    /**
     * 根据商户订单号查询
     * @param out_trade_no 商户订单号
     */
    queryByOutTradeNumber(out_trade_no: string): Promise<any>;
    /**
     * 根据交易号查询
     * @param transaction_id 交易号
     */
    queryByTransactionId(transaction_id: string): Promise<any>;
    protected query(params: object): Promise<any>;
    /**
     * 关闭订单
     * @param tradeNo 商户订单号
     */
    close(tradeNo: string): Promise<any>;
}
