'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class ActivityMessageClient extends BaseClient_1.default {
    createActivityId() {
        return this.httpGet('cgi-bin/message/wxopen/activityid/create');
    }
    updateMessage(activityId, state = 0, params = {}) {
        if (!Utils_1.inArray(state, [0, 1, '0', '1'])) {
            throw new Error('"state" should be "0" or "1".');
        }
        params = {
            activity_id: activityId,
            target_state: state,
            template_info: {
                parameter_list: this.formatParameters(params),
            },
        };
        return this.httpPostJson('cgi-bin/message/wxopen/updatablemsg/send', params);
    }
    formatParameters(params) {
        let formatted = [];
        for (let key in params) {
            if (Utils_1.inArray(key, ['member_count', 'room_limit', 'path', 'version_type'])) {
                continue;
            }
            if (key === 'version_type' && !Utils_1.inArray(params[key], ['develop', 'trial', 'release'])) {
                throw new Error('Invalid value of attribute "version_type".');
            }
            formatted.push({
                name: key,
                value: params[key],
            });
        }
        return formatted;
    }
}
exports.default = ActivityMessageClient;
