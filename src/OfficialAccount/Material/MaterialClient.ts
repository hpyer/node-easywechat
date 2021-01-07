'use strict';

import Fs from 'fs';
import BaseClient from '../../Core/BaseClient';
import { inArray, isString, isObject } from '../../Core/Utils';
import { Article } from '../../Core/Messages';
import StreamResponse from '../../Core/Http/StreamResponse';

export default class MaterialClient extends BaseClient
{
  protected allowTypes: Array<string> = ['image', 'voice', 'video', 'thumb', 'news_image'];

  /**
   * 上传图片
   * @param file 文件路径或可读stream
   */
  uploadImage(file: any): Promise<any>
  {
    return this.upload('image', file);
  }
  /**
   * 上传视频
   * @param file 文件路径或可读stream
   * @param title 标题
   * @param description 描述
   */
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
  /**
   * 上传语音
   * @param file 文件路径或可读stream
   */
  uploadVoice(file: any): Promise<any>
  {
    return this.upload('voice', file);
  }
  /**
   * 上传缩略图
   * @param file 文件路径或可读stream
   */
  uploadThumb(file: any): Promise<any>
  {
    return this.upload('thumb', file);
  }
  /**
   * 上传图文消息图片
   * @param file 文件路径或可读stream
   */
  uploadArticleImage(file: any): Promise<any>
  {
    return this.upload('news_image', file);
  }

  protected upload(type: string, file: any, formData: object = {}): Promise<any>
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

  protected getApiByType(type: string): string
  {
    if (type == 'news_image') {
      return 'cgi-bin/media/uploadimg';
    }
    return 'cgi-bin/material/add_material';
  }

  /**
   * 上传图文消息
   * @param articles 图文消息（Article）实例或图文消息（Article）实例列表
   */
  uploadArticle(articles: Article | object | Array<Article>): Promise<any>
  {
    let list: Array<Article> = [];
    if (articles instanceof Article || (typeof articles == 'object' && articles['title'])) {
      list = [<Article> articles];
    }
    else {
      list = <Array<Article>> articles;
    }

    let data = {
      articles: [],
    };
    list.forEach(article => {
      if (article instanceof Article) {
        data.articles.push(article.transformForJsonRequestWithoutType());
      }
      else {
        data.articles.push(article);
      }
    });

    return this.httpPostJson('cgi-bin/material/add_news', data);
  }

  /**
   * 修改图文消息
   * @param media_id 文章的media_id
   * @param article Article 实例
   * @param index 要更新的文章在图文消息中的位置（多图文消息时，此字段才有意义，单图片忽略此参数），第一篇为 0
   */
  updateArticle(media_id: string, article: Article | object, index: number = 0): Promise<any>
  {
    let data: object = null;
    if (article instanceof Article) {
      data = article.transformForJsonRequestWithoutType();
    }
    else {
      data = article;
    }

    return this.httpPostJson('cgi-bin/material/update_news', {
      media_id,
      index,
      articles: data['title'] ? data : (data[index] || {}),
    });
  }

  /**
   * 获取永久素材
   * @param media_id 素材media_id
   */
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

    if (res.getHeader('content-disposition').indexOf('attachment') > -1) {
      return StreamResponse.buildFromResponse(res);
    }

    return res.getContent();
  }

  /**
   * 删除永久素材
   * @param media_id 素材media_id
   */
  delete(media_id: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/material/del_material', {
      media_id,
    });
  }

  /**
   * 获取永久素材列表
   * @param type 素材的类型，图片（image）、视频（video）、语音 （voice）、图文（news）
   * @param offset 偏移起始位置，从0开始，默认：0
   * @param count 数量, 可选值：1～20，默认：20
   */
  list(type: string, offset: number = 0, count: number = 20): Promise<any>
  {
    return this.httpPostJson('cgi-bin/material/batchget_material', {
      type,
      offset,
      count,
    });
  }

  /**
   * 获取素材计数
   */
  stats(): Promise<any>
  {
    return this.httpGet('cgi-bin/material/get_materialcount');
  }

}
