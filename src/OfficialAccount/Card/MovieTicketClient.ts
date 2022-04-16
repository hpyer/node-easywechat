'use strict';

import Client from './Client';

export default class MovieTicketClient extends Client
{

  /**
   * 更新用户信息
   * @param params 信息
   */
  updateUser(params: object): Promise<any>
  {
    return this.httpPostJson('card/movieticket/updateuser', params);
  }

}
