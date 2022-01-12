'use strict';

import BaseClient from '../../Core/BaseClient';

export default class KfMessageClient extends BaseClient
{

  /**
   * 获取会话状态
   * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94669
   * @param openKfId
   * @param externalUserId
   * @returns
   */
  state(openKfId: string, externalUserId: string): Promise<any>
  {
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
  del(openKfId: string, externalUserId: string, serviceState: number, serviceUserId: string): Promise<any>
  {
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
  sync(cursor: string, token: string, limit: number): Promise<any>
  {
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
  send(params: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/kf/send_msg', params);
  }

  /**
   * 发送事件响应消息
   * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94677
   * @param params
   * @returns
   */
  event(params: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/kf/send_msg_on_event', params);
  }

}
