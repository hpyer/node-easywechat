import BaseClient from '../../Core/BaseClient';
import { Message } from '../../Core/Messages';
import Messenger from './Messenger';
export default class MessageClient extends BaseClient {
    message(message: Message): Messenger;
    send(data: object): Promise<any>;
}
