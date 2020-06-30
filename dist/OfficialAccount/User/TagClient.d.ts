import BaseClient from '../../Core/BaseClient';
export default class TagClient extends BaseClient {
    /**
     * 创建标签
     * @param name 标签名称
     */
    create(name: string): Promise<any>;
    /**
     * 获取所有标签
     */
    list(): Promise<any>;
    /**
     * 修改标签信息
     * @param id 标签id
     * @param name 标签名称
     */
    update(id: string, name: string): Promise<any>;
    /**
     * 删除标签
     * @param id 标签id
     */
    delete(id: string): Promise<any>;
    /**
     * 获取指定 openid 用户所属的标签
     * @param openid 用户openid
     */
    userTags(openid: string): Promise<any>;
    /**
     * 获取标签下用户列表
     * @param tagid 标签id
     * @param next_openid 拉取列表最后一个用户的openid，默认：''
     */
    usersOfTag(tagid: number, next_openid?: string): Promise<any>;
    /**
     * 批量为用户添加标签
     * @param openid_list 用户openid列表
     * @param tagid 标签id
     */
    tagUsers(openid_list: Array<string>, tagid: number): Promise<any>;
    /**
     * 批量为用户移除标签
     * @param openid_list 用户openid列表
     * @param tagid 标签id
     */
    untagUsers(openid_list: Array<string>, tagid: number): Promise<any>;
}
