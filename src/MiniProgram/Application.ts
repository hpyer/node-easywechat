'use strict';

import BaseApplication from '../Core/BaseApplication';
import AccessToken from './Auth/AccessToken';
import AuthClient from './Auth/AuthClient';
import DataCubeClient from './DataCube/DataCubeClient';
import AppCodeClient from './AppCode/AppCodeClient';
import Encryptor from './Encryptor';
import Guard from '../OfficialAccount/Server/Guard';
import TemplateMessageClient from './TemplateMessage/TemplateMessageClient';
import CustomerServiceClient from '../OfficialAccount/CustomerService/CustomerServiceClient';
import UniformMessageClient from './UniformMessage/UniformMessageClient';
import ActivityMessageClient from './ActivityMessage/ActivityMessageClient';
import OpenDataClient from './OpenData/OpenDataClient';
import PluginClient from './Plugin/PluginClient';
import PluginDevClient from './Plugin/PluginDevClient';
import MiniProgramBase from './Base/MiniProgramBase';
import ExpressClient from './Express/ExpressClient';
import NearbyPoiClient from './NearbyPoi/NearbyPoiClient';
import OCRClient from '../OfficialAccount/OCR/OCRClient';
import SoterClient from './Soter/SoterClient';
import SubscribeMessageClient from './SubscribeMessage/SubscribeMessageClient';
import RealtimeLogClient from './RealtimeLog/RealtimeLogClient';
import SearchClient from './Search/SearchClient';
import MediaClient from '../BaseService/Media/MediaClient';
import ContentSecurityClient from '../BaseService/ContentSecurity/ContentSecurityClient';
import { EasyWechatConfig } from '../Core/Types';

export default class MiniProgram extends BaseApplication
{

  public access_token: AccessToken = null;
  public auth: AuthClient = null;
  public encryptor: Encryptor = null;
  public server: Guard = null;
  public data_cube: DataCubeClient = null;
  public app_code: AppCodeClient = null;
  public template_message: TemplateMessageClient = null;
  public customer_service: CustomerServiceClient = null;
  public uniform_message: UniformMessageClient = null;
  public activity_message: ActivityMessageClient = null;
  public open_data: OpenDataClient = null;
  public plugin: PluginClient = null;
  public plugin_dev: PluginDevClient = null;
  public base: MiniProgramBase = null;
  public express: ExpressClient = null;
  public nearby_poi: NearbyPoiClient = null;
  public ocr: OCRClient = null;
  public soter: SoterClient = null;
  public subscribe_message: SubscribeMessageClient = null;
  public realtime_log: RealtimeLogClient = null;
  public search: SearchClient = null;
  public media: MediaClient = null;
  public content_security: ContentSecurityClient = null;

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
    if (!this.auth) {
      this.offsetSet('auth', function (app) {
        return new AuthClient(app);
      });
    }
    this.offsetSet('data_cube', function (app) {
      return new DataCubeClient(app);
    });
    this.offsetSet('app_code', function (app) {
      return new AppCodeClient(app);
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
          let str = app.request.get('echostr');
          if (str) {
            return str;
          }
        });
        return guard;
      });
    }
    this.offsetSet('template_message', function (app) {
      return new TemplateMessageClient(app);
    });
    this.offsetSet('customer_service', function (app) {
      return new CustomerServiceClient(app);
    });
    this.offsetSet('uniform_message', function (app) {
      return new UniformMessageClient(app);
    });
    this.offsetSet('activity_message', function (app) {
      return new ActivityMessageClient(app);
    });
    this.offsetSet('open_data', function (app) {
      return new OpenDataClient(app);
    });
    this.offsetSet('plugin', function (app) {
      return new PluginClient(app);
    });
    this.offsetSet('plugin_dev', function (app) {
      return new PluginDevClient(app);
    });
    this.offsetSet('base', function (app) {
      return new MiniProgramBase(app);
    });
    this.offsetSet('express', function (app) {
      return new ExpressClient(app);
    });
    this.offsetSet('nearby_poi', function (app) {
      return new NearbyPoiClient(app);
    });
    this.offsetSet('ocr', function (app) {
      return new OCRClient(app);
    });
    this.offsetSet('soter', function (app) {
      return new SoterClient(app);
    });
    this.offsetSet('subscribe_message', function (app) {
      return new SubscribeMessageClient(app);
    });
    this.offsetSet('realtime_log', function (app) {
      return new RealtimeLogClient(app);
    });
    this.offsetSet('search', function (app) {
      return new SearchClient(app);
    });

    // BaseService
    this.offsetSet('media', function (app) {
      return new MediaClient(app);
    });
    this.offsetSet('content_security', function (app) {
      return new ContentSecurityClient(app);
    });
  }

  // map to `base` module
  getPaidUnionid(): Promise<any>
  {
    return this.base.getPaidUnionid.apply(this.base, arguments);
  }

};
