[node-easywechat](../README.md) / [Exports](../modules.md) / [Core/Messages/ShortVideo](../modules/Core_Messages_ShortVideo.md) / ShortVideo

# Class: ShortVideo

[Core/Messages/ShortVideo](../modules/Core_Messages_ShortVideo.md).ShortVideo

## Hierarchy

- [`Video`](Core_Messages_Video.Video.md)

  ↳ **`ShortVideo`**

## Table of contents

### Constructors

- [constructor](Core_Messages_ShortVideo.ShortVideo.md#constructor)

### Properties

- [attributes](Core_Messages_ShortVideo.ShortVideo.md#attributes)
- [from](Core_Messages_ShortVideo.ShortVideo.md#from)
- [id](Core_Messages_ShortVideo.ShortVideo.md#id)
- [jsonAliases](Core_Messages_ShortVideo.ShortVideo.md#jsonaliases)
- [properties](Core_Messages_ShortVideo.ShortVideo.md#properties)
- [required](Core_Messages_ShortVideo.ShortVideo.md#required)
- [to](Core_Messages_ShortVideo.ShortVideo.md#to)
- [type](Core_Messages_ShortVideo.ShortVideo.md#type)
- [ALL](Core_Messages_ShortVideo.ShortVideo.md#all)
- [DEVICE\_EVENT](Core_Messages_ShortVideo.ShortVideo.md#device_event)
- [DEVICE\_TEXT](Core_Messages_ShortVideo.ShortVideo.md#device_text)
- [EVENT](Core_Messages_ShortVideo.ShortVideo.md#event)
- [FILE](Core_Messages_ShortVideo.ShortVideo.md#file)
- [IMAGE](Core_Messages_ShortVideo.ShortVideo.md#image)
- [LINK](Core_Messages_ShortVideo.ShortVideo.md#link)
- [LOCATION](Core_Messages_ShortVideo.ShortVideo.md#location)
- [MARKDOWN](Core_Messages_ShortVideo.ShortVideo.md#markdown)
- [MINIPROGRAM\_NOTICE](Core_Messages_ShortVideo.ShortVideo.md#miniprogram_notice)
- [MINIPROGRAM\_PAGE](Core_Messages_ShortVideo.ShortVideo.md#miniprogram_page)
- [SHORT\_VIDEO](Core_Messages_ShortVideo.ShortVideo.md#short_video)
- [TEXT](Core_Messages_ShortVideo.ShortVideo.md#text)
- [TEXT\_CARD](Core_Messages_ShortVideo.ShortVideo.md#text_card)
- [TRANSFER](Core_Messages_ShortVideo.ShortVideo.md#transfer)
- [VIDEO](Core_Messages_ShortVideo.ShortVideo.md#video)
- [VOICE](Core_Messages_ShortVideo.ShortVideo.md#voice)

### Methods

- [all](Core_Messages_ShortVideo.ShortVideo.md#all)
- [checkRequiredAttributes](Core_Messages_ShortVideo.ShortVideo.md#checkrequiredattributes)
- [get](Core_Messages_ShortVideo.ShortVideo.md#get)
- [getAttribute](Core_Messages_ShortVideo.ShortVideo.md#getattribute)
- [getMediaId](Core_Messages_ShortVideo.ShortVideo.md#getmediaid)
- [getRequired](Core_Messages_ShortVideo.ShortVideo.md#getrequired)
- [getType](Core_Messages_ShortVideo.ShortVideo.md#gettype)
- [has](Core_Messages_ShortVideo.ShortVideo.md#has)
- [isRequired](Core_Messages_ShortVideo.ShortVideo.md#isrequired)
- [merge](Core_Messages_ShortVideo.ShortVideo.md#merge)
- [only](Core_Messages_ShortVideo.ShortVideo.md#only)
- [propertiesToObject](Core_Messages_ShortVideo.ShortVideo.md#propertiestoobject)
- [set](Core_Messages_ShortVideo.ShortVideo.md#set)
- [setAttribute](Core_Messages_ShortVideo.ShortVideo.md#setattribute)
- [setAttributes](Core_Messages_ShortVideo.ShortVideo.md#setattributes)
- [setType](Core_Messages_ShortVideo.ShortVideo.md#settype)
- [toXmlArray](Core_Messages_ShortVideo.ShortVideo.md#toxmlarray)
- [transformForJsonRequest](Core_Messages_ShortVideo.ShortVideo.md#transformforjsonrequest)
- [transformForJsonRequestWithoutType](Core_Messages_ShortVideo.ShortVideo.md#transformforjsonrequestwithouttype)
- [transformToXml](Core_Messages_ShortVideo.ShortVideo.md#transformtoxml)

## Constructors

### constructor

• **new ShortVideo**(`mediaId`, `attributes?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |
| `attributes` | `object` |

#### Inherited from

[Video](Core_Messages_Video.Video.md).[constructor](Core_Messages_Video.Video.md#constructor)

#### Defined in

[Core/Messages/Video.ts:16](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Video.ts#L16)

## Properties

### attributes

• `Protected` **attributes**: `object` = `{}`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[attributes](Core_Messages_Video.Video.md#attributes)

#### Defined in

[Core/Messages/Message.ts:104](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L104)

___

### from

• `Protected` **from**: `string`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[from](Core_Messages_Video.Video.md#from)

#### Defined in

[Core/Messages/Message.ts:31](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L31)

___

### id

• `Protected` **id**: `number`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[id](Core_Messages_Video.Video.md#id)

#### Defined in

[Core/Messages/Message.ts:29](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L29)

___

### jsonAliases

• `Protected` **jsonAliases**: `object` = `{}`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[jsonAliases](Core_Messages_Video.Video.md#jsonaliases)

#### Defined in

[Core/Messages/Message.ts:33](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L33)

___

### properties

• `Protected` **properties**: `string`[]

#### Inherited from

[Video](Core_Messages_Video.Video.md).[properties](Core_Messages_Video.Video.md#properties)

#### Defined in

[Core/Messages/Video.ts:9](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Video.ts#L9)

___

### required

• `Protected` **required**: `string`[]

#### Inherited from

[Video](Core_Messages_Video.Video.md).[required](Core_Messages_Video.Video.md#required)

#### Defined in

[Core/Messages/Media.ts:13](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Media.ts#L13)

___

### to

• `Protected` **to**: `string`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[to](Core_Messages_Video.Video.md#to)

#### Defined in

[Core/Messages/Message.ts:30](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L30)

___

### type

• `Protected` **type**: `string` = `'shortvideo'`

#### Overrides

[Video](Core_Messages_Video.Video.md).[type](Core_Messages_Video.Video.md#type)

#### Defined in

[Core/Messages/ShortVideo.ts:8](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/ShortVideo.ts#L8)

___

### ALL

▪ `Static` **ALL**: `number`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[ALL](Core_Messages_Video.Video.md#all)

#### Defined in

[Core/Messages/Message.ts:23](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L23)

___

### DEVICE\_EVENT

▪ `Static` **DEVICE\_EVENT**: `number` = `256`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[DEVICE_EVENT](Core_Messages_Video.Video.md#device_event)

#### Defined in

[Core/Messages/Message.ts:14](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L14)

___

### DEVICE\_TEXT

▪ `Static` **DEVICE\_TEXT**: `number` = `512`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[DEVICE_TEXT](Core_Messages_Video.Video.md#device_text)

#### Defined in

[Core/Messages/Message.ts:15](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L15)

___

### EVENT

▪ `Static` **EVENT**: `number` = `1048576`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[EVENT](Core_Messages_Video.Video.md#event)

#### Defined in

[Core/Messages/Message.ts:19](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L19)

___

### FILE

▪ `Static` **FILE**: `number` = `1024`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[FILE](Core_Messages_Video.Video.md#file)

#### Defined in

[Core/Messages/Message.ts:16](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L16)

___

### IMAGE

▪ `Static` **IMAGE**: `number` = `4`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[IMAGE](Core_Messages_Video.Video.md#image)

#### Defined in

[Core/Messages/Message.ts:8](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L8)

___

### LINK

▪ `Static` **LINK**: `number` = `128`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[LINK](Core_Messages_Video.Video.md#link)

#### Defined in

[Core/Messages/Message.ts:13](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L13)

___

### LOCATION

▪ `Static` **LOCATION**: `number` = `64`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[LOCATION](Core_Messages_Video.Video.md#location)

#### Defined in

[Core/Messages/Message.ts:12](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L12)

___

### MARKDOWN

▪ `Static` **MARKDOWN**: `number` = `8388608`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[MARKDOWN](Core_Messages_Video.Video.md#markdown)

#### Defined in

[Core/Messages/Message.ts:22](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L22)

___

### MINIPROGRAM\_NOTICE

▪ `Static` **MINIPROGRAM\_NOTICE**: `number` = `4194304`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[MINIPROGRAM_NOTICE](Core_Messages_Video.Video.md#miniprogram_notice)

#### Defined in

[Core/Messages/Message.ts:21](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L21)

___

### MINIPROGRAM\_PAGE

▪ `Static` **MINIPROGRAM\_PAGE**: `number` = `2097152`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[MINIPROGRAM_PAGE](Core_Messages_Video.Video.md#miniprogram_page)

#### Defined in

[Core/Messages/Message.ts:20](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L20)

___

### SHORT\_VIDEO

▪ `Static` **SHORT\_VIDEO**: `number` = `32`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[SHORT_VIDEO](Core_Messages_Video.Video.md#short_video)

#### Defined in

[Core/Messages/Message.ts:11](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L11)

___

### TEXT

▪ `Static` **TEXT**: `number` = `2`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[TEXT](Core_Messages_Video.Video.md#text)

#### Defined in

[Core/Messages/Message.ts:7](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L7)

___

### TEXT\_CARD

▪ `Static` **TEXT\_CARD**: `number` = `2048`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[TEXT_CARD](Core_Messages_Video.Video.md#text_card)

#### Defined in

[Core/Messages/Message.ts:17](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L17)

___

### TRANSFER

▪ `Static` **TRANSFER**: `number` = `4096`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[TRANSFER](Core_Messages_Video.Video.md#transfer)

#### Defined in

[Core/Messages/Message.ts:18](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L18)

___

### VIDEO

▪ `Static` **VIDEO**: `number` = `16`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[VIDEO](Core_Messages_Video.Video.md#video)

#### Defined in

[Core/Messages/Message.ts:10](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L10)

___

### VOICE

▪ `Static` **VOICE**: `number` = `8`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[VOICE](Core_Messages_Video.Video.md#voice)

#### Defined in

[Core/Messages/Message.ts:9](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L9)

## Methods

### all

▸ **all**(): `object`

#### Returns

`object`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[all](Core_Messages_Video.Video.md#all)

#### Defined in

[Core/Messages/Message.ts:170](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L170)

___

### checkRequiredAttributes

▸ `Protected` **checkRequiredAttributes**(): `void`

#### Returns

`void`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[checkRequiredAttributes](Core_Messages_Video.Video.md#checkrequiredattributes)

#### Defined in

[Core/Messages/Message.ts:187](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L187)

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

[Video](Core_Messages_Video.Video.md).[get](Core_Messages_Video.Video.md#get)

#### Defined in

[Core/Messages/Message.ts:134](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L134)

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

[Video](Core_Messages_Video.Video.md).[getAttribute](Core_Messages_Video.Video.md#getattribute)

#### Defined in

[Core/Messages/Message.ts:129](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L129)

___

### getMediaId

▸ **getMediaId**(): `string`

#### Returns

`string`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[getMediaId](Core_Messages_Video.Video.md#getmediaid)

#### Defined in

[Core/Messages/Media.ts:24](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Media.ts#L24)

___

### getRequired

▸ **getRequired**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[Video](Core_Messages_Video.Video.md).[getRequired](Core_Messages_Video.Video.md#getrequired)

#### Defined in

[Core/Messages/Message.ts:177](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L177)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[getType](Core_Messages_Video.Video.md#gettype)

#### Defined in

[Core/Messages/Message.ts:40](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L40)

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

[Video](Core_Messages_Video.Video.md).[has](Core_Messages_Video.Video.md#has)

#### Defined in

[Core/Messages/Message.ts:139](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L139)

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

[Video](Core_Messages_Video.Video.md).[isRequired](Core_Messages_Video.Video.md#isrequired)

#### Defined in

[Core/Messages/Message.ts:182](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L182)

___

### merge

▸ **merge**(`attributes`): [`ShortVideo`](Core_Messages_ShortVideo.ShortVideo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Returns

[`ShortVideo`](Core_Messages_ShortVideo.ShortVideo.md)

#### Inherited from

[Video](Core_Messages_Video.Video.md).[merge](Core_Messages_Video.Video.md#merge)

#### Defined in

[Core/Messages/Message.ts:149](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L149)

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

[Video](Core_Messages_Video.Video.md).[only](Core_Messages_Video.Video.md#only)

#### Defined in

[Core/Messages/Message.ts:156](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L156)

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

[Video](Core_Messages_Video.Video.md).[propertiesToObject](Core_Messages_Video.Video.md#propertiestoobject)

#### Defined in

[Core/Messages/Message.ts:87](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L87)

___

### set

▸ **set**(`name`, `value`): [`ShortVideo`](Core_Messages_ShortVideo.ShortVideo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

[`ShortVideo`](Core_Messages_ShortVideo.ShortVideo.md)

#### Inherited from

[Video](Core_Messages_Video.Video.md).[set](Core_Messages_Video.Video.md#set)

#### Defined in

[Core/Messages/Message.ts:122](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L122)

___

### setAttribute

▸ **setAttribute**(`name`, `value`): [`ShortVideo`](Core_Messages_ShortVideo.ShortVideo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

[`ShortVideo`](Core_Messages_ShortVideo.ShortVideo.md)

#### Inherited from

[Video](Core_Messages_Video.Video.md).[setAttribute](Core_Messages_Video.Video.md#setattribute)

#### Defined in

[Core/Messages/Message.ts:115](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L115)

___

### setAttributes

▸ **setAttributes**(`attributes`): [`ShortVideo`](Core_Messages_ShortVideo.ShortVideo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `object` |

#### Returns

[`ShortVideo`](Core_Messages_ShortVideo.ShortVideo.md)

#### Inherited from

[Video](Core_Messages_Video.Video.md).[setAttributes](Core_Messages_Video.Video.md#setattributes)

#### Defined in

[Core/Messages/Message.ts:108](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L108)

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

[Video](Core_Messages_Video.Video.md).[setType](Core_Messages_Video.Video.md#settype)

#### Defined in

[Core/Messages/Message.ts:45](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L45)

___

### toXmlArray

▸ **toXmlArray**(): `object`

#### Returns

`object`

#### Inherited from

[Video](Core_Messages_Video.Video.md).[toXmlArray](Core_Messages_Video.Video.md#toxmlarray)

#### Defined in

[Core/Messages/Video.ts:21](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Video.ts#L21)

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

[Video](Core_Messages_Video.Video.md).[transformForJsonRequest](Core_Messages_Video.Video.md#transformforjsonrequest)

#### Defined in

[Core/Messages/Message.ts:72](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L72)

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

[Video](Core_Messages_Video.Video.md).[transformForJsonRequestWithoutType](Core_Messages_Video.Video.md#transformforjsonrequestwithouttype)

#### Defined in

[Core/Messages/Message.ts:67](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L67)

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

[Video](Core_Messages_Video.Video.md).[transformToXml](Core_Messages_Video.Video.md#transformtoxml)

#### Defined in

[Core/Messages/Message.ts:50](https://github.com/hpyer/node-easywechat/blob/b017670/src/Core/Messages/Message.ts#L50)
