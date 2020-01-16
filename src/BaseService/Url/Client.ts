'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{
  protected endpoint: string = 'https://api.weixin.qq.com/';

  shorten(long_url): Promise<any>
  {
    let data = {
      action: 'long2short',
      long_url
    };

    return this.httpPostJson('cgi-bin/shorturl', data);
  }

}
