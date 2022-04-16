'use strict';

import BaseClient from '../../Core/BaseClient';

export default class UrlSchemeClient extends BaseClient {

  generate(params: object = {}): Promise<any> {
    return this.httpPostJson('wxa/generatescheme', params);
  }

}
