import BaseClient from '../../Core/BaseClient';
export default class POIClient extends BaseClient {
    /**
     * 获取门店类目表
     */
    categories(): Promise<any>;
    /**
     * 查询门店信息
     * @param poi_id 门店id
     */
    get(poi_id: number): Promise<any>;
    /**
     * 查询门店列表
     * @param begin 开始位置，从0开始，默认：0
     * @param limit 返回数据条数，最大允许50，默认：20
     */
    list(begin?: number, limit?: number): Promise<any>;
    /**
     * 创建门店
     * @param base_info 门店信息
     */
    create(base_info: object): Promise<any>;
    /**
     * 创建门店并返回id
     * @param base_info 门店信息
     */
    createAndGetId(base_info: object): Promise<any>;
    /**
     * 修改门店信息
     * @param poi_id 门店id
     * @param base_info 门店信息
     */
    update(poi_id: number, base_info: object): Promise<any>;
    /**
     * 删除门店
     * @param poi_id 门店id
     */
    delete(poi_id: string): Promise<any>;
}
