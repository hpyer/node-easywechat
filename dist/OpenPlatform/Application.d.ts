import BaseApplication from '../Core/BaseApplication';
import AuthorizerAccessToken from './Authorizer/Auth/AccessToken';
import OfficialAccount from './Authorizer/OfficialAccount/Application';
import MiniProgram from './Authorizer/MiniProgram/Application';
import VerifyTicket from './Auth/VerifyTicket';
import AccessToken from './Auth/AccessToken';
import OpenPlatformBase from './Base/OpenPlatformBase';
import Encryptor from '../Core/Encryptor';
import OpenPlatformGuard from './Server/OpenPlatformGuard';
import CodeTemplateClient from './CodeTemplate/CodeTemplateClient';
import ComponentClient from './Component/ComponentClient';
import { EasyWechatConfig } from '../Core/Types';
export default class OpenPlatform extends BaseApplication {
    verify_ticket: VerifyTicket;
    access_token: AccessToken;
    base: OpenPlatformBase;
    encryptor: Encryptor;
    server: OpenPlatformGuard;
    code_template: CodeTemplateClient;
    component: ComponentClient;
    constructor(config?: EasyWechatConfig, prepends?: Object, id?: String);
    registerProviders(): void;
    /**
     * 获取用户授权页 URL
     * @param callbackUrl 回调地址
     * @param optional 其它参数
     */
    getPreAuthorizationUrl(callbackUrl: string, optional?: {}): Promise<string>;
    /**
     * 获取移动端用户授权页 URL
     * @param callbackUrl 回调地址
     * @param optional 其它参数
     */
    getMobilePreAuthorizationUrl(callbackUrl: string, optional?: {}): Promise<string>;
    protected getAuthorizerConfig(appId: string, refreshToken?: string): object;
    protected getReplaceServices(accessToken?: any): object;
    /**
     * 代理公众号实现业务，返回SDK实例
     * @param appId 授权方公众号 APPID，非开放平台第三方平台 APPID
     * @param refreshToken 为授权方的 refresh_token
     * @param accessToken
     */
    officialAccount(appId: string, refreshToken?: string, accessToken?: AuthorizerAccessToken): OfficialAccount;
    /**
     * 代理小程序实现业务，返回SDK实例
     * @param appId 授权方小程序 APPID，非开放平台第三方平台 APPID
     * @param refreshToken 为授权方的 refresh_token
     * @param accessToken
     */
    miniProgram(appId: string, refreshToken?: string, accessToken?: AuthorizerAccessToken): MiniProgram;
    /**
     * 使用授权码换取接口调用凭据和授权信息
     * @param authCode 授权码, 会在授权成功的回调返回给第三方平台
     */
    handleAuthorize(): Promise<any>;
    /**
     * 获取授权方的帐号基本信息
     * @param appId 授权方app_id
     */
    getAuthorizer(): Promise<any>;
    /**
     * 设置授权方的选项信息
     * @param appId 授权方app_id
     * @param name 选项名称
     */
    getAuthorizerOption(): Promise<any>;
    /**
     * 设置授权方的选项信息
     * @param appId 授权方app_id
     * @param name 选项名称
     * @param value 选项值
     */
    setAuthorizerOption(): Promise<any>;
    /**
     * 获取已授权的授权方列表
     * @param offset 起始位置，从0开始
     * @param count 获取记录数，最大500
     */
    getAuthorizers(): Promise<any>;
    /**
     * 获取预授权码
     */
    createPreAuthorizationCode(): Promise<any>;
    /**
     * 清零调用次数
     */
    clearQuota(): Promise<any>;
}
