'use strict';

import { AxiosRequestConfig, Method } from "axios";
import fs from "fs";

class PresetMixin
{
  /**
   * 存储预置参数
   */
  protected presets: Record<string, any> = {};

  /**
   * 存储预置headers数据
   */
  protected prependHeaders: Record<string, any> = {};
  /**
   * 存储预置数据
   */
  protected prependData: Record<string, any> = {};
  /**
   * 存储预置文件数据
   */
  protected prependFiles: Record<string, fs.ReadStream> = {};

  /**
   * 设置预置参数
   * @param presets
   * @returns
   */
  setPresets(presets: Record<string, any>) {
    this.presets = presets;
    return this;
  }

  /**
   * 设置单个预置header
   * @param key
   * @param value
   * @returns
   */
  withHeader(key: string, value: any) {
    if (typeof this.prependHeaders !== 'object') {
      this.prependHeaders = {};
    }
    this.prependHeaders[key] = value;
    return this;
  }

  /**
   * 批量设置预置headers
   * @param headers
   * @returns
   */
  withHeaders(headers: Record<string, any>) {
    headers.map((value: string, key: string) => {
      this.withHeader(key, value);
    });
    return this;
  }

  /**
   * 设置预置数据
   * @param key 参数名
   * @param value 参数值，不设置则尝试从预置参数中获取
   * @returns
   */
  with(key: string | string[] | Record<string, any>, value: string = null) {
    if (Array.isArray(key)) {
      key.map((k: string) => {
        this.with(k, this.presets[k] ?? null);
      });
      return this;
    }
    else if (typeof key === 'object') {
      key.map((v: string, k: string) => {
        this.with(k, v ?? this.presets[k] ?? null);
      });
      return this;
    }
    if (typeof this.prependData !== 'object') {
      this.prependData = {};
    }
    this.prependData[key] = value || this.presets[key] || null;
    return this;
  }

  /**
   * 预设置app_id（因nodejs不支持魔术方法，只好预先设置几个常用的方法）
   * @param new_appid
   * @returns
   */
  withAppId(new_appid: string = null) {
    this.with('app_id', new_appid);
    return this;
  }

  /**
   * 预设置app_id的别名（因nodejs不支持魔术方法，只好预先设置几个常用的方法）
   * @param new_alias
   * @returns
   */
  withAppIdAs(new_alias: string) {
    this.with(new_alias, this.presets['app_id']);
    return this;
  }

  /**
   * 预设置secret（因nodejs不支持魔术方法，只好预先设置几个常用的方法）
   * @param new_secret
   * @returns
   */
  withSecret(new_secret: string = null) {
    this.with('secret', new_secret);
    return this;
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

  /**
   * 预设置文件
   * @param file  文件路径或可读文件流
   * @param key 参数名，默认：'file'
   * @returns
   */
  withFile(file: string | fs.ReadStream, key: string = 'file') {
    if (typeof this.prependFiles !== 'object') {
      this.prependFiles = {};
    }
    if (file instanceof fs.ReadStream) {
      this.prependFiles[key] = file;
    }
    else if (typeof file === 'string') {
      this.prependFiles[key] = fs.createReadStream(file);
    }
    return this;
  }

  /**
   * 预设置多个文件
   * @param files  键名：文件名，键值：文件路径或可读文件流
   * @returns
   */
  withFiles(files: Record<string, string | fs.ReadStream>) {
    for (const key in files) {
      this.withFile(files[key], key);
    }
    return this;
  }

  /**
   * 合并预置参数并清空预置数据
   * @param payload
   * @param method
   * @returns
   */
  mergeThenResetPrepends(payload: AxiosRequestConfig, method: Method = 'get') {
    let field = method.toLowerCase() === 'get' ? 'params' : 'data';

    let options: AxiosRequestConfig = { ...payload };
    if (!options.headers) options.headers = {};
    if (!options.formData) options.formData = {};

    if ((options.headers['Content-Type'] ?? options.headers['content-type'] ?? null) === 'application/json' || !!options.json) {
      field = 'json';
    }
    if ((options.headers['Content-Type'] ?? options.headers['content-type'] ?? null) === 'text/xml' || !!options.xml) {
      field = 'xml';
    }

    if (this.prependData && Object.keys(this.prependData).length > 0) {
      options[field] = { ...this.prependData, ...options[field] };
    }

    if (this.prependHeaders && Object.keys(this.prependHeaders).length > 0) {
      options.headers = { ...this.prependHeaders, ...options.headers };
    }

    if (this.prependFiles && Object.keys(this.prependFiles).length > 0) {
      options.formData = { ...this.prependFiles, ...options.formData };
    }

    this.prependData = {};
    this.prependHeaders = {};
    this.prependFiles = {};

    return options;
  }
}

export = PresetMixin;
