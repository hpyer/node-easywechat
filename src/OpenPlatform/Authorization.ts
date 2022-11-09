
import * as merge from "merge";
import HasAttributesMixin from "../Core/Mixins/HasAttributesMixin";
import { applyMixins } from "../Core/Support/Utils";
import AuthorizerAccessToken from "./AuthorizerAccessToken";

class Authorization
{

  constructor(attributes: Record<string, any> = null) {
    if (attributes) {
      this.attributes = merge.recursive({}, attributes);
    }
  }

  /**
   * 获取appid
   * @returns
   */
  getAppId(): string {
    if (!this.attributes['authorization_info']) return '';
    return this.attributes['authorization_info']['authorizer_appid'] || '';
  }

  /**
   * 获取access_token
   * @returns
   */
  getAccessToken(): AuthorizerAccessToken {
    let appid = '';
    let token = '';
    if (this.attributes['authorization_info'] && this.attributes['authorization_info']['authorizer_appid']) {
      appid = this.attributes['authorization_info']['authorizer_appid'];
    }
    if (this.attributes['authorization_info'] && this.attributes['authorization_info']['authorizer_access_token']) {
      token = this.attributes['authorization_info']['authorizer_access_token'];
    }
    return new AuthorizerAccessToken(appid, token);
  }

  /**
   * 获取refresh_token
   * @returns
   */
  getRefreshToken(): string {
    if (!this.attributes['authorization_info']) return '';
    return this.attributes['authorization_info']['authorizer_refresh_token'] || '';
  }
}

interface Authorization extends HasAttributesMixin {
};

applyMixins(Authorization, [HasAttributesMixin]);

export = Authorization;
