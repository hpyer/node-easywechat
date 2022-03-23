import BaseClient from '../../Core/BaseClient';
export default class GroupChatWayClient extends BaseClient {
    /**
     * 配置客户群进群方式
     * @see https://developer.work.weixin.qq.com/document/path/92229#%E9%85%8D%E7%BD%AE%E5%AE%A2%E6%88%B7%E7%BE%A4%E8%BF%9B%E7%BE%A4%E6%96%B9%E5%BC%8F
     * @param params
     * @returns
     */
    create(params: object): Promise<any>;
    /**
     * 获取客户群进群方式配置
     * @see https://developer.work.weixin.qq.com/document/path/92229#%E8%8E%B7%E5%8F%96%E5%AE%A2%E6%88%B7%E7%BE%A4%E8%BF%9B%E7%BE%A4%E6%96%B9%E5%BC%8F%E9%85%8D%E7%BD%AE
     * @param configId
     * @returns
     */
    get(configId: string): Promise<any>;
    /**
     * 更新客户群进群方式配置
     * @see https://developer.work.weixin.qq.com/document/path/92229#%E6%9B%B4%E6%96%B0%E5%AE%A2%E6%88%B7%E7%BE%A4%E8%BF%9B%E7%BE%A4%E6%96%B9%E5%BC%8F%E9%85%8D%E7%BD%AE
     * @param configId
     * @param config
     * @returns
     */
    update(configId: string, config: object): Promise<any>;
    /**
     * 删除客户群进群方式配置
     * @see https://developer.work.weixin.qq.com/document/path/92229#%E5%88%A0%E9%99%A4%E5%AE%A2%E6%88%B7%E7%BE%A4%E8%BF%9B%E7%BE%A4%E6%96%B9%E5%BC%8F%E9%85%8D%E7%BD%AE
     * @param configId
     * @returns
     */
    delete(configId: string): Promise<any>;
}
