import BaseClient from '../../Core/BaseClient';
export default class ExpressClient extends BaseClient {
    /**
     * 获取支持的快递公司列表
     */
    listProviders(): Promise<any>;
    /**
     * 生成运单
     * @param params 订单信息
     */
    createWaybill(params?: object): Promise<any>;
    /**
     * 取消运单
     * @param params 订单信息
     */
    deleteWaybill(params?: object): Promise<any>;
    /**
     * 获取运单数据
     * @param params 订单信息
     */
    getWaybill(params?: object): Promise<any>;
    /**
     * 查询运单轨迹
     * @param params 订单信息
     */
    getWaybillTrack(params?: object): Promise<any>;
    /**
     * 获取电子面单余额
     * @param deliveryId 快递公司ID
     * @param bizId 快递公司客户编码
     */
    getBalance(deliveryId?: string, bizId?: string): Promise<any>;
    /**
     * 绑定打印员
     * @param openid 用户openid
     */
    bindPrinter(openid?: string): Promise<any>;
    /**
     * 解绑打印员
     * @param openid 用户openid
     */
    unbindPrinter(openid?: string): Promise<any>;
}
