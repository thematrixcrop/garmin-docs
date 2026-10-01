---
title: "Monkey C Visual Studio Code 扩展"
---
<a id="monkey-c-visual-studio-code-extension"></a>
# Monkey C Visual Studio Code 扩展

Monkey C 扩展为 Connect IQ SDK 提供支持，包括语法高亮编辑器、构建集成和集成式调试器。Monkey C 扩展需要 [Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)、Oracle Java™ Runtime Environment 11 或更高版本，以及 Connect IQ SDK 4.0.6 或更高版本。

Monkey C 扩展提供以下功能：

-   **实时错误和警告**：编辑 Monkey C、Jungle、Settings、MSS 和资源 XML 文件时显示错误和警告。报告的错误或警告会显示在 Problems 标签页中。

-   **自动补全**：编辑 Monkey C、Jungle 和 MSS 文件时，自动补全建议会根据检测到的作用域生成。在 Monkey C 编辑器中，在类或模块中补全 `function` 关键字即可获得带参数和类型信息的函数补全。

-   **引用**：右键点击类或模块成员，在上下文菜单中选择 *Find all References*，即可查找该成员的所有引用。也可以打开命令面板并输入 `@symbol name` 搜索当前文档中的符号，或输入 `#symbol name` 搜索整个工作区。

-   **悬停查看**：将鼠标悬停在符号上，即可查看变量、函数名、类或模块的类型信息。

-   **转到定义**：在上下文菜单中选择 *Go to Definition*，即可跳转到类或模块成员的定义。

-   **折叠范围**：现在可以折叠注释、导入语句和代码区域。


要充分利用这些功能，项目的类型检查级别需要设为渐进（gradual）或更高。实时错误针对项目上一次构建所使用的设备；如果当前会话还没有构建过产品，则针对 manifest 中的第一个产品。

## 安装 Monkey C 扩展

1.  在 Visual Studio Code 中选择 *View* > *Extensions*。

2.  在 Extensions Marketplace 搜索框中输入 “Monkey C”。

3.  选择 Garmin 提供的 *Monkey C* 扩展。

4.  点击 *Install* 在 Visual Studio Code 中安装扩展。安装后需要重启 Visual Studio Code。

5.  Visual Studio Code 重启后，使用 *Ctrl + Shift + P*（Mac 使用 *Command + Shift + P*）打开命令面板。

6.  输入 “Verify Installation”，然后选择 *Monkey C: Verify Installation*。


## 项目管理

可以使用以下命令创建新项目和导出项目：

| 命令 | 描述 |
| --- | --- |
| *Monkey C: New Project* | 创建新的 Connect IQ 应用或 Monkey Barrel。 |
| *Monkey C: Build Current Project* | 针对指定设备编译当前项目。 |
| *Monkey C: Build for Device* | 打开导出向导，为设备生成可侧载的 `PRG`。 |
| *Monkey C: Clean Project* | 删除构建系统生成的缓存产物。 |
| *Monkey C: Export Project* | 为项目创建 `IQ` 或 `barrel` 文件。 |

## 编辑 Manifest

可以使用以下命令编辑和更新项目的 `manifest.xml`：

| 命令 | 描述 |
| --- | --- |
| *Monkey C: Edit Products* | 编辑 `manifest.xml` 中的产品。只能选择支持最低 SDK 版本的产品。 |
| *Monkey C: Edit Permissions* | 编辑 `manifest.xml` 中的权限。 |
| *Monkey C: Edit Languages* | 编辑 `manifest.xml` 中的语言。 |
| *Monkey C: Edit Application* | 编辑 `manifest.xml` 中的应用元数据（名称、标签和标识符）。 |
| *Monkey C: Configure Barrel* | 使用向导为项目添加或移除 Monkey Barrel。 |
| *Monkey C: Set Products by Connect IQ Version* | 批量选择满足指定 Connect IQ 版本的所有产品。 |
| *Monkey C: Edit Annotations* | 向 Monkey Barrel 项目添加新注解。 |
| *Monkey C: Regenerate UUID* | 为项目创建新的应用 UUID。 |

