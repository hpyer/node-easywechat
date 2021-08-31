[node-easywechat](../README.md) / [Exports](../modules.md) / [MicroMerchant/Application](../modules/MicroMerchant_Application.md) / default

# Class: default

[MicroMerchant/Application](../modules/MicroMerchant_Application.md).default

## Hierarchy

- [`default`](Core_BaseApplication.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](MicroMerchant_Application.default.md#constructor)

### Properties

- [access\_token](MicroMerchant_Application.default.md#access_token)
- [base](MicroMerchant_Application.default.md#base)
- [cache](MicroMerchant_Application.default.md#cache)
- [certficates](MicroMerchant_Application.default.md#certficates)
- [config](MicroMerchant_Application.default.md#config)
- [defaultConfig](MicroMerchant_Application.default.md#defaultconfig)
- [id](MicroMerchant_Application.default.md#id)
- [log](MicroMerchant_Application.default.md#log)
- [material](MicroMerchant_Application.default.md#material)
- [media](MicroMerchant_Application.default.md#media)
- [merchantConfig](MicroMerchant_Application.default.md#merchantconfig)
- [request](MicroMerchant_Application.default.md#request)
- [userConfig](MicroMerchant_Application.default.md#userconfig)
- [withdraw](MicroMerchant_Application.default.md#withdraw)

### Methods

- [createDefaultCache](MicroMerchant_Application.default.md#createdefaultcache)
- [extend](MicroMerchant_Application.default.md#extend)
- [getCache](MicroMerchant_Application.default.md#getcache)
- [getConfig](MicroMerchant_Application.default.md#getconfig)
- [getId](MicroMerchant_Application.default.md#getid)
- [getKey](MicroMerchant_Application.default.md#getkey)
- [getStatus](MicroMerchant_Application.default.md#getstatus)
- [getUpgradeStatus](MicroMerchant_Application.default.md#getupgradestatus)
- [offsetSet](MicroMerchant_Application.default.md#offsetset)
- [offsetUnset](MicroMerchant_Application.default.md#offsetunset)
- [rebind](MicroMerchant_Application.default.md#rebind)
- [registerCommonProviders](MicroMerchant_Application.default.md#registercommonproviders)
- [registerProviders](MicroMerchant_Application.default.md#registerproviders)
- [setCertificate](MicroMerchant_Application.default.md#setcertificate)
- [setSubMchId](MicroMerchant_Application.default.md#setsubmchid)
- [submitApplication](MicroMerchant_Application.default.md#submitapplication)
- [upgrade](MicroMerchant_Application.default.md#upgrade)
- [verifySignature](MicroMerchant_Application.default.md#verifysignature)

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

[MicroMerchant/Application.ts:32](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L32)

## Properties

### access\_token

• **access\_token**: [`default`](Core_BaseAccessToken.default.md) = `null`

请求token

#### Inherited from

[default](Core_BaseApplication.default.md).[access_token](Core_BaseApplication.default.md#access_token)

#### Defined in

[Core/BaseApplication.ts:37](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L37)

___

### base

• **base**: [`default`](MicroMerchant_Base_MicroMerchantBase.default.md) = `null`

#### Defined in

[MicroMerchant/Application.ts:25](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L25)

___

### cache

• **cache**: [`default`](Core_Contracts_CacheInterface.default.md) = `null`

缓存实例

#### Inherited from

[default](Core_BaseApplication.default.md).[cache](Core_BaseApplication.default.md#cache)

#### Defined in

[Core/BaseApplication.ts:20](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L20)

___

### certficates

• **certficates**: [`default`](MicroMerchant_Certficates_CertficatesClient.default.md) = `null`

#### Defined in

[MicroMerchant/Application.ts:26](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L26)

___

### config

• **config**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

配置项

#### Inherited from

[default](Core_BaseApplication.default.md).[config](Core_BaseApplication.default.md#config)

#### Defined in

[Core/BaseApplication.ts:24](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L24)

___

### defaultConfig

• `Protected` **defaultConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

#### Overrides

[default](Core_BaseApplication.default.md).[defaultConfig](Core_BaseApplication.default.md#defaultconfig)

#### Defined in

[MicroMerchant/Application.ts:15](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L15)

___

### id

• `Protected` **id**: `String` = `null`

#### Inherited from

[default](Core_BaseApplication.default.md).[id](Core_BaseApplication.default.md#id)

#### Defined in

[Core/BaseApplication.ts:15](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L15)

___

### log

• **log**: `Function` = `null`

日志方法

#### Inherited from

[default](Core_BaseApplication.default.md).[log](Core_BaseApplication.default.md#log)

#### Defined in

[Core/BaseApplication.ts:28](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L28)

___

### material

• **material**: [`default`](MicroMerchant_Meterial_MeterialClient.default.md) = `null`

#### Defined in

[MicroMerchant/Application.ts:29](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L29)

___

### media

• **media**: [`default`](MicroMerchant_Media_MediaClient.default.md) = `null`

#### Defined in

[MicroMerchant/Application.ts:27](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L27)

___

### merchantConfig

• **merchantConfig**: [`default`](MicroMerchant_MerchantConfig_MerchantConfigClient.default.md) = `null`

#### Defined in

[MicroMerchant/Application.ts:28](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L28)

___

### request

• **request**: [`default`](Core_Http_Request.default.md) = `null`

请求实例

#### Inherited from

[default](Core_BaseApplication.default.md).[request](Core_BaseApplication.default.md#request)

#### Defined in

[Core/BaseApplication.ts:32](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L32)

___

### userConfig

• `Protected` **userConfig**: [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md) = `{}`

#### Inherited from

[default](Core_BaseApplication.default.md).[userConfig](Core_BaseApplication.default.md#userconfig)

#### Defined in

[Core/BaseApplication.ts:14](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L14)

___

### withdraw

• **withdraw**: [`default`](MicroMerchant_Withdraw_WithdrawClient.default.md) = `null`

#### Defined in

[MicroMerchant/Application.ts:30](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L30)

## Methods

### createDefaultCache

▸ **createDefaultCache**(): [`default`](Core_Cache_FileCache.default.md)

生成默认的缓存实例（文件缓存）

#### Returns

[`default`](Core_Cache_FileCache.default.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[createDefaultCache](Core_BaseApplication.default.md#createdefaultcache)

#### Defined in

[Core/BaseApplication.ts:161](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L161)

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

[Core/BaseApplication.ts:106](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L106)

___

### getCache

▸ **getCache**(): [`default`](Core_Contracts_CacheInterface.default.md)

获取cache实例

#### Returns

[`default`](Core_Contracts_CacheInterface.default.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[getCache](Core_BaseApplication.default.md#getcache)

#### Defined in

[Core/BaseApplication.ts:149](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L149)

___

### getConfig

▸ **getConfig**(): [`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

获取合并后的配置

#### Returns

[`EasyWechatConfig`](../interfaces/Core_Types.EasyWechatConfig.md)

#### Inherited from

[default](Core_BaseApplication.default.md).[getConfig](Core_BaseApplication.default.md#getconfig)

#### Defined in

[Core/BaseApplication.ts:64](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L64)

___

### getId

▸ **getId**(): `String`

#### Returns

`String`

#### Inherited from

[default](Core_BaseApplication.default.md).[getId](Core_BaseApplication.default.md#getid)

#### Defined in

[Core/BaseApplication.ts:53](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L53)

___

### getKey

▸ **getKey**(): `string`

#### Returns

`string`

#### Defined in

[MicroMerchant/Application.ts:64](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L64)

___

### getStatus

▸ **getStatus**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[MicroMerchant/Application.ts:122](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L122)

___

### getUpgradeStatus

▸ **getUpgradeStatus**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[MicroMerchant/Application.ts:130](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L130)

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

[Core/BaseApplication.ts:138](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L138)

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

[Core/BaseApplication.ts:128](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L128)

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

[Core/BaseApplication.ts:117](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L117)

___

### registerCommonProviders

▸ **registerCommonProviders**(): `void`

注册通用模块

#### Returns

`void`

#### Inherited from

[default](Core_BaseApplication.default.md).[registerCommonProviders](Core_BaseApplication.default.md#registercommonproviders)

#### Defined in

[Core/BaseApplication.ts:80](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/BaseApplication.ts#L80)

___

### registerProviders

▸ **registerProviders**(): `void`

#### Returns

`void`

#### Defined in

[MicroMerchant/Application.ts:39](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L39)

___

### setCertificate

▸ **setCertificate**(`certificate`, `serialNo?`): [`default`](MicroMerchant_Application.default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `certificate` | `string` | `undefined` |
| `serialNo` | `string` | `''` |

#### Returns

[`default`](MicroMerchant_Application.default.md)

#### Defined in

[MicroMerchant/Application.ts:90](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L90)

___

### setSubMchId

▸ **setSubMchId**(`subMchId`, `appId?`): [`default`](MicroMerchant_Application.default.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `subMchId` | `string` | `undefined` |
| `appId` | `string` | `''` |

#### Returns

[`default`](MicroMerchant_Application.default.md)

#### Defined in

[MicroMerchant/Application.ts:79](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L79)

___

### submitApplication

▸ **submitApplication**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[MicroMerchant/Application.ts:118](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L118)

___

### upgrade

▸ **upgrade**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[MicroMerchant/Application.ts:126](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L126)

___

### verifySignature

▸ **verifySignature**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`boolean`

#### Defined in

[MicroMerchant/Application.ts:98](https://github.com/hpyer/node-easywechat/blob/b017670/src/MicroMerchant/Application.ts#L98)
