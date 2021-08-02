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
- [pkcs7Pad](MiniProgram_Encryptor.default.md#pkcs7pad)
- [pkcs7Unpad](MiniProgram_Encryptor.default.md#pkcs7unpad)
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

[Core/Encryptor.ts:13](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Encryptor.ts#L13)

## Properties

### aesKey

• `Protected` **aesKey**: `Buffer` = `null`

#### Inherited from

[default](Core_Encryptor.default.md).[aesKey](Core_Encryptor.default.md#aeskey)

#### Defined in

[Core/Encryptor.ts:10](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Encryptor.ts#L10)

___

### appId

• `Protected` **appId**: `string` = `null`

#### Inherited from

[default](Core_Encryptor.default.md).[appId](Core_Encryptor.default.md#appid)

#### Defined in

[Core/Encryptor.ts:8](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Encryptor.ts#L8)

___

### blockSize

• `Protected` **blockSize**: `number` = `32`

#### Inherited from

[default](Core_Encryptor.default.md).[blockSize](Core_Encryptor.default.md#blocksize)

#### Defined in

[Core/Encryptor.ts:11](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Encryptor.ts#L11)

___

### token

• `Protected` **token**: `string` = `null`

#### Inherited from

[default](Core_Encryptor.default.md).[token](Core_Encryptor.default.md#token)

#### Defined in

[Core/Encryptor.ts:9](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Encryptor.ts#L9)

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

#### Inherited from

[default](Core_Encryptor.default.md).[decrypt](Core_Encryptor.default.md#decrypt)

#### Defined in

[Core/Encryptor.ts:66](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Encryptor.ts#L66)

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

[MiniProgram/Encryptor.ts:9](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/MiniProgram/Encryptor.ts#L9)

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

#### Inherited from

[default](Core_Encryptor.default.md).[encrypt](Core_Encryptor.default.md#encrypt)

#### Defined in

[Core/Encryptor.ts:33](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Encryptor.ts#L33)

___

### getToken

▸ **getToken**(): `string`

#### Returns

`string`

#### Inherited from

[default](Core_Encryptor.default.md).[getToken](Core_Encryptor.default.md#gettoken)

#### Defined in

[Core/Encryptor.ts:20](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Encryptor.ts#L20)

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

#### Inherited from

[default](Core_Encryptor.default.md).[pkcs7Pad](Core_Encryptor.default.md#pkcs7pad)

#### Defined in

[Core/Encryptor.ts:109](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Encryptor.ts#L109)

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

#### Inherited from

[default](Core_Encryptor.default.md).[pkcs7Unpad](Core_Encryptor.default.md#pkcs7unpad)

#### Defined in

[Core/Encryptor.ts:93](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Encryptor.ts#L93)

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

[Core/Encryptor.ts:25](https://github.com/hpyer/node-easywechat/blob/d6465cc/src/Core/Encryptor.ts#L25)
