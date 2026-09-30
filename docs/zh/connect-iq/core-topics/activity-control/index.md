---
title: "Activity Control"
---
# 活动控制

*自 API 5.2.0*

使用 [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function) 可以将用户从应用程序切换到包含已下载内容的活动。[DataField.setWorkout()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#setWorkout-instance_function) 和 [DataField.routeTo()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#routeTo-instance_function) 函数允许数据字段直接更新活动的当前训练或路线。

这些API需要`ActivityControl`许可:

|函数或类型|目的|应用程序版本|
| --- | --- | --- |
| [DataField.routeTo()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#routeTo-instance_function) |改变一个活动的当前路线. 采用[Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)或[PersistedContent.Waypoint](/connect-iq/api-docs/Toybox/PersistedContent/Waypoint/)对象.| 5.2.0 |
| [DataField.setWorkout()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#setWorkout-instance_function) |改变一个活动的当前训练. 采用[PersistedContent.Workout](/connect-iq/api-docs/Toybox/PersistedContent/Workout/)或[Activity.WorkoutStepInfo](/connect-iq/api-docs/Toybox/Activity/WorkoutStepInfo/)对象的阵列.| 5.2.0 |
