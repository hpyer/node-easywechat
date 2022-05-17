'use strict';

import BaseClient from '../../Core/BaseClient';

export default class InterceptClient extends BaseClient
{

  /**
   * 新建敏感词规则
   * @see https://developer.work.weixin.qq.com/document/path/95097#新建敏感词规则
   * @param params
   * @returns
   */
  create(params: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/add_intercept_rule', params);
  }

  /**
   * 获取敏感词规则列表
   * @see https://developer.work.weixin.qq.com/document/path/95097#获取敏感词规则列表
   * @returns
   */
  gets(): Promise<any>
  {
    return this.httpGet('cgi-bin/externalcontact/get_intercept_rule_list');
  }

  /**
   * 获取敏感词规则详情
   * @see https://developer.work.weixin.qq.com/document/path/95097#获取敏感词规则详情
   * @param ruleId 规则id
   * @returns
   */
  getDetails(ruleId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/get_intercept_rule', {
      rule_id: ruleId,
    });
  }

  /**
   * 删除敏感词规则
   * @see https://developer.work.weixin.qq.com/document/path/95097#删除敏感词规则
   * @param ruleId
   * @returns
   */
  delete(ruleId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/del_intercept_rule', {
      rule_id: ruleId,
    });
  }

}
