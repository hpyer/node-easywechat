
import EasyWechat from './libs/core';
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

EasyWechat.registPlugin('oauth', oauth);
EasyWechat.registPlugin('cache', cache);
EasyWechat.registPlugin('access_token', access_token);
EasyWechat.registPlugin('jssdk', jssdk);
EasyWechat.registPlugin('server', server);
EasyWechat.registPlugin('notice', notice);
EasyWechat.registPlugin('qrcode', qrcode);
EasyWechat.registPlugin('user', user);
EasyWechat.registPlugin('menu', menu);
EasyWechat.registPlugin('url', url);

import * as caches from './libs/caches';
EasyWechat.Cache = {};
for (let k in caches) {
  EasyWechat.Cache[k] = caches[k];
}

import * as messages from './libs/messages';
EasyWechat.Message = {};
for (let k in messages) {
  EasyWechat.Message[k] = messages[k];
}

export default EasyWechat;
