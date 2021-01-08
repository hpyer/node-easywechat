'use strict';

import Crypto from 'crypto';
import Qs from 'qs';

export const merge = (target: any, source: any): any => {
  if (isObject(source)) {
    if (source.constructor !== Object) {
      target = source;
    }
    else {
      if (!target || !isObject(target)) {
        target = {};
      }
      Object.keys(source).map((k) => {
        if (!target[k]) {
          target[k] = null;
        }
        target[k] = merge(target[k], source[k]);
      });
    }
  }
  else if (isArray(source)) {
    if (!target || !isArray(target)) {
      target = [];
    }
    target = target.concat(target, source);
  }
  else {
    target = source;
  }
  return target;
}

export const createHash = function (str: string, type: string = 'sha1'): any
{
  return Crypto.createHash(type).update(str).digest('hex');
};

export const createHmac = function (str: string, key: string, type: string = 'sha256'): any
{
  return Crypto.createHmac(type, key).update(str).digest('hex');
};

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

export const buildQueryString = function (data: object, options: object = {}): string
{
  return Qs.stringify(data, options);
};

export const parseQueryString = function (data: string, options: object = {}): object
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

export const applyMixins = function (derivedCtor: any, baseCtors: any[]): void
{
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
};

// 将单词首字母转成大写，'hello word' => 'Hello World'
export const strUcwords = function (str: string): string
{
  return str.replace(/\b[a-z]/gi, function (letter) {
    return letter.toUpperCase();
  });
};

// 将单词首字母转成小写，'Hello World' => 'hello word'
export const strLcwords = function (str: string): string
{
  return str.replace(/\b[a-z]/gi, function (letter) {
    return letter.toLowerCase();
  });
};

// 驼峰（首字母大写），'hello word' => 'HelloWorld'
export const strStudly = function (value: string): string
{
  return strUcwords(value.replace(/[\-|\_]/gi, ' ')).replace(/\s/gi, '');
};

// 驼峰（首字母小写），'hello word' => 'helloWorld'
export const strCamel = function (value: string): string
{
  return strLcwords(strStudly(value));
};

// 如果只有一个同名、同级节点，则不当作数组
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

export const AesDecrypt = function (ciphertext, key, iv, method)
{
  var decipher = Crypto.createDecipheriv(method, key, iv);
  decipher.setAutoPadding(true)
  var plaintext = decipher.update(ciphertext, 'hex', 'utf8');
  plaintext += decipher.final('utf8');
  return plaintext;
}
