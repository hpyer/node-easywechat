'use strict';

import BaseApplication from '../../../MiniProgram/Application';
import CodeClient from './Code/CodeClient';
import DomainClient from './Domain/DomainClient';
import AccountClient from './Account/AccountClient';
import SettingClient from './Setting/SettingClient';
import TesterClient from './Tester/TesterClient';

export default class MiniProgram extends BaseApplication
{

  public code: CodeClient;
  public domain: DomainClient;
  public account: AccountClient;
  public setting: SettingClient;
  public tester: TesterClient;

  constructor(config: Object = {}, prepends: Object = {}, id: String = null)
  {
    super(config, prepends, id);
  }

  registerProviders(): void
  {
    super.registerProviders();

    this.offsetSet('code', function (app) {
      return new CodeClient(app);
    });
    this.offsetSet('domain', function (app) {
      return new DomainClient(app);
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

};
