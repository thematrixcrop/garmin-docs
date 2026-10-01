---
title: "属性和设置"
---
<a id="properties-and-settings"></a>
# 属性和设置

应用设置框架允许开发者在 Garmin Connect 和 Garmin Express 中向用户提供应用选项。这尤其适合表盘和数据字段：这些应用无法在 Garmin 设备上接收用户输入，却仍然需要自定义和配置。

## 属性

应用属性是在编译时构建到应用中的键值对。属性在应用资源中定义，并遵循资源覆盖规则。

```xml
<properties>
    <property id="appVersion" type="string">1.0.0</property>
</properties>
```

`id` 是字符串标识符，`type` 必须是以下值之一：

| 值 | 说明 |
| --- | --- |
| `number`、`long`、`float`、`double` | 数值 |
| `boolean` | 布尔值 |
| `string` | 字符串 |
| `array` | 不能在属性定义中初始化数组，但可以在应用设置中编程指定默认值 |

应用安装后，属性会初始化为资源中定义的值。可以通过以下 API 读取和修改属性：

| API | 说明 | API 级别 |
| --- | --- | --- |
| [AppBase.getProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#getProperty-instance_function) | 按名称获取属性 | 1.0.0 |
| [AppBase.setProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#setProperty-instance_function) | 修改属性值 | 1.0.0 |
| [Properties.getValue()](/connect-iq/api-docs/Toybox/Application/Properties/#getValue-instance_function) | 按名称获取属性 | 2.4.0 |
| [Properties.setValue()](/connect-iq/api-docs/Toybox/Application/Properties/#setValue-instance_function) | 修改属性值 | 2.4.0 |

## 设置

应用设置允许用户通过移动设备修改应用属性。设置可以在 Connect IQ Store、Garmin Connect 或 Garmin Express 中修改。

一个应用设置由一个属性和与之关联的设置定义组成。属性用于存储实际值，设置定义则描述该属性应如何呈现给用户。可以只定义属性并为其提供默认值，而不定义关联设置；但不能定义一个没有关联属性的设置。

设置同样通过资源定义。使用 `<setting>` 标签定义设置。

```xml
<settings>

    <setting propertyKey="@Properties.appVersion" title="@Strings.AppVersionTitle">
        <settingConfig type="alphaNumeric" readonly="true" />
    </setting>

    <setting propertyKey="@Properties.myString" title="@Strings.MyStringTitle" prompt="@Strings.MyStringPrompt">
        <settingConfig type="list">
            <listEntry value="0">@Strings.HelloWorld</listEntry>
            <listEntry value="1">@Strings.Ackbar</listEntry>
            <listEntry value="2">@Strings.Garmin</listEntry>
        </settingConfig>
    </setting>

    <setting propertyKey="@Properties.myNumber" title="@Strings.MyNumberTitle" prompt="@Strings.MyNumberPrompt">
        <settingConfig type="numeric" errorMessage="@Strings.MyNumberError" />
    </setting>

    <setting propertyKey="@Properties.screenSleep" title="@Strings.ScreenSleepTitle">
        <settingConfig type="boolean" />
    </setting>

    <setting propertyKey="@Properties.username" title="@Strings.UsernameTitle">
        <settingConfig type="alphaNumeric" required="true" />
    </setting>

</settings>
```

下面列出了 `<setting>` 支持的全部属性：

| 属性 | 值 | 备注 |
| --- | --- | --- |
| `propertyKey` | 此设置要管理的属性键。找不到对应属性键时会在编译时报告错误。 | 必需 |
| `title` | 在 Garmin Connect Mobile 或 Garmin Express 中显示设置列表和设置值时使用的标题。必须引用字符串资源 ID。 | 必需 |
| `prompt` | 提示用户设置值时显示的消息。必须引用字符串资源 ID。 | 可选。某些设置即使提供了 prompt 也不会显示，例如 `readonly` 设置或显示为开关的 `boolean` 设置。 |
| `helpUrl` | 为用户提供帮助的网页 URL。**此属性已弃用。** | 可选 |
| `maxLength` | 数组设置允许的最大元素数 | 可选 |

`<settingConfig>` 是 `<setting>` 的子元素，用于提供设置的更多细节。它支持以下属性：

| 属性 | 定义 | 有效值 | 备注 |
| --- | --- | --- | --- |
| `type` | 设置的显示类型 | `list`、`boolean`、`numeric`、`alphaNumeric`、`phone`、`email`、`url`、`date` 或 `password` | `list` 类型需要使用 `<listEntry>` 子元素定义可选项 |
| `readonly` | 设置是否只读。除 `list` 和 `password` 外的所有类型都支持 | `true` 或 `false` | 可选，默认为 `false` |
| `required` | 字段是否必填 | `true` 或 `false` | 可选，默认为 `false` |
| `min` | 允许的最小值 | 整数 | 可选，仅适用于 `numeric` 或 `date` |
| `max` | 允许的最大值 | 整数 | 可选，仅适用于 `numeric` 或 `date` |
| `maxLength` | 允许的最大值长度 | 整数 | 可选，仅适用于关联属性类型为 `string` 的设置 |
| `errorMessage` | 用户输入的值不符合 `type`、`min`、`max` 和 `maxLength` 时显示的错误消息 | 字符串资源引用 |  |
| `id` | 在数组设置中用于标记对象内部字段的标识符 | 字符串标识符 | 仅适用于数组设置 |

`<settingConfig>` 类型只适用于特定的属性类型：

| 属性类型 | 有效的 `settingConfig` 类型 |
| --- | --- |
| `string` | `alphaNumeric`、`phone`、`email`、`url`、`password` |
| `number` | `list`、`numeric`、`date` |
| `float` | `numeric` |
| `long` | `numeric` |
| `double` | `numeric` |
| `boolean` | `boolean` |

`<listEntry>` 元素的定义如下。它的值必须引用字符串资源。

| 属性 | 值 | 备注 |
| --- | --- | --- |
| `value` | 用户选择此项时要保存的值 | 值的类型必须与要保存到的属性类型一致，否则会在编译时报告错误 |

有关如何在运行时读取这些值，请参阅[对象存储](/connect-iq/core-topics/persisting-data/#accessing-properties-and-settings-object-store)和[应用属性](/connect-iq/core-topics/persisting-data/#accessing-properties-and-settings-applicationproperties)。

### 组

`<group>` 标签允许将多个设置分组，从而在视觉上区分相关设置和其他设置。一个组包含它所分组的设置，但不能嵌套另一个组。

下面是一个简单的组定义：

```xml
<settings>
    <group id="groupName" title="@Strings.group1Title" description="@Strings.group1Description">
        <setting propertyKey="@Properties.number_prop" title="@Strings.number_title">
            <settingConfig type="numeric" />
        </setting>

        <setting propertyKey="@Properties.long_prop" title="@Strings.long_title">
            <settingConfig type="numeric" />
        </setting>
    </group>
</settings>
```

组支持以下属性：

| 属性 | 值 | 备注 |
| --- | --- | --- |
| `id` | 字符串 | 组的标识符 |
| `title` | 字符串 | 组标题，在移动端显示为列表项 |
| `description` | 字符串 | 组描述，应说明这组设置的使用场景 |
| `enableIfTrue` | 属性标识符 | 如果某个 `boolean` 设置未选中，则禁用该组；可用于在用户启用某项功能后再显示设置 |

### 数组设置

有时需要允许用户操作一个或多个相关项目。例如，应用支持多种活动类型，而每种活动类型都有不同的心率区间。用户可能只使用两三种活动类型，但应用支持 50 种活动。

数组设置允许将一组设置作为整体添加和删除，让用户创建一个可变长度的对象列表（不超过最大长度），并在运行时读取它。

要创建可变列表，被引用的属性必须是 `array` 类型。设置定义由一组设置组成：

```xml
<setting propertyKey="@Properties.ActivityHrZones" title="Activities" maxLength="4">

    <setting title="@Strings.activityType" type="number">
        <settingConfig id="activityType" type="list">
            <listEntry value="0">@Strings.Running</listEntry>
            <listEntry value="1">@Strings.Cycling</listEntry>
            <listEntry value="2">@Strings.Swimming</listEntry>
        </settingConfig>
    </setting>
    <setting title="@Strings.Zone1">
       <settingConfig id="zone1" type="number"/>
    </setting>
    <setting title="@Strings.Zone2">
       <settingConfig id="zone2" type="number"/>
    </setting>
    <setting title="@Strings.Zone3">
       <settingConfig id="zone3" type="number"/>
    </setting>
    <setting title="@Strings.Zone4">
       <settingConfig id="zone4" type="number"/>
    </setting>
    <setting title="@Strings.Zone5">
       <settingConfig id="zone5" type="number"/>
    </setting>

    <!-- The defaults is where you program the initial values -->
    <defaults>
        <entry>
            <default id=”activityType”>0</default>
            <default id="zone1">89</default>
            <default id="zone2">109</default>
            <default id="zone3">125</default>
            <default id="zone3">144</default>
            <default id="zone5">160</default>
        </entry>
    </defaults>
</setting>
```

读取该属性时，会得到一个由 [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) 对象组成的数组，每个 `id` 键对应一个值。可以使用 `maxLength` 设置元素数量上限。每个 `settingConfig` 都必须有 `id` 字段。

`<defaults>` 标签用于编程指定应用首次安装时的初始值。每个 `<default>` 标签都必须通过 `id` 属性引用对应的标识符。

## 在 Garmin Connect Mobile 或 Garmin Express 中更改设置

最终用户可以在 Garmin Connect 或 Garmin Express 的 UI 中查看您定义的设置。应用运行期间设置发生变化时，系统会调用 [AppBase.onSettingsChanged()](/connect-iq/api-docs/Toybox/Application/AppBase/#onSettingsChanged-instance_function)。应用可以重写此函数并据此更新状态。处理 Garmin Express 或 Garmin Connect 设置的日期类型值时，请注意时间以 UTC 存储；应使用 [Gregorian.utcInfo()](/connect-iq/api-docs/Toybox/Time/Gregorian/#utcInfo-instance_function)，而不是 [Gregorian.info()](/connect-iq/api-docs/Toybox/Time/Gregorian/#info-instance_function)，以避免不必要的本地时间转换。

## 测试应用设置

Connect IQ Simulator 提供应用设置编辑工具。打开 *File > Edit Persistent Storage > Edit Application.Properties data*。该工具可以查看项目中定义的设置，为每个设置选择值，并将值发送到模拟器进行测试。

![](/connect-iq/resources/programmers-guide/app_settings_editor.png)

## 设备端表盘和数据字段设置

*自 API 级别 3.2.0 起支持*

设备应用、小工具和音频内容提供商都可以接收用户输入，从而实现设备端设置。表盘和数据字段不能接收用于设备端配置的输入，也不能推入用于设备端配置的视图。

如果要为表盘或数据字段提供设备端设置 UI，可以实现 [AppBase.getSettingsView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSettingsView-instance_function)。它的工作方式类似于 [AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function)：返回一对 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 和 [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)，分别作为视图和输入委托。

用户可以在系统的表盘菜单（Watch Face）中配置表盘，也可以从活动菜单中配置数据字段。
