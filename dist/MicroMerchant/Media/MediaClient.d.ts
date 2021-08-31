/// <reference types="node" />
import BaseClient from '../Core/BaseClient';
import Stream from 'stream';
export default class MediaClient extends BaseClient {
    upload(file: string | Stream.Readable): Promise<any>;
}
