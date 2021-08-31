[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/Cache/FileCache](../modules/Core_Cache_FileCache.md) / default

# Class: default

[Core/Cache/FileCache](../modules/Core_Cache_FileCache.md).default

## Implements

- [`default`](Core_Contracts_CacheInterface.default.md)

## Table of contents

### Constructors

- [constructor](Core_Cache_FileCache.default.md#constructor)

### Properties

- [options](Core_Cache_FileCache.default.md#options)

### Methods

- [delete](Core_Cache_FileCache.default.md#delete)
- [get](Core_Cache_FileCache.default.md#get)
- [getCacheContent](Core_Cache_FileCache.default.md#getcachecontent)
- [getCacheFile](Core_Cache_FileCache.default.md#getcachefile)
- [has](Core_Cache_FileCache.default.md#has)
- [set](Core_Cache_FileCache.default.md#set)

## Constructors

### constructor

• **new default**(`options?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `options` | [`EasyWechatConfigCacheFile`](../interfaces/Core_Types.EasyWechatConfigCacheFile.md) | `null` |

#### Defined in

[Core/Cache/FileCache.ts:18](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Cache/FileCache.ts#L18)

## Properties

### options

• `Private` **options**: [`EasyWechatConfigCacheFile`](../interfaces/Core_Types.EasyWechatConfigCacheFile.md)

#### Defined in

[Core/Cache/FileCache.ts:11](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Cache/FileCache.ts#L11)

## Methods

### delete

▸ **delete**(`id`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

CacheInterface.delete

#### Defined in

[Core/Cache/FileCache.ts:107](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Cache/FileCache.ts#L107)

___

### get

▸ **get**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`any`\>

#### Implementation of

CacheInterface.get

#### Defined in

[Core/Cache/FileCache.ts:60](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Cache/FileCache.ts#L60)

___

### getCacheContent

▸ **getCacheContent**(`file`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`string`

#### Defined in

[Core/Cache/FileCache.ts:48](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Cache/FileCache.ts#L48)

___

### getCacheFile

▸ **getCacheFile**(`id`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`string`

#### Defined in

[Core/Cache/FileCache.ts:43](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Cache/FileCache.ts#L43)

___

### has

▸ **has**(`id`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

CacheInterface.has

#### Defined in

[Core/Cache/FileCache.ts:73](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Cache/FileCache.ts#L73)

___

### set

▸ **set**(`id`, `data?`, `lifeTime?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `data` | `any` | `null` |
| `lifeTime` | `number` | `0` |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

CacheInterface.set

#### Defined in

[Core/Cache/FileCache.ts:87](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Cache/FileCache.ts#L87)
