import BaseClient from '../../Core/BaseClient';
export default class DeliveryClient extends BaseClient {
    /**
     * 获取快递公司列表
     * @returns
     */
    getCompanyList(): Promise<any>;
    /**
     * 订单发货
     * @param order
     * @returns
     */
    send(order: object): Promise<any>;
    /**
     * 订单确认收货
     * @param order
     * @returns
     */
    recieve(order: object): Promise<any>;
}
