[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/Contracts/CacheInterface](../modules/Core_Contracts_CacheInterface.md) / default

# Class: default

[Core/Contracts/CacheInterface](../modules/Core_Contracts_CacheInterface.md).default

## Implemented by

- [`default`](Core_Cache_FileCache.default.md)

## Table of contents

### Constructors

- [constructor](Core_Contracts_CacheInterface.default.md#constructor)

### Methods

- [delete](Core_Contracts_CacheInterface.default.md#delete)
- [get](Core_Contracts_CacheInterface.default.md#get)
- [has](Core_Contracts_CacheInterface.default.md#has)
- [set](Core_Contracts_CacheInterface.default.md#set)

## Constructors

### constructor

• **new default**()

## Methods

### delete

▸ **delete**(`id`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[Core/Contracts/CacheInterface.ts:20](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Contracts/CacheInterface.ts#L20)

___

### get

▸ **get**(`id`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[Core/Contracts/CacheInterface.ts:5](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Contracts/CacheInterface.ts#L5)

___

### has

▸ **has**(`id`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[Core/Contracts/CacheInterface.ts:10](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Contracts/CacheInterface.ts#L10)

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

#### Defined in

[Core/Contracts/CacheInterface.ts:15](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Contracts/CacheInterface.ts#L15)
