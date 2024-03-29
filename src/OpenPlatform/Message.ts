'use strict';

import BaseMessage from '../Core/Message';

class Message extends BaseMessage {
}

interface Message {
  /**
   * 第三方平台 appid
   */
  AppId?: string;

  /**
   * 时间戳
   */
  CreateTime?: number;

  /**
   * 通知类型
   * - authorized：授权成功
   * - unauthorized：取消授权
   * - updateauthorized：更新授权
   * - component_verify_ticket：验证票据
   * - notify_third_fasteregister：快速注册企业小程序审核事件
   * @see [授权变更通知推送](https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/Before_Develop/authorize_event.html)
   * @see [验证票据](https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/Before_Develop/component_verify_ticket.html)
   * @see [快速注册企业小程序审核事件](https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/Register_Mini_Programs/Fast_Registration_Interface_document.html#三、注册审核事件推送)
   */
  InfoType?: 'authorized' | 'unauthorized' | 'updateauthorized' | 'component_verify_ticket' | 'notify_third_fasteregister' | string;

  /**
   * 公众号或小程序的 appid
   */
  AuthorizerAppid?: string;

  /**
   * 授权码，可用于获取授权信息
   * @scope InfoType='authorized' | 'updateauthorized'
   */
  AuthorizationCode?: string;

  /**
   * 授权码过期时间，单位：秒
   * @scope InfoType='authorized' | 'updateauthorized'
   */
  AuthorizationCodeExpiredTime?: number;

  /**
   * 预授权码
   * @scope InfoType='authorized' | 'updateauthorized'
   */
  PreAuthCode?: string;
};

export = Message;
