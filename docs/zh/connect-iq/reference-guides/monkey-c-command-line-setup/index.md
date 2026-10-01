---
title: "从命令行使用 Monkey C"
---
<a id="using-monkey-c-from-the-command-line"></a>
# 从命令行使用 Monkey C

在 Mac 或 Windows 上开始安装前，需要先安装 Oracle Java™ Runtime Environment 11 或更高版本。完成后，继续按照对应平台的安装说明操作。

## OS X 安装

1.  [安装 Connect IQ SDK Manager](/connect-iq/connect-iq-basics/getting-started/)，下载 SDK 并设置活动 SDK。

2.  在 Terminal 中将 `PATH` 指向活动 Connect IQ 的 `bin` 目录。要临时添加到当前 shell 实例，请执行：


```bash
$ export PATH=$PATH:`cat $HOME/Library/Application\ Support/Garmin/ConnectIQ/current-sdk.cfg`/bin
```

要永久添加，请在文本编辑器中打开 `.bash_profile`：

```bash
$ touch ~/.bash_profile
$ open ~/.bash_profile
```

将下面一行添加到文件中并保存：

```bash
export PATH=$PATH:`cat $HOME/Library/Application\ Support/Garmin/ConnectIQ/current-sdk.cfg`/bin
```

## Windows 安装

1.  [安装 Connect IQ SDK Manager](/connect-iq/connect-iq-basics/getting-started/)，下载 SDK 并设置活动 SDK。

2.  在命令提示符中将 `PATH` 指向活动 Connect IQ 的 `bin` 目录：


```bash
> for /f usebackq %i in (%APPDATA%\Garmin\ConnectIQ\current-sdk.cfg) do set CIQ_HOME=%~pi
> set PATH=%PATH%;%CIQ_HOME%\bin
```

## Linux 安装

1.  [安装 Connect IQ SDK Manager](/connect-iq/connect-iq-basics/getting-started/)，下载 SDK 并设置活动 SDK。

2.  在终端中将 `PATH` 指向活动 Connect IQ 的 `bin` 目录：


```bash
$ export PATH=$PATH:`cat $HOME/.Garmin/ConnectIQ/current-sdk.cfg`/bin
```

要永久添加，请在文本编辑器中打开 `.bash_profile`：

```bash
$ touch ~/.bash_profile
$ nano ~/.bash_profile
```

将下面一行添加到文件中并保存更改：按 `CTRL-X`。

```bash
export PATH=$PATH:`cat $HOME/.Garmin/ConnectIQ/current-sdk.cfg`/bin
```

## 基本命令

安装后会有三个新的 shell 命令可用：`connectiq`、`monkeyc` 和 `monkeydo`。

-   `connectiq` 启动 Connect IQ Simulator。您可以在将应用运行到设备前，先在计算机上运行和测试应用。在 Simulator 中，应用只能访问当前模拟设备支持的 API。例如，`PersistedContent` 只在 Connect IQ v2.2.x 或更高版本中提供，因此运行早期 Connect IQ 版本的设备无法使用该 API。

-   `monkeyc` 调用 Monkey C 编译器。编译器可以从多个文件读取代码，并将它们链接成一个 Connect IQ 可执行文件（PRG 文件）。用法如下：


```bash
> monkeyc [-d <arg>] [-f <arg>] [-o <arg>] [-y <arg>]
```

| 参数 | 定义 |
| --- | --- |
| `-d <arg>` | 目标设备 |
| `-f <arg>` | Jungle 文件 |
| `-o <arg>` | 要创建的输出文件 |
| `-y <arg>` | 用于签名构建的[私钥](#generating-a-key-using-openssl) |

**注意：** 有关全部命令行选项的更多信息，请参阅 Monkey C 指南中的[编译器选项](/connect-iq/monkey-c/compiler-options/)部分。

-   `monkeydo` 在 Simulator 中运行 Connect IQ 可执行文件。必须先使用 `connectiq` 启动 Simulator。用法如下：


```bash
monkeydo [executable] [device_id] [-n] [-t | -t test_name]
```

| 参数 | 定义 |
| --- | --- |
| `executable` | 要运行的 Connect IQ 可执行文件（PRG） |
| `device_id` | 要模拟的设备（例如 `fenix5plus`） |
| `-n` | 以传感器原生配对模式运行应用 |
| `-t` | 执行 Run No Evil 单元测试。可以提供可选的测试方法或类名，仅运行该测试或测试集合。 |

下面是一个从命令行构建和运行应用的基本示例：

```bash
// Launch the simulator:
> connectiq

// Compile the executable:
> monkeyc -d fenix5plus -f /path/to/monkey.jungle -o project_name.prg -y /path/to/Dev_Key

// Run in the simulator
> monkeydo myApp.prg fenix5plus
```

**注意：** 有关 `-f` 选项和 Jungle 构建框架的更多信息，请参阅本指南中的[覆盖资源](/connect-iq/reference-guides/jungle-reference/#jungle-reference-guide)部分。

<a id="generating-a-key-using-openssl"></a>
## 使用 OpenSSL 生成密钥

如果从命令行工作，可以使用 [OpenSSL](https://www.openssl.org/) 生成 RSA 密钥。以下命令会生成有效的签名密钥。

```bash
> openssl genrsa -out developer_key.pem 4096
> openssl pkcs8 -topk8 -inform PEM -outform DER -in developer_key.pem -out developer_key.der -nocrypt
```

将开发者密钥 `developer_key.der` 通过 `-y` 命令行选项传递给编译器。
