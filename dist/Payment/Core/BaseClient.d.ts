import BaseApplication from '../../Core/BaseApplication';
import HttpMixin from '../../Core/Mixins/HttpMixin';
declare class BaseClient implements HttpMixin {
    protected app: BaseApplication;
    protected serverIp: String;
    constructor(app: BaseApplication);
    protected prepends(): {};
    protected request(endpoint: string, params?: object, method?: string, options?: object, returnResponse?: boolean): Promise<any>;
    parseXml(xml: string): Promise<any>;
    protected safeRequest(endpoint: string, params?: object, method?: string, options?: object): Promise<any>;
    protected requestRaw(endpoint: string, params?: object, method?: string, options?: object): Promise<any>;
    protected wrap(endpoint: string): string;
    getServerIp(): Promise<String>;
    getClientIp(): string;
    doRequest(payload: object, returnResponse?: Boolean): Promise<any>;
}
export default BaseClient;
