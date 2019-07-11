
import Core from './core';
import { log, isArray, inArray} from '../utils';

const BROADCAST_TYPE_NEWS = 'mpnews';
const BROADCAST_TYPE_TEXT = 'text';
const BROADCAST_TYPE_VOICE = 'voice';
const BROADCAST_TYPE_IMAGE = 'image';
const BROADCAST_TYPE_CARD = 'wxcard';
const BROADCAST_TYPE_VIDEO = 'mpvideo';
const BROADCAST_TYPES = [BROADCAST_TYPE_NEWS, BROADCAST_TYPE_TEXT, BROADCAST_TYPE_VOICE, BROADCAST_TYPE_IMAGE, BROADCAST_TYPE_CARD, BROADCAST_TYPE_VIDEO];

const init = function (instance) {
};

const send = async function (type, message, target = null) {
  if (!inArray(type, BROADCAST_TYPES)) return false;
  let api = '', data = {
    msgtype: type,
  };
  if (isArray(target) && target.length > 0) {
    data.touser = target;
    api = 'message/mass/send';
  }
  else {
    data.filter = {
      is_to_all: true,
    };
    if (target) {
      data.filter.is_to_all = false;
      data.filter.tag_id = target;
    }
    api = 'message/mass/sendall';
  }

  let instance = Core.getInstance();

  data[type] = {};
  switch (type) {
    case BROADCAST_TYPE_NEWS:
      data[type] = {
        media_id: message
      };
      break;
    case BROADCAST_TYPE_TEXT:
      data[type] = {
        content: message
      };
      break;
    case BROADCAST_TYPE_VOICE:
      data[type] = {
        media_id: message
      };
      break;
    case BROADCAST_TYPE_IMAGE:
      data[type] = {
        media_id: message
      };
      break;
    case BROADCAST_TYPE_CARD:
      data[type] = {
        card_id: message
      };
      break;
    case BROADCAST_TYPE_VIDEO:
      let res1;
      try {
        let url1 = await instance.buildApiUrl('media/uploadvideo');
        res1 = await instance.requestPost(url1, message);
        data[type] = {
          media_id: res1.media_id
        };
        break;
      }
      catch (e) {
        log('broadcast.exchange_video_id', message, e);
        return false;
      }
  }

  let url = await instance.buildApiUrl(api);
  let res = await instance.requestPost(url, data);
  if (!res || res.errcode) {
    log('broadcast.send()', data, res);
    return false;
  }

  return res;
};

const sendText = async function (text, target) {
  return await send(BROADCAST_TYPE_TEXT, text, target);
};
const sendNews = async function (media_id, target) {
  return await send(BROADCAST_TYPE_NEWS, media_id, target);
};
const sendVoice = async function (media_id, target) {
  return await send(BROADCAST_TYPE_VOICE, media_id, target);
};
const sendImage = async function (media_id, target) {
  return await send(BROADCAST_TYPE_IMAGE, media_id, target);
};
const sendVideo = async function (message, target) {
  return await send(BROADCAST_TYPE_VIDEO, message, target);
};
const sendCard = async function (card_id, target) {
  return await send(BROADCAST_TYPE_CARD, card_id, target);
};

const preview = async function (type, message, target, isName = false) {
  if (!inArray(type, BROADCAST_TYPES)) return false;
  let api = 'message/mass/preview', data = {
    msgtype: type,
  };
  if (isName) {
    data.towxname = target;
  }
  else {
    data.touser = target;
  }

  let instance = Core.getInstance();

  data[type] = {};
  switch (type) {
    case BROADCAST_TYPE_NEWS:
      data[type] = {
        media_id: message
      };
      break;
    case BROADCAST_TYPE_TEXT:
      data[type] = {
        content: message
      };
      break;
    case BROADCAST_TYPE_VOICE:
      data[type] = {
        media_id: message
      };
      break;
    case BROADCAST_TYPE_IMAGE:
      data[type] = {
        media_id: message
      };
      break;
    case BROADCAST_TYPE_CARD:
      data[type] = message;
      break;
    case BROADCAST_TYPE_VIDEO:
      let res1;
      try {
        let url1 = await instance.buildApiUrl('media/uploadvideo');
        res1 = await instance.requestPost(url1, message);
        data[type] = {
          media_id: res1.media_id
        };
        break;
      }
      catch (e) {
        log('broadcast.exchange_video_id', message, e);
        return false;
      }
  }

  let url = await instance.buildApiUrl(api);
  let res = await instance.requestPost(url, data);
  if (!res || res.errcode) {
    log('broadcast.preview', data, res);
    return false;
  }

  return res;
};

