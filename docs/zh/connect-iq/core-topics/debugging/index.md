---
title: "测试 and Debugging"
---
# 测试和调试

![](/connect-iq/resources/programmers-guide/chopper-monkey.png)

Connect IQ 有几种不同的方法来测试和调试您的应用：

1.使用`println()`语句进行基本调试

2. 使用视觉工作室代码调试器

3. 使用命令行调试器 (`mdd`)


## Basic Debugging

测试Connect IQ应用程序的一种方法是将[System.println()](/connect-iq/api-docs/Toybox/System/#println-instance_function)语句包含在应用中的战略点上.在视觉工作室代码中,这些[System.println()](/connect-iq/api-docs/Toybox/System/#println-instance_function)语句将输出到控制台上.在设备上,[System.println()](/connect-iq/api-docs/Toybox/System/#println-instance_function)语句会写到设备文件系统中的`/GARMIN/APPS/LOGS`目录中的`<APPNAME>.TXT file`.

这些日志文件不会自动创建,因此它们必须在设备上手动创建并命名以匹配应用程序的相应`PRG`文件名称.例如,从`/GARMIN/APPS/MYAPP.PRG`输出日志,您必须创建`/GARMIN/APPS/LOGS/MYAPP.TXT`.

## 修改视觉工作室代码

To begin debugging your application select *Run > Start Debugging*. 确保您已在编辑器中打开了要调试的项目源文件。 After selecting the product you want to debug, the app will launch in debug mode in the simulator. 仅在连接 IQ 模拟器上运行时支持调试。

###设定一个断点

与视觉工作室代码中的其他项目一样,在 Monkey C 编辑器中设置断点,在源代码旁边垂直行列中突出一行,然后点击设置断点.

![](/connect-iq/resources/programmers-guide/vscode-breakpoint.png)

### Viewing Application Status

当你的应用程序达到断点时,你可以在 * Run 和 Debug* 中检查运行时间状态. * 变量 * 视图允许你看到你的参数和本地,而 * 调用堆 * 允许你看到不同堆框架中的状态.

当您的应用程序在调试中暂停时,您将被要求打开本土的 *Debug*视角.从这里,您可以在本土的调试视图中查看堆痕迹.点击堆痕迹内的堆框架将填充本土的变量视图,并将在该堆框架中的适用的变量.全球变量只会在顶部堆框架中可见;它们会作为该堆框架内的`$`变量出现.

![](/connect-iq/resources/programmers-guide/vscode-debugging.png)

## 在命令行上做错误

`mdd`是Monkey C命令行调试器.基于`gdb`的模型,`mdd`允许您加载执行式,设置断点,并检查堆框架,本地变量和全球环境.

### Getting Started

在开始之前,请启动模拟器:

```bash
> simulator &
[1] 27984
> mdd
```

您将受到以下欢迎:

```
Connect IQ Version 3.2.0. Type "help" 更多信息.
(mdd)
```

随时可从命令行提示中获取帮助:

```
(mdd) help
List of classes of commands:

breakpoints -- Making program stop at certain points.
data -- Examining data.
running -- Running the program.
stack -- Examining the stack.
status -- Status inquiries.
support -- 支持 facilities.

Type "help" followed by a class name for a list of commands in that class.
Type "help all" for the list of all commands.
Type "help" followed by a command name for full documentation.
Command name abbreviations are allowed if defined.
```

### 装载和运行一个可执行的

要将执行式加载到`mdd`中,你需要`prg`,调试 XML和`prg`构建的产品.如果你使用`monkeyc`命令编译`prg`,`debug.xml`也会生成,Visual Studio Code通常将这些文件输出到你的项目`bin`文件中.

您使用`file`命令将它们加载到`mdd`环境中.

```
(mdd) file MyFace.prg MyFace.prg.debug.xml fenix6
```

现在可以使用`run`命令运行执行式:

```
(mdd) r
Starting app: C:\Projects\ciq-apps\strava\bin\Strava.prg
```

### Setting Breakpoints

通过`break`命令,可以将分区分分配给文件/行对:

```
(mdd) break \path\to\Thx.mc:1138
```

当程序执行该行时,执行将暂停:

```
Hit breakpoint 1, initialize () at Thx.mc:1138
(mdd)
```

### Frame Information

您可以使用`info frame`查询您目前的堆框架:

```
(mdd) info frame
Stack level 0, frame at 0x10002120
 in initialize() at Thx.mc:1138
 called by frame at 0x10000b48
 Args:
      self = <0x84> (Thx)
 Locals:
      thx = null
      sen = null
```

您还可以使用`print`命令输出变量以及表达式.

```
(mdd) print thx
thx = null
```

### Controlling Execution

你可以使用`next`命令进入下一行:

```
(mdd) next
```

命令将进入一个子程序:

```
(mdd) step
```

命令将返回完整执行状态,直到设置下一个断点或应用程序终止:

```
(mdd) continue
```

## Handling Crashes

尽管最好的调试工作,但有时会发生崩.与Connect IQ相关的两种通用设备崩可能发生: *应用程序崩*和 *设备崩*.

### App Crashes

应用程序崩通常会导致应用程序意外放弃或显示"IQ!"图标,但不会导致整个设备崩或重新启动.这种崩通常是由于应用程序中的错误,尽管它也可能是由于Connect IQ本身的错误.每当应用程序崩发生时,设备上写出或更新一个`CIQ_LOG.YAML`文件,并包含应用程序开发人员可以用来解决该问题的崩相关的信息.

```yaml
Error: ErrorName
Details: Error description.
Time: 2018-02-07T19:07:56Z
Store-Id: 00000000-0000-0000-0000-000000000000
Store-Version: 0
Device-Id: 006-B0000-00
Device-Version: '0.00'
ConnectIQ-Version: 3.0.0
Filename: PRGNAME
Appname: DemoAppName
Stack:
  - pc: 0x100000ef
    File: 'C:\Path\To\source\File.mc'
    Line: 53
    Function: function_causing_error
  - pc: 0x10000080
    File: 'C:\Path\To\source\File2.mc'
    Line: 30
    Function: otherBrokenItems
```

`ConnectIQ-Version`输入不是设备的Connect IQ版本.相反,这指开发人员在出口应用程序时使用的SDK版本.

** 注:** 在API级别3.0.0之前的设备中,将打印一个简单的错误日志为`CIQ_LOG.TXT`.

### Device Crashes

设备崩通常会导致设备重新启动或结.这些表明Connect IQ或设备固件错误,并且应该比应用程序崩少得多.当设备崩发生时,将`ERR_LOG.txt`文件写给`/GARMIN`在设备上,包含与崩相关的堆痕迹信息.请在我们的开发者论坛上报告崩时提供此文件.Garmin的设备团队可以查看设备崩日志来确定崩的原因,通常将在未来的固件发布中提供修复.

关于日志文件的注释

当设备上的任何日志文件大小超过5kb时,它将自动归档到`<LOGNAME>.BAK`,并启动一个新的日志.任何旧的`.BAK`文件都会在存档发生时被重写,因此日志可以达到最大的空间约为10kb.