## 访问 Connect IQ SDK

以下命令可以在 Visual Studio Code 中访问 SDK 工具和文档：

| 命令 | 描述 |
| --- | --- |
| *Monkey C: Open ERA Viewer* | 打开[错误报告应用](/connect-iq/core-topics/exception-reporting-tool/#error-reporting-application)工具。 |
| *Monkey C: Open Monkey Graph* | 打开 [Monkey Graph](/connect-iq/reference-guides/monkey-graph-reference/#monkey-graph-reference) 工具。 |
| *Monkey C: Open Monkey Motion* | 打开 [Monkey Motion](/connect-iq/reference-guides/monkey-motion-reference/#monkey-motion) 工具。 |
| *Monkey C: Open SDK Manager* | 打开 Connect IQ SDK Manager。 |
| *Monkey C: View Documentation* | 访问全部 Connect IQ SDK 文档。 |

## 运行程序

运行程序前，请确保编辑器中打开并选中了 `source` 文件夹内扩展名为 `.mc` 的源文件。

1.  选择 *Run > Run Without Debugging*（Mac 使用 *Command + F5*，其他平台使用 *Ctrl + F5*）。

2.  系统会显示应用支持的产品列表，请从中选择一个。


如果一切正常，Simulator 会启动并显示所选设备：

![](/connect-iq/resources/programmers-guide/first_app.png)

## 运行 Run No Evil 测试

可以使用以下命令运行测试：

| 命令 | 描述 |
| --- | --- |
| *Monkey C: Run Tests* | 运行应用中的所有 Run No Evil 测试。 |

## 运行 Complication Publisher 和 Complication Subscriber 应用

可以使用以下命令运行并调试 Complication Publisher 和 Complication Subscriber 应用：

| 命令 | 描述 |
| --- | --- |
| *Monkey C: Launch Complication* | 在调试器中运行 Complication 应用。 |

也可以在 `launch.json` 中添加 “Run Complication Apps” 启动配置，以有无调试的方式运行 Complication 应用。

## 以传感器配对模式运行应用

可以使用以下命令以传感器配对模式启动和调试应用：

| 命令 | 描述 |
| --- | --- |
| *Monkey C: Launch Native Pairing* | 在调试器中以传感器原生配对模式运行应用。 |

也可以在 `launch.json` 中添加 “Run Native Pairing” 启动配置，以有无调试的方式运行传感器配对模式。

## 编辑启动配置

运行或调试产品时，扩展会为项目创建 `launch.json`。`launch.json` 提供了许多用于添加启动功能的自定义选项。

| 属性 | 必需 | 类型 | 描述 |
| --- | --- | --- | --- |
| `prg` | x | 路径（Path） | 项目 PRG 文件的绝对路径。 |
| `prgDebugXml` | x | 路径（Path） | 项目调试 XML 文件的绝对路径。 |
| `stopAtLaunch` |  | 布尔值（Boolean） | 调试时，程序启动后立即中断。 |
| `runTests` |  | 布尔值（Boolean） | 使用此配置运行时，运行 Run No Evil 测试用例。 |
| `device` |  | 产品标识符（Product Identifier） | 要运行的设备，或使用 `${command:GetTargetDevice}` 在每次运行时选择新设备。 |
| `settingsJson` |  | 路径（Path） | 项目 Settings 文件的绝对路径。 |
| `tests` |  | 字符串数组 | 可选的字符串数组，列出要运行的测试名称。 |
| `runNativePairing` |  | 布尔值（Boolean） | 以传感器原生配对模式运行应用。 |
| `complicationPublisherFolder` |  | 路径（Path） | Complication Publisher 项目文件夹的绝对路径。 |
| `complicationSubscriberFolder` |  | 路径（Path） | Complication Subscriber 项目文件夹的绝对路径。 |
