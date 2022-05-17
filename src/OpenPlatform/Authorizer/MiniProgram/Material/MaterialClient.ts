'use strict';

import BaseClient from '../../../../Core/BaseClient';
import StreamResponse from '../../../../Core/Http/StreamResponse';

export default class MaterialClient extends BaseClient
{

  /**
   * 获取永久素材
   * @param media_id 素材media_id
   */
  async get(media_id: string): Promise<any>
  {
    let res = await this.requestRaw({
      url: 'cgi-bin/material/get_material',
      method: 'POST',
      data: {
        media_id,
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
      catch (e) { }
    }
    return content;
  }

}
