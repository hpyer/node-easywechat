[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/AES](../modules/Core_AES.md) / AES

# Class: AES

[Core/AES](../modules/Core_AES.md).AES

## Table of contents

### Constructors

- [constructor](Core_AES.AES.md#constructor)

### Methods

- [decrypt](Core_AES.AES.md#decrypt)
- [encrypt](Core_AES.AES.md#encrypt)

## Constructors

### constructor

• **new AES**()

## Methods

### decrypt

▸ `Static` **decrypt**(`ciphertext`, `key`, `iv?`, `autoPadding?`, `method?`): `Buffer`

解密

**`static`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ciphertext` | `ArrayBufferView` | `undefined` | 待解密文本，Base64 编码字符串 |
| `key` | `BinaryLike` | `undefined` | 密钥 |
| `iv` | `BinaryLike` | `''` | 向量 |
| `autoPadding` | `boolean` | `null` | 自动补位，默认：null，表示不设置 |
| `method` | `string` | `'aes-256-cbc'` | 加密方式，默认：aes-256-cbc |

#### Returns

`Buffer`

#### Defined in

[Core/AES.ts:36](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/AES.ts#L36)

___

### encrypt

▸ `Static` **encrypt**(`plaintext`, `key`, `iv?`, `autoPadding?`, `method?`): `Buffer`

加密

**`static`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `plaintext` | `BinaryLike` | `undefined` | 待加密文本 |
| `key` | `CipherKey` | `undefined` | 密钥 |
| `iv` | `BinaryLike` | `''` | 向量 |
| `autoPadding` | `boolean` | `null` | 自动补位，默认：null，表示不设置 |
| `method` | `string` | `'aes-256-cbc'` | 加密方式，默认：'aes-256-cbc' |

#### Returns

`Buffer`

#### Defined in

[Core/AES.ts:15](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/AES.ts#L15)
