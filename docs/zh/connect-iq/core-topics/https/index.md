---
title: "JSON REST Requests"
---
# JSON REST 请求

插件和应用程序可以通过[Bluetooth low energy](https://en.wikipedia.org/wiki/Bluetooth_low_energy)(BLE) 与手机通信.手机可能与设备共享数据,或者它可以作为应用程序和互联网之间的桥梁. 这使手机成为可穿戴网络的一部分.

此外,还提供了高层次的接口,可进行JSON和图像请求. 这使开发人员可以开发可穿戴的网页应用程序,而无需编写自己的伴手机应用程序.

| API |目的| API 级别 |
| --- | --- | --- |
| [Communications.makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function) |将一个web服务进行异步JSON REST请求| 1.3.0 |
| [Communications.makeImageRequest()](/connect-iq/api-docs/Toybox/Communications/#makeImageRequest-instance_function) |从网上下载图像| 1.2.0 |
| [Communications.openWebPage()](/connect-iq/api-docs/Toybox/Communications/#openWebPage-instance_function) |命令连接手机要求用户查看网页链接| 1.3.0 |

## 通过移动代理发送 JSON REST 请求

子C将一个高水平的API暴露,通过[Communications.makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function)和API允许通过Garmin Connect Mobile对基本网络服务进行调用.这些API将JSON请求和图像请求暴露为REST API调用的非常简单的API.JSON调用将转换为序列化子C数据并通过BLE管道发送.您必须设置`Communications`权限使用这个API.

[Communications.makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function)提供了一个高层次的API来向终端点提交JSON REST请求.通话是异步的,需要回调才能接收数据一旦操作完成.

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

系统可以处理这些图像,包括应用一个调色板和动.

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

查看与SDK共享的`WebRequest`样本应用.

## 引导用户进入网页内容

The call 可用于 direct the user to a specific web page on the paired mobile device. When called, the specified web page should be fetched and displayed in the phones default browser. There is no callback for this function and the watch app has no method for checking if the call was completed on the phone successfully.
