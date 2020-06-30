import { Message } from './Message';
export declare class Transfer extends Message {
    protected type: string;
    protected properties: Array<string>;
    constructor(account: string);
    toXmlArray(): object;
}
