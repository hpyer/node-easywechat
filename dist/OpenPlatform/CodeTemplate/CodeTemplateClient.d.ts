import BaseClient from '../../Core/BaseClient';
export default class CodeTemplateClient extends BaseClient {
    /**
     * 获取代码草稿列表
     */
    getDrafts(): Promise<any>;
    /**
     * 将草稿添加到代码模板库
     * @param draftId 草稿 ID
     * @param templateType 默认值是0，对应普通模板；可选1，对应标准模板库
     */
    createFromDraft(draftId: number, templateType?: number): Promise<any>;
    /**
     * 获取代码模板列表
     * @param templateType 默认值是0，对应普通模板；可选1，对应标准模板库
     */
    list(templateType?: number): Promise<any>;
    /**
     * 删除指定代码模板
     * @param templateId 模板 ID
     */
    delete(templateId: string): Promise<any>;
}
