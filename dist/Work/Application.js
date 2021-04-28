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
const WorkBase_1 = __importDefault(require("./Base/WorkBase"));
const OAClient_1 = __importDefault(require("./OA/OAClient"));
const AccessToken_1 = __importDefault(require("./Auth/AccessToken"));
const AgentClient_1 = __importDefault(require("./Agent/AgentClient"));
const CalendarClient_1 = __importDefault(require("./Calendar/CalendarClient"));
const ChatClient_1 = __importDefault(require("./Chat/ChatClient"));
const DepartmentClient_1 = __importDefault(require("./Department/DepartmentClient"));
const GroupRobotClient_1 = __importDefault(require("./GroupRobot/GroupRobotClient"));
const Messenger_1 = __importDefault(require("./GroupRobot/Messenger"));
const InvoiceClient_1 = __importDefault(require("./Invoice/InvoiceClient"));
const JssdkClient_1 = __importDefault(require("./Jssdk/JssdkClient"));
const LiveClient_1 = __importDefault(require("./Live/LiveClient"));
const MediaClient_1 = __importDefault(require("./Media/MediaClient"));
const MenuClient_1 = __importDefault(require("./Menu/MenuClient"));
const MessageClient_1 = __importDefault(require("./Message/MessageClient"));
const Messenger_2 = __importDefault(require("./Message/Messenger"));
const MsgAuditClient_1 = __importDefault(require("./MsgAudit/MsgAuditClient"));
const Encryptor_1 = __importDefault(require("../Core/Encryptor"));
const Guard_1 = __importDefault(require("./Server/Guard"));
const UserClient_1 = __importDefault(require("./User/UserClient"));
const TagClient_1 = __importDefault(require("./User/TagClient"));
const FinallResult_1 = __importDefault(require("../Core/Decorators/FinallResult"));
const Application_1 = __importDefault(require("./MiniProgram/Application"));
const Client_1 = __importDefault(require("./ExternalContact/Client"));
const ContactWayClient_1 = __importDefault(require("./ExternalContact/ContactWayClient"));
const StatisticsClient_1 = __importDefault(require("./ExternalContact/StatisticsClient"));
const MessageClient_2 = __importDefault(require("./ExternalContact/MessageClient"));
const MessageTemplateClient_1 = __importDefault(require("./ExternalContact/MessageTemplateClient"));
const SchoolClient_1 = __importDefault(require("./ExternalContact/SchoolClient"));
const MomentClient_1 = __importDefault(require("./ExternalContact/MomentClient"));
const CorpGroupClient_1 = __importDefault(require("./CorpGroup/CorpGroupClient"));
const node_socialite_1 = require("node-socialite");
class Work extends BaseApplication_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
        this.defaultConfig = {
            http: {
                baseURL: 'https://qyapi.weixin.qq.com/',
            },
        };
        this.oa = null;
        this.access_token = null;
        this.agent = null;
        this.base = null;
        this.calendar = null;
        this.chat = null;
        this.corp_group = null;
        this.department = null;
        this.external_contact = null;
        this.contact_way = null;
        this.external_contact_statistics = null;
        this.external_contact_message = null;
        this.external_contact_message_template = null;
        this.school = null;
        this.external_contact_moment = null;
        this.group_robot = null;
        this.group_robot_messenger = null;
        this.invoice = null;
        this.jssdk = null;
        this.live = null;
        this.media = null;
        this.menu = null;
        this.message = null;
        this.messenger = null;
        this.msg_audit = null;
        this.encryptor = null;
        this.server = null;
        this.user = null;
        this.tag = null;
        this.oauth = null;
        this.registerProviders();
    }
    registerProviders() {
        super.registerCommonProviders();
        if (!this.access_token) {
            this.offsetSet('access_token', function (app) {
                return new AccessToken_1.default(app);
            });
        }
        this.offsetSet('oa', function (app) {
            return new OAClient_1.default(app);
        });
        this.offsetSet('base', function (app) {
            return new WorkBase_1.default(app);
        });
        this.offsetSet('agent', function (app) {
            return new AgentClient_1.default(app);
        });
        this.offsetSet('calendar', function (app) {
            return new CalendarClient_1.default(app);
        });
        this.offsetSet('chat', function (app) {
            return new ChatClient_1.default(app);
        });
        this.offsetSet('corp_group', function (app) {
            return new CorpGroupClient_1.default(app);
        });
        this.offsetSet('department', function (app) {
            return new DepartmentClient_1.default(app);
        });
        this.offsetSet('external_contact', function (app) {
            return new Client_1.default(app);
        });
        this.offsetSet('contact_way', function (app) {
            return new ContactWayClient_1.default(app);
        });
        this.offsetSet('external_contact_statistics', function (app) {
            return new StatisticsClient_1.default(app);
        });
        this.offsetSet('external_contact_message', function (app) {
            return new MessageClient_2.default(app);
        });
        this.offsetSet('external_contact_message_template', function (app) {
            return new MessageTemplateClient_1.default(app);
        });
        this.offsetSet('school', function (app) {
            return new SchoolClient_1.default(app);
        });
        this.offsetSet('external_contact_moment', function (app) {
            return new MomentClient_1.default(app);
        });
        this.offsetSet('group_robot', function (app) {
            return new GroupRobotClient_1.default(app);
        });
        this.offsetSet('group_robot_messenger', function (app) {
            return new Messenger_1.default(app.group_robot);
        });
        this.offsetSet('invoice', function (app) {
            return new InvoiceClient_1.default(app);
        });
        this.offsetSet('jssdk', function (app) {
            return new JssdkClient_1.default(app);
        });
        this.offsetSet('live', function (app) {
            return new LiveClient_1.default(app);
        });
        this.offsetSet('media', function (app) {
            return new MediaClient_1.default(app);
        });
        this.offsetSet('menu', function (app) {
            return new MenuClient_1.default(app);
        });
        this.offsetSet('message', function (app) {
            return new MessageClient_1.default(app);
        });
        this.offsetSet('messenger', function (app) {
            let messenger = new Messenger_2.default(app.message);
            if (typeof app.config.agent_id == 'number') {
                messenger.ofAgent(app.config.agent_id);
            }
            return messenger;
        });
        this.offsetSet('msg_audit', function (app) {
            return new MsgAuditClient_1.default(app);
        });
        this.offsetSet('user', function (app) {
            return new UserClient_1.default(app);
        });
        this.offsetSet('tag', function (app) {
            return new TagClient_1.default(app);
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
                        let str = yield app.request.get('echostr');
                        if (str) {
                            return new FinallResult_1.default(str);
                        }
                    });
                });
                return guard;
            });
        }
        this.offsetSet('oauth', function (app) {
            let socialiteConfig = {
                wework: {
                    client_id: app['config']['corp_id'],
                    client_secret: app['config']['secret'],
                    corp_id: app['config']['corp_id'],
                    corp_secret: app['config']['secret'],
                    redirect_url: ''
                }
            };
            if (app['config']['oauth'] && typeof app['config']['oauth']['callback'] != 'undefined') {
                socialiteConfig.wework.redirect_url = app['config']['oauth']['callback'];
            }
            let socialite = new node_socialite_1.SocialiteManager(socialiteConfig).create('wework');
            let scopes = 'snsapi_base';
            if (app['config']['oauth'] && typeof app['config']['oauth']['scopes'] != 'undefined') {
                scopes = app['config']['oauth']['scopes'] || '';
            }
            if (scopes) {
                socialite.scopes(scopes);
            }
            else {
                socialite.setAgentId(app['config']['agent_id']);
            }
            socialite['state'] = function () {
                throw new Error('Please use withState() instead.');
            };
            socialite['user'] = function () {
                throw new Error('Please use userFromCode() instead.');
            };
            return socialite;
        });
    }
    miniProgram() {
        return new Application_1.default(this.getConfig());
    }
    // map to `base` module
    getCallbackIp() {
        return this.base.getCallbackIp.apply(this.base, arguments);
    }
}
exports.default = Work;
;
