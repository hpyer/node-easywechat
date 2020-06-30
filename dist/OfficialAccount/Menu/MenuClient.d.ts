import BaseClient from '../../Core/BaseClient';
export default class MenuClient extends BaseClient {
    /**
     * 读取（查询）已设置菜单
     */
    list(): Promise<any>;
    /**
     * 获取当前菜单
     */
    current(): Promise<any>;
    /**
     * 添加菜单
     * @param button 菜单信息，只传该参数表示黄金普通菜单
     * @param matchrule 个性化菜单所需参数，默认：null
     */
    create(button: object, matchrule?: object): Promise<any>;
    /**
     * 删除菜单
     * @param menuid 菜单id，默认：null表示删除全部菜单
     */
    delete(menuid?: Number): Promise<any>;
    /**
     * 测试个性化菜单
     * @param user_id 用户的openid
     */
    match(user_id: string): Promise<any>;
}
