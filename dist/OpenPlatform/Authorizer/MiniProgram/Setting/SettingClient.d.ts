import BaseClient from '../../../../Core/BaseClient';
export default class SettingClient extends BaseClient {
    /**
     * 获取可以设置的所有类目
     */
    getAllCategories(): Promise<any>;
    /**
     * 添加类目
     * @param categories 类目信息列表
     */
    addCategories(categories: Array<object>): Promise<any>;
    /**
     * 删除类目
     * @param firstId 一级类目 ID
     * @param secondId 二级类目 ID
     */
    deleteCategories(firstId: number, secondId: number): Promise<any>;
    /**
     * 获取已设置的所有类目
     */
    getCategories(): Promise<any>;
    /**
     * 修改类目资质信息
     * @param category 类目信息
     */
    updateCategory(category: object): Promise<any>;
    /**
     * 设置名称
     * @param nickname 昵称
     * @param idCardMediaId 身份证照片 mediaid
     * @param licenseMediaId 组织机构代码证或营业执照 mediaid
     * @param otherStuffs 其它证明材料 mediaid
     */
    setNickname(nickname: string, idCardMediaId?: string, licenseMediaId?: string, otherStuffs?: Array<string>): Promise<any>;
    /**
     * 查询改名审核状态
     * @param auditId 审核id
     */
    getNicknameAuditStatus(auditId: string): Promise<any>;
    /**
     * 微信认证名称检测
     * @param nickname 名称（昵称）
     */
    isAvailableNickname(nickname: string): Promise<any>;
    /**
     * 查询隐私设置
     */
    getSearchStatus(): Promise<any>;
    /**
     * 设置为可搜索
     */
    setSearchable(): Promise<any>;
    /**
     * 设置为不可搜索
     */
    setUnsearchable(): Promise<any>;
    /**
     * 获取展示的公众号信息
     */
    getDisplayedOfficialAccount(): Promise<any>;
    /**
     * 设置展示的公众号信息
     * @param appid 传入新的公众号 appid表示开启，否则关闭
     */
    setDisplayedOfficialAccount(appid?: string): Promise<any>;
    /**
     * 获取可以用来设置的公众号列表
     * @param page 页码，从 0 开始
     * @param num 每页记录数，最大为 20
     */
    getDisplayableOfficialAccounts(page: number, num: number): Promise<any>;
}
