'use strict';

import BaseClient from '../../Core/BaseClient';

export default class UserClient extends BaseClient
{
  async get(openid: string, lang: string = 'zh_CN'): Promise<any>
  {
    return await this.httpGet('cgi-bin/user/info', {
      openid,
      lang,
    });
  }

  async select(openids: Array<string>, lang: string = 'zh_CN'): Promise<any>
  {
    let user_list: Array<object> = [];
    openids.forEach((openid) => {
      user_list.push({
        openid,
        lang,
      });
    });
    return await this.httpPostJson('cgi-bin/user/info/batchget', {
      user_list
    });
  }

  async list(next_openid: string): Promise<any>
  {
    return await this.httpGet('cgi-bin/user/get', {
      next_openid,
    });
  }

  async remark(openid: string, remark: string): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/user/info/updateremark', {
      openid,
      remark,
    });
  }

  async blacklist(begin_openid: string): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/tags/members/getblacklist', {
      begin_openid,
    });
  }

  async block(openid_list: Array<string>): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/tags/members/batchblacklist', {
      openid_list,
    });
  }

  async unblock(openid_list: Array<string>): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/tags/members/batchunblacklist', {
      openid_list,
    });
  }

  async changeOpenid(from_appid: string, openid_list: Array<string>): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/changeopenid', {
      from_appid,
      openid_list,
    });
  }

}
