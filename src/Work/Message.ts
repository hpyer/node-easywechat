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
   * 消息类型
   * - `event` 事件
   * - `text` 文本
   * - `image` 图片
   * - `voice` 语音
   * - `video` 视频
   * - `location` 地理位置
   * - `link` 链接
   */
  MsgType?: string;

  /**
   * 事件类型
   * - `change_contact` 通讯录变更事件
   * - `change_chain` 上下游变更事件
   * - `batch_job_result` 上下游异步任务完成事件
   * @scope MsgType='event'
   */
  Event?: string;

  /**
   * 变更类型
   *
   * 通讯录变更事件：
   * - `create_user` 新增成员
   * - `update_user` 更新成员
   * - `delete_user` 删除成员
   * - `create_party` 新增部门
   * - `update_party` 更新部门
   * - `delete_party` 删除部门
   * - `update_tag` 标签变更
   *
   * 上下游变更事件：
   * - `create_chain` 新增上下游空间
   * - `update_chain` 更新上下游空间
   * - `delete_chain` 删除上下游空间
   * - `create_group` 新增上下游分组
   * - `update_group` 更新上下游空间
   * - `delete_group` 删除上下游空间
   * - `corp_join` 企业加入上下游
   * - `update_corp` 更新加入上下游企业
   * - `remove_corp` 删除上下游企业
   *
   * @scope Event='change_contact' | 'change_chain'
   */
  ChangeType?: string;

  /**
   * 企业应用的id
   * @scope MsgType='text' | 'image' | 'voice' | 'video' | 'location' | 'link'
   */
  AgentID?: string;

  /**
   * 消息id，64位整型
   * @scope MsgType='text' | 'image' | 'voice' | 'video' | 'location' | 'link'
   */
  MsgId?: string;

  /**
   * 文本消息内容
   * @scope MsgType='text'
   */
  Content?: string;

  /**
   * 图片链接
   * @scope MsgType='image' | 'link'
   */
  PicUrl?: string;

  /**
   * 媒体id，可以调用获取临时素材接口拉取数据
   * @scope MsgType='image' | 'voice' | 'video'
   */
  MediaId?: string;

  /**
   * 语音格式，如amr，speex等
   * @scope MsgType='voice'
   */
  Format?: string;

  /**
   * 缩略图的媒体id
   * @scope MsgType='video'
   */
  ThumbMediaId?: string;

  /**
   * 纬度
   * @scope MsgType='location'
   */
  Location_X?: number;

  /**
   * 经度
   * @scope MsgType='location'
   */
  Location_Y?: number;

  /**
   * 地图缩放大小
   * @scope MsgType='location'
   */
  Scale?: number;

  /**
   * 地理位置信息
   * @scope MsgType='location'
   */
  Label?: number;

  /**
   * app类型，在企业微信固定返回wxwork，在微信不返回该字段
   * @scope MsgType='location'
   */
  AppType?: number;

  /**
   * 消息标题
   * @scope MsgType='link'
   */
  Title?: string;

  /**
   * 消息描述
   * @scope MsgType='link'
   */
  Description?: string;

  /**
   * 消息链接
   * @scope MsgType='link'
   */
  Url?: string;

};

export = Message;
