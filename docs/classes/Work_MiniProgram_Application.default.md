[node-easywechat](../README.md) / [Exports](../modules.md) / [Work/MiniProgram/Application](../modules/Work_MiniProgram_Application.md) / default

# Class: default

[Work/MiniProgram/Application](../modules/Work_MiniProgram_Application.md).default

## Hierarchy

- [`default`](MiniProgram_Application.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Work_MiniProgram_Application.default.md#constructor)

### Properties

- [access\_token](Work_MiniProgram_Application.default.md#access_token)
- [activity\_message](Work_MiniProgram_Application.default.md#activity_message)
- [app\_code](Work_MiniProgram_Application.default.md#app_code)
- [auth](Work_MiniProgram_Application.default.md#auth)
- [base](Work_MiniProgram_Application.default.md#base)
- [broadcast](Work_MiniProgram_Application.default.md#broadcast)
- [cache](Work_MiniProgram_Application.default.md#cache)
- [config](Work_MiniProgram_Application.default.md#config)
- [content\_security](Work_MiniProgram_Application.default.md#content_security)
- [customer\_service](Work_MiniProgram_Application.default.md#customer_service)
- [data\_cube](Work_MiniProgram_Application.default.md#data_cube)
- [defaultConfig](Work_MiniProgram_Application.default.md#defaultconfig)
- [encryptor](Work_MiniProgram_Application.default.md#encryptor)
- [express](Work_MiniProgram_Application.default.md#express)
- [id](Work_MiniProgram_Application.default.md#id)
- [live](Work_MiniProgram_Application.default.md#live)
- [log](Work_MiniProgram_Application.default.md#log)
- [media](Work_MiniProgram_Application.default.md#media)
- [nearby\_poi](Work_MiniProgram_Application.default.md#nearby_poi)
- [ocr](Work_MiniProgram_Application.default.md#ocr)
- [open\_data](Work_MiniProgram_Application.default.md#open_data)
- [plugin](Work_MiniProgram_Application.default.md#plugin)
- [plugin\_dev](Work_MiniProgram_Application.default.md#plugin_dev)
- [realtime\_log](Work_MiniProgram_Application.default.md#realtime_log)
- [request](Work_MiniProgram_Application.default.md#request)
- [risk\_control](Work_MiniProgram_Application.default.md#risk_control)
- [search](Work_MiniProgram_Application.default.md#search)
- [server](Work_MiniProgram_Application.default.md#server)
- [soter](Work_MiniProgram_Application.default.md#soter)
- [subscribe\_message](Work_MiniProgram_Application.default.md#subscribe_message)
- [template\_message](Work_MiniProgram_Application.default.md#template_message)
- [uniform\_message](Work_MiniProgram_Application.default.md#uniform_message)
- [union](Work_MiniProgram_Application.default.md#union)
- [url\_scheme](Work_MiniProgram_Application.default.md#url_scheme)
- [userConfig](Work_MiniProgram_Application.default.md#userconfig)

### Methods

- [createDefaultCache](Work_MiniProgram_Application.default.md#createdefaultcache)
- [extend](Work_MiniProgram_Application.default.md#extend)
- [getCache](Work_MiniProgram_Application.default.md#getcache)
- [getConfig](Work_MiniProgram_Application.default.md#getconfig)
- [getId](Work_MiniProgram_Application.default.md#getid)
- [getPaidUnionid](Work_MiniProgram_Application.default.md#getpaidunionid)
- [offsetSet](Work_MiniProgram_Application.default.md#offsetset)
- [offsetUnset](Work_MiniProgram_Application.default.md#offsetunset)
- [rebind](Work_MiniProgram_Application.default.md#rebind)
- [registerCommonProviders](Work_MiniProgram_Application.default.md#registercommonproviders)
- [registerProviders](Work_MiniProgram_Application.default.md#registerproviders)

## Constructors

### constructor

• **new default**(`config?`, `prepends?`, `id?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config` | `Object` | `{}` |
| `prepends` | `Object` | `{}` |
| `id` | `String` | `null` |

#### Overrides

[default](MiniProgram_Application.default.md).[constructor](MiniProgram_Application.default.md#constructor)

#### Defined in

[Work/MiniProgram/Application.ts:12](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/MiniProgram/Application.ts#L12)

## Properties

### access\_token

• **access\_token**: [`default`](MiniProgram_Auth_AccessToken.default.md) = `null`

请求token

#### Inherited from

[default](MiniProgram_Application.default.md).[access_token](MiniProgram_Application.default.md#access_token)

#### Defined in

[MiniProgram/Application.ts:37](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L37)

___

### activity\_message

• **activity\_message**: [`default`](MiniProgram_ActivityMessage_ActivityMessageClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[activity_message](MiniProgram_Application.default.md#activity_message)

#### Defined in

[MiniProgram/Application.ts:46](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L46)

___

### app\_code

• **app\_code**: [`default`](MiniProgram_AppCode_AppCodeClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[app_code](MiniProgram_Application.default.md#app_code)

#### Defined in

[MiniProgram/Application.ts:42](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L42)

___

### auth

• **auth**: [`default`](Work_MiniProgram_Auth_AuthClient.default.md) = `null`

#### Overrides

[default](MiniProgram_Application.default.md).[auth](MiniProgram_Application.default.md#auth)

#### Defined in

[Work/MiniProgram/Application.ts:10](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/MiniProgram/Application.ts#L10)

___

### base

• **base**: [`default`](MiniProgram_Base_MiniProgramBase.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[base](MiniProgram_Application.default.md#base)

#### Defined in

[MiniProgram/Application.ts:50](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L50)

___

### broadcast

• **broadcast**: [`default`](MiniProgram_Broadcast_BroadcastClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[broadcast](MiniProgram_Application.default.md#broadcast)

#### Defined in

[MiniProgram/Application.ts:63](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L63)

___

### cache

• **cache**: [`default`](Core_Contracts_CacheInterface.default.md) = `null`

缓存实例

#### Inherited from

[default](MiniProgram_Application.default.md).[cache](MiniProgram_Application.default.md#cache)

#### Defined in

[Core/BaseApplication.ts:20](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L20)

___

### config

• **config**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

配置项

#### Inherited from

[default](MiniProgram_Application.default.md).[config](MiniProgram_Application.default.md#config)

#### Defined in

[Core/BaseApplication.ts:24](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L24)

___

### content\_security

• **content\_security**: [`default`](BaseService_ContentSecurity_ContentSecurityClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[content_security](MiniProgram_Application.default.md#content_security)

#### Defined in

[MiniProgram/Application.ts:59](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L59)

___

### customer\_service

• **customer\_service**: [`default`](OfficialAccount_CustomerService_CustomerServiceClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[customer_service](MiniProgram_Application.default.md#customer_service)

#### Defined in

[MiniProgram/Application.ts:44](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L44)

___

### data\_cube

• **data\_cube**: [`default`](MiniProgram_DataCube_DataCubeClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[data_cube](MiniProgram_Application.default.md#data_cube)

#### Defined in

[MiniProgram/Application.ts:41](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L41)

___

### defaultConfig

• `Protected` **defaultConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

#### Inherited from

[default](MiniProgram_Application.default.md).[defaultConfig](MiniProgram_Application.default.md#defaultconfig)

#### Defined in

[Core/BaseApplication.ts:13](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L13)

___

### encryptor

• **encryptor**: [`default`](MiniProgram_Encryptor.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[encryptor](MiniProgram_Application.default.md#encryptor)

#### Defined in

[MiniProgram/Application.ts:39](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L39)

___

### express

• **express**: [`default`](MiniProgram_Express_ExpressClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[express](MiniProgram_Application.default.md#express)

#### Defined in

[MiniProgram/Application.ts:51](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L51)

___

### id

• `Protected` **id**: `String` = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[id](MiniProgram_Application.default.md#id)

#### Defined in

[Core/BaseApplication.ts:15](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L15)

___

### live

• **live**: [`default`](MiniProgram_Live_LiveClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[live](MiniProgram_Application.default.md#live)

#### Defined in

[MiniProgram/Application.ts:62](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L62)

___

### log

• **log**: `Function` = `null`

日志方法

#### Inherited from

[default](MiniProgram_Application.default.md).[log](MiniProgram_Application.default.md#log)

#### Defined in

[Core/BaseApplication.ts:28](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L28)

___

### media

• **media**: [`default`](BaseService_Media_MediaClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[media](MiniProgram_Application.default.md#media)

#### Defined in

[MiniProgram/Application.ts:58](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L58)

___

### nearby\_poi

• **nearby\_poi**: [`default`](MiniProgram_NearbyPoi_NearbyPoiClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[nearby_poi](MiniProgram_Application.default.md#nearby_poi)

#### Defined in

[MiniProgram/Application.ts:52](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L52)

___

### ocr

• **ocr**: [`default`](OfficialAccount_OCR_OCRClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[ocr](MiniProgram_Application.default.md#ocr)

#### Defined in

[MiniProgram/Application.ts:53](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L53)

___

### open\_data

• **open\_data**: [`default`](MiniProgram_OpenData_OpenDataClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[open_data](MiniProgram_Application.default.md#open_data)

#### Defined in

[MiniProgram/Application.ts:47](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L47)

___

### plugin

• **plugin**: [`default`](MiniProgram_Plugin_PluginClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[plugin](MiniProgram_Application.default.md#plugin)

#### Defined in

[MiniProgram/Application.ts:48](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L48)

___

### plugin\_dev

• **plugin\_dev**: [`default`](MiniProgram_Plugin_PluginDevClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[plugin_dev](MiniProgram_Application.default.md#plugin_dev)

#### Defined in

[MiniProgram/Application.ts:49](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L49)

___

### realtime\_log

• **realtime\_log**: [`default`](MiniProgram_RealtimeLog_RealtimeLogClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[realtime_log](MiniProgram_Application.default.md#realtime_log)

#### Defined in

[MiniProgram/Application.ts:56](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L56)

___

### request

• **request**: [`default`](Core_Http_Request.default.md) = `null`

请求实例

#### Inherited from

[default](MiniProgram_Application.default.md).[request](MiniProgram_Application.default.md#request)

#### Defined in

[Core/BaseApplication.ts:32](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L32)

___

### risk\_control

• **risk\_control**: [`default`](MiniProgram_RiskControl_RiskControlClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[risk_control](MiniProgram_Application.default.md#risk_control)

#### Defined in

[MiniProgram/Application.ts:61](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L61)

___

### search

• **search**: [`default`](MiniProgram_Search_SearchClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[search](MiniProgram_Application.default.md#search)

#### Defined in

[MiniProgram/Application.ts:57](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L57)

___

### server

• **server**: [`default`](OfficialAccount_Server_Guard.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[server](MiniProgram_Application.default.md#server)

#### Defined in

[MiniProgram/Application.ts:40](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L40)

___

### soter

• **soter**: [`default`](MiniProgram_Soter_SoterClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[soter](MiniProgram_Application.default.md#soter)

#### Defined in

[MiniProgram/Application.ts:54](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L54)

___

### subscribe\_message

• **subscribe\_message**: [`default`](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[subscribe_message](MiniProgram_Application.default.md#subscribe_message)

#### Defined in

[MiniProgram/Application.ts:55](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L55)

___

### template\_message

• **template\_message**: [`default`](MiniProgram_TemplateMessage_TemplateMessageClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[template_message](MiniProgram_Application.default.md#template_message)

#### Defined in

[MiniProgram/Application.ts:43](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L43)

___

### uniform\_message

• **uniform\_message**: [`default`](MiniProgram_UniformMessage_UniformMessageClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[uniform_message](MiniProgram_Application.default.md#uniform_message)

#### Defined in

[MiniProgram/Application.ts:45](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L45)

___

### union

• **union**: [`default`](MiniProgram_Union_UnionClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[union](MiniProgram_Application.default.md#union)

#### Defined in

[MiniProgram/Application.ts:64](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L64)

___

### url\_scheme

• **url\_scheme**: [`default`](MiniProgram_UrlScheme_UrlSchemeClient.default.md) = `null`

#### Inherited from

[default](MiniProgram_Application.default.md).[url_scheme](MiniProgram_Application.default.md#url_scheme)

#### Defined in

[MiniProgram/Application.ts:60](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L60)

___

### userConfig

• `Protected` **userConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

#### Inherited from

[default](MiniProgram_Application.default.md).[userConfig](MiniProgram_Application.default.md#userconfig)

#### Defined in

[Core/BaseApplication.ts:14](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L14)

## Methods

### createDefaultCache

▸ **createDefaultCache**(): [`default`](Core_Cache_FileCache.default.md)

生成默认的缓存实例（文件缓存）

#### Returns

[`default`](Core_Cache_FileCache.default.md)

#### Inherited from

[default](MiniProgram_Application.default.md).[createDefaultCache](MiniProgram_Application.default.md#createdefaultcache)

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

[default](MiniProgram_Application.default.md).[extend](MiniProgram_Application.default.md#extend)

#### Defined in

[Core/BaseApplication.ts:102](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L102)

___

### getCache

▸ **getCache**(): [`default`](Core_Contracts_CacheInterface.default.md)

获取cache实例

#### Returns

[`default`](Core_Contracts_CacheInterface.default.md)

#### Inherited from

[default](MiniProgram_Application.default.md).[getCache](MiniProgram_Application.default.md#getcache)

#### Defined in

[Core/BaseApplication.ts:145](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L145)

___

### getConfig

▸ **getConfig**(): [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

获取合并后的配置

#### Returns

[`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

#### Inherited from

[default](MiniProgram_Application.default.md).[getConfig](MiniProgram_Application.default.md#getconfig)

#### Defined in

[Core/BaseApplication.ts:64](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L64)

___

### getId

▸ **getId**(): `String`

#### Returns

`String`

#### Inherited from

[default](MiniProgram_Application.default.md).[getId](MiniProgram_Application.default.md#getid)

#### Defined in

[Core/BaseApplication.ts:53](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L53)

___

### getPaidUnionid

▸ **getPaidUnionid**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Inherited from

[default](MiniProgram_Application.default.md).[getPaidUnionid](MiniProgram_Application.default.md#getpaidunionid)

#### Defined in

[MiniProgram/Application.ts:181](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L181)

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

[default](MiniProgram_Application.default.md).[offsetSet](MiniProgram_Application.default.md#offsetset)

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

[default](MiniProgram_Application.default.md).[offsetUnset](MiniProgram_Application.default.md#offsetunset)

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

[default](MiniProgram_Application.default.md).[rebind](MiniProgram_Application.default.md#rebind)

#### Defined in

[Core/BaseApplication.ts:113](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L113)

___

### registerCommonProviders

▸ **registerCommonProviders**(): `void`

注册通用模块

#### Returns

`void`

#### Inherited from

[default](MiniProgram_Application.default.md).[registerCommonProviders](MiniProgram_Application.default.md#registercommonproviders)

#### Defined in

[Core/BaseApplication.ts:80](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L80)

___

### registerProviders

▸ **registerProviders**(): `void`

#### Returns

`void`

#### Overrides

[default](MiniProgram_Application.default.md).[registerProviders](MiniProgram_Application.default.md#registerproviders)

#### Defined in

[Work/MiniProgram/Application.ts:19](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Work/MiniProgram/Application.ts#L19)