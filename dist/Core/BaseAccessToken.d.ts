import BaseApplication from './BaseApplication';
import HttpMixin from './Mixins/HttpMixin';
declare class BaseAccessToken implements HttpMixin {
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
    getToken(refresh?: boolean): Promise<string>;
    /**
     * 设置Token
     * @param access_token AccessToken
     * @param expires_in 有效时间，单位：秒
     */
    setToken(access_token: string, expires_in?: number): Promise<BaseAccessToken>;
    /**
     * 刷新Token
     */
    refresh(): Promise<BaseAccessToken>;
    /**
     * 获取刷新后的Token
     */
    getRefreshedToken(): Promise<string>;
    getTokenKey(): string;
    applyToRequest(payload: object): Promise<object>;
    doRequest(payload: object, returnResponse?: Boolean): Promise<any>;
}
export default BaseAccessToken;
