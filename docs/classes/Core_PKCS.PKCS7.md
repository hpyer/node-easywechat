[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/PKCS](../modules/Core_PKCS.md) / PKCS7

# Class: PKCS7

[Core/PKCS](../modules/Core_PKCS.md).PKCS7

## Table of contents

### Constructors

- [constructor](Core_PKCS.PKCS7.md#constructor)

### Methods

- [pad](Core_PKCS.PKCS7.md#pad)
- [unpad](Core_PKCS.PKCS7.md#unpad)

## Constructors

### constructor

• **new PKCS7**()

## Methods

### pad

▸ `Static` **pad**(`text`, `blockSize?`): `Buffer`

对需要加密的明文进行填充补位

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` \| `Buffer` | `undefined` | 需要进行填充补位操作的明文 |
| `blockSize` | `number` | `32` | 补位大小，默认：32 |

#### Returns

`Buffer`

#### Defined in

[Core/PKCS.ts:10](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/PKCS.ts#L10)

___

### unpad

▸ `Static` **unpad**(`text`, `blockSize?`): `Buffer`

删除解密后明文的补位字符

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` \| `Buffer` | `undefined` | 解密后的明文 |
| `blockSize` | `number` | `32` | 补位大小，默认：32 |

#### Returns

`Buffer`

#### Defined in

[Core/PKCS.ts:32](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/PKCS.ts#L32)
