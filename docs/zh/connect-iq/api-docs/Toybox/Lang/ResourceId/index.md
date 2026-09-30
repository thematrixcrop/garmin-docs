---
title: "类：Toybox.Lang.ResourceId"
---
# 类：Toybox.Lang.ResourceId

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)


[显示全部](#)

## 概述

ResourceId 是资源标识符。

ResourceId 值可唯一标识系统中的资源。

示例：

```
var resourceId = Rez.Strings.AppName;
var appName = System.loadResource(resourceId);
```

起始版本：

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将 ResourceId 转换为 String。


## 实例方法详情

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 ResourceId 转换为 String

返回：

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    ResourceId 的 String 表示形式


起始版本：

API 级别 1.0.0
