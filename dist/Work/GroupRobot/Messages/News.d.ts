import { Message, NewsItem } from '.';
export declare class News extends Message {
    protected type: string;
    protected properties: Array<string>;
    constructor(items: Array<NewsItem>);
    propertiesToArray(data: any, aliases?: any[]): object;
}
