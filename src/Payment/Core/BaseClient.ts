'use strict';

import BaseApplication from '../../Payment/Application';
import HttpMixin from '../../Core/Mixins/HttpMixin';
import { merge, applyMixins, randomString, makeSignature, singleItem } from '../../Core/Utils';
import Xml2js from 'xml2js';
import Fs from 'fs';
import Response from '../../Core/Http/Response';
import Https from 'https';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

class BaseClient implements HttpMixin
{
  protected app: BaseApplication = null;

  protected serverIp: String = '';

  constructor(app: BaseApplication)
  {
    this.app = app;
  }

  protected prepends()
  {
    return {};
  }

  protected async request(endpoint: string, params: object = {}, method: string = 'post', options: AxiosRequestConfig = {}, returnResponse: boolean = false): Promise<AxiosResponse<any>>
  {
    let base = {
      mch_id: this.app.config.mch_id,
      nonce_str: randomString(32),
    };

    if (this.app.config.sub_mch_id) {
      base['sub_mch_id'] = '';
    }
    if (this.app.config.sub_appid) {
      base['sub_appid'] = '';
    }

    let localParams = merge(merge(base, this.prepends()), params);
    localParams['sign_type'] = localParams['sign_type'] || 'MD5';

    let secretKey = await this.app.getKey(endpoint);
    localParams['sign'] = makeSignature(localParams, secretKey, localParams['sign_type']);

    let XmlBuilder = new Xml2js.Builder({
      cdata: true,
      renderOpts: {
        pretty: false,
        indent: '',
        newline: '',
      }
    });
    let payload = merge(merge({}, options), {
      url: endpoint,
      method,
      responseType: 'text',
      data: XmlBuilder.buildObject(localParams)
    });

    let response = await this.doRequest(payload);
    if (returnResponse) {
      return response;
    }
    else {
      let body = response.data;
      try {
        body = await this.parseXml(body);
      }
      catch (e) { }
      return body;
    }
  }

  async parseXml(xml: string): Promise<any>
  {
    let res = await Xml2js.parseStringPromise(xml);
    res = singleItem(res);
    if (res['xml']) res = res['xml'];
    return res;
  }

  protected safeRequest(endpoint: string, params: object = {}, method: string = 'post', options: AxiosRequestConfig = {}): Promise<any>
  {
    options = merge(merge({}, options), {
      httpsAgent: new Https.Agent({
        pfx: Fs.readFileSync(this.app.config.cert_path),
        passphrase: this.app.config.mch_id,
      }),
    });
    return this.request(endpoint, params, method, options);
  }

  protected async requestRaw(endpoint: string, params: object = {}, method: string = 'post', options: AxiosRequestConfig = {}): Promise<any>
  {
    options.responseType = 'arraybuffer';
    let res = await this.request(endpoint, params, method, options, true);
    return new Response(res.data, res.status, res.headers);
  }

  protected wrap(endpoint: string): string
  {
    return this.app.inSandbox() ? `sandboxnew/${endpoint}` : endpoint;
  }

  async getServerIp()
  {
    if (!this.serverIp) {
      let res = await this.doRequest({
        baseURL: '',
        url: 'https://api.ipify.org?format=json',
        method: 'GET',
      });
      if (res && res['ip']) {
        this.serverIp = res['ip'];
      }
    }

    return this.serverIp;
  }

  getClientIp()
  {
    return this.app.request.getClientIp();
  }


  // Rewrite by HttpMixin
  async doRequest(payload: AxiosRequestConfig): Promise<AxiosResponse<any>> {
    return null;
  }

};

applyMixins(BaseClient, [HttpMixin]);

export default BaseClient;
