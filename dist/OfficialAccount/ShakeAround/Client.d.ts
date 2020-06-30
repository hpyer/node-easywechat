import BaseClient from '../../Core/BaseClient';
export default class Client extends BaseClient {
    /**
     * 查询审核状态
     */
    status(): Promise<any>;
    /**
     * 申请开通摇一摇
     * @param data
     */
    register(data: object): Promise<any>;
    /**
     * 获取摇一摇的设备及用户信息
     * @param ticket 摇周边业务的ticket，可在摇到的URL中得到
     * @param needPoi 是否需要返回门店poi_id，传1则返回，否则不返回，默认：false
     */
    user(ticket?: string, needPoi?: Boolean): Promise<any>;
    /**
     * 获取摇一摇的设备及用户信息，返回门店poi_id
     * @param ticket 摇周边业务的ticket，可在摇到的URL中得到
     */
    userWithPoi(ticket?: string): Promise<any>;
}
