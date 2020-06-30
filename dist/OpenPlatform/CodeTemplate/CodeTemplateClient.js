'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class CodeTemplateClient extends BaseClient_1.default {
    getDrafts() {
        return this.httpGet('wxa/gettemplatedraftlist');
    }
    createFromDraft(draftId) {
        return this.httpPostJson('wxa/addtotemplate', {
            draft_id: draftId,
        });
    }
    list() {
        return this.httpGet('wxa/gettemplatelist');
    }
    delete(templateId) {
        return this.httpPostJson('wxa/deletetemplate', {
            template_id: templateId,
        });
    }
}
exports.default = CodeTemplateClient;
