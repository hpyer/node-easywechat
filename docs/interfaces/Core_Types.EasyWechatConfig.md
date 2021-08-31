[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/Types](../modules/Core_Types.md) / EasyWechatConfig

# Interface: EasyWechatConfig

[Core/Types](../modules/Core_Types.md).EasyWechatConfig

通用配置

## Table of contents

### Properties

- [aes\_key](Core_Types.EasyWechatConfig.md#aes_key)
- [agent\_id](Core_Types.EasyWechatConfig.md#agent_id)
- [apiv3\_key](Core_Types.EasyWechatConfig.md#apiv3_key)
- [app\_id](Core_Types.EasyWechatConfig.md#app_id)
- [appid](Core_Types.EasyWechatConfig.md#appid)
- [cert\_path](Core_Types.EasyWechatConfig.md#cert_path)
- [certificate](Core_Types.EasyWechatConfig.md#certificate)
- [contract\_notify\_url](Core_Types.EasyWechatConfig.md#contract_notify_url)
- [corp\_id](Core_Types.EasyWechatConfig.md#corp_id)
- [debug](Core_Types.EasyWechatConfig.md#debug)
- [device\_type](Core_Types.EasyWechatConfig.md#device_type)
- [file\_cache](Core_Types.EasyWechatConfig.md#file_cache)
- [http](Core_Types.EasyWechatConfig.md#http)
- [key](Core_Types.EasyWechatConfig.md#key)
- [mch\_id](Core_Types.EasyWechatConfig.md#mch_id)
- [notify\_url](Core_Types.EasyWechatConfig.md#notify_url)
- [oauth](Core_Types.EasyWechatConfig.md#oauth)
- [refresh\_token](Core_Types.EasyWechatConfig.md#refresh_token)
- [rsa\_public\_key\_path](Core_Types.EasyWechatConfig.md#rsa_public_key_path)
- [sandbox](Core_Types.EasyWechatConfig.md#sandbox)
- [secret](Core_Types.EasyWechatConfig.md#secret)
- [serial\_no](Core_Types.EasyWechatConfig.md#serial_no)
- [sub\_appid](Core_Types.EasyWechatConfig.md#sub_appid)
- [sub\_mch\_id](Core_Types.EasyWechatConfig.md#sub_mch_id)
- [token](Core_Types.EasyWechatConfig.md#token)

## Properties

### aes\_key

• `Optional` **aes\_key**: `string`

服务端消息加解密密钥 aes_key

**`scope`** OfficialAccount | MiniProgram | OpenPlatform

#### Defined in

[Core/Types.ts:83](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L83)

___

### agent\_id

• `Optional` **agent\_id**: `string`

代理商id

**`scope`** Work

#### Defined in

[Core/Types.ts:194](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L194)

___

### apiv3\_key

• `Optional` **apiv3\_key**: `string`

APIv3 密钥

**`scope`** MicroMerchant

#### Defined in

[Core/Types.ts:168](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L168)

___

### app\_id

• `Optional` **app\_id**: `string`

应用 id

**`scope`** ALL

#### Defined in

[Core/Types.ts:54](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L54)

___

### appid

• `Optional` **appid**: `string`

服务商的公众账号 ID

**`scope`** MicroMerchant

#### Defined in

[Core/Types.ts:162](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L162)

___

### cert\_path

• `Optional` **cert\_path**: `string`

pfx 证书路径（敏感接口（如退款、发送红包等）需要）

**`scope`** Payment | MicroMerchant

#### Defined in

[Core/Types.ts:121](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L121)

___

### certificate

• `Optional` **certificate**: `string`

获取证书接口获取到的证书内容

**`scope`** MicroMerchant

#### Defined in

[Core/Types.ts:156](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L156)

___

### contract\_notify\_url

• `Optional` **contract\_notify\_url**: `string`

支付签约通知URL

**`scope`** Payment

#### Defined in

[Core/Types.ts:138](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L138)

___

### corp\_id

• `Optional` **corp\_id**: `string`

企业id

**`scope`** Work

#### Defined in

[Core/Types.ts:188](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L188)

___

### debug

• `Optional` **debug**: `boolean`

是否开启调试，开启后会在控制台输出日志，默认：false

**`scope`** ALL

#### Defined in

[Core/Types.ts:48](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L48)

___

### device\_type

• `Optional` **device\_type**: `string`

设备类型，目前为“公众账号原始ID”

**`scope`** OfficialAccount

#### Defined in

[Core/Types.ts:181](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L181)

___

### file\_cache

• `Optional` **file\_cache**: [`EasyWechatConfigCacheFile`](Core_Types.EasyWechatConfigCacheFile.md)

文件缓存相关配置

**`scope`** ALL

#### Defined in

[Core/Types.ts:71](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L71)

___

### http

• `Optional` **http**: `AxiosRequestConfig`

网络请求相关配置

**`scope`** ALL

#### Defined in

[Core/Types.ts:65](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L65)

___

### key

• `Optional` **key**: `string`

微信支付签名密钥

**`scope`** Payment | MicroMerchant

#### Defined in

[Core/Types.ts:97](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L97)

___

### mch\_id

• `Optional` **mch\_id**: `string`

商户号

**`scope`** Payment | MicroMerchant

#### Defined in

[Core/Types.ts:109](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L109)

___

### notify\_url

• `Optional` **notify\_url**: `string`

支付通知URL

**`scope`** Payment

#### Defined in

[Core/Types.ts:133](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L133)

___

### oauth

• `Optional` **oauth**: [`EasyWechatConfigOauth`](Core_Types.EasyWechatConfigOauth.md)

网页授权相关配置

**`scope`** OfficialAccount | OpenPlatform

#### Defined in

[Core/Types.ts:89](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L89)

___

### refresh\_token

• `Optional` **refresh\_token**: `string`

刷新token

**`scope`** OpenPlatform

#### Defined in

[Core/Types.ts:175](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L175)

___

### rsa\_public\_key\_path

• `Optional` **rsa\_public\_key\_path**: `string`

公钥路径（付款到银行卡接口需要，transfer.toBankCard()）

**`scope`** Payment

#### Defined in

[Core/Types.ts:127](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L127)

___

### sandbox

• `Optional` **sandbox**: `boolean`

是否沙盒模式，默认：false

**`scope`** Payment

#### Defined in

[Core/Types.ts:144](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L144)

___

### secret

• `Optional` **secret**: `string`

应用 secret

**`scope`** BaseService | OfficialAccount | MiniProgram | Work

#### Defined in

[Core/Types.ts:59](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L59)

___

### serial\_no

• `Optional` **serial\_no**: `string`

获取证书接口获取到的平台证书序列号

**`scope`** MicroMerchant

#### Defined in

[Core/Types.ts:150](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L150)

___

### sub\_appid

• `Optional` **sub\_appid**: `string`

支付应用的子 app_id

**`scope`** Payment

#### Defined in

[Core/Types.ts:103](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L103)

___

### sub\_mch\_id

• `Optional` **sub\_mch\_id**: `string`

子商户号

**`scope`** Payment | MicroMerchant

#### Defined in

[Core/Types.ts:115](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L115)

___

### token

• `Optional` **token**: `string`

服务端接口验证 token

**`scope`** OfficialAccount | MiniProgram | OpenPlatform

#### Defined in

[Core/Types.ts:77](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Types.ts#L77)
