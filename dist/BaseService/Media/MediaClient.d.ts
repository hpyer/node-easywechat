import BaseClient from '../../Core/BaseClient';
export default class MediaClient extends BaseClient {
    protected baseUrl: string;
    protected allowTypes: Array<string>;
    /**
     * 上传图片到临时素材
     * @param {string/ReadableStream} file 文件路径或可读stream
     */
    uploadImage(file: any): Promise<any>;
    /**
     * 上传视频到临时素材
     * @param {string/ReadableStream} file 文件路径或可读stream
     */
    uploadVideo(file: any): Promise<any>;
    /**
     * 上传语音到临时素材
     * @param {string/ReadableStream} file 文件路径或可读stream
     */
    uploadVoice(file: any): Promise<any>;
    /**
     * 上传缩略图到临时素材
     * @param {string/ReadableStream} file 文件路径或可读stream
     */
    uploadThumb(file: any): Promise<any>;
    /**
     * 上传到临时素材
     * @param {string} type 类型，可选值：image,video,voice,thumb
     * @param {string/ReadableStream} file 文件路径或可读stream
     */
    upload(type: string, file: any): Promise<any>;
    /**
     * 上传群发视频
     * @param {string/ReadableStream} file 文件路径或可读stream
     * @param {string} title 标题
     * @param {string} description 描述
     */
    uploadVideoForBroadcasting(file: any, title: string, description: string): Promise<any>;
    /**
     * 创建群发消息
     * @param {string} media_id 上传视频得到 media_id
     * @param {string} title 标题
     * @param {string} description 描述
     */
    createVideoForBroadcasting(media_id: string, title: string, description: string): Promise<any>;
    /**
     * 获取临时素材内容
     * @param {string} media_id 上传视频得到 media_id
     */
    get(media_id: string): Promise<any>;
    /**
     * 获取 JSSDK 上传的高清语音
     * @param {string} media_id 上传视频得到 media_id
     */
    getJssdkMedia(media_id: string): Promise<any>;
}
