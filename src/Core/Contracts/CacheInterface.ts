'use strict';

export default class CacheInterface
{
  get(id: string): any
  {
    return null;
  }

  has(id: string): boolean
  {
    return false;
  }

  set(id: string, data: any = null, lifeTime: number = 0): boolean
  {
    return false;
  }

  delete(id: string): boolean
  {
    return false;
  }
};
