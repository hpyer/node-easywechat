
import Core from './libs/core';
import oauth from './libs/oauth';
import cache from './libs/cache';
import access_token from './libs/access_token';
import jssdk from './libs/jssdk';
import server from './libs/server';
import notice from './libs/notice';
import qrcode from './libs/qrcode';
import user from './libs/user';
import menu from './libs/menu';
import url from './libs/url';
import payment from './libs/payment';
import material_temporary from './libs/material_temporary';
import material from './libs/material';
import mini_program from './libs/mini_program';
import user_tag from './libs/user_tag';

Core.EasyWechat.registPlugin('oauth', oauth);
Core.EasyWechat.registPlugin('cache', cache);
Core.EasyWechat.registPlugin('access_token', access_token);
Core.EasyWechat.registPlugin('jssdk', jssdk);
Core.EasyWechat.registPlugin('server', server);
Core.EasyWechat.registPlugin('notice', notice);
Core.EasyWechat.registPlugin('qrcode', qrcode);
Core.EasyWechat.registPlugin('user', user);
Core.EasyWechat.registPlugin('menu', menu);
Core.EasyWechat.registPlugin('url', url);
Core.EasyWechat.registPlugin('payment', payment);
Core.EasyWechat.registPlugin('material_temporary', material_temporary);
Core.EasyWechat.registPlugin('material', material);
Core.EasyWechat.registPlugin('mini_program', mini_program);
Core.EasyWechat.registPlugin('user_tag', user_tag);

import * as caches from './libs/caches';
Core.EasyWechat.Cache = {};
for (let k in caches) {
  Core.EasyWechat.Cache[k] = caches[k];
}

import * as messages from './libs/messages';
Core.EasyWechat.Message = {};
for (let k in messages) {
  Core.EasyWechat.Message[k] = messages[k];
}

export default Core.EasyWechat;
