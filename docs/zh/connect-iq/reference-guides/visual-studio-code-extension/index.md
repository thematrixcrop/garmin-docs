---
title: "Monkey C Visual Studio Code Extension"
---
# Monkey C Visual Studio Code Extension

子C扩展增加了使用Connect IQ SDK的支持,包括语法突出编辑器,构建集成和集成的调试器.子C扩展需要[Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview),Oracle JavaTM运行环境版本11或更高,以及Connect IQ SDK版本4.0.6或更高.

This Monkey C extension offers several features, including:

- 实时错误和警告  Jung 在编辑子C,林,设置,MSS和资源XML文件时会显示这些错误和警告.任何报告的错误或警告将显示在问题选项.

- 自动完成  Mon 在编辑克C,克林和MSS文件时,自动完成建议将基于检测范围.在 editor克C编辑器中,您可以通过在一个类或模块中自动完成函数,使用参数和类型信息来自动完成函数.

- 引用  right 您可以通过右键点击它,从文本菜单中选择 Find all References来找到任何类或模块成员的所有引用.您还可以通过调用命令和输入 @symbol名称来搜索文档中的符号,或通过调用命令和输入 #symbol名称来搜索整个工作空间.

-    通过将鼠标悬浮在该符号上,查看有关变量,函数名称,类或模块的类型信息.

- 进入定义  通过从文本菜单中选择 进入定义 ,您可以跳到任何类或模块成员的定义.

- 折叠范围  评论,进口和代码区域现在可以折叠.


为了充分利用这些功能,您的项目需要具有逐步或更高的类型检查级别.实时错误将是该项目的最后一个设备,或表中的第一个产品,如果您的当前会议期间没有产品.

##安装子C扩展

1. 在视觉工作室代码中,进入 *查看* > *扩展*

2. 在扩展市场搜索框中输入"子C"

3. 从Garmin中选择"子C"扩展

4. 使用*安装*按安装Visual Studio Code中的扩展.这需要重新启动Visual Studio Code.

5. 视觉工作室代码重新启动后,请调用*Ctrl + Shift + P* (*在Mac上命令 + Shift + P*)

6. 输入"验证安装"并选择*子C:验证安装*


## Project Management

The following commands 可用于 create a new project and export it:

| Command | Description |
| --- | --- |
| *Monkey C: New Project* |创建新的Connect IQ应用程序或子桶|
| *Monkey C: Build Current Project* |将当前的项目与指定设备进行编译|
|*子C: 构建为设备*|输出导师生成设备的侧载`PRG`|
| *Monkey C: Clean Project* |删除构建系统生成的任何缓存文物|
| *Monkey C: Export Project* |为该项目创建一个`IQ`或`barrel`文件|

## Manifest Editing

The following commands 可用于 edit and update the `manifest.xml` of your project:

| Command | Description |
| --- | --- |
| *Monkey C: Edit Products* |在`manifest.xml`中编辑产品.只允许选择支持最小SDK版本的产品|
| *Monkey C: Edit Permissions* |编辑`manifest.xml`中的权限|
| *Monkey C: Edit Languages* |编辑`manifest.xml`中的语言|
| *Monkey C: Edit Application* |编辑`manifest.xml`中的应用程序元数据 (名称,标签,识别符)|
| *Monkey C: Configure Barrel* |Wizard 添加或删除您的项目中的子桶|
| *Monkey C: Set Products by Connect IQ Version* |允许所有符合Connect IQ版本的产品进行大规模选择|
| *Monkey C: Edit Annotations* |允许添加新的注释到子桶项目|
| *Monkey C: Regenerate UUID* |为您的项目创建一个新的应用程序 UUID|

##与连接智能 SDK 接口

下列命令允许您从Visual Studio Code访问SDK工具和文档:

| Command | Description |
| --- | --- |
| *Monkey C: Open ERA Viewer* |打开[Error Reporting Application](/connect-iq/core-topics/exception-reporting-tool/#error-reporting-application)工具|
| *Monkey C: Open Monkey Graph* |打开[Monkey Graph](/connect-iq/reference-guides/monkey-graph-reference/#monkey-graph-reference)工具|
| *Monkey C: Open Monkey Motion* |打开[Monkey Motion](/connect-iq/reference-guides/monkey-motion-reference/#monkey-motion)工具|
| *Monkey C: Open SDK Manager* |打开连接 IQ SDK 管理器|
| *Monkey C: View 文档* |提供所有 Connect IQ SDK 文件的访问|

## 运行程序

在运行程序之前,请确保您在编辑器中开放和选择了源文件中的一个 (在`source`文件中与`.mc`扩展)

1. 选择*运行>无需调试的运行* (*在Mac上命令+F5*,在其他平台上*Ctrl+F5*)

2. 您将被提示提供您的申请支持的产品列表.


如果一切顺利,模拟器将启动,

![](/connect-iq/resources/programmers-guide/first_app.png)

## Running Run No Evil Tests

您可以使用以下命令运行测试:

| Command | Description |
| --- | --- |
| *Monkey C: Run Tests* |在您的应用程序中运行所有 Run No Evil 测试|

## Running Complication Publisher and Complication Subscriber Apps

您可以使用以下命令运行并调试复杂性发布器和复杂性订阅器应用程序:

| Command | Description |
| --- | --- |
| *Monkey C: Launch Complication* |在调试器中运行复杂应用程序|

您还可以通过 launch.json 通过添加"Run Complication Apps"启动配置来运行复杂化应用程序.

## Running App in Sensor Pairing Mode

在传感器配对模式下使用以下命令启动和调试应用程序:

| Command | Description |
| --- | --- |
| *Monkey C: Launch Native Pairing* |运行应用程序在传感器本地配对模式在调试器中|

您还可以通过 launch.json 通过添加"Run Native Pairing"启动配置来在传感器配对模式中运行应用程序,无论是通过调试还是没有.

## 编辑发射配置

扩展将为您的项目创建`launch.json`当您运行或调试产品.`launch.json`提供了许多定制选项,以添加启动功能

| Property | Required | Type | Description |
| --- | --- | --- | --- |
| `prg` | x | Path |绝对路径到项目文件|
| `prgDebugXml` | x | Path |绝对路径到项目调试xml文件|
| `stopAtLaunch` |  | Boolean |在调试时,当程序启动时立即打断.|
| `runTests` |  | Boolean |在运行这个配置时运行NoEvil测试案例|
| `device` |  | Product Identifier |运行设备或`${command:GetTargetDevice}`每次运行选择新设备|
| `settingsJson` |  | Path |项目设置文件的绝对路径|
| `tests` |  |串列|选项列列列列出要运行的测试名称|
| `runNativePairing` |  | Boolean | Run app in sensor native pairing mode |
| `complicationPublisherFolder` |  | Path |一个复杂出版商的项目文件的绝对路径|
| `complicationSubscriberFolder` |  | Path |一个复杂订户的项目文件的绝对路径|
