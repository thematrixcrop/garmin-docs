---
title: "如何使用 MapView？"
---
# 如何使用 MapView？

Garmin 通过制造具备位置感知能力的产品发展壮大，产品覆盖汽车、航空、航海、健身和户外市场。位置感知的基础是数字制图。Garmin 产品经常在蜂窝网络覆盖之外使用，用户希望即使设备无法连接云端，我们仍能知道他们所在的位置。十多年来，Garmin 一直在数字化世界，并将地图带到各种形状和尺寸的设备上。

加入 `MapView` 对象后，Connect IQ 应用可以使用 Garmin 设备内置的数字地图。您可以用 `MapView` 为用户提供位置背景、预览课程或路线，或让用户浏览周围环境。

## 集成地图视图

下面看一个 Garmin 设备上的常见使用场景：云端数据库中有一些路线，用户可以选择下载到设备。您希望在地图上预览路线，并明确提示用户下载；同时允许用户触摸地图浏览路线。

![](/connect-iq/resources/faq/map_view_1.png)

## 设置场景

首先，需要告诉地图将用户的注意力聚焦在地球上的哪个位置。`setMapVisibleArea` 方法允许设置由 `Location` 对象定义的边界框，确定屏幕上要渲染的区域。

## 叠加内容

`MapView` 对象支持两种叠加层：*标记*和*折线*。`MapMarker` 实例表示地图上的一个位置。您可以使用 Garmin 默认图钉，也可以提供自己的 `BitmapResource` 对象。如果使用自定义标记，需要设置要在准确位置绘制的像素（热点）。将 `MapMarker` 对象数组传递给 `MapView` 实例后，所有标记都会添加到地图中。调用 `setMapMarker` 会清除当前设置的所有标记。

`MapPolyline` 实例表示一系列坐标，类似一条路线。您可以设置折线的宽度和颜色，并使用 `setPolyline` 将折线设置到 `MapView`。一个 `MapView` 实例同一时间只能设置一个 `MapPolyline`。

## 预览和浏览

回到上面的例子：我们希望用户可以预览路线，并在需要仔细查看时浏览路线。`MapView` 类通过 *地图模式* 在一个 View 中处理这两种场景。

在 `MAP_MODE_PREVIEW` 中，地图视图会居中显示某个区域。可以在地图上方添加布局、按钮和选项，为用户提供上下文和操作。使用 `setScreenVisibleArea` 告知 `MapView` 哪部分地图没有被用户界面遮挡。

![](/connect-iq/resources/faq/map_view_2.png)

将地图模式切换为 `MAP_MODE_BROWSE` 后，地图视图会变为浏览界面，该界面与设备原生使用的浏览界面相同。

## 将各部分联系起来

我们希望在用户下载完整课程前展示路线预览。将折线传入应用的一种方式是使用 [Google Polyline Algorithm Format](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)。这样可以将折线作为字符串发送到 Connect IQ 应用，再解码回折线。下面的函数会将折线字符串解码为 `Location` 对象数组。为节省内存，折线变长后函数会开始跳过部分坐标，相当于随着长度增加降低折线细节。

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

在 UI 中，我们希望用户可以在带有操作提示的界面和浏览界面之间切换。与其通过推入、弹出不同模式的地图视图，不如在同一个 View 中由 delegate 切换模式。

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

现在，一个 View 就能同时提供路线预览、操作提示和内容浏览。

## 结论

希望你能看出，`MapView` 类是 Toybox 的强大补充。将 Garmin 数字地图与应用内容结合，可以为应用带来全新的位置感知能力。
