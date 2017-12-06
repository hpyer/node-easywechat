
import utils from '../utils';

export class Raw {
  constructor (data) {
    this.dataParams = {
      ToUserName: '',
      FromUserName: '',
      CreateTime: utils.getTimestamp(),
      MsgType: ''
    };
    this.json = null;
    this.data = '';
    if (typeof data == 'object') {
      this.json = data;
    }
    else {
      this.data = data;
    }
  }

  setAttribute (name, value) {
    this.dataParams[name] = value;
  }

  formatData () {
    let data = '<xml>' + this._formatData(this.dataParams) + '</xml>';
    return data;
  }

  _formatData (v) {
    if (typeof v == 'object') {
      let data = '';
      for (let k in v) {
        data += `<${k}>${this._formatData(v[k])}</${k}>`
      }
      return data;
    }
    if (typeof v == 'string') {
      return '<![CDATA[' + v + ']]>';
    }
    else {
      return v;
    }
  }

  getData () {
    if (this.json) return JSON.stringify(this.json);
    if (!this.data) this.data = this.formatData();
    return this.data;
  }
};

export class Text extends Raw {
  constructor (options) {
    super('');
    this.dataParams.MsgType = 'text';
    this.dataParams.Content = options.content || '';
  }

  content (v) {
    this.dataParams.Content = v
  }
};

export class Image extends Raw {
  constructor (options) {
    super('');
    this.dataParams.MsgType = 'image';
    this.dataParams.Image = {
      MediaId: options.media_id || ''
    };
  }

  mediaId (v) {
    this.dataParams.Image.MediaId = v
  }
};

export class Voice extends Raw {
  constructor (options) {
    super('');
    this.dataParams.MsgType = 'voice';
    this.dataParams.Voice = {
      MediaId: options.media_id || ''
    };
  }

  mediaId (v) {
    this.dataParams.Voice.MediaId = v
  }
};

export class Video extends Raw {
  constructor (options) {
    super('');
    this.dataParams.MsgType = 'video';
    this.dataParams.Video = {
      MediaId: options.media_id || '',
      Title: options.title || '',
      Description: options.description || ''
    };
  }

  mediaId (v) {
    this.dataParams.Video.MediaId = v
  }

  title (v) {
    this.dataParams.Video.Title = v
  }

  description (v) {
    this.dataParams.Video.Description = v
  }
};

export class Music extends Raw {
  constructor (options) {
    super('');
    this.dataParams.MsgType = 'music';
    this.dataParams.Music = {
      MediaId: options.media_id || '',
      Title: options.title || '',
      Description: options.description || '',
      MusicUrl: options.music_url || '',
      HQMusicUrl: options.hq_music_url || '',
      ThumbMediaId: options.thumb_media_id || ''
    };
  }

  mediaId (v) {
    this.dataParams.Music.MediaId = v
  }

  title (v) {
    this.dataParams.Music.Title = v
  }

  description (v) {
    this.dataParams.Music.Description = v
  }

  musicUrl (v) {
    this.dataParams.Music.MusicUrl = v
  }

  hqMusicurl (v) {
    this.dataParams.Music.HQMusicUrl = v
  }

  thumbMediaId (v) {
    this.dataParams.Music.ThumbMediaId = v
  }
};

export class News extends Raw {
  constructor (options) {
    super('');
    this.dataParams.MsgType = 'news';
    this.dataParams.ArticleCount = 1;
    this.dataParams.Articles = {
      item: {
        Title: options.title || '',
        Description: options.description || '',
        Url: options.url || '',
        PicUrl: options.image || ''
      }
    };
  }

  title (v) {
    this.dataParams.Articles.item.Title = v
  }

  description (v) {
    this.dataParams.Articles.item.Description = v
  }

  url (v) {
    this.dataParams.Articles.item.Url = v
  }

  picUrl (v) {
    this.dataParams.Articles.item.PicUrl = v
  }
};
