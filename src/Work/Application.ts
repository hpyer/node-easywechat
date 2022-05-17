'use strict';

import { EasyWechatConfig } from '../Core/Types';
import BaseApplication from '../Core/BaseApplication';
import WorkBase from './Base/WorkBase';
import OAClient from './OA/OAClient';
import AccessToken from './Auth/AccessToken';
import AgentClient from './Agent/AgentClient';
import WorkbenchClient from './Agent/WorkbenchClient';
import CalendarClient from './Calendar/CalendarClient';
import ChatClient from './Chat/ChatClient';
import DepartmentClient from './Department/DepartmentClient';
import GroupRobotClient from './GroupRobot/GroupRobotClient';
import GroupRobotMessenger from './GroupRobot/Messenger';
import InvoiceClient from './Invoice/InvoiceClient';
import JssdkClient from './Jssdk/JssdkClient';
import KfAccountClient from './Kf/KfAccountClient';
import KfMessageClient from './Kf/KfMessageClient';
import KfServicerClient from './Kf/KfServicerClient';
import LiveClient from './Live/LiveClient';
import MediaClient from './Media/MediaClient';
import MenuClient from './Menu/MenuClient';
import MessageClient from './Message/MessageClient';
import Messenger from './Message/Messenger';
import MsgAuditClient from './MsgAudit/MsgAuditClient';
import Encryptor from '../Core/Encryptor';
import Guard from './Server/Guard';
import UserClient from './User/UserClient';
import TagClient from './User/TagClient';
import FinallResult from '../Core/Decorators/FinallResult';
import MiniProgram from './MiniProgram/Application';
import ExternalContactClient from './ExternalContact/Client';
import ExternalContactWayClient from './ExternalContact/ContactWayClient';
import ExternalGroupChatWayClient from './ExternalContact/GroupChatWayClient';
import ExternalStatisticsClient from './ExternalContact/StatisticsClient';
import ExternalMessageClient from './ExternalContact/MessageClient';
import ExternalMessageTemplateClient from './ExternalContact/MessageTemplateClient';
import ExternalSchoolClient from './ExternalContact/SchoolClient';
import ExternalMomentClient from './ExternalContact/MomentClient';
import CorpGroupClient from './CorpGroup/CorpGroupClient';
import { SocialiteManager } from 'node-socialite';
import WeWork from 'node-socialite/dist/Providers/WeWork';

export default class Work extends BaseApplication
{
  protected defaultConfig: EasyWechatConfig = {
    http: {
      baseURL: 'https://qyapi.weixin.qq.com/',
    },
  };

