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
// It is common for developers to wrap a makeWebRequest() call in a function
// as displayed below. The function defines the variables for each of the
// necessary arguments in a Communications.makeWebRequest() call, then passes
// these variables as the arguments. This allows for a clean layout of your web
// request and expandability.
import Toybox.System;
import Toybox.Communications;
import Toybox.Lang;

class JsonTransaction {
    // set up the response callback function
    function onReceive(responseCode as Number, data as Dictionary?) as Void {
        if (responseCode == 200) {
            System.println("Request Successful");                   // print success
        } else {
            System.println("Response: " + responseCode);            // print response code
        };

    };

    function makeRequest() as Void {
        var url = "https://www.garmin.com";                         // set the url

        var params = {                                              // set the parameters
            "definedParams" => "123456789abcdefg"
        };

        var options = {                                             // set the options
            :method => Communications.HTTP_REQUEST_METHOD_GET,      // set HTTP method
            :headers => {                                           // set headers
            "Content-Type" => Communications.REQUEST_CONTENT_TYPE_URL_ENCODED},
            // set response type
            :responseType => Communications.HTTP_RESPONSE_CONTENT_TYPE_URL_ENCODED
        };

        var responseCallback = method(:onReceive);                  // set responseCallback to
        // onReceive() method
        // Make the Communications.makeWebRequest() call
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

    // Set up the responseCallback function to return an image or null
    function responseCallback(responseCode as Number, data as BitmapResource?) {
        responseCode = responseCode;
        if (responseCode == 200) {
            image = data;
        } else {
            image = null;
        }
    }

    // wrap the request in a function
    function makeRequest() as Void {
        // set the image url
        var url = "http://www.garmin.com/image-path";
        // set the parameters
        var parameters = null;
        // set the options
        var options = {
            // set the palette
            :palette => [ Gfx.COLOR_ORANGE,
                          Gfx.COLOR_DK_BLUE,
                          Gfx.COLOR_BLUE,
                          Gfx.COLOR_BLACK
                        ],
            // set the max width
            :maxWidth => 100,
            // set the max height
            :maxHeight => 100,
            // set the dithering
            :dithering => Communications.IMAGE_DITHERING_NONE
        };

        // Make the image request
        Communications.makeImageRequest(url, parameters, options, method(:responseCallback));
    }
}
```

更多信息请参阅 SDK 随附的 `WebRequest` 示例应用。

## 引导用户访问 Web 内容

[Communications.openWebPage()](/connect-iq/api-docs/Toybox/Communications/#openWebPage-instance_function) 可以将用户引导到已配对移动设备上的指定网页。调用后，手机会获取网页并在默认浏览器中显示。此函数没有回调，手表应用也无法检查手机是否成功完成调用。
