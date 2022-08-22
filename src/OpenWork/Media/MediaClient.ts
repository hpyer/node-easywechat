'use strict';

import BaseClient from '../../Core/BaseClient';
import Stream from 'stream';

export default class MediaClient extends BaseClient
{
  constructor(app)
  {
    super(app, app['provider_access_token']);
  }

  /**
   * 上传图片
   * @see https://developer.work.weixin.qq.com/document/path/91883
   * @param file 文件路径或可读stream
   */
  uploadImage(file: string | Stream.Readable): Promise<any>
  {
    return this.upload('image', file);
  }
  /**
   * 上传视频
   * @see https://developer.work.weixin.qq.com/document/path/91883
   * @param file 文件路径或可读stream
   */
  uploadVideo(file: string | Stream.Readable): Promise<any>
  {
    return this.upload('video', file);
  }
  /**
   * 上传语音
   * @see https://developer.work.weixin.qq.com/document/path/91883
   * @param file 文件路径或可读stream
   */
  uploadVoice(file: string | Stream.Readable): Promise<any>
  {
    return this.upload('voice', file);
  }
  /**
   * 上传普通文件
   * @see https://developer.work.weixin.qq.com/document/path/91883
   * @param file 文件路径或可读stream
   */
  uploadFile(file: string | Stream.Readable): Promise<any>
  {
    return this.upload('file', file);
  }

  /**
   * 上传需要转译的文件
   * @see https://developer.work.weixin.qq.com/document/path/91883
   * @param type 类型，可选值：image,video,voice,file
   * @param file 文件路径或可读stream
   */
  upload(type: string, file: string | Stream.Readable): Promise<any>
  {
    if (!file) {
      throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
    }

    return this.httpUpload('cgi-bin/service/media/upload', {
      media: file
    }, {}, {
      type
    });
  }

}
