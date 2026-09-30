---
title: "How do I use a MapView?"
---
# 如何使用 MapView？

嘉敏通过制作位置意识的产品来建立了自己作为一个公司,并发展成为服务于汽车,航空,海洋,健身和户外市场的产品.位置意识的基石是数字绘图.嘉敏产品经常在电池覆盖之外使用,我们的用户依赖于我们知道你在云中连接不到哪里.超过十年来,嘉敏一直在数字化世界并将地图放在各种形状和尺寸的设备上.

随着`MapView`对象的加入,Connect IQ现在允许您的应用程序利用加敏设备上包含的数字绘图.您可以使用`MapView`对象为用户提供位置背景,提供课程或路线的预览,或让用户浏览其周围.

## Integrating Map Views

让我们谈谈一个常见的 Garmin 设备的使用情况.假设您有一个云数据库的路线,用户可以选择下载到设备.您想给用户预览地图上的路线,并给用户一个明确的行动调用下载.您还想让用户触摸地图浏览路线.

![](/connect-iq/resources/faq/map_view_1.png)

## 设置场景

The first thing 您需要 do is tell the map where on the Earth you want to focus the user's attention. The method `setMapVisibleArea` allows you to set a bounding box of `Location` objects that define what part of the world should render on screen.

## Overlaying Content

`MapView` objects allow for two kinds of overlays: *markers* and *polylines*. A `MapMarker` instance represents a single location on the map. You can use either the default Garmin pin, or you can provide your own `BitmapResource` object. If you use a custom marker, 您需要 set the pixel that will be drawn at the exact location (the hotspot). If you pass an array of `MapMarker` objects to the `MapView` instance, it will add all of them to the map. Calling `setMapMarker` will clear whatever markers are currently set.

一个`MapPolyline`实例代表一系列坐标,就像一个路径.你可以设置聚合线的宽度和颜色.你可以设置聚合线为`MapView`使用`setPolyline`.一个`MapView`实例只能设置一个`MapPolyline`实例在任何给定的时间.

## Preview and Browse

返回我们的例子,请记住,我们希望让用户可以预览路线,但如果他们想更仔细地查看内容,让他们浏览内容.`MapView`类在使用 *地图模式* 的同时处理两个使用情况.

在`MAP_MODE_PREVIEW`中,地图视图集中在一个区域上.您可以添加地图上面的布局,以按和可选项来提供文本和操作.您可以使用`setScreenVisibleArea`来向`MapView`实例通信地图的部分没有被用户界面掩盖.

![](/connect-iq/resources/faq/map_view_2.png)

切换地图模式到`MAP_MODE_BROWSE`将地图视图改为浏览器界面.浏览器界面将是设备本地使用的相同的浏览器界面.

## Tying it Together

我们想向用户展示我们想要下载的课程的预览,但我们如何在下载完整课程之前显示它?将多线线带到您的应用程序的一个方法是使用[Google Polyline Algorithm Format](https://developers.google.com/maps/documentation/utilities/polylinealgorithm). 这允许您将多线带到您的Connect IQ应用程序中作为一个可以解码的字符串.下面的功能将多线串解码到一个数组`Location`对象中.为了保存内存,它将开始跳过坐标随着多线线的长度增长,基本上降低线程随着长度增长.

```typescript
    // Constant used to downscale detail as
    // line grows in length to conserve memory
    const MAX_POLYLINE_OBJECT_COUNT = 233;

    // Returns the decoded polyline string
    // in an array of longitudes and latitudes
    function decodePolyline(polyline) {
        polyline = polyline.toCharArray();
        var len = polyline.size();
        var indexJump = Math.ceil(len / MAX_POLYLINE_OBJECT_COUNT);
        var poly = [];
        var index = 0;
        var lat = 0;
        var lng = 0;
        var skipIndex = 0;

        while (index < len) {

            var byte = 0;
            var shift = 0;
            var result = 0;

            do {
                byte = polyline[index].toNumber() - 63;
                result = result | ((byte & 31) << shift);
                shift += 5;
                index++;
            } while (byte >= 32 && index < len);

            var dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));

            shift = 0;
            result = 0;

            do {
                byte = polyline[index].toNumber() - 63;
                result = result | ((byte & 31) << shift);
                shift += 5;
                index++;
            } while (byte >= 32 && index < len);

            var dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));

            lat += dlat;
            lng += dlng;

            if (indexJump == 0 || skipIndex % indexJump == 0) {
                var p = new Position.Location({:latitude=>lat/1e5, :longitude=>lng/1e5, :format=>:degrees});
                poly.add(p);
            }

            skipIndex++;
        }
        return poly;
    }
```

在我们的UI中,我们希望允许用户在我们的用户界面之间切换与行动调用和允许他们浏览.

```typescript
class MapSampleMapDelegate extends Ui.BehaviorDelegate {

    var mView;

    function initialize(view) {
        BehaviorDelegate.initialize();
        mView = view;
    }

    function onBack() {
        // if current mode is preview mode them pop the view
        if(mView.getMapMode() == Ui.MAP_MODE_PREVIEW) {
            Ui.popView(Ui.SLIDE_UP);
        } else {
            // if browse mode change the mode to preview
            mView.setMapMode(Ui.MAP_MODE_PREVIEW);
        }
        return true;
    }

    function onSelect() {
        // on enter button press chenage the map view to browse mode
        mView.setMapMode(Ui.MAP_MODE_BROWSE);
        return true;
    }
}
```

现在我们可以在单个视图中提供一个UI, 让用户浏览内容.

## Conclusion

希望您可以从此看出,`MapView`类是玩具盒的强大补充. 通过将Garmin数字地图与内容结合起来,您可以为您的应用程序带来全新的位置意识水平.
