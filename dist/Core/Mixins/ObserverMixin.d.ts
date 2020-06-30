export default class ObserverMixin {
    private handlers;
    push(handler: Function, condition?: string): void;
    notify(event: number, payload: any): any;
    _callHandler(handler: Function, payload: any): any;
}
