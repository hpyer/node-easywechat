'use strict';

import Fs from 'fs';
import BaseClient from '../../Core/BaseClient';
import { inArray, isString } from '../../Core/Utils';
import StreamResponse from '../../Core/Http/StreamResponse';

export default class MediaClient extends BaseClient
{
  protected allowTypes: Array<string> = ['image', 'voice', 'video', 'file'];

  async get(mediaId: string): Promise<any>
  {
    let res = await this.requestRaw({
      url: 'cgi-bin/media/get',
      method: 'GET',
      qs: {
        media_id: mediaId,
      }
    });

    if (res.getHeader('content-disposition').indexOf('attachment') > -1) {
      return StreamResponse.buildFromResponse(res);
    }

    return res.getContent().toString();
  }

  /**
   * 上传图片
   */
  uploadImage(file: string | ReadableStream): Promise<any>
  {
    return this.upload('image', file);
  }
  /**
   * 上传视频
   */
  uploadVideo(file: string | ReadableStream): Promise<any>
  {
    return this.upload('video', file);
  }
  /**
   * 上传语音
   */
  uploadVoice(file: string | ReadableStream): Promise<any>
  {
    return this.upload('voice', file);
  }
  /**
   * 上传文件
   */
  uploadFile(file: string | ReadableStream): Promise<any>
  {
    return this.upload('file', file);
  }

  /**
   * 上传到临时素材
   * @param {string} type 类型，可选值：image,video,voice,thumb
   * @param {string/ReadableStream} file 文件路径或可读stream
   */
  upload(type: string, file: string | ReadableStream): Promise<any>
  {
    if (!file) {
      throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
    }
    let media = null;
    if (typeof file == 'string') {
      media = Fs.createReadStream(file);
    }

    if (!inArray(type, this.allowTypes)) {
      throw new Error(`Unsupported media type: '${type}'`);
    }

    return this.httpPost('cgi-bin/media/upload', {
      media,
      type,
    });
  }

}
