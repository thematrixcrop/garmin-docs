---
title: "Class: Toybox.Activity.SplitInfo"
---
# 类：Toybox.Activity.SplitInfo

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Activity.SplitInfo](/connect-iq/api-docs/Toybox/Activity/SplitInfo/)


[show all](#)

## 概述

The SplitInfo class contains information about the current split

This information is provided via the data field onTimerSplit API.

Since:

API 级别 5.2.2

## 常量摘要

### SplitType

Since:

API 级别 5.2.2

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SPLIT\_TYPE\_PACE\_PRO\_SPLIT | 0 |
API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_ASCENT\_SPLIT | 1 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_DESCENT\_SPLIT | 2 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_INTERVAL\_ACTIVE | 3 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_INTERVAL\_REST | 4 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_INTERVAL\_WARMUP | 5 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_INTERVAL\_COOLDOWN | 6 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_INTERVAL\_RECOVERY | 7 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_INTERVAL\_OTHER | 8 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_CLIMB\_ACTIVE | 9 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_CLIMB\_REST | 10 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_SURF\_ACTIVE | 11 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_RUN\_ACTIVE | 12 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_RUN\_REST | 13 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_WORKOUT\_ROUND | 14 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_LIVE\_EVENT\_SPLIT | 15 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_POWER\_GUIDANCE\_SPLIT | 16 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_RWD\_RUN | 17 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_RWD\_WALK | 18 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_CLIMB\_PRO\_CYCLING\_CLIMB | 19 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_CLIMB\_PRO\_CYCLING\_CLIMB\_SECTION | 20 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_WINDSURF\_ACTIVE | 21 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_RWD\_STAND | 22 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_TRANSITION | 23 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_SWIM\_STRAIGHTNESS | 25 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_ROUND\_ACTIVE | 26 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_ROUND\_REST | 27 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_SKI\_LIFT\_SPLIT | 28 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_SKI\_RUN\_SPLIT | 29 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_OBSTACLE | 30 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_CYCLING\_GROUP\_RIDE | 31 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_DIVE | 32 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_DIVE\_SECTION | 33 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_SURFACE\_TYPE\_UNPAVED | 34 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_MARKER\_MILE | 38 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_MARKER\_KILOMETER | 39 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_MARKER\_HALF\_MARATHON | 40 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_MARKER\_MANUAL | 41 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_SURFACE\_TYPE\_PAVED | 42 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_TIMING\_GATE | 43 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_TIMING\_RUN | 44 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_TACX\_COURSE | 45 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_DOWNHILL\_RUN | 46 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_DOWNHILL\_LIFT | 47 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_SKI\_RUN\_SPLIT\_SECTION | 48 |

API 级别 5.2.2

 |  |
| SPLIT\_TYPE\_INVALID | \-1 |

API 级别 5.2.2

 |  |

## 实例成员摘要 [collapse](#)

- [**averageSpeed**](#averageSpeed-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    分段平均速度，单位为米/秒。

- [**elapsedTime**](#elapsedTime-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    分段的经过时间，单位为毫秒。

- [**maxSpeed**](#maxSpeed-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    分段的最大速度，单位为米每秒。

- [**splitDistance**](#splitDistance-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    Split distance in meters.

- [**splitType**](#splitType-var) as [SplitInfo.SplitType](/connect-iq/api-docs/Toybox/Activity/SplitInfo/#SplitType-module) or **Null**

    Type of split.

- [**timerTime**](#timerTime-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    Timer time for split in milliseconds.

- [**totalAscent**](#totalAscent-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    Split ascent in meters.

- [**totalDescent**](#totalDescent-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    Split descent in meters.


## 实例属性详情

### var averageSpeed as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

该分段的平均速度（米/秒）

Since:

API 级别 5.2.2

Returns:

- 该分段的平均速度（米/秒）


### var elapsedTime as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

分段的经过时间，单位为毫秒

Since:

API 级别 5.2.2

Returns:

- 经过时间，单位为毫秒


### var maxSpeed as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

分段的最大速度，单位为米每秒

Since:

API 级别 5.2.2

Returns:

- 该分段的平均速度（米/秒）


### var splitDistance as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

以米为单位的分段距离

Since:

API 级别 5.2.2

Returns:

- 以米为单位的分段距离


### var splitType as [SplitInfo.SplitType](/connect-iq/api-docs/Toybox/Activity/SplitInfo/#SplitType-module) or **Null**

Type of split

Since:

API 级别 5.2.2

Returns:

- Split type identifier


### var timerTime as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

Timer time for split in milliseconds

Since:

API 级别 5.2.2

Returns:

- Timer time in milliseconds


### var totalAscent as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

Split ascent in meters

Since:

API 级别 5.2.2

Returns:

- 分段爬升高度，单位为米


### var totalDescent as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

Split descent in meters

Since:

API 级别 5.2.2

Returns:

- 分段的下降高度，单位为米
