
import { OfficialAccountConfig, MiniAppConfig, LogHandler, ServerEventType, ServerHandlerClosure } from './Types/global';
import OfficialAccount from './OfficialAccount/Application';
import MiniApp from './MiniApp/Application';
import CacheInterface from './Core/Contracts/CacheInterface';
import ServerRequest from './Core/Http/ServerRequest';
import Message from './Core/Message';
import FormData from 'form-data';

export {
  OfficialAccount,
  OfficialAccountConfig,

  MiniApp,
  MiniAppConfig,

  CacheInterface,
  ServerRequest,
  LogHandler,
  ServerEventType,
  ServerHandlerClosure,
  Message,

  /**
   * 表单对象
   * @see https://github.com/axios/axios#formdata
   * @see https://github.com/form-data/form-data#readme
   */
  FormData,
}
