'use strict';

import * as Path from 'path';
import * as Merge from 'merge';
import FileCache from './Cache/FileCache';
import { createHash, isObject, isFunction } from './Utils';

export default class BaseApplicatioin
{
  protected defaultConfig: Object = {};
  protected userConfig: Object = {};
  protected cache: Object = null;
  protected id: String = null;

  constructor(config: Object = {}, prepends: Object = {}, id: String = null)
  {
    if (new.target === BaseApplicatioin) {
      throw new Error('Can not create instance via BaseApplicatioin.');
    }
    if (isObject(prepends)) {
      for (let key in prepends) {
        this.offsetSet(key, prepends[key]);
      }
    }
    this.userConfig = config || {};
    this.id = id || null;
  }

  getId(): String
  {
    if (!this.id) {
      this.id = createHash(JSON.stringify(this.userConfig), 'md5');
    }
    return this.id;
  }

  getConfig(): Object
  {
    let base = {
      // https://www.npmjs.com/package/request#requestoptions-callback
      http: {
        timeout: 30000,
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
          serviceClass.register.call(this, this);
        }
        catch (e) {
          throw new Error(`Fail to regist service '${provider}', erro: ${e.message}`);
        }
      }
    );

    providers.forEach(
      provider => {
        try {
          let serviceClass = require(Path.resolve(__dirname + '/../' + provider + '/ServiceProvider'))['default'];
          serviceClass.register.call(this, this);
        }
        catch (e) {
          throw new Error(`Fail to regist service '${provider}', erro: ${e.message}`);
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
    if (isFunction(value)) {
      value = value.call(this, this);
    }
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
    return new FileCache(this['config']['file_cache'] || {});
  }

};
