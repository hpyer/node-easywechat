[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/BaseApplication](../modules/Core_BaseApplication.md) / default

# Class: default

[Core/BaseApplication](../modules/Core_BaseApplication.md).default

## Hierarchy

- **`default`**

  ↳ [`default`](BaseService_Application.default.md)

  ↳ [`default`](MicroMerchant_Application.default.md)

  ↳ [`default`](MiniProgram_Application.default.md)

  ↳ [`default`](OfficialAccount_Application.default.md)

  ↳ [`default`](OpenPlatform_Application.default.md)

  ↳ [`default`](Payment_Application.default.md)

  ↳ [`default`](Work_Application.default.md)

## Table of contents

### Constructors

- [constructor](Core_BaseApplication.default.md#constructor)

### Properties

- [access\_token](Core_BaseApplication.default.md#access_token)
- [cache](Core_BaseApplication.default.md#cache)
- [config](Core_BaseApplication.default.md#config)
- [defaultConfig](Core_BaseApplication.default.md#defaultconfig)
- [id](Core_BaseApplication.default.md#id)
- [log](Core_BaseApplication.default.md#log)
- [request](Core_BaseApplication.default.md#request)
- [userConfig](Core_BaseApplication.default.md#userconfig)

### Methods

- [createDefaultCache](Core_BaseApplication.default.md#createdefaultcache)
- [extend](Core_BaseApplication.default.md#extend)
- [getCache](Core_BaseApplication.default.md#getcache)
- [getConfig](Core_BaseApplication.default.md#getconfig)
- [getId](Core_BaseApplication.default.md#getid)
- [offsetSet](Core_BaseApplication.default.md#offsetset)
- [offsetUnset](Core_BaseApplication.default.md#offsetunset)
- [rebind](Core_BaseApplication.default.md#rebind)
- [registerCommonProviders](Core_BaseApplication.default.md#registercommonproviders)

## Constructors

### constructor

• **new default**(`config`, `prepends?`, `id?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config` | [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) | `undefined` |
| `prepends` | `Object` | `{}` |
| `id` | `String` | `null` |

#### Defined in

[Core/BaseApplication.ts:39](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L39)

## Properties

### access\_token

• **access\_token**: [`default`](Core_BaseAccessToken.default.md) = `null`

请求token

#### Defined in

[Core/BaseApplication.ts:37](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L37)

___

### cache

• **cache**: [`default`](Core_Contracts_CacheInterface.default.md) = `null`

缓存实例

#### Defined in

[Core/BaseApplication.ts:20](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L20)

___

### config

• **config**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

配置项

#### Defined in

[Core/BaseApplication.ts:24](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L24)

___

### defaultConfig

• `Protected` **defaultConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

#### Defined in

[Core/BaseApplication.ts:13](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L13)

___

### id

• `Protected` **id**: `String` = `null`

#### Defined in

[Core/BaseApplication.ts:15](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L15)

___

### log

• **log**: `Function` = `null`

日志方法

#### Defined in

[Core/BaseApplication.ts:28](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L28)

___

### request

• **request**: [`default`](Core_Http_Request.default.md) = `null`

请求实例

#### Defined in

[Core/BaseApplication.ts:32](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L32)

___

### userConfig

• `Protected` **userConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

#### Defined in

[Core/BaseApplication.ts:14](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L14)

## Methods

### createDefaultCache

▸ **createDefaultCache**(): [`default`](Core_Cache_FileCache.default.md)

生成默认的缓存实例（文件缓存）

#### Returns

[`default`](Core_Cache_FileCache.default.md)

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

#### Defined in

[Core/BaseApplication.ts:106](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L106)

___

### getCache

▸ **getCache**(): [`default`](Core_Contracts_CacheInterface.default.md)

获取cache实例

#### Returns

[`default`](Core_Contracts_CacheInterface.default.md)

#### Defined in

[Core/BaseApplication.ts:149](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L149)

___

### getConfig

▸ **getConfig**(): [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

获取合并后的配置

#### Returns

[`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

#### Defined in

[Core/BaseApplication.ts:64](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L64)

___

### getId

▸ **getId**(): `String`

#### Returns

`String`

#### Defined in

[Core/BaseApplication.ts:53](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L53)

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

#### Defined in

[Core/BaseApplication.ts:128](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L128)

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

#### Defined in

[Core/BaseApplication.ts:117](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L117)

___

### registerCommonProviders

▸ **registerCommonProviders**(): `void`

注册通用模块

#### Returns

`void`

#### Defined in

[Core/BaseApplication.ts:80](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/BaseApplication.ts#L80)
