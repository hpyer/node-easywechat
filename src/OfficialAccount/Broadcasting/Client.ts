'use strict';

import BaseClient from '../../Core/BaseClient';
import { Message, Text, Media, Image, Card } from '../../Core/Messages';
import MessageBuilder from './MessageBuilder';
import { isNumber, isArray } from '../../Core/Utils';

export default class Client extends BaseClient
{

  PREVIEW_BY_OPENID: string = 'touser';
  PREVIEW_BY_NAME: string = 'towxname';

  send(message: object = {}): Promise<any>
  {
    if (!message['filter'] && !message['touser']) {
      throw new Error('The message reception object is not specified.');
    }

    let api = message && message['touser'] ? 'cgi-bin/message/mass/send' : 'cgi-bin/message/mass/sendall';

    return this.httpPostJson(api, message);
  }

  preview(message: object = {}): Promise<any>
  {
    return this.httpPostJson('cgi-bin/message/mass/preview', message);
  }

  delete(msgId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/message/mass/delete', {
      msg_id: msgId,
    });
  }

  status(msgId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/message/mass/get', {
      msg_id: msgId,
    });
  }

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

  sendText(message: string, reception: any = null, attributes: object = {}): Promise<any>
  {
    return this.sendMessage(new Text(message), reception, attributes);
  }

  sendNews(mediaId: string, reception: any = null, attributes: object = {}): Promise<any>
  {
    return this.sendMessage(new Media(mediaId, 'mpnews'), reception, attributes);
  }

  sendVoice(mediaId: string, reception: any = null, attributes: object = {}): Promise<any>
  {
    return this.sendMessage(new Media(mediaId, 'voice'), reception, attributes);
  }

  sendVideo(mediaId: string, reception: any = null, attributes: object = {}): Promise<any>
  {
    return this.sendMessage(new Media(mediaId, 'mpvideo'), reception, attributes);
  }

  sendImage(mediaId: string, reception: any = null, attributes: object = {}): Promise<any>
  {
    return this.sendMessage(new Image(mediaId), reception, attributes);
  }

  sendCard(cardId: string, reception: any = null, attributes: object = {}): Promise<any>
  {
    return this.sendMessage(new Card(cardId), reception, attributes);
  }


  previewMessage(message: Message, reception: string, method: string = this.PREVIEW_BY_OPENID): Promise<any>
  {
    let msg = (new MessageBuilder).message(message).buildForPreview(method, reception);

    return this.preview(msg);
  }

  previewText(message: string, reception: string, method: string = this.PREVIEW_BY_OPENID): Promise<any>
  {
    return this.previewMessage(new Text(message), reception, method);
  }

  previewNews(mediaId: string, reception: string, method: string = this.PREVIEW_BY_OPENID): Promise<any>
  {
    return this.previewMessage(new Media(mediaId, 'mpnews'), reception, method);
  }

  previewVoice(mediaId: string, reception: string, method: string = this.PREVIEW_BY_OPENID): Promise<any>
  {
    return this.previewMessage(new Media(mediaId, 'voice'), reception, method);
  }

  previewVideo(mediaId: string, reception: string, method: string = this.PREVIEW_BY_OPENID): Promise<any>
  {
    return this.previewMessage(new Media(mediaId, 'mpvideo'), reception, method);
  }

  previewImage(mediaId: string, reception: string, method: string = this.PREVIEW_BY_OPENID): Promise<any>
  {
    return this.previewMessage(new Image(mediaId), reception, method);
  }

  previewCard(cardId: string, reception: string, method: string = this.PREVIEW_BY_OPENID): Promise<any>
  {
    return this.previewMessage(new Card(cardId), reception, method);
  }

  previewTextByName(message: string, reception: string): Promise<any>
  {
    return this.previewMessage(new Text(message), reception, this.PREVIEW_BY_NAME);
  }

  previewNewsByName(mediaId: string, reception: string): Promise<any>
  {
    return this.previewMessage(new Media(mediaId, 'mpnews'), reception, this.PREVIEW_BY_NAME);
  }

  previewVoiceByName(mediaId: string, reception: string): Promise<any>
  {
    return this.previewMessage(new Media(mediaId, 'voice'), reception, this.PREVIEW_BY_NAME);
  }

  previewVideoByName(mediaId: string, reception: string): Promise<any>
  {
    return this.previewMessage(new Media(mediaId, 'mpvideo'), reception, this.PREVIEW_BY_NAME);
  }

  previewImageByName(mediaId: string, reception: string): Promise<any>
  {
    return this.previewMessage(new Image(mediaId), reception, this.PREVIEW_BY_NAME);
  }

  previewCardByName(cardId: string, reception: string): Promise<any>
  {
    return this.previewMessage(new Card(cardId), reception, this.PREVIEW_BY_NAME);
  }

}
