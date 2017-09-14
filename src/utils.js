
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

export default {
  getTimestamp,
  randomString
}
