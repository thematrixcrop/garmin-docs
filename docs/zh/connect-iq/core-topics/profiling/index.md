---
title: "应用性能分析"
---
# 应用性能分析

Connect IQ 性能分析器会记录函数的总执行时间和函数内部代码的执行时间，并允许您查看不同的调用栈分析结果。性能分析器集成在模拟器中，设备也支持硬件性能分析。

## 从模拟器进行性能分析

要从模拟器启动性能分析器，请转到 *File -> View Profiler*。您将看到以下内容：

![](/connect-iq/resources/programmers-guide/profiler-empty.png)

运行应用到需要分析的位置时，点击 **Start** 开始收集数据，点击 **Stop** 完成采集。数据随后会显示在性能分析器窗口中：

![](/connect-iq/resources/programmers-guide/profiler.png)

收集的数据如下：

| 名称 | 描述 | 备注 |
| --- | --- | --- |
| Function（函数） | 被调用的函数签名 |  |
| Total Time (us)（总时间，微秒） | 执行函数的总时间（微秒）。 | 包括捕获期间的所有调用。 |
| Actual Time (us)（实际时间，微秒） | 在函数内花费的时间（微秒）。 | 包括捕获期间的所有调用，但忽略调用其他函数所花的时间。 |
| Average Time (us)（平均时间，微秒） | 每次调用在函数中花费的平均时间（微秒） | 这是执行函数的时间的平均值 |
| Call Count（调用次数） | 采样期间函数被调用的次数 |  |
| Call Stack（调用栈） | 指示哪些函数调用了采样函数 |  |

如果您只想采样一段时间，可以在 *Profiler -> Settings* 中设置采样周期。达到指定时间后，性能分析器会自动停止。

## 在设备上进行分析

您可以通过使用 `-k` 选项编译应用来对设备进行性能分析。要在 Visual Studio Code 中执行此操作，编辑工作区设置中的 Monkey C 编译器选项：

![](/connect-iq/resources/programmers-guide/profiler-command-line.png)

完成后，使用 *Monkey C: Build for Device* 创建可执行文件。侧载并运行程序后，系统会在 `GARMIN\APPS\LOGS` 文件夹中生成 `<appname>.PRF` 文件。您可以使用性能分析器窗口中的 **Load** 按钮，将 PRF 文件加载到模拟器的性能分析工具中进行分析。

## 最佳实践

您可以按总时间、实际时间、平均时间和调用次数对采样函数重新排序。这些指标都能帮助您识别性能瓶颈。例如，平均耗时较低但调用频繁的函数有时会造成性能瓶颈。找出应用运行时间最长的函数，并据此集中进行优化。
