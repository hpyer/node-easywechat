'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class OAClient extends BaseClient_1.default {
    checkinRecords(startTime, endTime, userList, type = 3) {
        let params = {
            opencheckindatatype: type,
            starttime: startTime,
            endtime: endTime,
            useridlist: userList,
        };
        return this.httpPostJson('cgi-bin/checkin/getcheckindata', params);
    }
    checkinRules(datetime, userList) {
        let params = {
            datetime: datetime,
            useridlist: userList,
        };
        return this.httpPostJson('cgi-bin/checkin/getcheckinoption', params);
    }
    approvalTemplate(templateId) {
        let params = {
            template_id: templateId,
        };
        return this.httpPostJson('cgi-bin/oa/gettemplatedetail', params);
    }
    createApproval(data) {
        return this.httpPostJson('cgi-bin/oa/applyevent', data);
    }
    approvalNumbers(startTime, endTime, nextCursor = 0, size = 100, filters = []) {
        let params = {
            starttime: startTime,
            endtime: endTime,
            cursor: nextCursor,
            size: size > 100 ? 100 : size,
            filters: filters,
        };
        return this.httpPostJson('cgi-bin/oa/getapprovalinfo', params);
    }
    approvalDetail(number) {
        let params = {
            sp_no: number,
        };
        return this.httpPostJson('cgi-bin/oa/getapprovaldetail', params);
    }
    approvalRecords(startTime, endTime, nextNumber = null) {
        let params = {
            starttime: startTime,
            endtime: endTime,
            next_spnum: nextNumber,
        };
        return this.httpPostJson('cgi-bin/corp/getapprovaldata', params);
    }
    dialRecords(startTime, endTime, offset = 0, limit = 100) {
        let params = {
            start_time: startTime,
            end_time: endTime,
            offset: offset,
            limit: limit,
        };
        return this.httpPostJson('cgi-bin/dial/get_dial_record', params);
    }
}
exports.default = OAClient;
