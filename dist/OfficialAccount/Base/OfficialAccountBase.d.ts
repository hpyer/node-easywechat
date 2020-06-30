import BaseClient from '../../Core/BaseClient';
export default class OfficialAccountBase extends BaseClient {
    /**
     * 清理接口调用次数
     * 此接口官方有每月调用限制，不可随意调用
     */
    clearQuota(): Promise<any>;
    /**
     * 获取微信服务器 IP (或IP段)
     */
    getValidIps(): Promise<any>;
    checkCallbackUrl(action?: string, operator?: string): Promise<any>;
}
