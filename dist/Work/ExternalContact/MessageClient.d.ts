import BaseClient from '../../Core/BaseClient';
export default class MessageClient extends BaseClient {
    protected required: string[];
    protected textMessage: object;
    protected imageMessage: object;
    protected linkMessage: object;
    protected miniprogramMessage: object;
    submit(msg: object): Promise<any>;
    get(msgId: string): Promise<any>;
    sendWelcome(welcomeCode: string, msg: object): Promise<any>;
    protected formatMessage(data: object): object;
    protected formatFields(data: object, defaults: object): object;
}
