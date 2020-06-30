import Handler from './Handler';
import Response from '../../Core/Http/Response';
export default class ScannedHandler extends Handler {
    protected check: Boolean;
    protected alert: string;
    setAlert(message: string): void;
    handle(closure: Function): Promise<Response>;
}
