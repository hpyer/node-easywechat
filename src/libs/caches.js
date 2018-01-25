
import {log, getTimestamp, extendObj} from '../utils';
import fs from 'fs';
import path from 'path';

export class CacheInterface {
  constructor () {
    this.$options = {};
  }

  fetch (id) {
    return null;
  }

  contains (id) {
    return true;
  }

  save (id, data = null, lifeTime = 0) {
    return true;
  }

  delete (id) {
    return true;
  }
}

export class MemoryCache extends CacheInterface {
  constructor () {
    super();
    this.$datas = {};
  }

  fetch (id) {
    if (!this.contains(id) || (this.$datas[id].lifeTime > 0 && this.$datas[id].lifeTime < getTimestamp())) {
      return null;
    }
    return this.$datas[id].data;
  }

  contains (id) {
    if (typeof this.$datas[id] != 'object') return false;
    return true;
  }

  save (id, data = null, lifeTime = 0) {
    let dataItem = {
      data,
      lifeTime: lifeTime > 0 ? lifeTime + getTimestamp() : 0
    }
    this.$datas[id] = dataItem;
    return true;
  }

  delete (id) {
    delete this.$datas[id];
    return true;
  }
}

export class FileCache extends CacheInterface {
  constructor (options) {
    super();
    let defaultOptions = {
      path: '',
      dirMode: 0o777,
      fileMode: 0o666,
      ext: '.cache'
    };
    this.$options = extendObj(defaultOptions, options);
    this.$options.path = path.resolve(this.$options.path);
    try {
      fs.accessSync(this.$options.path, fs.constants.R_OK & fs.constants.W_OK);
    }
    catch (e) {
      try {
        fs.mkdirSync(this.$options.path, this.$options.dirMode);
      }
      catch (e) {
        log('无法创建缓存目录：' + this.$options.path, e);
      }
    }
  }

  getCacheFile (id) {
    return this.$options.path + '/' + id + this.$options.ext;
  }

  fetch (id) {
    let content = null;
    let file = this.getCacheFile(id);
    try {
      let dataItem = JSON.parse(fs.readFileSync(file, {
        encoding: 'utf-8',
        flag: 'r'
      }));

      if (dataItem.lifeTime > 0 && dataItem.lifeTime < getTimestamp()) {
        content = null;
      }
      else {
        content = dataItem.data;
      }
    }
    catch (e) {
      log('无法读取缓存文件：' + file, e);
      content = null;
    }
    return content;
  }

  contains (id) {
    let file = this.getCacheFile(id);
    try {
      fs.accessSync(file, fs.constants.R_OK & fs.constants.W_OK);
    }
    catch (e) {
      return false;
    }
    return true;
  }

  save (id, data = null, lifeTime = 0) {
    let file = this.getCacheFile(id);
    try {
      let dataItem = {
        data,
        lifeTime: lifeTime > 0 ? lifeTime + getTimestamp() : 0
      };
      fs.writeFileSync(file, JSON.stringify(dataItem), {
        mode: this.$options.fileMode,
        encoding: 'utf-8',
        flag: 'w'
      })
    }
    catch (e) {
      log('无法写入缓存文件：' + file, e);
      return false;
    }
    return true;
  }

  delete (id) {
    let file = this.getCacheFile(id);
    try {
      fs.unlinkSync(file);
    }
    catch (e) {
      log('无法删除缓存文件：' + file, e);
      return false;
    }
    return true;
  }
}
