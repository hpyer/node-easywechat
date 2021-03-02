import Handler from './Handler';
import Response from '../../Core/Http/Response';
import { PaymentScannedHandler } from '../../Core/Types';
export default class ScannedHandler extends Handler {
    protected check: Boolean;
    protected alert: string;
    setAlert(message: string): void;
    handle(closure: PaymentScannedHandler): Promise<Response>;
}
