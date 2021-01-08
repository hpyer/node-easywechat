import BaseClient from '../Core/BaseClient';
export default class RedpackClient extends BaseClient {
    /**
     * 查询红包信息
     * @param mchBillno 商户订单号
     */
    info(mchBillno: any): Promise<any>;
    /**
     * 发送普通红包
     * @param data 红包参数
     */
    sendNormal(data: object): Promise<any>;
    /**
     * 发送裂变红包
     * @param params 红包参数
     */
    sendGroup(params: object): Promise<any>;
}
