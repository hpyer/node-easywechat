'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class TagClient extends BaseClient_1.default {
    create(name) {
        return this.httpPostJson('cgi-bin/tags/create', {
            tag: {
                name,
            }
        });
    }
    list() {
        return this.httpGet('cgi-bin/tags/get');
    }
    update(id, name) {
        return this.httpPostJson('cgi-bin/tags/update', {
            tag: {
                id,
                name,
            }
        });
    }
    delete(id) {
        return this.httpPostJson('cgi-bin/tags/delete', {
            tag: {
                id,
            }
        });
    }
    userTags(openid) {
        return this.httpPostJson('cgi-bin/tags/getidlist', {
            openid,
        });
    }
    usersOfTag(tagid, next_openid) {
        return this.httpPostJson('cgi-bin/user/tag/get', {
            tagid,
            next_openid,
        });
    }
    tagUsers(openid_list, tagid) {
        return this.httpPostJson('cgi-bin/tags/members/batchtagging', {
            openid_list,
            tagid,
        });
    }
    untagUsers(openid_list, tagid) {
        return this.httpPostJson('cgi-bin/tags/members/batchuntagging', {
            openid_list,
            tagid,
        });
    }
}
exports.default = TagClient;
