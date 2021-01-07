'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseApplication_1 = __importDefault(require("../Core/BaseApplication"));
const JssdkClient_1 = __importDefault(require("./Jssdk/JssdkClient"));
const MediaClient_1 = __importDefault(require("./Media/MediaClient"));
const QrcodeClient_1 = __importDefault(require("./Qrcode/QrcodeClient"));
const UrlClient_1 = __importDefault(require("./Url/UrlClient"));
const ContentSecurityClient_1 = __importDefault(require("./ContentSecurity/ContentSecurityClient"));
class BaseService extends BaseApplication_1.default {
    constructor(config = null, prepends = {}, id = null) {
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
