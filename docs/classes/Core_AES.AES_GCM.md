[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/AES](../modules/Core_AES.md) / AES_GCM

# Class: AES\_GCM

[Core/AES](../modules/Core_AES.md).AES_GCM

## Table of contents

### Constructors

- [constructor](Core_AES.AES_GCM.md#constructor)

### Methods

- [decrypt](Core_AES.AES_GCM.md#decrypt)
- [encrypt](Core_AES.AES_GCM.md#encrypt)

## Constructors

### constructor

• **new AES_GCM**()

## Methods

### decrypt

▸ `Static` **decrypt**(`ciphertext`, `key`, `iv?`, `aad?`, `method?`): `Buffer`

GCM模式解密

**`static`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ciphertext` | `ArrayBufferView` | `undefined` | 待解密文本，Base64 编码字符串 |
| `key` | `BinaryLike` | `undefined` | 密钥 |
| `iv` | `BinaryLike` | `''` | 向量 |
| `aad` | `string` | `''` | aad |
| `method` | `CipherGCMTypes` | `'aes-256-gcm'` | 加密方式，默认：aes-256-gcm |

#### Returns

`Buffer`

#### Defined in

[Core/AES.ts:84](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/AES.ts#L84)

___

### encrypt

▸ `Static` **encrypt**(`plaintext`, `key`, `iv?`, `aad?`, `method?`): `Buffer`

GCM模式加密

**`static`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `plaintext` | `BinaryLike` | `undefined` | 待加密文本 |
| `key` | `CipherKey` | `undefined` | 密钥 |
| `iv` | `BinaryLike` | `''` | 向量 |
| `aad` | `string` | `''` | aad |
| `method` | `CipherGCMTypes` | `'aes-256-gcm'` | 加密方式，默认：aes-256-gcm |

#### Returns

`Buffer`

#### Defined in

[Core/AES.ts:65](https://github.com/hpyer/node-easywechat/blob/e4961d7/src/Core/AES.ts#L65)
