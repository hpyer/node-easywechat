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
import PhoneNumberClient from './PhoneNumber/PhoneNumberClient';
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
import ShopAccoutClient from './Shop/AccoutClient';
import ShopAftersaleClient from './Shop/AftersaleClient';
import ShopBasicClient from './Shop/BasicClient';
import ShopDeliveryClient from './Shop/DeliveryClient';
import ShopOrderClient from './Shop/OrderClient';
import ShopRegisterClient from './Shop/RegisterClient';
import ShopSpuClient from './Shop/SpuClient';
import ShortLinkClient from './ShortLink/ShortLinkClient';
import MediaClient from '../BaseService/Media/MediaClient';
import ContentSecurityClient from '../BaseService/ContentSecurity/ContentSecurityClient';
import { EasyWechatConfig } from '../Core/Types';
import UrlLinkClient from './UrlLink/UrlLinkClient';
import UrlSchemeClient from './UrlScheme/UrlSchemeClient';
import RiskControlClient from './RiskControl/RiskControlClient';
import LiveClient from './Live/LiveClient';
import BroadcastClient from './Broadcast/BroadcastClient';
import UnionClient from './Union/UnionClient';

export default class MiniProgram extends BaseApplication
{

  public access_token: AccessToken;
  public auth: AuthClient;
  public encryptor: Encryptor;
  public server: Guard;
  public data_cube: DataCubeClient;
  public app_code: AppCodeClient;
  public template_message: TemplateMessageClient;
  public customer_service: CustomerServiceClient;
  public uniform_message: UniformMessageClient;
  public activity_message: ActivityMessageClient;
  public open_data: OpenDataClient;
  public phone_number: PhoneNumberClient;
  public plugin: PluginClient;
  public plugin_dev: PluginDevClient;
  public base: MiniProgramBase;
  public express: ExpressClient;
  public nearby_poi: NearbyPoiClient;
  public ocr: OCRClient;
  public soter: SoterClient;
  public subscribe_message: SubscribeMessageClient;
  public realtime_log: RealtimeLogClient;
  public search: SearchClient;
  public shop_account: ShopAccoutClient;
  public shop_aftersale: ShopAftersaleClient;
  public shop_basic: ShopBasicClient;
  public shop_delivery: ShopDeliveryClient;
  public shop_order: ShopOrderClient;
  public shop_register: ShopRegisterClient;
  public shop_spu: ShopSpuClient;
  public short_link: ShortLinkClient;
  public media: MediaClient;
  public content_security: ContentSecurityClient;
  public url_link: UrlLinkClient;
  public url_scheme: UrlSchemeClient;
  public risk_control: RiskControlClient;
  public live: LiveClient;
  public broadcast: BroadcastClient;
  public union: UnionClient;

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
    this.offsetSet('phone_number', function (app) {
      return new PhoneNumberClient(app);
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
    this.offsetSet('shop_account', function (app) {
      return new ShopAccoutClient(app);
    });
    this.offsetSet('shop_aftersale', function (app) {
      return new ShopAftersaleClient(app);
    });
    this.offsetSet('shop_basic', function (app) {
      return new ShopBasicClient(app);
    });
    this.offsetSet('shop_delivery', function (app) {
      return new ShopDeliveryClient(app);
    });
    this.offsetSet('shop_order', function (app) {
      return new ShopOrderClient(app);
    });
    this.offsetSet('shop_register', function (app) {
      return new ShopRegisterClient(app);
    });
    this.offsetSet('shop_spu', function (app) {
      return new ShopSpuClient(app);
    });
    this.offsetSet('short_link', function (app) {
      return new ShortLinkClient(app);
    });
    this.offsetSet('url_link', function (app) {
      return new UrlLinkClient(app);
    });
    this.offsetSet('url_scheme', function (app) {
      return new UrlSchemeClient(app);
    });
    this.offsetSet('risk_control', function (app) {
      return new RiskControlClient(app);
    });
    this.offsetSet('live', function (app) {
      return new LiveClient(app);
    });
    this.offsetSet('broadcast', function (app) {
      return new BroadcastClient(app);
    });
    this.offsetSet('union', function (app) {
      return new UnionClient(app);
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
