---
title: "Activity Control"
---
# Activity Control

*Since API 5.2.0*

Using [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function) 允许应用 transition the user to an activity with downloaded content. The [DataField.setWorkout()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#setWorkout-instance_function) and [DataField.routeTo()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#routeTo-instance_function) functions allow a data field to directly update the current workout or route of an activity.

这些API需要`ActivityControl`许可:

|函数或类型|目的|应用程序版本|
| --- | --- | --- |
| [DataField.routeTo()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#routeTo-instance_function) |改变一个活动的当前路线. 采用[Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)或[PersistedContent.Waypoint](/connect-iq/api-docs/Toybox/PersistedContent/Waypoint/)对象.| 5.2.0 |
| [DataField.setWorkout()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#setWorkout-instance_function) |改变一个活动的当前训练. 采用[PersistedContent.Workout](/connect-iq/api-docs/Toybox/PersistedContent/Workout/)或[Activity.WorkoutStepInfo](/connect-iq/api-docs/Toybox/Activity/WorkoutStepInfo/)对象的阵列.| 5.2.0 |
