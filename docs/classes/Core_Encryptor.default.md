[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/Encryptor](../modules/Core_Encryptor.md) / default

# Class: default

[Core/Encryptor](../modules/Core_Encryptor.md).default

## Hierarchy

- **`default`**

  ↳ [`default`](MiniProgram_Encryptor.default.md)

## Table of contents

### Constructors

- [constructor](Core_Encryptor.default.md#constructor)

### Properties

- [aesKey](Core_Encryptor.default.md#aeskey)
- [appId](Core_Encryptor.default.md#appid)
- [blockSize](Core_Encryptor.default.md#blocksize)
- [token](Core_Encryptor.default.md#token)

### Methods

- [decrypt](Core_Encryptor.default.md#decrypt)
- [encrypt](Core_Encryptor.default.md#encrypt)
- [getToken](Core_Encryptor.default.md#gettoken)
- [signature](Core_Encryptor.default.md#signature)

## Constructors

### constructor

• **new default**(`appId`, `token`, `aesKey`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `appId` | `string` |
| `token` | `string` |
| `aesKey` | `string` |

#### Defined in

[Core/Encryptor.ts:15](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Encryptor.ts#L15)

## Properties

### aesKey

• `Protected` **aesKey**: `Buffer` = `null`

#### Defined in

[Core/Encryptor.ts:12](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Encryptor.ts#L12)

___

### appId

• `Protected` **appId**: `string` = `null`

#### Defined in

[Core/Encryptor.ts:10](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Encryptor.ts#L10)

___

### blockSize

• `Protected` **blockSize**: `number` = `32`

#### Defined in

[Core/Encryptor.ts:13](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Encryptor.ts#L13)

___

### token

• `Protected` **token**: `string` = `null`

#### Defined in

[Core/Encryptor.ts:11](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Encryptor.ts#L11)

## Methods

### decrypt

▸ **decrypt**(`text`, `msgSignature`, `nonce`, `timestamp`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `msgSignature` | `string` |
| `nonce` | `string` |
| `timestamp` | `number` |

#### Returns

`string`

#### Defined in

[Core/Encryptor.ts:65](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Encryptor.ts#L65)

___

### encrypt

▸ **encrypt**(`text`, `nonce?`, `timestamp?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `nonce` | `string` | `null` |
| `timestamp` | `number` | `null` |

#### Returns

`string`

#### Defined in

[Core/Encryptor.ts:33](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Encryptor.ts#L33)

___

### getToken

▸ **getToken**(): `string`

#### Returns

`string`

#### Defined in

[Core/Encryptor.ts:22](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Encryptor.ts#L22)

___

### signature

▸ **signature**(...`args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`string`

#### Defined in

[Core/Encryptor.ts:27](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Encryptor.ts#L27)
