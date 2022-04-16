'use strict';

import BaseClient from '../../Core/BaseClient';
import { inArray, isArray, merge } from '../../Core/Utils';

export default class UserClient extends BaseClient
{

  create(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/user/create', data);
  }

  update(id: string, data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/user/update', merge({
      userid: id,
    }, data));
  }

  delete(userId: Array<string> | string): Promise<any>
  {
    if (isArray(userId)) {
      return this.batchDelete(userId as Array<string>);
    }
    return this.httpGet('cgi-bin/user/delete', {
      userid: userId,
    });
  }

  batchDelete(userIds: Array<string>): Promise<any>
  {
    return this.httpPostJson('cgi-bin/user/batchdelete', {
      useridlist: userIds,
    });
  }

  get(userId: string): Promise<any>
  {
    return this.httpGet('cgi-bin/user/get', {
      userid: userId,
    });
  }

  getDepartmentUsers(departmentId: number, fetchChild: boolean): Promise<any>
  {
    return this.httpGet('cgi-bin/user/simplelist', {
      department_id: departmentId,
      fetch_child: fetchChild ? 1 : 0,
    });
  }

  getDetailedDepartmentUsers(departmentId: number, fetchChild: boolean): Promise<any>
  {
    return this.httpGet('cgi-bin/user/list', {
      department_id: departmentId,
      fetch_child: fetchChild ? 1 : 0,
    });
  }

  userIdToOpenid(userId: string, agentId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/user/convert_to_openid', {
      userid: userId,
      agentid: agentId,
    });
  }

  openidToUserId(openid: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/user/convert_to_userid', {
      openid,
    });
  }

  mobileToUserId(mobile: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/user/getuserid', {
      mobile,
    });
  }

  accept(userId: string): Promise<any>
  {
    return this.httpGet('cgi-bin/user/authsucc', {
      userid: userId,
    });
  }

  invite(params: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/batch/invite', params);
  }

  getInvitationQrCode(sizeType: number = 1): Promise<any>
  {
    if (inArray(sizeType, [1,2,3,4])) {
      throw new Error('The sizeType must be 1, 2, 3, 4.');
    }
    return this.httpGet('cgi-bin/corp/get_join_qrcode', {
      size_type: sizeType,
    });
  }

}
