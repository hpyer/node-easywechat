[node-easywechat](../README.md) / [Exports](../modules.md) / [Payment/Application](../modules/Payment_Application.md) / default

# Class: default

[Payment/Application](../modules/Payment_Application.md).default

## Hierarchy

- [`default`](Core_BaseApplication.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Payment_Application.default.md#constructor)

### Properties

- [access\_token](Payment_Application.default.md#access_token)
- [base](Payment_Application.default.md#base)
- [bill](Payment_Application.default.md#bill)
- [cache](Payment_Application.default.md#cache)
- [config](Payment_Application.default.md#config)
- [coupon](Payment_Application.default.md#coupon)
- [defaultConfig](Payment_Application.default.md#defaultconfig)
- [id](Payment_Application.default.md#id)
- [jssdk](Payment_Application.default.md#jssdk)
- [log](Payment_Application.default.md#log)
- [merchant](Payment_Application.default.md#merchant)
- [order](Payment_Application.default.md#order)
- [profit\_sharing](Payment_Application.default.md#profit_sharing)
- [redpack](Payment_Application.default.md#redpack)
- [refund](Payment_Application.default.md#refund)
- [request](Payment_Application.default.md#request)
- [reverse](Payment_Application.default.md#reverse)
- [sandbox](Payment_Application.default.md#sandbox)
- [security](Payment_Application.default.md#security)
- [transfer](Payment_Application.default.md#transfer)
- [url](Payment_Application.default.md#url)
- [userConfig](Payment_Application.default.md#userconfig)

### Methods

- [authCodeToOpenid](Payment_Application.default.md#authcodetoopenid)
- [codeUrlScheme](Payment_Application.default.md#codeurlscheme)
- [createDefaultCache](Payment_Application.default.md#createdefaultcache)
- [extend](Payment_Application.default.md#extend)
- [getCache](Payment_Application.default.md#getcache)
- [getConfig](Payment_Application.default.md#getconfig)
- [getId](Payment_Application.default.md#getid)
- [getKey](Payment_Application.default.md#getkey)
- [handlePaidNotify](Payment_Application.default.md#handlepaidnotify)
- [handleRefundedNotify](Payment_Application.default.md#handlerefundednotify)
- [handleScannedNotify](Payment_Application.default.md#handlescannednotify)
- [inSandbox](Payment_Application.default.md#insandbox)
- [offsetSet](Payment_Application.default.md#offsetset)
- [offsetUnset](Payment_Application.default.md#offsetunset)
- [pay](Payment_Application.default.md#pay)
- [rebind](Payment_Application.default.md#rebind)
- [registerCommonProviders](Payment_Application.default.md#registercommonproviders)
- [registerProviders](Payment_Application.default.md#registerproviders)
- [scheme](Payment_Application.default.md#scheme)
- [setSubMerchant](Payment_Application.default.md#setsubmerchant)

## Constructors

### constructor

• **new default**(`config?`, `prepends?`, `id?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config` | [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) | `{}` |
| `prepends` | `Object` | `{}` |
| `id` | `String` | `null` |

#### Overrides

[default](Core_BaseApplication.default.md).[constructor](Core_BaseApplication.default.md#constructor)

#### Defined in

[Payment/Application.ts:54](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L54)

## Properties

### access\_token

• **access\_token**: [`default`](OfficialAccount_Auth_AccessToken.default.md) = `null`

请求token

#### Overrides

[default](Core_BaseApplication.default.md).[access_token](Core_BaseApplication.default.md#access_token)

#### Defined in

[Payment/Application.ts:51](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L51)

___

### base

• **base**: [`default`](Payment_Base_PaymentBase.default.md) = `null`

#### Defined in

[Payment/Application.ts:38](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L38)

___

### bill

• **bill**: [`default`](Payment_Bill_BillClient.default.md) = `null`

#### Defined in

[Payment/Application.ts:39](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L39)

___

### cache

• **cache**: [`default`](Core_Contracts_CacheInterface.default.md) = `null`

缓存实例

#### Inherited from

[default](Core_BaseApplication.default.md).[cache](Core_BaseApplication.default.md#cache)

#### Defined in

[Core/BaseApplication.ts:20](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L20)

___

### config

• **config**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

配置项

#### Inherited from

[default](Core_BaseApplication.default.md).[config](Core_BaseApplication.default.md#config)

#### Defined in

[Core/BaseApplication.ts:24](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L24)

___

### coupon

• **coupon**: [`default`](Payment_Coupon_CouponClient.default.md) = `null`

#### Defined in

[Payment/Application.ts:40](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L40)

___

### defaultConfig

• `Protected` **defaultConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

#### Overrides

[default](Core_BaseApplication.default.md).[defaultConfig](Core_BaseApplication.default.md#defaultconfig)

#### Defined in

[Payment/Application.ts:28](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L28)

___

### id

• `Protected` **id**: `String` = `null`

#### Inherited from

[default](Core_BaseApplication.default.md).[id](Core_BaseApplication.default.md#id)

#### Defined in

[Core/BaseApplication.ts:15](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L15)

___

### jssdk

• **jssdk**: [`default`](Payment_Jssdk_JssdkClient.default.md) = `null`

#### Defined in

[Payment/Application.ts:41](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L41)

___

### log

• **log**: `Function` = `null`

日志方法

#### Inherited from

[default](Core_BaseApplication.default.md).[log](Core_BaseApplication.default.md#log)

#### Defined in

[Core/BaseApplication.ts:28](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L28)

___

### merchant

• **merchant**: [`default`](Payment_Merchant_MerchantClient.default.md) = `null`

#### Defined in

[Payment/Application.ts:42](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L42)

___

### order

• **order**: [`default`](Payment_Order_OrderClient.default.md) = `null`

#### Defined in

[Payment/Application.ts:43](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L43)

___

### profit\_sharing

• **profit\_sharing**: [`default`](Payment_ProfitSharing_ProfitSharingClient.default.md) = `null`

#### Defined in

[Payment/Application.ts:50](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L50)

___

### redpack

• **redpack**: [`default`](Payment_Redpack_RedpackClient.default.md) = `null`

#### Defined in

[Payment/Application.ts:44](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L44)

___

### refund

• **refund**: [`default`](Payment_Refund_RefundClient.default.md) = `null`

#### Defined in

[Payment/Application.ts:45](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L45)

___

### request

• **request**: [`default`](Core_Http_Request.default.md) = `null`

请求实例

#### Inherited from

[default](Core_BaseApplication.default.md).[request](Core_BaseApplication.default.md#request)

#### Defined in

[Core/BaseApplication.ts:32](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L32)

___

### reverse

• **reverse**: [`default`](Payment_Reverse_ReverseClient.default.md) = `null`

#### Defined in

[Payment/Application.ts:46](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L46)

___

### sandbox

• **sandbox**: [`default`](Payment_Sandbox_SandboxClient.default.md) = `null`

#### Defined in

[Payment/Application.ts:47](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L47)

___

### security

• **security**: [`default`](Payment_Security_SecurityClient.default.md) = `null`

#### Defined in

[Payment/Application.ts:49](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L49)

___

### transfer

• **transfer**: [`default`](Payment_Transfer_TransferClient.default.md) = `null`

#### Defined in

[Payment/Application.ts:48](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L48)

___

### url

• **url**: [`default`](BaseService_Url_UrlClient.default.md) = `null`

#### Defined in

[Payment/Application.ts:52](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L52)

___

### userConfig

• `Protected` **userConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

#### Inherited from

[default](Core_BaseApplication.default.md).[userConfig](Core_BaseApplication.default.md#userconfig)

#### Defined in

[Core/BaseApplication.ts:14](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L14)

## Methods

### authCodeToOpenid

▸ **authCodeToOpenid**(): `Promise`<`any`\>

付款码查询openid

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Application.ts:219](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L219)

___

### codeUrlScheme

▸ **codeUrlScheme**(`codeUrl`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `codeUrl` | `string` |

#### Returns

`string`

#### Defined in

[Payment/Application.ts:133](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L133)

___

### createDefaultCache

▸ **createDefaultCache**(): [`default`](Core_Cache_FileCache.default.md)

生成默认的缓存实例（文件缓存）

#### Returns

[`default`](Core_Cache_FileCache.default.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[createDefaultCache](Core_BaseApplication.default.md#createdefaultcache)

#### Defined in

[Core/BaseApplication.ts:161](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L161)

___

### extend

▸ **extend**(`id`, `func`): `void`

扩展服务模块

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 服务模块的id，如：cache、request、access_token |
| `func` | `Function` | 传入一个闭包，闭包会接收一个指向id模块的实例参数 |

#### Returns

`void`

#### Inherited from

[default](Core_BaseApplication.default.md).[extend](Core_BaseApplication.default.md#extend)

#### Defined in

[Core/BaseApplication.ts:106](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L106)

___

### getCache

▸ **getCache**(): [`default`](Core_Contracts_CacheInterface.default.md)

获取cache实例

#### Returns

[`default`](Core_Contracts_CacheInterface.default.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[getCache](Core_BaseApplication.default.md#getcache)

#### Defined in

[Core/BaseApplication.ts:149](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L149)

___

### getConfig

▸ **getConfig**(): [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

获取合并后的配置

#### Returns

[`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[getConfig](Core_BaseApplication.default.md#getconfig)

#### Defined in

[Core/BaseApplication.ts:64](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L64)

___

### getId

▸ **getId**(): `String`

#### Returns

`String`

#### Inherited from

[default](Core_BaseApplication.default.md).[getId](Core_BaseApplication.default.md#getid)

#### Defined in

[Core/BaseApplication.ts:53](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L53)

___

### getKey

▸ **getKey**(`endpoint?`): `Promise`<`string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `null` |

#### Returns

`Promise`<`string`\>

#### Defined in

[Payment/Application.ts:159](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L159)

___

### handlePaidNotify

▸ **handlePaidNotify**(`closure`): `Promise`<[`default`](Core_Http_Response.default.md)\>

处理付款结果通知

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `closure` | [`PaymentPaidHandler`](../modules/Core_Types.md#paymentpaidhandler) | 处理函数。需接收2个参数，第1个参数通知消息message，第2个参数为设置错误消息的方法。处理函数需要return true;表示处理成功 |

#### Returns

`Promise`<[`default`](Core_Http_Response.default.md)\>

#### Defined in

[Payment/Application.ts:182](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L182)

___

### handleRefundedNotify

▸ **handleRefundedNotify**(`closure`): `Promise`<[`default`](Core_Http_Response.default.md)\>

处理退款结果通知

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `closure` | [`PaymentRefundedHandler`](../modules/Core_Types.md#paymentrefundedhandler) | 处理函数。需接收3个参数，第1个参数通知消息message，第2个参数为message['req_info']解密后的信息，第3个参数为设置错误消息的方法。处理函数需要return true;表示处理成功 |

#### Returns

`Promise`<[`default`](Core_Http_Response.default.md)\>

#### Defined in

[Payment/Application.ts:190](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L190)

___

### handleScannedNotify

▸ **handleScannedNotify**(`closure`): `Promise`<[`default`](Core_Http_Response.default.md)\>

扫码支付通知

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `closure` | [`PaymentScannedHandler`](../modules/Core_Types.md#paymentscannedhandler) | 处理函数。需接收3个参数，第1个参数通知消息message，第2个参数返回“通信错误”给微信，第3个参数返回“业务错误”给微信。处理函数需要return prepay_id |

#### Returns

`Promise`<[`default`](Core_Http_Response.default.md)\>

#### Defined in

[Payment/Application.ts:198](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L198)

___

### inSandbox

▸ **inSandbox**(): `boolean`

判断是否沙盒模式

#### Returns

`boolean`

#### Defined in

[Payment/Application.ts:154](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L154)

___

### offsetSet

▸ **offsetSet**(`id`, `value`): `void`

绑定自定义服务模块

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 服务模块的id，如：cache、request、access_token |
| `value` | `any` | 自定义服务模块的实例，可以传入一个闭包，闭包会接收一个指向Application的参数 |

#### Returns

`void`

#### Inherited from

[default](Core_BaseApplication.default.md).[offsetSet](Core_BaseApplication.default.md#offsetset)

#### Defined in

[Core/BaseApplication.ts:138](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L138)

___

### offsetUnset

▸ **offsetUnset**(`id`): `void`

解绑自定义服务模块

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 服务模块的id，如：cache、request、access_token |

#### Returns

`void`

#### Inherited from

[default](Core_BaseApplication.default.md).[offsetUnset](Core_BaseApplication.default.md#offsetunset)

#### Defined in

[Core/BaseApplication.ts:128](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L128)

___

### pay

▸ **pay**(): `Promise`<`any`\>

刷卡支付

#### Returns

`Promise`<`any`\>

#### Defined in

[Payment/Application.ts:210](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L210)

___

### rebind

▸ **rebind**(`id`, `value`): `void`

自定义服务模块（重新绑定）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 服务模块的id，如：cache、request、access_token |
| `value` | `any` | 自定义服务模块的实例，可以传入一个闭包，闭包会接收一个指向Application的参数 |

#### Returns

`void`

#### Inherited from

[default](Core_BaseApplication.default.md).[rebind](Core_BaseApplication.default.md#rebind)

#### Defined in

[Core/BaseApplication.ts:117](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L117)

___

### registerCommonProviders

▸ **registerCommonProviders**(): `void`

注册通用模块

#### Returns

`void`

#### Inherited from

[default](Core_BaseApplication.default.md).[registerCommonProviders](Core_BaseApplication.default.md#registercommonproviders)

#### Defined in

[Core/BaseApplication.ts:80](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L80)

___

### registerProviders

▸ **registerProviders**(): `void`

#### Returns

`void`

#### Defined in

[Payment/Application.ts:61](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L61)

___

### scheme

▸ **scheme**(`product_id`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `product_id` | `string` |

#### Returns

`string`

#### Defined in

[Payment/Application.ts:118](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L118)

___

### setSubMerchant

▸ **setSubMerchant**(`mchId`, `appId?`): [`default`](Payment_Application.default.md)

设置子商户

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mchId` | `string` | `undefined` |
| `appId` | `string` | `null` |

#### Returns

[`default`](Payment_Application.default.md)

#### Defined in

[Payment/Application.ts:143](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Payment/Application.ts#L143)
