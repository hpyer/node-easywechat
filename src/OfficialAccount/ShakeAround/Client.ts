'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{

  /**
   * 查询审核状态
   */
  status(): Promise<any>
  {
    return this.httpGet('shakearound/account/auditstatus');
  }

  /**
   * 申请开通摇一摇
   * @param data
   */
  register(data: object): Promise<any>
  {
    return this.httpPostJson('shakearound/account/register', data);
  }

  /**
   * 获取摇一摇的设备及用户信息
   * @param ticket 摇周边业务的ticket，可在摇到的URL中得到
   * @param needPoi 是否需要返回门店poi_id，传1则返回，否则不返回，默认：false
   */
  user(ticket: string = '', needPoi: Boolean = false): Promise<any>
  {
    let params = {
      ticket,
    };
    if (needPoi) {
      params['need_poi'] = 1;
    }
    return this.httpPostJson('shakearound/user/getshakeinfo', params);
  }

  /**
   * 获取摇一摇的设备及用户信息，返回门店poi_id
   * @param ticket 摇周边业务的ticket，可在摇到的URL中得到
   */
  userWithPoi(ticket: string = ''): Promise<any>
  {
    return this.user(ticket, true);
  }

}
