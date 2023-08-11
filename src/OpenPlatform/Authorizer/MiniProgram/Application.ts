'use strict';

import BaseApplication from '../../../MiniProgram/Application';
import MiniProgramBaseClient from './Base/MiniProgramBaseClient';
import CodeClient from './Code/CodeClient';
import DomainClient from './Domain/DomainClient';
import MaterialClient from './Material/MaterialClient';
import PrivacyClient from './Privacy/PrivacyClient';
import SecurityClient from './Security/SecurityClient';
import AccountClient from './Account/AccountClient';
import SettingClient from './Setting/SettingClient';
import TesterClient from './Tester/TesterClient';

export default class MiniProgram extends BaseApplication
{

  public base: MiniProgramBaseClient;
  public code: CodeClient;
  public domain: DomainClient;
  public material: MaterialClient;
  public privacy: PrivacyClient;
  public security: SecurityClient;
  public account: AccountClient;
  public setting: SettingClient;
  public tester: TesterClient;

  constructor(config: Object = {}, prepends: Object = {}, id: String = null)
  {
    super(config, prepends, id);

    this.registerExtraProviders();
  }

  registerExtraProviders(): void
  {
    this.offsetSet('base', function (app) {
      return new MiniProgramBaseClient(app);
    });
    this.offsetSet('code', function (app) {
      return new CodeClient(app);
    });
    this.offsetSet('domain', function (app) {
      return new DomainClient(app);
    });
    this.offsetSet('material', function (app) {
      return new MaterialClient(app);
    });
    this.offsetSet('privacy', function (app) {
      return new PrivacyClient(app);
    });
    this.offsetSet('security', function (app) {
      return new SecurityClient(app);
    });
    this.offsetSet('account', function (app) {
      return new AccountClient(app);
    });
    this.offsetSet('setting', function (app) {
      return new SettingClient(app);
    });
    this.offsetSet('tester', function (app) {
      return new TesterClient(app);
    });
  }

  // map to `base` module
  getVersionInfo(): Promise<any> {
    return this.base.getVersionInfo.apply(this.base, arguments);
  }

};
