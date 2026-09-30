---
title: "Using Monkey C from the Command Line"
---
通过命令线的子C

在开始在Mac或Windows上安装之前,您需要安装Oracle JavaTM运行环境版本11或更高的版本.

## OS X Installation

1.[Install the Connect IQ SDK Manager](/connect-iq/connect-iq-basics/getting-started/),下载SDK,设置主动SDK.

2. 将`PATH`指向终端的Connect IQbin目录.暂时将其添加到单个本地实例中:


```bash
$ export PATH=$PATH:`cat $HOME/Library/Application\ 支持/Garmin/ConnectIQ/current-sdk.cfg`/bin
```

为了更持久的添加,在文本编辑器中打开`.bash_profile`:

```bash
$ touch ~/.bash_profile
$ open ~/.bash_profile
```

然后将下面的行添加到文件中,并保存更改:

```bash
export PATH=$PATH:`cat $HOME/Library/Application\ 支持/Garmin/ConnectIQ/current-sdk.cfg`/bin
```

## Windows Installation

1.[Install the Connect IQ SDK Manager](/connect-iq/connect-iq-basics/getting-started/),下载SDK,设置主动SDK.

2. 在命令提示中,指向`PATH`到活跃的连接IQbin目录:


```bash
> for /f usebackq %i in (%APPDATA%\Garmin\ConnectIQ\current-sdk.cfg) do set CIQ_HOME=%~pi
> set PATH=%PATH%;%CIQ_HOME%\bin
```

## Linux Installation

1.[Install the Connect IQ SDK Manager](/connect-iq/connect-iq-basics/getting-started/),下载SDK,设置主动SDK.

2. 在命令提示中,指向`PATH`到活跃的连接IQbin目录:


```bash
$ export PATH=$PATH:`cat $HOME/.Garmin/ConnectIQ/current-sdk.cfg`/bin
```

为了更持久的添加,在文本编辑器中打开`.bash_profile`:

```bash
$ touch ~/.bash_profile
$ nano ~/.bash_profile
```

然后将下面的行添加到文件中,并保存更改:CTRL-X

```bash
export PATH=$PATH:`cat $HOME/.Garmin/ConnectIQ/current-sdk.cfg`/bin
```

## Basic Commands

在安装后,有三个新的 shell 命令:`connectiq`,`monkeyc`和`monkeydo`.

-   `connectiq` launches the Connect IQ simulator, which 可用于 run and test apps on your computer before running them on your device. In the simulator, your app will only have access to those APIs that are available on the currently simulated device. For example, an API only available in Connect IQ v2.2.x or higher, such as `PersistedContent`, will not be available on devices that run earlier versions of Connect IQ.

编译器可以从多个文件中取代代码并将它们连接到单个Connect IQ执行器 (一个PRG文件) 中. 使用方式是:


```bash
> monkeyc [-d <arg>] [-f <arg>] [-o <arg>] [-y <arg>]
```

| Argument | Definition |
| --- | --- |
| `-d <arg>` | Target device |
| `-f <arg>` | Jungle files |
| `-o <arg>` |创建输出文件|
| `-y <arg>` |[Private key](#generating-a-key-using-openssl)签字的构建|

** 注:** 查看 command子C指南中[Compiler Options](/connect-iq/monkey-c/compiler-options/)部分,了解所有命令行选项的更多信息.

-`monkeydo`在模拟器中运行了Connect IQ执行式.你必须以前使用`connectiq`启动模拟器.使用方式是:


```bash
monkeydo [executable] [device_id] [-n] [-t | -t test_name]
```

| Argument | Definition |
| --- | --- |
| `executable` |运行一个连接智商执行式 (PRG)|
| `device_id` |模拟设备 (例如"fenix5plus")|
| `-n` |在传感器本地对接模式下运行应用程序|
| `-t` |执行 Run No Evil 单元测试. 提供可选的测试方法或类名单,只运行该测试或测试集.|

以下是从命令行构建和运行周期的基本例子:

```bash
// Launch the simulator:
> connectiq

// Compile the executable:
> monkeyc -d fenix5plus -f /path/to/monkey.jungle -o project_name.prg -y /path/to/Dev_Key

// Run in the simulator
> monkeydo myApp.prg fenix5plus
```

** 注:** 更多关于`-f`选项和林构建框架的信息,请参阅本指南的[Overriding Resources](/connect-iq/reference-guides/jungle-reference/#jungle-reference-guide)部分.

##使用OpenSSL生成密钥

如果您从命令行工作,您可以使用[OpenSSL](https://www.openssl.org/)生成RSA键.下列命令将生成有效的签字键.

```bash
> openssl genrsa -out developer_key.pem 4096
> openssl pkcs8 -topk8 -inform PEM -outform DER -in developer_key.pem -out developer_key.der -nocrypt
```

这个开发者密钥,`developer_key.der`,通过`-y`命令行选项传递到编译器中.
