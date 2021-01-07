export default abstract class RequestInterface {
    getMethod(): string;
    get(key: string): Promise<any>;
    post(key: string): Promise<any>;
    getContent(): Promise<any>;
    getUri(): string;
    getContentType(): string;
    getHeaders(): object;
    getClientIp(): string;
}
