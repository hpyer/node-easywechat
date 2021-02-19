'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge } from '../../Core/Utils';

export default class CorpGroupClient extends BaseClient
{

  getAppShareInfo(agentId: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/corpgroup/corp/list_app_share_info', {
      agentid: agentId,
    });
  }

  getToken(corpId: string, agentId: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/corpgroup/corp/gettoken', {
      corpid: corpId,
      agentid: agentId,
    });
  }

  getMiniProgramTransferSession(userId: string, sessionKey: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/miniprogram/transfer_session', {
      userid: userId,
      session_key: sessionKey,
    });
  }

}
