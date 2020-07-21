/// <reference types="node" />
import { IncomingMessage } from 'http';
import RequestInterface from '../Contracts/RequestInterface';
export default class Request implements RequestInterface {
    protected _req: IncomingMessage;
    protected _uri: string;
    protected _method: string;
    protected _headers: object;
    protected _get: object;
    protected _post: object;
    protected _content: Buffer;
    protected _contentType: string;
    protected _ip: string;
    constructor(req?: IncomingMessage, content?: Buffer | object | string);
    isValid(): Boolean;
    getMethod(): string;
    get(key: string): Promise<any>;
    post(key: string): Promise<any>;
    getContent(): Promise<Buffer>;
    getUri(): string;
    getContentType(): string;
    getHeaders(): object;
    getClientIp(): string;
}
