---
title: "Unit 测试"
---
# Unit 测试

连接智商SDK有 Run No Evil,这是测试模块中发现的自动化单元测试框架. Run No Evil仅在 Connect IQ模拟器内运行,并为您的应用程序提供添加断言和单元测试方法的能力.

## 断言

断言是检查代码的关键点条件的有用方法,并且在模拟器中启动应用时将始终执行.例如,如果你的应用程序总是期望x和y的值不等:

```typescript
import Toybox.Test;

function onShow() {
  var x = 1;
  var y = 1;
  // Prints an error to the console when x and y are equal
  Test.assertNotEqualMessage(x, y, "x and y are equal!");
}
```

当应用程序在模拟器中运行时,上面的代码会产生下列输出:

```bash
Device Version 0.1.0
Device id 1 name "A garmin device"
Shell Version 0.1.0
ASSERTION FAILED: x and y are equal!
```

断言代码不需要在模拟器内执行任何特殊的编译命令,并且在构建发布代码时被编译器删除. 运行无恶有四种不同的断言口味:

| Function |描述|
| --- | --- |
| [Test.assert()](/connect-iq/api-docs/Toybox/Test/#assert-instance_function) |如果测试是错误的,该断言会产生例外|
| [Test.assert()](/connect-iq/api-docs/Toybox/Test/#assert-instance_function) |如果测试是错误的,该声明会产生异常,并输出信息.|
| [Test.assertNotEqual()](/connect-iq/api-docs/Toybox/Test/#assertNotEqual-instance_function) |如果值1和值2不等等,则抛出例外|
| [Test.assertNotEqualMessage()](/connect-iq/api-docs/Toybox/Test/#assertNotEqualMessage-instance_function) |如果值1和值2不等等,则会抛出一个例外并输出一个消息|

## 单元测试

单元测试是检查您的应用程序的分别部分通过/失败标准的好方法.每个测试都是独立运行的,所以如果测试失败或导致崩,测试将被标记为失败的测试,下一次测试将自动执行.这允许使用单个命令自动运行整个测试组.

单元测试主要与子C中任何其他类,模块或函数一样,但具有以下要求:

- 测试方法必须标记为`:test`注释

- 测试方法必须采用[Test.Logger](/connect-iq/api-docs/Toybox/Test/Logger/)对象

- 不是全球性的测试方法 (作为测试类或定制测试模块的一部分) 必须是静态方法


以下是一个单元测试方法的简单例子:

```typescript
// Unit test to check if 2 + 2 == 4
(:test)
function myUnitTest(logger as Logger) as Boolean {
  var x = 2 + 2; logger.debug("x = " + x);
  return (x == 4); // returning true indicates pass, false indicates failure
}
```

单元测试包含一个便捷的日志记录器，并提供不同日志级别以生成更有意义的错误报告。上面的示例代码使用“debug”日志级别，但 Logger 总共提供三个日志级别，可用于区分单元测试输出中的不同错误类型：

-   [Logger.debug()](/connect-iq/api-docs/Toybox/Test/Logger/#debug-instance_function)

-   [Logger.warning()](/connect-iq/api-docs/Toybox/Test/Logger/#warning-instance_function)

-   [Logger.error()](/connect-iq/api-docs/Toybox/Test/Logger/#error-instance_function)


虽然单元测试在程序源代码中定义,但它们不包含在调试或释放执行式中.

###从子C扩展的运行单元测试

子C扩展测试探险器为您的应用程序执行单元测试提供了强大的用户界面.您可以通过点击左边的测试管图标启动测试探险器.当您启动测试探险器时,它将列出所有测试在代码中,并按它们属于的模块和类别列出它们.您可以通过右键点击一个元素并选择 *配置设备*来配置您想测试的产品.

按一下列表元素的播放按将运行该测试或该元素所包含的测试集合.测试输出将转向终端部分旁边的*测试结果* tabb.

####从指挥线执行单位测试

如果您想在应用程序上运行单元测试,请使用构建命令上的`--unit-test`旗构建该应用程序,以编译单元测试.通常最容易将构建命令从视觉工作室代码控制台复制和粘贴,并添加单元测试旗.然后使用 SDK 的垃圾桶目录中的`connectiq`脚本来从终端启动模拟器 (不需要参数),并使用 SDK 的垃圾桶目录中的`monkeydo`脚本,以`/t`旗运行该应用程序,启用单元测试 -`monkeydo.bat path\to\projects\bin\MyApp.prg /t`

您也可以在`/t`之后提供一个函数名称,以运行与单个函数相关的测试.上面的样本单元测试在控制台中产生以下输出:

```bash
Device Version 0.1.0
Device id 1 name "A garmin device"
Shell Version 0.1.0
\------------------------------------------------------------------------------
Executing test myUnitTest…
DEBUG (14:16): x = 4
Pass
==============================================================================
RESULTS
Test:              Status:
myUnitTest           Pass
Ran 1 test
PASSED (failures=0, errors=0)
Connection Finished
Closing shell and port
```

如果你想在[monkey barrel](/connect-iq/core-topics/shareable-libraries/#shareable-libraries)中运行测试,你可以使用`barreltest`脚本.它支持[same options](/connect-iq/monkey-c/compiler-options/#compiler-options)作为编译器,但可以输出一个可以被测试系统使用的PRG.

除非编译器明确被告知运行单元测试,否则单元测试代码不会执行.所有测试代码都会在编译时自动删除,当您的应用程序出口用于设备上使用时.
