'use strict';

import BaseConfig from '../Core/Config';

class Config extends BaseConfig
{
  protected requiredKeys: string[] = [
    'corp_id',
    'suite_id',
    'provider_secret',
    'suite_secret',
    'token',
    'aes_key',
  ];
}

export = Config;
