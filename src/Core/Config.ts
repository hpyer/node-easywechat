'use strict';

import merge from "merge";
import { OfficialAccountConfig, MiniAppConfig, PayConfig, OpenPlatformConfig, WorkConfig, OpenWorkConfig } from "../Types/global";
import ConfigInterface from "./Contracts/ConfigInterface";
import Obj from "./Support/Obj";

class Config extends ConfigInterface
{
  protected requiredKeys: string[] = [];

  constructor(protected items: OfficialAccountConfig | MiniAppConfig |PayConfig |OpenPlatformConfig |WorkConfig |OpenWorkConfig = {}) {
    super();
    this.items = merge.recursive(true, items);
    this.checkMissingKeys();
  }

  /**
   * 检查是否有配置项缺失
   * @returns
   */
  checkMissingKeys(): boolean {
    if (!this.requiredKeys || this.requiredKeys.length == 0) {
      return true;
    }

    let missingKeys = this.requiredKeys.filter(key => {
      return !this.has(key);
    });
    if (missingKeys.length > 0) {
      throw new Error(`${missingKeys.join(',')} cannot be empty.`);
    }

    return true;
  }

  /**
   * 获取所有配置项
   * @returns
   */
  all(): Record<string, any> {
    return merge.recursive(true, this.items);
  }

  /**
   * 判断配置项是否存在
   * @param key
   * @returns
   */
  has(key: string): boolean
  {
    return Obj.has(this.items, key);
  }

  /**
   * 设置配置项
   * @param key
   * @param value
   */
  set(key: string, value: any): void
  {
    Obj.set(this.items, key, value);
  }

  /**
   * 获取配置项
   * @param key
   * @param defaultValue
   * @returns
   */
  get(key: string | string[] | Record<string, any>, defaultValue: any = null): any
  {
    if (typeof key === 'string') {
      return Obj.get(this.items, key, defaultValue);
    }
    return this.getMany(key);
  }

  /**
   * 获取多个配置项
   * @param keys 键名列表 或者 {键名:默认值} 格式的对象
   * @returns
   */
  getMany(keys: string[] | Record<string, any>): Record<string, any> {
    let config = {};
    if (!keys || typeof keys.map === undefined) return config;

    keys.map((key: string | number, val: any) => {
      if (typeof key === 'number') {
        config[key] = Obj.get(this.items, val, null);
      }
      else {
        config[key] = Obj.get(this.items, key, val);
      }
    });

    return config;
  }

  /**
   * 判断配置项是否存在
   * @param key
   * @returns
   */
  offsetExists(key: any): boolean {
    return this.has('' + key);
  }

  /**
   * 获取配置项
   * @param key
   * @returns
   */
  offsetGet(key: any): any {
    return this.get('' + key);
  }

  /**
   * 设置配置项
   * @param key
   * @param value
   */
  offsetSet(key: any, value: any): void {
    this.set('' + key, value);
  }

  /**
   * 删除配置项
   * @param key
   */
  offsetUnset(key: any): void {
    this.set('' + key, undefined);
  }

};

export = Config;
