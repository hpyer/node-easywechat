'use strict';

export default class BaseServiceProvider
{
  constructor()
  {
    if (new.target === BaseServiceProvider) {
      throw new Error('本接口不能实例化');
    }
  }

  register(): void
  {
  }
}
