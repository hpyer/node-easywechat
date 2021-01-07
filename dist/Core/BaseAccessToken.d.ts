import BaseApplication from './BaseApplication';
import HttpMixin from './Mixins/HttpMixin';
/**
 * 授权后的AccessToken对象
 */
export declare class AccessToken {
    /**
     * 网页授权接口调用凭证
     */
    access_token: string;
    /**
     * 调用凭证的超时时间，单位（秒）
     */
    expires_in: number;
    /**
     * 刷新access_token
     */
    refresh_token: string;
    /**
     * 用户唯一标识，openid
     */
    openid: string;
    /**
     * 授权的作用域
     */
    scope: string;
    constructor(info: object);
    /**
     * 获取access_token
     */
    getToken(): string;
    /**
     * 获取access_token
     */
    getAccessToken(): string;
    /**
     * 获取过期时间
     */
    getExpires(): number;
    /**
     * 获取refresh_token
     */
    getRefreshToken(): string;
    /**
     * 获取openid
     */
    getOpenid(): string;
    /**
     * 获取scope
     */
    getScope(): string;
}
declare abstract class BaseAccessToken implements HttpMixin {
    protected requestMethod: string;
    protected token: string;
    protected queryName: string;
    protected tokenKey: string;
    protected endpointToGetToken: string;
    protected app: BaseApplication;
    constructor(app: BaseApplication);
    protected getCredentials(): Promise<object>;
    getEndpoint(): Promise<string>;
    getCacheKey(): Promise<string>;
    requestToken(credentials: object): Promise<any>;
    /**
     * 获取Token
     * @param refresh 为true时表示强制刷新
     */
    getToken(refresh?: boolean): Promise<AccessToken>;
    /**
     * 设置Token
     * @param access_token AccessToken
     * @param expires_in 有效时间，单位：秒
     */
    setToken(access_token: string, expires_in?: number): Promise<this>;
    /**
     * 刷新Token
     */
    refresh(): Promise<this>;
    /**
     * 获取刷新后的Token
     */
    getRefreshedToken(): Promise<AccessToken>;
    getTokenKey(): string;
    applyToRequest(payload: object): Promise<object>;
    doRequest(payload: object, returnResponse?: Boolean): Promise<any>;
}
export default BaseAccessToken;
