import { Message } from './Message';
export declare class Media extends Message {
    protected properties: Array<string>;
    protected required: Array<string>;
    constructor(mediaId: string, type?: string, attributes?: object);
    getMediaId(): string;
    toXmlArray(): object;
}
