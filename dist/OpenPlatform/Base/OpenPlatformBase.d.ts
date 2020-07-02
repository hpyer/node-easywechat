import BaseClient from '../../Core/BaseClient';
export default class OpenPlatformBase extends BaseClient {
    /**
     * 使用授权码换取接口调用凭据和授权信息
     * @param authCode 授权码, 会在授权成功的回调返回给第三方平台
     */
    handleAuthorize(authCode?: string): Promise<any>;
    /**
     * 获取授权方的帐号基本信息
     * @param appId 授权方app_id
     */
    getAuthorizer(appId: string): Promise<any>;
    /**
     * 设置授权方的选项信息
     * @param appId 授权方app_id
     * @param name 选项名称
     */
    getAuthorizerOption(appId: string, name: string): Promise<any>;
    /**
     * 设置授权方的选项信息
     * @param appId 授权方app_id
     * @param name 选项名称
     * @param value 选项值
     */
    setAuthorizerOption(appId: string, name: string, value: string): Promise<any>;
    /**
     * 获取已授权的授权方列表
     * @param offset 起始位置，从0开始
     * @param count 获取记录数，最大500
     */
    getAuthorizers(offset?: number, count?: number): Promise<any>;
    /**
     * 获取预授权码
     */
    createPreAuthorizationCode(): Promise<any>;
    /**
     * 清零调用次数
     */
    clearQuota(): Promise<any>;
}
