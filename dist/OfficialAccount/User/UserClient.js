'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class UserClient extends BaseClient_1.default {
    get(openid, lang = 'zh_CN') {
        return this.httpGet('cgi-bin/user/info', {
            openid,
            lang,
        });
    }
    select(openids, lang = 'zh_CN') {
        let user_list = [];
        openids.forEach((openid) => {
            user_list.push({
                openid,
                lang,
            });
        });
        return this.httpPostJson('cgi-bin/user/info/batchget', {
            user_list
        });
    }
    list(next_openid) {
        return this.httpGet('cgi-bin/user/get', {
            next_openid,
        });
    }
    remark(openid, remark) {
        return this.httpPostJson('cgi-bin/user/info/updateremark', {
            openid,
            remark,
        });
    }
    blacklist(begin_openid) {
        return this.httpPostJson('cgi-bin/tags/members/getblacklist', {
            begin_openid,
        });
    }
    block(openid_list) {
        return this.httpPostJson('cgi-bin/tags/members/batchblacklist', {
            openid_list,
        });
    }
    unblock(openid_list) {
        return this.httpPostJson('cgi-bin/tags/members/batchunblacklist', {
            openid_list,
        });
    }
    changeOpenid(from_appid, openid_list) {
        return this.httpPostJson('cgi-bin/changeopenid', {
            from_appid,
            openid_list,
        });
    }
}
exports.default = UserClient;
