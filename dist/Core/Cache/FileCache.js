'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Path = require("path");
const Fs = require("fs");
const Merge = require("merge");
const Utils_1 = require("../Utils");
class FileCache {
    constructor(options = {}) {
        this.options = {};
        this.defaultOptions = {
            path: './',
            dirMode: 0o777,
            fileMode: 0o666,
            ext: '.cache'
        };
        this.options = Merge({}, this.defaultOptions, options);
        this.options['path'] = Path.resolve(this.options['path']) + '/';
        try {
            Fs.accessSync(this.options['path'], Fs.constants.R_OK & Fs.constants.W_OK);
        }
        catch (e) {
            try {
                Fs.mkdirSync(this.options['path'], this.options['dirMode']);
            }
            catch (e) {
                throw new Error(`The path '${this.options['path']}' can not be write.`);
            }
        }
    }
    getCacheFile(id) {
        return this.options['path'] + 'node-easywechat.file_cache.' + id + this.options['ext'];
    }
    getCacheContent(file) {
        let dataItem = JSON.parse(Fs.readFileSync(file, {
            encoding: 'utf-8',
            flag: 'r'
        }));
        if (dataItem.lifeTime > 0 && dataItem.lifeTime < Utils_1.getTimestamp()) {
            throw new Error('Cache expired.');
        }
        return dataItem.data;
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let content = null;
            try {
                let file = this.getCacheFile(id);
                content = this.getCacheContent(file);
            }
            catch (e) {
                content = null;
            }
            return content;
        });
    }
    has(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let file = this.getCacheFile(id);
                Fs.accessSync(file, Fs.constants.R_OK & Fs.constants.W_OK);
                let content = this.getCacheContent(file);
            }
            catch (e) {
                return false;
            }
            return true;
        });
    }
    set(id, data = null, lifeTime = 0) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let file = this.getCacheFile(id);
            try {
                Fs.unlinkSync(file);
            }
            catch (e) {
                return false;
            }
            return true;
        });
    }
}
exports.default = FileCache;
;
