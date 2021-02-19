'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class AgentClient extends BaseClient_1.default {
    get(agentId) {
        let params = {
            agentid: agentId,
        };
        return this.httpGet('cgi-bin/agent/get', params);
    }
    set(agentId, attributes) {
        let params = Utils_1.merge({
            agentid: agentId,
        }, attributes);
        return this.httpPostJson('cgi-bin/agent/set', params);
    }
    list() {
        return this.httpGet('cgi-bin/agent/list');
    }
}
exports.default = AgentClient;
