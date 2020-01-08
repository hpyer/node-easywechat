'use strict';

import BaseApplication from '../../Core/BaseApplication';
import HttpMixin from '../../Core/Mixins/HttpMixin';
import { applyMixins, randomString, makeSignature } from '../../Core/Utils';
import * as Merge from 'merge';
import * as Xml2js from 'xml2js';
import * as Fs from 'fs';

class BaseClient implements HttpMixin
{
  protected app: BaseApplication = null;

  constructor(app: BaseApplication)
  {
    this.app = app;
  }

  protected prepends()
  {
    return [];
  }

  protected requestApi(endpoint: string, params: object = {}, method: string = 'post', options: object = {}): Promise<any>
  {
    let base = {
      mch_id: this.app['config']['mch_id'],
      nonce_str: randomString(32),
      sub_mch_id: this.app['config']['sub_mch_id'],
      sub_appid: this.app['config']['sub_appid'],
    };

    params = Merge(base, this.prepends(), params);
    params['sign_type'] = params['sign_type'] || 'md5';

    let secretKey = this.app['getKey'](endpoint);
    params['sign'] = makeSignature(params, secretKey, params['sign_type']);

    let XmlBuilder = new Xml2js.Builder;
    let payload = Merge(options, {
      url: endpoint,
      method,
      body: XmlBuilder.buildObject(params)
    });

    return this.request(payload);
  }

  protected safeRequestApi(endpoint: string, params: object = {}, method: string = 'post', options: object = {}): Promise<any>
  {
    options = Merge(options, {
      agentOptions: {
        pfx: Fs.readFileSync(this.app['config']['cert_path']),
        passphrase: this.app['config']['mch_id'],
      }
    });
    return this.requestApi(endpoint, params, method, options);
  }

  protected wrap(endpoint: string): string
  {
    return this.app['inSandbox']() ? `sandboxnew/${endpoint}` : endpoint;
  }


  // Rewrite by HttpMixin
  async httpGet(url: string, payload: object = null): Promise<any> {}
  async httpPost(url: string, payload: object = null): Promise<any> { }
  async httpFile(url: string, payload: object = null): Promise<any> { }
  async request(payload: object): Promise<any> { }

};

applyMixins(BaseClient, [HttpMixin]);

export default BaseClient;
