'use strict';

import BaseApplication from '../Core/BaseApplication';
import * as Merge from 'merge';
import { isString, buildQueryString } from '../Core/Utils';
import AccessToken from './Authorizer/Auth/AccessToken';
import Guard from './Authorizer/Server/Guard';
import OfficialAccount from './Authorizer/OfficialAccount/Application';
import OAOauthClient from './Authorizer/OfficialAccount/OAuth/Client';
import OAAccountClient from './Authorizer/OfficialAccount/Account/Client';
import MiniProgram from './Authorizer/MiniProgram/Application';
import MPAuthClient from './Authorizer/MiniProgram/Auth/Client';

export default class Application extends BaseApplication
{
  constructor(config: Object = {}, prepends: Object = {}, id: String = null)
  {
    super(config, prepends, id);

    let providers = [
      'OpenPlatform/Auth',
      'OpenPlatform/Base',
      'OpenPlatform/Server',
      'OpenPlatform/CodeTemplate',
      'OpenPlatform/Component',
    ];
    super.registerProviders(providers);
  }

  async getPreAuthorizationUrl(callbackUrl: string, optional = {}): Promise<string>
  {
    if (isString(optional)) {
      optional = {
        pre_auth_code: optional,
      };
    }
    else {
      optional['pre_auth_code'] = await this.createPreAuthorizationCode()['pre_auth_code'];
    }

    return 'https://mp.weixin.qq.com/cgi-bin/componentloginpage?' + buildQueryString(Merge({}, optional, {
      component_appid: this['config']['app_id'],
      redirect_uri: callbackUrl,
    }));
  }

  async getMobilePreAuthorizationUrl(callbackUrl: string, optional = {}): Promise<string>
  {
    if (isString(optional)) {
      optional = {
        pre_auth_code: optional,
      };
    }
    else {
      optional['pre_auth_code'] = await this.createPreAuthorizationCode()['pre_auth_code'];
    }

    return 'https://mp.weixin.qq.com/safe/bindcomponent?' + buildQueryString(Merge({}, optional, {
      component_appid: this['config']['app_id'],
      redirect_uri: callbackUrl,
      action: 'bindcomponent',
      no_scan: 1,
    }));
  }

  protected getAuthorizerConfig(appId: string, refreshToken: string = null): object
  {
    return Merge({}, this['config'], {
      component_app_id: this['config']['app_id'],
      app_id: appId,
      refresh_token: refreshToken,
    });
  }

  protected getReplaceServices(accessToken = null): object
  {
    let services = {
      access_token: accessToken || function (app) {
        return new AccessToken(app, this);
      },
      server: function (app) {
        return new Guard(app);
      },
    };

    let that = this;
    ['cache', 'log', 'request'].map(reuse => {
      if (that[reuse]) {
        services[reuse] = that[reuse];
      }
    });

    return services;
  }

  officialAccount(appId: string, refreshToken: string = null, accessToken: AccessToken = null)
  {
    let that = this;
    let services = Merge({}, this.getReplaceServices(accessToken), {
      encryptor: this['encryptor'],
      account: function (app) {
        return new OAAccountClient(app, that);
      },
      oauth: function (app) {
        return new OAOauthClient(that);
      },
    });
    return new OfficialAccount(this.getAuthorizerConfig(appId, refreshToken), services);
  }

  miniProgram(appId: string, refreshToken: string = null, accessToken: AccessToken = null)
  {
    let that = this;
    let services = Merge({}, this.getReplaceServices(accessToken), {
      auth: function (app) {
        return new MPAuthClient(app, that);
      },
    });
    return new MiniProgram(this.getAuthorizerConfig(appId, refreshToken), services);
  }


  // map to `base` module
  handleAuthorize(): Promise<any>
  {
    return this['base'].handleAuthorize.apply(this['base'], arguments);
  }
  getAuthorizer(): Promise<any>
  {
    return this['base'].getAuthorizer.apply(this['base'], arguments);
  }
  getAuthorizerOption(): Promise<any>
  {
    return this['base'].getAuthorizerOption.apply(this['base'], arguments);
  }
  setAuthorizerOption(): Promise<any>
  {
    return this['base'].setAuthorizerOption.apply(this['base'], arguments);
  }
  getAuthorizers(): Promise<any>
  {
    return this['base'].getAuthorizers.apply(this['base'], arguments);
  }
  createPreAuthorizationCode(): Promise<any>
  {
    return this['base'].createPreAuthorizationCode.apply(this['base'], arguments);
  }
  clearQuota(): Promise<any>
  {
    return this['base'].clearQuota.apply(this['base'], arguments);
  }
};
