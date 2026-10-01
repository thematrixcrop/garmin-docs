---
title: "Manifest File and Permissions"
---
<a id="manifest-file-and-permissions"></a>
# Manifest 文件和权限

![](/connect-iq/resources/programmers-guide/wizard-monkey.png)

`manifest.xml` 的所有部分都可以在 Monkey C 扩展的 Manifest 编辑器中编辑。*Edit as XML* 选项可以直接访问底层定义。

## 应用属性

`application` 元素包含多个重要属性。`id` 字段是 128 位 UUID 标识符。可以使用 [UUID Generator](http://www.uuidgenerator.net/version4) 或标准工具生成唯一标识符。

`entry` 属性必须指定应用的 [Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 对象。

`name` 和 `launcherIcon` 属性必须指定应用资源中定义的资源 ID。`name` 必须引用 strings 资源中的 `string` 条目，`launcherIcon` 必须引用 bitmap 资源。更多信息请参阅 [Resources](/connect-iq/core-topics/resources/#resources)。请注意，不应在应用中重复使用图标资源；如果要在应用内部使用同一图标，请创建一个副本资源。

如果指定了 `launcherIcon`，资源编译器会自动调整资源大小以匹配产品图标尺寸。如果未指定 `launcherIcon`，系统会将默认图标编译到应用中。

`type` 字段指定正在开发的应用类型。目前 Connect IQ 支持五种应用类型：

1.  `watchface`

2.  `datafield`

3.  `widget`

4.  `watch-app`

5.  `audio-content-provider-app`


Manifest 中指定的应用类型决定应用在设备上的显示位置，以及应用可以使用的 API。

`minApiLevel` 字段指定应用兼容的最低 Connect IQ API level，用于防止应用面向不兼容的设备。创建新应用或编辑现有应用属性时，可以在 Monkey C 扩展中选择最低 API level。微版本会写入 Manifest（例如 1.2.1），但确定设备支持情况时只考虑主版本和次版本。

每个应用都必须包含一个 [Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 对象，作为应用入口点。创建项目时，Monkey C 扩展会自动生成该对象。

[Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 对象应重写 [AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function)，提供要首先推入的视图对象。返回值必须是包含视图和委托的数组，或者只包含一个 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 对象的数组：

```java
return [ new MyView(), new MyDelegate() ];
```

## 产品

Garmin 为各种使用场景提供了大量产品，Monkey C 也让开发者可以轻松面向所有 Connect IQ 兼容设备编写应用。由于无法预知未来产品是否与应用兼容，Monkey C 会要求开发者选择要支持的 Connect IQ 设备。新的 Connect IQ 兼容产品上市后，Simulator 会更新以支持这些产品，开发者可以自行决定是否支持它们。

应用支持的产品会列在 Manifest 文件的 `products` 区块中：

```xml
<iq:products>
    <iq:product id="round-watch"/>
</iq:products>
```

### 支持的活动

*自 API level 5.2.0 起可用*

API level 5.2 的设备支持安装后流程，允许用户将数据字段与活动关联。如果要过滤活动列表，可以在 Manifest 中加入活动过滤器。

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

此过滤器根据 FIT sport 和 sub-sport 标识符构建。如果未提供 sub-sport，过滤器会覆盖该 sport 下的所有子运动。可以直接使用 FIT 标识符，而不是使用常量。以下是一些示例：

| Activity | Sport | Sub-Sport |
| --- | --- | --- |
| Running (All) |  | None |
| Trail Running |  |  |
| Track Running |  |  |
| Treadmill Running |  |  |
| Indoor Running |  |  |
| Cycling (All) |  | None |
| Mountain Biking |  |  |
| Gravel Biking |  |  |
| Indoor Cycling |  |  |

## 权限

某些模块会公开用户个人信息，或提供与互联网通信的能力。要使用这些模块，必须在安装时向用户请求权限。请求权限时，需要将模块名称添加到 Manifest 文件的权限列表中。

随着 API 增加新的模块，可请求的权限也可能增加。请在 Manifest 文件中使用以下语法请求权限：

```xml
<iq:permissions>
    <iq:uses-permission id="Sensor"/>
</iq:permissions>
```

可用权限如下：

| Permission | Applicable Modules | API level | Watch Face | Data Field | Widget | App | Audio Content Provider |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ant | [Toybox.Ant](/connect-iq/api-docs/Toybox/Ant/) | 1.0.0 |  | x | x | x | x |
| Background | [Toybox.Background](/connect-iq/api-docs/Toybox/Background/) | 2.3.0 | x | x | x | x | x |
| BluetoothLowEnergy | [Toybox.BluetoothLowEnergy](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/) | 3.1.0 |  | x | x | x | x |
| Communications | [Toybox.Communications](/connect-iq/api-docs/Toybox/Communications/)、[Toybox.Authentication](/connect-iq/api-docs/Toybox/Authentication/) | 1.0.0 | x | x | x | x | x |
| ComplicationProvider | [Toybox.Complications](/connect-iq/api-docs/Toybox/Complications/) | 4.1.0 |  |  |  | x | x |
| ComplicationSubscriber | [Toybox.Complications](/connect-iq/api-docs/Toybox/Complications/) | 4.1.0 | x |  |  |  |  |
| Data Field Alert | [WatchUi.DataFieldAlert](/connect-iq/api-docs/Toybox/WatchUi/DataFieldAlert/) | 3.2.0 |  | x |  |  |  |
| Fit | [Toybox.ActivityRecording](/connect-iq/api-docs/Toybox/ActivityRecording/)、[Toybox.FitContributor](/connect-iq/api-docs/Toybox/FitContributor/) | 1.0.0 |  |  |  | x |  |
| PersistedContent | [Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/) | 2.2.0 |  |  | x | x | x |
| Positioning | [Position.getInfo()](/connect-iq/api-docs/Toybox/Position/#getInfo-instance_function)、[Position.enableLocationEvents()](/connect-iq/api-docs/Toybox/Position/#enableLocationEvents-instance_function) | 1.0.0 | x | x | x | x | x |
| Sensor | [Toybox.Sensor](/connect-iq/api-docs/Toybox/Sensor/) | 1.0.0 |  | x | x | x | x |
| SensorHistory | [Toybox.SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/) | 2.1.0 |  |  | x | x | x |
| SensorLogging | [Toybox.SensorLogging](/connect-iq/api-docs/Toybox/SensorLogging/) | 2.3.0 |  |  |  |  |  |
| UserProfile | [Toybox.UserProfile](/connect-iq/api-docs/Toybox/UserProfile/) | 1.0.0 | x | x | x | x | x |

某些产品会将活动和应用分开显示。如果应用拥有 `Fit` 权限，就会显示在 Activities 列表中。

## 语言

Connect IQ 应用可以本地化为 30 多种语言。应用支持的语言会影响应用可以在哪些地区发布。在 Manifest 中声明应用支持的语言后，导出应用到商店时会使用这些设置。更多信息请参阅 [Resources](/connect-iq/core-topics/resources/#strings)。

## 依赖项

如果应用链接到其他库，必须在 Manifest 中声明这些库：

```xml
<iq:barrels>
    <iq:depends name="Barcode" version="2.0.0"/>
</iq:barrels>
```

每个 Barrel 的选项如下：

| Option | Type | Value |
| --- | --- | --- |
| `name` | `string` | Barrel 声明的命名空间模块名称。 |
| `version` | `a.b.c.d`（可选） | Barrel 声明的版本号。 |

`a`、`b` 和 `c` 必须是数字。`d` 是可选的字母数字字符串，只能包含 `A-Z`、`a-z`、`0-9` 和 `_`。

如果指定了版本，构建系统会强制使用符合该版本的库。以下选项可以修改这些规则：

| Format | Meaning | Example | Valid Version | Invalid Version |
| --- | --- | --- | --- | --- |
| Exact | 应用链接到库的特定版本。 | `version="1.2.3"` | 版本 `1.2.3` | 任何其他版本 |
| Greater or Equal | 应用链接到版本匹配或更高的库。 | `version=">=1.2.3"` | 版本 `1.2.3` 或更高 | 版本 `1.2.2` 或更低 |
| Pessimistic | 应用链接到主版本和次版本匹配的库，但微版本必须等于或高于指定版本。 | `version="~>1.2.3"` | 版本 `1.2.3`、`1.2.4`、`1.2.5` 等 | 版本 `1.2.2`、`1.3.1` 等 |
| Whatever | 构建时不强制链接库的版本。 | 未指定 version 属性。 | 任意 | 不适用 |

版本前可以加 `>=`，表示最低支持版本。

更多信息请参阅 [Shareable Libraries](/connect-iq/core-topics/shareable-libraries/#shareable-libraries)。

Communication 需要启用 Background 权限，但 Authentication 不需要。

只有 Widget 和 App 可以调用 [Position.enableLocationEvents()](/connect-iq/api-docs/Toybox/Position/#enableLocationEvents-instance_function)。
