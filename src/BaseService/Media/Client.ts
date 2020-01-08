'use strict';

import * as Fs from 'fs';
import BaseClient from '../../Core/BaseClient';
import { inArray, isObject, isString } from '../../Core/Utils';

export default class Client extends BaseClient
{
  protected baseUrl: string = 'https://api.weixin.qq.com/cgi-bin/';
  protected allowTypes: Array<string> = ['image', 'voice', 'video', 'thumb'];

  async uploadImage(file: any): Promise<any>
  {
    return await this.upload('image', file);
  }
  async uploadVideo(file: any): Promise<any>
  {
    return await this.upload('video', file);
  }
  async uploadVoice(file: any): Promise<any>
  {
    return await this.upload('voice', file);
  }
  async uploadThumb(file: any): Promise<any>
  {
    return await this.upload('thumb', file);
  }

  async upload(type: string, file: any): Promise<any>
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

    return await this.httpPost('media/upload', {
      formData: {
        media: file,
        type,
      }
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
    return await this.httpPost('media/uploadvideo', {
      json: true,
      body: {
        media_id,
        title,
        description,
      }
    });
  }

  async get(media_id: string): Promise<any>
  {
    let response = await this.httpGet('media/get', {
      qs: {
        media_id,
      }
    });

    if (isObject(response)) {
      if (!response['video_url']) {
        return false;
      }
      return await this.httpFile(response['video_url']);
    }

    return response;
  }

  async getJssdkMedia(media_id: string): Promise<any>
  {
    let response = await this.httpGet('media/get/jssdk', {
      qs: {
        media_id,
      }
    });

    if (isObject(response)) {
      if (!response['video_url']) {
        return false;
      }
      return await this.httpFile(response['video_url']);
    }

    return response;
  }

}
