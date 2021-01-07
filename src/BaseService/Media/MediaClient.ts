'use strict';

import Fs from 'fs';
import BaseClient from '../../Core/BaseClient';
import { inArray, isString } from '../../Core/Utils';
import StreamResponse from '../../Core/Http/StreamResponse';

export default class MediaClient extends BaseClient
{
  protected baseUrl: string = 'https://api.weixin.qq.com/cgi-bin/';
  protected allowTypes: Array<string> = ['image', 'voice', 'video', 'thumb'];

  /**
   * 上传图片到临时素材
   * @param {string/ReadableStream} file 文件路径或可读stream
   */
  uploadImage(file: any): Promise<any>
  {
    return this.upload('image', file);
  }
  /**
   * 上传视频到临时素材
   * @param {string/ReadableStream} file 文件路径或可读stream
   */
  uploadVideo(file: any): Promise<any>
  {
    return this.upload('video', file);
  }
  /**
   * 上传语音到临时素材
   * @param {string/ReadableStream} file 文件路径或可读stream
   */
  uploadVoice(file: any): Promise<any>
  {
    return this.upload('voice', file);
  }
  /**
   * 上传缩略图到临时素材
   * @param {string/ReadableStream} file 文件路径或可读stream
   */
  uploadThumb(file: any): Promise<any>
  {
    return this.upload('thumb', file);
  }

  /**
   * 上传到临时素材
   * @param {string} type 类型，可选值：image,video,voice,thumb
   * @param {string/ReadableStream} file 文件路径或可读stream
   */
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

  /**
   * 上传群发视频
   * @param {string/ReadableStream} file 文件路径或可读stream
   * @param {string} title 标题
   * @param {string} description 描述
   */
  async uploadVideoForBroadcasting(file: any, title: string, description: string): Promise<any>
  {
    let response = await this.uploadVideo(file);
    if (response['media_id']) {
      return await this.createVideoForBroadcasting(response['media_id'], title, description);
    }
    return response;
  }

  /**
   * 创建群发消息
   * @param {string} media_id 上传视频得到 media_id
   * @param {string} title 标题
   * @param {string} description 描述
   */
  createVideoForBroadcasting(media_id: string, title: string, description: string): Promise<any>
  {
    return this.httpPostJson('media/uploadvideo', {
      media_id,
      title,
      description,
    });
  }

  /**
   * 获取临时素材内容
   * @param {string} media_id 上传视频得到 media_id
   */
  async get(media_id: string): Promise<any>
  {
    let res = await this.requestRaw({
      url: 'media/get',
      method: 'GET',
      qs: {
        media_id,
      }
    });

    if (res.getHeader('content-disposition').indexOf('attachment') > -1) {
      return StreamResponse.buildFromResponse(res);
    }

    return res.getContent().toString();
  }

  /**
   * 获取 JSSDK 上传的高清语音
   * @param {string} media_id 上传视频得到 media_id
   */
  async getJssdkMedia(media_id: string): Promise<any>
  {
    let res = await this.requestRaw({
      url: 'media/get/jssdk',
      method: 'GET',
      qs: {
        media_id,
      }
    });

    if (res.getHeader('content-disposition').indexOf('attachment') > -1) {
      return StreamResponse.buildFromResponse(res);
    }

    return res.getContent();
  }

}
