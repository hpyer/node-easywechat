import Handler from './Handler';
import Response from '../../Core/Http/Response';
export default class RefundedHandler extends Handler {
    handle(closure: Function): Promise<Response>;
    reqInfo(): Promise<any>;
    parseXml(xml: string): Promise<any>;
}
