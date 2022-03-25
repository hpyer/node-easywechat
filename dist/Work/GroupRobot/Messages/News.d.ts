import { Message } from './Message';
import { NewsItem } from './NewsItem';
export declare class News extends Message {
    protected type: string;
    protected properties: Array<string>;
    constructor(items: Array<NewsItem>);
    propertiesToObject(data: any, aliases?: any[]): object;
}
