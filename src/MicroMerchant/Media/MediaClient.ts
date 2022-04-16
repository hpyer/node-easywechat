'use strict';

import { md5File } from '../../Core/Utils';
import BaseClient from '../Core/BaseClient';
import Stream from 'stream';

export default class MediaClient extends BaseClient
{

  async upload(file: string | Stream.Readable): Promise<any>
  {
    if (!file) {
      throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
    }

    let form = {
      media_hash: await md5File(file),
      sign_type: 'HMAC-SHA256',
    };

    return this.httpUpload('secapi/mch/uploadmedia', {
      media: file
    }, form);
  }

}
