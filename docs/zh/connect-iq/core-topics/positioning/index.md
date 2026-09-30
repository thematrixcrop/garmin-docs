---
title: "Positioning"
---
# 定位

![](/connect-iq/resources/programmers-guide/archy-monkey.png)

Monkey C 可以访问可穿戴设备上的传感器，包括 GPS、高度计、温度计和受支持的 ANT 传感器。

| API |目的| API 级别 |
| --- | --- | --- |
| [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) |一个坐标的抽象| 1.0.0 |
| [Position.enableLocationEvents()](/connect-iq/api-docs/Toybox/Position/#enableLocationEvents-instance_function) |允许启用GPS和接收位置更新事件进行回调.需要`Position`许可.| 1.0.0 |
| [Position.getInfo()](/connect-iq/api-docs/Toybox/Position/#getInfo-instance_function) |查询系统中的位置信息| 1.0.0 |

## 位置

[Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)是坐标的抽象.它揭示了在半径或十度度中检索坐标的能力,然后提供了转换到Garmin系统支持的坐标格式的方法.[Toybox.Position](/connect-iq/api-docs/Toybox/Position/)模块还揭示了串解析接口,将各种坐标格式转换为[Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)对象.

## 位置事件

为了启用GPS调用[Position.enableLocationEvents()](/connect-iq/api-docs/Toybox/Position/#enableLocationEvents-instance_function)方法. 为了记录位置听器,使用[Object.method()](/connect-iq/api-docs/Toybox/Lang/Object/#method-instance_function)调用来创建[Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)回调:

```java
function onPosition( info as Position.Info ) as Void {
    Sys.println( "Position " + info.position.toGeoString( Position.GEO_DM ) );
}

function initializeListener() as Void {
    Position.enableLocationEvents( Position.LOCATION_CONTINUOUS, method( :onPosition ) );
}
```

所有位置信息将被发送到[Position.Info](/connect-iq/api-docs/Toybox/Position/Info/)对象中.您还可以使用[Position.getInfo()](/connect-iq/api-docs/Toybox/Position/#getInfo-instance_function)获取[Position.Info](/connect-iq/api-docs/Toybox/Position/Info/)实例.

查看与SDK共享的`PositionSample`样本应用.

### 多频段

有时你可能想要控制使用的定位解决方案.[Position.enableLocationEvents()](/connect-iq/api-docs/Toybox/Position/#enableLocationEvents-instance_function)的`:configuration`选项允许你指定你想要使用的定位解决方案:

| Configuration | GPS 定位结果 | API 级别 |
| --- | --- | --- |
| [`CONFIGURATION_GPS`](/connect-iq/api-docs/Toybox/Position/#Configuration-module) | GPS L1 | 3.3.6 |
| [`CONFIGURATION_GPS_GLONAS`](/connect-iq/api-docs/Toybox/Position/#Configuration-module) | GPS L1、GLONASS | 3.3.6 |
| [`CONFIGURATION_GPS_GALILEO`](/connect-iq/api-docs/Toybox/Position/#Configuration-module) | GPS L1、GALILEO L1 | 3.3.6 |
| [`CONFIGURATION_GPS_BEIDOU`](/connect-iq/api-docs/Toybox/Position/#Configuration-module) | GPS L1、BEIDOU L1 | 3.3.6 |
| [`CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1`](/connect-iq/api-docs/Toybox/Position/#Configuration-module) | GPS L1、GLONASS、GALILEO L1、BEIDOU L1 | 3.3.6 |
| [`CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1_L5`](/connect-iq/api-docs/Toybox/Position/#Configuration-module) | GPS L1、GLONASS、GALILEO L1、BEIDOU L1、GPS L5、GALILEO L5、BEIDOU L5 | 3.3.6 |
| [`CONFIGURATION_SAT_IQ`](/connect-iq/api-docs/Toybox/Position/#Configuration-module) |动态选择的解决方案,以实现最佳功率使用| 3.3.6 |

不是每个设备都支持每个GPS配置.您可以使用[Position.hasConfiguration支持()](/connect-iq/api-docs/Toybox/Position/#hasConfiguration支持-instance_function)来确定设备是否支持特定配置.
