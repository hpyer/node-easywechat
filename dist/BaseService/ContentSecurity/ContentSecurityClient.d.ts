/// <reference types="node" />
import BaseClient from '../../Core/BaseClient';
import Stream from 'stream';
export default class ContentSecurityClient extends BaseClient {
    protected baseUrl: string;
    /**
     * 校验一段文本是否含有违法内容
     * @param text 待校验文本
     */
    checkText(text: string): Promise<any>;
    /**
     * 校验一张图片是否含有敏感信息
     * @param file 文件路径或可读stream
     */
    checkImage(file: string | Stream.Readable): Promise<any>;
}
