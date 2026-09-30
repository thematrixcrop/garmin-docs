---
title: "Manifest File and Permissions"
---
# 清单文件和权限

![](/connect-iq/resources/programmers-guide/wizard-monkey.png)

所有`manifest.xml`的部分都可在 Monkey C Extension manifest 编辑器中进行编辑. *编辑为 XML* 选项将允许您访问底层定义.

## 应用属性

`application`元素具有多个重要属性.`id`字段是一个128-位 UUID识别符.可以使用[UUID Generator](http://www.uuidgenerator.net/version4)或标准工具生成独特识别符.

`entry`属性必须指定您的应用程序的[Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/)对象.

The `name` and `launcherIcon` attributes must specify a resource ID that is defined in the app resources. The `name` must reference a `string` entry in your strings resources, and the `launcherIcon` must reference a bitmap resource. See the [Resources](/connect-iq/core-topics/resources/#resources) 更多信息. Note that the icon resource should not be re-used within your application; use a duplicate resource if you want to use the icon within the app.

If you specify a `launcherIcon`, 系统将 resource compiler will auto size the resource to match the product icon size. If a `launcherIcon` isn't specified, a default icon will be compiled into the application.

在`type`字段中指定您正在开发的应用程序.目前,Connect IQ支持五种类型的应用程序:

1.  `watchface`

2.  `datafield`

3.  `widget`

4.  `watch-app`

5.  `audio-content-provider-app`


在表格文件中指定的应用程序类型决定了应用程序在设备上何处出现,以及应用程序可以使用哪些API.

在`minApiLevel`字段中,指定了您的应用程序兼容的最低 Connect IQ API 级别.它用于防止您针对不兼容的设备.在创建新应用程序或编辑现有应用程序时,可以选择最低 API 级别.微版本在版本 1 (1.2.1 比如),但在确定设备支持时只考虑主要和小版本.

每个应用程序都必须包含一个[Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/)对象,作为应用程序的入口点.当创建项目时,C扩展将生成一个[Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/)对象.

一个[Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/)对象应取代[AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function)以提供视觉对象的最初推力.一个阵列必须以视觉和代表或只是一个元素阵列返回[WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)对象:

```java
return [ new MyView(), new MyDelegate() ];
```

## 产品

Garmin为许多应用程序制作了各种各样的产品,而 Monkey C 简单地为我们所有的 Connect IQ 兼容设备编写. Monkey C 问开发人员他们选择支持哪些 Connect IQ 设备,因为不可能知道未来的产品是否与您的应用程序兼容.随着新 Connect IQ 兼容产品的出现,模拟器将会更新以支持它们,以便开发人员可以决定是否支持它们.

应用程序支持的产品列出在表文件`products`区块中:

```xml
<iq:products>
    <iq:product id="round-watch"/>
</iq:products>
```

### 支持ed Activities

*自 API 级别 5.2.0*

在API级5.2的设备上,数据字段具有后安装流程,允许用户将其与活动联系起来.如果你想过活动列表,你可以在表格中包含活动过器.

```xml
<!--
            Activity Filtering for post install.

            Set an activity filter for outdoor running activities
        -->
        <iq:activityFilter>
            <iq:activity sport="Toybox.Activity.SPORT_RUNNING" subsport="Toybox.Activity.SUB_SPORT_GENERIC" />
            <iq:activity sport="Toybox.Activity.SPORT_RUNNING" subsport="Toybox.Activity.SUB_SPORT_TRAIL" />
            <iq:activity sport="Toybox.Activity.SPORT_RUNNING" subsport="Toybox.Activity.SUB_SPORT_TRACK" />

        </iq:activityFilter>
```

这将建立一个基于FIT运动和子运动标识符的过器.如果没有提供子运动,过器将覆盖所有运动.你可以使用直接FIT标识符而不是和常数.以下是一些你可以使用的例子:

| Activity | Sport | Sub-Sport |
| --- | --- | --- |
| 跑步（全部） |  | None |
| 越野跑 |  |  |
| 跑步追踪 |  |  |
| 跑步机跑步 |  |  |
| 室内跑步 |  |  |
| 骑行（全部） |  | None |
| 山地自行车 |  |  |
| 碎石路骑行 |  |  |
| 室内骑行 |  |  |

## 权限

一些模块将用户的个人信息或网络通信暴露.使用这些模块,必须在安装时要求用户的许可.

随着模块的添加到API,可能会添加更多模块.

```xml
<iq:permissions>
    <iq:uses-permission id="Sensor"/>
</iq:permissions>
```

下面的权限可用:

| Permission | 适用模块 | API 级别 | 表盘 | 数据字段 | Widget | App | 音频内容提供程序 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ant | [Toybox.Ant](/connect-iq/api-docs/Toybox/Ant/) | 1.0.0 |  | x | x | x | x |
| Background | [Toybox.Background](/connect-iq/api-docs/Toybox/Background/) | 2.3.0 | x | x | x | x | x |
| BluetoothLowEnergy | [Toybox.BluetoothLowEnergy](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/) | 3.1.0 |  | x | x | x | x |
| Communications | [Toybox.Communications](/connect-iq/api-docs/Toybox/Communications/)、[Toybox.Authentication](/connect-iq/api-docs/Toybox/Authentication/) | 1.0.0 | x | x | x | x | x |
| ComplicationProvider | [Toybox.Complications](/connect-iq/api-docs/Toybox/Complications/) | 4.1.0 |  |  |  | x | x |
| ComplicationSubscriber | [Toybox.Complications](/connect-iq/api-docs/Toybox/Complications/) | 4.1.0 | x |  |  |  |  |
| 数据字段警报 | [WatchUi.DataFieldAlert](/connect-iq/api-docs/Toybox/WatchUi/DataFieldAlert/) | 3.2.0 |  | x |  |  |  |
| Fit | [Toybox.ActivityRecording](/connect-iq/api-docs/Toybox/ActivityRecording/)、[Toybox.FitContributor](/connect-iq/api-docs/Toybox/FitContributor/) | 1.0.0 |  |  |  | x |  |
| PersistedContent | [Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/) | 2.2.0 |  |  | x | x | x |
| Positioning | [Position.getInfo()](/connect-iq/api-docs/Toybox/Position/#getInfo-instance_function)、[Position.enableLocationEvents()](/connect-iq/api-docs/Toybox/Position/#enableLocationEvents-instance_function) | 1.0.0 | x | x | x | x | x |
| Sensor | [Toybox.Sensor](/connect-iq/api-docs/Toybox/Sensor/) | 1.0.0 |  | x | x | x | x |
| SensorHistory | [Toybox.SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/) | 2.1.0 |  |  | x | x | x |
| SensorLogging | [Toybox.SensorLogging](/connect-iq/api-docs/Toybox/SensorLogging/) | 2.3.0 |  |  |  |  |  |
| UserProfile | [Toybox.UserProfile](/connect-iq/api-docs/Toybox/UserProfile/) | 1.0.0 | x | x | x | x | x |

一些产品提供活动与应用程序之间的分离. 如果您的应用程序有`Fit`许可,则将显示在活动列表中.

## 语言

Connect IQ apps can be localized across over 30 languages, and the languages your app support can impact what regions of the world your app is available in. In the manifest you can declare the languages your app supports, which will be used when exporting your application to the store. See [Resources](/connect-iq/core-topics/resources/#strings) 更多信息.

## 依赖项

如果您的应用程序链接到其他图书馆,则必须在表中声明:

```xml
<iq:barrels>
    <iq:depends name="Barcode" version="2.0.0"/>
</iq:barrels>
```

每桶的选项如下:

| Option |类型|值|
| --- | --- | --- |
| `name` | `string` |已声明 Mod|
| `version` | `a.b.c.d`（可选） |子桶的声明版本号.|

`a`,`b`和`c`必须是数字.`d`是`A-Z`,`a-z`,`0-9`和`_`的可选的阿尔法数字字符串.

如果指定版本,构建系统将执行使用的图书馆版本.这些规则可以通过以下选项修改:

| Format | Meaning | Example | 有效版本 | 无效版本 |
| --- | --- | --- | --- | --- |
| Exact |应用程序链接到特定版本的库| `version="1.2.3"` |版本`1.2.3`| 任何其他版本 |
| 大于或等于 |应用程序链接到匹配或超过版本的库.| `version=">=1.2.3"` | 版本 `1.2.3` 或更高版本。 | 版本 `1.2.2` 或更低版本。 |
| Pessimistic |应用程序将链接到具有匹配的主要和小型版本的图书馆,但微版本必须匹配或大于指定版本.| `version="~>1.2.3"` | 版本 `1.2.3`、`1.2.4`、`1.2.5` 等 | 版本 `1.2.2`、`1.3.1` 等 |
| Whatever |链接库的版本不会在构建时执行.| 未指定版本属性。 | Any | N/A |

版本可以以`>=`为先fix,以表示最低支持版本.

See [Shareable Libraries](/connect-iq/core-topics/shareable-libraries/#shareable-libraries) 更多信息.

通信需要启用背景许可,但身份验证不

通信需要启用背景许可,但身份验证不

只有小工具和应用程序可以拨打[Position.enableLocationEvents()](/connect-iq/api-docs/Toybox/Position/#enableLocationEvents-instance_function)

只有小工具和应用程序可以拨打[Position.enableLocationEvents()](/connect-iq/api-docs/Toybox/Position/#enableLocationEvents-instance_function)

只有小工具和应用程序可以拨打[Position.enableLocationEvents()](/connect-iq/api-docs/Toybox/Position/#enableLocationEvents-instance_function)
