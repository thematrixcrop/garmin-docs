---
title: "定位"
---
<a id="positioning"></a>
# 定位

![](/connect-iq/resources/programmers-guide/archy-monkey.png)

Monkey C 可以访问可穿戴设备提供的传感器，其中可能包括 GPS、高度计、温度计以及受支持的 ANT 传感器。

| API | 用途 | API 级别 |
| --- | --- | --- |
| [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) | 坐标的抽象表示 | 1.0.0 |
| [Position.enableLocationEvents()](/connect-iq/api-docs/Toybox/Position/#enableLocationEvents-instance_function) | 启用 GPS，并向回调函数发送位置更新事件。需要 `Position` 权限。 | 1.0.0 |
| [Position.getInfo()](/connect-iq/api-docs/Toybox/Position/#getInfo-instance_function) | 查询系统中的位置信息 | 1.0.0 |

## 位置

[Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) 是坐标的抽象表示。它可以提供弧度或十进制度数形式的坐标，也可以将坐标转换为 Garmin 系统支持的格式。[Toybox.Position](/connect-iq/api-docs/Toybox/Position/) 模块还提供字符串解析接口，可将多种坐标格式转换为 [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) 对象。

## 位置事件

要启用 GPS，请调用 [Position.enableLocationEvents()](/connect-iq/api-docs/Toybox/Position/#enableLocationEvents-instance_function)。要注册位置监听器，可以使用 [Object.method()](/connect-iq/api-docs/Toybox/Lang/Object/#method-instance_function) 创建 [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/) 回调：

```java
function onPosition( info as Position.Info ) as Void {
    Sys.println( "Position " + info.position.toGeoString( Position.GEO_DM ) );
}

function initializeListener() as Void {
    Position.enableLocationEvents( Position.LOCATION_CONTINUOUS, method( :onPosition ) );
}
```

所有位置信息都会发送到 [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/) 对象中。也可以使用 [Position.getInfo()](/connect-iq/api-docs/Toybox/Position/#getInfo-instance_function) 获取 [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/) 实例。

更多信息请参阅 SDK 随附的 `PositionSample` 示例应用。

### 多频段定位

有时需要控制设备使用哪种定位方案。[Position.enableLocationEvents()](/connect-iq/api-docs/Toybox/Position/#enableLocationEvents-instance_function) 的 `:configuration` 选项可以指定要使用的定位方案：

| 配置 | GPS 方案 | API 级别 |
| --- | --- | --- |
| [`CONFIGURATION_GPS`](/connect-iq/api-docs/Toybox/Position/#Configuration-module) | GPS L1 | 3.3.6 |
| [`CONFIGURATION_GPS_GLONAS`](/connect-iq/api-docs/Toybox/Position/#Configuration-module) | GPS L1、GLONASS | 3.3.6 |
| [`CONFIGURATION_GPS_GALILEO`](/connect-iq/api-docs/Toybox/Position/#Configuration-module) | GPS L1、GALILEO L1 | 3.3.6 |
| [`CONFIGURATION_GPS_BEIDOU`](/connect-iq/api-docs/Toybox/Position/#Configuration-module) | GPS L1、BEIDOU L1 | 3.3.6 |
| [`CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1`](/connect-iq/api-docs/Toybox/Position/#Configuration-module) | GPS L1、GLONASS、GALILEO L1、BEIDOU L1 | 3.3.6 |
| [`CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1_L5`](/connect-iq/api-docs/Toybox/Position/#Configuration-module) | GPS L1、GLONASS、GALILEO L1、BEIDOU L1、GPS L5、GALILEO L5、BEIDOU L5 | 3.3.6 |
| [`CONFIGURATION_SAT_IQ`](/connect-iq/api-docs/Toybox/Position/#Configuration-module) | 动态选择以获得最佳功耗的方案 | 3.3.6 |

并非所有设备都支持每一种 GPS 配置。可以使用 [Position.hasConfigurationSupport()](/connect-iq/api-docs/Toybox/Position/#hasConfigurationSupport-instance_function) 判断设备是否支持指定配置。
