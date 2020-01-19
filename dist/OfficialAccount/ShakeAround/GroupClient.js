'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
class GroupClient extends Client_1.default {
    create(name) {
        return this.httpPostJson('shakearound/device/group/add', {
            group_name: name,
        });
    }
    update(groupId, name) {
        return this.httpPostJson('shakearound/device/group/update', {
            group_id: groupId,
            group_name: name,
        });
    }
    delete(groupId) {
        return this.httpPostJson('shakearound/device/group/delete', {
            group_id: groupId,
        });
    }
    list(begin, count) {
        return this.httpPostJson('shakearound/device/group/getlist', {
            begin,
            count,
        });
    }
    get(groupId, begin, count) {
        return this.httpPostJson('shakearound/device/group/getdetail', {
            group_id: groupId,
            begin,
            count,
        });
    }
    addDevices(groupId, deviceIdentifiers) {
        return this.httpPostJson('shakearound/device/group/adddevice', {
            group_id: groupId,
            device_identifiers: deviceIdentifiers,
        });
    }
    removeDevices(groupId, deviceIdentifiers) {
        return this.httpPostJson('shakearound/device/group/deletedevice', {
            group_id: groupId,
            device_identifiers: deviceIdentifiers,
        });
    }
}
exports.default = GroupClient;
