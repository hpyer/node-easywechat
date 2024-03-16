'use strict';

import fs from 'fs';
import merge from 'merge';
import { Method, AxiosRequestConfig, AxiosInstance } from "axios";
import HttpClientInterface from "../Core/HttpClient/Contracts/HttpClientInterface";
import { applyMixins, buildXml, createHash, createUserAgent, ltrim, streamToBuffer } from '../Core/Support/Utils';
import HttpClient from '../Core/HttpClient/HttpClient';
import HttpClientMethodsMixin from '../Core/HttpClient/Mixins/HttpClientMethodsMixin';
import { LogHandler } from '../Types/global';
import HttpClientResponse from '../Core/HttpClient/HttpClientResponse';
import PresetMixin from '../Core/HttpClient/Mixins/PresetMixin';
import Signature from './Signature';
import LegacySignature from './LegacySignature';
import MerchantInterface from './Contracts/MerchantInterface';
import FormData from 'form-data';

class Client implements HttpClientInterface
{
  protected throw: boolean = true;
  protected client: HttpClientInterface = null;

  protected defaultOptions: AxiosRequestConfig<any> = {
    baseURL: 'https://api.mch.weixin.qq.com',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  };

  public V3_URI_PREFIXES = [
    '/v3/',
    '/sandbox/v3/',
    '/hk/v3/',
    '/global/v3/',
  ];

  constructor(
    protected merchant: MerchantInterface,
    client: HttpClientInterface,
    defaultOptions: Record<string, any> = {},
  ) {
    this.throw = !!(defaultOptions['throw'] ?? true);
    this.defaultOptions = merge.recursive(true, this.defaultOptions, defaultOptions);
    this.client = client || HttpClient.create();
  }

  getInstance(): AxiosInstance {
    return this.client.getInstance();
  }

  setInstance(instance: AxiosInstance): this {
    this.client.setInstance(instance);
    return this;
  }

  setLogger(logger: LogHandler): this {
    this.client.setLogger(logger);
    return this;
  }

  async request(method: Method, url: string, payload: AxiosRequestConfig<any> = {}): Promise<HttpClientResponse> {
    if (!payload.headers) payload.headers = {};
    if (!payload.headers['user-agent'] && !payload.headers['User-Agent']) {
      payload.headers['user-agent'] = createUserAgent();
    }

    if (this.isV3Request(url) && !payload.headers['authorization']) {
      payload.headers['authorization'] = this.createSignature(method, url, payload);
    }
    else {
      if (payload.xml) {
        if (typeof payload.xml === 'object') {
          payload.xml = buildXml(this.attachLegacySignature(payload.xml));
        }

        if (typeof payload.xml !== 'string') {
          throw new Error('The `xml` option must be a string or object.');
        }

        payload.data = payload.xml;
        delete payload.xml;
      }

      if (payload.data && typeof payload.data === 'object') {
        payload.data = buildXml(this.attachLegacySignature(payload.data));
      }

      if (!payload.headers['content-type'] && !payload.headers['Content-Type']) {
        payload.headers['content-type'] = 'text/xml';
      }
    }

    if (this.prependData && Object.keys(this.prependData).length > 0) {
      payload.data = { ...this.prependData, ...payload.data };
    }

    if (this.prependHeaders && Object.keys(this.prependHeaders).length > 0) {
      payload.headers = { ...this.prependHeaders, ...payload.headers };
    }

    return this.client.request(method, ltrim(url, '\\/+'), payload);
  }

  /**
   * 文件上传
   * @see https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter2_1_1.shtml
   * @param uri 接口地址
   * @param file 文件路径、文件Buffer或文件可读流
   * @param meta 文件元信息，包含 filename 和 sha256 两个字段
   * @param filename 文件名，必须以 .jpg、.bmp、.png 为后缀
   * @returns
   */
  async uploadMedia(uri: string, file: string | fs.ReadStream | Buffer, meta: Record<string, any> = null, filename: string = null) {
    if (typeof file === 'string') {
      file = fs.readFileSync(file);
    }
    else if (typeof file !== 'string' && !Buffer.isBuffer(file)) {
      file = await streamToBuffer(file);
    }
    filename = filename ?? 'file.jpg';
    if (!meta) {
      meta = {
        filename: filename,
        sha256: await createHash(file, 'sha256'),
      };
    }
    let metaJson = JSON.stringify(meta);

    let formData = new FormData();
    formData.append('file', file, filename);
    formData.append('meta', metaJson, {
      contentType: 'application/json',
    });

    return this.client.request('POST', ltrim(uri, '\\/+'), {
      formData,
      headers: {
        'authorization': this.createSignature('POST', uri, {
          data: metaJson,
        }),
      }
    });
  }

  /**
   * 判断是否是V3请求
   * @param url 请求地址
   * @returns
   */
  protected isV3Request(url: string) {
    let pathname = url;
    if (url.startsWith('https://') || url.startsWith('http://')) {
      let urlObj = new URL(url);
      pathname = urlObj.pathname;
    }

    for (let i=0; i<this.V3_URI_PREFIXES.length; i++) {
      if (pathname.startsWith(this.V3_URI_PREFIXES[i])) {
        return true;
      }
    }

    return false;
  }

  /**
   * 创建签名（V3）
   * @param method 请求方式
   * @param url 请求地址
   * @param payload 请求载荷
   * @returns
   */
  createSignature(method: string, url: string, payload: AxiosRequestConfig<any>) {
    return (new Signature(this.merchant)).createHeader(method, url, payload);
  }

  /**
   * 创建签名（V2）
   * @param body 请求参数
   * @returns
   */
  protected attachLegacySignature(body: Record<string, any>) {
    return (new LegacySignature(this.merchant)).sign(body);
  }

  /**
   * 预设置mch_id（因nodejs不支持魔术方法，只好预先设置几个常用的方法）
   * @param new_mch_id
   * @returns
   */
  withMchId(new_mch_id: string = null) {
    this.with('mch_id', new_mch_id);
    return this;
  }

  /**
   * 预设置mch_id别名（因nodejs不支持魔术方法，只好预先设置几个常用的方法）
   * @param new_alias
   * @returns
   */
  withMchIdAs(new_alias: string = null) {
    this.with(new_alias, this.presets['mch_id']);
    return this;
  }

}

interface Client extends HttpClientMethodsMixin, PresetMixin { };

applyMixins(Client, [HttpClientMethodsMixin, PresetMixin]);

export = Client;
