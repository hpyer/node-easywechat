'use strict';

import BaseClient from '../../../../Core/BaseClient';

export default class TesterClient extends BaseClient
{

  /**
   * 绑定微信用户为体验者
   * @param wechatId 体验者微信号（非openid或昵称）
   */
  bind(wechatId: string): Promise<any>
  {
    return this.httpPostJson('wxa/bind_tester', {
      wechatid: wechatId
    });
  }

  /**
   * 解除绑定体验者
   * @param wechatId 体验者微信号（非openid或昵称）
   */
  unbind(wechatId: string): Promise<any>
  {
    return this.httpPostJson('wxa/unbind_tester', {
      wechatid: wechatId
    });
  }

  /**
   * 获取体验者列表
   */
  list(): Promise<any>
  {
    return this.httpPostJson('wxa/memberauth', {
      action: 'get_experiencer',
    });
  }

}
