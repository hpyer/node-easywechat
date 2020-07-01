import BaseClient from '../Core/BaseClient';
export default class TransferClient extends BaseClient {
    /**
     * 查询付款到零钱的订单
     * @param partnerTradeNo 商户订单号
     */
    queryBalanceOrder(partnerTradeNo: string): Promise<any>;
    /**
     * 查询付款到银行卡的订单
     * @param partnerTradeNo 商户订单号
     */
    queryBankCardOrder(partnerTradeNo: string): Promise<any>;
    /**
     * 企业付款到用户零钱
     * @param params 付款信息
     */
    toBalance(params: object): Promise<any>;
    /**
     * 企业付款到银行卡
     * @param params 付款信息
     */
    toBankCard(params: object): Promise<any>;
}
