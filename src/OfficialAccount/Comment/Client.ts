'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{

  open(msg_data_id: string, index: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/comment/open', {
      msg_data_id,
      index,
    });
  }

  close(msg_data_id: string, index: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/comment/close', {
      msg_data_id,
      index,
    });
  }

  list(msg_data_id: string, index: number, begin: number, count: number, type: number = 0): Promise<any>
  {
    return this.httpPostJson('cgi-bin/comment/list', {
      msg_data_id,
      index,
      begin,
      count,
      type,
    });
  }

  markElect(msg_data_id: string, index: number, user_comment_id: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/comment/markelect', {
      msg_data_id,
      index,
      user_comment_id,
    });
  }

  unmarkElect(msg_data_id: string, index: number, user_comment_id: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/comment/unmarkelect', {
      msg_data_id,
      index,
      user_comment_id,
    });
  }

  delete(msg_data_id: string, index: number, user_comment_id: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/comment/delete', {
      msg_data_id,
      index,
      user_comment_id,
    });
  }

  reply(msg_data_id: string, index: number, user_comment_id: number, content: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/comment/reply/add', {
      msg_data_id,
      index,
      user_comment_id,
      content,
    });
  }

  deleteReply(msg_data_id: string, index: number, user_comment_id: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/comment/reply/delete', {
      msg_data_id,
      index,
      user_comment_id,
    });
  }

}
