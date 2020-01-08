'use strict';

import * as Path from 'path';
import * as Merge from 'merge';
import FileCache from './Cache/FileCache';

export default class BaseApplicatioin
{
  protected defaultConfig: Object = {};
  protected userConfig: Object = {};
  protected cache: Object = null;

  constructor(config: object = {})
  {
    if (new.target === BaseApplicatioin) {
      throw new Error('本接口不能实例化');
    }
    this.userConfig = config || {};
  }

  getConfig(): object
  {
    let base = {
      // https://www.npmjs.com/package/request#requestoptions-callback
      http: {
        timeout: 30,
        baseUrl: 'https://api.weixin.qq.com/',
      },
    };

    return Merge(base, this.defaultConfig, this.userConfig);
  }

  registerProviders(providers: Array<string> = []): void
  {
    [
      'Providers/ConfigServiceProvider',
      'Providers/LogServiceProvider',
      'Providers/RequestServiceProvider',
    ].forEach(
      provider => {
        try {
          let serviceClass = require(Path.resolve(__dirname + '/' + provider))['default'];
          serviceClass.register(this);
        }
        catch (e) {
          throw new Error('服务`' + provider + '`注册失败，错误：' + e.message);
        }
      }
    );

    providers.forEach(
      provider => {
        try {
          let serviceClass = require(Path.resolve(__dirname + '/../' + provider + '/ServiceProvider'))['default'];
          serviceClass.register(this);
        }
        catch (e) {
          throw new Error('服务`' + provider + '`注册失败，错误：' + e.message);
        }
      }
    );

  }

  rebind(id: string, value: any): void
  {
    this.offsetUnset(id);
    this.offsetSet(id, value);
  }

  offsetUnset(id: string): void
  {
    delete this[id];
  }

  offsetSet(id: string, value: any): void
  {
    this[id] = value;
  }

  getCache(): any
  {
    if (this.cache) {
      return this.cache;
    }

    return this.cache = this.createDefaultCache();
  }

  createDefaultCache(): FileCache
  {
    return new FileCache;
  }

};
