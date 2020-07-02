import BaseClient from '../../../../Core/BaseClient';
export default class DomainClient extends BaseClient {
    /**
     * 设置服务器域名
     * @param params 参数设置
     */
    modify(params: object): Promise<any>;
    /**
     * 设置业务域名
     * @param domains 域名列表
     * @param action 操作类型
     */
    setWebviewDomain(domains: Array<string>, action?: string): Promise<any>;
}
