'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class ScheduleClient extends BaseClient_1.default {
    add(schedule) {
        return this.httpPostJson('cgi-bin/oa/schedule/add', {
            schedule
        });
    }
    update(id, schedule) {
        return this.httpPostJson('cgi-bin/oa/schedule/update', {
            schedule: (0, Utils_1.merge)({
                schedule_id: id,
            }, schedule)
        });
    }
    get(ids) {
        return this.httpPostJson('cgi-bin/oa/schedule/get', {
            schedule_id_list: ids,
        });
    }
    getByCalendar(calendarId, offset = 0, limit = 500) {
        return this.httpPostJson('cgi-bin/oa/schedule/get_by_calendar', {
            cal_id: calendarId,
            offset,
            limit,
        });
    }
    delete(id) {
        return this.httpPostJson('cgi-bin/oa/schedule/del', {
            schedule_id: id,
        });
    }
}
exports.default = ScheduleClient;
