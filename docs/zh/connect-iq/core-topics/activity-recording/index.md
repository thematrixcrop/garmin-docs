---
title: "Activity Recording"
---
# 活动记录

想象一下你正在创建一个应用程序.你希望该应用程序记录你的心率和 other训练期间燃烧的卡路里,就像其他Garmin应用程序一样.你也希望该录音显示在[Garmin Connect](https://connect.garmin.com/)上.子C允许应用程序启动和停止FIT文件的录音.控制FIT文件录音需要几个步骤:

1. 让传感器能够记录

2. 使用[ActivityRecording.createSession()](/connect-iq/api-docs/Toybox/ActivityRecording/#createSession-instance_function)创建一个会议对象

3. 使用FIT会议的[Session.start()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#start-instance_function)方法开始录制.启用传感器的数据将记录在FIT文件中.

4. 使用[Session.stop()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#stop-instance_function)暂停录音

5. 使用[Session.save()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#save-instance_function)保存录音,或者使用[Session.discard()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#discard-instance_function)删除录音


FIT文件将与[Garmin Connect](https://connect.garmin.com/)同步.您可以使用[Garmin Connect Developer Program](https://developer.garmin.com/gc-developer-program/overview/)从网络服务处理FIT文件.

查看与SDK共享的`RecordSample`样本应用.

## 记录 FIT 文件

除了能够播放现有的FIT文件外,模拟器还可以使用使用使用 *模拟*\>*活动数据*菜单选项获取的数据记录文件.要开始记录一个会议,您必须启动计时器;这可以通过点击对话框上的启动按或点击您选择的设备上的相应的启动按.下面表描述了活动记录的不同选项,并提供通过对话框或设备按如何访问它们的说明.

| Option | Dialog | 设备按钮 | 备注 |
| --- | --- | --- | --- |
| 开始活动 | Start | 开始按钮 |设备启动按启动和停止活动.|
| 停止活动 | Stop | 开始按钮 |设备启动按启动和停止活动,当录音活动时,对话框上的*Start*按被更名为*Stop*.|
| 圈活动 | Lap | 返回按钮 |在FIT文件中记录一圈记录. 请注意,只有在FIT数据模拟启用,活动记录是活跃时,该选项才可使用.|
| 暂停活动 | Pause | N/A |暂停活动记录. 请注意,只有在FIT数据模拟启用,活动记录是活跃时,该选项才可使用.|
| 恢复活动 | Resume | N/A |恢复活动记录. 请注意,只有在启用FIT数据模拟和暂停活动记录时,该选项才可使用.|
| 完成训练步骤 | 锻炼步骤 | N/A |请注意,当FIT数据模拟启用并且活动记录已启动时,该选项只有可用.|
|转到下一个多体育| 下一项多项运动 | N/A |转移到下一个多体育阶段. 请注意,只有在FIT数据模拟启用并且活动记录是活跃时,该选项才可使用.|
|选择分类类型|分类类型| N/A |请注意,此选项仅可用于 API 级别 5.2.2 的设备,并且在录制活动中使用.|
| 开始分段 | 开始分段 | N/A |添加选定的分区到当前活动. 请注意,这个选项仅在API级别5.2.2的设备上可用,并且活动记录是活跃的.|
| 结束分段 | 结束分段 | N/A |在当前活动中结束分区. 请注意,这个选项仅在API级别5.2.2的设备上可用,并且当分区活跃时.|
| 放弃活动 | Discard | N/A |丢弃当前的录音并删除相应的 .fit文件. 请注意,如果活动录音已启动,然后停止,这只能实现.|
| 保存活动 | Save | N/A |保存记录的活动到 .fit文件中并重置计时器状态. 请注意,如果活动记录已启动,然后停止,这只能实现.|

** 注:** 设备模拟器在运行数据场时不会自动启动活动记录.您必须明确启动和停止如下描述的活动记录.

## FIT 开发者字段

现在想想把一个新的指标 - Namastes - 添加到果应用程序`namaste`.这个指标将心率,加速仪和其他传感器数据结合成一个值,并且没有任何Garmin记录指标中的模拟.

首先，您必须在清单文件中启用 [Toybox.FitContributor](/connect-iq/api-docs/Toybox/FitContributor/) 权限（更多信息请参阅[清单和权限](/connect-iq/core-topics/manifest-and-permissions/#manifest-file-and-permissions)一节）。接下来，您需要在资源中使用 `fitContributions` 块添加字段定义：

```xml
    <strings>
        <string id="namaste_label">Namastes</string>
        <string id="namaste_graph_label">Namastes</string>
        <string id="namaste_units">N(s)</string>
    </strings>
    <fitContributions>
        <fitField id="0" displayInChart="true" sortOrder = "0" precision="2"
        chartTitle="@Strings.namaste_graph_label" dataLabel="@Strings.namaste_label"
        unitLabel="@Strings.namaste_units" fillColor="#FF0000" />
    </fitContributions>
```

`fitField`区块有几个可配置的选项:

| 属性 | 值 | 备注 |
| --- | --- | --- |
| `id` |0 到 255 之间的数字值用于您的字段|在应用程序中不允许复制|
| `displayInChart` |显示是否应该在图表中呈现记录水平连接IQ数据|如果您希望这个输入显示为图表,则`false`. 图表字段只能支持数值数据.|
| `displayInActivityLaps` |显示在 Garmin Connect 活动细节页面的活动周期部分是否应呈现圈连接水平IQ数据|如果您希望该输入显示在活动圈中,`false`否则|
| `displayInActivitySummary` |显示是否应该在 Garmin Connect 活动细节页面的活动总结部分显示活动 (健身会议) 连接 IQ 数据|如果您希望该条目显示在活动总结数据中,则`false`否则|
| `sortOrder` |确定 Connect IQ 数据将在活动细节页的总结或回合部分显示的顺序,以及活动细节页上显示的顺序图表|不允许复制|
| `precision` |数字数据的十分点精度|没有这个属性,默认情况下没有圆形|
| `chartTitle` |这是一个资源字符串键,可用于将图表的标题呈现|如果`displayInChart`是`false`,则可选. 必须是字符串资源.|
| `dataLabel` |这是用于将活动细节页的活动总结或活动周期部分数据场的标签表现的资源字符串键 (例如率或心率).|必须是一个字符串资源|
| `unitLabel` |这是一个用于将活动细节页 (例如 kph,或英里) 的活动总结或活动周期部分中的数据场的单元表示的关键.|必须是一个字符串资源|
| `fillColor` |用于图表的RRGGBB颜色值|如果`displayInChart`是`false`|

现在我们需要在代码中创建我们的字段.您可以通过使用源中的[ActivityRecording.Session](/connect-iq/api-docs/Toybox/ActivityRecording/Session/)对象的[Session.createField()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#createField-instance_function)方法这样做:

```java
// 来自资源的字段 ID。
const NAMASTE_FIELD_ID = 0;
hidden var mNamasteField;

// 初始化活动文件中的新 Namaste 字段
function setupField(session as Session) {
    // 在会话中创建新字段。
    // 当前 namastes 为字段提供文件内部定义。
    // 字段 ID 必须与资源中的 fitField ID 匹配，否则不会显示数据！
    // 字段类型指定要存储的数据类型。
    // 对于 Record 数据，此类型必须为数字；对于其他数据，也可以是字符串。
    // mesgType 用于指定要写入的 FIT 记录类型。
    //    FitContributor.MESG_TYPE_RECORD 表示图表信息
    //    FitContributor.MESG_TYPE_LAP 表示圈信息
    //    FitContributor.MESG_TYPE_SESSION 表示摘要信息。
    // Units 提供文件内部单位字段。
    mNamasteField =
        session.createField(
            "current_namastes", NAMASTE_FIELD_ID, FitContributor.DATA_TYPE_FLOAT,
            { :mesgType=>Fit.MESG_TYPE_RECORD, :units=>"N" });
}
```

现在,当您调用`mNamasteField`时,该值将根据调用[Session.createField()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#createField-instance_function)时指定的消息类型记录在FIT文件的记录,圈或会议信息中记录.如果您正在创建记录 (图),则您应该每秒更新此值.

在设置后,您将想预览[Garmin Connect](https://connect.garmin.com/)上将如何看待.我们可以使用Monkey Graph工具来创建预览.Monkey Graph工具需要以下内容:记录开发人员数据的FIT文件和应用程序的IQ文件 (您可以通过[App Export Wizard](/connect-iq/core-topics/publishing-to-the-store/#publishing-to-the-connect-iq-store)获取IQ文件.该工具将允许您在上传应用程序进行审查之前测试图表的外观.
