import BaseClient from '../../Core/BaseClient';
export default class MediaClient extends BaseClient {
    protected allowTypes: Array<string>;
    get(mediaId: string): Promise<any>;
    /**
     * 上传图片
     */
    uploadImage(file: string | ReadableStream): Promise<any>;
    /**
     * 上传视频
     */
    uploadVideo(file: string | ReadableStream): Promise<any>;
    /**
     * 上传语音
     */
    uploadVoice(file: string | ReadableStream): Promise<any>;
    /**
     * 上传文件
     */
    uploadFile(file: string | ReadableStream): Promise<any>;
    /**
     * 上传到临时素材
     * @param {string} type 类型，可选值：image,video,voice,thumb
     * @param {string/ReadableStream} file 文件路径或可读stream
     */
    upload(type: string, file: string | ReadableStream): Promise<any>;
}
