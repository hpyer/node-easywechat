import BaseClient from '../../Core/BaseClient';
export default class Client extends BaseClient {
    protected url: string;
    protected ticketCacheKey: string;
    protected ticketCachePrefix: string;
    /**
     * 获取卡券颜色
     */
    colors(): Promise<any>;
    /**
     * 卡券开放类目查询
     */
    categories(): Promise<any>;
    /**
     * 创建卡券
     * @param cardType 卡券类型
     * @param attributes 卡券信息
     */
    create(cardType: string, attributes: object): Promise<any>;
    /**
     * 获取卡券详情
     * @param cardId 卡券id
     */
    get(cardId?: string): Promise<any>;
    /**
     * 批量查询卡列表
     * @param offset 查询卡列表的起始偏移量，从0开始
     * @param count 需要查询的卡片的数量
     * @param statusList 支持开发者拉出指定状态的卡券列表。可选值：CARD_STATUS_NOT_VERIFY, 待审核；CARD_STATUS_VERIFY_FAIL, 审核失败；CARD_STATUS_VERIFY_OK， 通过审核；CARD_STATUS_USER_DELETE，卡券被商户删除；CARD_STATUS_DISPATCH，在公众平台投放过的卡券；默认：CARD_STATUS_VERIFY_OK
     */
    list(offset?: number, count?: number, statusList?: string): Promise<any>;
    /**
     * 更改卡券信息
     * @param cardId 卡券id
     * @param type 卡券类型
     * @param attributes 卡券信息
     */
    update(cardId: string, type: string, attributes?: object): Promise<any>;
    /**
     * 删除卡券
     * @param cardId 卡券id
     */
    delete(cardId: string): Promise<any>;
    /**
     * 生成卡券二维码
     * @param info 卡券信息
     */
    createQrCode(info: object): Promise<any>;
    /**
     * ticket 换取二维码图片
     * @param ticket 通过createQrCode方法获得
     */
    getQrCode(ticket: string): Promise<object>;
    /**
     * ticket 换取二维码链接
     * @param ticket 通过createQrCode方法获得
     */
    getQrCodeUrl(ticket: string): string;
    /**
     * 创建货架
     * @param banner 页面的 banner 图
     * @param pageTitle 页面的 title
     * @param canShare 页面是不是可以分享，true 或 false
     * @param scene 投放页面的场景值。可选值：SCENE_NEAR_BY，附近；SCENE_MENU，自定义菜单；SCENE_QRCODE，二维码；SCENE_ARTICLE，公众号文章；SCENE_H5，h5页面；SCENE_IVR，自动回复；SCENE_CARD_CUSTOM_CELL，卡券自定义cell；
     * @param cardList 卡券列表，每个元素有card_id、thumb_url两个字段
     */
    createLandingPage(banner: string, pageTitle: string, canShare: Boolean, scene: string, cardList: Array<object>): Promise<any>;
    /**
     * 图文消息群发卡券
     * @param cardId 卡券id
     */
    getHtml(cardId: string): Promise<any>;
    /**
     * 设置测试白名单
     * @param openids 测试的openid列表
     */
    setTestWhitelist(openids: Array<string>): Promise<any>;
    /**
     * 设置测试白名单
     * @param openids 测试的微信号列表
     */
    setTestWhitelistByName(usernames: Array<string>): Promise<any>;
    /**
     * 获取用户已领取卡券
     * @param openid 用户openid
     * @param cardId 卡券id
     */
    getUserCards(openid: string, cardId?: string): Promise<any>;
    /**
     * 设置微信买单
     * @param cardId 卡券id
     * @param isOpen 是否开启买单功能，填 true/false，默认：true
     */
    setPayCell(cardId: string, isOpen?: Boolean): Promise<any>;
    /**
     * 增加库存
     * @param cardId 卡券id
     * @param amount 修改数量
     */
    increaseStock(cardId: string, amount: number): Promise<any>;
    /**
     * 减少库存
     * @param cardId 卡券id
     * @param amount 修改数量
     */
    reduceStock(cardId: string, amount: number): Promise<any>;
    protected updateStock(cardId: string, amount: number, action?: string): Promise<any>;
}
