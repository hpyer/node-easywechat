[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/RSA](../modules/Core_RSA.md) / default

# Class: default

[Core/RSA](../modules/Core_RSA.md).default

## Table of contents

### Constructors

- [constructor](Core_RSA.default.md#constructor)

### Properties

- [privateKey](Core_RSA.default.md#privatekey)
- [publicKey](Core_RSA.default.md#publickey)

### Methods

- [decrypt](Core_RSA.default.md#decrypt)
- [encrypt](Core_RSA.default.md#encrypt)
- [setPrivateKey](Core_RSA.default.md#setprivatekey)
- [setPublicKey](Core_RSA.default.md#setpublickey)
- [sign](Core_RSA.default.md#sign)
- [verify](Core_RSA.default.md#verify)
- [keyPair](Core_RSA.default.md#keypair)

## Constructors

### constructor

• **new default**()

## Properties

### privateKey

• `Protected` **privateKey**: `KeyObject` = `null`

#### Defined in

[Core/RSA.ts:17](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/RSA.ts#L17)

___

### publicKey

• `Protected` **publicKey**: `KeyObject` = `null`

#### Defined in

[Core/RSA.ts:7](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/RSA.ts#L7)

## Methods

### decrypt

▸ **decrypt**(`ciphertext`, `encoding?`, `hashType?`, `padding?`): `string`

解密

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ciphertext` | `string` | `undefined` | 待解密文本 |
| `encoding` | `BufferEncoding` | `'base64'` | 编码，默认：'base64' |
| `hashType` | `string` | `'sha1'` | 哈希方式，默认：'sha1' |
| `padding` | `number` | `undefined` | 补位方式，默认：crypto.constants.RSA_PKCS1_OAEP_PADDING |

#### Returns

`string`

#### Defined in

[Core/RSA.ts:65](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/RSA.ts#L65)

___

### encrypt

▸ **encrypt**(`plaintext`, `encoding?`, `hashType?`, `padding?`): `string`

加密

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `plaintext` | `string` | `undefined` | 待加密文本 |
| `encoding` | `BufferEncoding` | `'base64'` | 编码，默认：'base64' |
| `hashType` | `string` | `'sha1'` | 哈希方式，默认：'sha1' |
| `padding` | `number` | `undefined` | 补位方式，默认：crypto.constants.RSA_PKCS1_OAEP_PADDING |

#### Returns

`string`

#### Defined in

[Core/RSA.ts:44](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/RSA.ts#L44)

___

### setPrivateKey

▸ **setPrivateKey**(`key`): `void`

设置私钥

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `Buffer` \| `PrivateKeyInput` | 私钥内容 |

#### Returns

`void`

#### Defined in

[Core/RSA.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/RSA.ts#L23)

___

### setPublicKey

▸ **setPublicKey**(`key`): `void`

设置公钥

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `KeyObject` \| `Buffer` \| `PublicKeyInput` | 公钥内容 |

#### Returns

`void`

#### Defined in

[Core/RSA.ts:13](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/RSA.ts#L13)

___

### sign

▸ **sign**(`data`, `hashType?`, `encoding?`, `padding?`): `string`

计算签名

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `data` | `string` | `undefined` | 待解密文本 |
| `hashType` | `string` | `'sha256'` | 哈希方式，默认：'sha256' |
| `encoding` | `BufferEncoding` | `'base64'` | 编码，默认：'base64' |
| `padding` | `number` | `undefined` | 补位方式，默认：crypto.constants.RSA_PKCS1_PSS_PADDING |

#### Returns

`string`

#### Defined in

[Core/RSA.ts:86](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/RSA.ts#L86)

___

### verify

▸ **verify**(`signature`, `data`, `hashType`, `encoding?`, `padding?`): `boolean`

验证签名

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `signature` | `string` | `undefined` | 待验证签名字符串 |
| `data` | `string` | `undefined` | 待解密文本 |
| `hashType` | `string` | `undefined` | 哈希方式，默认：'sha256' |
| `encoding` | `BufferEncoding` | `'base64'` | 编码，默认：'base64' |
| `padding` | `number` | `undefined` | 补位方式，默认：crypto.constants.RSA_PKCS1_PSS_PADDING |

#### Returns

`boolean`

#### Defined in

[Core/RSA.ts:104](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/RSA.ts#L104)

___

### keyPair

▸ `Static` **keyPair**(`options`): `KeyPairKeyObjectResult`

生成密钥对

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `RSAKeyPairKeyObjectOptions` | 密钥选项 |

#### Returns

`KeyPairKeyObjectResult`

#### Defined in

[Core/RSA.ts:32](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/RSA.ts#L32)
