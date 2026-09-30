---
title: "Intents"
---
# 意图

*自 API 级别 2.2.0*

意图允许Connect IQ手表应用程序或小工具通过调用[System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function)来启动另一个Connect IQ手表应用程序,Connect IQ小程序或本地应用程序 (例如,在运行,自行车等活动中内置)

调用[System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function)将导致一个确认视图显示,询问用户是否要退出预期的应用程序.如果用户选择'不',则称为[System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function)的应用程序将继续运行.如果用户选择'是',则应用程序将退出,新应用程序将启动.

## 离开连接智商应用程序

为了进入另一个Connect IQ应用程序,必须创建一个[System.Intent](/connect-iq/api-docs/Toybox/System/Intent/),其中包含目标应用程序识别符和任何您想将参数传递给目标应用程序.目标应用程序识别符必须使用两个支持的URI方案之一指定:

-`manifest-id://`后面是应用程序的 manifest.xml 的有效 UUID

-`store-id://`后面是有效的应用商店 UUID


参数将作为字典传递到目标应用程序,可能是空的或`null`,并通过目标应用程序的[AppBase.onStart()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function)方法作为[Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)对象接收.

```java
import Toybox.System;
...
var intent = new System.Intent("manifest-id://01234567-89AB-CDEF-0123-456789ABCDEF", {"lat"=>38.856419, "lon"=>-94.801369});
System.exitTo(intent);
```

假设目标应用程序安装在设备上,这个例子将启动具有明示 ID`01234567-89AB-CDEF-0123-456789ABCDEF`的应用程序,并通过`"lat"`和`"lon"`参数.

## 退出本地应用程序

[System.Intent](/connect-iq/api-docs/Toybox/System/Intent/) objects to launch native apps deal exclusively with [Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/) objects, such as [PersistedContent.Waypoint](/connect-iq/api-docs/Toybox/PersistedContent/Waypoint/), [PersistedContent.Route](/connect-iq/api-docs/Toybox/PersistedContent/Route/), and [PersistedContent.Track](/connect-iq/api-docs/Toybox/PersistedContent/Track/). Connect IQ handles most of the [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/) functionality for native apps behind the scenes, automatically embedding the appropriate native app identifier in the [Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/) object, which is accessible via the `toIntent()` method. See the [Persisted Content](/connect-iq/core-topics/downloading-content/#persisted-content-in-the-simulator) section 更多信息.

## Intent 异常

连接智商包括三个与意图相关的例外类型:

- 如果您的应用程序试图进入Connect IQ应用程序类型,而不是设备应用程序或小工具,则将[System.UnexpectedAppTypeException](/connect-iq/api-docs/Toybox/System/UnexpectedAppTypeException/)丢弃

- 如果您的应用程序试图退出未安装的应用程序,则[System.AppNotInstalledException](/connect-iq/api-docs/Toybox/System/AppNotInstalledException/)会被丢弃

- 如果[System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function)被调用时,[System.PreviousOperationNotCompleteException](/connect-iq/api-docs/Toybox/System/PreviousOperationNotCompleteException/)会被丢弃,而用户未认出之前的[System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function)调用的确认视图
