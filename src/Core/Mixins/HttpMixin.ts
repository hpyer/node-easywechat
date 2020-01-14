'use strict';

import * as Merge from 'merge';
import * as Request from 'request';
import BaseApplicatioin from '../BaseApplication';

export default class HttpMixin
{
  httpGet(url: string, payload: object = null): Promise<any>
  {
    payload = payload || {};
    payload['url'] = url;
    payload['method'] = 'GET';
    return this.request(payload);
  }

  httpPost(url: string, payload: object = null): Promise<any>
  {
    payload = payload || {};
    payload['url'] = url;
    payload['method'] = 'POST';
    return this.request(payload);
  }

  httpFile(url: string, payload: object = null): Promise<any>
  {
    payload = payload || {};
    payload['url'] = url;
    payload['method'] = 'GET';
    payload['encoding'] = 'binary';
    return this.request(payload);
  }

  request(payload: object): Promise<any>
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
              try {
                if (payload['encoding'] == 'binary') {
                  let buffer = Buffer.from(body, 'binary');
                  body = buffer.toString();
                }
                body = JSON.parse(body);
              }
              catch (e) { }
              resolve(body);
            }
          }
        );
      }
    );
  }

};
