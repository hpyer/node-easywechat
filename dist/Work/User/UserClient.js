'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class UserClient extends BaseClient_1.default {
    create(data) {
        return this.httpPostJson('cgi-bin/user/create', data);
    }
    update(id, data) {
        return this.httpPostJson('cgi-bin/user/update', Utils_1.merge({
            userid: id,
        }, data));
    }
    delete(userId) {
        if (Utils_1.isArray(userId)) {
            return this.batchDelete(userId);
        }
        return this.httpGet('cgi-bin/user/delete', {
            userid: userId,
        });
    }
    batchDelete(userIds) {
        return this.httpPostJson('cgi-bin/user/batchdelete', {
            useridlist: userIds,
        });
    }
    get(userId) {
        return this.httpGet('cgi-bin/user/get', {
            userid: userId,
        });
    }
    getDepartmentUsers(departmentId, fetchChild) {
        return this.httpGet('cgi-bin/user/simplelist', {
            department_id: departmentId,
            fetch_child: fetchChild ? 1 : 0,
        });
    }
    getDetailedDepartmentUsers(departmentId, fetchChild) {
        return this.httpGet('cgi-bin/user/list', {
            department_id: departmentId,
            fetch_child: fetchChild ? 1 : 0,
        });
    }
    userIdToOpenid(userId, agentId) {
        return this.httpPostJson('cgi-bin/user/convert_to_openid', {
            userid: userId,
            agentid: agentId,
        });
    }
    openidToUserId(openid) {
        return this.httpPostJson('cgi-bin/user/convert_to_userid', {
            openid,
        });
    }
    mobileToUserId(mobile) {
        return this.httpPostJson('cgi-bin/user/getuserid', {
            mobile,
        });
    }
    accept(userId) {
        return this.httpGet('cgi-bin/user/authsucc', {
            userid: userId,
        });
    }
    invite(params) {
        return this.httpPostJson('cgi-bin/batch/invite', params);
    }
    getInvitationQrCode(sizeType = 1) {
        if (Utils_1.inArray(sizeType, [1, 2, 3, 4])) {
            throw new Error('The sizeType must be 1, 2, 3, 4.');
        }
        return this.httpGet('cgi-bin/corp/get_join_qrcode', {
            size_type: sizeType,
        });
    }
}
exports.default = UserClient;
