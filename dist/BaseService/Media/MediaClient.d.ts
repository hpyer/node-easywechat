/// <reference types="node" />
import BaseClient from '../../Core/BaseClient';
import Stream from 'stream';
export default class MediaClient extends BaseClient {
    protected baseUrl: string;
    protected allowTypes: Array<string>;
    /**
     * 上传图片到临时素材
     * @param file 文件路径或可读stream
     */
    uploadImage(file: string | Stream.Readable): Promise<any>;
    /**
     * 上传视频到临时素材
     * @param file 文件路径或可读stream
     */
    uploadVideo(file: string | Stream.Readable): Promise<any>;
    /**
     * 上传语音到临时素材
     * @param file 文件路径或可读stream
     */
    uploadVoice(file: string | Stream.Readable): Promise<any>;
    /**
     * 上传缩略图到临时素材
     * @param file 文件路径或可读stream
     */
    uploadThumb(file: string | Stream.Readable): Promise<any>;
    /**
     * 上传到临时素材
     * @param type 类型，可选值：image,video,voice,thumb
     * @param file 文件路径或可读stream
     */
    upload(type: string, file: string | Stream.Readable): Promise<any>;
    /**
     * 上传群发视频
     * @param file 文件路径或可读stream
     * @param title 标题
     * @param description 描述
     */
    uploadVideoForBroadcasting(file: string | Stream.Readable, title: string, description: string): Promise<any>;
    /**
     * 创建群发消息
     * @param media_id 上传视频得到 media_id
     * @param title 标题
     * @param description 描述
     */
    createVideoForBroadcasting(media_id: string, title: string, description: string): Promise<any>;
    /**
     * 获取临时素材内容
     * @param media_id 上传视频得到 media_id
     */
    get(media_id: string): Promise<any>;
    /**
     * 获取 JSSDK 上传的高清语音
     * @param media_id 上传视频得到 media_id
     */
    getJssdkMedia(media_id: string): Promise<any>;
}
