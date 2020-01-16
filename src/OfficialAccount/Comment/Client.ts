'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{

  async open(msg_data_id: string, index: number): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/comment/open', {
      msg_data_id,
      index,
    });
  }

  async close(msg_data_id: string, index: number): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/comment/close', {
      msg_data_id,
      index,
    });
  }

  async list(msg_data_id: string, index: number, begin: number, count: number, type: number = 0): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/comment/list', {
      msg_data_id,
      index,
      begin,
      count,
      type,
    });
  }

  async markElect(msg_data_id: string, index: number, user_comment_id: number): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/comment/markelect', {
      msg_data_id,
      index,
      user_comment_id,
    });
  }

  async unmarkElect(msg_data_id: string, index: number, user_comment_id: number): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/comment/unmarkelect', {
      msg_data_id,
      index,
      user_comment_id,
    });
  }

  async delete(msg_data_id: string, index: number, user_comment_id: number): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/comment/delete', {
      msg_data_id,
      index,
      user_comment_id,
    });
  }

  async reply(msg_data_id: string, index: number, user_comment_id: number, content: string): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/comment/reply/add', {
      msg_data_id,
      index,
      user_comment_id,
      content,
    });
  }

  async deleteReply(msg_data_id: string, index: number, user_comment_id: number): Promise<any>
  {
    return await this.httpPostJson('cgi-bin/comment/reply/delete', {
      msg_data_id,
      index,
      user_comment_id,
    });
  }

}
