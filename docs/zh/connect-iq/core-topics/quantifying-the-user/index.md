---
title: "量化用户信息"
---
# 量化用户信息

Garmin 设备会收集并量化大量用户指标。Connect IQ 提供其中许多指标，应用可以将它们整合到自己的解决方案中。

[Toybox.ActivityMonitor](/connect-iq/api-docs/Toybox/ActivityMonitor/) 和 [Toybox.SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/) 模块允许应用访问 Garmin 可穿戴设备的活动跟踪、健康功能和历史传感器信息。

## 用户配置文件

[Toybox.UserProfile](/connect-iq/api-docs/Toybox/UserProfile/) 提供用户个人信息，包括性别、出生年份、身高、体重，以及最大摄氧量（VO2 Max）和活动等级等运动指标。访问这些信息需要 `UserProfile` 权限。

[UserProfile.getProfile()](/connect-iq/api-docs/Toybox/UserProfile/#getProfile-instance_function) 返回一个 [UserProfile.Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/) 对象，其中包含以下信息：

| 指标 | API | 值 | API level |
| --- | --- | --- | --- |
| 活动等级 | [Profile.activityClass](/connect-iq/api-docs/Toybox/UserProfile/Profile/#activityClass-var) | 0 到 100 的用户活动量化值 | 1.0.0 |
| 平均静息心率 | [Profile.averageRestingHeartRate](/connect-iq/api-docs/Toybox/UserProfile/Profile/#averageRestingHeartRate-var) | 用户七天的平均静息心率（bpm） | 3.2.0 |
| 生理性别 | [Profile.gender](/connect-iq/api-docs/Toybox/UserProfile/Profile/#gender-var) | 用户的生理性别 | 1.0.0 |
| 出生年份 | [Profile.birthYear](/connect-iq/api-docs/Toybox/UserProfile/Profile/#birthYear-var) | 用户出生的年份 | 1.0.0 |
| 骑行 VO2 Max | [Profile.vo2maxCycling](/connect-iq/api-docs/Toybox/UserProfile/Profile/#vo2maxCycling-var) | 用户骑行活动的 VO2 Max 值 | 3.3.0 |
| 身高 | [Profile.height](/connect-iq/api-docs/Toybox/UserProfile/Profile/#height-var) | 用户的身高，单位为厘米（cm） | 1.0.0 |
| 静息心率 | [Profile.restingHeartRate](/connect-iq/api-docs/Toybox/UserProfile/Profile/#restingHeartRate-var) | 用户当前的静息心率，单位为每分钟心跳次数（bpm） | 1.0.0 |
| 跑步步长 | [Profile.runningStepLength](/connect-iq/api-docs/Toybox/UserProfile/Profile/#runningStepLength-var) | 用户跑步时的步长，单位为毫米（mm） | 1.0.0 |
| 跑步 VO2 Max | [Profile.vo2maxRunning](/connect-iq/api-docs/Toybox/UserProfile/Profile/#vo2maxRunning-var) | 用户跑步活动的 VO2 Max 值 | 3.3.0 |
| 睡眠时间 | [Profile.sleepTime](/connect-iq/api-docs/Toybox/UserProfile/Profile/#sleepTime-var) | 用户配置的典型睡眠时间 | 1.0.0 |
| 起床时间 | [Profile.wakeTime](/connect-iq/api-docs/Toybox/UserProfile/Profile/#wakeTime-var) | 用户配置的典型起床时间 | 1.0.0 |

[Toybox.UserProfile](/connect-iq/api-docs/Toybox/UserProfile/) 还提供以下数据：

| 信息 | API | 值 | API level |
| --- | --- | --- | --- |
| 活动历史 | [UserProfile.getUserActivityHistory()](/connect-iq/api-docs/Toybox/UserProfile/#getUserActivityHistory-instance_function) | 用户完成过的活动记录 | 3.3.0 |
| 心率区间 | [UserProfile.getHeartRateZones()](/connect-iq/api-docs/Toybox/UserProfile/#getHeartRateZones-instance_function) | 用户为跑步、骑行或游泳定义的心率区间 | 1.2.6 |

## 活动监测

[Toybox.ActivityMonitor](/connect-iq/api-docs/Toybox/ActivityMonitor/) 通过 [ActivityMonitor.getInfo()](/connect-iq/api-docs/Toybox/ActivityMonitor/#getInfo-instance_function) 提供当天指标，该方法返回 [ActivityMonitor.Info](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/) 对象。

还可以使用 [ActivityMonitor.getHistory()](/connect-iq/api-docs/Toybox/ActivityMonitor/#getHistory-instance_function) 获取部分指标的每日历史记录。该方法返回 [ActivityMonitor.History](/connect-iq/api-docs/Toybox/ActivityMonitor/History/) 对象数组。历史记录范围因设备和设备开机时长而异，但通常可获得约 7 天的历史。

| 指标 | API | 值 | API level |
| --- | --- | --- | --- |
| 消耗的卡路里 | [Info.calories](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#calories-var)、[History.calories](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#calories-var) | 当天截至目前消耗的卡路里，单位为千卡（kCal） | 1.0.0 |
| 每日活动分钟数 | [Info.activeMinutesDay](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#activeMinutesDay-var)、[History.activeMinutes](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#activeMinutes-var) | 当天的活动分钟数 | 2.1.0 |
| 行驶距离 | [Info.distance](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#distance-var)、[History.distance](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#distance-var) | 当天午夜以来行驶的距离，单位为厘米（cm） | 1.0.0 |
| 爬升楼层数 | [Info.floorsClimbed](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsClimbed-var)、[History.floorsClimbed](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#floorsClimbed-var) | 当天爬升的楼层数 | 2.1.0 |
| 爬升楼层目标 | [Info.floorsClimbedGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsClimbedGoal-var)、[History.floorsClimbedGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#floorsClimbedGoal-var) | 用户设定的每日爬升楼层目标 | 2.1.0 |
| 下降楼层数 | [Info.floorsDescended](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsDescended-var)、[History.floorsDescended](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#floorsDescended-var) | 当天下降的楼层数 | 2.1.0 |
| 爬升米数 | [Info.metersClimbed](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#metersClimbed-var) | 爬升楼层的垂直距离，单位为米（m） | 2.1.0 |
| 下降米数 | [Info.metersDescended](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#metersDescended-var) | 下降楼层的垂直距离，单位为米（m） | 2.1.0 |
| [移动条](https://support.garmin.com/en-US/?faq=JwIMwaMTTV0t7r0mvkdA08)等级 | [Info.moveBarLevel](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#moveBarLevel-var) | MOVE\_BAR\_LEVEL\_MIN 到 MOVE\_BAR\_LEVEL\_MAX 之间的当前移动条等级 | 1.0.0 |
| 呼吸频率 | [Info.respirationRate](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#respirationRate-var) | 用户当前的呼吸频率，单位为每分钟呼吸次数 | 3.3.0 |
| 步数 | [Info.steps](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#steps-var)、[History.steps](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#steps-var) | 当天午夜以来的步数 | 1.0.0 |
| 步数目标 | [Info.stepGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#stepGoal-var)、[History.stepGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/History/#stepGoal-var) | 当天的步数目标 | 1.0.0 |
| 压力 | [Info.stressScore](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#stressScore-var) | 根据过去 30 秒计算的当前压力分数 | 5.0.0 |
| 恢复时间 | [Info.timeToRecovery](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#timeToRecovery-var) | 从上一次活动恢复所需的时间，单位为小时 | 3.3.0 |
| 每周活动分钟数 | [Info.activeMinutesWeek](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#activeMinutesWeek-var) | 当周的活动分钟数 | 2.1.0 |
| 每周活动分钟目标 | [Info.activeMinutesWeekGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#activeMinutesWeekGoal-var) | 用户设定的每周活动分钟目标 | 2.1.0 |
| 轮椅推动次数 | [Info.pushes](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#pushes-var) | 用户推动轮椅的次数 | 4.2.0 |
| 轮椅推动目标 |  | 用户设定的轮椅推动次数目标 | 4.2.0 |

启用轮椅模式后，[ActivityMonitor.Info](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/) 中的 [Info.steps](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#steps-var)、[Info.stepGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#stepGoal-var)、[Info.floorsClimbed](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsClimbed-var)、[Info.floorsDescended](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsDescended-var) 和 [Info.floorsClimbedGoal](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#floorsClimbedGoal-var) 会为 0，而 [Info.pushes](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/#pushes-var) 会提供相应值。

## 传感器历史记录

*自 API 级别 2.1.0*

[Toybox.SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/) 模块允许应用访问设备上保存的传感器历史。应用可以通过获取迭代器访问传感器数据。

| 函数 | 用途 | API 级别 |
| --- | --- | --- |
| [SensorHistory.getBodyBatteryHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getBodyBatteryHistory-instance_function) | 获取设备过去几小时记录的用户 Body Battery 样本。无法访问同步数据。 | 3.3.0 |
| [SensorHistory.getHeartRateHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getHeartRateHistory-instance_function) | 获取设备过去几小时记录的用户心率样本。无法访问同步数据。 | 2.1.0 |
| [SensorHistory.getTemperatureHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getTemperatureHistory-instance_function) | 获取设备过去几小时记录的温度。无法访问同步数据。 | 2.1.0 |
| [SensorHistory.getPressureHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getPressureHistory-instance_function) | 获取设备过去几小时记录的气压。无法访问同步数据。 | 2.1.0 |
| [SensorHistory.getElevationHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getElevationHistory-instance_function) | 获取设备过去几小时记录的海拔。无法访问同步数据。 | 2.1.0 |
| [SensorHistory.getOxygenSaturationHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getOxygenSaturationHistory-instance_function) | 获取设备过去几小时记录的用户 SpO2。无法访问同步数据，是否有数据取决于用户是否启用了 SpO2 记录。 | 3.2.0 |
| [SensorHistory.getStressHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getStressHistory-instance_function) | 获取设备过去几小时记录的用户压力。无法访问同步数据。 | 3.3.0 |

并非所有设备都支持 [Toybox.SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/) 类型。应使用 `has` 运算符验证设备能力。上述获取函数会返回 [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) 类型。

调用 [SensorHistoryIterator.next()](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/#next-instance_function) 会遍历历史值，直到到达数据末尾。没有更多数据时，迭代器会返回 `null`。样本间隔和请求范围是否可用均不作保证。

该函数返回 [SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 对象。使用枚举值 `ORDER_NEWEST_FIRST` 和 `ORDER_OLDEST_FIRST`，可以调整迭代顺序，让最新或最旧的数据优先返回。

第六号的台词“我不是一个数字，我是一个自由人！”从未见过 Garmin Connect。

🎵 ...我会走五百英里 / 我会走五百英里 / 只是为了成为那个走一千英里 / 击败我的连接步骤挑战的人
