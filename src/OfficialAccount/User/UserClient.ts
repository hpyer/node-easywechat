'use strict';

import BaseClient from '../../Core/BaseClient';

export default class UserClient extends BaseClient
{
  async get(openid: string, lang: string = 'zh_CN'): Promise<any>
  {
    return await this.httpGet('cgi-bin/user/info', {
      qs: {
        openid,
        lang,
      }
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
    return await this.httpPost('cgi-bin/user/info/batchget', {
      json: true,
      body: {
        user_list
      }
    });
  }

  async list(next_openid: string): Promise<any>
  {
    return await this.httpGet('cgi-bin/user/get', {
      qs: {
        next_openid,
      }
    });
  }

  async remark(openid: string, remark: string): Promise<any>
  {
    return await this.httpPost('cgi-bin/user/info/updateremark', {
      json: true,
      body: {
        openid,
        remark,
      }
    });
  }

  async blacklist(begin_openid: string): Promise<any>
  {
    return await this.httpPost('cgi-bin/tags/members/getblacklist', {
      json: true,
      body: {
        begin_openid,
      }
    });
  }

  async block(openid_list: Array<string>): Promise<any>
  {
    return await this.httpPost('cgi-bin/tags/members/batchblacklist', {
      json: true,
      body: {
        openid_list,
      }
    });
  }

  async unblock(openid_list: Array<string>): Promise<any>
  {
    return await this.httpPost('cgi-bin/tags/members/batchunblacklist', {
      json: true,
      body: {
        openid_list,
      }
    });
  }

  async changeOpenid(from_appid: string, openid_list: Array<string>): Promise<any>
  {
    return await this.httpPost('cgi-bin/changeopenid', {
      json: true,
      body: {
        from_appid,
        openid_list,
      }
    });
  }

}
