---
title: "Activity Control"
---
# 活动控制

*自 API 级别 5.2.0 起支持*

使用 [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function) 可以将用户从应用程序切换到包含已下载内容的活动。[DataField.setWorkout()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#setWorkout-instance_function) 和 [DataField.routeTo()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#routeTo-instance_function) 函数允许数据字段直接更新活动的当前训练或路线。

这些 API 需要 `ActivityControl` 权限：

| 函数或类 | 用途 | API 版本 |
| --- | --- | --- |
| [DataField.routeTo()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#routeTo-instance_function) | 更改活动的当前路线。接收 [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) 或 [PersistedContent.Waypoint](/connect-iq/api-docs/Toybox/PersistedContent/Waypoint/) 对象。 | 5.2.0 |
| [DataField.setWorkout()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#setWorkout-instance_function) | 更改活动的当前训练。接收 [PersistedContent.Workout](/connect-iq/api-docs/Toybox/PersistedContent/Workout/) 或由 [Activity.WorkoutStepInfo](/connect-iq/api-docs/Toybox/Activity/WorkoutStepInfo/) 对象组成的数组。 | 5.2.0 |
