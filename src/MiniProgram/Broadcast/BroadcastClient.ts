'use strict';

import BaseClient from '../../Core/BaseClient';

export default class BroadcastClient extends BaseClient {

  create(goodsInfo: object): Promise<any> {
    return this.httpPostJson('wxaapi/broadcast/goods/add', {
      goodsInfo,
    });
  }

  resetAudit(auditId: number, goodsId: number): Promise<any> {
    return this.httpPostJson('wxaapi/broadcast/goods/resetaudit', {
      auditId,
      goodsId,
    });
  }

  resubmitAudit(goodsId: number): Promise<any> {
    return this.httpPostJson('wxaapi/broadcast/goods/audit', {
      goodsId,
    });
  }

  delete(goodsId: number): Promise<any> {
    return this.httpPostJson('wxaapi/broadcast/goods/delete', {
      goodsId,
    });
  }

  update(goodsInfo: object): Promise<any> {
    return this.httpPostJson('wxaapi/broadcast/goods/update', {
      goodsInfo,
    });
  }

  getGoodsWarehouse(goodsIds: string[]): Promise<any> {
    return this.httpPostJson('wxa/business/getgoodswarehouse', {
      goods_ids: goodsIds,
    });
  }

  getApproved(params: object): Promise<any> {
    return this.httpGet('wxaapi/broadcast/goods/getapproved', params);
  }

  addGoods(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/room/addgoods', params);
  }

  getRooms(start: number = 0, limit: number = 10): Promise<any> {
    return this.httpPostJson('wxa/business/getliveinfo', {
      start,
      limit,
    });
  }

  getPlaybacks(roomId: number, start: number = 0, limit: number = 10): Promise<any> {
    return this.httpPostJson('wxa/business/getliveinfo', {
      action: 'get_replay',
      room_id: roomId,
      start,
      limit,
    });
  }

  createLiveRoom(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/room/create', params);
  }

  deleteLiveRoom(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/room/deleteroom', params);
  }

  updateLiveRoom(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/room/editroom', params);
  }

  getPushUrl(params: object): Promise<any> {
    return this.httpGet('wxaapi/broadcast/room/getpushurl', params);
  }

  getShareQrcode(params: object): Promise<any> {
    return this.httpGet('wxaapi/broadcast/room/getsharedcode', params);
  }

  addAssistant(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/room/addassistant', params);
  }

  updateAssistant(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/room/modifyassistant', params);
  }

  deleteAssistant(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/room/removeassistant', params);
  }

  getAssistantList(params: object): Promise<any> {
    return this.httpGet('wxaapi/broadcast/room/getassistantlist', params);
  }

  addSubAnchor(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/room/addsubanchor', params);
  }

  updateSubAnchor(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/room/modifysubanchor', params);
  }

  deleteSubAnchor(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/room/deletesubanchor', params);
  }

  getSubAnchor(params: object): Promise<any> {
    return this.httpGet('wxaapi/broadcast/room/getsubanchor', params);
  }

  updateFeedPublic(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/room/updatefeedpublic', params);
  }

  updateReplay(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/room/updatereplay', params);
  }

  updateKf(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/room/updatekf', params);
  }

  updateComment(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/room/updatecomment', params);
  }

  addRole(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/role/addrole', params);
  }

  deleteRole(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/role/deleterole', params);
  }

  getRoleList(params: object): Promise<any> {
    return this.httpGet('wxaapi/broadcast/role/getrolelist', params);
  }

  getFollowers(params: object): Promise<any> {
    return this.httpPost('wxa/business/get_wxa_followers', params);
  }

  pushMessage(params: object): Promise<any> {
    return this.httpPost('wxa/business/push_message', params);
  }

  updateGoodsInRoom(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/goods/onsale', params);
  }

  deleteGoodsInRoom(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/goods/deleteInRoom', params);
  }

  pushGoods(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/goods/push', params);
  }

  sortGoods(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/goods/sort', params);
  }

  downloadGoodsExplanationVideo(params: object): Promise<any> {
    return this.httpPost('wxaapi/broadcast/goods/getVideo', params);
  }

}
