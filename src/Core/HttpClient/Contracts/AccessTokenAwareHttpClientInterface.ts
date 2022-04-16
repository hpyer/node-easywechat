'use strict';

import AccessTokenInterface from "../../Contracts/AccessTokenInterface";
import HttpClientInterface from "./HttpClientInterface";

abstract class AccessTokenAwareHttpClientInterface extends HttpClientInterface {
  /**
   * 设置AccessToken实例
   */
  withAccessToken(accessToken: AccessTokenInterface): this { return this; }
};

export = AccessTokenAwareHttpClientInterface;
