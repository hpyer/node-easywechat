'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Path = require("path");
const Fs = require("fs");
const Merge = require("merge");
const Utils_1 = require("../Utils");
const BaseCache_1 = require("./BaseCache");
class FileCache extends BaseCache_1.default {
    constructor(options = {}) {
        super();
        this.options = {};
        this.defaultOptions = {
            path: './',
            dirMode: 0o777,
            fileMode: 0o666,
            ext: '.cache'
        };
        this.options = Merge({}, this.defaultOptions, options);
        this.options['path'] = Path.resolve(this.options['path']);
        try {
            Fs.accessSync(this.options['path'], Fs.constants.R_OK & Fs.constants.W_OK);
        }
        catch (e) {
            try {
                Fs.mkdirSync(this.options['path'], this.options['dirMode']);
            }
            catch (e) {
                throw new Error('无法创建缓存目录：' + this.options['path']);
            }
        }
    }
    getCacheFile(id) {
        return this.options['path'] + 'node-easywechat.file_cache.' + id + this.options['ext'];
    }
    fetch(id) {
        let content = null;
        let file = this.getCacheFile(id);
        try {
            let dataItem = JSON.parse(Fs.readFileSync(file, {
                encoding: 'utf-8',
                flag: 'r'
            }));
            if (dataItem.lifeTime > 0 && dataItem.lifeTime < Utils_1.getTimestamp()) {
                content = null;
            }
            else {
                content = dataItem.data;
            }
        }
        catch (e) {
            content = null;
        }
        return content;
    }
    contains(id) {
        let file = this.getCacheFile(id);
        try {
            Fs.accessSync(file, Fs.constants.R_OK & Fs.constants.W_OK);
        }
        catch (e) {
            return false;
        }
        return true;
    }
    save(id, data = null, lifeTime = 0) {
        let file = this.getCacheFile(id);
        try {
            let dataItem = {
                data,
                lifeTime: lifeTime > 0 ? lifeTime + Utils_1.getTimestamp() : 0
            };
            Fs.writeFileSync(file, JSON.stringify(dataItem), {
                mode: this.options['fileMode'],
                encoding: 'utf-8',
                flag: 'w'
            });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    delete(id) {
        let file = this.getCacheFile(id);
        try {
            Fs.unlinkSync(file);
        }
        catch (e) {
            return false;
        }
        return true;
    }
}
exports.default = FileCache;
;
