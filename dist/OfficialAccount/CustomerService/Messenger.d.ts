import { Message } from "../../Core/Messages";
import CustomerServiceClient from "./CustomerServiceClient";
export default class Messenger {
    protected _message: Message;
    protected _to: string;
    protected account: string;
    protected client: CustomerServiceClient;
    constructor(client: CustomerServiceClient);
    message(message: any): object;
    by(account: string): object;
    from(account: string): object;
    to(openid: string): object;
    send(): Promise<any>;
    getAccount(): string;
    getTo(): string;
    getMessage(): Message;
    getClient(): CustomerServiceClient;
}
