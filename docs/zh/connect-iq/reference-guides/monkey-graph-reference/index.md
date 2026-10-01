---
title: "Monkey Graph 参考"
---
# Monkey Graph 参考

Monkey Graph 工具可以根据活动中记录的数据生成预览图表。使用该工具需要以下文件：

1. 包含已记录开发者数据的 FIT 文件；
2. 应用的 IQ 文件（可以通过[应用导出向导](/connect-iq/core-topics/publishing-to-the-store/#publishing-to-the-connect-iq-store)获取）。

您可以在上传应用审核前，使用该工具检查图表的显示效果。

SDK 附带的 Monkey Graph 工具有两种启动方式。

## 在 Visual Studio Code 中启动 Monkey Graph

1. 打开命令面板。
2. 选择 *Monkey C: Open Monkey Graph*。

此时会打开一个新的 Monkey Graph 工具窗口。

## 从命令行启动 Monkey Graph

在命令行中执行以下命令：

```bash
$ monkeygraph
```

## 使用 Monkey Graph

1. 点击“File”。

   ![](/connect-iq/resources/programmers-guide/fitgraph-file.png)

2. 点击“Open IQ File”。
3. 选择项目生成的 IQ 文件。
4. 点击“Open FIT File”。
5. 选择包含已记录开发者数据的 FIT 文件。

工具会打开一个新视图，以图表显示数据：

![](/connect-iq/resources/programmers-guide/fitgraph-graph.png)

另一个页面还会显示一些辅助数据：

![](/connect-iq/resources/programmers-guide/fitgraph-graph2.png)
