'use strict';

import * as Fs from 'fs';
import BaseClient from '../../Core/BaseClient';
import { inArray, isString, isObject } from '../../Core/Utils';
import { Article } from '../../Core/Messages';
import StreamResponse from '../../Core/Http/StreamResponse';

export default class Client extends BaseClient
{
  protected allowTypes: Array<string> = ['image', 'voice', 'video', 'thumb', 'news_image'];

  uploadImage(file: any): Promise<any>
  {
    return this.upload('image', file);
  }
  uploadVideo(file: any, title: string, description: string): Promise<any>
  {
    let params = {
      description: JSON.stringify({
        title: title,
        introduction: description,
      }),
    };

    return this.upload('video', file, params);
  }
  uploadVoice(file: any): Promise<any>
  {
    return this.upload('voice', file);
  }
  uploadThumb(file: any): Promise<any>
  {
    return this.upload('thumb', file);
  }
  uploadArticleImage(file: any): Promise<any>
  {
    return this.upload('news_image', file);
  }

  upload(type: string, file: any, formData: object = {}): Promise<any>
  {
    if (!file) {
      throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
    }
    if (isString(file)) {
      file = Fs.createReadStream(file);
    }

    if (!inArray(type, this.allowTypes)) {
      throw new Error(`Unsupported media type: '${type}'`);
    }

    if (!formData || !isObject(formData)) {
      formData = {};
    }
    formData['media'] = file;
    formData['type'] = type;

    return this.httpPost(this.getApiByType(type), formData);
  }

  getApiByType(type: string): string
  {
    if (type == 'news_image') {
      return 'cgi-bin/media/uploadimg';
    }
    return 'cgi-bin/material/add_material';
  }

  uploadArticle(articles: any): Promise<any>
  {
    if (articles instanceof Article || articles['title']) {
      articles = [articles];
    }

    let data = {
      articles: [],
    };
    articles.forEach(article => {
      if (article instanceof Article) {
        data.articles.push(article.transformForJsonRequestWithoutType());
      }
      else {
        data.articles.push(article);
      }
    });

    return this.httpPostJson('cgi-bin/material/add_news', data);
  }

  updateArticle(media_id: string, article: any, index: number = 0): Promise<any>
  {
    if (article instanceof Article) {
      article = article.transformForJsonRequestWithoutType();
    }

    return this.httpPostJson('cgi-bin/material/update_news', {
      media_id,
      index,
      articles: article['title'] ? article : (article[index] || {}),
    });
  }

  async get(media_id: string): Promise<any>
  {
    let res = await this.requestRaw({
      url: 'cgi-bin/material/get_material',
      method: 'POST',
      json: true,
      body: {
        media_id,
      }
    });

    if (res.getHeader['content-disposition'].indexOf('attachment') > -1) {
      return StreamResponse.buildFromIncomingMessage(res);
    }

    let content = res.getContent().toString();
    try {
      content = JSON.parse(content);
    }
    catch (e) { }

    return content;
  }

  delete(media_id: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/material/del_material', {
      media_id,
    });
  }

  list(type: string, offset: number = 0, count: number = 20): Promise<any>
  {
    return this.httpPostJson('cgi-bin/material/batchget_material', {
      type,
      offset,
      count,
    });
  }

  stats(): Promise<any>
  {
    return this.httpGet('cgi-bin/material/get_materialcount');
  }

}
