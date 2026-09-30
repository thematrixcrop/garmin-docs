---
title: "测试和调试"
---
# 测试和调试

![](/connect-iq/resources/programmers-guide/chopper-monkey.png)

Connect IQ 提供多种测试和调试应用的方法：

1. 使用 `println()` 语句进行基本调试

2. 使用 Visual Studio Code 调试器

3. 使用命令行调试器（`mdd`）


## 基本调试

测试 Connect IQ 应用的一种方法，是在代码中的关键位置加入 [System.println()](/connect-iq/api-docs/Toybox/System/#println-instance_function) 语句。在 Visual Studio Code 中，这些语句会将输出写入控制台。在设备上，输出会写入设备文件系统 `/GARMIN/APPS/LOGS` 目录下的 `<APPNAME>.TXT` 文件。

日志文件不会自动创建，因此必须在设备上手动创建，并将文件名设为与应用对应的 `PRG` 文件一致。例如，要记录 `/GARMIN/APPS/MYAPP.PRG` 的输出，必须创建 `/GARMIN/APPS/LOGS/MYAPP.TXT`。

## 使用 Visual Studio Code 调试

要开始调试应用，请选择 *Run > Start Debugging*。请确保编辑器中打开的是待调试项目的源文件。选择要调试的产品后，应用会在模拟器中以调试模式启动。只有在 Connect IQ 模拟器中运行应用时才支持调试。

### 设置断点

与 Visual Studio Code 中的其他项目一样，要在 Monkey C 编辑器中设置断点，请突出显示源代码旁垂直标尺中的某一行，然后单击设置断点。

![](/connect-iq/resources/programmers-guide/vscode-breakpoint.png)

### 查看应用状态

应用运行到断点时，可以在 *Run and Debug* 中查看运行时状态。*Variables* 视图显示参数和局部变量，*Call Stack* 显示不同栈帧中的状态。

应用在调试期间暂停时，系统会提示您打开原生的 *Debug* 视图。在该视图中可以查看调用栈。单击调用栈中的某个栈帧后，原生 *Variables* 视图会显示该栈帧中的相关变量。全局变量仅在最顶部的栈帧中可见，并以该栈帧中的 `$` 变量形式出现。

![](/connect-iq/resources/programmers-guide/vscode-debugging.png)

## 使用命令行调试

`mdd` 是 Monkey C 命令行调试器。它以 `gdb` 为模型，允许您加载可执行文件、设置断点，以及检查栈帧、局部变量和全局环境。

### 入门

开始前，请先启动模拟器：

```bash
> simulator &
[1] 27984
> mdd
```

启动后会看到以下提示：

```
Connect IQ Version 3.2.0. Type "help" for more information.
(mdd)
```

在命令行提示符下随时可以获取帮助：

```
(mdd) help
List of classes of commands:

breakpoints -- Making program stop at certain points.
data -- Examining data.
running -- Running the program.
stack -- Examining the stack.
status -- Status inquiries.
support -- Support facilities.

输入 `help` 加类名，可以列出该类中的命令。输入 `help all` 可以列出所有命令。输入 `help` 加命令名，可以查看完整文档。已定义的命令名可以使用缩写。
```

### 加载并运行可执行文件

要将可执行文件加载到 `mdd`，需要准备 `prg` 文件、调试 XML 文件，以及构建该 `prg` 时所针对的产品。如果使用 `monkeyc` 命令编译 `prg`，编译器也会生成 `debug.xml`；Visual Studio Code 通常会将这些文件输出到项目的 `bin` 文件夹中。

使用 `file` 命令将它们加载到 `mdd` 环境中。

```
(mdd) file MyFace.prg MyFace.prg.debug.xml fenix6
```

现在可以使用 `run` 命令运行可执行文件：

```
(mdd) r
Starting app: C:\Projects\ciq-apps\strava\bin\Strava.prg
```

### 设置断点

使用 `break` 命令，可以将断点分配给文件和行号：

```
(mdd) break \path\to\Thx.mc:1138
```

程序执行到该行时会暂停：

```
Hit breakpoint 1, initialize () at Thx.mc:1138
(mdd)
```

### 栈帧信息

可以使用 `info frame` 查询当前栈帧：

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

还可以使用 `print` 命令输出变量和表达式的值。

```
(mdd) print thx
thx = null
```

### 控制执行

使用 `next` 命令可以执行到下一行：

```
(mdd) next
```

使用 `step` 命令可以进入子程序：

```
(mdd) step
```

使用 `continue` 命令可以恢复完整执行，直到命中下一个断点或应用终止：

```
(mdd) continue
```

## 处理崩溃

即使进行了充分的调试，应用仍可能发生崩溃。Connect IQ 相关的设备崩溃通常分为两类，并且每类都会生成日志文件：*应用崩溃* 和 *设备崩溃*。

### 应用崩溃

应用崩溃通常会导致应用意外退出或显示“IQ!”图标，但不会导致整个设备崩溃或重启。这类崩溃通常由应用中的错误引起，也可能是 Connect IQ 本身的错误。每次应用崩溃时，设备都会在 `/GARMIN/APPS/LOGS` 中写入或更新 `CIQ_LOG.YAML` 文件，其中包含可帮助开发者排查问题的信息。CIQ_LOG 通常如下所示：

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

`ConnectIQ-Version` 条目不是设备上的 Connect IQ 版本，而是开发者导出应用时使用的 SDK 版本。

**注意：** API 级别低于 3.0.0 的设备会将简化的错误日志写入 `CIQ_LOG.TXT`。

### 设备崩溃

设备崩溃通常会导致设备重启或冻结。这通常表示 Connect IQ 或设备固件存在错误，因此发生频率应远低于应用崩溃。设备崩溃时，设备会在 `/GARMIN` 中写入 `ERR_LOG.txt` 文件，其中包含与崩溃相关的调用栈信息。在开发者论坛报告崩溃时，请附上此文件。Garmin 设备团队可以通过设备崩溃日志确定原因，并通常会在后续固件版本中提供修复。

### 日志文件说明

设备上的任何日志文件超过 5 KB 后，都会自动归档为 `<LOGNAME>.BAK`，然后开始写入新的日志文件。归档时会覆盖旧的 `.BAK` 文件，因此单个日志最多占用约 10 KB 空间。
