import { Message } from "./Messages";
import MessageClient from "./GroupRobotClient";
export default class Messenger {
    protected message: Message;
    protected client: MessageClient;
    groupKey: string;
    constructor(client: MessageClient);
    setMessage(message: Message): this;
    toGroup(groupKey: string): this;
    send(message?: Message): Promise<any>;
}
