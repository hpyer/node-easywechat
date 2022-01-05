'use strict';

import BaseClient from '../../Core/BaseClient';

export default class UrlLink extends BaseClient {

  generate(params: object = {}): Promise<any> {
    return this.httpPostJson('wxa/generate_urllink', params);
  }

}
