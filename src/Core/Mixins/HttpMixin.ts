'use strict';

import * as Merge from 'merge';
import * as Request from 'request';
import BaseApplicatioin from '../BaseApplication';

export default class HttpMixin
{

  doRequest(payload: object, returnResponse: Boolean = false): Promise<any>
  {
    if (this['app'] && this['app'] instanceof BaseApplicatioin) {
      payload = Merge({}, this['app']['config']['http'] || {}, payload || {});
    }
    if (this['baseUrl']) {
      payload['baseUrl'] = this['baseUrl'];
    }
    this['app']['log']('request', payload);
    return new Promise(
      (resolve, reject) => {
        Request(
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
