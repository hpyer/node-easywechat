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
- [pkcs7Pad](Core_Encryptor.default.md#pkcs7pad)
- [pkcs7Unpad](Core_Encryptor.default.md#pkcs7unpad)
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

[Core/Encryptor.ts:13](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Encryptor.ts#L13)

## Properties

### aesKey

• `Protected` **aesKey**: `Buffer` = `null`

#### Defined in

[Core/Encryptor.ts:10](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Encryptor.ts#L10)

___

### appId

• `Protected` **appId**: `string` = `null`

#### Defined in

[Core/Encryptor.ts:8](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Encryptor.ts#L8)

___

### blockSize

• `Protected` **blockSize**: `number` = `32`

#### Defined in

[Core/Encryptor.ts:11](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Encryptor.ts#L11)

___

### token

• `Protected` **token**: `string` = `null`

#### Defined in

[Core/Encryptor.ts:9](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Encryptor.ts#L9)

## Methods

### decrypt

▸ **decrypt**(`text`, `msgSignature`, `nonce`, `timestamp`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `any` |
| `msgSignature` | `any` |
| `nonce` | `any` |
| `timestamp` | `any` |

#### Returns

`string`

#### Defined in

[Core/Encryptor.ts:66](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Encryptor.ts#L66)

___

### encrypt

▸ **encrypt**(`text`, `nonce?`, `timestamp?`): `object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `any` | `undefined` |
| `nonce` | `any` | `null` |
| `timestamp` | `any` | `null` |

#### Returns

`object`

#### Defined in

[Core/Encryptor.ts:33](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Encryptor.ts#L33)

___

### getToken

▸ **getToken**(): `string`

#### Returns

`string`

#### Defined in

[Core/Encryptor.ts:20](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Encryptor.ts#L20)

___

### pkcs7Pad

▸ **pkcs7Pad**(`text`, `blockSize`): `Buffer`

对需要加密的明文进行填充补位

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `Buffer` | 需要进行填充补位操作的明文 |
| `blockSize` | `number` | - |

#### Returns

`Buffer`

#### Defined in

[Core/Encryptor.ts:109](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Encryptor.ts#L109)

___

### pkcs7Unpad

▸ **pkcs7Unpad**(`text`): `Buffer`

删除解密后明文的补位字符

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `Buffer` | 解密后的明文 |

#### Returns

`Buffer`

#### Defined in

[Core/Encryptor.ts:93](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Encryptor.ts#L93)

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

[Core/Encryptor.ts:25](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Encryptor.ts#L25)
