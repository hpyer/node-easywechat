import BaseClient from '../../Core/BaseClient';
export default class MessageTemplateClient extends BaseClient {
    protected required: string[];
    protected textMessage: object;
    protected imageMessage: object;
    protected linkMessage: object;
    protected miniprogramMessage: object;
    create(msgTemplate: object): Promise<any>;
    update(templateId: string, msgTemplate: object): Promise<any>;
    get(templateId: string): Promise<any>;
    delete(templateId: string): Promise<any>;
    protected formatMessage(data: object): object;
    protected formatFields(data: object, defaults: object): object;
}
