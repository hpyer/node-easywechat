import BaseClient from '../../Core/BaseClient';
export default class CodeTemplateClient extends BaseClient {
    /**
     * 获取代码草稿列表
     */
    getDrafts(): Promise<any>;
    /**
     * 将草稿添加到代码模板库
     * @param draftId 草稿 ID
     */
    createFromDraft(draftId: number): Promise<any>;
    /**
     * 获取代码模板列表
     */
    list(): Promise<any>;
    /**
     * 删除指定代码模板
     * @param templateId 模板 ID
     */
    delete(templateId: string): Promise<any>;
}
