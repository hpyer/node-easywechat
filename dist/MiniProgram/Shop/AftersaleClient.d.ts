import BaseClient from '../../Core/BaseClient';
export default class AftersaleClient extends BaseClient {
    /**
     * 创建售后
     * @param aftersale 售后数据
     * @returns
     */
    add(aftersale: object): Promise<any>;
    /**
     * 获取订单下售后单
     * @param order 订单数据
     * @returns
     */
    get(order: object): Promise<any>;
    /**
     * 更新售后
     * @param order 订单数据
     * @param aftersale 售后数据
     * @returns
     */
    update(order: object, aftersale: object): Promise<any>;
}
