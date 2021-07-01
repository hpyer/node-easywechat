'use strict';

import BaseClient from '../../Core/BaseClient';
import { inArray } from '../../Core/Utils';
import StreamResponse from '../../Core/Http/StreamResponse';

export default class MediaClient extends BaseClient
{
  protected allowTypes: Array<string> = ['image', 'voice', 'video', 'file'];

  /**
   * 获取临时素材
   * @param mediaId
   */
  get(mediaId: string): Promise<any>
  {
    return this.getResources(mediaId, 'cgi-bin/media/get');
  }

  /**
   * 上传临时图片
   * @param {string/ReadableStream} file 文件路径或可读stream
   * @param {object} form 表单参数
   */
  uploadImage(file: string | ReadableStream, form: object = null): Promise<any>
  {
    return this.upload('image', file, form);
  }
  /**
   * 上传临时视频
   * @param {string/ReadableStream} file 文件路径或可读stream
   * @param {object} form 表单参数
   */
  uploadVideo(file: string | ReadableStream, form: object = null): Promise<any>
  {
    return this.upload('video', file, form);
  }
  /**
   * 上传临时语音
   * @param {string/ReadableStream} file 文件路径或可读stream
   * @param {object} form 表单参数
   */
  uploadVoice(file: string | ReadableStream, form: object = null): Promise<any>
  {
    return this.upload('voice', file, form);
  }
  /**
   * 上传临时文件
   * @param {string/ReadableStream} file 文件路径或可读stream
   * @param {object} form 表单参数
   */
  uploadFile(file: string | ReadableStream, form: object = null): Promise<any>
  {
    return this.upload('file', file, form);
  }

  /**
   * 上传到临时素材
   * @param {string} type 类型，可选值：image,video,voice,thumb
   * @param {string/ReadableStream} file 文件路径或可读stream
   * @param {object} form 表单参数
   */
  upload(type: string, file: string | ReadableStream, form: object = null): Promise<any>
  {
    if (!file) {
      throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
    }

    if (!inArray(type, this.allowTypes)) {
      throw new Error(`Unsupported media type: '${type}'`);
    }

    let files = {
      media: file,
    }

    return this.httpUpload('cgi-bin/media/upload', files, form, { type });
  }

  /**
   * 上传永久图片
   * @param {string/ReadableStream} file 文件路径或可读stream
   * @param {object} form 表单参数
   */
  uploadImg(file: string | ReadableStream, form: object = null): Promise<any>
  {
    if (!file) {
      throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
    }

    let files = {
      media: file,
    }

    return this.httpUpload('cgi-bin/media/uploadimg', files, form);
  }

  /**
   * 获取高清语音素材
   * @param mediaId
   */
  getHdVoice(mediaId: string): Promise<any>
  {
    return this.getResources(mediaId, 'cgi-bin/media/get/jssdk');
  }

  protected async getResources(mediaId: string, url: string): Promise<any>
  {
    let res = await this.requestRaw({
      url,
      method: 'GET',
      params: {
        media_id: mediaId,
      }
    });

    if (res.getHeader('content-disposition').indexOf('attachment') > -1) {
      return StreamResponse.buildFromResponse(res);
    }

    let content = res.getContent();
    if (typeof content === 'string') {
      try {
        content = JSON.parse(content);
      }
      catch (e) {}
    }
    return content;
  }

}
