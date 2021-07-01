import BaseClient from '../../Core/BaseClient';
export default class MediaClient extends BaseClient {
    protected allowTypes: Array<string>;
    /**
     * 获取临时素材
     * @param mediaId
     */
    get(mediaId: string): Promise<any>;
    /**
     * 上传临时图片
     * @param {string/ReadableStream} file 文件路径或可读stream
     * @param {object} form 表单参数
     */
    uploadImage(file: string | ReadableStream, form?: object): Promise<any>;
    /**
     * 上传临时视频
     * @param {string/ReadableStream} file 文件路径或可读stream
     * @param {object} form 表单参数
     */
    uploadVideo(file: string | ReadableStream, form?: object): Promise<any>;
    /**
     * 上传临时语音
     * @param {string/ReadableStream} file 文件路径或可读stream
     * @param {object} form 表单参数
     */
    uploadVoice(file: string | ReadableStream, form?: object): Promise<any>;
    /**
     * 上传临时文件
     * @param {string/ReadableStream} file 文件路径或可读stream
     * @param {object} form 表单参数
     */
    uploadFile(file: string | ReadableStream, form?: object): Promise<any>;
    /**
     * 上传到临时素材
     * @param {string} type 类型，可选值：image,video,voice,thumb
     * @param {string/ReadableStream} file 文件路径或可读stream
     * @param {object} form 表单参数
     */
    upload(type: string, file: string | ReadableStream, form?: object): Promise<any>;
    /**
     * 上传永久图片
     * @param {string/ReadableStream} file 文件路径或可读stream
     * @param {object} form 表单参数
     */
    uploadImg(file: string | ReadableStream, form?: object): Promise<any>;
    /**
     * 获取高清语音素材
     * @param mediaId
     */
    getHdVoice(mediaId: string): Promise<any>;
    protected getResources(mediaId: string, url: string): Promise<any>;
}
