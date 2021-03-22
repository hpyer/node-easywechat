'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class BroadcastClient extends BaseClient_1.default {
    create(goodsInfo) {
        return this.httpPostJson('wxaapi/broadcast/goods/add', {
            goodsInfo,
        });
    }
    resetAudit(auditId, goodsId) {
        return this.httpPostJson('wxaapi/broadcast/goods/resetaudit', {
            auditId,
            goodsId,
        });
    }
    resubmitAudit(goodsId) {
        return this.httpPostJson('wxaapi/broadcast/goods/audit', {
            goodsId,
        });
    }
    delete(goodsId) {
        return this.httpPostJson('wxaapi/broadcast/goods/delete', {
            goodsId,
        });
    }
    update(goodsInfo) {
        return this.httpPostJson('wxaapi/broadcast/goods/update', {
            goodsInfo,
        });
    }
    getGoodsWarehouse(goodsIds) {
        return this.httpPostJson('wxa/business/getgoodswarehouse', {
            goods_ids: goodsIds,
        });
    }
    getApproved(params) {
        return this.httpGet('wxaapi/broadcast/goods/getapproved', params);
    }
    addGoods(params) {
        return this.httpPost('wxaapi/broadcast/room/addgoods', params);
    }
    getRooms(start = 0, limit = 10) {
        return this.httpPostJson('wxa/business/getliveinfo', {
            start,
            limit,
        });
    }
    getPlaybacks(roomId, start = 0, limit = 10) {
        return this.httpPostJson('wxa/business/getliveinfo', {
            action: 'get_replay',
            room_id: roomId,
            start,
            limit,
        });
    }
    createLiveRoom(params) {
        return this.httpPost('wxaapi/broadcast/room/create', params);
    }
    deleteLiveRoom(params) {
        return this.httpPost('wxaapi/broadcast/room/deleteroom', params);
    }
    updateLiveRoom(params) {
        return this.httpPost('wxaapi/broadcast/room/editroom', params);
    }
    getPushUrl(params) {
        return this.httpGet('wxaapi/broadcast/room/getpushurl', params);
    }
    getShareQrcode(params) {
        return this.httpGet('wxaapi/broadcast/room/getsharedcode', params);
    }
    addAssistant(params) {
        return this.httpPost('wxaapi/broadcast/room/addassistant', params);
    }
    updateAssistant(params) {
        return this.httpPost('wxaapi/broadcast/room/modifyassistant', params);
    }
    deleteAssistant(params) {
        return this.httpPost('wxaapi/broadcast/room/removeassistant', params);
    }
    getAssistantList(params) {
        return this.httpGet('wxaapi/broadcast/room/getassistantlist', params);
    }
    addSubAnchor(params) {
        return this.httpPost('wxaapi/broadcast/room/addsubanchor', params);
    }
    updateSubAnchor(params) {
        return this.httpPost('wxaapi/broadcast/room/modifysubanchor', params);
    }
    deleteSubAnchor(params) {
        return this.httpPost('wxaapi/broadcast/room/deletesubanchor', params);
    }
    getSubAnchor(params) {
        return this.httpGet('wxaapi/broadcast/room/getsubanchor', params);
    }
    updateFeedPublic(params) {
        return this.httpPost('wxaapi/broadcast/room/updatefeedpublic', params);
    }
    updateReplay(params) {
        return this.httpPost('wxaapi/broadcast/room/updatereplay', params);
    }
    updateKf(params) {
        return this.httpPost('wxaapi/broadcast/room/updatekf', params);
    }
    updateComment(params) {
        return this.httpPost('wxaapi/broadcast/room/updatecomment', params);
    }
    addRole(params) {
        return this.httpPost('wxaapi/broadcast/role/addrole', params);
    }
    deleteRole(params) {
        return this.httpPost('wxaapi/broadcast/role/deleterole', params);
    }
    getRoleList(params) {
        return this.httpGet('wxaapi/broadcast/role/getrolelist', params);
    }
    getFollowers(params) {
        return this.httpPost('wxa/business/get_wxa_followers', params);
    }
    pushMessage(params) {
        return this.httpPost('wxa/business/push_message', params);
    }
    updateGoodsInRoom(params) {
        return this.httpPost('wxaapi/broadcast/goods/onsale', params);
    }
    deleteGoodsInRoom(params) {
        return this.httpPost('wxaapi/broadcast/goods/deleteInRoom', params);
    }
    pushGoods(params) {
        return this.httpPost('wxaapi/broadcast/goods/push', params);
    }
    sortGoods(params) {
        return this.httpPost('wxaapi/broadcast/goods/sort', params);
    }
    downloadGoodsExplanationVideo(params) {
        return this.httpPost('wxaapi/broadcast/goods/getVideo', params);
    }
}
exports.default = BroadcastClient;
