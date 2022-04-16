'use strict';

import path from 'path';
import fs from 'fs';
import merge from 'merge';
import { getTimestamp } from '../Support/Utils';
import CacheInterface from '../Contracts/CacheInterface';
import { CacheFileConfig } from '../../Types/global';

class FileCache implements CacheInterface
{
  private options: CacheFileConfig = {
    path: './',
    dirMode: 0o777,
    fileMode: 0o666,
    ext: '.cache'
  };

  constructor(options: CacheFileConfig = null)
  {
    if (options && typeof options == 'object') {
      this.options = merge({
        path: './',
        dirMode: 0o777,
        fileMode: 0o666,
        ext: '.cache'
      }, options);
    }
    this.options.path = path.resolve(this.options.path) + '/';

    try {
      fs.accessSync(this.options.path, fs.constants.R_OK & fs.constants.W_OK);
    }
    catch (e) {
      try {
        fs.mkdirSync(this.options.path, this.options.dirMode);
      }
      catch (e) {
        throw new Error(`The path '${this.options.path}' can not be write.`);
      }
    }
  }

  protected getCacheFile(id: string): string
  {
    return this.options.path +  id + this.options.ext;
  }

  protected getCacheContent(file: string): string
  {
    let dataItem = JSON.parse(fs.readFileSync(file, {
      encoding: 'utf-8',
      flag: 'r'
    }));
    if (dataItem.lifeTime > 0 && dataItem.lifeTime < getTimestamp()) {
      throw new Error('Cache expired.');
    }
    return dataItem.data;
  }

  async get(id: string): Promise<any>
  {
    let content = null;
    try {
      let file = this.getCacheFile(id);
      content = this.getCacheContent(file);
    }
    catch (e) {
      content = null;
    }
    return content;
  }

  async has(id: string): Promise<boolean>
  {
    try {
      let file = this.getCacheFile(id);
      fs.accessSync(file, fs.constants.R_OK & fs.constants.W_OK);

      let content = this.getCacheContent(file);
    }
    catch (e) {
      return false;
    }
    return true;
  }

  async set(id: string, data = null, lifeTime = 0): Promise<boolean>
  {
    let file = this.getCacheFile(id);
    try {
      let dataItem = {
        data,
        lifeTime: lifeTime > 0 ? lifeTime + getTimestamp() : 0
      };
      fs.writeFileSync(file, JSON.stringify(dataItem), {
        mode: this.options.fileMode,
        encoding: 'utf-8',
        flag: 'w'
      })
    }
    catch (e) {
      return false;
    }
    return true;
  }

  async delete(id: string): Promise<boolean>
  {
    let file = this.getCacheFile(id);
    try {
      fs.unlinkSync(file);
    }
    catch (e) {
      return false;
    }
    return true;
  }
};

export = FileCache;
