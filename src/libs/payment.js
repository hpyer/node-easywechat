
import Core from './core';
import {log, randomString, getTimestamp, isNumber, isString, isObject, makeSignature} from '../utils';
import {parseString} from 'xml2js';

const URL_ORDER = 'https://api.mch.weixin.qq.com/pay/unifiedorder';

const init = function (instance) {
};

const toXml = function (data) {
  let xml = '<xml>';
  for (let k in data) {
    if (isNumber(data[k])) {
      xml += `<${k}>${data[k]}</${k}>`;
    }
    else if (isObject(data[k])) {
      xml += `<${k}>${JSON.stringify(data[k])}</${k}>`;
    }
    else {
      xml += `<${k}><![CDATA[${data[k]}]]></${k}>`;
    }
  }
  xml += '</xml>';
  return xml;
};

const prepare = async function (order) {
  let instance = Core.getInstance();
  let paymentConfig = instance.$config.payment;
  let data = {
    appid: instance.$config.appKey,
    mch_id: paymentConfig.merchantId,
    device_info: order.device_info || 'WEB',
    nonce_str: randomString(16),
    body: order.body,
    detail: order.detail || '',
    attach: order.attach || '',
    out_trade_no: order.out_trade_no,
    fee_type: order.fee_type || 'CNY',
    total_fee: order.total_fee,
    spbill_create_ip: order.spbill_create_ip,
    time_start: order.time_start || '',
    time_expire: order.time_expire || '',
    goods_tag: order.goods_tag || '',
    notify_url: order.notify_url || paymentConfig.notifyUrl,
    trade_type: order.trade_type || 'JSAPI',
    product_id: order.product_id || '',
    limit_pay: order.limit_pay || '',
    openid: order.openid || '',
    scene_info: order.scene_info || '',
    sign_type: order.sign_type || 'md5'
  };
  data.sign = makeSignature(data, data.sign_type, paymentConfig.key);

  let xml = toXml(data);
  let result = await instance.requestPost(URL_ORDER, xml);
  log('payment.prepare(): ', data, result);
  return result;
};

const handleNotify = async function (handler) {
  let instance = Core.getInstance();
  let app = instance.$config.app;
  if (!app) {
    throw new Error('未在配置文件中设置应用服务器');
    return;
  }
  let paymentConfig = instance.$config.payment;
  let xml = await app.getBody();
  let notice = await parseMessage(xml);
  let response = {
    return_code: '',
    return_msg: ''
  };

  if (notice.return_code !== 'SUCCESS') {
    log('payment.handleNotify(): invalid_sign', notice);
    response.return_code = 'SUCCESS';
    response.return_msg = 'return_code异常';
    return app.sendResponse(toXml(response));
  }

  // 验证签名
  let check_sign = makeSignature(notice, notice.sign_type, paymentConfig.key);
  if (check_sign !== notice.sign) {
    log('payment.handleNotify(): invalid_sign', check_sign, notice.sign);
    response.return_code = 'FAIL';
    response.return_msg = '签名错误';
    return app.sendResponse(toXml(response));
  }

  // 业务处理
  let result = await handler(notice, notice.result_code === 'SUCCESS');
  if (result === true) {
    response.return_code = 'SUCCESS';
    response.return_msg = '';
  }
  else {
    response.return_code = 'FAIL';
    response.return_msg = result;
  }

  app.sendResponse(toXml(response));
};

const parseMessage = async function (xml) {
  return new Promise((resolve, reject) => {
    parseString(xml, async (err, result) => {
      if (err) {
        reject(err);
      }
      else {
        let message
        if (result && result.xml) {
          message = {}
          for (let k in result.xml) {
            message[k] = result.xml[k][0];
          }
        }
        resolve(message);
      }
    })
  })
  .catch((err) => {
    log('payment.parseMessage()', err)
  });
};

const configForPayment = async function (prepare_id, to_json = true) {
  let nonceStr = randomString(16);
  let timeStamp = getTimestamp();
  let signType = 'HMAC-SHA256';
  let config = {
    appId: instance.$config.appKey,
    timeStamp: timeStamp,
    nonceStr: nonceStr,
    package: 'prepay_id=' + prepare_id
  };
  config.paySign = makeSignature(config, signType, instance.$config.appSecret);
  config.signType = signType;
  if (to_json) {
    config = JSON.stringify(config);
  }
  return config;
};

const configForJSSDKPayment = async function (prepare_id, to_json = true) {
  let nonceStr = randomString(16);
  let timeStamp = getTimestamp();
  let signType = 'MD5';
  let config = {
    appId: instance.$config.appKey,
    timestamp: timeStamp,
    nonceStr: nonceStr,
    package: 'prepay_id=' + prepare_id
  };
  config.paySign = makeSignature(config, signType, instance.$config.appSecret);
  config.signType = signType;
  if (to_json) {
    config = JSON.stringify(config);
  }
  return config;
};

export default {
  init,
  prepare,
  handleNotify,
  configForPayment,
  configForJSSDKPayment
};
