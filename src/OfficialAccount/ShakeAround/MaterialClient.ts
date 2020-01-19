'use strict';

import BaseClient from '../../Core/BaseClient';

export default class MaterialClient extends BaseClient
{

  uploadImage(path: string, type: string = 'icon'): Promise<any>
  {
    return this.httpUpload('shakearound/material/add', {
      media: path,
    }, {}, {
      type: type.toLowerCase(),
    });
  }

}
