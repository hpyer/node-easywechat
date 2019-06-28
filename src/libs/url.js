
import Core from './core';

const init = function (instance) {
};

const shorten = async function (long_url) {
  let data = {
    action: 'long2short',
    long_url
  };
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('shorturl');
  return await instance.requestPost(url, data);
};

export default {
  init,
  shorten
};
