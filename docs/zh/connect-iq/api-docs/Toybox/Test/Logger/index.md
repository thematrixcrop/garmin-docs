---
title: "类：Toybox.Test.Logger"
---
# 类：Toybox.Test.Logger

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Test.Logger](/connect-iq/api-docs/Toybox/Test/Logger/)


[显示全部](#)

## 概述

Logger 类为测试提供输出功能。

无需实例化 Logger 类。此操作会在后台自动完成。

起始版本：

API 级别 2.1.0

## 实例方法摘要 [collapse](#)

- [**debug**](#debug-instance_function)(str as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**

    将调试 [String](/connect-iq/api-docs/Toybox/Lang/String/) 写入输出流。

- [**error**](#error-instance_function)(str as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**

    将错误 [String](/connect-iq/api-docs/Toybox/Lang/String/) 写入输出流。

- [**warning**](#warning-instance_function)(str as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**

    将警告 [String](/connect-iq/api-docs/Toybox/Lang/String/) 写入输出流。


## 实例方法详情

### **debug(str as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as **Void**

将调试 [String](/connect-iq/api-docs/Toybox/Lang/String/) 写入输出流。

String 以 DEBUG 和时间戳作为前缀。

参数：

- str — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    输出到控制台的字符串


示例：

```
using Toybox.Test;
(:test)
function aDebugTest(logger) {
   logger.debug("This is a debug message.");
   return true;
}
// Output:
DEBUG (9:23): This is a debug message.
```

起始版本：

API 级别 2.1.0

### **error(str as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as **Void**

将错误 [String](/connect-iq/api-docs/Toybox/Lang/String/) 写入输出流。

String 以 ERROR 和时间戳作为前缀。

参数：

- str — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    输出到控制台的字符串


示例：

```
using Toybox.Test;
(:test)
function anErrorTest(logger) {
   logger.error("This is an error message.");
   return true;
}
// Output:
ERROR (9:24): This is an error message.
```

起始版本：

API 级别 2.1.0

### **warning(str as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as **Void**

将警告 [String](/connect-iq/api-docs/Toybox/Lang/String/) 写入输出流。

String 以 WARNING 和时间戳作为前缀。

参数：

- str — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    输出到控制台的字符串


示例：

```
using Toybox.Test;
(:test)
function aWarningTest(logger) {
   logger.warning("This is a warning message.");
   return true;
}
// Output:
WARNING (9:23): This is a warning message.
```

起始版本：

API 级别 2.1.0
