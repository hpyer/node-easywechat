'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{
  list(): Promise<any>
  {
    return this.httpGet('cgi-bin/menu/get');
  }

  current(): Promise<any>
  {
    return this.httpGet('cgi-bin/get_current_selfmenu_info');
  }

  create(button: object, matchrule: object = null): Promise<any>
  {
    if (matchrule) {
      return this.httpPostJson('cgi-bin/menu/addconditional', {
        button,
        matchrule,
      });
    }

    return this.httpPostJson('cgi-bin/menu/create', {
      button,
    });
  }

  delete(menuid: Number): Promise<any>
  {
    if (menuid) {
      return this.httpPostJson('cgi-bin/menu/delconditional', {
        menuid,
      });
    }

    return this.httpGet('cgi-bin/menu/delete');
  }

  match(user_id: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/menu/trymatch', {
      user_id,
    });
  }

}
