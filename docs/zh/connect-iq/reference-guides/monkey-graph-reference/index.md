---
title: "Monkey Graph 参考"
---
# Monkey Graph 参考

我们可以使用 Monkey Graph 工具创建活动记录的预览。 Monkey Graph 工具需要以下内容：

1.  包含记录的开发数据的 FIT 文件

2. 应用程序的智商文件 (您可以通过[App Export Wizard](/connect-iq/core-topics/publishing-to-the-store/#publishing-to-the-connect-iq-store)获得智商文件).


该工具允许您在上传应用进行审核之前测试图表的外观。

您可以通过两种方式使用 SDK 中包含的 Monkey Graph 工具：

## 在 Visual Studio Code 中启动 Monkey Graph 工具：

1.  召唤命令面板

2.  选择 *Monkey C: 打开 Monkey Graph*


这将启动一个用于 Monkey Graph 工具的新窗口。

## 通过命令行启动 Monkey Graph 工具：

您可以从命令行使用以下方法启动 Monkey Graph 工具：

```bash
$ monkeygraph
```

## 使用 Monkey Graph 工具：

1.  点击"文件"


![](/connect-iq/resources/programmers-guide/fitgraph-file.png)

1.  点击"打开 IQ 文件"

2.  选择从您的项目生成的 IQ 文件

3.  点击"打开 FIT 文件"

4.  选择包含已记录开发数据的 Fit 文件


新视图将启动显示数据的图表：

![](/connect-iq/resources/programmers-guide/fitgraph-graph.png)

在这里我们看到了另一个页面上的一些次要数据：

![](/connect-iq/resources/programmers-guide/fitgraph-graph2.png)
