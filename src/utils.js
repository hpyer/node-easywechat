
export const log = function () {
  let args = arguments;
  args[0] = 'NodeEasywechat: ' + args[0];
  return console.log.call(null, arguments);
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

export const sha1 = function (str) {
  let sha1 = require('crypto').createHash('sha1');
  sha1.update(str);
  return sha1.digest('hex');
}

export const isString = data => {
  return Object.prototype.toString.call(data) == '[object String]';
}

export const isArray = data => {
  return Object.prototype.toString.call(data) == '[object Array]';
}

export const getAvailableNews = function (arr) {
  let list = [];
  let response = null;
  for (let i in arr) {
    if (arr[i].dataParams.MsgType == 'news') {
      response = arr[i];
      list.push(arr[i].dataParams.Articles.item);
    }
  }
  if (list.length > 0 && response) {
    response.dataParams.ArticleCount = list.length;
    response.dataParams.Articles.item = list;
  }
  return response;
}
