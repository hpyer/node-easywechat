'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{

  handleAuthorize(authCode: string = null): Promise<any>
  {
    return this.httpPostJson('cgi-bin/component/api_query_auth', {
      component_appid: this.app['config']['app_id'],
      authorization_code: authCode || this.app['request'].get('auth_code'),
    });
  }

  getAuthorizer(appId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/component/api_get_authorizer_info', {
      component_appid: this.app['config']['app_id'],
      authorizer_appid: appId,
    });
  }

  getAuthorizerOption(appId: string, name: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/component/api_get_authorizer_option', {
      component_appid: this.app['config']['app_id'],
      authorizer_appid: appId,
      option_name: name,
    });
  }

  setAuthorizerOption(appId: string, name: string, value: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/component/api_set_authorizer_option', {
      component_appid: this.app['config']['app_id'],
      authorizer_appid: appId,
      option_name: name,
      option_value: value,
    });
  }

  getAuthorizers(offset: number = 0, count: number = 500): Promise<any>
  {
    return this.httpPostJson('cgi-bin/component/api_get_authorizer_list', {
      component_appid: this.app['config']['app_id'],
      offset,
      count,
    });
  }

  createPreAuthorizationCode(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/component/api_create_preauthcode', {
      component_appid: this.app['config']['app_id'],
    });
  }

  clearQuota(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/component/clear_quota', {
      component_appid: this.app['config']['app_id'],
    });
  }

}
