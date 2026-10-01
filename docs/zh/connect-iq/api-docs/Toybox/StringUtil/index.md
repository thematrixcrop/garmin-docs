---
title: "模块：Toybox.StringUtil"
---
# 模块：Toybox.StringUtil

## 概述

StringUtil 模块包含 String 工具函数

起始版本：

API 级别 1.3.0

## 命名空间下的类

类：[InvalidHexStringException](/connect-iq/api-docs/Toybox/StringUtil/InvalidHexStringException/)

## 常量摘要

### CharacterEncoding

起始版本：

API 级别 1.3.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CHAR\_ENCODING\_UTF8 | 0 |
API 级别 3.0.0

 |  |

### Representation

起始版本：

API 级别 1.3.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| REPRESENTATION\_STRING\_BASE64 | 0 |
API 级别 3.0.0

 |  |
| REPRESENTATION\_STRING\_HEX | 1 |

API 级别 3.0.0

 |  |
| REPRESENTATION\_STRING\_PLAIN\_TEXT | 2 |

API 级别 3.0.0

 |  |
| REPRESENTATION\_BYTE\_ARRAY | 3 |

API 级别 3.0.0

 |  |

## 实例方法摘要 [collapse](#)

- [**charArrayToString**](#charArrayToString-instance_function)(charArray as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)\>) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将由 [Char](/connect-iq/api-docs/Toybox/Lang/Char/) 对象组成的 Array 转换为对应的 String。

- [**convertEncodedString**](#convertEncodedString-instance_function)(input as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), options as { :fromRepresentation as [StringUtil.Representation](/connect-iq/api-docs/Toybox/StringUtil/#Representation-module), :toRepresentation as [StringUtil.Representation](/connect-iq/api-docs/Toybox/StringUtil/#Representation-module), :encoding as [StringUtil.CharacterEncoding](/connect-iq/api-docs/Toybox/StringUtil/#CharacterEncoding-module) }) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    将 String 或 ByteArray 表示转换为 String 或 ByteArray 表示，其底层字节格式与提供的输入选项相对应。

- [**encodeBase64**](#encodeBase64-instance_function)(string as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将 String 编码为 base64。

- [**utf8ArrayToString**](#utf8ArrayToString-instance_function)(utf8Array as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将包含 UTF-8 字节的 Array 转换为对应的 String。


## 实例方法详情

### **charArrayToString(charArray as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)\>)** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将由 [Char](/connect-iq/api-docs/Toybox/Lang/Char/) 对象组成的 Array 转换为对应的 String。

参数：

- charArray — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    包含 Char 对象的 Array


返回：

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    输入 Array 的字符串表示。


起始版本：

API 级别 1.3.0

### **convertEncodedString(input as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), options as { :fromRepresentation as [StringUtil.Representation](/connect-iq/api-docs/Toybox/StringUtil/#Representation-module), :toRepresentation as [StringUtil.Representation](/connect-iq/api-docs/Toybox/StringUtil/#Representation-module), :encoding as [StringUtil.CharacterEncoding](/connect-iq/api-docs/Toybox/StringUtil/#CharacterEncoding-module) })** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

将 String 或 ByteArray 表示转换为 String 或 ByteArray 表示，其底层字节格式与提供的输入选项相对应。

参数：

- input — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    需要转换的输入。

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/))
- :fromRepresentation — ([StringUtil.Representation](/connect-iq/api-docs/Toybox/StringUtil/#Representation-module)) —

        必需。一个 [REPRESENTATION\_\*](/connect-iq/api-docs/Toybox/StringUtil/) 枚举值，指示应从哪个表示形式转换 `input`。

- :toRepresentation — ([StringUtil.Representation](/connect-iq/api-docs/Toybox/StringUtil/#Representation-module)) —

        必需。一个 [REPRESENTATION\_\*](/connect-iq/api-docs/Toybox/StringUtil/) 枚举值，指示应将 `input` 转换为哪种表示形式。

- :encoding — ([StringUtil.CharacterEncoding](/connect-iq/api-docs/Toybox/StringUtil/#CharacterEncoding-module)) —

        一个 [CHAR\_ENCODING\_\*](/connect-iq/api-docs/Toybox/StringUtil/) 值，用于指示在 `fromRepresentation` 或 `toRepresentation` 设置为 REPRESENTATION\_STRING\_PLAIN\_TEXT 时，生成十六进制字符串或 ByteArray 所使用的 String 编码。如果未指定，则默认为 CHAR\_ENCODING\_UTF8。


返回：

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    根据提供的选项转换后的 String 或 ByteArray


起始版本：

API 级别 3.0.0

抛出：

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    如果所需选项未设置为有效的枚举值，则会抛出此异常。


### **encodeBase64(string as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 String 编码为 base64

参数：

- string — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    要编码的字符串


返回：

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    一个经过 base64 编码的 String


起始版本：

API 级别 1.3.0

### **utf8ArrayToString(utf8Array as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>)** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

给定一个 UTF-8 字节组成的 Array，返回对应的 String

参数：

- utf8Array — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    UTF-8 字节数组


返回：

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    输入 Array 的字符串表示。


起始版本：

API 级别 1.3.0

抛出：

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果提供的字节包含无效的 UTF-8 序列，则会抛出此异常。
