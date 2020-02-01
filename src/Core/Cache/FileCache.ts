'use strict';

import * as Path from 'path';
import * as Fs from 'fs';
import * as Merge from 'merge';
import { getTimestamp } from '../Utils';
import CacheInterface from '../Contracts/CacheInterface';

export default class FileCache implements CacheInterface
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
    this.options = Merge({}, this.defaultOptions, options);
    this.options['path'] = Path.resolve(this.options['path']) + '/';

    try {
      Fs.accessSync(this.options['path'], Fs.constants.R_OK & Fs.constants.W_OK);
    }
    catch (e) {
      try {
        Fs.mkdirSync(this.options['path'], this.options['dirMode']);
      }
      catch (e) {
        throw new Error(`The path '${this.options['path']}' can not be write.`);
      }
    }
  }

  getCacheFile(id: string): string
  {
    return this.options['path'] + 'node-easywechat.file_cache.' + id + this.options['ext'];
  }

  getCacheContent(file: string): string
  {
    let dataItem = JSON.parse(Fs.readFileSync(file, {
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
      Fs.accessSync(file, Fs.constants.R_OK & Fs.constants.W_OK);

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

  async delete(id: string): Promise<boolean>
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
