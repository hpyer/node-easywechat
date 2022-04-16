'use strict';

import Crypto from 'crypto';
import Qs from 'qs';
import Xml2js from 'xml2js';
import Stream from 'stream';
import Fs from 'fs';

export const createHash = function (str: string, type: string = 'sha1'): any
{
  return Crypto.createHash(type).update(str).digest('hex');
};

export const createHmac = function (str: string, key: string, type: string = 'sha256'): any
{
  return Crypto.createHmac(type, key).update(str).digest('hex');
};

/**
 * 计算文件的 md5 值
 * @param path 文件路径或文件可读流
 */
export const md5File = function (path: string | Stream.Readable): Promise<string> {
  return new Promise((reslove, reject) => {
    let stream;
    if (isString(path)) {
      stream = Fs.createReadStream(path as string);
    }
    else {
      stream = new Stream.PassThrough();
      (path as Stream.Readable).pipe(stream);
    }
    let md5sum = Crypto.createHash('md5');
    stream.on('data', function (chunk) {
      md5sum.update(chunk);
    });
    stream.on('end', function () {
      let str = md5sum.digest('hex').toUpperCase();
      reslove(str);
    });
  });
}

export const getTimestamp = function (datetime: string = null): number
{
  let time;
  try {
    time = (isString(datetime) ? new Date(datetime) : new Date).getTime();
  }
  catch (e) {
    return 0;
  }
  return parseInt((time / 1000).toString());
};

export const buildQueryString = function (data: Record<string, any>, options: Record<string, any> = {}): string
{
  return Qs.stringify(data, options);
};

export const parseQueryString = function (data: string, options: Record<string, any> = {}): Record<string, any>
{
  return Qs.parse(data, options);
};

export const randomString = function (len: number = 16): string
{
  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  let str = '';
  for (let i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
};

export const makeSignature = function (params: object, key: string = '', type: string = 'md5'): string
{
  let paramsString = '';
  let sparator = '';
  let keys = Object.keys(params);
  keys = keys.sort();
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] == 'sign' || !params[keys[i]]) continue;
    paramsString += sparator + keys[i] + '=' + params[keys[i]];
    sparator = '&';
  }
  if (key) {
    paramsString += '&key=' + key;
  }
  let sign = '';
  type = type.toLowerCase();
  switch (type) {
    case 'sha1':
    case 'md5':
      sign = createHash(paramsString, type);
      break;
    case 'hmac-sha256':
    case 'hmac_sha256':
      type = type.replace(/^hmac[\-|_]/i, '');
      sign = createHmac(paramsString, key, type);
      break;
  }
  return (sign + '').toUpperCase();
};


export const isString = function (data: any): boolean
{
  return Object.prototype.toString.call(data) == '[object String]';
};
export const isArray = function (data: any): boolean
{
  return Object.prototype.toString.call(data) == '[object Array]';
};
export const isNumber = function (data: any): boolean
{
  return Object.prototype.toString.call(data) == '[object Number]';
};
export const isObject = function (data: any): boolean
{
  return Object.prototype.toString.call(data) == '[object Object]';
};
export const isFunction = function (data: any): boolean
{
  return data && toString.call(data) == '[object Function]' || toString.call(data) == '[object AsyncFunction]';
};
export const isIpv4 = function (ip: string): boolean
{
  if (!ip) return false;
  return /^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$/.test(ip);
};
export const isIpv6 = function (ip: string): boolean
{
  if (!ip) return false;
  return /^([\\da-fA-F]{1,4}:){7}([\\da-fA-F]{1,4})$/.test(ip);
};
export const isIp = function (ip: string): boolean
{
  return isIpv4(ip) || isIpv6(ip);
};

export const inArray = function (data: any, arr: any, strict: boolean = false): boolean
{
  if (!isArray(arr)) return strict ? data === arr : data == arr;
  if (isFunction(arr.findIndex)) {
    return arr.findIndex((o) => { return strict ? o === data : o == data }) > -1;
  }
  else {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
      if (strict ? data === arr[i] : data == arr[i]) {
        flag = true;
        break;
      }
    }
    return flag;
  }
};

