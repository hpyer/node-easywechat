import BaseClient from '../../Core/BaseClient';
/**
 * OAuth授权后的用户对象
 */
declare class User {
    /**
     * openid
     * @var {string}
     */
    id: string;
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
     * 原始数据
     * @var {object}
     */
    original: object;
    /**
     * AccessToken
     * @var {AccessToken}
     */
    token: AccessToken;
    /**
     * 获取 openid
     * @return {string}
     */
    getId(): string;
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
     * 获取原始数据
     * @return {object}
     */
    getOriginal(): object;
    /**
     * 获取AccessToken
     * @return {AccessToken}
     */
    getToken(): AccessToken;
}
/**
 * OAuth授权后的AccessToken对象
 */
export declare class AccessToken {
    constructor(info: any);
    /**
     * 网页授权接口调用凭证
     * @var {string}
     */
    access_token: string;
    /**
     * 调用凭证的超时时间，单位（秒）
     * @var {number}
     */
    expires_in: number;
    /**
     * 刷新access_token
     * @var {string}
     */
    refresh_token: string;
    /**
     * 用户唯一标识，openid
     * @var {string}
     */
    openid: string;
    /**
     * 授权的作用域
     * @var {string}
     */
    scope: string;
}
/**
 * OAuth客户端
 */
export default class OAuthClient extends BaseClient {
    protected _scope: string;
    protected _callback: string;
    protected _state: string;
    protected _code: string;
    /**
     * 设置scope
     * @param scope 可选值：snsapi_userinfo、snsapi_base，默认：snsapi_userinfo
     */
    scopes(scope: string): OAuthClient;
    /**
     * 设置授权后的回调地址
     * @param callback 完整的URL地址
     */
    callback(callback: string): OAuthClient;
    /**
     * 设置state参数
     * @param state
     */
    state(state: string): OAuthClient;
    /**
     * 获取配置中的app_id
     */
    getAppId(): string;
    /**
     * 生成授权链接
     * @param callback 授权后的回调地址
     */
    redirect(callback?: string): string;
    /**
     * 获取授权后的token
     */
    getToken(): Promise<AccessToken>;
    /**
     * 根据code获取用户信息
     * @param code 授权后回调地址带回的code
     */
    user(code: string): Promise<User>;
}
export {};
