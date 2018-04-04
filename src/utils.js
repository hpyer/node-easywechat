
export const log = function () {
  let args = arguments;
  args[0] = 'NodeEasywechat: ' + args[0];
  return console.log.apply(null, arguments);
}

export const getTimestamp = function () {
  return parseInt((new Date()).getTime() / 1000);
}

export const randomString = function (len = 16) {
  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  let str = '';
  for (let i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}

export const cloneObj = function (oldObj) {
  if (!oldObj) return oldObj;
  if (typeof(oldObj) != 'object') return oldObj;
  let newObj = new Object();
  for (let k in oldObj) {
    newObj[k] = cloneObj(oldObj[k]);
  }
  return newObj;
}

export const extendObj = function () {
  let args = arguments;
  if (args.length == 0) return null;
  let temp = cloneObj(args[0]);
  if (args.length == 1) return temp;
  for (let i=1; i<args.length; i++) {
    if (!args[i] || typeof(args[i]) != 'object') continue;
    for (let k in args[i]) {
      temp[k] = args[i][k];
    }
  }
  return temp;
}

const crypto = require('crypto');

export const createHash = function (str, type = 'sha1') {
  return crypto.createHash(type).update(str).digest('hex');
}

export const createHmac = function (str, key, type = 'sha256') {
  return crypto.createHmac('sha256', key).update(str).digest('hex');
}

export const makeSignature = function (params, type = 'sha1', key = '') {
  let paramsString = '';
  let sparator = '';
  let keys = Object.keys(params);
  keys = keys.sort();
  for (let i=0; i<keys.length; i++) {
    if (keys[i] == 'sign') continue;
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
    case 'hmac_sha256':
      type = type.replace('hamc_', '');
      sign = createHmac(paramsString, type, key);
      break;
  }
  return sign;
}


export const isString = data => {
  return Object.prototype.toString.call(data) == '[object String]';
}

export const isArray = data => {
  return Object.prototype.toString.call(data) == '[object Array]';
}

export const isNumber = data => {
  return Object.prototype.toString.call(data) == '[object Number]';
}

export const isObject = data => {
  return Object.prototype.toString.call(data) == '[object Object]';
}
