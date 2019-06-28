
import fs from 'fs';
import Core from './core';
import {log, extendObj, isObject} from '../utils';

const init = function (instance) {
};

const getMaterial = async function (mediaId) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('material/get_material') + '&media_id=' + mediaId;
  let res;
  try {
    res = await instance.requestFile(url);
  }
  catch (e) {
    log('material.getMaterial()', mediaId, e);
    return false;
  }
  if (isObject(res) && res.errcode) {
    log('material.getMaterial()', mediaId, res);
    return false;
  }
  return res;
};

const download = async function (mediaId, path, fileName = '') {
  let stream = await get(mediaId);
  if (!stream) return false;
  try {
    fileName = fileName || mediaId + '.jpg';
    fs.writeFileSync(path + fileName, stream, 'binary');
  }
  catch (e) {
    log('material.download()', e);
    return false;
  }
  return true;
};

const upload = async function (file, type = 'image', extra = null) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('material/add_material') + '&type=' + type;
  let res;
  try {
    let formData = {media: fs.createReadStream(file)};
    if (extra) {
      formData = extendObj(formData, extra);
    }
    res = await instance.requestForm(url, formData);
  }
  catch (e) {
    log('material.upload()', file, type, e);
    return false;
  }
  if (res.errcode) {
    log('material.upload()', file, type, res);
    return false;
  }
  return res;
};

const uploadImage = async function (file) {
  return await upload(file, 'image');
};

const uploadVoice = async function (file) {
  return await upload(file, 'voice');
};

const uploadVideo = async function (file, title, desc) {
  let extra = {
    description: JSON.stringify({title: title || '', introduction: desc || ''})
  };
  return await upload(file, 'video', extra);
};

const uploadThumb = async function (file) {
  return await upload(file, 'thumb');
};

const deleteMaterial = async function (mediaId) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('material/del_material');
  let res;
  try {
    res = await instance.requestPost(url, {mediaId: mediaId});
  }
  catch (e) {
    log('material.deleteMaterial()', mediaId, e);
    return false;
  }
  if (res.errcode) {
    log('material.deleteMaterial()', mediaId, res);
    return false;
  }
  return res;
};

const lists = async function (type, offset = 0, count = 20) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('material/batchget_material');
  let res;
  try {
    res = await instance.requestPost(url, {
      type: type,
      offset: offset,
      count: count
    });
  }
  catch (e) {
    log('material.lists()', type, offset, count, e);
    return false;
  }
  if (res.errcode) {
    log('material.lists()', type, offset, count, res);
    return false;
  }
  return res;
};

const stats = async function () {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('material/get_materialcount');
  let res;
  try {
    res = await instance.requestGet(url);
  }
  catch (e) {
    log('material.stats()', e);
    return false;
  }
  if (res.errcode) {
    log('material.stats()', res);
    return false;
  }
  return res;
};

const uploadArticle = async function (article) {
  if (isObject(article)) article = [article];

  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('material/add_news');
  let res;
  try {
    res = await instance.requestPost(url, {
      articles: article
    });
  }
  catch (e) {
    log('material.uploadArticle()', article, e);
    return false;
  }
  if (res.errcode) {
    log('material.uploadArticle()', article, res);
    return false;
  }
  return res;
};

const uploadArticleImage = async function (file) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('media/uploadimg');
  let res;
  try {
    let formData = {media: fs.createReadStream(file)};
    res = await instance.requestForm(url, formData);
  }
  catch (e) {
    log('material.uploadArticleImage()', file, type, e);
    return false;
  }
  if (res.errcode) {
    log('material.uploadArticleImage()', file, type, res);
    return false;
  }
  return res;
};

const updateArticle = async function (mediaId, article, index = 0) {
  if (isObject(article)) article = [article];

  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('material/update_news');
  let res;
  try {
    res = await instance.requestPost(url, {
      media_id: mediaId,
      index: index,
      articles: article
    });
  }
  catch (e) {
    log('material.updateArticle()', mediaId, article, index, e);
    return false;
  }
  if (res.errcode) {
    log('material.updateArticle()', mediaId, article, index, res);
    return false;
  }
  return res;
};

export default {
  init,
  get: getMaterial,
  download,
  upload,
  uploadImage,
  uploadVoice,
  uploadVideo,
  uploadThumb,
  delete: deleteMaterial,
  lists,
  stats,
  uploadArticle,
  uploadArticleImage,
  updateArticle
};
