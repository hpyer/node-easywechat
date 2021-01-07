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
const AuthClient_1 = __importDefault(require("./Auth/AuthClient"));
const DataCubeClient_1 = __importDefault(require("./DataCube/DataCubeClient"));
const AppCodeClient_1 = __importDefault(require("./AppCode/AppCodeClient"));
const Encryptor_1 = __importDefault(require("./Encryptor"));
const Guard_1 = __importDefault(require("../OfficialAccount/Server/Guard"));
const TemplateMessageClient_1 = __importDefault(require("./TemplateMessage/TemplateMessageClient"));
const CustomerServiceClient_1 = __importDefault(require("../OfficialAccount/CustomerService/CustomerServiceClient"));
const UniformMessageClient_1 = __importDefault(require("./UniformMessage/UniformMessageClient"));
const ActivityMessageClient_1 = __importDefault(require("./ActivityMessage/ActivityMessageClient"));
const OpenDataClient_1 = __importDefault(require("./OpenData/OpenDataClient"));
const PluginClient_1 = __importDefault(require("./Plugin/PluginClient"));
const PluginDevClient_1 = __importDefault(require("./Plugin/PluginDevClient"));
const MiniProgramBase_1 = __importDefault(require("./Base/MiniProgramBase"));
const ExpressClient_1 = __importDefault(require("./Express/ExpressClient"));
const NearbyPoiClient_1 = __importDefault(require("./NearbyPoi/NearbyPoiClient"));
const OCRClient_1 = __importDefault(require("../OfficialAccount/OCR/OCRClient"));
const SoterClient_1 = __importDefault(require("./Soter/SoterClient"));
const SubscribeMessageClient_1 = __importDefault(require("./SubscribeMessage/SubscribeMessageClient"));
const RealtimeLogClient_1 = __importDefault(require("./RealtimeLog/RealtimeLogClient"));
const SearchClient_1 = __importDefault(require("./Search/SearchClient"));
const MediaClient_1 = __importDefault(require("../BaseService/Media/MediaClient"));
const ContentSecurityClient_1 = __importDefault(require("../BaseService/ContentSecurity/ContentSecurityClient"));
class MiniProgram extends BaseApplication_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
        this.access_token = null;
        this.auth = null;
        this.encryptor = null;
        this.server = null;
        this.data_cube = null;
        this.app_code = null;
        this.template_message = null;
        this.customer_service = null;
        this.uniform_message = null;
        this.activity_message = null;
        this.open_data = null;
        this.plugin = null;
        this.plugin_dev = null;
        this.base = null;
        this.express = null;
        this.nearby_poi = null;
        this.ocr = null;
        this.soter = null;
        this.subscribe_message = null;
        this.realtime_log = null;
        this.search = null;
        this.media = null;
        this.content_security = null;
        this.registerProviders();
    }
    registerProviders() {
        super.registerCommonProviders();
        if (!this.access_token) {
            this.offsetSet('access_token', function (app) {
                return new AccessToken_1.default(app);
            });
        }
        if (!this.auth) {
            this.offsetSet('auth', function (app) {
                return new AuthClient_1.default(app);
            });
        }
        this.offsetSet('data_cube', function (app) {
            return new DataCubeClient_1.default(app);
        });
        this.offsetSet('app_code', function (app) {
            return new AppCodeClient_1.default(app);
        });
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
                        let str = app.request.get('echostr');
                        if (str) {
                            return str;
                        }
                    });
                });
                return guard;
            });
        }
        this.offsetSet('template_message', function (app) {
            return new TemplateMessageClient_1.default(app);
        });
        this.offsetSet('customer_service', function (app) {
            return new CustomerServiceClient_1.default(app);
        });
        this.offsetSet('uniform_message', function (app) {
            return new UniformMessageClient_1.default(app);
        });
        this.offsetSet('activity_message', function (app) {
            return new ActivityMessageClient_1.default(app);
        });
        this.offsetSet('open_data', function (app) {
            return new OpenDataClient_1.default(app);
        });
        this.offsetSet('plugin', function (app) {
            return new PluginClient_1.default(app);
        });
        this.offsetSet('plugin_dev', function (app) {
            return new PluginDevClient_1.default(app);
        });
        this.offsetSet('base', function (app) {
            return new MiniProgramBase_1.default(app);
        });
        this.offsetSet('express', function (app) {
            return new ExpressClient_1.default(app);
        });
        this.offsetSet('nearby_poi', function (app) {
            return new NearbyPoiClient_1.default(app);
        });
        this.offsetSet('ocr', function (app) {
            return new OCRClient_1.default(app);
        });
        this.offsetSet('soter', function (app) {
            return new SoterClient_1.default(app);
        });
        this.offsetSet('subscribe_message', function (app) {
            return new SubscribeMessageClient_1.default(app);
        });
        this.offsetSet('realtime_log', function (app) {
            return new RealtimeLogClient_1.default(app);
        });
        this.offsetSet('search', function (app) {
            return new SearchClient_1.default(app);
        });
        // BaseService
        this.offsetSet('media', function (app) {
            return new MediaClient_1.default(app);
        });
        this.offsetSet('content_security', function (app) {
            return new ContentSecurityClient_1.default(app);
        });
    }
    // map to `base` module
    getPaidUnionid() {
        return this.base.getPaidUnionid.apply(this.base, arguments);
    }
}
exports.default = MiniProgram;
;
