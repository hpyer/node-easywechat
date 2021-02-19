import { Message } from '.';
export declare class Markdown extends Message {
    protected type: string;
    protected properties: Array<string>;
    constructor(content: string);
}
