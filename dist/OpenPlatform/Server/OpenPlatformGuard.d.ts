import ServerGuard from '../../Core/ServerGuard';
import Response from '../../Core/Http/Response';
export declare const EVENT_AUTHORIZED = "authorized";
export declare const EVENT_UNAUTHORIZED = "unauthorized";
export declare const EVENT_UPDATE_AUTHORIZED = "updateauthorized";
export declare const EVENT_COMPONENT_VERIFY_TICKET = "component_verify_ticket";
export declare const EVENT_THIRD_FAST_REGISTERED = "notify_third_fasteregister";
export default class OpenPlatformGuard extends ServerGuard {
    protected resolve(): Promise<Response>;
    protected registerHandlers(): void;
}
