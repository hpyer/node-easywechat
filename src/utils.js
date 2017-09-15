
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

const buildApiUrl = async function (instance, baseUrl) {
  let access_token = await instance.access_token.getToken();
  return baseUrl + '?access_token=' + access_token;
}

export default {
  getTimestamp,
  randomString,
  buildApiUrl
}
