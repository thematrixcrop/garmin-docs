---
title: "Activity Control"
---
# Activity Control

*Since API 5.2.0*

Using [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function) allows apps to transition the user to an activity with downloaded content. The [DataField.setWorkout()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#setWorkout-instance_function) and [DataField.routeTo()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#routeTo-instance_function) functions allow a data field to directly update the current workout or route of an activity.

These APIs require the `ActivityControl` permission:

| Function or Class | Purpose | API Version |
| --- | --- | --- |
| [DataField.routeTo()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#routeTo-instance_function) | Change the current route of an activity. Takes [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) or [PersistedContent.Waypoint](/connect-iq/api-docs/Toybox/PersistedContent/Waypoint/) objects. | 5.2.0 |
| [DataField.setWorkout()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#setWorkout-instance_function) | Change the current workout of an activity. Takes a [PersistedContent.Workout](/connect-iq/api-docs/Toybox/PersistedContent/Workout/) or an array of [Activity.WorkoutStepInfo](/connect-iq/api-docs/Toybox/Activity/WorkoutStepInfo/) objects. | 5.2.0 |
