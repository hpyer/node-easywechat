'use strict';

import { merge } from '../../Core/Utils';
import Client from './Client';

export default class MemberCardClient extends Client
{

  /**
   * 激活会员卡
   * @param params 信息
   */
  activate(info: object): Promise<any>
  {
    return this.httpPostJson('card/membercard/activate', info);
  }

  /**
   * 设置开卡字段
   * @param cardId 卡id
   * @param settings 会员卡激活时的选项
   */
  setActivationForm(cardId: string, settings: object): Promise<any>
  {
    let params = merge({
      card_id: cardId,
    }, settings);
    return this.httpPostJson('card/membercard/activateuserform/set', params);
  }

  /**
   * 拉取会员信息
   * @param cardId 卡id
   * @param codes 卡code
   */
  getUser(cardId: string, codes: Array<string>): Promise<any>
  {
    return this.httpPostJson('card/membercard/userinfo/get', {
      card_id: cardId,
      code: codes,
    });
  }

  /**
   * 更新会员信息
   * @param params 会员信息
   */
  updateUser(params: object): Promise<any>
  {
    return this.httpPostJson('card/membercard/updateuser', params);
  }

  /**
   * 获取开卡表单
   * @param activateTicket
   */
  getActivationForm(activateTicket: StringConstructor): Promise<any>
  {
    return this.httpPostJson('card/membercard/activatetempinfo/get', {
      activate_ticket: activateTicket,
    });
  }

  /**
   * 获取激活链接
   * @param params
   */
  getActivateUrl(params: object): Promise<any>
  {
    return this.httpPostJson('card/membercard/activate/geturl', params);
  }

}
