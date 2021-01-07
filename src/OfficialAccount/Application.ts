'use strict';

import BaseApplication from '../Core/BaseApplication';
import AccessToken from './Auth/AccessToken';
import Encryptor from '../Core/Encryptor';
import Guard from './Server/Guard';
import FinallResult from '../Core/Decorators/FinallResult';
import UserClient from './User/UserClient';
import TagClient from './User/TagClient';
import OAuthClient from './OAuth/OAuthClient';
import MenuClient from './Menu/MenuClient';
import TemplateMessageClient from './TemplateMessage/TemplateMessageClient';
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

  public access_token: AccessToken = null;
  public encryptor: Encryptor = null;
  public server: Guard = null;
  public user: UserClient = null;
  public user_tag: TagClient = null;
  public oauth: OAuthClient = null;
  public menu: MenuClient = null;
  public template_message: TemplateMessageClient = null;
  public material: MaterialClient = null;
  public customer_service: CustomerServiceClient = null;
  public customer_service_session: CustomerServiceSession = null;
  public semantic: SemanticClient = null;
  public data_cube: DataCubeClient = null;
  public poi: POIClient = null;
  public auto_reply: AutoReplyClient = null;
  public broadcasting: BroadcastingClient = null;
  public card: Card = null;
  public device: DeviceClient = null;
  public shake_around: ShakeAround = null;
  public store: StoreClient = null;
  public comment: CommentClient = null;
  public base: OfficialAccountBase = null;
  public ocr: OCRClient = null;
  public goods: GoodsClient = null;
  public jssdk: JssdkClient = null;
  public media: MediaClient = null;
  public qrcode: QrcodeClient = null;
  public url: UrlClient = null;

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
        return new OAuthClient(app);
      });
    }
    this.offsetSet('menu', function (app) {
      return new MenuClient(app);
    });
    this.offsetSet('template_message', function (app) {
      return new TemplateMessageClient(app);
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
