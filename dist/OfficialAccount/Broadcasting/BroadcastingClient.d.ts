import BaseClient from '../../Core/BaseClient';
import { Message } from '../../Core/Messages';
export default class BroadcastingClient extends BaseClient {
    PREVIEW_BY_OPENID: string;
    PREVIEW_BY_NAME: string;
    protected send(message?: object): Promise<any>;
    protected preview(message?: object): Promise<any>;
    /**
     * 删除群发消息
     * @param msgId 消息id
     */
    delete(msgId: string): Promise<any>;
    /**
     * 查询群发消息发送状态
     * @param msgId 消息id
     */
    status(msgId: string): Promise<any>;
    /**
     * 发送消息
     * @param {Message} message 消息实例
     * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
     * @param {object} attributes 附加参数
     */
    sendMessage(message: Message, reception?: any, attributes?: object): Promise<any>;
    /**
     * 发送文本消息
     * @param {string} message 文本
     * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
     * @param {object} attributes 附加参数
     */
    sendText(message: string, reception?: any, attributes?: object): Promise<any>;
    /**
     * 发送图文消息
     * @param {string} mediaId 素材id
     * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
     * @param {object} attributes 附加参数
     */
    sendNews(mediaId: string, reception?: any, attributes?: object): Promise<any>;
    /**
     * 发送语音消息
     * @param {string} mediaId 素材id
     * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
     * @param {object} attributes 附加参数
     */
    sendVoice(mediaId: string, reception?: any, attributes?: object): Promise<any>;
    /**
     * 发送视频消息
     * @param {string} mediaId 素材id
     * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
     * @param {object} attributes 附加参数
     */
    sendVideo(mediaId: string, reception?: any, attributes?: object): Promise<any>;
    /**
     * 发送图片消息
     * @param {string} mediaId 素材id
     * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
     * @param {object} attributes 附加参数
     */
    sendImage(mediaId: string, reception?: any, attributes?: object): Promise<any>;
    /**
     * 发送卡券消息
     * @param {string} cardId 卡券id
     * @param {Number|Array<string>} reception 数字表示标签id，或openid列表，或null表示全部，默认：null
     * @param {object} attributes 附加参数
     */
    sendCard(cardId: string, reception?: any, attributes?: object): Promise<any>;
    /**
     * 发送卡券消息预览给指定openId
     * @param {Message} message 消息实例
     * @param {string} reception openid
     * @param {object} attributes 附加参数
     */
    previewMessage(message: Message, reception: string, method?: string): Promise<any>;
    /**
     * 发送文本消息预览给指定openId
     * @param {string} message 文本
     * @param {string} reception openid
     * @param {object} attributes 附加参数
     */
    previewText(message: string, reception: string, method?: string): Promise<any>;
    /**
     * 发送图文消息预览给指定openId
     * @param {string} mediaId 素材id
     * @param {string} reception openid
     * @param {object} attributes 附加参数
     */
    previewNews(mediaId: string, reception: string, method?: string): Promise<any>;
    /**
     * 发送语音消息预览给指定openId
     * @param {string} mediaId 素材id
     * @param {string} reception openid
     * @param {object} attributes 附加参数
     */
    previewVoice(mediaId: string, reception: string, method?: string): Promise<any>;
    /**
     * 发送视频消息预览给指定openId
     * @param {string} mediaId 素材id
     * @param {string} reception openid
     * @param {object} attributes 附加参数
     */
    previewVideo(mediaId: string, reception: string, method?: string): Promise<any>;
    /**
     * 发送图片消息预览给指定openId
     * @param {string} mediaId 素材id
     * @param {string} reception openid
     * @param {object} attributes 附加参数
     */
    previewImage(mediaId: string, reception: string, method?: string): Promise<any>;
    /**
     * 发送卡券消息预览给指定openId
     * @param {string} cardId 卡券id
     * @param {string} reception openid
     * @param {object} attributes 附加参数
     */
    previewCard(cardId: string, reception: string, method?: string): Promise<any>;
    /**
     * 发送文本消息预览给指定微信号
     * @param {string} mediaId 文本
     * @param {string} reception 微信号
     * @param {object} attributes 附加参数
     */
    previewTextByName(message: string, reception: string): Promise<any>;
    /**
     * 发送图文消息预览给指定微信号
     * @param {string} mediaId 素材id
     * @param {string} reception 微信号
     * @param {object} attributes 附加参数
     */
    previewNewsByName(mediaId: string, reception: string): Promise<any>;
    /**
     * 发送语音消息预览给指定微信号
     * @param {string} mediaId 素材id
     * @param {string} reception 微信号
     * @param {object} attributes 附加参数
     */
    previewVoiceByName(mediaId: string, reception: string): Promise<any>;
    /**
     * 发送视频消息预览给指定微信号
     * @param {string} mediaId 素材id
     * @param {string} reception 微信号
     * @param {object} attributes 附加参数
     */
    previewVideoByName(mediaId: string, reception: string): Promise<any>;
    /**
     * 发送图片消息预览给指定微信号
     * @param {string} mediaId 素材id
     * @param {string} reception 微信号
     * @param {object} attributes 附加参数
     */
    previewImageByName(mediaId: string, reception: string): Promise<any>;
    /**
     * 发送卡券消息预览给指定微信号
     * @param {string} cardId 卡券id
     * @param {string} reception 微信号
     * @param {object} attributes 附加参数
     */
    previewCardByName(cardId: string, reception: string): Promise<any>;
}
