import BaseClient from '../../Core/BaseClient';
export default class ProviderClient extends BaseClient {
    constructor(app: any);
    /**
     * 扫码授权登录 - 获取登录的地址
     * @see https://developer.work.weixin.qq.com/document/path/91124
     * @param redirectUri
     * @param userType
     * @param state
     * @returns
     */
    getLoginUrl(redirectUri?: string, userType?: string, state?: string): string;
    /**
     * 扫码授权登录 - 获取登录用户信息
     * @param authCode
     * @returns
     */
    getLoginInfo(authCode: string): Promise<any>;
    /**
     * 获取注册定制化URL - 推广二维码
     * @see https://developer.work.weixin.qq.com/document/path/90578
     * @param registerCode
     * @returns
     */
    getRegisterUri(registerCode?: string): Promise<string>;
    /**
     * 获取注册码 - 推广二维码
     * @see https://developer.work.weixin.qq.com/document/path/90581
     * @param corpName
     * @param adminName
     * @param adminMobile
     * @param state
     * @returns
     */
    getRegisterCode(corpName?: string, adminName?: string, adminMobile?: string, state?: string): Promise<any>;
    /**
     * 查询注册状态
     * @see https://developer.work.weixin.qq.com/document/path/90582
     * @param registerCode
     * @returns
     */
    getRegisterInfo(registerCode: string): Promise<any>;
    /**
     * 设置授权应用可见范围
     * @see https://developer.work.weixin.qq.com/document/path/90583
     * @param accessToken
     * @param agentId
     * @param allowUser
     * @param allowParty
     * @param allowTag
     * @returns
     */
    setAgentScope(accessToken: string, agentId: string, allowUser?: string[], allowParty?: Array<string | number>, allowTag?: Array<string | number>): Promise<any>;
    /**
     * 设置通讯录同步完成
     * @see https://developer.work.weixin.qq.com/document/path/90584
     * @param accessToken
     * @returns
     */
    contactSyncSuccess(accessToken: string): Promise<any>;
    /**
     * 通讯录单个搜索
     * @see https://developer.work.weixin.qq.com/document/path/91844
     * @param corpId
     * @param queryWord
     * @param agentId
     * @param offset
     * @param limit
     * @param queryType
     * @param fullMatchField
     * @returns
     */
    searchContact(corpId: string, queryWord: string, agentId: string | number, offset?: number, limit?: number, queryType?: number, fullMatchField?: number): Promise<any>;
    /**
     * 获取带参授权链接
     * @see https://developer.work.weixin.qq.com/document/path/95436
     * @param params
     * @returns
     */
    getCustomizedAuthUrl(params: object): Promise<any>;
}
