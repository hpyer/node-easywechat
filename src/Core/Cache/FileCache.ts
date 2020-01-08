'use strict';

import * as Path from 'path';
import * as Fs from 'fs';
import * as Merge from 'merge';
import { getTimestamp } from '../Utils';
import BaseCache from './BaseCache';

export default class FileCache extends BaseCache
{
  private options: object = {};
  private defaultOptions: object = {
    path: './',
    dirMode: 0o777,
    fileMode: 0o666,
    ext: '.cache'
  }

  constructor(options: object = {})
  {
    super();

    this.options = Merge({}, this.defaultOptions, options);
    this.options['path'] = Path.resolve(this.options['path']);

    try {
      Fs.accessSync(this.options['path'], Fs.constants.R_OK & Fs.constants.W_OK);
    }
    catch (e) {
      try {
        Fs.mkdirSync(this.options['path'], this.options['dirMode']);
      }
      catch (e) {
        throw new Error('无法创建缓存目录：' + this.options['path']);
      }
    }
  }

  getCacheFile(id: string): string
  {
    return this.options['path'] + 'node-easywechat.file_cache.' + id + this.options['ext'];
  }

  fetch(id: string): any
  {
    let content = null;
    let file = this.getCacheFile(id);
    try {
      let dataItem = JSON.parse(Fs.readFileSync(file, {
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
      content = null;
    }
    return content;
  }

  contains(id: string): boolean
  {
    let file = this.getCacheFile(id);
    try {
      Fs.accessSync(file, Fs.constants.R_OK & Fs.constants.W_OK);
    }
    catch (e) {
      return false;
    }
    return true;
  }

  save(id: string, data = null, lifeTime = 0): boolean
  {
    let file = this.getCacheFile(id);
    try {
      let dataItem = {
        data,
        lifeTime: lifeTime > 0 ? lifeTime + getTimestamp() : 0
      };
      Fs.writeFileSync(file, JSON.stringify(dataItem), {
        mode: this.options['fileMode'],
        encoding: 'utf-8',
        flag: 'w'
      })
    }
    catch (e) {
      return false;
    }
    return true;
  }

  delete(id: string): boolean
  {
    let file = this.getCacheFile(id);
    try {
      Fs.unlinkSync(file);
    }
    catch (e) {
      return false;
    }
    return true;
  }
};
