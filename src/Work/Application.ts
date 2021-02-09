'use strict';

import { EasyWechatConfig } from '../Core/Types';
import BaseApplication from '../Core/BaseApplication';
import WorkBase from './Base/WorkBase';
import OAClient from './OA/OAClient';
import AccessToken from './Auth/AccessToken';
import AgentClient from './Agent/AgentClient';
import CalendarClient from './Calendar/CalendarClient';
import ChatClient from './Chat/ChatClient';
import DepartmentClient from './Department/DepartmentClient';
import GroupRobotClient from './GroupRobot/GroupRobotClient';
import GroupRobotMessenger from './GroupRobot/Messenger';
import InvoiceClient from './Invoice/InvoiceClient';
import JssdkClient from './Jssdk/JssdkClient';
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
import OAuthClient from './OAuth/OAuthClient';
import AccessTokenDelegate from './OAuth/AccessTokenDelegate';

export default class Work extends BaseApplication
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
  public chat: ChatClient = null;
  public department: DepartmentClient = null;
  public group_robot: GroupRobotClient = null;
  public group_robot_messenger: GroupRobotMessenger = null;
  public invoice: InvoiceClient = null;
  public jssdk: JssdkClient = null;
  public live: LiveClient = null;
  public media: MediaClient = null;
  public menu: MenuClient = null;
  public message: MessageClient = null;
  public messenger: Messenger = null;
  public msg_audit: MsgAuditClient = null;
  public encryptor: Encryptor = null;
  public server: Guard = null;
  public user: UserClient = null;
  public tag: TagClient = null;
  public oauth: OAuthClient = null;

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
    this.offsetSet('chat', function (app) {
      return new ChatClient(app);
    });
    this.offsetSet('department', function (app) {
      return new DepartmentClient(app);
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
          let str = await this.app.request.get('echostr');
          if (str) {
            return new FinallResult(str);
          }
        });
        return guard;
      });
    }
    this.offsetSet('oauth', function (app) {
      let client = new OAuthClient(app);
      let scope = app.config.config.oauth.scope || 'snsapi_base';
      if (scope) {
        client.scopes(scope);
      }
      else {
        client.setAgentId(app.config.agent_id);
      }
      return client.setToken(new AccessTokenDelegate(app));
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
