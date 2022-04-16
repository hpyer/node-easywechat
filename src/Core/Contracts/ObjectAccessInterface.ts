'use strict';

/**
 * 兼容php的ArrayAccess接口
 */
abstract class ObjectAccessInterface
{
  /**
   * 判断键是否存在
   * @param key 键名
   * @returns
   */
  offsetExists(key: any): boolean { return false; }

  /**
   * 获取键值
   * @param key 键名
   * @returns
   */
  offsetGet(key: any): any { return null; }

  /**
   * 设置键值
   * @param key 键名
   * @param value 键值
   * @returns
   */
  offsetSet(key: any, value: any): void { }

  /**
   * 删除键值
   * @param key 键名
   * @returns
   */
  offsetUnset(key: any): void { }
};

export = ObjectAccessInterface;
