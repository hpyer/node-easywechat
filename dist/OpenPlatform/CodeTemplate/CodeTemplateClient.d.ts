import BaseClient from '../../Core/BaseClient';
export default class CodeTemplateClient extends BaseClient {
    getDrafts(): Promise<any>;
    createFromDraft(draftId: number): Promise<any>;
    list(): Promise<any>;
    delete(templateId: string): Promise<any>;
}
