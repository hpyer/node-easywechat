'use strict';

import BaseClient from '../../Core/BaseClient';

export default class UserClient extends BaseClient
{
  get(openid: string, lang: string = 'zh_CN'): Promise<any>
  {
    return this.httpGet('cgi-bin/user/info', {
      openid,
      lang,
    });
  }

  select(openids: Array<string>, lang: string = 'zh_CN'): Promise<any>
  {
    let user_list: Array<object> = [];
    openids.forEach((openid) => {
      user_list.push({
        openid,
        lang,
      });
    });
    return this.httpPostJson('cgi-bin/user/info/batchget', {
      user_list
    });
  }

  list(next_openid: string): Promise<any>
  {
    return this.httpGet('cgi-bin/user/get', {
      next_openid,
    });
  }

  remark(openid: string, remark: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/user/info/updateremark', {
      openid,
      remark,
    });
  }

  blacklist(begin_openid: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/tags/members/getblacklist', {
      begin_openid,
    });
  }

  block(openid_list: Array<string>): Promise<any>
  {
    return this.httpPostJson('cgi-bin/tags/members/batchblacklist', {
      openid_list,
    });
  }

  unblock(openid_list: Array<string>): Promise<any>
  {
    return this.httpPostJson('cgi-bin/tags/members/batchunblacklist', {
      openid_list,
    });
  }

  changeOpenid(from_appid: string, openid_list: Array<string>): Promise<any>
  {
    return this.httpPostJson('cgi-bin/changeopenid', {
      from_appid,
      openid_list,
    });
  }

}
