import Handler from './Handler';
import Response from "../../Core/Http/Response";
export default class PaidHandler extends Handler {
    handle(closure: Function): Promise<Response>;
}