/**
 * 类应用混入方法
 * @param derivedCtor 目标类
 * @param constructors 混入类列表
 */
export const applyMixins = function (derivedCtor: any, constructors: any[]): void
{
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      // 构造函数或目标类已有的方法，则以目标类的为准
      if (name === 'constructor' || typeof derivedCtor.prototype[name] !== 'undefined') return;
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null)
      );
    });
  });
};

/**
 * 去除字符串左右的符号
 * @param str 原字符串
 * @param chars 要去除的符号，正则字符串，默认空白符
 */
export const trim = (str: string, chars = '\\s+'): string => {
  if (!str || !isString(str)) return '';
  return str.replace(new RegExp('^' + chars + '|' + chars + '$', 'gm'), '');
}
/**
 * 去除字符串左边的符号
 * @param str 原字符串
 * @param chars 要去除的符号，正则字符串，默认空白符
 */
export const ltrim = (str: string, chars = '\\s+'): string => {
  if (!str || !isString(str)) return '';
  return str.replace(new RegExp('^' + chars, 'gm'), '');
}
/**
 * 去除字符串右边的符号
 * @param str 原字符串
 * @param chars 要去除的符号，正则字符串，默认空白符
 */
export const rtrim = (str: string, chars = '\\s+'): string => {
  if (!str || !isString(str)) return '';
  return str.replace(new RegExp(chars + '$', 'gm'), '');
}

/**
 * 将单词首字母转成大写，'hello word' => 'Hello World'
 * @param str
 * @returns
 */
export const strUcwords = function (str: string): string
{
  return str.replace(/\b[a-z]/gi, function (letter) {
    return letter.toUpperCase();
  });
};

/**
 * 将单词首字母转成小写，'Hello World' => 'hello word'
 * @param str
 * @returns
 */
export const strLcwords = function (str: string): string
{
  return str.replace(/\b[a-z]/gi, function (letter) {
    return letter.toLowerCase();
  });
};

/**
 * 驼峰（首字母大写），'hello word' => 'HelloWorld'
 * @param value
 * @returns
 */
export const strStudly = function (value: string): string
{
  return strUcwords(value.replace(/[\-|\_]/gi, ' ')).replace(/\s/gi, '');
};

/**
 * 驼峰（首字母小写），'hello word' => 'helloWorld'
 * @param value
 * @returns
 */
export const strCamel = function (value: string): string
{
  return strLcwords(strStudly(value));
};

/**
 * 如果只有一个同名、同级节点，则不当作数组
 * @param obj
 * @returns
 */
export const singleItem = function (obj: any): any
{
  if (typeof obj == 'object') {
    if (typeof obj.length != 'undefined') {
      if (obj.length == 1) {
        return singleItem(obj[0]);
      }
      for (let i = 0; i < obj.length; i++) {
        obj[i] = singleItem(obj[i]);
      }
      return obj;
    }
    else {
      for (let k in obj) {
        obj[k] = singleItem(obj[k]);
      }
    }
  }
  return obj;
};

/**
 * 解析xml
 * @param xml
 * @returns
 */
export const parseXml = async function(xml: string): Promise<Record<string, any>>
{
  let res = await Xml2js.parseStringPromise(xml);
  res = singleItem(res);
  if(res['xml']) res = res['xml'];
  return res;
}

/**
 * 构建xml
 * @param data 对象
 * @param rootName 根节点名，默认：'xml'
 * @returns
 */
export const buildXml = function(data: Record<string, any>, rootName: string = 'xml'): string
{
  let XmlBuilder = new Xml2js.Builder({
    cdata: true,
    xmldec: null,
    rootName,
    renderOpts: {
      pretty: false,
      indent: '',
      newline: '',
    }
  });
  return XmlBuilder.buildObject(data).replace('<?xml version="1.0"?>', '');
}
