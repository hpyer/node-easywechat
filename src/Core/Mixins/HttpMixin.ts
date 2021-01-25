'use strict';

import Request from 'request';
import BaseApplicatioin from '../BaseApplication';
import { merge } from '../Utils';

export default class HttpMixin
{

  doRequest(payload: object, returnResponse: Boolean = false): Promise<any>
  {
    payload = payload || {};
    if (typeof payload['baseUrl'] == 'undefined' && this['baseUrl']) {
      payload['baseUrl'] = this['baseUrl'];
    }
    if (payload['url'].substr(0, 7) == 'http://' || payload['url'].substr(0, 8) == 'https://') {
      delete payload['baseUrl'];
    }
    if (typeof payload['method'] == 'undefined') {
      payload['method'] = 'post';
    }
    let method = payload['method'].toLowerCase();
    if (this['app'] && this['app'] instanceof BaseApplicatioin) {
      payload = merge(merge({}, this['app'].config.http || {}), payload);
    }
    this['app']['log']('debug', 'doRequest', payload);
    return new Promise(
      (resolve, reject) => {
        Request[method](
          payload,
          function (error, response, body) {
            if (error) {
              reject(error);
            }
            else {
              if (returnResponse) {
                resolve(response);
              }
              else {
                try {
                  body = JSON.parse(body);
                }
                catch (e) { }
                resolve(body);
              }
            }
          }
        );
      }
    );
  }

};
