import BaseClient from '../Core/BaseClient';
export default class PaymentBase extends BaseClient {
    /**
     * 刷卡支付
     * @param params 支付订单参数
     */
    pay(params: object): Promise<any>;
    /**
     * 付款码查询openid
     * @param auth_code 扫码支付付款码
     */
    authCodeToOpenid(auth_code: string): Promise<any>;
}
