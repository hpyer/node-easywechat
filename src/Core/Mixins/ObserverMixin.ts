'use strict';

export default class ObserverMixin
{
  private handlers: Object = {}

  push (handler: Function, condition: string = '*')
  {
    if (!this.handlers[condition]) {
      this.handlers[condition] = [];
    }
    this.handlers[condition].push(handler);
  }

  notify (event: number, payload)
  {
    let result = null;

    for (let condition in this.handlers) {
      let handlers = this.handlers[condition];
      if (condition == '*' || (Number(condition) & event) == event) {
        let isBreak = false;
        for (let i=0; i<handlers.length; i++) {
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

  _callHandler (handler: Function, payload: any)
  {
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
};
