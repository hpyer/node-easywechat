'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class BaseServiceProvider {
    constructor() {
        if (new.target === BaseServiceProvider) {
            throw new Error('本接口不能实例化');
        }
    }
    register() {
    }
}
exports.default = BaseServiceProvider;
