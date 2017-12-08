
import utils from '../utils';
import fs from 'fs';
import path from 'path';

export class CacheInterface {
  fetch (id) {
    return null;
  }

  contains (id, buffer_time = 0) {
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
    this.$datas = {};
  }

  fetch (id) {
    return this.contains(id) ? this.$datas[id].data : null;
  }

  contains (id) {
    if (typeof this.$datas[id] != 'object') return false;
    return true;
  }

  save (id, data = null, lifeTime = 0) {
    let dataItem = {
      data,
      lifeTime: lifeTime > 0 ? lifeTime + utils.getTimestamp() : 0
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
    let defaultOptions = {
      path: '',
      dirMode: 0o777,
      fileMode: 0o666,
      ext: '.cache'
    };
    this.$options = utils.extendObj(defaultOptions, options);
    this.$options.path = path.resolve(this.$options.path);
    try {
      fs.mkdirSync(this.$options.path, this.$options.dirMode);
    }
    catch (e) {
      console.log('无法创建缓存目录：' + this.$options.path, e);
    }
  }

  getCacheFile (id) {
    return this.$options.dir + id + this.$options.ext;
  }

  fetch (id) {
    let content = null;
    let file = this.getCacheFile(id);
    try {
      let fd = fs.openSync(file);
      let dataItem = JSON.parse(fs.readFileSync(fd, {
        encoding: 'utf-8',
        flag: 'r'
      }));
      fs.closeSync(fd);

      if (dataItem.lifeTime > 0 && dataItem.lifeTime < utils.getTimestamp()) {
        content = null;
      }
      else {
        content = dataItem.data;
      }
    }
    catch (e) {
      console.log('无法读取缓存文件：' + file, e);
      content = null;
    }
    return content;
  }

  contains (id, buffer_time = 0) {
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
        lifeTime: lifeTime > 0 ? lifeTime + utils.getTimestamp() : 0
      };
      fs.writeFileSync(file, JSON.stringify(dataTime), {
        mode: this.$options.fileMode,
        encoding: 'utf-8',
        flag: 'w'
      })
    }
    catch (e) {
      console.log('无法写入缓存文件：' + file, e);
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
      console.log('无法删除缓存文件：' + file, e);
      return false;
    }
    return true;
  }
}
