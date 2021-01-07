import BaseApplication from '../Core/BaseApplication';
import JssdkClient from './Jssdk/JssdkClient';
import MediaClient from './Media/MediaClient';
import QrcodeClient from './Qrcode/QrcodeClient';
import UrlClient from './Url/UrlClient';
import ContentSecurityClient from './ContentSecurity/ContentSecurityClient';
import { EasyWechatConfig } from '../Core/Types';
export default class BaseService extends BaseApplication {
    protected defaultConfig: EasyWechatConfig;
    jssdk: JssdkClient;
    media: MediaClient;
    qrcode: QrcodeClient;
    url: UrlClient;
    content_security: ContentSecurityClient;
    constructor(config?: EasyWechatConfig, prepends?: Object, id?: String);
    registerProviders(): void;
}
