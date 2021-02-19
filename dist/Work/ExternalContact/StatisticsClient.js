'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class StatisticsClient extends BaseClient_1.default {
    userBehavior(userIds, from, to) {
        let params = {
            userid: userIds,
            start_time: from,
            end_time: to,
        };
        return this.httpPostJson('cgi-bin/externalcontact/get_user_behavior_data', params);
    }
}
exports.default = StatisticsClient;
