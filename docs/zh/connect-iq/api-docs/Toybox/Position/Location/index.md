---
title: "Class: Toybox.Position.Location"
---
# 类：Toybox.Position.Location

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)


[show all](#)

## 概述

The Location object represents a specific position.

Location 对象提供了以各种格式获取位置坐标的方法。

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**getProjectedLocation**](#getProjectedLocation-instance_function)(angle as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), distance as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)

    获取相对于当前位置按给定距离和角度偏移的 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 对象。

- [**initialize**](#initialize-instance_function)(options as { :latitude as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :longitude as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :format as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) })

    构造函数，根据一组坐标创建 Location。

- [**toDegrees**](#toDegrees-instance_function)() as \[ [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) \]

    获取 Location 对象以度为单位的坐标。

- [**toGeoString**](#toGeoString-instance_function)(format as [Position.CoordinateFormat](/connect-iq/api-docs/Toybox/Position/#CoordinateFormat-module)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    获取 Location 对象坐标的 String 表示形式。

- [**toRadians**](#toRadians-instance_function)() as \[ [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) \]

    获取 Location 对象以弧度为单位的坐标。


## 实例方法详情

### **getProjectedLocation(angle as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), distance as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)

获取相对于当前位置按给定距离和角度偏移的 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 对象。

Parameters:

- angle — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

    The angle in radians from north.

- distance — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

    The distance from the current position in meters (m).


Returns:

- [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) —

    The projected location.


Since:

API 级别 3.0.0

### **initialize(options as { :latitude as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :longitude as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :format as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) })**

构造函数，根据一组坐标创建 Location。

Parameters:

- options — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    选项数组

- :latitude — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The latitude

- :longitude — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The longitude

- :format — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

        The format of the provided latitude and longitude as one of three possible values:

- :degrees

- :radians

- :semicircles



Example:

```
using Toybox.Position;
var myLocation = new Position.Location(
    {
        :latitude => 38.856147,
        :longitude => -94.800953,
        :format => :degrees
    }
);
```

Since:

API 级别 1.0.0

### **toDegrees()** as \[ [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) \]

获取 Location 对象以度为单位的坐标。

Example:

```
using Toybox.Position;
using Toybox.System;
Position.enableLocationEvents(Position.LOCATION_ONE_SHOT, method(:onPosition));

function onPosition(info) {
    var myLocation = info.position.toDegrees();
    System.println(myLocation[0]); // latitude (e.g. 38.856147)
    System.println(myLocation[1]); // longitude (e.g -94.800953)
}
```

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    An Array containing the latitude and longitude as [Doubles](/connect-iq/api-docs/Toybox/Lang/Double/) in a degree format


Since:

API 级别 1.0.0

### **toGeoString(format as [Position.CoordinateFormat](/connect-iq/api-docs/Toybox/Position/#CoordinateFormat-module))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

获取 Location 对象坐标的 String 表示形式。

Parameters:

- format — ([Position.CoordinateFormat](/connect-iq/api-docs/Toybox/Position/#CoordinateFormat-module)) —

    一个 Position.GEO\_\* 值


Example:

```
using Toybox.Position;
using Toybox.System;
var myLocation = new Position.Location(
    {
        :latitude => 38.856147,
        :longitude => -94.800953,
        :format => :degrees
    }
);
var locString = myLocation.toGeoString(Position.GEO_DMS); // N 38 51'22.13" W 94 45' 3.44"
```

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    采用指定格式的格式化坐标 String


Since:

API 级别 1.0.0

### **toRadians()** as \[ [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) \]

获取 Location 对象以弧度为单位的坐标。

Example:

```
using Toybox.Position;
using Toybox.System;
Position.enableLocationEvents(Position.LOCATION_ONE_SHOT, method(:onPosition));

function onPosition(info) {
    var myLocation = info.position.toRadians();
    System.println(myLocation[0]); // latitude (e.g. 0.678197)
    System.println(myLocation[1]); // longitude (e.g -1.654588)
}
```

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    An Array containing latitude and longitude as [Doubles](/connect-iq/api-docs/Toybox/Lang/Double/) in a radian format


Since:

API 级别 1.0.0
