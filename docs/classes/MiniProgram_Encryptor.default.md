[node-easywechat](../README.md) / [Exports](../modules.md) / [MiniProgram/Encryptor](../modules/MiniProgram_Encryptor.md) / default

# Class: default

[MiniProgram/Encryptor](../modules/MiniProgram_Encryptor.md).default

## Hierarchy

- [`default`](Core_Encryptor.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](MiniProgram_Encryptor.default.md#constructor)

### Properties

- [aesKey](MiniProgram_Encryptor.default.md#aeskey)
- [appId](MiniProgram_Encryptor.default.md#appid)
- [blockSize](MiniProgram_Encryptor.default.md#blocksize)
- [token](MiniProgram_Encryptor.default.md#token)

### Methods

- [decrypt](MiniProgram_Encryptor.default.md#decrypt)
- [decryptData](MiniProgram_Encryptor.default.md#decryptdata)
- [encrypt](MiniProgram_Encryptor.default.md#encrypt)
- [getToken](MiniProgram_Encryptor.default.md#gettoken)
- [signature](MiniProgram_Encryptor.default.md#signature)

## Constructors

### constructor

• **new default**(`appId`, `token`, `aesKey`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `appId` | `string` |
| `token` | `string` |
| `aesKey` | `string` |

#### Inherited from

[default](Core_Encryptor.default.md).[constructor](Core_Encryptor.default.md#constructor)

#### Defined in

[Core/Encryptor.ts:15](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Encryptor.ts#L15)

## Properties

### aesKey

• `Protected` **aesKey**: `Buffer` = `null`

#### Inherited from

[default](Core_Encryptor.default.md).[aesKey](Core_Encryptor.default.md#aeskey)

#### Defined in

[Core/Encryptor.ts:12](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Encryptor.ts#L12)

___

### appId

• `Protected` **appId**: `string` = `null`

#### Inherited from

[default](Core_Encryptor.default.md).[appId](Core_Encryptor.default.md#appid)

#### Defined in

[Core/Encryptor.ts:10](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Encryptor.ts#L10)

___

### blockSize

• `Protected` **blockSize**: `number` = `32`

#### Inherited from

[default](Core_Encryptor.default.md).[blockSize](Core_Encryptor.default.md#blocksize)

#### Defined in

[Core/Encryptor.ts:13](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Encryptor.ts#L13)

___

### token

• `Protected` **token**: `string` = `null`

#### Inherited from

[default](Core_Encryptor.default.md).[token](Core_Encryptor.default.md#token)

#### Defined in

[Core/Encryptor.ts:11](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Encryptor.ts#L11)

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

#### Inherited from

[default](Core_Encryptor.default.md).[decrypt](Core_Encryptor.default.md#decrypt)

#### Defined in

[Core/Encryptor.ts:65](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Encryptor.ts#L65)

___

### decryptData

▸ **decryptData**(`sessionKey`, `iv`, `encryptData`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionKey` | `string` |
| `iv` | `string` |
| `encryptData` | `string` |

#### Returns

`object`

#### Defined in

[MiniProgram/Encryptor.ts:9](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/MiniProgram/Encryptor.ts#L9)

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

#### Inherited from

[default](Core_Encryptor.default.md).[encrypt](Core_Encryptor.default.md#encrypt)

#### Defined in

[Core/Encryptor.ts:33](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Encryptor.ts#L33)

___

### getToken

▸ **getToken**(): `string`

#### Returns

`string`

#### Inherited from

[default](Core_Encryptor.default.md).[getToken](Core_Encryptor.default.md#gettoken)

#### Defined in

[Core/Encryptor.ts:22](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Encryptor.ts#L22)

___

### signature

▸ **signature**(...`args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`string`

#### Inherited from

[default](Core_Encryptor.default.md).[signature](Core_Encryptor.default.md#signature)

#### Defined in

[Core/Encryptor.ts:27](https://github.com/hpyer/node-easywechat/blob/a144a0f/src/Core/Encryptor.ts#L27)