const previewText = async function (text, target) {
  return await preview(BROADCAST_TYPE_TEXT, text, target);
};
const previewNews = async function (media_id, target) {
  return await preview(BROADCAST_TYPE_NEWS, media_id, target);
};
const previewVoice = async function (media_id, target) {
  return await preview(BROADCAST_TYPE_VOICE, media_id, target);
};
const previewImage = async function (media_id, target) {
  return await preview(BROADCAST_TYPE_IMAGE, media_id, target);
};
const previewVideo = async function (message, target) {
  return await preview(BROADCAST_TYPE_VIDEO, message, target);
};
const previewCard = async function (card, target) {
  return await preview(BROADCAST_TYPE_CARD, card, target);
};

const previewByName = async function (type, message, wxname) {
  return await preview(type, message, wxname, true);
}
const previewTextByName = async function (text, target) {
  return await preview(BROADCAST_TYPE_TEXT, text, target, true);
};
const previewNewsByName = async function (media_id, target) {
  return await preview(BROADCAST_TYPE_NEWS, media_id, target, true);
};
const previewVoiceByName = async function (media_id, target) {
  return await preview(BROADCAST_TYPE_VOICE, media_id, target, true);
};
const previewImageByName = async function (media_id, target) {
  return await preview(BROADCAST_TYPE_IMAGE, media_id, target, true);
};
const previewVideoByName = async function (message, target) {
  return await preview(BROADCAST_TYPE_VIDEO, message, target, true);
};
const previewCardByName = async function (card, target) {
  return await preview(BROADCAST_TYPE_CARD, card, target, true);
};

const deleteBrodcast = async function (msg_id, article_idx = 0) {
  article_idx = parseInt(article_idx || 0);
  if (article_idx < 0) article_idx = 0;
  let data = {
    msg_id,
    article_idx
  };

  let instance = Core.getInstance();

  let url = await instance.buildApiUrl('message/mass/delete');
  let res = await instance.requestPost(url, data);
  if (!res || res.errcode) {
    log('broadcast.delete', data, res);
    return false;
  }

  return res;
};

const get = async function (msg_id) {
  let data = {
    msg_id,
  };

  let instance = Core.getInstance();

  let url = await instance.buildApiUrl('message/mass/get');
  let res = await instance.requestPost(url, data);
  if (!res || res.errcode) {
    log('broadcast.get', data, res);
    return false;
  }

  return res;
};

export default {
  MSG_TYPE_NEWS: BROADCAST_TYPE_NEWS,
  MSG_TYPE_TEXT: BROADCAST_TYPE_TEXT,
  MSG_TYPE_VOICE: BROADCAST_TYPE_VOICE,
  MSG_TYPE_IMAGE: BROADCAST_TYPE_IMAGE,
  MSG_TYPE_CARD: BROADCAST_TYPE_CARD,
  MSG_TYPE_VIDEO: BROADCAST_TYPE_VIDEO,
  init,
  send,
  sendText,
  sendNews,
  sendVoice,
  sendImage,
  sendVideo,
  sendCard,
  preview,
  previewText,
  previewNews,
  previewVoice,
  previewImage,
  previewVideo,
  previewCard,
  previewByName,
  previewTextByName,
  previewNewsByName,
  previewVoiceByName,
  previewImageByName,
  previewVideoByName,
  previewCardByName,
  delete: deleteBrodcast,
  get,
};
