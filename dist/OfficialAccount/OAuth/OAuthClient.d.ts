import { AccessToken } from '../../Core/BaseAccessToken';
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
    scopes(scope: string): this;
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
