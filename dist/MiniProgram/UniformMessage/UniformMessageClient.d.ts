import BaseClient from '../../OfficialAccount/TemplateMessage/TemplateMessageClient';
export default class UniformMessageClient extends BaseClient {
    API_SEND: string;
    protected message: {
        touser: string;
    };
    protected weappMessage: {
        template_id: string;
        page: string;
        form_id: string;
        data: string;
        emphasis_keyword: string;
    };
    protected mpMessage: {
        appid: string;
        template_id: string;
        url: string;
        miniprogram: string;
        data: string;
    };
    protected required: string[];
    protected formatMessage(data: object): object;
    protected formatWeappMessage(data: object): object;
    protected formatMpMessage(data: object): object;
    protected baseFormat(data?: object, defaultData?: object): object;
}
