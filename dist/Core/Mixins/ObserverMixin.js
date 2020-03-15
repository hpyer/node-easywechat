'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class ObserverMixin {
    constructor() {
        this.handlers = {};
    }
    push(handler, condition = '*') {
        if (!this.handlers[condition]) {
            this.handlers[condition] = [];
        }
        this.handlers[condition].push(handler);
    }
    notify(event, payload) {
        let result = null;
        for (let condition in this.handlers) {
            let handlers = this.handlers[condition];
            if (condition == '*' || (Number(condition) & event) == event) {
                let isBreak = false;
                for (let i = 0; i < handlers.length; i++) {
                    let handler = handlers[i];
                    let res = this._callHandler(handler, payload);
                    if (res === false) {
                        isBreak = true;
                        break;
                    }
                    else {
                        result = res;
                    }
                }
                if (isBreak) {
                    break;
                }
            }
        }
        return result;
    }
    _callHandler(handler, payload) {
        try {
            if (typeof handler == 'function') {
                return handler.apply(this, [payload]);
            }
        }
        catch (e) {
            if (this['app']) {
                this['app']['log']('Observer.notify:', e);
            }
        }
        return false;
    }
}
exports.default = ObserverMixin;
;
