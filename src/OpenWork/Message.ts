'use strict';

import BaseMessage from '../Core/Message';

class Message extends BaseMessage {
}

interface Message extends Record<string, any> {
  /**
   * 消息密文，兼容模式、安全模式才有
   */
  Encrypt?: string;

  /**
   * 开发者微信号
   */
  ToUserName?: string;

  /**
   * 发送方帐号 OpenId
   */
  FromUserName?: string;

  /**
   * 消息创建时间
   */
  CreateTime?: number;

  /**
   * 信息类型
   * - `suite_ticket` [推送suite_ticket](https://developer.work.weixin.qq.com/document/path/90628)
   * - `create_auth` [授权成功](https://developer.work.weixin.qq.com/document/path/90642#授权成功通知)
   * - `change_auth` [变更授权](https://developer.work.weixin.qq.com/document/path/90642#变更授权通知)
   * - `cancel_auth` [取消授权](https://developer.work.weixin.qq.com/document/path/90642#取消授权通知)
   * - `change_contact` [成员通知事件](https://developer.work.weixin.qq.com/document/path/90639)、[部门通知事件](https://developer.work.weixin.qq.com/document/path/90640)、[标签通知事件](https://developer.work.weixin.qq.com/document/path/90641)
   * - `share_agent_change` [共享应用事件回调](https://developer.work.weixin.qq.com/document/path/93373)
   * - `reset_permanent_code` [重置永久授权码通知](https://developer.work.weixin.qq.com/document/path/94758)
   * - `corp_arch_auth` [授权组织架构权限通知](https://developer.work.weixin.qq.com/document/path/97378)
   */
  InfoType?: string;

  /**
   * 消息类型
   * - `event` 事件
   */
  MsgType?: string;

  /**
   * 事件类型
   * - `change_app_admin` [应用管理员变更](https://developer.work.weixin.qq.com/document/path/95038)
   * @scope MsgType='event'
   */
  Event?: string;

  /**
   * 第三方应用的SuiteId或者代开发应用模板id
   */
  SuiteId?: string;

  /**
   * 变更类型
   *
   * [成员通知事件](https://developer.work.weixin.qq.com/document/path/90639)：
   * - `create_user` 新增成员
   * - `update_user` 更新成员
   * - `delete_user` 删除成员
   *
   * [部门通知事件](https://developer.work.weixin.qq.com/document/path/90640)：
   * - `create_party` 新增部门
   * - `update_party` 更新部门
   * - `delete_party` 删除部门
   *
   * [标签通知事件](https://developer.work.weixin.qq.com/document/path/90641)：
   * - `update_tag` 标签变更
   *
   * @scope InfoType='change_contact'
   */
  ChangeType?: string;

  /**
   * 授权企业的CorpID
   * @scope InfoType='change_contact' | 'corp_arch_auth'
   */
  AuthCorpId?: string;

  /**
   * 企业应用的id
   * @scope MsgType='text' | 'image' | 'voice' | 'video' | 'location' | 'link'
   */
  AgentID?: string;

};

export = Message;
