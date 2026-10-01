---
title: "单元测试"
---
<a id="unit-testing"></a>
# 单元测试

Connect IQ SDK 在 Test 模块中提供了 Run No Evil 自动化单元测试框架。Run No Evil 只能在 Connect IQ Simulator 中运行，可用于向应用添加断言和单元测试方法。

## 断言

断言可以在代码的关键位置检查条件，并且每次在 Simulator 中启动应用时都会执行。例如，如果应用始终要求 `x` 和 `y` 的值不相等，可以这样写：

```typescript
import Toybox.Test;

function onShow() {
  var x = 1;
  var y = 1;
  // Prints an error to the console when x and y are equal
  Test.assertNotEqualMessage(x, y, "x and y are equal!");
}
```

在 Simulator 中运行应用时，上面的代码会在控制台输出：

```bash
Device Version 0.1.0
Device id 1 name "A garmin device"
Shell Version 0.1.0
ASSERTION FAILED: x and y are equal!
```

在 Simulator 中执行断言代码不需要特殊的编译器命令；构建发布代码时，编译器会移除断言代码。Run No Evil 提供四种断言形式：

| 函数 | 描述 |
| --- | --- |
| [Test.assert()](/connect-iq/api-docs/Toybox/Test/#assert-instance_function) | 测试结果为 false 时抛出异常 |
| [Test.assertMessage()](/connect-iq/api-docs/Toybox/Test/#assertMessage-instance_function) | 测试结果为 false 时抛出异常并输出消息 |
| [Test.assertNotEqual()](/connect-iq/api-docs/Toybox/Test/#assertNotEqual-instance_function) | `value1` 和 `value2` 相等时抛出异常 |
| [Test.assertNotEqualMessage()](/connect-iq/api-docs/Toybox/Test/#assertNotEqualMessage-instance_function) | `value1` 和 `value2` 相等时抛出异常并输出消息 |

## 单元测试

单元测试适合根据通过或失败的标准检查应用中的独立代码片段。每项测试都会独立运行；如果某项测试失败或导致崩溃，该测试会标记为失败，下一项测试仍会自动执行。因此，只需一个命令就能自动运行完整的测试套件。

Monkey C 中的单元测试大体上与其他类、模块或函数的写法相同，但必须满足以下要求：

-   测试方法必须使用 `:test` 注解标记。

-   测试方法必须接收一个 [Test.Logger](/connect-iq/api-docs/Toybox/Test/Logger/) 对象。

-   非全局测试方法（属于测试类或自定义测试模块的方法）必须是静态方法。


下面是一个简单的单元测试方法示例：

```typescript
// Unit test to check if 2 + 2 == 4
(:test)
function myUnitTest(logger as Logger) as Boolean {
  var x = 2 + 2; logger.debug("x = " + x);
  return (x == 4); // returning true indicates pass, false indicates failure
}
```

单元测试提供了一个包含多个日志级别的 Logger，可以生成更有用的错误报告。上面的示例使用了 `debug` 日志级别；Logger 总共提供三个日志级别，用于区分单元测试输出中的不同错误类型：

-   [Logger.debug()](/connect-iq/api-docs/Toybox/Test/Logger/#debug-instance_function)

-   [Logger.warning()](/connect-iq/api-docs/Toybox/Test/Logger/#warning-instance_function)

-   [Logger.error()](/connect-iq/api-docs/Toybox/Test/Logger/#error-instance_function)


虽然单元测试定义在程序源代码中，但它们不会包含在调试版或发布版可执行文件中。

### 从 Monkey C 扩展运行单元测试

Monkey C 扩展中的 Test Explorer 提供了一个强大的界面，用于执行应用的单元测试。点击左侧的试管图标即可打开 Test Explorer。启动 Test Explorer 后，它会枚举代码中的所有测试，并按所属模块和类列出。右键点击某个元素并选择 *Configure Devices*，即可配置要测试的产品。

点击列表元素上的播放按钮，可以运行该测试或该元素包含的测试集合。测试输出会显示在终端区域旁边的 *Test Results* 标签页中。

### 从命令行运行单元测试

如果要运行应用的单元测试，请在构建命令中加入 `--unit-test` 标志，以包含单元测试进行编译。通常可以直接从 Visual Studio Code 控制台复制构建命令，再添加该标志。然后，在 SDK 的 `bin` 目录中使用 `connectiq` 脚本从终端启动 Simulator（无需参数），并在同一目录中使用带 `/t` 标志的 `monkeydo` 脚本运行应用，以启用单元测试：`monkeydo.bat path\to\projects\bin\MyApp.prg /t`

也可以在 `/t` 后提供函数名，以运行与单个函数关联的测试。上面的单元测试示例会在控制台输出：

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

如果要运行 [Monkey Barrel](/connect-iq/core-topics/shareable-libraries/#shareable-libraries) 中的测试，可以使用 `barreltest` 脚本。它支持与编译器相同的 [选项](/connect-iq/monkey-c/compiler-options/#compiler-options)，但可以输出供测试系统使用的 PRG。

除非明确告知编译器运行单元测试，否则单元测试代码不会执行。应用导出到设备使用版本时，所有测试代码都会在编译时自动移除。
