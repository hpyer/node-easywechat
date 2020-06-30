import { Media } from './Media';
export declare class Video extends Media {
    protected type: string;
    protected properties: Array<string>;
    constructor(mediaId: string, attributes?: object);
    toXmlArray(): object;
}
