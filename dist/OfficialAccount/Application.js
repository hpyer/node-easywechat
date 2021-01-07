'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseApplication_1 = __importDefault(require("../Core/BaseApplication"));
const AccessToken_1 = __importDefault(require("./Auth/AccessToken"));
const Encryptor_1 = __importDefault(require("../Core/Encryptor"));
const Guard_1 = __importDefault(require("./Server/Guard"));
const FinallResult_1 = __importDefault(require("../Core/Decorators/FinallResult"));
const UserClient_1 = __importDefault(require("./User/UserClient"));
const TagClient_1 = __importDefault(require("./User/TagClient"));
const OAuthClient_1 = __importDefault(require("./OAuth/OAuthClient"));
const MenuClient_1 = __importDefault(require("./Menu/MenuClient"));
const TemplateMessageClient_1 = __importDefault(require("./TemplateMessage/TemplateMessageClient"));
const MaterialClient_1 = __importDefault(require("./Material/MaterialClient"));
const CustomerServiceClient_1 = __importDefault(require("./CustomerService/CustomerServiceClient"));
const CustomerServiceSession_1 = __importDefault(require("./CustomerService/CustomerServiceSession"));
const SemanticClient_1 = __importDefault(require("./Semantic/SemanticClient"));
const DataCubeClient_1 = __importDefault(require("./DataCube/DataCubeClient"));
const POIClient_1 = __importDefault(require("./POI/POIClient"));
const AutoReplyClient_1 = __importDefault(require("./AutoReply/AutoReplyClient"));
const BroadcastingClient_1 = __importDefault(require("./Broadcasting/BroadcastingClient"));
const Card_1 = __importDefault(require("./Card/Card"));
const DeviceClient_1 = __importDefault(require("./Device/DeviceClient"));
const ShakeAround_1 = __importDefault(require("./ShakeAround/ShakeAround"));
const StoreClient_1 = __importDefault(require("./Store/StoreClient"));
const CommentClient_1 = __importDefault(require("./Comment/CommentClient"));
const OfficialAccountBase_1 = __importDefault(require("./Base/OfficialAccountBase"));
const OCRClient_1 = __importDefault(require("./OCR/OCRClient"));
const GoodsClient_1 = __importDefault(require("./Goods/GoodsClient"));
const JssdkClient_1 = __importDefault(require("../BaseService/Jssdk/JssdkClient"));
const MediaClient_1 = __importDefault(require("../BaseService/Media/MediaClient"));
const QrcodeClient_1 = __importDefault(require("../BaseService/Qrcode/QrcodeClient"));
const UrlClient_1 = __importDefault(require("../BaseService/Url/UrlClient"));
class OfficialAccount extends BaseApplication_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
        this.defaultConfig = {
            app_id: '',
            secret: '',
            oauth: {
                scope: 'snsapi_userinfo',
                callback: '',
            },
        };
        this.access_token = null;
        this.encryptor = null;
        this.server = null;
        this.user = null;
        this.user_tag = null;
        this.oauth = null;
        this.menu = null;
        this.template_message = null;
        this.material = null;
        this.customer_service = null;
        this.customer_service_session = null;
        this.semantic = null;
        this.data_cube = null;
        this.poi = null;
        this.auto_reply = null;
        this.broadcasting = null;
        this.card = null;
        this.device = null;
        this.shake_around = null;
        this.store = null;
        this.comment = null;
        this.base = null;
        this.ocr = null;
        this.goods = null;
        this.jssdk = null;
        this.media = null;
        this.qrcode = null;
        this.url = null;
        this.registerProviders();
    }
    registerProviders() {
        super.registerCommonProviders();
        if (!this.access_token) {
            this.offsetSet('access_token', function (app) {
                return new AccessToken_1.default(app);
            });
        }
        if (!this.encryptor) {
            this.offsetSet('encryptor', function (app) {
                return new Encryptor_1.default(app.config['app_id'], app.config['token'], app.config['aes_key']);
            });
        }
        if (!this.server) {
            this.offsetSet('server', function (app) {
                let guard = new Guard_1.default(app);
                guard.push(function (payload) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let str = yield this.app.request.get('echostr');
                        if (str) {
                            return new FinallResult_1.default(str);
                        }
                    });
                });
                return guard;
            });
        }
        this.offsetSet('user', function (app) {
            return new UserClient_1.default(app);
        });
        this.offsetSet('user_tag', function (app) {
            return new TagClient_1.default(app);
        });
        if (!this.oauth) {
            this.offsetSet('oauth', function (app) {
                return new OAuthClient_1.default(app);
            });
        }
        this.offsetSet('menu', function (app) {
            return new MenuClient_1.default(app);
        });
        this.offsetSet('template_message', function (app) {
            return new TemplateMessageClient_1.default(app);
        });
        this.offsetSet('material', function (app) {
            return new MaterialClient_1.default(app);
        });
        this.offsetSet('customer_service', function (app) {
            return new CustomerServiceClient_1.default(app);
        });
        this.offsetSet('customer_service_session', function (app) {
            return new CustomerServiceSession_1.default(app);
        });
        this.offsetSet('semantic', function (app) {
            return new SemanticClient_1.default(app);
        });
        this.offsetSet('data_cube', function (app) {
            return new DataCubeClient_1.default(app);
        });
        this.offsetSet('poi', function (app) {
            return new POIClient_1.default(app);
        });
        this.offsetSet('auto_reply', function (app) {
            return new AutoReplyClient_1.default(app);
        });
        this.offsetSet('broadcasting', function (app) {
            return new BroadcastingClient_1.default(app);
        });
        this.offsetSet('card', function (app) {
            return new Card_1.default(app);
        });
        this.offsetSet('device', function (app) {
            return new DeviceClient_1.default(app);
        });
        this.offsetSet('shake_around', function (app) {
            return new ShakeAround_1.default(app);
        });
        this.offsetSet('store', function (app) {
            return new StoreClient_1.default(app);
        });
        this.offsetSet('comment', function (app) {
            return new CommentClient_1.default(app);
        });
        this.offsetSet('base', function (app) {
            return new OfficialAccountBase_1.default(app);
        });
        this.offsetSet('ocr', function (app) {
            return new OCRClient_1.default(app);
        });
        this.offsetSet('goods', function (app) {
            return new GoodsClient_1.default(app);
        });
        // BaseService
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
    }
    // map to `base` module
    clearQuota() {
        return this.base.clearQuota.apply(this.base, arguments);
    }
    getValidIps() {
        return this.base.getValidIps.apply(this.base, arguments);
    }
    checkCallbackUrl() {
        return this.base.checkCallbackUrl.apply(this.base, arguments);
    }
}
exports.default = OfficialAccount;
;
