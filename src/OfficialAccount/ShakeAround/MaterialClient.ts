'use strict';

import BaseClient from '../../Core/BaseClient';

export default class MaterialClient extends BaseClient
{

  /**
   * 上传在摇一摇功能中需使用到的图片素材
   * @param path 文件路径或可读stream
   * @param type 素材类型，可选值：icon，license，默认：icon
   */
  uploadImage(path: string, type: string = 'icon'): Promise<any>
  {
    return this.httpUpload('shakearound/material/add', {
      media: path,
    }, {}, {
      type: type.toLowerCase(),
    });
  }

}
