'use strict';

import merge from 'merge';

class Obj
{
  /**
   * 获取属性
   * @param obj 对象
   * @param key 属性，支持“.”作为层级分隔符的多层级查询
   * @param defaultValue 默认值，默认：null
   * @returns
   */
  static get(obj: Record<string, any>, key: string, defaultValue: any = null): any {
    if (key === null) {
      return obj;
    }

    if (Obj.exists(obj, key)) {
      return obj[key];
    }

    let newObj = merge.recursive(true, obj);
    let keys = key.split('.');
    for (let i = 0; i < keys.length; i++) {
      let segment = keys[i];
      if (Obj.exists(newObj, segment)) {
        newObj = newObj[segment];
      }
      else {
        return defaultValue;
      }
    }

    return newObj;
  }

  /**
   * 判断属性是否存在
   * @param obj 对象
   * @param key 属性，不支持多层级查询
   * @returns
   */
  static exists(obj: Record<string, any>, key: string): boolean {
    return typeof obj === 'object' && obj[key] !== undefined;
  }

  /**
   * 设置属性
   * @param obj 对象
   * @param key 属性，支持“.”作为层级分隔符的多层级查询
   * @param value 值
   * @returns
   */
  static set(obj: Record<string, any>, key: string, value: any): Record<string, any> {
    if (-1 === key.indexOf('.')) {
      return obj[key] = value;
    }

    let keys = key.split('.');
    key = keys.shift();

    let newObj = {};
    if (obj[key] && typeof obj[key] === 'object') {
      newObj = merge.recursive(true, obj[key]);
    }
    obj[key] = Obj.set(newObj, keys.join('.'), value);

    return obj;
  }

  /**
   * 将所有属性的属性转为以“.”分隔。如：
   * ```
   * {
   *   "aa": {
   *     "b1": {
   *       "cc":123
   *     },
   *     "b2": "xxx"
   *   }
   * }
   * ```
   * 转换后：
   * ```
   * {
   *    "aa.b1.cc": 123,
   *    "aa.b2": "xxx"
   * }
   * ```
   * @param obj 对象
   * @param prepend 前缀，默认：''
   * @returns
   */
  static dot(obj: Record<string, any>, prepend: string = ''): Record<string, any> {
    let results = {};

    obj.map((key: string, value: any) => {
      if (typeof value === 'object') {
        results = merge.recursive(results, Obj.dot(value, `${prepend}${key}.`))
      }
      else {
        results[prepend + key] = value;
      }
    });

    return results;
  }

  /**
   * 判断属性是否存在。如：
   * ```
   * Obj.has(obj, 'attr');
   * Obj.has(obj, 'aa.bb.cc');
   * Obj.has(obj, ['attr', 'aa.bb.cc']);
   * ```
   * @param obj 对象
   * @param keys 属性，支持“.”作为层级分隔符的多层级查询，也支持多个属性
   * @returns
   */
  static has(obj: Record<string, any>, keys: string|string[]): boolean {
    if (!obj || Object.keys(obj).length === 0) {
      return false;
    }

    if (keys === null || keys === undefined) {
      return false;
    }
    if (typeof keys === 'string') {
      keys = [keys];
    }

    for (let i=0; i<keys.length; i++) {
      let key = keys[i];

      if (Obj.exists(obj, key)) continue;

      let newObj = merge.recursive(true, obj);

      let subKeys = key.split('.');
      for (let j=0; j<subKeys.length; i++) {
        let subKey = subKeys[j];
        if (Obj.exists(newObj, subKey)) {
          newObj = newObj[subKey];
        }
        else {
          return false;
        }
      }
    }

    return true;
  }

}

export = Obj;
