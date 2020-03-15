'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../../../Core/BaseClient");
class Client extends BaseClient_1.default {
    commit(templateId, extJson, version, description) {
        return this.httpPostJson('wxa/commit', {
            template_id: templateId,
            ext_json: extJson,
            user_version: version,
            user_desc: description,
        });
    }
    getQrCode(path) {
        return this.requestRaw({
            url: 'wxa/get_qrcode',
            method: 'GET',
            qs: {
                path,
            },
        });
    }
    getCategory() {
        return this.httpGet('wxa/get_category');
    }
    getPage() {
        return this.httpGet('wxa/get_page');
    }
    submitAudit(itemList, feedbackInfo = null, feedbackStuff = null) {
        return this.httpPostJson('wxa/submit_audit', {
            item_list: itemList,
            feedback_info: feedbackInfo,
            feedback_stuff: feedbackStuff,
        });
    }
    getAuditStatus(auditId) {
        return this.httpPostJson('wxa/get_auditstatus', {
            auditid: auditId,
        });
    }
    getLatestAuditStatus() {
        return this.httpGet('wxa/get_latest_auditstatus');
    }
    release() {
        return this.httpPostJson('wxa/release');
    }
    withdrawAudit() {
        return this.httpGet('wxa/undocodeaudit');
    }
    rollbackRelease() {
        return this.httpGet('wxa/revertcoderelease');
    }
    changeVisitStatus(action) {
        return this.httpPostJson('wxa/change_visitstatus', {
            action,
        });
    }
    grayRelease(grayPercentage) {
        return this.httpPostJson('wxa/grayrelease', {
            gray_percentage: grayPercentage,
        });
    }
    revertGrayRelease() {
        return this.httpGet('wxa/revertgrayrelease');
    }
    getGrayRelease() {
        return this.httpGet('wxa/getgrayreleaseplan');
    }
    getSupportVersion() {
        return this.httpPostJson('cgi-bin/wxopen/getweappsupportversion');
    }
    setSupportVersion(version) {
        return this.httpPostJson('cgi-bin/wxopen/setweappsupportversion', {
            version,
        });
    }
    queryQuota() {
        return this.httpGet('wxa/queryquota');
    }
    speedupAudit(auditId) {
        return this.httpPostJson('wxa/speedupaudit', {
            auditid: auditId,
        });
    }
}
exports.default = Client;
