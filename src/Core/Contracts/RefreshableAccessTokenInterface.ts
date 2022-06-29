'use strict';

import AccessTokenInterface from "./AccessTokenInterface";

abstract class RefreshableAccessTokenInterface extends AccessTokenInterface
{
  /**
   * 刷新token
   * @returns
   */
  async refresh(): Promise<string> { return null; }
};

export = RefreshableAccessTokenInterface;
