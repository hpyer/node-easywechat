import { Message } from './Message';
export declare class Article extends Message {
    protected type: string;
    protected properties: Array<string>;
    protected required: Array<string>;
    protected jsonAliases: object;
}
