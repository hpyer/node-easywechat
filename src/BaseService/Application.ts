'use strict';

import BaseApplication from '../Core/BaseApplication';
import JssdkClient from './Jssdk/JssdkClient';
import MediaClient from './Media/MediaClient';
import QrcodeClient from './Qrcode/QrcodeClient';
import UrlClient from './Url/UrlClient';
import ContentSecurityClient from './ContentSecurity/ContentSecurityClient';

export default class BaseService extends BaseApplication
{
  protected defaultConfig: object = {
    app_id: '',
    secret: '',
  };

  public jssdk: JssdkClient = null;
  public media: MediaClient = null;
  public qrcode: QrcodeClient = null;
  public url: UrlClient = null;
  public content_security: ContentSecurityClient = null;

  constructor(config: Object = {}, prepends: Object = {}, id: String = null)
  {
    super(config, prepends, id);

    this.registerProviders();
  }

  registerProviders(): void
  {
    super.registerCommonProviders();

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
    this.offsetSet('content_security', function (app) {
      return new ContentSecurityClient(app);
    });
  }

};
