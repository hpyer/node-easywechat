'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class LiveClient extends BaseClient_1.default {
    getUserLivingId(userId, beginTime, endTime, nextKey = '0', limit = 100) {
        let params = {
            userid: userId,
            begin_time: beginTime,
            end_time: endTime,
            next_key: nextKey,
            limit: limit,
        };
        return this.httpPostJson('cgi-bin/living/get_user_livingid', params);
    }
    getLiving(livingId) {
        let params = {
            livingid: livingId,
        };
        return this.httpGet('cgi-bin/living/get_living_info', params);
    }
    getWatchStat(livingId, nextKey = '0') {
        let params = {
            livingid: livingId,
            next_key: nextKey,
        };
        return this.httpPostJson('cgi-bin/living/get_watch_stat', params);
    }
}
exports.default = LiveClient;
