'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{
  async list(): Promise<any>
  {
    return await this.httpGet('cgi-bin/menu/get');
  }

  async current(): Promise<any>
  {
    return await this.httpGet('cgi-bin/get_current_selfmenu_info');
  }

  async create(button: object, matchrule: object = null): Promise<any>
  {
    if (matchrule) {
      return await this.httpPostJson('cgi-bin/menu/addconditional', {
        button,
        matchrule,
      });
    }

    return await this.httpPostJson('cgi-bin/menu/create', {
      button,
    });
  }

  async delete(menuid: Number): Promise<any>
  {
    if (menuid) {
      return await this.httpPostJson('cgi-bin/menu/delconditional', {
        menuid,
      });
    }

    return await this.httpGet('cgi-bin/menu/delete');
  }

  async match(user_id: string): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/menu/trymatch', {
      user_id,
    });
  }

}
