'use strict';

import CacheInterface from "../Contracts/CacheInterface";
import FileCache from "../Cache/FileCache";

class CacheMixin
{
  protected cache: CacheInterface = null;
  protected cacheLifetime: number = 1500;
  protected cacheNamespace: string = 'easywechat';

  /**
   * 获取缓存过期时间，单位：秒
   * @returns
   */
  getCacheLifetime(): number
  {
    return this.cacheLifetime;
  }

  /**
   * 设置缓存过期时间，单位：秒
   * @param cacheLifetime
   * @returns
   */
  setCacheLifetime(cacheLifetime: number): void
  {
    this.cacheLifetime = cacheLifetime;
  }

  /**
   * 获取缓存命名空间
   * @returns
   */
  getCacheNamespace(): string
  {
    return this.cacheNamespace;
  }

  /**
   * 设置缓存命名空间
   * @param cacheNamespace
   * @returns
   */
  setCacheNamespace(cacheNamespace: string): void
  {
    this.cacheNamespace = cacheNamespace;
  }

  /**
   * 获取缓存实例
   * @returns
   */
  getCache(): CacheInterface
  {
    if (!this.cache) {
      this.cache = new FileCache();
    }
    return this.cache;
  }

  /**
   * 设置缓存实例
   * @param cache
   * @returns
   */
  setCache(cache: CacheInterface): this
  {
    this.cache = cache;

    return this;
  }

};

export = CacheMixin;
