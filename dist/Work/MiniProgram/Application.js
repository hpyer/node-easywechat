'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __importDefault(require("../../MiniProgram/Application"));
const AccessToken_1 = __importDefault(require("../Auth/AccessToken"));
const AuthClient_1 = __importDefault(require("./Auth/AuthClient"));
class MiniProgram extends Application_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
        this.auth = null;
        this.registerProviders();
    }
    registerProviders() {
        this.registerCommonProviders();
        this.offsetSet('access_token', function (app) {
            return new AccessToken_1.default(app);
        });
        this.offsetSet('auth', function (app) {
            return new AuthClient_1.default(app);
        });
    }
}
exports.default = MiniProgram;
;
