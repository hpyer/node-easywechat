'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class CalendarClient extends BaseClient_1.default {
    add(calendar) {
        let params = {
            calendar: calendar,
        };
        return this.httpPostJson('cgi-bin/oa/calendar/add', params);
    }
    update(id, calendar) {
        let params = Utils_1.merge({
            cal_id: id,
        }, calendar);
        return this.httpPostJson('cgi-bin/oa/calendar/update', params);
    }
    get(ids) {
        return this.httpPostJson('cgi-bin/oa/calendar/get', {
            cal_id_list: ids,
        });
    }
    delete(id) {
        return this.httpPostJson('cgi-bin/oa/calendar/del', {
            cal_id: id,
        });
    }
}
exports.default = CalendarClient;
