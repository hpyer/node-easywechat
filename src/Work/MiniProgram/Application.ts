'use strict';

import BaseApplication from '../../MiniProgram/Application';
import AccessToken from '../Auth/AccessToken';
import AuthClient from './Auth/AuthClient';

export default class MiniProgram extends BaseApplication
{

  public auth: AuthClient = null;

  constructor(config: Object = {}, prepends: Object = {}, id: String = null)
  {
    super(config, prepends, id);

    this.registerProviders();
  }

  registerProviders(): void
  {
    this.registerCommonProviders();

    this.offsetSet('access_token', function (app) {
      return new AccessToken(app);
    });
    this.offsetSet('auth', function (app) {
      return new AuthClient(app);
    });
  }

};
