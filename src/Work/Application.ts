'use strict';

import { EasyWechatConfig } from '../Core/Types';
import BaseApplication from '../Core/BaseApplication';
import WorkBase from './Base/WorkBase';
import OAClient from './OA/OAClient';
import AccessToken from './Auth/AccessToken';
import AgentClient from './Agent/AgentClient';
import CalendarClient from './Calendar/CalendarClient';

export default class OfficialAccount extends BaseApplication
{
  protected defaultConfig: EasyWechatConfig = {
    http: {
      baseUrl: 'https://qyapi.weixin.qq.com/',
    },
  };

  public oa: OAClient = null;
  public access_token: AccessToken = null;
  public agent: AgentClient = null;
  public base: WorkBase = null;
  public calendar: CalendarClient = null;

  constructor(config: EasyWechatConfig = {}, prepends: Object = {}, id: String = null)
  {
    super(config, prepends, id);

    this.registerProviders();
  }

  registerProviders(): void
  {
    super.registerCommonProviders();

    if (!this.access_token) {
      this.offsetSet('access_token', function (app) {
        return new AccessToken(app);
      });
    }
    this.offsetSet('oa', function (app) {
      return new OAClient(app);
    });
    this.offsetSet('base', function (app) {
      return new WorkBase(app);
    });
    this.offsetSet('agent', function (app) {
      return new AgentClient(app);
    });
    this.offsetSet('calendar', function (app) {
      return new CalendarClient(app);
    });

  }


  // map to `base` module
  getCallbackIp(): Promise<any>
  {
    return this.base.getCallbackIp.apply(this.base, arguments);
  }

};
