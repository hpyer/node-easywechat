
import fs from 'fs';
import Core from './core';
import {log, isObject} from '../utils';

const init = function (instance) {
};

const getStream = async function (mediaId) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('media/get') + '&media_id=' + mediaId;
  let res;
  try {
    res = await instance.requestFile(url);
  }
  catch (e) {
    log('material_temporary.getStream()', mediaId, e);
    return false;
  }
  if (isObject(res)) {
    if (res.video_url) {
      return await instance.requestFile(res.video_url);
    }
    else {
      log('material_temporary.getStream()', res);
      return false;
    }
  }
  return res;
};

const download = async function (mediaId, path, fileName = '') {
  let stream = await getStream(mediaId);
  if (!stream) return false;
  try {
    fileName = fileName || mediaId + '.jpg';
    fs.writeFileSync(path + fileName, stream, 'binary');
  }
  catch (e) {
    log('material_temporary.download()', e);
    return false;
  }
  return true;
};

const upload = async function (file, type = 'image', extra = null) {
  let instance = Core.getInstance();
  let url = await instance.buildApiUrl('media/upload') + '&type=' + type;
  let res;
  try {
    let formData = {media: fs.createReadStream(file)};
    if (extra) {
      formData = extendObj(formData, extra);
    }
    res = await instance.requestForm(url, formData);
  }
  catch (e) {
    log('material_temporary.upload()', file, type, e);
    return false;
  }
  if (res.errcode) {
    log('material_temporary.upload()', file, type, res);
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
    description: JSON.stringify({
      title: title || '',
      introduction: desc || ''
    })
  };
  return await upload(file, 'video', extra);
};

const uploadThumb = async function (file) {
  return await upload(file, 'thumb');
};

export default {
  init,
  getStream,
  download,
  upload,
  uploadImage,
  uploadVoice,
  uploadVideo,
  uploadThumb
};
