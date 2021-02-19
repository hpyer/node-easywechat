import { Message } from "../../Core/Messages";
import MessageClient from "./MessageClient";
export default class Messenger {
    protected message: Message;
    protected client: MessageClient;
    to: object;
    agentId: number;
    secretive: boolean;
    constructor(client: MessageClient);
    setMessage(message: Message): this;
    ofAgent(agentId: number): this;
    setSecretive(): this;
    protected setRecipients(ids: Array<string> | string, key: string): this;
    toUser(userIds: Array<string> | string): this;
    toParty(partyIds: Array<string> | string): this;
    toTag(tagIds: Array<string> | string): this;
    send(message?: Message): Promise<any>;
}
