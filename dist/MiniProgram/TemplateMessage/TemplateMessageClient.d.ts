import BaseClient from '../../OfficialAccount/TemplateMessage/TemplateMessageClient';
export default class TemplateMessageClient extends BaseClient {
    API_SEND: string;
    protected message: {
        touser: string;
        template_id: string;
        page: string;
        form_id: string;
        data: string;
        emphasis_keyword: string;
    };
    protected required: string[];
    list(offset: Number, count: Number): Promise<any>;
    get(id: string): Promise<any>;
    add(id: string, keyword: Array<Number>): Promise<any>;
    delete(template_id: string): Promise<any>;
    getTemplates(offset: Number, count: Number): Promise<any>;
}
