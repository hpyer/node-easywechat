'use strict';

/**
 * 缓存接口
 */
abstract class CacheInterface
{
  /**
   * 获取缓存
   * @param key 缓存名
   * @returns
   */
  async get(key: string): Promise<any> { return null; }

  /**
   * 设置缓存
   * @param key 缓存名
   * @returns
   */
  async has(key: string): Promise<boolean> { return false; }

  /**
   * 设置缓存
   * @param key 缓存名
   * @param data 数据
   * @param lifetime 过期时间，单位：秒
   * @returns
   */
  async set(key: string, data: any = null, lifetime: number = 0): Promise<boolean> { return false; }

  /**
   * 删除缓存
   * @param key 缓存名
   * @returns
   */
  async delete(key: string): Promise<boolean> { return false;  }
};

export = CacheInterface;
