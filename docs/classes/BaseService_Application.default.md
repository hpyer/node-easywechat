[node-easywechat](../README.md) / [Exports](../modules.md) / [BaseService/Application](../modules/BaseService_Application.md) / default

# Class: default

[BaseService/Application](../modules/BaseService_Application.md).default

## Hierarchy

- [`default`](Core_BaseApplication.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](BaseService_Application.default.md#constructor)

### Properties

- [access\_token](BaseService_Application.default.md#access_token)
- [cache](BaseService_Application.default.md#cache)
- [config](BaseService_Application.default.md#config)
- [content\_security](BaseService_Application.default.md#content_security)
- [defaultConfig](BaseService_Application.default.md#defaultconfig)
- [id](BaseService_Application.default.md#id)
- [jssdk](BaseService_Application.default.md#jssdk)
- [log](BaseService_Application.default.md#log)
- [media](BaseService_Application.default.md#media)
- [qrcode](BaseService_Application.default.md#qrcode)
- [request](BaseService_Application.default.md#request)
- [url](BaseService_Application.default.md#url)
- [userConfig](BaseService_Application.default.md#userconfig)

### Methods

- [createDefaultCache](BaseService_Application.default.md#createdefaultcache)
- [extend](BaseService_Application.default.md#extend)
- [getCache](BaseService_Application.default.md#getcache)
- [getConfig](BaseService_Application.default.md#getconfig)
- [getId](BaseService_Application.default.md#getid)
- [offsetSet](BaseService_Application.default.md#offsetset)
- [offsetUnset](BaseService_Application.default.md#offsetunset)
- [rebind](BaseService_Application.default.md#rebind)
- [registerCommonProviders](BaseService_Application.default.md#registercommonproviders)
- [registerProviders](BaseService_Application.default.md#registerproviders)

## Constructors

### constructor

• **new default**(`config?`, `prepends?`, `id?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config` | [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) | `null` |
| `prepends` | `Object` | `{}` |
| `id` | `String` | `null` |

#### Overrides

[default](Core_BaseApplication.default.md).[constructor](Core_BaseApplication.default.md#constructor)

#### Defined in

[BaseService/Application.ts:24](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Application.ts#L24)

## Properties

### access\_token

• **access\_token**: [`default`](Core_BaseAccessToken.default.md) = `null`

请求token

#### Inherited from

[default](Core_BaseApplication.default.md).[access_token](Core_BaseApplication.default.md#access_token)

#### Defined in

[Core/BaseApplication.ts:37](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L37)

___

### cache

• **cache**: [`default`](Core_Contracts_CacheInterface.default.md) = `null`

缓存实例

#### Inherited from

[default](Core_BaseApplication.default.md).[cache](Core_BaseApplication.default.md#cache)

#### Defined in

[Core/BaseApplication.ts:20](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L20)

___

### config

• **config**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

配置项

#### Inherited from

[default](Core_BaseApplication.default.md).[config](Core_BaseApplication.default.md#config)

#### Defined in

[Core/BaseApplication.ts:24](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L24)

___

### content\_security

• **content\_security**: [`default`](BaseService_ContentSecurity_ContentSecurityClient.default.md) = `null`

#### Defined in

[BaseService/Application.ts:22](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Application.ts#L22)

___

### defaultConfig

• `Protected` **defaultConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

#### Overrides

[default](Core_BaseApplication.default.md).[defaultConfig](Core_BaseApplication.default.md#defaultconfig)

#### Defined in

[BaseService/Application.ts:13](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Application.ts#L13)

___

### id

• `Protected` **id**: `String` = `null`

#### Inherited from

[default](Core_BaseApplication.default.md).[id](Core_BaseApplication.default.md#id)

#### Defined in

[Core/BaseApplication.ts:15](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L15)

___

### jssdk

• **jssdk**: [`default`](BaseService_Jssdk_JssdkClient.default.md) = `null`

#### Defined in

[BaseService/Application.ts:18](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Application.ts#L18)

___

### log

• **log**: `Function` = `null`

日志方法

#### Inherited from

[default](Core_BaseApplication.default.md).[log](Core_BaseApplication.default.md#log)

#### Defined in

[Core/BaseApplication.ts:28](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L28)

___

### media

• **media**: [`default`](BaseService_Media_MediaClient.default.md) = `null`

#### Defined in

[BaseService/Application.ts:19](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Application.ts#L19)

___

### qrcode

• **qrcode**: [`default`](BaseService_Qrcode_QrcodeClient.default.md) = `null`

#### Defined in

[BaseService/Application.ts:20](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Application.ts#L20)

___

### request

• **request**: [`default`](Core_Http_Request.default.md) = `null`

请求实例

#### Inherited from

[default](Core_BaseApplication.default.md).[request](Core_BaseApplication.default.md#request)

#### Defined in

[Core/BaseApplication.ts:32](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L32)

___

### url

• **url**: [`default`](BaseService_Url_UrlClient.default.md) = `null`

#### Defined in

[BaseService/Application.ts:21](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Application.ts#L21)

___

### userConfig

• `Protected` **userConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

#### Inherited from

[default](Core_BaseApplication.default.md).[userConfig](Core_BaseApplication.default.md#userconfig)

#### Defined in

[Core/BaseApplication.ts:14](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L14)

## Methods

### createDefaultCache

▸ **createDefaultCache**(): [`default`](Core_Cache_FileCache.default.md)

生成默认的缓存实例（文件缓存）

#### Returns

[`default`](Core_Cache_FileCache.default.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[createDefaultCache](Core_BaseApplication.default.md#createdefaultcache)

#### Defined in

[Core/BaseApplication.ts:161](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L161)

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

[Core/BaseApplication.ts:106](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L106)

___

### getCache

▸ **getCache**(): [`default`](Core_Contracts_CacheInterface.default.md)

获取cache实例

#### Returns

[`default`](Core_Contracts_CacheInterface.default.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[getCache](Core_BaseApplication.default.md#getcache)

#### Defined in

[Core/BaseApplication.ts:149](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L149)

___

### getConfig

▸ **getConfig**(): [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

获取合并后的配置

#### Returns

[`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[getConfig](Core_BaseApplication.default.md#getconfig)

#### Defined in

[Core/BaseApplication.ts:64](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L64)

___

### getId

▸ **getId**(): `String`

#### Returns

`String`

#### Inherited from

[default](Core_BaseApplication.default.md).[getId](Core_BaseApplication.default.md#getid)

#### Defined in

[Core/BaseApplication.ts:53](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L53)

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

[Core/BaseApplication.ts:138](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L138)

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

[Core/BaseApplication.ts:128](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L128)

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

[Core/BaseApplication.ts:117](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L117)

___

### registerCommonProviders

▸ **registerCommonProviders**(): `void`

注册通用模块

#### Returns

`void`

#### Inherited from

[default](Core_BaseApplication.default.md).[registerCommonProviders](Core_BaseApplication.default.md#registercommonproviders)

#### Defined in

[Core/BaseApplication.ts:80](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/BaseApplication.ts#L80)

___

### registerProviders

▸ **registerProviders**(): `void`

#### Returns

`void`

#### Defined in

[BaseService/Application.ts:31](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/BaseService/Application.ts#L31)