  public oa: OAClient;
  public access_token: AccessToken;
  public agent: AgentClient;
  public agent_workbench: WorkbenchClient;
  public base: WorkBase;
  public calendar: CalendarClient;
  public chat: ChatClient;
  public corp_group: CorpGroupClient;
  public department: DepartmentClient;
  public external_contact: ExternalContactClient;
  public contact_way: ExternalContactWayClient;
  public group_chat_way: ExternalGroupChatWayClient;
  public external_contact_statistics: ExternalStatisticsClient;
  public external_contact_message: ExternalMessageClient;
  public external_contact_message_template: ExternalMessageTemplateClient;
  public school: ExternalSchoolClient;
  public external_contact_moment: ExternalMomentClient;
  public group_robot: GroupRobotClient;
  public group_robot_messenger: GroupRobotMessenger;
  public invoice: InvoiceClient;
  public jssdk: JssdkClient;
  public kf_account: KfAccountClient;
  public kf_message: KfMessageClient;
  public kf_servicer: KfServicerClient;
  public live: LiveClient;
  public media: MediaClient;
  public menu: MenuClient;
  public message: MessageClient;
  public messenger: Messenger;
  public msg_audit: MsgAuditClient;
  public encryptor: Encryptor;
  public server: Guard;
  public user: UserClient;
  public tag: TagClient;
  public oauth: WeWork;

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
    this.offsetSet('agent_workbench', function (app) {
      return new WorkbenchClient(app);
    });
    this.offsetSet('calendar', function (app) {
      return new CalendarClient(app);
    });
    this.offsetSet('chat', function (app) {
      return new ChatClient(app);
    });
    this.offsetSet('corp_group', function (app) {
      return new CorpGroupClient(app);
    });
    this.offsetSet('department', function (app) {
      return new DepartmentClient(app);
    });
    this.offsetSet('external_contact', function (app) {
      return new ExternalContactClient(app);
    });
    this.offsetSet('contact_way', function (app) {
      return new ExternalContactWayClient(app);
    });
    this.offsetSet('group_chat_way', function (app) {
      return new ExternalGroupChatWayClient(app);
    });
    this.offsetSet('external_contact_statistics', function (app) {
      return new ExternalStatisticsClient(app);
    });
    this.offsetSet('external_contact_message', function (app) {
      return new ExternalMessageClient(app);
    });
    this.offsetSet('external_contact_message_template', function (app) {
      return new ExternalMessageTemplateClient(app);
    });
    this.offsetSet('school', function (app) {
      return new ExternalSchoolClient(app);
    });
    this.offsetSet('external_contact_moment', function (app) {
      return new ExternalMomentClient(app);
    });
    this.offsetSet('group_robot', function (app) {
      return new GroupRobotClient(app);
    });
    this.offsetSet('group_robot_messenger', function (app) {
      return new GroupRobotMessenger(app.group_robot);
    });
    this.offsetSet('invoice', function (app) {
      return new InvoiceClient(app);
    });
    this.offsetSet('jssdk', function (app) {
      return new JssdkClient(app);
    });
    this.offsetSet('kf_account', function (app) {
      return new KfAccountClient(app);
    });
    this.offsetSet('kf_message', function (app) {
      return new KfMessageClient(app);
    });
    this.offsetSet('kf_servicer', function (app) {
      return new KfServicerClient(app);
    });
    this.offsetSet('live', function (app) {
      return new LiveClient(app);
    });
    this.offsetSet('media', function (app) {
      return new MediaClient(app);
    });
    this.offsetSet('menu', function (app) {
      return new MenuClient(app);
    });
    this.offsetSet('message', function (app) {
      return new MessageClient(app);
    });
    this.offsetSet('messenger', function (app) {
      let messenger = new Messenger(app.message);
      if (typeof app.config.agent_id == 'number') {
        messenger.ofAgent(app.config.agent_id);
      }
      return messenger;
    });
    this.offsetSet('msg_audit', function (app) {
      return new MsgAuditClient(app);
    });
    this.offsetSet('user', function (app) {
      return new UserClient(app);
    });
    this.offsetSet('tag', function (app) {
      return new TagClient(app);
    });
    if (!this.encryptor) {
      this.offsetSet('encryptor', function (app) {
        return new Encryptor(app.config['app_id'], app.config['token'], app.config['aes_key']);
      });
    }
    if (!this.server) {
      this.offsetSet('server', function (app) {
        let guard = new Guard(app);
        guard.push(async function (payload) {
          let str = await app.request.get('echostr');
          if (str) {
            return new FinallResult(str);
          }
        });
        return guard;
      });
    }
    this.offsetSet('oauth', function (app) {
      let socialiteConfig = {
        wework: {
          client_id: app['config']['corp_id'],
          client_secret: app['config']['secret'],
          corp_id: app['config']['corp_id'],
          corp_secret: app['config']['secret'],
          redirect_url: ''
        }
      };
      if (app['config']['oauth'] && typeof app['config']['oauth']['callback'] != 'undefined') {
        socialiteConfig.wework.redirect_url = app['config']['oauth']['callback'];
      }

      let socialite = new SocialiteManager(socialiteConfig).create('wework');

      let scopes = 'snsapi_base';
      if (app['config']['oauth'] && typeof app['config']['oauth']['scopes'] != 'undefined') {
        scopes = app['config']['oauth']['scopes'] || '';
      }

      if (scopes) {
        socialite.scopes(scopes);
      }
      else {
        socialite.setAgentId(app['config']['agent_id']);
      }

      socialite['state'] = function () {
        throw new Error('Please use withState() instead.');
      };
      socialite['user'] = function () {
        throw new Error('Please use userFromCode() instead.');
      };

      return socialite;
    });

  }

  miniProgram(): MiniProgram
  {
    return new MiniProgram(this.getConfig());
  }

  // map to `base` module
  getCallbackIp(): Promise<any>
  {
    return this.base.getCallbackIp.apply(this.base, arguments);
  }

};
