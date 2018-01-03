
import utils from '../utils';
import {MemoryCache, FileCache} from './caches';
import Core from './core';

const init = function (instance) {
  if (!instance.$config.cache) {
    switch (instance.$config.cache_driver) {
      case 'file':
        instance.$config.cache = new FileCache(instance.$config.cache_options);
        break;
      case 'memory':
      default:
        instance.$config.cache = new MemoryCache;
    }
  }
};

const setCache = function (cache) {
  if (
    cache
    && typeof cache.fetch == 'function'
    && typeof cache.contains == 'function'
    && typeof cache.save == 'function'
    && typeof cache.delete == 'function'
  ) {
    Core.getInstance().$config.cache = cache
  }
};

export default {
  init,
  setCache
};
