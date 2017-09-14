
import utils from '../utils';

class CacheDriver {
  constructor () {
    this.$datas = {};
  }

  fetch (id) {
    return this.contains(id) ? this.$datas[id].data : null;
  }

  contains (id, buffer_time = 0) {
    let dataItem = this.$datas[id];
    if (typeof dataItem != 'object') return false;
    if (dataItem.lifeTime > 0 && dataItem.lifeTime - buffer_time < utils.getTimestamp()) return false;
    return true;
  }

  save (id, data = null, lifeTime = 0) {
    let dataItem = {
      data,
      lifeTime: lifeTime > 0 ? lifeTime + utils.getTimestamp() : 0
    }
    this.$datas[id] = dataItem;
  }

  delete (id) {
    this.$datas[id] = null;
  }
}

var $instance;

const init = function (instance) {
  $instance = instance;

  $instance.$config.cache = $instance.$config.cache || new CacheDriver;
};

const setCache = function (cache) {
  if (
    cache
    && typeof cache.fetch == 'function'
    && typeof cache.contains == 'function'
    && typeof cache.save == 'function'
    && typeof cache.delete == 'function'
  ) {
    $cache = cache
  }
};

export default {
  init,
  CacheDriver,
  setCache
};
