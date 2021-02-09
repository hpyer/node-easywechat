import { AccessToken } from '../../Core/BaseAccessToken';
import BaseClient from '../../Core/BaseClient';
/**
 * OAuth授权后的用户对象
 */
export declare class User {
    /**
     * openid
     * @var {string}
     */
    id: string;
    /**
     * openid
     * @var {string}
     */
    openid: string;
    /**
     * unionid
     * @var {string}
     */
    unionid: string;
    /**
     * 昵称
     * @var {string}
     */
    nickname: string;
    /**
     * 昵称
     * @var {string}
     */
    name: string;
    /**
     * 头像
     * @var {string}
     */
    avatar: string;
    /**
     * E-mail
     * @var {string}
     */
    email: string;
    /**
     * 原始数据
     * @var {object}
     */
    original: object;
    /**
     * AccessToken对象
     */
    token: AccessToken;
    /**
     * 获取 openid
     * @return {string}
     */
    getId(): string;
    /**
     * 获取 openid
     * @return {string}
     */
    getOpenId(): string;
    /**
     * 获取 unionid
     * @return {string}
     */
    getUnionId(): string;
    /**
     * 获取昵称
     * @return {string}
     */
    getNickname(): string;
    /**
     * 获取昵称
     * @return {string}
     */
    getName(): string;
    /**
     * 获取头像
     * @return {string}
     */
    getAvatar(): string;
    /**
     * 获取E-mail
     * @return {string}
     */
    getEmail(): string;
    /**
     * 获取原始数据
     * @return {object}
     */
    getOriginal(): object;
    /**
     * 获取AccessToken
     * @return {AccessToken}
     */
    getToken(): AccessToken;
    /**
     * 设置AccessToken
     * @param token
     */
    setToken(token: AccessToken): this;
    merge(attrs: object): this;
}
/**
 * OAuth组件
 */
export declare class OAuthComponent {
    /**
     * 获取应用id
     */
    getAppId(): string;
    /**
     * 获取access_token
     */
    getToken(): Promise<string>;
}
/**
 * OAuth客户端
 */
export default class OAuthClient extends BaseClient {
    protected _baseUrl: string;
    protected _scope: string | Array<string>;
    protected _callback: string;
    protected _state: string;
    protected _code: string;
    protected _scopeSeparator: string;
    protected _withCountryCode: boolean;
    protected _parameters: object;
    protected _component: OAuthComponent;
    protected _token: AccessToken;
    /**
     * 设置scope
     * @param scope 可选值：snsapi_userinfo、snsapi_base，默认：snsapi_userinfo
     */
    scopes(scope: string | Array<string>): this;
    /**
     * 设置授权后的回调地址
     * @param callback 完整的URL地址
     */
    callback(callback: string): this;
    /**
     * 设置state参数
     * @param state
     */
    state(state: string): this;
    /**
     * 设置code参数
     * @param code
     */
    code(code: string): this;
    /**
     * 设置scope的分隔符
     * @param separator
     */
    scopeSeparator(separator: string): this;
    /**
     * 设置返回国家地区语言版本
     */
    withCountryCode(): this;
    component(component: OAuthComponent): this;
    with(parameters: object): this;
    protected formatScope(scopes: string | Array<string>, separator: string): string;
    protected getAuthUrl(state: string): string;
    protected buildAuthUrlFromBase(url: string, state: string): string;
    protected getCodeFields(state?: string): object;
    /**
     * 获取配置中的app_id
     */
    getAppId(): string;
    /**
     * 生成授权链接
     * @param callback 授权后的回调地址
     */
    redirect(callback?: string): string;
    protected getTokenFields(code: string): object;
    protected getTokenUrl(): string;
    /**
     * 获取授权后的token
     */
    getToken(code: string): Promise<AccessToken>;
    protected parseAccessToken(res: object): AccessToken;
    /**
     * 设置token
     */
    setToken(token: AccessToken): this;
    /**
     * 根据token获取用户信息
     * @param token 授权后的token
     */
    protected getUserByToken(token: AccessToken): Promise<object>;
    protected arrayItem(data: any, key?: string, defaultValue?: any): any;
    protected mapUserToObject(userData: object): User;
    /**
     * 根据code获取用户信息
     * @param code 授权后回调地址带回的code
     * @param token 授权后的token
     */
    user(code?: string, token?: AccessToken): Promise<User>;
}
