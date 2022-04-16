'use strict';

import BaseApplication from '../Core/BaseApplication';
import JssdkClient from './Jssdk/JssdkClient';
import MediaClient from './Media/MediaClient';
import QrcodeClient from './Qrcode/QrcodeClient';
import UrlClient from './Url/UrlClient';
import ContentSecurityClient from './ContentSecurity/ContentSecurityClient';
import { EasyWechatConfig } from '../Core/Types';

export default class BaseService extends BaseApplication
{
  protected defaultConfig: EasyWechatConfig = {
    app_id: '',
    secret: '',
  };

  public jssdk: JssdkClient = null;
  public media: MediaClient = null;
  public qrcode: QrcodeClient = null;
  public url: UrlClient = null;
  public content_security: ContentSecurityClient = null;

  constructor(config: EasyWechatConfig = null, prepends: Object = {}, id: String = null)
  {
    super(config, prepends, id);

    this.registerProviders();
  }

  registerProviders(): void
  {
    super.registerCommonProviders();

    this.offsetSet('jssdk', function (app: BaseService) {
      return new JssdkClient(app);
    });
    this.offsetSet('media', function (app: BaseService) {
      return new MediaClient(app);
    });
    this.offsetSet('qrcode', function (app: BaseService) {
      return new QrcodeClient(app);
    });
    this.offsetSet('url', function (app: BaseService) {
      return new UrlClient(app);
    });
    this.offsetSet('content_security', function (app: BaseService) {
      return new ContentSecurityClient(app);
    });
  }

};
