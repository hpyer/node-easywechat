'use strict';

import ObjectAccessInterface from "./ObjectAccessInterface";

abstract class ConfigInterface extends ObjectAccessInterface
{
  /**
   * 获取全部配置项
   * @returns
   */
  all(): Record<string, any> { return null; }

  /**
   * 判断配置项是否存在
   * @param key 键名
   * @returns
   */
  has(key: string): boolean { return false; }

  /**
   * 设置配置项
   * @param key 键名
   * @param value 键值
   * @returns
   */
  set(key: string, value: any): void { }

  /**
   * 获取配置项
   * @param key 键名
   * @param defaultValue 配置项不存在时返回的默认值
   * @returns
   */
  get(key: string | string[], defaultValue: any = null): any { return null; }
};

export = ConfigInterface;
