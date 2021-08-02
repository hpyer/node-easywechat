[node-easywechat](../README.md) / [Exports](../modules.md) / [OfficialAccount/Application](../modules/OfficialAccount_Application.md) / default

# Class: default

[OfficialAccount/Application](../modules/OfficialAccount_Application.md).default

## Hierarchy

- [`default`](Core_BaseApplication.default.md)

  ↳ **`default`**

  ↳↳ [`default`](OpenPlatform_Authorizer_OfficialAccount_Application.default.md)

## Table of contents

### Constructors

- [constructor](OfficialAccount_Application.default.md#constructor)

### Properties

- [access\_token](OfficialAccount_Application.default.md#access_token)
- [auto\_reply](OfficialAccount_Application.default.md#auto_reply)
- [base](OfficialAccount_Application.default.md#base)
- [broadcasting](OfficialAccount_Application.default.md#broadcasting)
- [cache](OfficialAccount_Application.default.md#cache)
- [card](OfficialAccount_Application.default.md#card)
- [comment](OfficialAccount_Application.default.md#comment)
- [config](OfficialAccount_Application.default.md#config)
- [customer\_service](OfficialAccount_Application.default.md#customer_service)
- [customer\_service\_session](OfficialAccount_Application.default.md#customer_service_session)
- [data\_cube](OfficialAccount_Application.default.md#data_cube)
- [defaultConfig](OfficialAccount_Application.default.md#defaultconfig)
- [device](OfficialAccount_Application.default.md#device)
- [encryptor](OfficialAccount_Application.default.md#encryptor)
- [goods](OfficialAccount_Application.default.md#goods)
- [id](OfficialAccount_Application.default.md#id)
- [jssdk](OfficialAccount_Application.default.md#jssdk)
- [log](OfficialAccount_Application.default.md#log)
- [material](OfficialAccount_Application.default.md#material)
- [media](OfficialAccount_Application.default.md#media)
- [menu](OfficialAccount_Application.default.md#menu)
- [oauth](OfficialAccount_Application.default.md#oauth)
- [ocr](OfficialAccount_Application.default.md#ocr)
- [poi](OfficialAccount_Application.default.md#poi)
- [qrcode](OfficialAccount_Application.default.md#qrcode)
- [request](OfficialAccount_Application.default.md#request)
- [semantic](OfficialAccount_Application.default.md#semantic)
- [server](OfficialAccount_Application.default.md#server)
- [shake\_around](OfficialAccount_Application.default.md#shake_around)
- [store](OfficialAccount_Application.default.md#store)
- [subscribe\_message](OfficialAccount_Application.default.md#subscribe_message)
- [template\_message](OfficialAccount_Application.default.md#template_message)
- [url](OfficialAccount_Application.default.md#url)
- [user](OfficialAccount_Application.default.md#user)
- [userConfig](OfficialAccount_Application.default.md#userconfig)
- [user\_tag](OfficialAccount_Application.default.md#user_tag)

### Methods

- [checkCallbackUrl](OfficialAccount_Application.default.md#checkcallbackurl)
- [clearQuota](OfficialAccount_Application.default.md#clearquota)
- [createDefaultCache](OfficialAccount_Application.default.md#createdefaultcache)
- [extend](OfficialAccount_Application.default.md#extend)
- [getCache](OfficialAccount_Application.default.md#getcache)
- [getConfig](OfficialAccount_Application.default.md#getconfig)
- [getId](OfficialAccount_Application.default.md#getid)
- [getValidIps](OfficialAccount_Application.default.md#getvalidips)
- [offsetSet](OfficialAccount_Application.default.md#offsetset)
- [offsetUnset](OfficialAccount_Application.default.md#offsetunset)
- [rebind](OfficialAccount_Application.default.md#rebind)
- [registerCommonProviders](OfficialAccount_Application.default.md#registercommonproviders)
- [registerProviders](OfficialAccount_Application.default.md#registerproviders)

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

[OfficialAccount/Application.ts:78](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L78)

## Properties

### access\_token

• **access\_token**: [`default`](OfficialAccount_Auth_AccessToken.default.md) = `null`

请求token

#### Overrides

[default](Core_BaseApplication.default.md).[access_token](Core_BaseApplication.default.md#access_token)

#### Defined in

[OfficialAccount/Application.ts:48](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L48)

___

### auto\_reply

• **auto\_reply**: [`default`](OfficialAccount_AutoReply_AutoReplyClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:63](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L63)

___

### base

• **base**: [`default`](OfficialAccount_Base_OfficialAccountBase.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:70](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L70)

___

### broadcasting

• **broadcasting**: [`default`](OfficialAccount_Broadcasting_BroadcastingClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:64](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L64)

___

### cache

• **cache**: [`default`](Core_Contracts_CacheInterface.default.md) = `null`

缓存实例

#### Inherited from

[default](Core_BaseApplication.default.md).[cache](Core_BaseApplication.default.md#cache)

#### Defined in

[Core/BaseApplication.ts:20](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L20)

___

### card

• **card**: [`default`](OfficialAccount_Card_Card.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:65](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L65)

___

### comment

• **comment**: [`default`](OfficialAccount_Comment_CommentClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:69](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L69)

___

### config

• **config**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

配置项

#### Inherited from

[default](Core_BaseApplication.default.md).[config](Core_BaseApplication.default.md#config)

#### Defined in

[Core/BaseApplication.ts:24](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L24)

___

### customer\_service

• **customer\_service**: [`default`](OfficialAccount_CustomerService_CustomerServiceClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:58](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L58)

___

### customer\_service\_session

• **customer\_service\_session**: [`default`](OfficialAccount_CustomerService_CustomerServiceSession.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:59](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L59)

___

### data\_cube

• **data\_cube**: [`default`](OfficialAccount_DataCube_DataCubeClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:61](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L61)

___

### defaultConfig

• `Protected` **defaultConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

#### Overrides

[default](Core_BaseApplication.default.md).[defaultConfig](Core_BaseApplication.default.md#defaultconfig)

#### Defined in

[OfficialAccount/Application.ts:39](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L39)

___

### device

• **device**: [`default`](OfficialAccount_Device_DeviceClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:66](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L66)

___

### encryptor

• **encryptor**: [`default`](Core_Encryptor.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:49](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L49)

___

### goods

• **goods**: [`default`](OfficialAccount_Goods_GoodsClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:72](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L72)

___

### id

• `Protected` **id**: `String` = `null`

#### Inherited from

[default](Core_BaseApplication.default.md).[id](Core_BaseApplication.default.md#id)

#### Defined in

[Core/BaseApplication.ts:15](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L15)

___

### jssdk

• **jssdk**: [`default`](BaseService_Jssdk_JssdkClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:73](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L73)

___

### log

• **log**: `Function` = `null`

日志方法

#### Inherited from

[default](Core_BaseApplication.default.md).[log](Core_BaseApplication.default.md#log)

#### Defined in

[Core/BaseApplication.ts:28](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L28)

___

### material

• **material**: [`default`](OfficialAccount_Material_MaterialClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:57](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L57)

___

### media

• **media**: [`default`](BaseService_Media_MediaClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:74](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L74)

___

### menu

• **menu**: [`default`](OfficialAccount_Menu_MenuClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:54](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L54)

___

### oauth

• **oauth**: `default` = `null`

#### Defined in

[OfficialAccount/Application.ts:53](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L53)

___

### ocr

• **ocr**: [`default`](OfficialAccount_OCR_OCRClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:71](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L71)

___

### poi

• **poi**: [`default`](OfficialAccount_POI_POIClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:62](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L62)

___

### qrcode

• **qrcode**: [`default`](BaseService_Qrcode_QrcodeClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:75](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L75)

___

### request

• **request**: [`default`](Core_Http_Request.default.md) = `null`

请求实例

#### Inherited from

[default](Core_BaseApplication.default.md).[request](Core_BaseApplication.default.md#request)

#### Defined in

[Core/BaseApplication.ts:32](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L32)

___

### semantic

• **semantic**: [`default`](OfficialAccount_Semantic_SemanticClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:60](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L60)

___

### server

• **server**: [`default`](OfficialAccount_Server_Guard.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:50](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L50)

___

### shake\_around

• **shake\_around**: [`default`](OfficialAccount_ShakeAround_ShakeAround.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:67](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L67)

___

### store

• **store**: [`default`](OfficialAccount_Store_StoreClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:68](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L68)

___

### subscribe\_message

• **subscribe\_message**: [`default`](OfficialAccount_SubscribeMessage_SubscribeMessageClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:56](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L56)

___

### template\_message

• **template\_message**: [`default`](OfficialAccount_TemplateMessage_TemplateMessageClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:55](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L55)

___

### url

• **url**: [`default`](BaseService_Url_UrlClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:76](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L76)

___

### user

• **user**: [`default`](OfficialAccount_User_UserClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:51](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L51)

___

### userConfig

• `Protected` **userConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

#### Inherited from

[default](Core_BaseApplication.default.md).[userConfig](Core_BaseApplication.default.md#userconfig)

#### Defined in

[Core/BaseApplication.ts:14](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L14)

___

### user\_tag

• **user\_tag**: [`default`](OfficialAccount_User_TagClient.default.md) = `null`

#### Defined in

[OfficialAccount/Application.ts:52](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L52)

## Methods

### checkCallbackUrl

▸ **checkCallbackUrl**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Application.ts:242](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L242)

___

### clearQuota

▸ **clearQuota**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Application.ts:234](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L234)

___

### createDefaultCache

▸ **createDefaultCache**(): [`default`](Core_Cache_FileCache.default.md)

生成默认的缓存实例（文件缓存）

#### Returns

[`default`](Core_Cache_FileCache.default.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[createDefaultCache](Core_BaseApplication.default.md#createdefaultcache)

#### Defined in

[Core/BaseApplication.ts:157](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L157)

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

[Core/BaseApplication.ts:102](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L102)

___

### getCache

▸ **getCache**(): [`default`](Core_Contracts_CacheInterface.default.md)

获取cache实例

#### Returns

[`default`](Core_Contracts_CacheInterface.default.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[getCache](Core_BaseApplication.default.md#getcache)

#### Defined in

[Core/BaseApplication.ts:145](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L145)

___

### getConfig

▸ **getConfig**(): [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

获取合并后的配置

#### Returns

[`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[getConfig](Core_BaseApplication.default.md#getconfig)

#### Defined in

[Core/BaseApplication.ts:64](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L64)

___

### getId

▸ **getId**(): `String`

#### Returns

`String`

#### Inherited from

[default](Core_BaseApplication.default.md).[getId](Core_BaseApplication.default.md#getid)

#### Defined in

[Core/BaseApplication.ts:53](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L53)

___

### getValidIps

▸ **getValidIps**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[OfficialAccount/Application.ts:238](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L238)

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

[Core/BaseApplication.ts:134](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L134)

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

[Core/BaseApplication.ts:124](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L124)

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

[Core/BaseApplication.ts:113](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L113)

___

### registerCommonProviders

▸ **registerCommonProviders**(): `void`

注册通用模块

#### Returns

`void`

#### Inherited from

[default](Core_BaseApplication.default.md).[registerCommonProviders](Core_BaseApplication.default.md#registercommonproviders)

#### Defined in

[Core/BaseApplication.ts:80](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L80)

___

### registerProviders

▸ **registerProviders**(): `void`

#### Returns

`void`

#### Defined in

[OfficialAccount/Application.ts:85](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/OfficialAccount/Application.ts#L85)
