import BaseClient from '../../Core/BaseClient';
export default class MiniProgramBase extends BaseClient {
    /**
     * 获取支付用户的unionid
     * @param openid 用户的openid
     * @param optional 参数。transaction_id：支付交易号；mch_id：商户id；out_trade_no：商家订单号
     */
    getPaidUnionid(openid: string, optional?: object): Promise<any>;
}
