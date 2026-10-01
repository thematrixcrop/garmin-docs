---
title: "入门"
---
<a id="getting-started"></a>

# 入门


![第 3 步是什么？](/connect-iq/resources/programmers-guide/learning-monkey.png)

## Connect IQ SDK 管理器

Connect IQ SDK 管理器会让 Connect IQ SDK 和设备库保持最新。云端提供 SDK 更新或新设备后，管理器会自动下载这些内容。

### 安装 Connect IQ SDK 管理器

1.  前往 [developer.garmin.com/connect-iq/sdk](/connect-iq/sdk/)

2. 在 **Install the SDK Manager** 部分选择 *Accept & Download*。

3. 在方便的位置创建一个新文件夹。

    1. **Windows 和 Linux**：将可执行文件和支持文件复制到新文件夹。

    2. **Mac**：打开磁盘映像，并将 SDK 管理器复制到新文件夹。

4. 启动 SDK 管理器。此时应看到以下界面：


    ![启动 SDK Manager](/connect-iq/resources/programmers-guide/sdk-manager-start.png)

5. 单击 **Login**，输入 Connect 帐户的凭据：


    ![凭据输入](/connect-iq/resources/programmers-guide/sdk-manager-login.png)

6. SDK 管理器可以记住您的凭据，也可以让您每次重新输入。选择偏好的选项，然后单击 **Next**。

7. 您可以选择自动更新 Connect IQ SDK，或在新版本可用时接收通知。选择偏好的选项，然后单击 **Next**。


    ![更新 SDK](/connect-iq/resources/programmers-guide/sdk-manager-update-sdk.png)

8. 您可以选择自动更新 Connect IQ 设备，或在有新设备可用时接收通知。如果希望自动更新设备，还可以选择要更新的设备类型。选择偏好的选项，然后单击 **Finish**。


    ![更新设备](/connect-iq/resources/programmers-guide/sdk-manager-update-devices.png)


SDK 管理器有两个选项卡：**SDK** 和 **Devices**。**SDK** 选项卡显示可用的 SDK。使用 ![](/connect-iq/resources/programmers-guide/sdk-manager-download-button.png)

#### Monkey C Visual Studio Code 扩展

Monkey C 扩展为 Connect IQ SDK 提供支持，包括带语法高亮的编辑器、构建集成和集成调试器。Monkey C 扩展需要 [Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)、版本 11 或更高版本的 Oracle Java™ 运行时环境，以及 4.0.6 或更高版本的 Connect IQ SDK。

##### 安装 Monkey C 扩展

1. 在 Visual Studio Code 中，选择 *View > Extensions*。

2. 在扩展市场的搜索框中输入“Monkey C”。

3. 选择 Garmin 发布的 *Monkey C* 扩展。

4. 单击 *Install* 在 Visual Studio Code 中安装扩展。安装后需要重新启动 Visual Studio Code。

5. Visual Studio Code 重启后，按 *Ctrl + Shift + P*（Mac 上按 *Command + Shift + P*）打开命令面板。

6. 输入“Verify Installation”，然后选择 *Monkey C: Verify Installation*。


#### 生成开发者密钥

Connect IQ 编译器在编译和打包应用时需要使用开发者密钥进行签名。该密钥必须是 RSA 4096 位私钥。

**注意：** 请妥善保管用于签署应用包的密钥。更新商店中的现有应用时，必须使用同一密钥。如果丢失原始签名密钥，将无法更新该应用。

##### 使用 Monkey C 扩展生成密钥

如果已有开发者密钥，请选择 *File > Preferences > Settings > Monkey C*，将 *Monkey C: Developer Key Path* 设置为该密钥的路径。如果还没有开发者密钥，可以按以下步骤生成：

1. 按 *Ctrl + Shift + P*（Mac 上按 *Command + Shift + P*）打开命令面板。

2. 输入“Generate a developer key”，然后选择 *Monkey C: Generate a Developer Key*。

3. 选择保存开发者密钥的目录。


在 Connect IQ 编译器首选项中指定的开发者密钥，会在编译项目时自动传递给编译器。

Connect IQ 仅支持 Ubuntu Linux 发行版。
