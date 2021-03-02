import Handler from './Handler';
import Response from '../../Core/Http/Response';
import { PaymentRefundedHandler } from '../../Core/Types';
export default class RefundedHandler extends Handler {
    handle(closure: PaymentRefundedHandler): Promise<Response>;
    reqInfo(): Promise<any>;
    parseXml(xml: string): Promise<any>;
}
