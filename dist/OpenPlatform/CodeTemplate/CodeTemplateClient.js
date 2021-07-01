'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class CodeTemplateClient extends BaseClient_1.default {
    /**
     * 获取代码草稿列表
     */
    getDrafts() {
        return this.httpGet('wxa/gettemplatedraftlist');
    }
    /**
     * 将草稿添加到代码模板库
     * @param draftId 草稿 ID
     * @param templateType 默认值是0，对应普通模板；可选1，对应标准模板库
     */
    createFromDraft(draftId, templateType = 0) {
        return this.httpPostJson('wxa/addtotemplate', {
            draft_id: draftId,
            template_type: templateType,
        });
    }
    /**
     * 获取代码模板列表
     * @param templateType 默认值是0，对应普通模板；可选1，对应标准模板库
     */
    list(templateType = null) {
        let query = null;
        if (templateType !== null) {
            query = {
                template_type: templateType,
            };
        }
        return this.httpGet('wxa/gettemplatelist', query);
    }
    /**
     * 删除指定代码模板
     * @param templateId 模板 ID
     */
    delete(templateId) {
        return this.httpPostJson('wxa/deletetemplate', {
            template_id: templateId,
        });
    }
}
exports.default = CodeTemplateClient;
