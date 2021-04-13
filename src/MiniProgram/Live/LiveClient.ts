'use strict';

import BaseClient from '../../Core/BaseClient';

export default class LiveClient extends BaseClient {

  getRooms(start: number = 0, limit: number = 10): Promise<any> {
    return this.httpPostJson('wxa/business/getliveinfo', {
      start,
      limit,
    });
  }

  getPlaybacks(roomId: number, start: number = 0, limit: number = 10): Promise<any> {
    return this.httpPostJson('wxa/business/getliveinfo', {
      action: 'get_replay',
      room_id: roomId,
      start,
      limit,
    });
  }

}
