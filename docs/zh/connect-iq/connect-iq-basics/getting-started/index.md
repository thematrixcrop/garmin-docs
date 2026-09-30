---
title: "Getting Started"
---
# 入门


![第 3 步是什么？](/connect-iq/resources/programmers-guide/learning-monkey.png)

## 连接智能 SDK 管理器

连接 IQ SDK 管理器应用程序将您的连接 IQ SDK 和设备库保持更新.随着它们的可用性,它将从云中下载 SDK 更新和新设备.

###安装 Connect IQ SDK 管理器

1.  前往 [developer.garmin.com/connect-iq/sdk](/connect-iq/sdk/)

2. 在**安装SDK管理器**部分中选择*接受和下载*

3. 在一个方便的地方创建一个新的文件

1. **Windows和Linux** - 将可执行和支持文件复制到新的文件

2. **Mac** - 打开磁盘图像并将SDK管理器复制到新的文件

4.启动 SDK 管理器.你应该看到以下内容:


    ![启动 SDK Manager](/connect-iq/resources/programmers-guide/sdk-manager-start.png)

5. 按**登录**按,输入连接帐户的凭证:


    ![凭据输入](/connect-iq/resources/programmers-guide/sdk-manager-login.png)

6. SDK 管理器可以记住您的凭证,或者您可以每次重新输入它们.选择您喜欢的选项,然后按 **Next**

7. 您将会有自动更新Connect IQ SDK的选项,或者在新版本可用时会被通知. 选择您喜欢的选项,然后按**Next**


    ![更新 SDK](/connect-iq/resources/programmers-guide/sdk-manager-update-sdk.png)

8. 您将获得Connect IQ设备更新的选项,或者在新设备可用时被通知.如果您想自动更新设备,您可以选择您想要更新的设备类型. 选择您喜欢的选项,然后按 ** 完成**


    ![更新设备](/connect-iq/resources/programmers-guide/sdk-manager-update-devices.png)


SDK 管理器有两个标签: **SDK**和 **设备**. SDK 标签显示了 SDK 有哪些.使用![](/connect-iq/resources/programmers-guide/sdk-manager-download-button.png)

##### 子C视觉工作室代码扩展

子C扩展增加了使用Connect IQ SDK的支持,包括语法突出编辑器,构建集成器和集成的调试器.子C扩展需要Oracle JavaTM运行环境的[Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview),版本11或更高,以及Connect IQ SDK版本4.0.6或更高.

#######安装子C扩展

1. 在视觉工作室代码中,进入 *查看* > *扩展*

2. 在扩展市场中,输入"子C"的搜索框

3. 从Garmin中选择"子C"扩展

4. 使用*安装*按安装Visual Studio Code中的扩展.这需要重新启动Visual Studio Code.

5. 视觉工作室代码重新启动后,请调用*Ctrl + Shift + P* (*在Mac上命令 + Shift + P*)

6. 输入"验证安装"并选择*子C:验证安装*


#####生成一个开发钥匙

连接 IQ 编译器需要开发者密钥来签署应用程序,当它们被编译和包装时.所需的密钥必须是RSA 4096位私钥.

** 注:** 重要的是要跟踪你签署应用程序包的关键.你需要使用相同的关键在商店上签署现有应用程序的更新.如果你丢失了原始签名关键,你将无法更新你的应用程序.

#######使用子C扩展来生成钥匙

如果您有开发者密钥,您可以通过选择 *文件 > 偏好 > 设置 > 子C*来设置该密钥的路径,并将 *子C: 开发者密钥路径*设置在开发者密钥上.如果您没有开发者密钥,您可以使用以下步骤生成一个:

1. 调用*Ctrl + Shift + P* (在 Mac 上使用命令+ Shift + P*)

2. 输入"生成开发钥匙"并选择*子C:生成开发钥匙*

3. 选择保存开发者密钥的目录


在"Connect IQ"编译器偏好中所指定的开发者密钥将在编译项目时自动传递给编译器.

Connect IQ 仅支持 Ubuntu Linux 发行版
