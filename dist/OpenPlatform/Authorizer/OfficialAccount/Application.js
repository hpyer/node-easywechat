'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __importDefault(require("../../../OfficialAccount/Application"));
const MiniProgramClient_1 = __importDefault(require("./MiniProgram/MiniProgramClient"));
class OfficialAccount extends Application_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
        this.mini_program = null;
        this.registerProviders();
    }
    registerProviders() {
        this.registerCommonProviders();
        this.offsetSet('mini_program', function (app) {
            return new MiniProgramClient_1.default(app);
        });
    }
}
exports.default = OfficialAccount;
;
