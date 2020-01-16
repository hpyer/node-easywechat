'use strict';

import * as Fs from 'fs';
import BaseClient from '../../Core/BaseClient';
import { inArray, isString } from '../../Core/Utils';
import StreamResponse from '../../Core/Http/StreamResponse';

export default class Client extends BaseClient
{
  protected baseUrl: string = 'https://api.weixin.qq.com/cgi-bin/';
  protected allowTypes: Array<string> = ['image', 'voice', 'video', 'thumb'];

  uploadImage(file: any): Promise<any>
  {
    return this.upload('image', file);
  }
  uploadVideo(file: any): Promise<any>
  {
    return this.upload('video', file);
  }
  uploadVoice(file: any): Promise<any>
  {
    return this.upload('voice', file);
  }
  uploadThumb(file: any): Promise<any>
  {
    return this.upload('thumb', file);
  }

  upload(type: string, file: any): Promise<any>
  {
    if (!file) {
      throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
    }
    if (isString(file)) {
      file = Fs.createReadStream(file);
    }

    if (!inArray(type, this.allowTypes)) {
      throw new Error(`Unsupported media type: '${type}'`);
    }

    return this.httpPost('media/upload', {
      media: file,
      type,
    });
  }

  async uploadVideoForBroadcasting(file: any, title: string, description: string): Promise<any>
  {
    let response = await this.uploadVideo(file);
    if (response['media_id']) {
      return await this.createVideoForBroadcasting(response['media_id'], title, description);
    }
    return response;
  }

  async createVideoForBroadcasting(media_id: string, title: string, description: string): Promise<any>
  {
    return await this.httpPostJson('media/uploadvideo', {
      media_id,
      title,
      description,
    });
  }

  async get(media_id: string): Promise<any>
  {
    let res = await this.requestRaw({
      url: 'media/get',
      method: 'GET',
      qs: {
        media_id,
      }
    });

    if (res.getHeader['content-disposition'].indexOf('attachment') > -1) {
      return StreamResponse.buildFromIncomingMessage(res);
    }

    let content = res.getContent().toString();
    try {
      content = JSON.parse(content);
    }
    catch (e) { }

    return content;
  }

  async getJssdkMedia(media_id: string): Promise<any>
  {
    let res = await this.requestRaw({
      url: 'media/get/jssdk',
      method: 'GET',
      qs: {
        media_id,
      }
    });

    if (res.getHeader['content-disposition'].indexOf('attachment') > -1) {
      return StreamResponse.buildFromIncomingMessage(res);
    }

    let content = res.getContent().toString();
    try {
      content = JSON.parse(content);
    }
    catch (e) { }

    return content;
  }

}
