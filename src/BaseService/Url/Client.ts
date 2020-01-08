'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{
  private endpoint: string = 'https://api.weixin.qq.com/cgi-bin/shorturl';

  async shorten(long_url): Promise<any>
  {
    let data = {
      action: 'long2short',
      long_url
    };

    return await this.requestWithAccessToken({
      url: this.endpoint,
      json: true,
      body: data
    });
  }

}
