import BaseClient from '../../Core/BaseClient';
import { Article } from '../../Core/Messages';
export default class MaterialClient extends BaseClient {
    protected allowTypes: Array<string>;
    /**
     * 上传图片
     * @param file 文件路径或可读stream
     */
    uploadImage(file: any): Promise<any>;
    /**
     * 上传视频
     * @param file 文件路径或可读stream
     * @param title 标题
     * @param description 描述
     */
    uploadVideo(file: any, title: string, description: string): Promise<any>;
    /**
     * 上传语音
     * @param file 文件路径或可读stream
     */
    uploadVoice(file: any): Promise<any>;
    /**
     * 上传缩略图
     * @param file 文件路径或可读stream
     */
    uploadThumb(file: any): Promise<any>;
    /**
     * 上传图文消息图片
     * @param file 文件路径或可读stream
     */
    uploadArticleImage(file: any): Promise<any>;
    protected upload(type: string, file: any, formData?: object): Promise<any>;
    protected getApiByType(type: string): string;
    /**
     * 上传图文消息
     * @param articles 图文消息（Article）实例或图文消息（Article）实例列表
     */
    uploadArticle(articles: Article | object | Array<Article>): Promise<any>;
    /**
     * 修改图文消息
     * @param media_id 文章的media_id
     * @param article Article 实例
     * @param index 要更新的文章在图文消息中的位置（多图文消息时，此字段才有意义，单图片忽略此参数），第一篇为 0
     */
    updateArticle(media_id: string, article: Article | object, index?: number): Promise<any>;
    /**
     * 获取永久素材
     * @param media_id 素材media_id
     */
    get(media_id: string): Promise<any>;
    /**
     * 删除永久素材
     * @param media_id 素材media_id
     */
    delete(media_id: string): Promise<any>;
    /**
     * 获取永久素材列表
     * @param type 素材的类型，图片（image）、视频（video）、语音 （voice）、图文（news）
     * @param offset 偏移起始位置，从0开始，默认：0
     * @param count 数量, 可选值：1～20，默认：20
     */
    list(type: string, offset?: number, count?: number): Promise<any>;
    /**
     * 获取素材计数
     */
    stats(): Promise<any>;
}
