import { Message } from './Message';
export declare class Raw extends Message {
    protected type: string;
    protected properties: Array<string>;
    constructor(content: string);
    toXmlArray(): object;
    transformForJsonRequest(appends?: object, withType?: boolean): object;
    toString(): any;
}
