---
title: "Quantifying User Information"
---
# Quantifying User Information

Garmin devices collect and quantify numerous metrics about the user. Connect IQ exposes many of the collected metrics so they can be incorporated into your solutions.

The [Toybox.ActivityMonitor](/connect-iq/api-docs/Toybox/ActivityMonitor/) and [Toybox.SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/) modules allow apps to access the activity tracking, wellness features, and historical sensor information of Garmin wearable devices.

## User Profile

The [Toybox.UserProfile](/connect-iq/api-docs/Toybox/UserProfile/) 提供访问 personal information about the user, including their gender, birth year, height, weight, and athletic metrics like VO2 Max and activity class. It requires the `UserProfile` permission to access.

The [UserProfile.getProfile()](/connect-iq/api-docs/Toybox/UserProfile/#getProfile-instance_function) call returns a [UserProfile.Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/) object, which provides

| Metric | API | Value | API Level |
| --- | --- | --- | --- |
| Activity Class | [Profile.activityClass](/connect-iq/api-docs/Toybox/UserProfile/Profile/#activityClass-var) | A quantification of how active the user from 0 to 100 | 1.0.0 |
| Average Resting Heart Rate | [Profile.averageRestingHeartRate](/connect-iq/api-docs/Toybox/UserProfile/Profile/#averageRestingHeartRate-var) | The user's seven day average resting heart rate (bpm) | 3.2.0 |
| Biological Sex | [Profile.gender](/connect-iq/api-docs/Toybox/UserProfile/Profile/#gender-var) | The user's biological gender | 1.0.0 |
| Birth Year | [Profile.birthYear](/connect-iq/api-docs/Toybox/UserProfile/Profile/#birthYear-var) | The year the user was born | 1.0.0 |
| Cycling VO2 Max | [Profile.vo2maxCycling](/connect-iq/api-docs/Toybox/UserProfile/Profile/#vo2maxCycling-var) | The user's VO2 Max value for a cycling activity | 3.3.0 |
| Height | [Profile.height](/connect-iq/api-docs/Toybox/UserProfile/Profile/#height-var) | The user's height in centimeters (cm) | 1.0.0 |
| Resting Heart Rate | [Profile.restingHeartRate](/connect-iq/api-docs/Toybox/UserProfile/Profile/#restingHeartRate-var) | The user's current resting heart rate in beats per minute (bpm) | 1.0.0 |
| Running Step Length | [Profile.runningStepLength](/connect-iq/api-docs/Toybox/UserProfile/Profile/#runningStepLength-var) | The user's running step length in millimeters (mm) | 1.0.0 |
| Running VO2 Max | [Profile.vo2maxRunning](/connect-iq/api-docs/Toybox/UserProfile/Profile/#vo2maxRunning-var) | The user's VO2 Max value for a running activity | 3.3.0 |
| Sleep Time | [Profile.sleepTime](/connect-iq/api-docs/Toybox/UserProfile/Profile/#sleepTime-var) | Typical sleep time as configured by the user | 1.0.0 |
| Wake Time | [Profile.wakeTime](/connect-iq/api-docs/Toybox/UserProfile/Profile/#wakeTime-var) | Typical wake time as configured by the user | 1.0.0 |

[Toybox.UserProfile](/connect-iq/api-docs/Toybox/UserProfile/) 提供访问 the additional data:

| Information | API | Value | API Level |
| --- | --- | --- | --- |
| Activity History | [UserProfile.getUserActivityHistory()](/connect-iq/api-docs/Toybox/UserProfile/#getUserActivityHistory-instance_function) | Record of the activities the user has done | 3.3.0 |
| Heart Rate Zones | [UserProfile.getHeartRateZones()](/connect-iq/api-docs/Toybox/UserProfile/#getHeartRateZones-instance_function) | The user's defined heart rate zones for running, cycling, or swimming | 1.2.6 |

## Activity Monitoring

[Toybox.ActivityMonitor](/connect-iq/api-docs/Toybox/ActivityMonitor/) 提供访问 the current day's metrics via [ActivityMonitor.getInfo()](/connect-iq/api-docs/Toybox/ActivityMonitor/#getInfo-instance_function) which returns a [ActivityMonitor.Info](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/) object.

You can also get a daily history of some of these metrics with [ActivityMonitor.getHistory()](/connect-iq/api-docs/Toybox/ActivityMonitor/#getHistory-instance_function) which returns an array of [ActivityMonitor.History](/connect-iq/api-docs/Toybox/ActivityMonitor/History/) objects. How far back this history goes can vary by device as well as how long the device has been turned on, but a seven day history is fairly typical.

| Metric | API | Value | API Level |
| --- | --- | --- | --- |
| Calories Burned | [Info.calories](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#calories-var), [History.calories](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#calories-var) | The calories burned so far for the current day in kilocalories (kCal) | 1.0.0 |
| Daily Active Minutes | [Info.activeMinutesDay](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#activeMinutesDay-var), [History.activeMinutes](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#activeMinutes-var) | The number of active minutes for the current day | 2.1.0 |
| Distance Traveled | [Info.distance](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#distance-var), [History.distance](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#distance-var) | The distance traveled since midnight of the current day in centimeters (cm) | 1.0.0 |
| Floors Climbed | [Info.floorsClimbed](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsClimbed-var), [History.floorsClimbed](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#floorsClimbed-var) | The number of floors climbed for the current day | 2.1.0 |
| Floors Climbed Goal | [Info.floorsClimbedGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsClimbedGoal-var), [History.floorsClimbedGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#floorsClimbedGoal-var) | The goal the user has set for the number of floors climbed in a day | 2.1.0 |
| Floors Descended | [Info.floorsDescended](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsDescended-var), [History.floorsDescended](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#floorsDescended-var) | The number of floors descended for the current day | 2.1.0 |
| Meters Climbed | [Info.metersClimbed](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#metersClimbed-var) | The vertical distance of floors climbed in meters (m) | 2.1.0 |
| Meters Descended | [Info.metersDescended](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#metersDescended-var) | The vertical distance of floors descended in meters (m) | 2.1.0 |
| [Move Bar](https://support.garmin.com/en-US/?faq=JwIMwaMTTV0t7r0mvkdA08) Level | [Info.moveBarLevel](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#moveBarLevel-var) | The current level of the move bar between MOVE\_BAR\_LEVEL\_MIN and MOVE\_BAR\_LEVEL\_MAX | 1.0.0 |
| Respiration Rate | [Info.respirationRate](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#respirationRate-var) | Current respiration rate for the user, in breaths per minute | 3.3.0 |
| Steps | [Info.steps](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#steps-var), [History.steps](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#steps-var) | The step count since midnight of the current day in number of steps | 1.0.0 |
| Step Goal | [Info.stepGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#stepGoal-var), [History.stepGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#stepGoal-var) | The step goal for the current day in number of steps | 1.0.0 |
| Stress | [Info.stressScore](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#stressScore-var) | The current stress score based on the last 30 seconds | 5.0.0 |
| Time to Recovery | [Info.timeToRecovery](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#timeToRecovery-var) | Time to recovery from the last activity, in hours | 3.3.0 |
| Weekly Active Minutes | [Info.activeMinutesWeek](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#activeMinutesWeek-var) | The number of active minutes for the current week | 2.1.0 |
| Weekly Active Minutes Goal | [Info.activeMinutesWeekGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#activeMinutesWeekGoal-var) | The user's goal number of weekly active minutes | 2.1.0 |
| Wheelchair Pushes | [Info.pushes](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#pushes-var) | The user's number of wheelchair pushes | 4.2.0 |
| Wheelchair Pushes Goal |  | The user's goal number of wheelchair pushes | 4.2.0 |

When wheelchair mode is enabled, [ActivityMonitor.Info](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/) will have zeroes for [Info.steps](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#steps-var), [Info.stepGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#stepGoal-var), [Info.floorsClimbed](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsClimbed-var), [Info.floorsDescended](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsDescended-var) and [Info.floorsClimbedGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsClimbedGoal-var) and will instead have values in [Info.pushes](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#pushes-var) and .

## Sensor History

*Since API level 2.1.0*

The [Toybox.SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/) module allows the app to access saved sensor history on the device. Data from sensors can be accessed by getting an iterator.

| Function | Purpose | API Level |
| --- | --- | --- |
| [SensorHistory.getBodyBatteryHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getBodyBatteryHistory-instance_function) | Get the user's body battery samples as recorded over the previous hours on the device. This does not have access to synced data. | 3.3.0 |
| [SensorHistory.getHeartRateHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getHeartRateHistory-instance_function) | Get the user's heart rate samples as recorded over the previous hours on the device. This does not have access to synced data. | 2.1.0 |
| [SensorHistory.getTemperatureHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getTemperatureHistory-instance_function) | Get the temperature as recorded over the previous hours on the device. This does not have access to synced data. | 2.1.0 |
| [SensorHistory.getPressureHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getPressureHistory-instance_function) | Get the barometric pressure as recorded over the previous hours on the device. This does not have access to synced data. | 2.1.0 |
| [SensorHistory.getElevationHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getElevationHistory-instance_function) | Get the distance from sea level as recorded over the previous hours on the device. This does not have access to synced data. | 2.1.0 |
| [SensorHistory.getOxygenSaturationHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getOxygenSaturationHistory-instance_function) | Get the user's SpO2 as recorded over the previous hours on the device. This does not have access to synced data. Depends on if user has enabled MO2 recording. | 3.2.0 |
| [SensorHistory.getStressHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getStressHistory-instance_function) | Get the user's stress as recorded over the previous hours on the device. This does not have access to synced data. | 3.3.0 |

Not all [Toybox.SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/) types are available on all devices. Capabilities should be validated using the `has` operator. The get functions will return a [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) type.

Calling the [SensorHistoryIterator.next()](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/#next-instance_function) function will iterate through the history values until the end of the data is reached. When there is no more data the iterator will return null. There are no guarantees on the sample interval or that the requested range will be available.

This function returns a [SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) object. The iterator can be adjusted to provide the newest data values first or the oldest values first by using the enumeration values `ORDER_NEWEST_FIRST` and `ORDER_OLDEST_FIRST`.

Number 6's argument of "I am not a number, I am a free man!" never met Garmin Connect

🎵 ...and I would walk five hundred miles / and I would walk five hundred more / just to be the man who walks a thousand miles / and beats my Connect step challenge 🎵
