---
title: "Error Reporting Application (ERA)"
---
# Error Reporting Application (ERA)

The ERA tool 可用于 view your app's crashes after it has been released on the store. If your app crashes on a device the error report will be collected and aggregated by the ERA server. These reports can be viewed for up to 30 days after a crash occurs. This tool is available in the bin folder of the SDK.

## Getting Started

要启动图形ERA工具,要么从视觉工作室代码的命令中运行*Monkey C:Start ERA Viewer*命令,要么使用[Command Line](#Command-Line).第一次运行工具时,会出现*登录提示*窗口,要求您登录开发者帐户.一旦您完成登录过程,应用程序列表将下载,应用程序选择列表将填满.

### Command Line

您可以从命令行启动 Graphical ERA 工具,只需运行`java -jar era.jar`在当前SDK的**bin**文件中.

ERA工具还可以直接从命令行中获取单个应用程序的崩报告,通过运行您当前 SDK 的 **bin**文件内的`era`命令. 这将在 JSON 格式中输出给定的应用程序的崩.请注意,在上述方法中的任何一种方式中首次启动ERA工具时,您可能会被要求登录您的开发人员帐户,如果您以前没有这样做.

```
> era [-a <arg>]
```

| Argument | Definition |
| --- | --- |
| `-a <arg>` |应用程序将 UUID 检索到  的故障|
| `-h` | Prints help text |

## Viewing App Settings

![](/connect-iq/resources/programmers-guide/era_manage_apps.png)

管理应用程序窗口允许您查看与您的开发者帐户相关的应用程序.您可以在菜单中选择**设置>管理应用程序** 启动此窗口.应用程序列表是颜色编码的,以便轻松识别应用程序的状态.

| Font Style | App Status | Crashes Viewable |
| --- | --- | --- |
| Normal | Released app | Yes |
| Gold | Beta app | Yes |
| Strikethrough |应用程序隐藏| No |

在此窗口中,您可以重新排列应用程序并改变应用程序的设置.为了重新排列应用程序,单击应用程序并单击****或****按.该窗口中的应用程序的排列反映在崩盘报告视图中的应用程序选择框中.为了更改应用程序的设置,请选择应用程序在列表中,单击**i**按.

![](/connect-iq/resources/programmers-guide/era_app_info.png)

在应用程序设置窗口中,您可以隐藏应用程序在崩报告视图中的下拉框中.如果选出**隐藏这个应用程序**框,则该应用程序将不会显示在崩报告视图应用程序列表中.

## Viewing Crash Reports

![](/connect-iq/resources/programmers-guide/era_report_view.png)

The crash report view allows you to view all uploaded crash reports for an app in the last 30 days. At the top of this window you can select which app's crash reports to view. After selecting an app the latest reports will be downloaded from the server. In the left pane of the window a list of crash reports will be shown. Each unique crash will be identified by file name, function, and line number where the crash occurred. Choosing a crash in the left pane causes the details for the crash to be shown in the right pane. At the top of the right pane the **Fixed** checkbox 可用于 indicate that this particular crash has been fixed. The fixed status will persist across application runs and SDK upgrades. You can change the sort order of the crash reports you are viewing by changing the value in the **Sort By** selector.

| Font Style | Crash Status |
| --- | --- |
| Normal | Crash has been viewed. |
| Bold | Crash has not been viewed. |
| Strikethrough | Crash has been marked as fixed. |
