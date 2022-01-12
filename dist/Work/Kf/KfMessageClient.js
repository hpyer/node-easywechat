'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class KfMessageClient extends BaseClient_1.default {
    /**
     * 获取会话状态
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94669
     * @param openKfId
     * @param externalUserId
     * @returns
     */
    state(openKfId, externalUserId) {
        let params = {
            open_kfid: openKfId,
            external_userid: externalUserId,
        };
        return this.httpPostJson('cgi-bin/kf/service_state/get', params);
    }
    /**
     * 变更会话状态
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94669
     * @param openKfId
     * @param externalUserId
     * @param serviceState
     * @param serviceUserId
     * @returns
     */
    del(openKfId, externalUserId, serviceState, serviceUserId) {
        return this.httpPostJson('cgi-bin/kf/service_state/trans', {
            open_kfid: openKfId,
            external_userid: externalUserId,
            service_state: serviceState,
            servicer_userid: serviceUserId,
        });
    }
    /**
     * 读取消息
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94670
     * @param cursor
     * @param token
     * @param limit
     * @returns
     */
    sync(cursor, token, limit) {
        return this.httpPostJson('cgi-bin/kf/sync_msg', {
            cursor,
            token,
            limit,
        });
    }
    /**
     * 发送消息
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94677
     * @param params
     * @returns
     */
    send(params) {
        return this.httpPostJson('cgi-bin/kf/send_msg', params);
    }
    /**
     * 发送事件响应消息
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94677
     * @param params
     * @returns
     */
    event(params) {
        return this.httpPostJson('cgi-bin/kf/send_msg_on_event', params);
    }
}
exports.default = KfMessageClient;
