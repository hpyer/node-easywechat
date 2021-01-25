'use strict';

import BaseClient from '../../Core/BaseClient';

export default class OAClient extends BaseClient
{

  checkinRecords(startTime: number, endTime: number, userList: Array<string>, type: number = 3): Promise<any>
  {
    let params = {
      opencheckindatatype: type,
      starttime: startTime,
      endtime: endTime,
      useridlist: userList,
    };

    return this.httpPostJson('cgi-bin/checkin/getcheckindata', params);
  }

  checkinRules(datetime: number, userList: Array<string>): Promise<any>
  {
    let params = {
      datetime: datetime,
      useridlist: userList,
    };

    return this.httpPostJson('cgi-bin/checkin/getcheckinoption', params);
  }

  approvalTemplate(templateId: string): Promise<any>
  {
    let params = {
      template_id: templateId,
    };

    return this.httpPostJson('cgi-bin/oa/gettemplatedetail', params);
  }

  createApproval(data: object): Promise<any>
  {
      return this.httpPostJson('cgi-bin/oa/applyevent', data);
  }

  approvalNumbers(startTime: number, endTime: number, nextCursor: number = 0, size: number = 100, filters: Array<string> = []): Promise<any>
  {
    let params = {
      starttime: startTime,
      endtime: endTime,
      cursor: nextCursor,
      size: size > 100 ? 100 : size,
      filters: filters,
    };

    return this.httpPostJson('cgi-bin/oa/getapprovalinfo', params);
  }

  approvalDetail(number: number): Promise<any>
  {
    let params = {
      sp_no: number,
    };

    return this.httpPostJson('cgi-bin/oa/getapprovaldetail', params);
  }

  approvalRecords(startTime: number, endTime: number, nextNumber = null): Promise<any>
  {
    let params = {
      starttime: startTime,
      endtime: endTime,
      next_spnum: nextNumber,
    };

    return this.httpPostJson('cgi-bin/corp/getapprovaldata', params);
  }

  dialRecords(startTime: number, endTime: number, offset: number = 0, limit: number = 100): Promise<any>
  {
    let params = {
      start_time: startTime,
      end_time: endTime,
      offset: offset,
      limit: limit,
    };

    return this.httpPostJson('cgi-bin/dial/get_dial_record', params);
  }

}
