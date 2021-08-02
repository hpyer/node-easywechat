[node-easywechat](../README.md) / [Exports](../modules.md) / [MiniProgram/Application](../modules/MiniProgram_Application.md) / default

# Class: default

[MiniProgram/Application](../modules/MiniProgram_Application.md).default

## Hierarchy

- [`default`](Core_BaseApplication.default.md)

  ↳ **`default`**

  ↳↳ [`default`](OpenPlatform_Authorizer_MiniProgram_Application.default.md)

  ↳↳ [`default`](Work_MiniProgram_Application.default.md)

## Table of contents

### Constructors

- [constructor](MiniProgram_Application.default.md#constructor)

### Properties

- [access\_token](MiniProgram_Application.default.md#access_token)
- [activity\_message](MiniProgram_Application.default.md#activity_message)
- [app\_code](MiniProgram_Application.default.md#app_code)
- [auth](MiniProgram_Application.default.md#auth)
- [base](MiniProgram_Application.default.md#base)
- [broadcast](MiniProgram_Application.default.md#broadcast)
- [cache](MiniProgram_Application.default.md#cache)
- [config](MiniProgram_Application.default.md#config)
- [content\_security](MiniProgram_Application.default.md#content_security)
- [customer\_service](MiniProgram_Application.default.md#customer_service)
- [data\_cube](MiniProgram_Application.default.md#data_cube)
- [defaultConfig](MiniProgram_Application.default.md#defaultconfig)
- [encryptor](MiniProgram_Application.default.md#encryptor)
- [express](MiniProgram_Application.default.md#express)
- [id](MiniProgram_Application.default.md#id)
- [live](MiniProgram_Application.default.md#live)
- [log](MiniProgram_Application.default.md#log)
- [media](MiniProgram_Application.default.md#media)
- [nearby\_poi](MiniProgram_Application.default.md#nearby_poi)
- [ocr](MiniProgram_Application.default.md#ocr)
- [open\_data](MiniProgram_Application.default.md#open_data)
- [plugin](MiniProgram_Application.default.md#plugin)
- [plugin\_dev](MiniProgram_Application.default.md#plugin_dev)
- [realtime\_log](MiniProgram_Application.default.md#realtime_log)
- [request](MiniProgram_Application.default.md#request)
- [risk\_control](MiniProgram_Application.default.md#risk_control)
- [search](MiniProgram_Application.default.md#search)
- [server](MiniProgram_Application.default.md#server)
- [soter](MiniProgram_Application.default.md#soter)
- [subscribe\_message](MiniProgram_Application.default.md#subscribe_message)
- [template\_message](MiniProgram_Application.default.md#template_message)
- [uniform\_message](MiniProgram_Application.default.md#uniform_message)
- [union](MiniProgram_Application.default.md#union)
- [url\_scheme](MiniProgram_Application.default.md#url_scheme)
- [userConfig](MiniProgram_Application.default.md#userconfig)

### Methods

- [createDefaultCache](MiniProgram_Application.default.md#createdefaultcache)
- [extend](MiniProgram_Application.default.md#extend)
- [getCache](MiniProgram_Application.default.md#getcache)
- [getConfig](MiniProgram_Application.default.md#getconfig)
- [getId](MiniProgram_Application.default.md#getid)
- [getPaidUnionid](MiniProgram_Application.default.md#getpaidunionid)
- [offsetSet](MiniProgram_Application.default.md#offsetset)
- [offsetUnset](MiniProgram_Application.default.md#offsetunset)
- [rebind](MiniProgram_Application.default.md#rebind)
- [registerCommonProviders](MiniProgram_Application.default.md#registercommonproviders)
- [registerProviders](MiniProgram_Application.default.md#registerproviders)

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

[MiniProgram/Application.ts:66](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L66)

## Properties

### access\_token

• **access\_token**: [`default`](MiniProgram_Auth_AccessToken.default.md) = `null`

请求token

#### Overrides

[default](Core_BaseApplication.default.md).[access_token](Core_BaseApplication.default.md#access_token)

#### Defined in

[MiniProgram/Application.ts:37](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L37)

___

### activity\_message

• **activity\_message**: [`default`](MiniProgram_ActivityMessage_ActivityMessageClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:46](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L46)

___

### app\_code

• **app\_code**: [`default`](MiniProgram_AppCode_AppCodeClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:42](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L42)

___

### auth

• **auth**: [`default`](MiniProgram_Auth_AuthClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:38](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L38)

___

### base

• **base**: [`default`](MiniProgram_Base_MiniProgramBase.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:50](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L50)

___

### broadcast

• **broadcast**: [`default`](MiniProgram_Broadcast_BroadcastClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:63](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L63)

___

### cache

• **cache**: [`default`](Core_Contracts_CacheInterface.default.md) = `null`

缓存实例

#### Inherited from

[default](Core_BaseApplication.default.md).[cache](Core_BaseApplication.default.md#cache)

#### Defined in

[Core/BaseApplication.ts:20](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L20)

___

### config

• **config**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

配置项

#### Inherited from

[default](Core_BaseApplication.default.md).[config](Core_BaseApplication.default.md#config)

#### Defined in

[Core/BaseApplication.ts:24](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L24)

___

### content\_security

• **content\_security**: [`default`](BaseService_ContentSecurity_ContentSecurityClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:59](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L59)

___

### customer\_service

• **customer\_service**: [`default`](OfficialAccount_CustomerService_CustomerServiceClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:44](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L44)

___

### data\_cube

• **data\_cube**: [`default`](MiniProgram_DataCube_DataCubeClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:41](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L41)

___

### defaultConfig

• `Protected` **defaultConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

#### Inherited from

[default](Core_BaseApplication.default.md).[defaultConfig](Core_BaseApplication.default.md#defaultconfig)

#### Defined in

[Core/BaseApplication.ts:13](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L13)

___

### encryptor

• **encryptor**: [`default`](MiniProgram_Encryptor.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:39](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L39)

___

### express

• **express**: [`default`](MiniProgram_Express_ExpressClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:51](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L51)

___

### id

• `Protected` **id**: `String` = `null`

#### Inherited from

[default](Core_BaseApplication.default.md).[id](Core_BaseApplication.default.md#id)

#### Defined in

[Core/BaseApplication.ts:15](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L15)

___

### live

• **live**: [`default`](MiniProgram_Live_LiveClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:62](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L62)

___

### log

• **log**: `Function` = `null`

日志方法

#### Inherited from

[default](Core_BaseApplication.default.md).[log](Core_BaseApplication.default.md#log)

#### Defined in

[Core/BaseApplication.ts:28](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L28)

___

### media

• **media**: [`default`](BaseService_Media_MediaClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:58](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L58)

___

### nearby\_poi

• **nearby\_poi**: [`default`](MiniProgram_NearbyPoi_NearbyPoiClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:52](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L52)

___

### ocr

• **ocr**: [`default`](OfficialAccount_OCR_OCRClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:53](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L53)

___

### open\_data

• **open\_data**: [`default`](MiniProgram_OpenData_OpenDataClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:47](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L47)

___

### plugin

• **plugin**: [`default`](MiniProgram_Plugin_PluginClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:48](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L48)

___

### plugin\_dev

• **plugin\_dev**: [`default`](MiniProgram_Plugin_PluginDevClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:49](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L49)

___

### realtime\_log

• **realtime\_log**: [`default`](MiniProgram_RealtimeLog_RealtimeLogClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:56](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L56)

___

### request

• **request**: [`default`](Core_Http_Request.default.md) = `null`

请求实例

#### Inherited from

[default](Core_BaseApplication.default.md).[request](Core_BaseApplication.default.md#request)

#### Defined in

[Core/BaseApplication.ts:32](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L32)

___

### risk\_control

• **risk\_control**: [`default`](MiniProgram_RiskControl_RiskControlClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:61](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L61)

___

### search

• **search**: [`default`](MiniProgram_Search_SearchClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:57](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L57)

___

### server

• **server**: [`default`](OfficialAccount_Server_Guard.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:40](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L40)

___

### soter

• **soter**: [`default`](MiniProgram_Soter_SoterClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:54](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L54)

___

### subscribe\_message

• **subscribe\_message**: [`default`](MiniProgram_SubscribeMessage_SubscribeMessageClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:55](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L55)

___

### template\_message

• **template\_message**: [`default`](MiniProgram_TemplateMessage_TemplateMessageClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:43](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L43)

___

### uniform\_message

• **uniform\_message**: [`default`](MiniProgram_UniformMessage_UniformMessageClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:45](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L45)

___

### union

• **union**: [`default`](MiniProgram_Union_UnionClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:64](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L64)

___

### url\_scheme

• **url\_scheme**: [`default`](MiniProgram_UrlScheme_UrlSchemeClient.default.md) = `null`

#### Defined in

[MiniProgram/Application.ts:60](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L60)

___

### userConfig

• `Protected` **userConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

#### Inherited from

[default](Core_BaseApplication.default.md).[userConfig](Core_BaseApplication.default.md#userconfig)

#### Defined in

[Core/BaseApplication.ts:14](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/BaseApplication.ts#L14)

## Methods

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

### getPaidUnionid

▸ **getPaidUnionid**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

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

[MiniProgram/Application.ts:73](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Application.ts#L73)
