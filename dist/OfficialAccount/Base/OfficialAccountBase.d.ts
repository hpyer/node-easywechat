import BaseClient from '../../Core/BaseClient';
export default class OfficialAccountBase extends BaseClient {
    /**
     * 查询openAPI调用次数
     * @param cgiPath api的请求地址，例如"/cgi-bin/message/custom/send";不要前缀“https://api.weixin.qq.com” ，也不要漏了"/",否则都会76003的报错
     */
    getQuota(cgiPath: string): Promise<any>;
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
