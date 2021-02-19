'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class TagClient extends BaseClient_1.default {
    list() {
        return this.httpGet('cgi-bin/tag/list');
    }
    create(tagName, tagId = null) {
        return this.httpPostJson('cgi-bin/tag/create', {
            tagname: tagName,
            tagid: tagId,
        });
    }
    update(tagId, tagName) {
        return this.httpPostJson('cgi-bin/tag/update', {
            tagid: tagId,
            tagname: tagName,
        });
    }
    delete(tagId) {
        return this.httpGet('cgi-bin/tag/delete', {
            tagid: tagId,
        });
    }
    get(tagId) {
        return this.httpGet('cgi-bin/tag/get', {
            tagid: tagId,
        });
    }
    tagUsers(tagId, userList) {
        return this.tagOrUntagUsers('cgi-bin/tag/addtagusers', tagId, userList);
    }
    tagDepartments(tagId, partyList) {
        return this.tagOrUntagUsers('cgi-bin/tag/addtagusers', tagId, [], partyList);
    }
    untagUsers(tagId, userList) {
        return this.tagOrUntagUsers('cgi-bin/tag/deltagusers', tagId, userList);
    }
    untagDepartments(tagId, partyList) {
        return this.tagOrUntagUsers('cgi-bin/tag/deltagusers', tagId, [], partyList);
    }
    tagOrUntagUsers(endpoint, tagId, userList = [], partyList = []) {
        return this.httpPostJson(endpoint, {
            tagid: tagId,
            userlist: userList,
            partylist: partyList,
        });
    }
}
exports.default = TagClient;
