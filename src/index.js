
import EasyWechat from './libs/core';
import oauth from './libs/oauth';
import cache from './libs/cache';
import access_token from './libs/access_token';
import jssdk from './libs/jssdk';
import notice from './libs/notice';

EasyWechat.registPlugin('oauth', oauth);
EasyWechat.registPlugin('cache', cache);
EasyWechat.registPlugin('access_token', access_token);
EasyWechat.registPlugin('jssdk', jssdk);
EasyWechat.registPlugin('notice', notice);

export default EasyWechat;
