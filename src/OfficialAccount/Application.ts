'use strict';

import BaseApplication from '../Core/BaseApplication';
import AccessToken from './Auth/AccessToken';
import Encryptor from '../Core/Encryptor';
import Guard from './Server/Guard';
import FinallResult from '../Core/Decorators/FinallResult';
import UserClient from './User/UserClient';
import TagClient from './User/TagClient';
import MenuClient from './Menu/MenuClient';
import TemplateMessageClient from './TemplateMessage/TemplateMessageClient';
import SubscribeMessageClient from './SubscribeMessage/SubscribeMessageClient';
import MaterialClient from './Material/MaterialClient';
import CustomerServiceClient from './CustomerService/CustomerServiceClient';
import CustomerServiceSession from './CustomerService/CustomerServiceSession';
import SemanticClient from './Semantic/SemanticClient';
import DataCubeClient from './DataCube/DataCubeClient';
import POIClient from './POI/POIClient';
import AutoReplyClient from './AutoReply/AutoReplyClient';
import BroadcastingClient from './Broadcasting/BroadcastingClient';
import Card from './Card/Card';
import DeviceClient from './Device/DeviceClient';
import ShakeAround from './ShakeAround/ShakeAround';
import StoreClient from './Store/StoreClient';
import CommentClient from './Comment/CommentClient';
import OfficialAccountBase from './Base/OfficialAccountBase';
import OCRClient from './OCR/OCRClient';
import GoodsClient from './Goods/GoodsClient';
import JssdkClient from '../BaseService/Jssdk/JssdkClient';
import MediaClient from '../BaseService/Media/MediaClient';
import QrcodeClient from '../BaseService/Qrcode/QrcodeClient';
import UrlClient from '../BaseService/Url/UrlClient';
import { EasyWechatConfig } from '../Core/Types';
import { SocialiteManager } from 'node-socialite';
import WeChat from 'node-socialite/dist/Providers/WeChat';

export default class OfficialAccount extends BaseApplication
{
  protected defaultConfig: EasyWechatConfig = {
    app_id: '',
    secret: '',
    oauth: {
      scope: 'snsapi_userinfo',
      callback: '',
    },
  };

  public access_token: AccessToken;
  public encryptor: Encryptor;
  public server: Guard;
  public user: UserClient;
  public user_tag: TagClient;
  public oauth: WeChat;
  public menu: MenuClient;
  public template_message: TemplateMessageClient;
  public subscribe_message: SubscribeMessageClient;
  public material: MaterialClient;
  public customer_service: CustomerServiceClient;
  public customer_service_session: CustomerServiceSession;
  public semantic: SemanticClient;
  public data_cube: DataCubeClient;
  public poi: POIClient;
  public auto_reply: AutoReplyClient;
  public broadcasting: BroadcastingClient;
  public card: Card;
  public device: DeviceClient;
  public shake_around: ShakeAround;
  public store: StoreClient;
  public comment: CommentClient;
  public base: OfficialAccountBase;
  public ocr: OCRClient;
  public goods: GoodsClient;
  public jssdk: JssdkClient;
  public media: MediaClient;
  public qrcode: QrcodeClient;
  public url: UrlClient;

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
    this.offsetSet('user', function (app) {
      return new UserClient(app);
    });
    this.offsetSet('user_tag', function (app) {
      return new TagClient(app);
    });
    if (!this.oauth) {
      this.offsetSet('oauth', function (app) {
        let socialiteConfig = {
          wechat: {
            client_id: app['config']['app_id'],
            client_secret: app['config']['secret'],
            redirect_url: '',
          }
        };
        if (app['config']['oauth'] && typeof app['config']['oauth']['callback'] != 'undefined') {
          socialiteConfig.wechat.redirect_url = app['config']['oauth']['callback'];
        }

        if (app['config']['component_app_id'] && app['config']['component_app_token']) {
          socialiteConfig.wechat['component'] = {
            id: app['config']['component_app_id'],
            token: app['config']['component_app_token'],
          }
        }

        let socialite = new SocialiteManager(socialiteConfig).create('wechat');

        let scopes = 'snsapi_userinfo';
        if (app['config']['oauth'] && typeof app['config']['oauth']['scopes'] != 'undefined') {
          scopes = app['config']['oauth']['scopes'] || 'snsapi_userinfo';
        }
        socialite.scopes(scopes);

        socialite['state'] = function () {
          throw new Error('Please use withState() instead.');
        };
        socialite['getToken'] = function () {
          throw new Error('Please use tokenFromCode() instead.');
        };
        socialite['user'] = function () {
          throw new Error('Please use userFromCode() instead.');
        };

        return socialite;
      });
    }
    this.offsetSet('menu', function (app) {
      return new MenuClient(app);
    });
    this.offsetSet('template_message', function (app) {
      return new TemplateMessageClient(app);
    });
    this.offsetSet('subscribe_message', function (app) {
      return new SubscribeMessageClient(app);
    });
    this.offsetSet('material', function (app) {
      return new MaterialClient(app);
    });
    this.offsetSet('customer_service', function (app) {
      return new CustomerServiceClient(app);
    });
    this.offsetSet('customer_service_session', function (app) {
      return new CustomerServiceSession(app);
    });
    this.offsetSet('semantic', function (app) {
      return new SemanticClient(app);
    });
    this.offsetSet('data_cube', function (app) {
      return new DataCubeClient(app);
    });
    this.offsetSet('poi', function (app) {
      return new POIClient(app);
    });
    this.offsetSet('auto_reply', function (app) {
      return new AutoReplyClient(app);
    });
    this.offsetSet('broadcasting', function (app) {
      return new BroadcastingClient(app);
    });
    this.offsetSet('card', function (app) {
      return new Card(app);
    });
    this.offsetSet('device', function (app) {
      return new DeviceClient(app);
    });
    this.offsetSet('shake_around', function (app) {
      return new ShakeAround(app);
    });
    this.offsetSet('store', function (app) {
      return new StoreClient(app);
    });
    this.offsetSet('comment', function (app) {
      return new CommentClient(app);
    });
    this.offsetSet('base', function (app) {
      return new OfficialAccountBase(app);
    });
    this.offsetSet('ocr', function (app) {
      return new OCRClient(app);
    });
    this.offsetSet('goods', function (app) {
      return new GoodsClient(app);
    });

    // BaseService
    this.offsetSet('jssdk', function (app) {
      return new JssdkClient(app);
    });
    this.offsetSet('media', function (app) {
      return new MediaClient(app);
    });
    this.offsetSet('qrcode', function (app) {
      return new QrcodeClient(app);
    });
    this.offsetSet('url', function (app) {
      return new UrlClient(app);
    });

  }


  // map to `base` module
  clearQuota(): Promise<any>
  {
    return this.base.clearQuota.apply(this.base, arguments);
  }
  getValidIps(): Promise<any>
  {
    return this.base.getValidIps.apply(this.base, arguments);
  }
  checkCallbackUrl(): Promise<any>
  {
    return this.base.checkCallbackUrl.apply(this.base, arguments);
  }
};
