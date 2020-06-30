'use strict';

import BaseClient from '../../Core/BaseClient';
import { getTimestamp } from '../../Core/Utils';
import Messenger from './Messenger';

export default class CustomerServiceClient extends BaseClient
{

  list(): Promise<any>
  {
    return this.httpGet('cgi-bin/customservice/getkflist');
  }

  online(): Promise<any>
  {
    return this.httpGet('cgi-bin/customservice/getonlinekflist');
  }

  create(account: string, nickname: string): Promise<any>
  {
    let params = {
      kf_account: account,
      nickname: nickname,
    };
    return this.httpPostJson('customservice/kfaccount/add', params);
  }

  update(account: string, nickname: string): Promise<any>
  {
    let params = {
      kf_account: account,
      nickname: nickname,
    };
    return this.httpPostJson('customservice/kfaccount/update', params);
  }

  delete(account: string): Promise<any>
  {
    let params = {
      kf_account: account,
    };
    return this.httpPostJson('customservice/kfaccount/del', {}, params);
  }

  invite(account: string, wechatId: string): Promise<any>
  {
    let params = {
      kf_account: account,
      invite_wx: wechatId,
    };
    return this.httpPostJson('customservice/kfaccount/inviteworker', params);
  }

  setAvatar(account: string, path: string): Promise<any>
  {
    return this.httpUpload('customservice/kfaccount/uploadheadimg', {
      media: path,
    }, {}, {
      kf_account: account,
    });
  }

  message(message: object): object
  {
    let messager = new Messenger(this);
    return messager.message(message);
  }

  send(message: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/message/custom/send', message);
  }

  showTypingStatusToUser(openid: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/message/custom/typing', {
      touser: openid,
      command: 'Typing',
    });
  }

  hideTypingStatusToUser(openid: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/message/custom/typing', {
      touser: openid,
      command: 'CancelTyping',
    });
  }

  messages(startTime: string, endTime: string, msgId: Number = 1, number: Number = 10000): Promise<any>
  {
    return this.httpPostJson('customservice/msgrecord/getmsglist', {
      starttime: getTimestamp(startTime),
      endtime: getTimestamp(endTime),
      msgid: msgId,
      number: number,
    });
  }

}
