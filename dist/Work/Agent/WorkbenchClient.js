'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class WorkbenchClient extends BaseClient_1.default {
    /**
     * 设置应用在工作台展示的模版
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/92535#设置应用在工作台展示的模版
     * @param params
     * @returns
     */
    setWorkbenchTemplate(params) {
        return this.httpPostJson('cgi-bin/agent/set_workbench_template', params);
    }
    /**
     * 获取应用在工作台展示的模版
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/92535#获取应用在工作台展示的模版
     * @param agentId
     * @returns
     */
    getWorkbenchTemplate(agentId) {
        let params = {
            agentid: agentId,
        };
        return this.httpPostJson('cgi-bin/agent/get_workbench_template', params);
    }
    /**
     * 设置应用在用户工作台展示的数据
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/92535#设置应用在用户工作台展示的数据
     * @param params
     * @returns
     */
    setWorkbenchData(params) {
        return this.httpPostJson('cgi-bin/agent/set_workbench_data', params);
    }
}
exports.default = WorkbenchClient;
