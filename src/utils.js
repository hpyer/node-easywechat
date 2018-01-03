
const getTimestamp = function () {
  return parseInt((new Date()).getTime() / 1000);
}

const randomString = function (len = 16) {
  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  let str = '';
  for (let i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}

const cloneObj = function (oldObj) {
  if (!oldObj) return oldObj;
  if (typeof(oldObj) != 'object') return oldObj;
  let newObj = new Object();
  for (let k in oldObj) {
    newObj[k] = cloneObj(oldObj[k]);
  }
  return newObj;
}

const extendObj = function () {
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

export default {
  getTimestamp,
  randomString,
  cloneObj,
  extendObj
}
