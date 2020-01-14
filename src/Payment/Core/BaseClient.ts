'use strict';

import BaseApplication from '../../Core/BaseApplication';
import HttpMixin from '../../Core/Mixins/HttpMixin';
import { applyMixins, randomString, makeSignature, singleItem } from '../../Core/Utils';
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
    return {};
  }

  protected requestApi(endpoint: string, params: object = {}, method: string = 'post', options: object = {}, returnRaw: boolean = false): Promise<any>
  {
    let base = {
      mch_id: this.app['config']['mch_id'],
      nonce_str: randomString(32),
      sub_mch_id: this.app['config']['sub_mch_id'],
      sub_appid: this.app['config']['sub_appid'],
    };

    let localParams = Merge(base, this.prepends(), params);
    localParams['sign_type'] = localParams['sign_type'] || 'md5';

    let secretKey = this.app['getKey'](endpoint);
    localParams['sign'] = makeSignature(localParams, secretKey, localParams['sign_type']);

    let XmlBuilder = new Xml2js.Builder;
    let payload = Merge(options, {
      url: endpoint,
      method,
      body: XmlBuilder.buildObject(localParams)
    });

    return this.request(payload)
      .then(async body => {
        try {
          if (!returnRaw) {
            body = await this.parseXml(body);
          }
        }
        catch (e) { }
        return body;
      });
  }

  async parseXml(xml: string): Promise<any>
  {
    let res = await Xml2js.parseStringPromise(xml);
    res = singleItem(res);
    return res;
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

  protected requestApiRaw(endpoint: string, params: object = {}, method: string = 'post', options: object = {}): Promise<any>
  {
    return this.requestApi(endpoint, params, method, options, true);
  }

  protected wrap(endpoint: string): string
  {
    return this.app['inSandbox']() ? `sandboxnew/${endpoint}` : endpoint;
  }

  async getServerIp()
  {
    let res = await this.httpGet('http://ip.taobao.com/service/getIpInfo.php?ip=myip');
    if (res && !res['code'] && res['data'] && res['data']['ip']) {
      return res['data']['ip'];
    }
    return '';
  }

  async getClientIp()
  {
    return this.app['request'].getClientIp();
  }


  // Rewrite by HttpMixin
  async httpGet(url: string, payload: object = null): Promise<any> {}
  async httpPost(url: string, payload: object = null): Promise<any> { }
  async httpFile(url: string, payload: object = null): Promise<any> { }
  async request(payload: object): Promise<any> { }

};

applyMixins(BaseClient, [HttpMixin]);

export default BaseClient;
