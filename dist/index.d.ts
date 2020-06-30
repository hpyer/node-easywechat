import OfficialAccount from './OfficialAccount/Application';
import BaseService from './BaseService/Application';
import MiniProgram from './MiniProgram/Application';
import OpenPlatform from './OpenPlatform/Application';
import Payment from './Payment/Application';
import CacheInterface from './Core/Contracts/CacheInterface';
import FinallResult from './Core/Decorators/FinallResult';
import TerminateResult from './Core/Decorators/TerminateResult';
import Request from './Core/Http/Request';
import Response from './Core/Http/Response';
import StreamResponse from './Core/Http/StreamResponse';
import * as Messages from './Core/Messages';
declare const EasyWechat: {
    Factory: {
        OfficialAccount: typeof OfficialAccount;
        BaseService: typeof BaseService;
        MiniProgram: typeof MiniProgram;
        OpenPlatform: typeof OpenPlatform;
        Payment: typeof Payment;
        getInstance: (service: string, config?: object) => any;
    };
    CacheInterface: typeof CacheInterface;
    Decorator: {
        FinallResult: typeof FinallResult;
        TerminateResult: typeof TerminateResult;
    };
    Http: {
        Request: typeof Request;
        Response: typeof Response;
        StreamResponse: typeof StreamResponse;
    };
    Messages: typeof Messages;
};
export = EasyWechat;
