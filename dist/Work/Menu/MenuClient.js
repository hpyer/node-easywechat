'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class MenuClient extends BaseClient_1.default {
    get() {
        return this.httpGet('cgi-bin/menu/get', {
            agentid: this.app.config.agent_id,
        });
    }
    create(data) {
        return this.httpPostJson('cgi-bin/menu/create', data, {
            agentid: this.app.config.agent_id,
        });
    }
    delete() {
        return this.httpGet('cgi-bin/menu/delete', {
            agentid: this.app.config.agent_id,
        });
    }
}
exports.default = MenuClient;
