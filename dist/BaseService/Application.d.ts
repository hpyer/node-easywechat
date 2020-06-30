import BaseApplication from '../Core/BaseApplication';
import JssdkClient from './Jssdk/JssdkClient';
import MediaClient from './Media/MediaClient';
import QrcodeClient from './Qrcode/QrcodeClient';
import UrlClient from './Url/UrlClient';
import ContentSecurityClient from './ContentSecurity/ContentSecurityClient';
export default class BaseService extends BaseApplication {
    protected defaultConfig: object;
    jssdk: JssdkClient;
    media: MediaClient;
    qrcode: QrcodeClient;
    url: UrlClient;
    content_security: ContentSecurityClient;
    constructor(config?: Object, prepends?: Object, id?: String);
    registerProviders(): void;
}
