'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge } from '../../Core/Utils';

export default class CorpGroupClient extends BaseClient
{

  /**
   * 获取应用共享信息
   * @see https://open.work.weixin.qq.com/api/doc/90000/90135/93403
   * @param agentId
   * @returns
   */
  getAppShareInfo(agentId: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/corpgroup/corp/list_app_share_info', {
      agentid: agentId,
    });
  }

  /**
   * 获取下级企业的access_token
   * @see https://open.work.weixin.qq.com/api/doc/90000/90135/93359
   * @param corpId
   * @param agentId
   * @returns
   */
  getToken(corpId: string, agentId: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/corpgroup/corp/gettoken', {
      corpid: corpId,
      agentid: agentId,
    });
  }

  /**
   * 获取下级企业的小程序session
   * @see https://open.work.weixin.qq.com/api/doc/90000/90135/93355
   * @param userId
   * @param sessionKey
   * @returns
   */
  getMiniProgramTransferSession(userId: string, sessionKey: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/miniprogram/transfer_session', {
      userid: userId,
      session_key: sessionKey,
    });
  }

  /**
   * 将明文corpid转换为第三方应用获取的corpid（仅限第三方服务商，转换已获授权企业的corpid）
   * @see https://open.work.weixin.qq.com/api/doc/90001/90143/95327#1.4%20corpid%E8%BD%AC%E6%8D%A2
   * @param corpId
   * @returns
   */
  getOpenCorpid(corpId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/corp/to_open_corpid', {
      corpid: corpId,
    });
  }

  /**
   * 将自建应用获取的userid转换为第三方应用获取的userid（仅代开发自建应用或第三方应用可调用）
   * @see https://open.work.weixin.qq.com/api/doc/90001/90143/95327#2.4%20userid%E7%9A%84%E8%BD%AC%E6%8D%A2
   * @param useridList
   * @returns
   */
  batchUseridToOpenUserid(useridList: string[]): Promise<any>
  {
    return this.httpPostJson('cgi-bin/batch/userid_to_openuserid', {
      userid_list: useridList,
    });
  }

}
