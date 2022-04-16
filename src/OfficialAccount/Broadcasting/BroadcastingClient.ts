'use strict';

import BaseClient from '../../Core/BaseClient';
import { Message, Text, Media, Image, Card } from '../../Core/Messages';
import MessageBuilder from './MessageBuilder';
import { isNumber, isArray } from '../../Core/Utils';

export default class BroadcastingClient extends BaseClient
{

  PREVIEW_BY_OPENID: string = 'touser';
  PREVIEW_BY_NAME: string = 'towxname';

  protected send(message: object = {}): Promise<any>
  {
    if (!message['filter'] && !message['touser']) {
      throw new Error('The message reception object is not specified.');
    }

    let api = message && message['touser'] ? 'cgi-bin/message/mass/send' : 'cgi-bin/message/mass/sendall';

    return this.httpPostJson(api, message);
  }

  protected preview(message: object = {}): Promise<any>
  {
    return this.httpPostJson('cgi-bin/message/mass/preview', message);
  }

  /**
   * 删除群发消息
   * @param msgId 消息id
   */
  delete(msgId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/message/mass/delete', {
      msg_id: msgId,
    });
  }

  /**
   * 查询群发消息发送状态
   * @param msgId 消息id
   */
  status(msgId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/message/mass/get', {
      msg_id: msgId,
    });
  }

  /**
   * 发送消息
   * @param {Message} message 消息实例
   * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
   * @param {object} attributes 附加参数
   */
  sendMessage(message: Message, reception: any = null, attributes: object = {}): Promise<any>
  {
    let msg = (new MessageBuilder).message(message).with(attributes).toAll();

    if (isNumber(reception) && reception > 0) {
      msg.toTag(reception);
    }
    else if (isArray(reception)) {
      msg.toUsers(reception);
    }

    return this.send(msg.build());
  }

  /**
   * 发送文本消息
   * @param {string} message 文本
   * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
   * @param {object} attributes 附加参数
   */
  sendText(message: string, reception: any = null, attributes: object = {}): Promise<any>
  {
    return this.sendMessage(new Text(message), reception, attributes);
  }
  /**
   * 发送图文消息
   * @param {string} mediaId 素材id
   * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
   * @param {object} attributes 附加参数
   */
  sendNews(mediaId: string, reception: any = null, attributes: object = {}): Promise<any>
  {
    return this.sendMessage(new Media(mediaId, 'mpnews'), reception, attributes);
  }
  /**
   * 发送语音消息
   * @param {string} mediaId 素材id
   * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
   * @param {object} attributes 附加参数
   */
  sendVoice(mediaId: string, reception: any = null, attributes: object = {}): Promise<any>
  {
    return this.sendMessage(new Media(mediaId, 'voice'), reception, attributes);
  }
  /**
   * 发送视频消息
   * @param {string} mediaId 素材id
   * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
   * @param {object} attributes 附加参数
   */
  sendVideo(mediaId: string, reception: any = null, attributes: object = {}): Promise<any>
  {
    return this.sendMessage(new Media(mediaId, 'mpvideo'), reception, attributes);
  }
  /**
   * 发送图片消息
   * @param {string} mediaId 素材id
   * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
   * @param {object} attributes 附加参数
   */
  sendImage(mediaId: string, reception: any = null, attributes: object = {}): Promise<any>
  {
    return this.sendMessage(new Image(mediaId), reception, attributes);
  }
  /**
   * 发送卡券消息
   * @param {string} cardId 卡券id
   * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
   * @param {object} attributes 附加参数
   */
  sendCard(cardId: string, reception: any = null, attributes: object = {}): Promise<any>
  {
    return this.sendMessage(new Card(cardId), reception, attributes);
  }


  /**
   * 发送卡券消息预览给指定openId
   * @param {Message} message 消息实例
   * @param {string} reception openid
   * @param {object} attributes 附加参数
   */
  previewMessage(message: Message, reception: string, method: string = this.PREVIEW_BY_OPENID): Promise<any>
  {
    let msg = (new MessageBuilder).message(message).buildForPreview(method, reception);

    return this.preview(msg);
  }
  /**
   * 发送文本消息预览给指定openId
   * @param {string} message 文本
   * @param {string} reception openid
   * @param {object} attributes 附加参数
   */
  previewText(message: string, reception: string, method: string = this.PREVIEW_BY_OPENID): Promise<any>
  {
    return this.previewMessage(new Text(message), reception, method);
  }
  /**
   * 发送图文消息预览给指定openId
   * @param {string} mediaId 素材id
   * @param {string} reception openid
   * @param {object} attributes 附加参数
   */
  previewNews(mediaId: string, reception: string, method: string = this.PREVIEW_BY_OPENID): Promise<any>
  {
    return this.previewMessage(new Media(mediaId, 'mpnews'), reception, method);
  }
  /**
   * 发送语音消息预览给指定openId
   * @param {string} mediaId 素材id
   * @param {string} reception openid
   * @param {object} attributes 附加参数
   */
  previewVoice(mediaId: string, reception: string, method: string = this.PREVIEW_BY_OPENID): Promise<any>
  {
    return this.previewMessage(new Media(mediaId, 'voice'), reception, method);
  }
  /**
   * 发送视频消息预览给指定openId
   * @param {string} mediaId 素材id
   * @param {string} reception openid
   * @param {object} attributes 附加参数
   */
  previewVideo(mediaId: string, reception: string, method: string = this.PREVIEW_BY_OPENID): Promise<any>
  {
    return this.previewMessage(new Media(mediaId, 'mpvideo'), reception, method);
  }
  /**
   * 发送图片消息预览给指定openId
   * @param {string} mediaId 素材id
   * @param {string} reception openid
   * @param {object} attributes 附加参数
   */
  previewImage(mediaId: string, reception: string, method: string = this.PREVIEW_BY_OPENID): Promise<any>
  {
    return this.previewMessage(new Image(mediaId), reception, method);
  }
  /**
   * 发送卡券消息预览给指定openId
   * @param {string} cardId 卡券id
   * @param {string} reception openid
   * @param {object} attributes 附加参数
   */
  previewCard(cardId: string, reception: string, method: string = this.PREVIEW_BY_OPENID): Promise<any>
  {
    return this.previewMessage(new Card(cardId), reception, method);
  }

  /**
   * 发送文本消息预览给指定微信号
   * @param {string} mediaId 文本
   * @param {string} reception 微信号
   * @param {object} attributes 附加参数
   */
  previewTextByName(message: string, reception: string): Promise<any>
  {
    return this.previewMessage(new Text(message), reception, this.PREVIEW_BY_NAME);
  }
  /**
   * 发送图文消息预览给指定微信号
   * @param {string} mediaId 素材id
   * @param {string} reception 微信号
   * @param {object} attributes 附加参数
   */
  previewNewsByName(mediaId: string, reception: string): Promise<any>
  {
    return this.previewMessage(new Media(mediaId, 'mpnews'), reception, this.PREVIEW_BY_NAME);
  }
  /**
   * 发送语音消息预览给指定微信号
   * @param {string} mediaId 素材id
   * @param {string} reception 微信号
   * @param {object} attributes 附加参数
   */
  previewVoiceByName(mediaId: string, reception: string): Promise<any>
  {
    return this.previewMessage(new Media(mediaId, 'voice'), reception, this.PREVIEW_BY_NAME);
  }
  /**
   * 发送视频消息预览给指定微信号
   * @param {string} mediaId 素材id
   * @param {string} reception 微信号
   * @param {object} attributes 附加参数
   */
  previewVideoByName(mediaId: string, reception: string): Promise<any>
  {
    return this.previewMessage(new Media(mediaId, 'mpvideo'), reception, this.PREVIEW_BY_NAME);
  }
  /**
   * 发送图片消息预览给指定微信号
   * @param {string} mediaId 素材id
   * @param {string} reception 微信号
   * @param {object} attributes 附加参数
   */
  previewImageByName(mediaId: string, reception: string): Promise<any>
  {
    return this.previewMessage(new Image(mediaId), reception, this.PREVIEW_BY_NAME);
  }
  /**
   * 发送卡券消息预览给指定微信号
   * @param {string} cardId 卡券id
   * @param {string} reception 微信号
   * @param {object} attributes 附加参数
   */
  previewCardByName(cardId: string, reception: string): Promise<any>
  {
    return this.previewMessage(new Card(cardId), reception, this.PREVIEW_BY_NAME);
  }

}
