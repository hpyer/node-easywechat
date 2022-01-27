import BaseClient from '../../Core/BaseClient';
export default class CorpClient extends BaseClient {
    constructor(app: any);
    /**
     * 企业授权应用
     * @see https://developer.work.weixin.qq.com/document/path/90597
     * @param preAuthCode
     * @param redirectUri
     * @param state
     * @returns
     */
    getPreAuthorizationUrl(preAuthCode?: string, redirectUri?: string, state?: string): Promise<string>;
    /**
     * 获取预授权码
     * @returns
     */
    getPreAuthCode(): Promise<any>;
    /**
     * 设置授权配置
     * @see https://developer.work.weixin.qq.com/document/path/90602
     * @param preAuthCode
     * @param sessionInfo
     * @returns
     */
    setSession(preAuthCode: string, sessionInfo: object): Promise<any>;
    /**
     * 获取企业永久授权码
     * @see https://developer.work.weixin.qq.com/document/path/90603
     * @param authCode
     * @returns
     */
    getPermanentByCode(authCode: string): Promise<any>;
    /**
     * 获取企业授权信息
     * @see https://developer.work.weixin.qq.com/document/path/90604
     * @param authCorpId
     * @param permanentCode
     * @returns
     */
    getAuthorization(authCorpId: string, permanentCode: string): Promise<any>;
    /**
     * 获取应用的管理员列表
     * @see https://developer.work.weixin.qq.com/document/path/90606
     * @param authCorpId
     * @param agentId
     * @returns
     */
    getManagers(authCorpId: string, agentId: string): Promise<any>;
    /**
     * 构造第三方应用oauth2链接
     * @see https://developer.work.weixin.qq.com/document/path/91120
     * @param redirectUri
     * @param scope
     * @param state
     * @returns
     */
    getOAuthRedirectUrl(redirectUri?: string, scope?: string, state?: string): string;
    /**
     * 获取访问用户身份
     * @see https://developer.work.weixin.qq.com/document/path/91121
     * @param code
     * @returns
     */
    getUserByCode(code: string): Promise<any>;
    /**
     * 获取访问用户敏感信息
     * @see https://developer.work.weixin.qq.com/document/path/91122
     * @param userTicket
     * @returns
     */
    getUserByTicket(userTicket: string): Promise<any>;
}
