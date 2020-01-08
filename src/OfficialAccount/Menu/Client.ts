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
      return await this.httpPost('cgi-bin/menu/addconditional', {
        json: true,
        body: {
          button,
          matchrule,
        }
      });
    }

    return await this.httpPost('cgi-bin/menu/create', {
      json: true,
      body: {
        button,
      }
    });
  }

  async delete(menuid: Number): Promise<any>
  {
    if (menuid) {
      return await this.httpPost('cgi-bin/menu/delconditional', {
        json: true,
        body: {
          menuid,
        }
      });
    }

    return await this.httpGet('cgi-bin/menu/delete');
  }

  async match(user_id: string): Promise<any>
  {
    return await this.httpPost('cgi-bin/menu/trymatch', {
      json: true,
      body: {
        user_id,
      }
    });
  }

}
