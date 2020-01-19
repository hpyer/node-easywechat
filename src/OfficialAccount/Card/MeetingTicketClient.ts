'use strict';

import Client from './Client';

export default class MeetingTicketClient extends Client
{

  updateUser(params: object): Promise<any>
  {
    return this.httpPostJson('card/meetingticket/updateuser', params);
  }

}
