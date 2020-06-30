/// <reference types="node" />
export default class Response {
    protected content: Buffer;
    protected statusCode: number;
    protected headers: object;
    constructor(content: Buffer, statusCode?: number, headers?: object);
    setContent(content: Buffer): void;
    getContent(): Buffer;
    setStatusCode(statusCode: number): void;
    getStatusCode(): number;
    addHeader(key: string, val: string): void;
    setHeaders(headers: object): void;
    getHeaders(): object;
    getHeader(key: string): string;
}
