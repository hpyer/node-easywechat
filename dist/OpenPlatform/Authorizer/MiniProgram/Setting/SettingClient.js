'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../../../Core/BaseClient");
class SettingClient extends BaseClient_1.default {
    getAllCategories() {
        return this.httpPostJson('cgi-bin/wxopen/getallcategories');
    }
    addCategories(categories) {
        return this.httpPostJson('cgi-bin/wxopen/addcategory', {
            categories: categories,
        });
    }
    deleteCategories(firstId, secondId) {
        return this.httpPostJson('cgi-bin/wxopen/deletecategory', {
            first: firstId,
            second: secondId,
        });
    }
    getCategories() {
        return this.httpPostJson('cgi-bin/wxopen/getcategory');
    }
    updateCategory(category) {
        return this.httpPostJson('cgi-bin/wxopen/modifycategory', category);
    }
    setNickname(nickname, idCardMediaId = '', licenseMediaId = '', otherStuffs = []) {
        let params = {
            nick_name: nickname,
            id_card: idCardMediaId,
            license: licenseMediaId,
        };
        for (let i = 0; i < otherStuffs.length; i++) {
            params['naming_other_stuff_' + (i + 1)] = otherStuffs[i];
        }
        return this.httpPostJson('wxa/setnickname', params);
    }
    getNicknameAuditStatus(auditId) {
        return this.httpPostJson('wxa/api_wxa_querynickname', {
            audit_id: auditId,
        });
    }
    isAvailableNickname(nickname) {
        return this.httpPostJson('cgi-bin/wxverify/checkwxverifynickname', {
            nick_name: nickname,
        });
    }
    getSearchStatus() {
        return this.httpGet('wxa/getwxasearchstatus');
    }
    setSearchable() {
        return this.httpPostJson('wxa/changewxasearchstatus', {
            status: '0',
        });
    }
    setUnsearchable() {
        return this.httpPostJson('wxa/changewxasearchstatus', {
            status: '1',
        });
    }
    getDisplayedOfficialAccount() {
        return this.httpGet('wxa/getshowwxaitem');
    }
    setDisplayedOfficialAccount(appid = null) {
        return this.httpPostJson('wxa/updateshowwxaitem', {
            appid: appid || null,
            wxa_subscribe_biz_flag: appid ? 1 : 0,
        });
    }
    getDisplayableOfficialAccounts(page, num) {
        return this.httpGet('wxa/getwxamplinkforshow', {
            page,
            num,
        });
    }
}
exports.default = SettingClient;
