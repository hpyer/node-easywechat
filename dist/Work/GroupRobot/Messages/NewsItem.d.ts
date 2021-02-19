import { Message } from '.';
export declare class NewsItem extends Message {
    protected type: string;
    protected properties: Array<string>;
    toJsonArray(): object;
}
