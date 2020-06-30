'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseApplication_1 = require("../Core/BaseApplication");
const JssdkClient_1 = require("./Jssdk/JssdkClient");
const MediaClient_1 = require("./Media/MediaClient");
const QrcodeClient_1 = require("./Qrcode/QrcodeClient");
const UrlClient_1 = require("./Url/UrlClient");
const ContentSecurityClient_1 = require("./ContentSecurity/ContentSecurityClient");
class BaseService extends BaseApplication_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
        this.defaultConfig = {
            app_id: '',
            secret: '',
        };
        this.jssdk = null;
        this.media = null;
        this.qrcode = null;
        this.url = null;
        this.content_security = null;
        this.registerProviders();
    }
    registerProviders() {
        super.registerCommonProviders();
        this.offsetSet('jssdk', function (app) {
            return new JssdkClient_1.default(app);
        });
        this.offsetSet('media', function (app) {
            return new MediaClient_1.default(app);
        });
        this.offsetSet('qrcode', function (app) {
            return new QrcodeClient_1.default(app);
        });
        this.offsetSet('url', function (app) {
            return new UrlClient_1.default(app);
        });
        this.offsetSet('content_security', function (app) {
            return new ContentSecurityClient_1.default(app);
        });
    }
}
exports.default = BaseService;
;
