import BaseClient from '../../Core/BaseClient';
export default class ChatClient extends BaseClient {
    get(chatId: string): Promise<any>;
    create(data: object): Promise<any>;
    update(chatId: string, data: object): Promise<any>;
    send(message: object): Promise<any>;
}
