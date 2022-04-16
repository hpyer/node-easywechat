'use strict';

import BaseClient from '../../Core/BaseClient';

export default class UserClient extends BaseClient
{
  /**
   * 获取单个用户信息
   * @param openid 用户openid
   * @param lang 语言，默认：zh_CN
   */
  get(openid: string, lang: string = 'zh_CN'): Promise<any>
  {
    return this.httpGet('cgi-bin/user/info', {
      openid,
      lang,
    });
  }

  /**
   * 获取多个用户信息
   * @param openids 用户openid列表
   * @param lang 语言，默认：zh_CN
   */
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

  /**
   * 获取用户列表
   * @param next_openid 第一个拉取的OPENID，不填默认从头开始拉取，默认：''
   */
  list(next_openid: string = ''): Promise<any>
  {
    return this.httpGet('cgi-bin/user/get', {
      next_openid,
    });
  }

  /**
   * 修改用户备注
   * @param openid 用户openid
   * @param remark 备注
   */
  remark(openid: string, remark: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/user/info/updateremark', {
      openid,
      remark,
    });
  }

  /**
   * 获取黑名单
   * @param begin_openid 第一个拉取的OPENID，不填默认从头开始拉取，默认：''
   */
  blacklist(begin_openid: string = ''): Promise<any>
  {
    return this.httpPostJson('cgi-bin/tags/members/getblacklist', {
      begin_openid,
    });
  }

  /**
   * 拉黑用户
   * @param openid_list 用户openid列表
   */
  block(openid_list: Array<string>): Promise<any>
  {
    return this.httpPostJson('cgi-bin/tags/members/batchblacklist', {
      openid_list,
    });
  }

  /**
   * 取消拉黑用户
   * @param openid_list 用户openid列表
   */
  unblock(openid_list: Array<string>): Promise<any>
  {
    return this.httpPostJson('cgi-bin/tags/members/batchunblacklist', {
      openid_list,
    });
  }

  /**
   * 账号迁移 openid 转换
   * @param from_appid 原帐号app_id
   * @param openid_list 原账号用户openid列表
   */
  changeOpenid(from_appid: string, openid_list: Array<string>): Promise<any>
  {
    return this.httpPostJson('cgi-bin/changeopenid', {
      from_appid,
      openid_list,
    });
  }

}
