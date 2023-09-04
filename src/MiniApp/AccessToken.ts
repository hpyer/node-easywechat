'use strict';

import BaseAccessToken from "../OfficialAccount/AccessToken";

class AccessToken extends BaseAccessToken
{
  /**
   * 缓存前缀
   */
  protected CACHE_KEY_PREFIX = 'mini_app';
}

export = AccessToken;
