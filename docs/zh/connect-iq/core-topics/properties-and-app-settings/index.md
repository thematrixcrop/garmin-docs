---
title: "Properties and Settings"
---
# 属性和设置

应用程序设置框架使应用程序开发人员能够在Garmin Connect和Garmin Express中向终端用户展示其应用程序的选项.这将允许应用程序的定制和设置,特别是对于手表面和数据字段,这些应用程序无法在Garmin设备上接收用户输入.

## 属性

应用程序属性是编译时内置在应用程序中的关键和值.属性在应用程序资源中定义,并遵循资源覆盖规则.

```xml
<properties>
    <property id="appVersion" type="string">1.0.0</property>
</properties>
```

`id`是一个字符串识别符.`type`必须是以下一个:

|值| 备注 |
| --- | --- |
| `number`, `long`, `float`, `double` | 数值 |
| `boolean` |布尔值|
| `string` |字符串值|
| `array` |在属性中不能初始化列值,但默认值可以在应用程序设置中编程|

当您的应用程序安装时,属性被初始化为编程为资源的值.通过以下API来获取和修改属性值:

| API | 备注 | API 级别 |
| --- | --- | --- |
| [AppBase.getProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#getProperty-instance_function) |得到一个名字的财产| 1.0.0 |
| [AppBase.setProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#setProperty-instance_function) |修改一个财产值| 1.0.0 |
| [Properties.getValue()](/connect-iq/api-docs/Toybox/Application/Properties/#getValue-instance_function) |得到一个名字的财产| 2.4.0 |
| [Properties.setValue()](/connect-iq/api-docs/Toybox/Application/Properties/#setValue-instance_function) |修改一个财产值| 2.4.0 |

## 设置

应用程序设置允许用户使用移动设备修改应用程序属性.应用程序设置可以在Connect IQ Store应用程序,Garmin Connect应用程序或Garmin Express中修改.

应用程序设置由一个属性和相关设置组成.该属性用于存储底层设置值.设置用于描述属性应该如何显示给最终用户.你可以定义一个属性为默认值而不能定义相关设置,但你不能定义一个设置没有将其绑定到一个属性.

设置也被定义为资源.使用`<setting>`标签来定义设置.

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

下面的表显示了设置的所有有效属性.

| Attribute |值| 备注 |
| --- | --- | --- |
| `propertyKey` |如果不能找到属性密钥,则在编译时会出现错误.| 必需 |
| `title` |在 Garmin Connect Mobile/Garmin Express中显示设置列表/设置值时显示的标题. 这必须引用字符串资源ID.| 必需 |
| `prompt` |当要求用户设置值时显示的消息. 这必须引用字符串资源ID.|选择性.即使提供提示,一些设置不会显示提示 (例如,`readonly`或`boolean`设置显示为开关开关).|
| `helpUrl` |一个为用户提供帮助的网页URL. ** 这已过时使用. **| 可选 |
| `maxLength` |在数组设置中允许的最大元素数| 可选 |

一个`<settingConfig>`,是`<setting>`的子元素,提供了有关设置的额外细节.

| Attribute |值| 有效值 | 备注 |
| --- | --- | --- | --- |
| `type` |设置的显示类型.| `list`, `boolean`, `numeric`, `alphaNumeric`, `phone`, `email`, `url`, `date` or `password` |一个`list`值需要儿童`<listEntry>`元素来定义该列表中应提供的选项.|
| `readonly` |如果设置仅读或不读. 这个属性适用于`list`和`password`除外.|`true`或`false`|默认的`false`.|
| `required` |如果需要该字段.|`true`或`false`|默认的`false`.|
| `min` |允许的最低值.|一个整数值|可选.仅适用于`type`值的`numeric`或`date`.|
| `max` |允许的最大值.|一个整数值|可选.仅适用于`type`值的`numeric`或`date`.|
| `maxLength` |允许的最大值长度.|一个整数值|可选.仅适用于与其相关属性类型为`string`的设置.|
| `errorMessage` |如果一个用户输入的值不根据`type`,`min`,`max`和`maxLength`值进行有效显示的错误信息.|引用一个字符串资源.|  |
| `id` |在数组设置中,用于标记对象设置内的字段的标识符.| 字符串标识符 |这只用于阵列设置|

`<settingConfig>`类型仅适用于某些属性类型:

|房产类型| 有效的 `settingsConfig` 类型 |
| --- | --- |
| `string` | `alphaNumeric`, `phone`, `email`, `url`, `password` |
| `number` | `list`, `numeric`, `date` |
| `float` | `numeric` |
| `long` | `numeric` |
| `double` | `numeric` |
| `boolean` | `boolean` |

在下面表中定义了`<listEntry>`元素.它的值必须是引用字符串资源.

| Attribute |值| 备注 |
| --- | --- | --- |
| `value` |如果用户选择了此项,则保存值.|如果它不匹配,则会出现编译时间错误.|

查看[Object Store](/connect-iq/core-topics/persisting-data/#accessing-properties-and-settings-object-store)和[Application Properties](/connect-iq/core-topics/persisting-data/#accessing-properties-and-settings-applicationproperties)如何在运行时读取这些值.

### 组

`<group>`标签允许设置组合在一起. 这允许您视觉分离相关设置与非相关设置.一个组包含它组合的设置.一个组不允许包含一个组.

以下是一个简单的组定义例子:

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

以下是组选的选项:

| Attribute | Values | 备注 |
| --- | --- | --- |
| `id` | 字符串 |组的标识符|
| `title` | 字符串 |集团标题. 这是在移动中显示为列表项.|
| `description` | 字符串 |组的描述文本.该文本应描述组设置的背景|
| `enableIfTrue` | 属性标识符 |如果没有检查`boolean`设置,则可以禁用组.如果用户启用功能,则可以显示设置.|

### 数组设置

有时允许用户操纵一个或多个相关项目是有帮助的.例如,假设你的应用程序可以支持多种类型的活动,每个类型的活动都有不同的心率区.用户可能只有两个或三个类型的活动,但你的应用程序支持50种不同的活动.

阵列设置允许您定义作为组添加和删除的设置集. 这允许用户创建可在运行时间读取的对象变量列表 (最大尺寸).

为了创建变量列表,所引用的属性必须是`array`类型. 设置定义是设置的集合:

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

当你查询属性时,它将是一个由[Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)对象组成的阵列,每个`id`键与值相关.你可以使用`maxLength`设置对元素数量的上限.每个`settingConfig`必须有一个`id`字段.

每个`<default>`标签都必须引用使用`id`属性的标识符.

## 在 Garmin Connect Mobile/Garmin Express 中更改设置

最终用户可以在Garmin Connect或Garmin Express UI中查看您定义的设置.当应用程序运行时改变应用程序设置时,会调用[AppBase.onSettingsChanged()](/connect-iq/api-docs/Toybox/Application/AppBase/#onSettingsChanged-instance_function)函数.应用程序可以取消此功能并相应更新.当处理由Garmin Express或Garmin Connect设置的日期类型设置时,应注意时间是存储在UTC中,并且在使用此类值时应使用[Gregorian.utcInfo()](/connect-iq/api-docs/Toybox/Time/Gregorian/#utcInfo-instance_function)代替[Gregorian.info()](/connect-iq/api-docs/Toybox/Time/Gregorian/#info-instance_function)以防止不必要的本地时间转换.

## 测试 App Settings

应用程序设置编辑工具可在Connect IQ模拟器中使用. 进入 *文件 > 编辑持久存储 > 编辑Application.Properties数据*. 该工具将允许您查看一个项目的定义设置,选择每个设置的值并将它们发送到模拟器进行测试.

![](/connect-iq/resources/programmers-guide/app_settings_editor.png)

## 设备端表盘和数据字段设置

*自 API 级别 3.2.0*

设备应用程序,小程序和音频内容提供商都接受用户输入,允许他们在应用程序中实现设备上的设置. 视频面孔和数据字段不允许接受设备配置的输入或推视图.

如果您想为您的手表面或数据领域提供设备设置用户界面,您可以实现[AppBase.getSettingsView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSettingsView-instance_function).[AppBase.getSettingsView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSettingsView-instance_function)的功能类似于[AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function),您可以返回最初视图的[WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)和[WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)对.

在系统的Watch Face菜单中可使用手表面孔配置.数据场配置可从活动菜单中使用.
