---
title: "您的第一个 Connect IQ 应用"
---
<a id="your-first-connect-iq-app"></a>

# 您的第一个 Connect IQ 应用

## 创建您的第一个项目

首先创建新项目：

1. 按 *Ctrl + Shift + P*（Mac 上按 *Command + Shift + P*）打开命令面板。

2. 输入“New Project”，然后选择 *Monkey C: New Project*。

3. 出现 *Set Project Name* 提示时，输入新项目的名称。

4. 选择项目类型 *Watch Face*。

5. 选择项目使用的 *Simple* 模板。

6. 选择 *3.2.0* 作为最低 API 级别。

7. 设置新项目的父目录。


项目初始化后，会自动创建以下项目元素：

![](/connect-iq/resources/programmers-guide/new_project_structure.png)

bin

包含应用编译产生的二进制文件和调试输出。

resources

资源编译器的输入，例如布局、图像、字体、字符串和特定语言的资源。

source

包含 Monkey C 源文件，初始分为 `App` 和 `View` 文件。

manifest.xml

包含应用 ID、应用类型和目标设备等应用属性。

### 关于最低 SDK 版本字段

最低 SDK 版本用于配置设备兼容性，确保应用只启用至少支持所选 SDK 版本的设备。例如，如果应用严重依赖 **2.1.x** SDK 的 **Sensor History** 功能，可以将最低 SDK 版本设为 **2.1.x**。可用设备列表会自动筛除不兼容的产品。

<a id="editing-the-supported-products"></a>

### 编辑受支持的产品

创建项目后会打开项目清单，其中保存项目名称、应用 ID 和支持产品等元数据。大部分内容由 *New Project* 命令自动创建，但仍需编辑支持的产品：

1. 按 *Ctrl + Shift + P*（Mac 上按 *Command + Shift + P*）打开命令面板。

2. 输入“Edit Products”，然后选择 *Monkey C: Edit Products*。

3. 系统会列出所有满足最低 API 级别的产品。选中顶部复选框可选择全部产品，也可以选择要支持的特定产品。


项目清单会更新为包含所有选定的产品。

## 运行程序

运行程序前，请确保编辑器中打开并选中了一个源文件（位于 `source` 文件夹中，扩展名为 `.mc`）。

1. 选择 *Run > Run Without Debugging*（Mac 上按 *Command + F5*，其他平台按 *Ctrl + F5*）。

2. 系统会列出应用支持的产品，请从中选择一个。


如果一切顺利，模拟器会启动并显示所选的设备：

![](/connect-iq/resources/programmers-guide/first_app.png)

## 导入示例

要试用 Connect IQ 示例应用，请将其加载到 Visual Studio Code 中：

1. 单击 *File* 菜单。

2. 选择 *Open Folder...*。

3. 浏览已下载 SDK 的 `samples` 文件夹，选择要导入的示例根目录。

4. 单击 *Select Folder* 完成导入。


## 旁加载应用

Monkey C 扩展提供向导，帮助开发者将应用旁加载到设备。向导会为选定项目创建可执行文件（PRG）。使用方法如下：

1. 将设备连接到计算机。

2. 按 *Ctrl + Shift + P*（Mac 上按 *Command + Shift + P*）打开命令面板。

3. 输入“Build for Device”，然后选择 *Monkey C: Build for Device*。

4. 选择您想要构建的产品。如果无法选择设备（菜单为空），说明项目没有有效的设备配置。请参阅[编辑受支持的产品](#editing-the-supported-products)说明。

5. 选择输出目录，然后单击 *Select Folder*。

6. 在文件管理器中打开第 5 步选择的目录。

7. 将生成的 `PRG` 文件复制到设备的 `GARMIN/APPS` 目录。


使用命令面板时，您可能会误输入 *Money C* 而不是 *Monkey C*。这也很容易理解，因为 *Money C* 是 Monkey C 在音乐行业中的艺名，代表了诸如 *Mo' Monkeys Mo' Problems* 和 *Baller C Baller Do* 等热门歌曲。
