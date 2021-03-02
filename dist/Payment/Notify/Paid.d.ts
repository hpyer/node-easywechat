import Handler from './Handler';
import Response from "../../Core/Http/Response";
import { PaymentPaidHandler } from '../../Core/Types';
export default class PaidHandler extends Handler {
    handle(closure: PaymentPaidHandler): Promise<Response>;
}
