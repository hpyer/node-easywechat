import BaseClient from '../../Core/BaseClient';
export default class SubMerchantClient extends BaseClient {
    /**
     * 添加子商户
     * @param info 商户信息
     */
    create(info: object): Promise<any>;
    /**
     * 更新子商户
     * @param merchantId 商户id
     * @param info 商户信息
     */
    update(merchantId: number, info: object): Promise<any>;
    /**
     * 获取子商户信息
     * @param merchantId 子商户id
     */
    get(merchantId: number): Promise<any>;
    /**
     * 获取子商户列表
     * @param beginId 起始的子商户id，一个母商户公众号下唯一，默认：0
     * @param limit 拉取的子商户的个数，最大值为100，默认：50
     * @param status 子商户审核状态。默认：CHECKING
     */
    list(beginId?: number, limit?: number, status?: string): Promise<any>;
}
