import { Message } from './Message';
export declare class DeviceText extends Message {
    protected type: string;
    protected properties: Array<string>;
    toXmlArray(): object;
}
