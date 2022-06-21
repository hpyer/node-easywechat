'use strict';

import ServerRequestInterface from "./Http/Contracts/ServerRequestInterface";
import HasAttributesMixin from "./Mixins/HasAttributesMixin";
import { applyMixins, parseXml } from "./Support/Utils";

/**
 * 消息对象
 */
class Message
{
  /**
   * 原始消息内容
   */
  protected originContent: string = '';

  constructor(attributes: Record<string, any>, originContent: string = '') {
    this.attributes = attributes;
    this.originContent = originContent;

    return new Proxy<Message>(this, {
      set: function (obj, key, val) {
        if (typeof obj[key] !== 'undefined') {
          obj[key] = val;
        }
        else {
          obj.set(key as string, val);
        }
        return true;
      },
      get: function (obj, key) {
        if (typeof obj[key] !== 'undefined') {
          return obj[key];
        }
        return obj.get(key as string);
      }
    });
  }

  /**
   * 根据请求内容生成消息对象
   * @param request
   * @returns
   */
  static async createFromRequest(request: ServerRequestInterface): Promise<Message> {
    let originContent = request.getBody().toString();
    let attributes: Record<string, any> = {};
    if ('<' === originContent.substring(0, 1)) {
      attributes = await parseXml(originContent);
    }
    else {
      // Handle JSON format.
      try {
        attributes = JSON.parse(originContent);
      }
      catch (e) { }
    }

    if (Object.keys(attributes).length === 0) {
      throw new Error('Failed to decode request contents.');
    }

    return new Message(attributes, originContent);
  }

  /**
   * 获取原始消息内容
   * @returns
   */
  getOriginalContents(): string {
    return this.originContent;
  }

  /**
   * 转为字符串
   * @returns
   */
  toString(): string {
    return this.toJson();
  }

};

interface Message extends HasAttributesMixin {
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
   * 消息类型，'event'：事件，'text'：文本，'image'：图片，'voice'：语音，'video'：视频，'shortvideo'：小视频，'location'：地理位置，'link'：链接
   */
  MsgType?: string;

  /**
   * 消息id，64位整型
   * @scope MsgType='text' | 'image' | 'voice' | 'video' | 'shortvideo' | 'location'
   */
  MsgId?: string;

  /**
   * 文本消息内容
   * @scope MsgType='text'
   */
  Content?: string;

  /**
   * 图片链接
   * @scope MsgType='image'
   */
  PicUrl?: string;

  /**
   * 媒体id，可以调用获取临时素材接口拉取数据
   * @scope MsgType='image' | 'voice'
   */
  MediaId?: string;

  /**
   * 语音格式，如amr，speex等
   * @scope MsgType='voice'
   */
  Format?: string;

  /**
   * 语音识别结果，UTF8编码
   * @scope MsgType='voice'
   */
  Recognition?: string;

  /**
   * 缩略图的媒体id
   * @scope MsgType='video' | 'shortvideo'
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

  /**
   * 事件类型，subscribe：关注，unsubscribe：取消关注，SCAN：扫描（用户已关注），LOCATION：地理位置；CLICK：自定义菜单事件，VIEW：点击菜单跳转链接
   * @scope MsgType='event'
   */
  Event?: string;

  /**
   * 事件KEY值
   *
   * Event='subscribe' | 'SCAN'时：qrscene_为前缀，后面为二维码的参数值
   *
   * Event='CLICK'时：自定义菜单接口中KEY值对应
   *
   * Event='VIEW'时：设置的跳转URL
   *
   * @scope MsgType='event' && Event='subscribe' | 'SCAN' | 'CLICK' | 'VIEW'
   */
  EventKey?: string;

  /**
   * 二维码的ticket，可用来换取二维码图片
   * @scope MsgType='event' && Event='subscribe' | 'SCAN'
   */
  Ticket?: string;

  /**
   * 纬度
   * @scope MsgType='event' && Event='LOCATION'
   */
  Latitude?: number;

  /**
   * 经度
   * @scope MsgType='event' && Event='LOCATION'
   */
  Longitude?: number;

  /**
   * 位置精度
   * @scope MsgType='event' && Event='LOCATION'
   */
  Precision?: number;
};

applyMixins(Message, [HasAttributesMixin]);

export = Message;
