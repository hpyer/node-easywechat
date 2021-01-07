'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __importDefault(require("../../../MiniProgram/Application"));
const CodeClient_1 = __importDefault(require("./Code/CodeClient"));
const DomainClient_1 = __importDefault(require("./Domain/DomainClient"));
const AccountClient_1 = __importDefault(require("./Account/AccountClient"));
const SettingClient_1 = __importDefault(require("./Setting/SettingClient"));
const TesterClient_1 = __importDefault(require("./Tester/TesterClient"));
class MiniProgram extends Application_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
        this.code = null;
        this.domain = null;
        this.account = null;
        this.setting = null;
        this.tester = null;
        this.registerProviders();
    }
    registerProviders() {
        this.registerCommonProviders();
        this.offsetSet('code', function (app) {
            return new CodeClient_1.default(app);
        });
        this.offsetSet('domain', function (app) {
            return new DomainClient_1.default(app);
        });
        this.offsetSet('account', function (app) {
            return new AccountClient_1.default(app);
        });
        this.offsetSet('setting', function (app) {
            return new SettingClient_1.default(app);
        });
        this.offsetSet('tester', function (app) {
            return new TesterClient_1.default(app);
        });
    }
}
exports.default = MiniProgram;
;
