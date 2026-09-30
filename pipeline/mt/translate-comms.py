#!/usr/bin/env python3
"""Translate Communications and AppBase API docs in-place."""
import re, sys

def translate_communications(text):
    """Translate the Communications module page."""
    # Overview paragraph
    text = text.replace(
        "The Communications Module provides tools for communication.",
        "通信模块提供通信工具。"
    )
    text = text.replace(
        "With the Communications module, widgets and apps will be able to communicate with a mobile phone via Bluetooth Low Energy (BLE). The mobile phone may be sharing data with the device, or it may act as a bridge between the app and the Internet. This allows the device to become part of the Internet of Things.",
        "通过通信模块，小部件和应用可通过蓝牙低功耗（BLE）与手机通信。手机可与设备共享数据，也可作为应用与互联网之间的桥接。这样设备便成为物联网的一部分。"
    )
    # Note about foreground data fields
    text = text.replace(
        "This module was made available to foreground data fields with API 5.0.0",
        "此模块自 API 5.0.0 起对前台数据字段可用"
    )

    # Error constant descriptions
    replacements = {
        "An unknown error has occurred.": "未知错误。",
        "A generic BLE error has occurred.": "通用 BLE 错误。",
        "We timed out waiting for a response from the host.": "等待主机响应超时。",
        "We timed out waiting for a response from a server.": "等待服务器响应超时。",
        "Response contained no data.": "响应不含数据。",
        "The request was cancelled at the request of the system.": "请求被系统取消。",
        "Too many requests have been made.": "请求过多。",
        "Serialized input data for the request was too large.": "请求的序列化输入数据过大。",
        "Send failed for an unknown reason.": "发送失败，未知原因。",
        "No BLE connection is available.": "无可用 BLE 连接。",
        "Request contained invalid http header fields.": "请求包含无效的 HTTP 头字段。",
        "Request contained an invalid http body.": "请求包含无效的 HTTP 正文。",
        "Request used an invalid http method.": "请求使用了无效的 HTTP 方法。",
        "Request timed out before a response was received.": "在收到响应前请求超时。",
        "Response body data is invalid for the request type.": "响应正文数据对请求类型无效。",
        "Response contained invalid http header fields.": "响应包含无效的 HTTP 头字段。",
        "Serialized response was too large.": "序列化响应过大。",
        "Ran out of memory processing network response.": "处理网络响应时内存不足。",
        "Filesystem too full to store response data.": "文件系统空间不足，无法存储响应数据。",
        "Indicates an https connection is required for the request.": "表示请求需要 HTTPS 连接。",
        "Content type given in response is not supported or does not match what is expected.": "响应中给出的内容类型不受支持或不匹配期望值。",
        "Http request was cancelled by the system.": "HTTP 请求被系统取消。",
        "Connection was lost before a response could be obtained.": "在获取响应前连接丢失。",
        "Downloaded media file was unable to be read.": "下载的媒体文件无法读取。",
        "Downloaded image file was unable to be processed.": "下载的图像文件无法处理。",
        "HLS content could not be downloaded. Most often occurs when requested and provided bit rates do not match.": "HLS 内容无法下载。通常发生在请求和提供的比特率不匹配时。",
        "How the OAuth token will be returned in the final step.": "OAuth 令牌在最终步骤如何返回。",
        "How the OAuth request will be signed": "OAuth 请求将如何签名",
        "Specifies a request be executed using the GET method.": "指定使用 GET 方法执行请求。",
        "Specifies a request be executed using the PUT method.": "指定使用 PUT 方法执行请求。",
        "Specifies a request be executed using the POST method.": "指定使用 POST 方法执行请求。",
        "Specifies a request be executed using the DELETE method.": "指定使用 DELETE 方法执行请求。",
        "Content type specifier for response is expected to be a json type. Content type string must be \"application/json\".": "响应的内容类型应为 JSON 类型。内容类型字符串必须为 \"application/json\"。",
        "Content type specifier for response is expected to indicate url encoding. Content type string must be \"application/x-www-form-urlencoded\".": "响应的内容类型应表示 URL 编码。内容类型字符串必须为 \"application/x-www-form-urlencoded\"。",
        "Content type specifier for response is expected to be a gpx type.": "响应的内容类型应为 GPX 类型。",
        "Content type specifier for response is expected to be a FIT type.": "响应的内容类型应为 FIT 类型。",
        "Content type specifier for response is expected to be an audio type. Content type string must be of the \"audio/*\" format.": "响应的内容类型应为音频类型。内容类型字符串必须为 \"audio/*\" 格式。",
        "Content type specifier for response is expected to be plain text type. Content type string must be \"text/plain\"": "响应的内容类型应为纯文本类型。内容类型字符串必须为 \"text/plain\"。",
        "Content type specifier for response is expected to be an HLS data type. Content type string must be either \"application/vnd.apple.mpegurl\" or \"audio/mpegurl\".": "响应的内容类型应为 HLS 数据类型。内容类型字符串必须为 \"application/vnd.apple.mpegurl\" 或 \"audio/mpegurl\"。",
        "Content type specifier for response is expected to be a CIQ animation manifest data type. Content type string must be \"application/vnd.garmin.connectiq.animation.manifest\".": "响应的内容类型应为 CIQ 动画清单数据类型。内容类型字符串必须为 \"application/vnd.garmin.connectiq.animation.manifest\"。",
        "Content type specifier for response is expected to be a CIQ animation data type. Content type string must be \"image/vnd.garmin.connectiq.animation\".": "响应的内容类型应为 CIQ 动画数据类型。内容类型字符串必须为 \"image/vnd.garmin.connectiq.animation\"。",
        "Specifies an error condition, battery is too low to start a WIFI connection.": "错误状态：电池电量过低，无法启动 WIFI 连接。",
        "Specifies an error condition, no access-point is stored on the device.": "错误状态：设备上未存储接入点。",
        "Specifies an error condition, WIFI is not supported on current device.": "错误状态：当前设备不支持 WIFI。",
        "Specifies an error condition, WIFI is disabled by user.": "错误状态：WIFI 被用户禁用。",
        "Specifies an error condition, WIFI is disabled by battery saver.": "错误状态：WIFI 被电池节省模式禁用。",
        "Specifies an error condition, WIFI is disabled by stealth mode.": "错误状态：WIFI 被隐身模式禁用。",
        "Specifies an error condition, WIFI is disabled by the device.": "错误状态：WIFI 被设备禁用。",
        "Specifies an error condition, WIFI is not usable but status is unknown.": "错误状态：WIFI 不可用但状态未知。",
        "Specifies an error condition, WIFI can not connect to saved AccessPoint.": "错误状态：WIFI 无法连接到已保存的接入点。",
        "Specifies an error condition, WIFI transfer already in progress": "错误状态：WIFI 传输已在进行中",
        "Specifies a content type of application/x-www-form-urlencoded": "内容类型为 application/x-www-form-urlencoded",
        "Specifies a content type of application/json": "内容类型为 application/json",
        "Image packing format used for image request.": "图像请求使用的图像打包格式。",
        "The packing format describes the encoding a requested image should use when being transmitted. The encoding used affects the transfer size, decoding time, and image quality.": "打包格式描述请求图像在传输时应使用的编码。编码影响传输大小、解码时间和图像质量。",
        "Image data is encoded in the device native format, a lossless encoding that available on all devices. It is very efficient to decode, but often results in large transfer sizes so is slow to download.": "图像数据以设备原生格式编码，这是一种所有设备都可用的无损编码。解码效率很高，但通常导致较大的传输大小，因此下载较慢。",
        "Image data is encoded in YUV format. This is a lossy encoding that is compressed, and is fast to load. It is ideal for photographic imagery with transparency.": "图像数据以 YUV 格式编码。这是有损编码，经压缩，加载速度快。适合带透明度的照片图像。",
        "Image data is encoded in PNG format. This is a lossless encoding that is compressed, but is relatively slow to load. It is ideal for non-photographic imagery.": "图像数据以 PNG 格式编码。这是无损编码，经压缩，但加载相对较慢。适合非照片图像。",
        "Image data is encoded in JPG format. This is a lossy encoding that is compressed, and is reasonably fast to load. It is ideal for photographic imagery.": "图像数据以 JPG 格式编码。这是有损编码，经压缩，加载速度合理。适合照片图像。",
        "TVM will select the HLS audio stream with the highest bandwidth that's less than or equal to the maximum": "TVM 将选择带宽最高且不超过最大值的 HLS 音频流",
        "Do not apply dithering to an image.": "不对图像应用抖动。",
        "Apply Floyd-Steinberg dithering to an image.": "对图像应用 Floyd-Steinberg 抖动。",
        "Serialized input data for the request was too large.": "请求的序列化输入数据过大。",
        "How the OAuth token will be returned in the final step.": "OAuth 令牌在最终步骤如何返回。",
        "How the OAuth request will be signed": "OAuth 请求将如何签名",
        # Method descriptions
        "Cancel all pending JSON and Image requests.": "取消所有待处理的 JSON 和图像请求。",
        "The number of active requests running in parallel is limited in the Connect IQ platform. This call will cancel all outstanding requests.": "Connect IQ 平台上并行运行的活动请求数量有限。此调用将取消所有未完成的请求。",
        "Checks if an internet-enabled WIFI access point is visible and can be connected to.": "检查是否有可用的互联网 WIFI 接入点并可连接。",
        "Clear the contents of the mailbox.": "清空邮箱内容。",
        "Convert a URL String into a percent-encoded string.": "将 URL 字符串转换为百分号编码字符串。",
        "The reserved characters in the string will be replaced with their corresponding hex-value pairs. This follows the URI-encoding scheme as detailed by RFC 3986.": "字符串中的保留字符将被替换为相应的十六进制值对。遵循 RFC 3986 中详述的 URI 编码方案。",
        "Generate the value for the \"Authorization\" header in an OAuth 1.0a request.": "生成 OAuth 1.0a 请求中 \"Authorization\" 头的值。",
        "This method may be removed after System 10.": "此方法可能在 System 10 之后移除。",
        "Get the MailboxIterator for this Application's mailbox.": "获取该应用邮箱的 MailboxIterator。",
        "Initiate an image download request.": "发起图像下载请求。",
        "GCM will scale and dither the image based on the capabilities of the device, but the user will be able to pass additional options (like dithering it down to a one color image)": "GCM 将根据设备能力缩放和抖动图像，但用户可以传递额外选项（如将图像抖动为单色）",
        "Request an OAuth sign-in through Garmin Connect Mobile.": "通过 Garmin Connect Mobile 请求 OAuth 登录。",
        "A notification will trigger on the phone, that when clicked, provides a web view that shows `requestUrl`. If the user grants permission to the app, then the callback registered by [registerForOAuthMessages()](/connect-iq/api-docs/Toybox/Communications/#registerForOAuthMessages-instance_function) will be called with an [OAuthMessage](/connect-iq/api-docs/Toybox/Communications/OAuthMessage/) from the OAuth response.": "手机将触发通知，点击后显示包含 `requestUrl` 的网页视图。如果用户授予应用权限，则调用 [registerForOAuthMessages()](/connect-iq/api-docs/Toybox/Communications/#registerForOAuthMessages-instance_function) 注册的回调，并传入 OAuth 响应中的 [OAuthMessage](/connect-iq/api-docs/Toybox/Communications/OAuthMessage/)。",
        "Web requests are asynchronous. The supplied response callback method will be called when the request returns.": "Web 请求是异步的。提供的响应回调方法将在请求返回时调用。",
        "Request that GCM issue a phone notification that will open a web page.": "请求 GCM 发出将打开网页的手机通知。",
        "This method will push a phone notification that must be accepted by the user. If the used accepts it, a web page defined by this method will be opened in the default browser on the phone.": "此方法将推送必须由用户接受的手机通知。如果用户接受，将在手机默认浏览器中打开此方法定义的网页。",
        "Send data across the the BLE link.": "通过 BLE 链路发送数据。",
        "Register a callback for receiving Phone App message errors.": "注册接收 Phone App 消息错误的回调。",
        "The callback will be called when a message cannot be received. If there are messages waiting for the app when this function is called, the callback will immediately be called.": "当消息无法接收时调用回调。如果调用此函数时有消息等待应用，回调将立即被调用。",
        "Register a callback for receiving Phone App messages.": "注册接收 Phone App 消息的回调。",
        "The callback will be called once for each message received. If there are messages waiting for the app when this function is called, the callback will immediately be called once for each waiting message.": "每接收一条消息调用一次回调。如果调用此函数时有消息等待应用，回调将立即为每条等待消息调用一次。",
        "Exit the [AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) and launch it in sync mode.": "退出 [AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 并以同步模式启动。",
        "Exit the [AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) and launch it in sync mode with the provided message.": "退出 [AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 并以同步模式启动，带提供的消息。",
        "Handle data passed from a ServiceDelegate to the application.": "处理从 ServiceDelegate 传递到应用的数据。",
        "Invoked when app enters active mode, i.e.": "应用进入活动模式时调用，即",
        "The callback method that is triggered in the background when the app is installed.": "应用安装时在后台触发的回调方法。",
        "The callback method that is triggered in the background when the app is updated Requires the Background permission to be enabled and your application class to carry the :background annotation.": "应用更新时在后台触发的回调方法。需要启用后台权限且应用类需带有 :background 注解。",
        "Called when an Application requests to run code on demand, during an authentication process.": "当应用在认证过程中请求按需运行代码时调用。",
        "A device setting has changed This method is called when a device setting value is changed.": "设备设置已更改。此方法在设备设置值更改时调用。",
        "The display mode has changed, only available in AMOLED or LCD screen products.": "显示模式已更改，仅在 AMOLED 或 LCD 屏幕产品中可用。",
        "The font mode has changed This method is called when the system changes to or from Enhanced Readability Mode.": "字体模式已更改。此方法在系统切换增强可读性模式时调用。",
        "Invoked when app enters inactive mode, i.e.": "应用进入非活动模式时调用，即",
        "The display mode has changed This method is called when the system changes to or from night mode.": "显示模式已更改。此方法在系统切换夜间模式时调用。",
        "Called when the application settings have been changed by Garmin Connect Mobile (GCM) while while the app is running.": "当 Garmin Connect Mobile (GCM) 更改应用设置时调用（在应用运行期间）。",
        "Method called at startup to allow handling of app initialization.": "启动时调用，允许处理应用初始化。",
        "Override to handle application cleanup upon termination.": "重写以处理应用终止时的清理。",
        "Called when Application storage is changed by the other running instance, of the app i.e Background Process while the CIQ app is running or vice-versa.": "当应用存储由其他运行实例更改时调用，即 CIQ 应用运行时的后台进程或反之。",
        "Called when a property needs to be validated by the application.": "当属性需要应用验证时调用。",
        "Function to open application settings editor.": "打开应用设置编辑器。",
        "Override to provide the [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) and [WatchUi.GlanceViewDelegate](/connect-iq/api-docs/Toybox/WatchUi/GlanceViewDelegate/) for the glance preview.": "重写以提供速览预览的 [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 和 [WatchUi.GlanceViewDelegate](/connect-iq/api-docs/Toybox/WatchUi/GlanceViewDelegate/)。",
        "Override to provide a [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) for a goal that has triggered within a watch face.": "重写以提供手表表面触发目标后的 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)。",
        "Override to provide the initial View and Input Delegate of the application.": "重写以提供应用的初始视图和输入委托。",
        "Method to get the glance theme.": "获取速览主题。",
        "Check if application trial messages are allowed.": "检查是否允许应用试用消息。",
        "Returns `true` if the application should allow the product to push unlock instruction pages for locked apps. Returns `true` by default.": "如果应用应允许产品为锁定的应用推送解锁说明页面，则返回 `true`。默认返回 `true`。",
        "Returns `true` if trial messages should be shown, otherwise `false`.": "如果应显示试用消息则返回 `true`，否则返回 `false`。",
        "Check if the application is in trial mode.": "检查应用是否处于试用模式。",
        "return true if app is currently in active state, otherwise false.": "如果应用当前处于活动状态返回 `true`，否则返回 `false`。",
        "Load the properties for the application.": "加载应用属性。",
        "Save the properties for the application.": "保存应用属性。",
        "Validate a property being stored.": "验证正在存储的属性。",
        "Override to provide the settings View and Input Delegate of the application.": "重写以提供应用的设置视图和输入委托。",
        "Get a [ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/) to run background tasks for this app.": "获取 [ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/) 以运行此应用的后台任务。",
        "Override to provide the pairing config View and Input Delegate of the application.": "重写以提供应用的配对配置视图和输入委托。",
        "Override to provide the Sensor Delegate object.": "重写以提供传感器委托对象。",
        "Override to return the number of days remaining in the trial If a developer wishes to implement time-based app trials, they will need to override this function to return the number of days remaining in the trial.": "重写以返回试用剩余天数。如果开发者希望实现基于时间的应用试用，需要重写此函数以返回试用剩余天数。",
        "Check if application trial messages are allowed.": "检查是否允许应用试用消息。",
        "The 'type' filed in the response doesn't match the response content type": "响应中的 'type' 字段与响应内容类型不匹配",
        "The HTTP method of the request. This option should be an HTTP\_REQUEST\_METHOD\_\* value.": "请求的 HTTP 方法。此选项应为 HTTP\_REQUEST\_METHOD\_\* 值。",
        "The format of the response.": "响应格式。",
        "maximum bandwidth. TVM will select the audio stream with the highest bandwidth that's less than or equal to the maximum This option is only effective when processing HLS content": "最大带宽。TVM 将选择带宽最高且不超过最大值的音频流。此选项仅在处理 HLS 内容时有效",
        "a callback method which must accept two parameters": "必须接受两个参数的回调方法",
        "totalBytesTransferred: The total number of bytes transferred for the current file download": "totalBytesTransferred：当前文件下载传输的总字节数",
        "fileSize: The size of the file being downloaded. Note that this can be `null` if file size cannot be determined from the server.": "fileSize：正在下载的文件大小。注意，如果无法从服务器确定文件大小，此值可能为 `null`。",
        "This option is only supported for media file download progress": "此选项仅支持媒体文件下载进度",
        "This option is supported since CIQ 3.2.0": "此选项自 CIQ 3.2.0 起支持",
        "The total number of bytes transferred for the current file download": "当前文件下载传输的总字节数",
        "The size of the file being downloaded. Note that this can be `null` if file size cannot be determined from the server.": "正在下载的文件大小。注意，如果无法从服务器确定文件大小，此值可能为 `null`。",
        "A user-specific context object to be passed to the response callback. The callback will need to accept a third parameter if this value is populated.": "传递给响应回调的用户特定上下文对象。如果填充了此值，回调需要接受第三个参数。",
        "The encoding of the audio content that is being downloaded. Should be a [Media.ENCODING\*](/connect-iq/api-docs/Toybox/Media/#Encoding-module) value.": "正在下载的音频内容的编码。应为 [Media.ENCODING\*](/connect-iq/api-docs/Toybox/Media/#Encoding-module) 值。",
        "The URL of an image to request": "要请求的图像的 URL",
        "The Dictionary of keys and values": "键值对的字典",
        "Appended to the URL": "附加到 URL",
        "Set as the body for a POST/PUT request": "作为 POST/PUT 请求的正文",
        "These values must be URL encoded": "这些值必须进行 URL 编码",
        "The URL being requested": "正在请求的 URL",
        "A Dictionary of keys and values.": "键值对的字典。",
        "These values should not be URL encoded.": "这些值不应进行 URL 编码。",
        "Can be `null`.": "可以为 `null`。",
        "Additional image options": "额外的图像选项",
        "The color palette to restrict the image dithering to. Using a smaller palette can reduce the size of the image data to speed up transfers": "限制图像抖动的颜色板。使用较小的调色板可减小图像数据大小以加快传输速度",
        "The maximum width an image should be scaled to": "图像应缩放的最大宽度",
        "The maximum height an image should be scaled to": "图像应缩放的最大高度",
        "The type of dithering to use when processing the image. Defaults to [IMAGE\_DITHERING\_FLOYD\_STEINBERG](/connect-iq/api-docs/Toybox/Communications/#IMAGE_DITHERING_FLOYD_STEINBERG-const)": "处理图像时使用的抖动类型。默认为 [IMAGE\_DITHERING\_FLOYD\_STEINBERG](/connect-iq/api-docs/Toybox/Communications/#IMAGE_DITHERING_FLOYD_STEINBERG-const)",
        "The format of the image data to request. Defaults to [PACKING\_FORMAT\_DEFAULT](/connect-iq/api-docs/Toybox/Communications/#PACKING_FORMAT_DEFAULT-const)": "要请求的图像数据格式。默认为 [PACKING\_FORMAT\_DEFAULT](/connect-iq/api-docs/Toybox/Communications/#PACKING_FORMAT_DEFAULT-const)",
        "A callback that will be invoked after the connection test has completed. This callback accepts a single dictionary parameter. This dictionary has two keys:": "连接测试完成后将调用的回调。此回调接受单个字典参数。该字典有两个键：",
        ":wifiAvailable `true` if an access point with internet access could be connected to, `false` otherwise": ":wifiAvailable — 如果可以连接到具有互联网访问的接入点则为 `true`，否则为 `false`",
        ":errorCode If :wifiAvailable is `false` the value will be a [WIFI\_CONNECTION\_STATUS\_\*](/connect-iq/api-docs/Toybox/Communications/#WIFI_CONNECTION_STATUS_LOW_BATTERY-const) indicating why the connection is not available.": ":errorCode — 如果 :wifiAvailable 为 `false`，值将为 [WIFI\_CONNECTION\_STATUS\_\*](/connect-iq/api-docs/Toybox/Communications/#WIFI_CONNECTION_STATUS_LOW_BATTERY-const)，指示连接不可用的原因。",
        "An OAUTH\_RESULT\_TYPE\_\* value that specifies the format of the result": "指定结果格式的 OAUTH\_RESULT\_TYPE\_\* 值",
        "The desired OAuth response values passed to the callback method. The keys map to the actual OAuth response keys, and the values map to the keys of the [OAuthMessage](/connect-iq/api-docs/Toybox/Communications/OAuthMessage/) data.": "传递给回调方法的期望 OAuth 响应值。键映射到实际的 OAuth 响应键，值映射到 [OAuthMessage](/connect-iq/api-docs/Toybox/Communications/OAuthMessage/) 数据的键。",
        "The request URL": "请求 URL",
        "The parameters of the request": "请求参数",
        "An HTTP\_REQUEST\_METHOD\_\* value": "HTTP\_REQUEST\_METHOD\_\* 值",
        "An OAUTH\_SIGNING\_METHOD\_\* value": "OAUTH\_SIGNING\_METHOD\_\* 值",
        "The token given by the OAuth service": "OAuth 服务提供的令牌",
        "The token secret that is used to sign the request": "用于签名请求的令牌密钥",
        "The key that identifies your application": "标识应用的密钥",
        "The consumer secret that is used to sign the request": "用于签名请求的消费者密钥",
        "The value for the \"Authorization\" header": "\"Authorization\" 头的值",
        "An integer from 0 to 100 indicating the completion percentage.": "0 到 100 的整数，表示完成百分比。",
        "A descriptive error message if a failure occurred. If the sync completes successfully, `null` should be passed to this method.": "失败时的错误描述消息。如果同步成功完成，应将此方法传递 `null`。",
        "The key to delete": "要删除的键",
        "The URL String to be encoded": "要编码的 URL 字符串",
        "A percent-encoded String": "百分号编码的字符串",
        "Iterator for the mailbox": "邮箱的迭代器",
        "The callback will be called once for each received OAuth message. If there are messages waiting for the app when this function is called, the callback will immediately be called once for each waiting message.": "每接收一条 OAuth 消息调用一次回调。如果调用此函数时有消息等待应用，回调将立即为每条等待消息调用一次。",
        "The callback must accept a single [OAuthMessage](/connect-iq/api-docs/Toybox/Communications/OAuthMessage/) parameter.": "回调必须接受单个 [OAuthMessage](/connect-iq/api-docs/Toybox/Communications/OAuthMessage/) 参数。",
        "A method that will be invoked when OAuth messages are received.": "当接收到 OAuth 消息时调用的方法。",
    }
    for en, zh in replacements.items():
        text = text.replace(en, zh)
    return text


