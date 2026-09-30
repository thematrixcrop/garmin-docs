---
title: "活动记录"
---
# 活动记录

假设您正在创建一个瑜伽应用。您希望像其他 Garmin 应用一样，记录瑜伽训练期间的心率和消耗的卡路里，并将记录显示在 [Garmin Connect](https://connect.garmin.com/) 上。Monkey C 允许应用启动和停止 FIT 文件记录。控制 FIT 文件记录需要以下步骤：

1. 启用要记录的传感器。

2. 使用 [ActivityRecording.createSession()](/connect-iq/api-docs/Toybox/ActivityRecording/#createSession-instance_function) 创建会话对象。

3. 使用 FIT 会话的 [Session.start()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#start-instance_function) 方法开始记录。启用的传感器数据会写入 FIT 文件。

4. 使用 [Session.stop()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#stop-instance_function) 暂停记录。

5. 使用 [Session.save()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#save-instance_function) 保存记录，或使用 [Session.discard()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#discard-instance_function) 删除记录。


FIT 文件会与 [Garmin Connect](https://connect.garmin.com/) 同步。您可以使用 [Garmin Connect Developer Program](https://developer.garmin.com/gc-developer-program/overview/) 从 Web 服务处理 FIT 文件。

更多信息请参阅 SDK 附带的 `RecordSample` 示例应用。

## 记录 FIT 文件

除了回放现有 FIT 文件外，模拟器还可以使用 *Simulation > Activity Data* 菜单中的数据记录文件。开始记录会话前必须启动计时器：可以单击对话框中的开始按钮，也可以单击所选设备上的对应按钮。下表介绍活动记录的选项，以及如何通过对话框或设备按钮（如有）访问这些选项。

| 选项 | 对话框 | 设备按钮 | 说明 |
| --- | --- | --- | --- |
| 开始活动 | 开始（Start） | 开始按钮 | 设备的开始按钮用于开始和停止活动。 |
| 停止活动 | 停止（Stop） | 开始按钮 | 设备的开始按钮用于开始和停止活动；记录开始后，对话框中的*开始（Start）*按钮会改为*停止（Stop）*。 |
| 记录圈 | 分段（Lap） | 返回按钮 | 在 FIT 文件中记录一圈。仅当启用 FIT 数据模拟且活动记录正在进行时可用。 |
| 暂停活动 | 暂停（Pause） | 不适用（N/A） | 暂停活动记录。仅当启用 FIT 数据模拟且活动记录正在进行时可用。 |
| 恢复活动 | 恢复（Resume） | 不适用（N/A） | 恢复活动记录。仅当启用 FIT 数据模拟且活动记录已暂停时可用。 |
| 完成训练步骤 | 训练步骤（Workout Step） | 不适用（N/A） | 完成当前训练步骤。仅当启用 FIT 数据模拟且活动记录正在进行时可用。 |
| 转到下一项多项运动 | 下一项多项运动（Next Multisport） | 不适用（N/A） | 切换到下一项多项运动阶段。仅当启用 FIT 数据模拟且活动记录正在进行时可用。 |
| 选择分段类型 | 分段类型（Split Type） | 不适用（N/A） | 选择要添加到当前活动的分段类型。仅 API 级别 5.2.2 及以上设备支持，且活动必须正在记录。 |
| 开始分段 | 开始分段（Start Split） | 不适用（N/A） | 将所选分段添加到当前活动。仅 API 级别 5.2.2 及以上设备支持，且活动必须正在记录。 |
| 结束分段 | 结束分段（End Split） | 不适用（N/A） | 结束当前活动中的分段。仅 API 级别 5.2.2 及以上设备支持，且分段必须处于活动状态。 |
| 放弃活动 | 放弃（Discard） | 不适用（N/A） | 放弃当前记录并删除对应的 `.fit` 文件。仅在活动已开始并随后停止后可用。 |
| 保存活动 | 保存（Save） | 不适用（N/A） | 将活动保存为 `.fit` 文件并重置计时器状态。仅在活动已开始并随后停止后可用。 |

**注意：** 运行数据字段时，设备模拟器不会自动开始活动记录。必须按照此处的说明明确开始和停止活动记录。

## FIT 开发者字段

现在假设要在瑜伽应用 `namaste` 中加入一个新指标 Namastes。该指标会将心率、加速度计和其他传感器数据合并为一个值，在 Garmin 的现有记录指标中没有对应项。

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

`fitField` 代码块有多个可配置选项：

| 属性 | 值 | 备注 |
| --- | --- | --- |
| `id` | 0 到 255 之间的数字，用于引用字段 | 同一应用中不能重复 |
| `displayInChart` | 是否在图表中显示记录级 Connect IQ 数据 | 要显示为图表时为 `true`，否则为 `false`。图表字段只能使用数值数据。 |
| `displayInActivityLaps` | 是否在 Garmin Connect 活动详情页的活动圈部分显示圈级 Connect IQ 数据 | 要显示在活动圈中时为 `true`，否则为 `false`。 |
| `displayInActivitySummary` | 是否在 Garmin Connect 活动详情页的活动摘要部分显示活动（FIT 会话）级 Connect IQ 数据 | 要显示在活动摘要中时为 `true`，否则为 `false`。 |
| `sortOrder` | Connect IQ 数据在活动详情页摘要或活动圈部分中的顺序，以及图表显示顺序 | 不能重复 |
| `precision` | 数值数据的小数位数 | `0` 表示整数，`1` 表示一位小数，`2` 表示两位小数。不设置时默认不进行舍入。 |
| `chartTitle` | 用于显示图表标题的资源字符串键 | `displayInChart` 为 `false` 时可选，且必须是字符串资源。 |
| `dataLabel` | 用于显示活动摘要或活动圈部分中字段标签的资源字符串键（例如 Cadence 或 Heart Rate） | 必须是字符串资源。 |
| `unitLabel` | 用于显示活动摘要或活动圈部分中字段单位的资源字符串键（例如 kph 或 miles） | 必须是字符串资源。 |
| `fillColor` | 图表使用的 RRGGBB 颜色值 | `displayInChart` 为 `false` 时可选。 |

接下来需要在代码中创建字段。可以在源代码中调用 [ActivityRecording.Session](/connect-iq/api-docs/Toybox/ActivityRecording/Session/) 对象的 [Session.createField()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#createField-instance_function) 方法：

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

调用 `mNamasteField` 后，该值会根据调用 [Session.createField()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#createField-instance_function) 时指定的消息类型，记录到 FIT 文件的记录、圈或会话信息中。如果创建的是记录（图表）字段，应每秒更新一次该值；对于圈和摘要字段，应持续更新当前圈或训练的指标值。

设置完成后，可以预览它在 [Garmin Connect](https://connect.garmin.com/) 上的显示效果。使用 Monkey Graph 工具创建预览需要：包含开发者数据的 FIT 文件，以及应用的 IQ 文件（可通过[应用导出向导](/connect-iq/core-topics/publishing-to-the-store/#publishing-to-the-connect-iq-store)获取）。该工具可以在上传应用审核前测试图表外观。请参阅[如何启动 SDK 附带的 Monkey Graph 工具](/connect-iq/reference-guides/monkey-graph-reference/#using-the-monkey-graph-tool)。
