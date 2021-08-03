[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/Messages/Media](../modules/Core_Messages_Media.md) / Media

# Class: Media

[Core/Messages/Media](../modules/Core_Messages_Media.md).Media

## Hierarchy

- [`Message`](Core_Messages_Message.Message.md)

  ↳ **`Media`**

  ↳↳ [`File`](Core_Messages_File.File.md)

  ↳↳ [`Image`](Core_Messages_Image.Image.md)

  ↳↳ [`Video`](Core_Messages_Video.Video.md)

  ↳↳ [`Voice`](Core_Messages_Voice.Voice.md)

## Table of contents

### Constructors

- [constructor](Core_Messages_Media.Media.md#constructor)

### Properties

- [attributes](Core_Messages_Media.Media.md#attributes)
- [from](Core_Messages_Media.Media.md#from)
- [id](Core_Messages_Media.Media.md#id)
- [jsonAliases](Core_Messages_Media.Media.md#jsonaliases)
- [properties](Core_Messages_Media.Media.md#properties)
- [required](Core_Messages_Media.Media.md#required)
- [to](Core_Messages_Media.Media.md#to)
- [type](Core_Messages_Media.Media.md#type)
- [ALL](Core_Messages_Media.Media.md#all)
- [DEVICE\_EVENT](Core_Messages_Media.Media.md#device_event)
- [DEVICE\_TEXT](Core_Messages_Media.Media.md#device_text)
- [EVENT](Core_Messages_Media.Media.md#event)
- [FILE](Core_Messages_Media.Media.md#file)
- [IMAGE](Core_Messages_Media.Media.md#image)
- [LINK](Core_Messages_Media.Media.md#link)
- [LOCATION](Core_Messages_Media.Media.md#location)
- [MARKDOWN](Core_Messages_Media.Media.md#markdown)
- [MINIPROGRAM\_NOTICE](Core_Messages_Media.Media.md#miniprogram_notice)
- [MINIPROGRAM\_PAGE](Core_Messages_Media.Media.md#miniprogram_page)
- [SHORT\_VIDEO](Core_Messages_Media.Media.md#short_video)
- [TEXT](Core_Messages_Media.Media.md#text)
- [TEXT\_CARD](Core_Messages_Media.Media.md#text_card)
- [TRANSFER](Core_Messages_Media.Media.md#transfer)
- [VIDEO](Core_Messages_Media.Media.md#video)
- [VOICE](Core_Messages_Media.Media.md#voice)

### Methods

- [all](Core_Messages_Media.Media.md#all)
- [checkRequiredAttributes](Core_Messages_Media.Media.md#checkrequiredattributes)
- [get](Core_Messages_Media.Media.md#get)
- [getAttribute](Core_Messages_Media.Media.md#getattribute)
- [getMediaId](Core_Messages_Media.Media.md#getmediaid)
- [getRequired](Core_Messages_Media.Media.md#getrequired)
- [getType](Core_Messages_Media.Media.md#gettype)
- [has](Core_Messages_Media.Media.md#has)
- [isRequired](Core_Messages_Media.Media.md#isrequired)
- [merge](Core_Messages_Media.Media.md#merge)
- [only](Core_Messages_Media.Media.md#only)
- [propertiesToObject](Core_Messages_Media.Media.md#propertiestoobject)
- [set](Core_Messages_Media.Media.md#set)
- [setAttribute](Core_Messages_Media.Media.md#setattribute)
- [setAttributes](Core_Messages_Media.Media.md#setattributes)
- [setType](Core_Messages_Media.Media.md#settype)
- [toXmlArray](Core_Messages_Media.Media.md#toxmlarray)
- [transformForJsonRequest](Core_Messages_Media.Media.md#transformforjsonrequest)
- [transformForJsonRequestWithoutType](Core_Messages_Media.Media.md#transformforjsonrequestwithouttype)
- [transformToXml](Core_Messages_Media.Media.md#transformtoxml)

## Constructors

### constructor

• **new Media**(`mediaId`, `type?`, `attributes?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mediaId` | `string` | `undefined` |
| `type` | `string` | `''` |
| `attributes` | `object` | `{}` |

#### Overrides

[Message](Core_Messages_Message.Message.md).[constructor](Core_Messages_Message.Message.md#constructor)

#### Defined in

[Core/Messages/Media.ts:17](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Media.ts#L17)

## Properties

### attributes

• `Protected` **attributes**: `object` = `{}`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[attributes](Core_Messages_Message.Message.md#attributes)

#### Defined in

[Core/Messages/Message.ts:113](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L113)

___

### from

• `Protected` **from**: `string`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[from](Core_Messages_Message.Message.md#from)

#### Defined in

[Core/Messages/Message.ts:32](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L32)

___

### id

• `Protected` **id**: `number`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[id](Core_Messages_Message.Message.md#id)

#### Defined in

[Core/Messages/Message.ts:30](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L30)

___

### jsonAliases

• `Protected` **jsonAliases**: `object` = `{}`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[jsonAliases](Core_Messages_Message.Message.md#jsonaliases)

#### Defined in

[Core/Messages/Message.ts:34](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L34)

___

### properties

• `Protected` **properties**: `string`[]

#### Overrides

[Message](Core_Messages_Message.Message.md).[properties](Core_Messages_Message.Message.md#properties)

#### Defined in

[Core/Messages/Media.ts:9](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Media.ts#L9)

___

### required

• `Protected` **required**: `string`[]

#### Overrides

[Message](Core_Messages_Message.Message.md).[required](Core_Messages_Message.Message.md#required)

#### Defined in

[Core/Messages/Media.ts:13](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Media.ts#L13)

___

### to

• `Protected` **to**: `string`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[to](Core_Messages_Message.Message.md#to)

#### Defined in

[Core/Messages/Message.ts:31](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L31)

___

### type

• `Protected` **type**: `string`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[type](Core_Messages_Message.Message.md#type)

#### Defined in

[Core/Messages/Message.ts:29](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L29)

___

### ALL

▪ `Static` **ALL**: `number`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[ALL](Core_Messages_Message.Message.md#all)

#### Defined in

[Core/Messages/Message.ts:24](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L24)

___

### DEVICE\_EVENT

▪ `Static` **DEVICE\_EVENT**: `number` = `256`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[DEVICE_EVENT](Core_Messages_Message.Message.md#device_event)

#### Defined in

[Core/Messages/Message.ts:15](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L15)

___

### DEVICE\_TEXT

▪ `Static` **DEVICE\_TEXT**: `number` = `512`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[DEVICE_TEXT](Core_Messages_Message.Message.md#device_text)

#### Defined in

[Core/Messages/Message.ts:16](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L16)

___

### EVENT

▪ `Static` **EVENT**: `number` = `1048576`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[EVENT](Core_Messages_Message.Message.md#event)

#### Defined in

[Core/Messages/Message.ts:20](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L20)

___

### FILE

▪ `Static` **FILE**: `number` = `1024`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[FILE](Core_Messages_Message.Message.md#file)

#### Defined in

[Core/Messages/Message.ts:17](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L17)

___

### IMAGE

▪ `Static` **IMAGE**: `number` = `4`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[IMAGE](Core_Messages_Message.Message.md#image)

#### Defined in

[Core/Messages/Message.ts:9](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L9)

___

### LINK

▪ `Static` **LINK**: `number` = `128`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[LINK](Core_Messages_Message.Message.md#link)

#### Defined in

[Core/Messages/Message.ts:14](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L14)

___

### LOCATION

▪ `Static` **LOCATION**: `number` = `64`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[LOCATION](Core_Messages_Message.Message.md#location)

#### Defined in

[Core/Messages/Message.ts:13](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L13)

___

### MARKDOWN

▪ `Static` **MARKDOWN**: `number` = `8388608`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[MARKDOWN](Core_Messages_Message.Message.md#markdown)

#### Defined in

[Core/Messages/Message.ts:23](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L23)

___

### MINIPROGRAM\_NOTICE

▪ `Static` **MINIPROGRAM\_NOTICE**: `number` = `4194304`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[MINIPROGRAM_NOTICE](Core_Messages_Message.Message.md#miniprogram_notice)

#### Defined in

[Core/Messages/Message.ts:22](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L22)

___

### MINIPROGRAM\_PAGE

▪ `Static` **MINIPROGRAM\_PAGE**: `number` = `2097152`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[MINIPROGRAM_PAGE](Core_Messages_Message.Message.md#miniprogram_page)

#### Defined in

[Core/Messages/Message.ts:21](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L21)

___

### SHORT\_VIDEO

▪ `Static` **SHORT\_VIDEO**: `number` = `32`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[SHORT_VIDEO](Core_Messages_Message.Message.md#short_video)

#### Defined in

[Core/Messages/Message.ts:12](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L12)

___

### TEXT

▪ `Static` **TEXT**: `number` = `2`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[TEXT](Core_Messages_Message.Message.md#text)

#### Defined in

[Core/Messages/Message.ts:8](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L8)

___

### TEXT\_CARD

▪ `Static` **TEXT\_CARD**: `number` = `2048`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[TEXT_CARD](Core_Messages_Message.Message.md#text_card)

#### Defined in

[Core/Messages/Message.ts:18](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L18)

___

### TRANSFER

▪ `Static` **TRANSFER**: `number` = `4096`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[TRANSFER](Core_Messages_Message.Message.md#transfer)

#### Defined in

[Core/Messages/Message.ts:19](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L19)

___

### VIDEO

▪ `Static` **VIDEO**: `number` = `16`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[VIDEO](Core_Messages_Message.Message.md#video)

#### Defined in

[Core/Messages/Message.ts:11](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L11)

___

### VOICE

▪ `Static` **VOICE**: `number` = `8`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[VOICE](Core_Messages_Message.Message.md#voice)

#### Defined in

[Core/Messages/Message.ts:10](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L10)

## Methods

### all

▸ **all**(): `object`

#### Returns

`object`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[all](Core_Messages_Message.Message.md#all)

#### Defined in

[Core/Messages/Message.ts:179](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L179)

___

### checkRequiredAttributes

▸ `Protected` **checkRequiredAttributes**(): `void`

#### Returns

`void`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[checkRequiredAttributes](Core_Messages_Message.Message.md#checkrequiredattributes)

#### Defined in

[Core/Messages/Message.ts:196](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L196)

___

### get

▸ **get**(`name`, `defaultValue?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `defaultValue` | `any` | `null` |

#### Returns

`any`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[get](Core_Messages_Message.Message.md#get)

#### Defined in

[Core/Messages/Message.ts:143](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L143)

___

### getAttribute

▸ **getAttribute**(`name`, `defaultValue?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `defaultValue` | `any` | `null` |

#### Returns

`any`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[getAttribute](Core_Messages_Message.Message.md#getattribute)

#### Defined in

[Core/Messages/Message.ts:138](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L138)

___

### getMediaId

▸ **getMediaId**(): `string`

#### Returns

`string`

#### Defined in

[Core/Messages/Media.ts:24](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Media.ts#L24)

___

### getRequired

▸ **getRequired**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Message](Core_Messages_Message.Message.md).[getRequired](Core_Messages_Message.Message.md#getrequired)

#### Defined in

[Core/Messages/Message.ts:186](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L186)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[getType](Core_Messages_Message.Message.md#gettype)

#### Defined in

[Core/Messages/Message.ts:41](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L41)

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[has](Core_Messages_Message.Message.md#has)

#### Defined in

[Core/Messages/Message.ts:148](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L148)

___

### isRequired

▸ **isRequired**(`attribute`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `any` |

#### Returns

`boolean`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[isRequired](Core_Messages_Message.Message.md#isrequired)

#### Defined in

[Core/Messages/Message.ts:191](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L191)

___

### merge

▸ **merge**(`attributes`): [`Media`](Core_Messages_Media.Media.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Returns

[`Media`](Core_Messages_Media.Media.md)

#### Inherited from

[Message](Core_Messages_Message.Message.md).[merge](Core_Messages_Message.Message.md#merge)

#### Defined in

[Core/Messages/Message.ts:158](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L158)

___

### only

▸ **only**(`keys`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string`[] |

#### Returns

`object`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[only](Core_Messages_Message.Message.md#only)

#### Defined in

[Core/Messages/Message.ts:165](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L165)

___

### propertiesToObject

▸ **propertiesToObject**(`data`, `aliases?`): `object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `object` | `undefined` |
| `aliases` | `object` | `null` |

#### Returns

`object`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[propertiesToObject](Core_Messages_Message.Message.md#propertiestoobject)

#### Defined in

[Core/Messages/Message.ts:96](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L96)

___

### set

▸ **set**(`name`, `value`): [`Media`](Core_Messages_Media.Media.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

[`Media`](Core_Messages_Media.Media.md)

#### Inherited from

[Message](Core_Messages_Message.Message.md).[set](Core_Messages_Message.Message.md#set)

#### Defined in

[Core/Messages/Message.ts:131](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L131)

___

### setAttribute

▸ **setAttribute**(`name`, `value`): [`Media`](Core_Messages_Media.Media.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

[`Media`](Core_Messages_Media.Media.md)

#### Inherited from

[Message](Core_Messages_Message.Message.md).[setAttribute](Core_Messages_Message.Message.md#setattribute)

#### Defined in

[Core/Messages/Message.ts:124](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L124)

___

### setAttributes

▸ **setAttributes**(`attributes`): [`Media`](Core_Messages_Media.Media.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Returns

[`Media`](Core_Messages_Media.Media.md)

#### Inherited from

[Message](Core_Messages_Message.Message.md).[setAttributes](Core_Messages_Message.Message.md#setattributes)

#### Defined in

[Core/Messages/Message.ts:117](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L117)

___

### setType

▸ **setType**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[setType](Core_Messages_Message.Message.md#settype)

#### Defined in

[Core/Messages/Message.ts:46](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L46)

___

### toXmlArray

▸ **toXmlArray**(): `object`

#### Returns

`object`

#### Overrides

[Message](Core_Messages_Message.Message.md).[toXmlArray](Core_Messages_Message.Message.md#toxmlarray)

#### Defined in

[Core/Messages/Media.ts:31](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Media.ts#L31)

___

### transformForJsonRequest

▸ **transformForJsonRequest**(`appends?`, `withType?`): `object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `appends` | `object` | `{}` |
| `withType` | `boolean` | `true` |

#### Returns

`object`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[transformForJsonRequest](Core_Messages_Message.Message.md#transformforjsonrequest)

#### Defined in

[Core/Messages/Message.ts:81](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L81)

___

### transformForJsonRequestWithoutType

▸ **transformForJsonRequestWithoutType**(`appends?`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appends` | `object` |

#### Returns

`object`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[transformForJsonRequestWithoutType](Core_Messages_Message.Message.md#transformforjsonrequestwithouttype)

#### Defined in

[Core/Messages/Message.ts:76](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L76)

___

### transformToXml

▸ **transformToXml**(`appends?`, `returnAsObject?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `appends` | `object` | `{}` |
| `returnAsObject` | `boolean` | `false` |

#### Returns

`any`

#### Inherited from

[Message](Core_Messages_Message.Message.md).[transformToXml](Core_Messages_Message.Message.md#transformtoxml)

#### Defined in

[Core/Messages/Message.ts:51](https://github.com/hpyer/node-easywechat/blob/3eacadb/src/Core/Messages/Message.ts#L51)
