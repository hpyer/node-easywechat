import Stream from 'stream';
export declare const merge: (target: any, source: any) => any;
export declare const createHash: (str: string, type?: string) => any;
export declare const createHmac: (str: string, key: string, type?: string) => any;
/**
 * 计算文件的 md5 值
 * @param path 文件路径或文件可读流
 */
export declare const md5File: (path: string | Stream.Readable) => Promise<string>;
export declare const getTimestamp: (datetime?: string) => number;
export declare const buildQueryString: (data: object, options?: object) => string;
export declare const parseQueryString: (data: string, options?: object) => object;
export declare const randomString: (len?: number) => string;
export declare const makeSignature: (params: object, key?: string, type?: string) => string;
export declare const isString: (data: any) => boolean;
export declare const isArray: (data: any) => boolean;
export declare const isNumber: (data: any) => boolean;
export declare const isObject: (data: any) => boolean;
export declare const isFunction: (data: any) => boolean;
export declare const isIpv4: (ip: string) => boolean;
export declare const isIpv6: (ip: string) => boolean;
export declare const isIp: (ip: string) => boolean;
export declare const inArray: (data: any, arr: any, strict?: boolean) => boolean;
export declare const applyMixins: (derivedCtor: any, baseCtors: any[]) => void;
export declare const strUcwords: (str: string) => string;
export declare const strLcwords: (str: string) => string;
export declare const strStudly: (value: string) => string;
export declare const strCamel: (value: string) => string;
export declare const singleItem: (obj: any) => any;
export declare const parseXml: (xml: string) => Promise<any>;
export declare const buildXml: (data: object, rootName?: string) => string;
