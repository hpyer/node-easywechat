import { Message } from './Message';
export declare class Text extends Message {
    protected type: string;
    protected properties: Array<string>;
    constructor(content: string);
    toXmlArray(): object;
}
