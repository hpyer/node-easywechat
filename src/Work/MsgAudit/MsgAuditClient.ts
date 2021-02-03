'use strict';

import BaseClient from '../../Core/BaseClient';

export default class MsgAuditClient extends BaseClient
{

  getPermitUsers(type: string = null): Promise<any>
  {
    return this.httpPostJson('cgi-bin/msgaudit/get_permit_user_list', type ? {
      type
    } : {});
  }

  getSingleAgreeStatus(info: Array<Array<string>>): Promise<any>
  {
    let params = {
      info,
    };
    return this.httpPostJson('cgi-bin/msgaudit/check_single_agree', params);
  }

  getRoomAgreeStatus(roomId: string): Promise<any>
  {
    let params = {
      roomid: roomId,
    };
    return this.httpPostJson('cgi-bin/msgaudit/check_room_agree', params);
  }

  getRoom(roomId: string): Promise<any>
  {
    let params = {
      roomid: roomId,
    };
    return this.httpPostJson('cgi-bin/msgaudit/groupchat/get', params);
  }

}