def translate_appbase(text):
    """Translate the AppBase class page."""
    text = text.replace(
        "AppBase is the base class for an app.",
        "AppBase 是应用的基类。"
    )
    text = text.replace(
        "All apps inherit from this class and use it's methods to manage the life cycle of an app.",
        "所有应用都继承此类并使用其方法来管理应用的生命周期。"
    )
    text = text.replace(
        "Your app overrides the class to provide entry points with the following methods:",
        "您的应用重写此类以提供以下入口点方法："
    )
    text = text.replace(
        "These functions are called in the following order:",
        "这些函数按以下顺序调用："
    )
    text = text.replace(
        "Every AppBase object has access to an object store to persist data.",
        "每个 AppBase 对象都可以访问对象存储以持久化数据。"
    )
    text = text.replace(
        "Shows basic app life cycle",
        "显示基本应用生命周期"
    )
    text = text.replace(
        "This method may be removed after System 4.",
        "此方法可能在 System 4 之后移除。"
    )
    text = text.replace(
        "This method may be removed after System 10.",
        "此方法可能在 System 10 之后移除。"
    )
    text = text.replace(
        "Background processes cannot clear properties.",
        "后台进程不能清除属性。"
    )
    text = text.replace(
        "Background processes cannot delete properties.",
        "后台进程不能删除属性。"
    )
    text = text.replace(
        "Thrown if called from a background process",
        "如果从后台进程调用则抛出"
    )
    # GLANCE_THEME constants
    text = text.replace("Glance color themes for supported devices", "支持设备的速览颜色主题")
    return text


def main():
    module = sys.argv[1]
    path = f"/home/bestony/code/garmin-docs/docs/zh/connect-iq/api-docs/Toybox/{module}/index.md"
    with open(path, "r") as f:
        text = f.read()

    if module == "Communications":
        text = translate_communications(text)
    elif module == "Application/AppBase":
        text = translate_appbase(text)

    with open(path, "w") as f:
        f.write(text)
    print(f"Translated {module}")

if __name__ == "__main__":
    main()