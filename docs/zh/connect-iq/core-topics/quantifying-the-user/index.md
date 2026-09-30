---
title: "Quantifying User Information"
---
# 量化用户信息

关键词: 关键词: 关键词: 关键词: 关键词: 关键词

[Toybox.ActivityMonitor](/connect-iq/api-docs/Toybox/ActivityMonitor/)和[Toybox.SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/)模块允许应用程序访问Garmin可穿戴设备的活动跟踪,健康功能和历史传感器信息.

## 用户配置文件

The [Toybox.UserProfile](/connect-iq/api-docs/Toybox/UserProfile/) 提供访问 personal information about the user, including their gender, birth year, height, weight, and athletic metrics like VO2 Max and activity class. It requires the `UserProfile` permission to access.

[UserProfile.getProfile()](/connect-iq/api-docs/Toybox/UserProfile/#getProfile-instance_function)调用返回一个[UserProfile.Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/)对象,提供

| Metric | API |值| API 级别 |
| --- | --- | --- | --- |
|活动类| [Profile.activityClass](/connect-iq/api-docs/Toybox/UserProfile/Profile/#activityClass-var) |从0到100的用户活动量化| 1.0.0 |
| 平均静息心率 | [Profile.averageRestingHeartRate](/connect-iq/api-docs/Toybox/UserProfile/Profile/#averageRestingHeartRate-var) |用户七天的平均休息心率 (bpm)| 3.2.0 |
| 生理性别 | [Profile.gender](/connect-iq/api-docs/Toybox/UserProfile/Profile/#gender-var) |用户的生物性别| 1.0.0 |
| 出生年份 | [Profile.birthYear](/connect-iq/api-docs/Toybox/UserProfile/Profile/#birthYear-var) |用户出生年| 1.0.0 |
| 骑行 VO2 Max | [Profile.vo2maxCycling](/connect-iq/api-docs/Toybox/UserProfile/Profile/#vo2maxCycling-var) |用户为自行车活动的VO2 Max值| 3.3.0 |
| Height | [Profile.height](/connect-iq/api-docs/Toybox/UserProfile/Profile/#height-var) |用户的高度在厘米 (cm)| 1.0.0 |
| 静息心率 | [Profile.restingHeartRate](/connect-iq/api-docs/Toybox/UserProfile/Profile/#restingHeartRate-var) |用户目前的休息心率以每分钟 (bpm)| 1.0.0 |
| 跑步步幅 | [Profile.runningStepLength](/connect-iq/api-docs/Toybox/UserProfile/Profile/#runningStepLength-var) |用户在毫米 (mm) 中运行步骤长度| 1.0.0 |
| 跑步 VO2 Max | [Profile.vo2maxRunning](/connect-iq/api-docs/Toybox/UserProfile/Profile/#vo2maxRunning-var) |用户为运行活动的VO2 Max值| 3.3.0 |
| 睡眠时间 | [Profile.sleepTime](/connect-iq/api-docs/Toybox/UserProfile/Profile/#sleepTime-var) |用户设置的典型睡眠时间| 1.0.0 |
| 唤醒时间 | [Profile.wakeTime](/connect-iq/api-docs/Toybox/UserProfile/Profile/#wakeTime-var) |用户配置的典型警觉时间| 1.0.0 |

[Toybox.UserProfile](/connect-iq/api-docs/Toybox/UserProfile/) 提供访问 the additional data:

| Information | API |值| API 级别 |
| --- | --- | --- | --- |
| 活动历史记录 | [UserProfile.getUserActivityHistory()](/connect-iq/api-docs/Toybox/UserProfile/#getUserActivityHistory-instance_function) |用户所做的活动记录| 3.3.0 |
| 心率区间 | [UserProfile.getHeartRateZones()](/connect-iq/api-docs/Toybox/UserProfile/#getHeartRateZones-instance_function) |用户为跑步,骑自行车或游泳而定义的心率区| 1.2.6 |

## 活动监测

[Toybox.ActivityMonitor](/connect-iq/api-docs/Toybox/ActivityMonitor/) 提供访问 the current day's metrics via [ActivityMonitor.getInfo()](/connect-iq/api-docs/Toybox/ActivityMonitor/#getInfo-instance_function) which returns a [ActivityMonitor.Info](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/) object.

您还可以使用[ActivityMonitor.getHistory()](/connect-iq/api-docs/Toybox/ActivityMonitor/#getHistory-instance_function)获取一些这些指标的日常历史记录,该数据库返回了[ActivityMonitor.History](/connect-iq/api-docs/Toybox/ActivityMonitor/History/)对象的数组.这段历史的历史可以因设备而异,以及设备已被激活了多久,但7天的历史相当典型.

| Metric | API |值| API 级别 |
| --- | --- | --- | --- |
| 消耗的卡路里 | [Info.calories](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#calories-var)、[History.calories](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#calories-var) |迄今为止,当前的卡路里热量为千卡路里 (kCal)| 1.0.0 |
| 每日活动分钟数 | [Info.activeMinutesDay](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#activeMinutesDay-var)、[History.activeMinutes](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#activeMinutes-var) |当前活动日的活跃分钟数| 2.1.0 |
| 行驶距离 | [Info.distance](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#distance-var)、[History.distance](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#distance-var) |从当天中夜以后的距离在厘米 (厘米)| 1.0.0 |
| 爬升楼层数 | [Info.floorsClimbed](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsClimbed-var)、[History.floorsClimbed](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#floorsClimbed-var) |今天的楼层数量升| 2.1.0 |
| 爬升楼层数目标 | [Info.floorsClimbedGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsClimbedGoal-var)、[History.floorsClimbedGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#floorsClimbedGoal-var) |用户设定的一天爬楼数的目标| 2.1.0 |
| 下降楼层数 | [Info.floorsDescended](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsDescended-var)、[History.floorsDescended](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#floorsDescended-var) |现在的楼层数量下降了| 2.1.0 |
| 爬升米数 | [Info.metersClimbed](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#metersClimbed-var) |楼层垂直距离以米 (m)| 2.1.0 |
| 下降米数 | [Info.metersDescended](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#metersDescended-var) |楼层垂直距离降低在米 (m)| 2.1.0 |
| [移动条](https://support.garmin.com/en-US/?faq=JwIMwaMTTV0t7r0mvkdA08)级别 | [Info.moveBarLevel](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#moveBarLevel-var) |在 MOVE\_BAR\_LEVEL\_MIN 和 MOVE\_BAR\_LEVEL\_MAX 之间移动的当前水平| 1.0.0 |
| 呼吸频率 | [Info.respirationRate](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#respirationRate-var) |用户目前的呼吸速度,每分钟的呼吸量| 3.3.0 |
| Steps | [Info.steps](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#steps-var)、[History.steps](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#steps-var) |从当前一天中午开始的步骤数量| 1.0.0 |
| 步数目标 | [Info.stepGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#stepGoal-var)、[History.stepGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#stepGoal-var) |目前的步骤目标| 1.0.0 |
| Stress | [Info.stressScore](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#stressScore-var) |根据过去30秒的压力分数| 5.0.0 |
|恢复的时间| [Info.timeToRecovery](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#timeToRecovery-var) |在几个小时内,从最后一次活动中恢复的时间| 3.3.0 |
| 每周活动分钟数 | [Info.activeMinutesWeek](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#activeMinutesWeek-var) |目前周的活跃分钟数| 2.1.0 |
| 每周活动分钟数目标 | [Info.activeMinutesWeekGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#activeMinutesWeekGoal-var) |用户的每周活跃分钟目标数| 2.1.0 |
| 轮椅推动次数 | [Info.pushes](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#pushes-var) |用户轮椅的数量推| 4.2.0 |
| 轮椅推动次数目标 |  |用户的轮椅目标号码| 4.2.0 |

当轮椅模式启用时,[ActivityMonitor.Info](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/)将为[Info.steps](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#steps-var),[Info.stepGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#stepGoal-var),[Info.floorsClimbed](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsClimbed-var),[Info.floorsDescended](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsDescended-var)和[Info.floorsClimbedGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsClimbedGoal-var)设置零,而其实将设置[Info.pushes](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#pushes-var)和 .中的值.

## 传感器历史记录

*自 API 级别 2.1.0*

[Toybox.SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/)模块允许应用程序访问设备上的保存传感器历史.通过获得代码器可以访问传感器的数据.

| Function |目的| API 级别 |
| --- | --- | --- |
| [SensorHistory.getBodyBatteryHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getBodyBatteryHistory-instance_function) |获取用户身体电池样本,记录在设备上过去几个小时.| 3.3.0 |
| [SensorHistory.getHeartRateHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getHeartRateHistory-instance_function) |获取用户在设备上记录过前几个小时的心率样本.| 2.1.0 |
| [SensorHistory.getTemperatureHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getTemperatureHistory-instance_function) |根据设备上记录的温度. 无可访问同步数据.| 2.1.0 |
| [SensorHistory.getPressureHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getPressureHistory-instance_function) |根据设备上前几个小时记录的气体压力. 无可访问同步数据.| 2.1.0 |
| [SensorHistory.getElevationHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getElevationHistory-instance_function) |在设备上记录的海平面距离. 它无法访问同步数据.| 2.1.0 |
| [SensorHistory.getOxygenSaturationHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getOxygenSaturationHistory-instance_function) |获取用户在设备上记录过前几个小时的 SpO2. 这无法访问同步数据. 取决于用户是否启用MO2记录.| 3.2.0 |
| [SensorHistory.getStressHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getStressHistory-instance_function) |获取用户在设备上记录的压力. 这没有访问同步数据.| 3.3.0 |

不是所有的[Toybox.SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/)类型都可用在所有设备上.使用`has`操作符来验证能力.获取函数将返回[SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)类型.

调用[SensorHistoryIterator.next()](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/#next-instance_function)函数将通过历史值进行反复,直到数据的终点达到.当没有更多数据时,反复器将返回零.对样本间隔没有任何保证,或者要求范围将是可用的.

这个函数返回一个[SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)对象. 可以通过使用编号值`ORDER_NEWEST_FIRST`和`ORDER_OLDEST_FIRST`来调整,以首先提供最新数据值或最古老的值.

第六号的论点"我不是一个数字,我是一个自由人!"从来没有见过Garmin Connect

🎵 ...我会走五百英里 / 我会走五百英里 / 只是为了成为那个走一千英里 / 击败我的连接步骤挑战的人
