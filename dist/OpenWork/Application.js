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
const Application_1 = __importDefault(require("../Work/MiniProgram/Application"));
const Application_2 = __importDefault(require("./Work/Application"));
const ProviderAccessToken_1 = __importDefault(require("./Auth/ProviderAccessToken"));
const SuiteAccessToken_1 = __importDefault(require("./Auth/SuiteAccessToken"));
const SuiteTicket_1 = __importDefault(require("./Auth/SuiteTicket"));
const CorpClient_1 = __importDefault(require("./Corp/CorpClient"));
const MiniProgramClient_1 = __importDefault(require("./MiniProgram/MiniProgramClient"));
const ProviderClient_1 = __importDefault(require("./Provider/ProviderClient"));
const Encryptor_1 = __importDefault(require("../Core/Encryptor"));
const OpenWorkGuard_1 = __importDefault(require("./Server/OpenWorkGuard"));
const FinallResult_1 = __importDefault(require("../Core/Decorators/FinallResult"));
class OpenWork extends BaseApplication_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
        this.defaultConfig = {
            // 必要配置
            app_id: '',
            key: '',
            http: {
                baseURL: 'https://qyapi.weixin.qq.com/',
            },
        };
        this.provider_access_token = null;
        this.suite_access_token = null;
        this.suite_ticket = null;
        this.corp = null;
        this.mini_program = null;
        this.provider = null;
        this.encryptor_corp = null;
        this.encryptor = null;
        this.server = null;
        this.registerProviders();
    }
    registerProviders() {
        super.registerCommonProviders();
        if (!this.provider_access_token) {
            this.offsetSet('provider_access_token', function (app) {
                return new ProviderAccessToken_1.default(app);
            });
        }
        this.offsetSet('suite_ticket', function (app) {
            return new SuiteTicket_1.default(app);
        });
        if (!this.suite_access_token) {
            this.offsetSet('suite_access_token', function (app) {
                return new SuiteAccessToken_1.default(app);
            });
        }
        if (!this.corp) {
            this.offsetSet('corp', function (app) {
                return new CorpClient_1.default(app);
            });
        }
        if (!this.mini_program) {
            this.offsetSet('mini_program', function (app) {
                return new MiniProgramClient_1.default(app);
            });
        }
        if (!this.provider) {
            this.offsetSet('provider', function (app) {
                return new ProviderClient_1.default(app);
            });
        }
        if (!this.encryptor_corp) {
            this.offsetSet('encryptor_corp', function (app) {
                return new Encryptor_1.default(app.config['corp_id'], app.config['token'], app.config['aes_key']);
            });
        }
        if (!this.encryptor) {
            this.offsetSet('encryptor', function (app) {
                return new Encryptor_1.default(app.config['suite_id'], app.config['token'], app.config['aes_key']);
            });
        }
        if (!this.server) {
            this.offsetSet('server', function (app) {
                let guard = new OpenWorkGuard_1.default(app);
                guard.push(function (payload) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let decrypted = yield this.app.request.get('echostr');
                        if (decrypted) {
                            let str = this.app.encryptor_corp.decrypt(decrypted, this.app.request.get('msg_signature'), this.app.request.get('nonce'), this.app.request.get('timestamp'));
                            return new FinallResult_1.default(str);
                        }
                        // 缓存SuiteTicket
                        if (typeof payload['SuiteTicket'] != 'undefined') {
                            yield this.app.suite_ticket.setTicket(payload['SuiteTicket']);
                            return new FinallResult_1.default('success');
                        }
                        return null;
                    });
                });
                return guard;
            });
        }
    }
    /**
     * 代理小程序实现业务，返回SDK实例
     */
    miniProgram() {
        return new Application_1.default(this.getConfig());
    }
    /**
     * 代理企业微信实现业务，返回SDK实例
     * @param authCorpId 企业 corp_id
     * @param permanentCode 企业永久授权码
     * @returns
     */
    work(authCorpId, permanentCode) {
        return new Application_2.default(authCorpId, permanentCode, this);
    }
}
exports.default = OpenWork;
;
