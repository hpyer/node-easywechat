import BaseClient from '../../Core/BaseClient';
export default class KfMessageClient extends BaseClient {
    /**
     * 获取会话状态
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94669
     * @param openKfId
     * @param externalUserId
     * @returns
     */
    state(openKfId: string, externalUserId: string): Promise<any>;
    /**
     * 变更会话状态
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94669
     * @param openKfId
     * @param externalUserId
     * @param serviceState
     * @param serviceUserId
     * @returns
     */
    del(openKfId: string, externalUserId: string, serviceState: number, serviceUserId: string): Promise<any>;
    /**
     * 读取消息
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94670
     * @param cursor
     * @param token
     * @param limit
     * @returns
     */
    sync(cursor: string, token: string, limit: number): Promise<any>;
    /**
     * 发送消息
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94677
     * @param params
     * @returns
     */
    send(params: object): Promise<any>;
    /**
     * 发送事件响应消息
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94677
     * @param params
     * @returns
     */
    event(params: object): Promise<any>;
}
