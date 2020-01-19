'use strict';

import Client from './Client';

export default class MovieTicketClient extends Client
{

  updateUser(params: object): Promise<any>
  {
    return this.httpPostJson('card/movieticket/updateuser', params);
  }

}
