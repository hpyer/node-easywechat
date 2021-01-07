import { Message } from "../../Core/Messages";
import CustomerServiceClient from "./CustomerServiceClient";
export default class Messenger {
    protected _message: Message;
    protected _to: string;
    protected account: string;
    protected client: CustomerServiceClient;
    constructor(client: CustomerServiceClient);
    message(message: any): this;
    by(account: string): this;
    from(account: string): this;
    to(openid: string): this;
    send(): Promise<any>;
    getAccount(): string;
    getTo(): string;
    getMessage(): Message;
    getClient(): CustomerServiceClient;
}
