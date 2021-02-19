import { Message } from '.';
export declare class Image extends Message {
    protected type: string;
    protected properties: Array<string>;
    constructor(base64: string, md5: string);
}
