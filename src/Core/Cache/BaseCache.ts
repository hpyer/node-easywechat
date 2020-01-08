'use strict';

export default class BaseCache
{
  fetch(id: string): any
  {
    return null;
  }

  contains(id: string): boolean
  {
    return true;
  }

  save(id: string, data: any = null, lifeTime: number = 0): boolean
  {
    return true;
  }

  delete(id: string): boolean
  {
    return true;
  }
};
