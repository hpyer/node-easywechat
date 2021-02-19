import BaseClient from '../../BaseService/Jssdk/JssdkClient';
export default class JssdkClient extends BaseClient {
    protected ticketEndpoint: string;
    getAppId(): string;
    getAgentConfigArray(apis: Array<string>, agentId: string, debug?: boolean, beta?: boolean, openTagList?: Array<string>, url?: string): Promise<object>;
    buildAgentConfig(jsApiList: Array<string>, agentId: string, debug: boolean, beta: boolean, json: true, openTagList: Array<string>, url: string): Promise<string>;
    buildAgentConfig(jsApiList: Array<string>, agentId: string, debug: boolean, beta: boolean, json: false, openTagList: Array<string>, url: string): Promise<object>;
    agentConfigSignature(agentId: string, url?: string, nonce?: string, timestamp?: string): Promise<object>;
    /**
     * 获取代理签名凭证api_ticket
     * @param refresh 是否强制刷新
     * @param type 类型，默认：jsapi
     */
    getAgentTicket(agentId: string, refresh?: boolean, type?: string): Promise<object>;
    /**
     * 获取签名凭证api_ticket
     * @param refresh 是否强制刷新
     * @param type 类型，默认：jsapi
     */
    getTicket(refresh?: boolean, type?: string): Promise<string>;
}
