import { AccessToken } from '../../Core/BaseAccessToken';
import BaseClient, { User as BaseUser } from '../../OfficialAccount/OAuth/OAuthClient';
export declare class User extends BaseUser {
    userId: string;
    deviceId: string;
    /**
     * 获取 userId
     * @return {string}
     */
    getUserId(): string;
    /**
     * 获取 deviceId
     * @return {string}
     */
    getDeviceId(): string;
}
export default class OAuthClient extends BaseClient {
    protected _agentId: string;
    protected _detailed: boolean;
    /**
     * 设置agentId参数
     * @param code
     */
    agent(agentId: string): this;
    /**
     * 设置agentId参数
     * @param code
     */
    setAgentId(agentId: string): this;
    /**
     * 设置返回用户详情
     */
    detailed(): this;
    /**
     * 获取配置中的corp_id
     */
    getAppId(): string;
    protected getAuthUrl(state: string): string;
    protected getOAuthUrl(state: string): string;
    protected getQrConnectUrl(state: string): string;
    protected getTokenUrl(): string;
    protected getUserByToken(token: AccessToken): Promise<object>;
    protected getUserInfo(token: AccessToken): Promise<any>;
    protected getUserDetail(token: AccessToken, ticket: string): Promise<any>;
    protected mapUserToObject(userData: object): User;
}
