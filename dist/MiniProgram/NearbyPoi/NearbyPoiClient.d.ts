import BaseClient from '../../Core/BaseClient';
export default class NearbyPoiClient extends BaseClient {
    /**
     * 添加地点
     * @param params 地点信息
     */
    add(params?: object): Promise<any>;
    /**
     * 更新地点
     * @param poiId 地点id
     * @param params 地点信息
     */
    update(poiId: string, params?: object): Promise<any>;
    /**
     * 删除地点
     * @param poiId 地点id
     */
    delete(poiId?: string): Promise<any>;
    /**
     * 地点列表
     * @param page 页码
     * @param pageRows 每页记录数
     */
    list(page: number, pageRows: number): Promise<any>;
    /**
     * 设置地点展示状态
     * @param poiId 地点id
     * @param status 0:不展示；1:展示
     */
    setVisibility(poiId: string, status: number): Promise<any>;
}
