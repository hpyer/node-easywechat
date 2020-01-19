'use strict';

import Client from './Client';

export default class GroupClient extends Client
{

  create(name: string): Promise<any>
  {
    return this.httpPostJson('shakearound/device/group/add', {
      group_name: name,
    });
  }

  update(groupId: number, name: string): Promise<any>
  {
    return this.httpPostJson('shakearound/device/group/update', {
      group_id: groupId,
      group_name: name,
    });
  }

  delete(groupId: number): Promise<any>
  {
    return this.httpPostJson('shakearound/device/group/delete', {
      group_id: groupId,
    });
  }

  list(begin: number, count: number): Promise<any>
  {
    return this.httpPostJson('shakearound/device/group/getlist', {
      begin,
      count,
    });
  }

  get(groupId: number, begin: number, count: number): Promise<any>
  {
    return this.httpPostJson('shakearound/device/group/getdetail', {
      group_id: groupId,
      begin,
      count,
    });
  }

  addDevices(groupId: number, deviceIdentifiers: Array<object>): Promise<any>
  {
    return this.httpPostJson('shakearound/device/group/adddevice', {
      group_id: groupId,
      device_identifiers: deviceIdentifiers,
    });
  }

  removeDevices(groupId: number, deviceIdentifiers: Array<object>): Promise<any>
  {
    return this.httpPostJson('shakearound/device/group/deletedevice', {
      group_id: groupId,
      device_identifiers: deviceIdentifiers,
    });
  }

}
