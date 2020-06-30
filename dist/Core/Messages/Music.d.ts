import { Message } from './Message';
export declare class Music extends Message {
    protected type: string;
    protected properties: Array<string>;
    protected jsonAliases: object;
    toXmlArray(): object;
}
