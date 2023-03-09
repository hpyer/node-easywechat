'use strict';

import BaseConfig from '../Core/Config';

class Config extends BaseConfig
{
  protected requiredKeys: string[] = [
    'corp_id',
    'secret',
    'token',
    'aes_key',
  ];
}

export = Config;
