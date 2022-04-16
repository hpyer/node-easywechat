'use strict';

import AccessTokenInterface from "./AccessTokenInterface";

abstract class RefreshableAccessToken extends AccessTokenInterface
{
  /**
   * 刷新token
   * @returns
   */
  async refresh(): Promise<string> { return null; }
};

export = RefreshableAccessToken;
