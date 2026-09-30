---
title: "Compiler Options"
---
# 编译器选项

下面是`monkeyc`的命令行选项:

| Short Option | Long Option | Argument | Description |
| --- | --- | --- | --- |
| `-d` | `--device` | Device identifier |需要用于构建可执行设备. 指定该设备的目标.|
| `-e` | `--package-app` | None |指定输出是`IQ`文件,用于上传到应用商店.|
| `-f` | `--jungles` |长分开了 jung林文件的路径列表|** 要求**.每个林都指定一个项目,可以包括一个应用程序项目和多个桶项目.|
| `-g` | `--debug` | None |打印了故障输出.|
| `-h` | `--help` | None |打印帮助信息.|
| `-k` | `--profile` | None |在执行式中包含配置文件信息.当一个配置文件信息的执行式在设备上运行时,设备将生成可在模拟器中分析的配置文件信息.|
| `-l` | `--typecheck` |`0`=关闭,`1`=渐进,`2`=信息,`3`=严格| See the [Monkey Types](/connect-iq/monkey-c/monkey-types/) section 更多信息. |
| `-o` | `--output` |文件输出|**要求**. 指定编译器的输出.|
| `-O` | `--optimization` |`0`= 没有,`1`= 基本,`2`= 快速优化,`3`= 缓慢优化,`p`= 性能优化,`z`= 代码空间优化|默认是`1`用于调试中构建,`2`用于释放中构建. 数字级别可以用字母补充,因此`-O 2pz`是允许的参数.|
| `-r` | `--release` | None | Do not include debug information in PRG. |
| `-t` | `--unit-test` | None |包含单元测试在构建中.|
| `-v` | `--version` | None |打印编译版本.|
| `-w` | `--warn` | None |默认关闭. 显示器生成的构建警告.|
| `-y` | `--private-key` |开发者键的路径|** 要求**. 指定用于签署`PRG`或`IQ`文件的开发钥匙.|

## Debug Logging

如果您遇到`monkeyc`编译器的错误,则需要生成日志以提供您的报告.

| Long Option | Argument | Description |
| --- | --- | --- |
| `--debug-log-level` |`0`= 错误,`1`= 基本调试,`2`= 中间调试,`3`= 变态调试|指定输出的动词性水平.|
| `--debug-log-output` |创建日志文件的路径|指定创建日志文件的路径|
| `--debug-log-device` | Device identifier |允许在建造子时限制日志到特定设备.|

请注意,日志层面包括越来越多的有关您的源项目信息.如果你想保持您的项目信息私密,请将日志层面限制在`1`或以下.更多的词汇性将使Garmin更容易调试任何问题.

## Feature Control Options

这些选项用于控制不同的功能:

| Long Option | Argument | Description |
| --- | --- | --- |
| `--disable-api-has-check-removal` | None | Disables optimizing out API has checks. |
| `--disable-v2-opcodes` | None |禁用V2代码的生成.|

## Private Options

这些选项通常已经设置,不应该需要使用:

| Short Option | Long Option | Argument | Description |
| --- | --- | --- | --- |
| `-a` | `--apidb` |进入`api.db`的路径|指定到API链接信息的路径.|
| `-b` | `--apimir` |进入`api.mir`的路径|指定到API类型信息的路径.|
| `-i` | `--import-dbg` |进入`api.debug.xml`的路径|进入API调试信息的路径.|
| `-p` | `--project-info` |进入`projectInfo.xml`的路径|道路到SDK项目定义.|
