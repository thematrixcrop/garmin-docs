---
title: "清单文件和权限"
---
# 清单文件和权限

![](/connect-iq/resources/programmers-guide/wizard-monkey.png)

`manifest.xml` 的所有部分都可以在 Monkey C 扩展的清单编辑器中编辑。*编辑为 XML* 选项允许您访问底层定义。

## 应用属性

`application`元素具有多个重要属性.`id`字段是一个128-位 UUID识别符.可以使用[UUID Generator](http://www.uuidgenerator.net/version4)或标准工具生成独特识别符.

`entry`属性必须指定您的应用程序的[Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/)对象.

`name` 和 `launcherIcon` 属性必须指定应用资源中定义的资源 ID。`name` 必须引用字符串资源中的 `string` 条目，`launcherIcon` 必须引用位图资源。更多信息请参阅[资源](/connect-iq/core-topics/resources/#resources)。请注意，图标资源不应在应用程序中重复使用；如果要在应用程序内部使用该图标，请创建一个副本资源。

如果指定了 `launcherIcon`，资源编译器会自动调整资源大小以匹配产品图标尺寸。如果未指定 `launcherIcon`，系统会将默认图标编译到应用程序中。

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

### 支持的活动

*自 API 级别 5.2.0*

在 API 级别 5.2 的设备上，数据字段支持安装后的流程，允许用户将其与活动关联。如果您希望过滤活动列表，可以在清单中包含活动过滤器。

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

这会建立一个基于 FIT 运动和子运动标识符的过滤器。如果未提供子运动，过滤器将匹配该运动的所有子运动。您也可以直接使用 FIT 标识符，而不是使用常量。以下是一些可用示例：

| 活动 | 运动 | 子运动 |
| --- | --- | --- |
| 跑步（全部） |  | 无 |
| 越野跑 |  |  |
| 跑步追踪 |  |  |
| 跑步机跑步 |  |  |
| 室内跑步 |  |  |
| 骑行（全部） |  | 无 |
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

| 权限 | 适用模块 | API 级别 | 表盘 | 数据字段 | 小工具 | 应用 | 音频内容提供程序 |
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

Connect IQ 应用程序可以本地化为 30 多种语言，应用程序支持的语言会影响应用程序在全球哪些地区可用。您可以在清单中声明应用程序支持的语言，导出应用程序到商店时会使用这些设置。更多信息请参阅[资源](/connect-iq/core-topics/resources/#strings)。

## 依赖项

如果您的应用程序链接到其他图书馆,则必须在表中声明:

```xml
<iq:barrels>
    <iq:depends name="Barcode" version="2.0.0"/>
</iq:barrels>
```

每桶的选项如下:

| 选项 | 类型 | 值 |
| --- | --- | --- |
| `name` | `string` |已声明模块|
| `version` | `a.b.c.d`（可选） |子桶的声明版本号.|

`a`,`b`和`c`必须是数字.`d`是`A-Z`,`a-z`,`0-9`和`_`的可选的阿尔法数字字符串.

如果指定了版本，构建系统会检查所使用的库版本。以下选项可以修改这些规则：

| 格式 | 含义 | 示例 | 有效版本 | 无效版本 |
| --- | --- | --- | --- | --- |
| 精确 |应用程序链接到特定版本的库| `version="1.2.3"` |版本`1.2.3`| 任何其他版本 |
| 大于或等于 |应用程序链接到匹配或超过版本的库.| `version=">=1.2.3"` | 版本 `1.2.3` 或更高版本。 | 版本 `1.2.2` 或更低版本。 |
| 悲观 |应用程序将链接到主要版本和次要版本匹配的库，但微版本必须匹配或高于指定版本。| `version="~>1.2.3"` | 版本 `1.2.3`、`1.2.4`、`1.2.5` 等 | 版本 `1.2.2`、`1.3.1` 等 |
| 任意 |构建时不检查链接库的版本。| 未指定版本属性。 | 任意 | 不适用 |

版本可以以 `>=` 为前缀，表示最低支持版本。

更多信息请参阅[可共享库](/connect-iq/core-topics/shareable-libraries/#shareable-libraries)。

通信需要启用背景许可,但身份验证不

通信需要启用背景许可,但身份验证不

只有小工具和应用程序可以拨打[Position.enableLocationEvents()](/connect-iq/api-docs/Toybox/Position/#enableLocationEvents-instance_function)

只有小工具和应用程序可以拨打[Position.enableLocationEvents()](/connect-iq/api-docs/Toybox/Position/#enableLocationEvents-instance_function)

只有小工具和应用程序可以拨打[Position.enableLocationEvents()](/connect-iq/api-docs/Toybox/Position/#enableLocationEvents-instance_function)
