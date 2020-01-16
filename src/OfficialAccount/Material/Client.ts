'use strict';

import * as Fs from 'fs';
import BaseClient from '../../Core/BaseClient';
import { inArray, isString, isObject } from '../../Core/Utils';
import { Article } from '../../Core/Messages';
import StreamResponse from '../../Core/Http/StreamResponse';

export default class Client extends BaseClient
{
  protected allowTypes: Array<string> = ['image', 'voice', 'video', 'thumb', 'news_image'];

  async uploadImage(file: any): Promise<any>
  {
    return await this.upload('image', file);
  }
  async uploadVideo(file: any, title: string, description: string): Promise<any>
  {
    let params = {
      description: JSON.stringify({
        title: title,
        introduction: description,
      }),
    };

    return await this.upload('video', file, params);
  }
  async uploadVoice(file: any): Promise<any>
  {
    return await this.upload('voice', file);
  }
  async uploadThumb(file: any): Promise<any>
  {
    return await this.upload('thumb', file);
  }
  async uploadArticleImage(file: any): Promise<any>
  {
    return await this.upload('news_image', file);
  }

  async upload(type: string, file: any, formData: object = {}): Promise<any>
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

    return await this.httpPost(this.getApiByType(type), formData);
  }

  getApiByType(type: string): string
  {
    if (type == 'news_image') {
      return 'cgi-bin/media/uploadimg';
    }
    return 'cgi-bin/material/add_material';
  }

  async uploadArticle(articles: any): Promise<any>
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

    return await this.httpPostJson('cgi-bin/material/add_news', data);
  }

  async updateArticle(media_id: string, article: any, index: number = 0): Promise<any>
  {
    if (article instanceof Article) {
      article = article.transformForJsonRequestWithoutType();
    }

    return await this.httpPostJson('cgi-bin/material/update_news', {
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

  async delete(media_id: string): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/material/del_material', {
      media_id,
    });
  }

  async list(type: string, offset: number = 0, count: number = 20): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/material/batchget_material', {
      type,
      offset,
      count,
    });
  }

  async stats(): Promise<any>
  {
    return await this.httpGet('cgi-bin/material/get_materialcount');
  }

}
