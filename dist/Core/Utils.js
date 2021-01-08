'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AesDecrypt = exports.singleItem = exports.strCamel = exports.strStudly = exports.strLcwords = exports.strUcwords = exports.applyMixins = exports.inArray = exports.isIp = exports.isIpv6 = exports.isIpv4 = exports.isFunction = exports.isObject = exports.isNumber = exports.isArray = exports.isString = exports.makeSignature = exports.randomString = exports.parseQueryString = exports.buildQueryString = exports.getTimestamp = exports.createHmac = exports.createHash = exports.merge = void 0;
const crypto_1 = __importDefault(require("crypto"));
const qs_1 = __importDefault(require("qs"));
exports.merge = (target, source) => {
    if (exports.isObject(source)) {
        if (source.constructor !== Object) {
            target = source;
        }
        else {
            if (!target || !exports.isObject(target)) {
                target = {};
            }
            Object.keys(source).map((k) => {
                if (!target[k]) {
                    target[k] = null;
                }
                target[k] = exports.merge(target[k], source[k]);
            });
        }
    }
    else if (exports.isArray(source)) {
        if (!target || !exports.isArray(target)) {
            target = [];
        }
        target = target.concat(target, source);
    }
    else {
        target = source;
    }
    return target;
};
exports.createHash = function (str, type = 'sha1') {
    return crypto_1.default.createHash(type).update(str).digest('hex');
};
exports.createHmac = function (str, key, type = 'sha256') {
    return crypto_1.default.createHmac(type, key).update(str).digest('hex');
};
exports.getTimestamp = function (datetime = null) {
    let time;
    try {
        time = (exports.isString(datetime) ? new Date(datetime) : new Date).getTime();
    }
    catch (e) {
        return 0;
    }
    return parseInt((time / 1000).toString());
};
exports.buildQueryString = function (data, options = {}) {
    return qs_1.default.stringify(data, options);
};
exports.parseQueryString = function (data, options = {}) {
    return qs_1.default.parse(data, options);
};
exports.randomString = function (len = 16) {
    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    let str = '';
    for (let i = 0; i < len; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
};
exports.makeSignature = function (params, key = '', type = 'md5') {
    let paramsString = '';
    let sparator = '';
    let keys = Object.keys(params);
    keys = keys.sort();
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] == 'sign' || !params[keys[i]])
            continue;
        paramsString += sparator + keys[i] + '=' + params[keys[i]];
        sparator = '&';
    }
    if (key) {
        paramsString += '&key=' + key;
    }
    let sign = '';
    type = type.toLowerCase();
    switch (type) {
        case 'sha1':
        case 'md5':
            sign = exports.createHash(paramsString, type);
            break;
        case 'hmac-sha256':
        case 'hmac_sha256':
            type = type.replace(/^hmac[\-|_]/i, '');
            sign = exports.createHmac(paramsString, key, type);
            break;
    }
    return (sign + '').toUpperCase();
};
exports.isString = function (data) {
    return Object.prototype.toString.call(data) == '[object String]';
};
exports.isArray = function (data) {
    return Object.prototype.toString.call(data) == '[object Array]';
};
exports.isNumber = function (data) {
    return Object.prototype.toString.call(data) == '[object Number]';
};
exports.isObject = function (data) {
    return Object.prototype.toString.call(data) == '[object Object]';
};
exports.isFunction = function (data) {
    return data && toString.call(data) == '[object Function]' || toString.call(data) == '[object AsyncFunction]';
};
exports.isIpv4 = function (ip) {
    if (!ip)
        return false;
    return /^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$/.test(ip);
};
exports.isIpv6 = function (ip) {
    if (!ip)
        return false;
    return /^([\\da-fA-F]{1,4}:){7}([\\da-fA-F]{1,4})$/.test(ip);
};
exports.isIp = function (ip) {
    return exports.isIpv4(ip) || exports.isIpv6(ip);
};
exports.inArray = function (data, arr, strict = false) {
    if (!exports.isArray(arr))
        return strict ? data === arr : data == arr;
    if (exports.isFunction(arr.findIndex)) {
        return arr.findIndex((o) => { return strict ? o === data : o == data; }) > -1;
    }
    else {
        let flag = false;
        for (let i = 0; i < arr.length; i++) {
            if (strict ? data === arr[i] : data == arr[i]) {
                flag = true;
                break;
            }
        }
        return flag;
    }
};
exports.applyMixins = function (derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
};
// 将单词首字母转成大写，'hello word' => 'Hello World'
exports.strUcwords = function (str) {
    return str.replace(/\b[a-z]/gi, function (letter) {
        return letter.toUpperCase();
    });
};
// 将单词首字母转成小写，'Hello World' => 'hello word'
exports.strLcwords = function (str) {
    return str.replace(/\b[a-z]/gi, function (letter) {
        return letter.toLowerCase();
    });
};
// 驼峰（首字母大写），'hello word' => 'HelloWorld'
exports.strStudly = function (value) {
    return exports.strUcwords(value.replace(/[\-|\_]/gi, ' ')).replace(/\s/gi, '');
};
// 驼峰（首字母小写），'hello word' => 'helloWorld'
exports.strCamel = function (value) {
    return exports.strLcwords(exports.strStudly(value));
};
// 如果只有一个同名、同级节点，则不当作数组
exports.singleItem = function (obj) {
    if (typeof obj == 'object') {
        if (typeof obj.length != 'undefined') {
            if (obj.length == 1) {
                return exports.singleItem(obj[0]);
            }
            for (let i = 0; i < obj.length; i++) {
                obj[i] = exports.singleItem(obj[i]);
            }
            return obj;
        }
        else {
            for (let k in obj) {
                obj[k] = exports.singleItem(obj[k]);
            }
        }
    }
    return obj;
};
exports.AesDecrypt = function (ciphertext, key, iv, method) {
    var decipher = crypto_1.default.createDecipheriv(method, key, iv);
    decipher.setAutoPadding(true);
    var plaintext = decipher.update(ciphertext, 'hex', 'utf8');
    plaintext += decipher.final('utf8');
    return plaintext;
};
