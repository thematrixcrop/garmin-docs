---
title: "JSON REST 请求"
---
<a id="json-rest-requests"></a>
# JSON REST 请求

小工具和应用可以通过 [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_low_energy)（BLE）与手机通信。手机可以与设备共享数据，也可以充当应用与互联网之间的桥梁，让手机成为可穿戴网络的一部分。

Connect IQ 还提供了发送 JSON 和图像请求的高层接口。开发者无需编写自己的手机配套应用，也可以开发可穿戴 Web 应用。

| API | 用途 | API 级别 |
| --- | --- | --- |
| [Communications.makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function) | 异步向 Web 服务发送 JSON REST 请求 | 1.3.0 |
| [Communications.makeImageRequest()](/connect-iq/api-docs/Toybox/Communications/#makeImageRequest-instance_function) | 从 Web 下载图像 | 1.2.0 |
| [Communications.openWebPage()](/connect-iq/api-docs/Toybox/Communications/#openWebPage-instance_function) | 请求 Connect Mobile 提示用户查看网页链接 | 1.3.0 |

## 通过移动代理发送 JSON REST 请求

Monkey C 通过 [Communications.makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function) 等 API，经由 Garmin Connect Mobile 调用基本 Web 服务。这些 API 让 REST 调用变得简单直接。JSON 请求会转换为序列化的 Monkey C 数据，并通过 BLE 通道发送。使用这些 API 必须拥有 `Communications` 权限。

[Communications.makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function) 提供了向 Web 服务端点（endpoint）发送 JSON REST 请求的高层 API。调用是异步的，需要回调来接收操作完成后的数据。

```typescript
// 开发人员通常会将 makeWebRequest() 调用封装在函数中，
// 如下所示。该函数会为 Communications.makeWebRequest() 调用
// 所需的每个参数定义变量，然后将这些变量作为参数传入。
// 这样可以让网页请求的布局更清晰，
// 也更便于扩展。
import Toybox.System;
import Toybox.Communications;
import Toybox.Lang;

class JsonTransaction {
    // 设置响应回调函数
    function onReceive(responseCode as Number, data as Dictionary?) as Void {
        if (responseCode == 200) {
            System.println("Request Successful");                   // 打印成功信息
        } else {
            System.println("Response: " + responseCode);            // 打印响应代码
        };

    };

    function makeRequest() as Void {
        var url = "https://www.garmin.com";                         // 设置 URL

        var params = {                                              // 设置参数
            "definedParams" => "123456789abcdefg"
        };

        var options = {                                             // 设置选项
            :method => Communications.HTTP_REQUEST_METHOD_GET,      // 设置 HTTP 方法
            :headers => {                                           // 设置请求头
            "Content-Type" => Communications.REQUEST_CONTENT_TYPE_URL_ENCODED},
            // 设置响应类型
            :responseType => Communications.HTTP_RESPONSE_CONTENT_TYPE_URL_ENCODED
        };

        var responseCallback = method(:onReceive);                  // 将 responseCallback 设置为
        // onReceive() 方法
        // 调用 Communications.makeWebRequest()
        Communications.makeWebRequest(url, params, options, method(:onReceive));
    }
}
```

[Communications.makeImageRequest()](/connect-iq/api-docs/Toybox/Communications/#makeImageRequest-instance_function) 提供了类似的图像请求 API。系统可以处理下载的图像，包括应用调色板和抖动。

```typescript
import Toybox.System;
import Toybox.Communications;
import Toybox.WatchUi;

class ImageTransaction {
    var image as BitmapResource?;
    var responseCode as Number?;

    // 设置 responseCallback 函数，使其返回图像或 null
    function responseCallback(responseCode as Number, data as BitmapResource?) {
        responseCode = responseCode;
        if (responseCode == 200) {
            image = data;
        } else {
            image = null;
        }
    }

    // 将请求封装在函数中
    function makeRequest() as Void {
        // 设置图像 URL
        var url = "http://www.garmin.com/image-path";
        // 设置参数
        var parameters = null;
        // 设置选项
        var options = {
            // 设置调色板
            :palette => [ Gfx.COLOR_ORANGE,
                          Gfx.COLOR_DK_BLUE,
                          Gfx.COLOR_BLUE,
                          Gfx.COLOR_BLACK
                        ],
            // 设置最大宽度
            :maxWidth => 100,
            // 设置最大高度
            :maxHeight => 100,
            // 设置抖动
            :dithering => Communications.IMAGE_DITHERING_NONE
        };

        // 发起图像请求
        Communications.makeImageRequest(url, parameters, options, method(:responseCallback));
    }
}
```

更多信息请参阅 SDK 随附的 `WebRequest` 示例应用。

## 引导用户访问 Web 内容

[Communications.openWebPage()](/connect-iq/api-docs/Toybox/Communications/#openWebPage-instance_function) 可以将用户引导到已配对移动设备上的指定网页。调用后，手机会获取网页并在默认浏览器中显示。此函数没有回调，手表应用也无法检查手机是否成功完成调用。
