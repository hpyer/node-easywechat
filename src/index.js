
import EasyWechat from './libs/core';
import oauth from './libs/oauth';
import cache from './libs/cache';
import access_token from './libs/access_token';
import jssdk from './libs/jssdk';

EasyWechat.registPlugin('oauth', oauth);
EasyWechat.registPlugin('cache', cache);
EasyWechat.registPlugin('access_token', access_token);
EasyWechat.registPlugin('jssdk', jssdk);

export default EasyWechat;
