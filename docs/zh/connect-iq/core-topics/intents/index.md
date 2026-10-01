---
title: "Intents"
---
<a id="intents"></a>
# Intent

*自 API 级别 2.2.0 起支持*

Intent 允许 Connect IQ watch-app 或 widget 通过调用 [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function)，启动另一个 Connect IQ watch-app、Connect IQ widget 或原生应用（例如 Run、Bike 等内置活动）。

调用 [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function) 后，系统会显示确认视图，询问用户是否要切换到目标应用。选择“否”时，调用 [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function) 的应用会继续运行；选择“是”时，当前应用退出并启动新应用。确认视图显示期间，原应用仍会继续运行。

## 切换到 Connect IQ 应用

要切换到另一个 Connect IQ 应用，必须创建一个 [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)，其中包含目标应用标识符以及要传给目标应用的参数。目标应用标识符必须使用以下 URI scheme 之一：

- `manifest-id://` 后跟 `manifest.xml` 中的有效 UUID
- `store-id://` 后跟有效的应用商店 UUID

参数会以字典形式传给目标应用。字典可以为空，也可以为 `null`；目标应用会在 [AppBase.onStart()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function) 方法中以 [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) 对象接收这些参数。

```java
import Toybox.System;
...
var intent = new System.Intent("manifest-id://01234567-89AB-CDEF-0123-456789ABCDEF", {"lat"=>38.856419, "lon"=>-94.801369});
System.exitTo(intent);
```

假设目标应用已安装在设备上，上例会启动 manifest ID 为 `01234567-89AB-CDEF-0123-456789ABCDEF` 的应用，并向它传入 `"lat"` 和 `"lon"` 参数。

## 切换到原生应用

用于启动原生应用的 [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/) 对象只处理 [Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/) 对象，例如 [PersistedContent.Waypoint](/connect-iq/api-docs/Toybox/PersistedContent/Waypoint/)、[PersistedContent.Route](/connect-iq/api-docs/Toybox/PersistedContent/Route/) 和 [PersistedContent.Track](/connect-iq/api-docs/Toybox/PersistedContent/Track/)。Connect IQ 会在后台处理原生应用所需的大部分 [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/) 逻辑，并自动将适当的原生应用标识嵌入 [Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/) 对象。应用可以通过 `toIntent()` 方法访问该 Intent。更多信息请参阅[持久化内容](/connect-iq/core-topics/downloading-content/#persisted-content-in-the-simulator)章节。

## Intent 异常

Connect IQ 提供三种与 Intent 相关的异常：

- 如果应用尝试切换到设备应用或 widget 以外的 Connect IQ 应用类型，会抛出 [System.UnexpectedAppTypeException](/connect-iq/api-docs/Toybox/System/UnexpectedAppTypeException/)。
- 如果应用尝试切换到未安装的应用，会抛出 [System.AppNotInstalledException](/connect-iq/api-docs/Toybox/System/AppNotInstalledException/)。
- 如果上一次 [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function) 调用的确认视图尚未得到用户响应，就再次调用 [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function)，会抛出 [System.PreviousOperationNotCompleteException](/connect-iq/api-docs/Toybox/System/PreviousOperationNotCompleteException/)。
