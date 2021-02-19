import BaseClient from '../../Core/BaseClient';
import { Message } from './Messages';
import Messenger from './Messenger';
export default class GroupRobotClient extends BaseClient {
    message(message: Message): Messenger;
    send(key: string, data: object): Promise<any>;
}
