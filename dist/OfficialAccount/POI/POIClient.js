'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class POIClient extends BaseClient_1.default {
    /**
     * 获取门店类目表
     */
    categories() {
        return this.httpGet('cgi-bin/poi/getwxcategory');
    }
    /**
     * 查询门店信息
     * @param poi_id 门店id
     */
    get(poi_id) {
        return this.httpPostJson('cgi-bin/poi/getpoi', {
            poi_id,
        });
    }
    /**
     * 查询门店列表
     * @param begin 开始位置，从0开始，默认：0
     * @param limit 返回数据条数，最大允许50，默认：20
     */
    list(begin = 0, limit = 20) {
        return this.httpPostJson('cgi-bin/poi/getpoilist', {
            begin,
            limit,
        });
    }
    /**
     * 创建门店
     * @param base_info 门店信息
     */
    create(base_info) {
        return this.httpPostJson('cgi-bin/poi/addpoi', {
            business: {
                base_info
            },
        });
    }
    /**
     * 创建门店并返回id
     * @param base_info 门店信息
     */
    createAndGetId(base_info) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.create(base_info);
            return res && res['poi_id'] ? res['poi_id'] : '';
        });
    }
    /**
     * 修改门店信息
     * @param poi_id 门店id
     * @param base_info 门店信息
     */
    update(poi_id, base_info) {
        base_info['poi_id'] = poi_id;
        return this.httpPostJson('cgi-bin/poi/updatepoi', {
            business: {
                base_info
            },
        });
    }
    /**
     * 删除门店
     * @param poi_id 门店id
     */
    delete(poi_id) {
        return this.httpPostJson('cgi-bin/poi/delpoi', {
            poi_id,
        });
    }
}
exports.default = POIClient;
