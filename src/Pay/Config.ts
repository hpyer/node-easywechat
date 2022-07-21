'use strict';

import BaseConfig from '../Core/Config';

class Config extends BaseConfig
{
  protected requiredKeys: string[] = [
    'mch_id',
    'secret_key',
    'private_key',
    'certificate',
  ];
}

export = Config;
