import BaseClient from '../../Core/BaseClient';
export default class SubscribeMessageClient extends BaseClient {
    protected message: {
        touser: string;
        template_id: string;
        page: string;
        data: string;
    };
    protected required: string[];
    send(data: object): Promise<any>;
    protected formatMessage(data: object): any;
    protected formatData(data: object): object;
    addTemplate(tid: string, kidList: Array<Number>, sceneDesc?: string): Promise<any>;
    deleteTemplate(id: string): Promise<any>;
    getTemplateKeywords(tid: string): Promise<any>;
    getTemplateTitles(ids: Array<string>, start?: Number, limit?: Number): Promise<any>;
    getTemplates(): Promise<any>;
    getCategory(): Promise<any>;
}
