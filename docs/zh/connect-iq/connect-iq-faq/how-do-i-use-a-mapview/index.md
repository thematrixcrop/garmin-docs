---
title: "How do I use a MapView?"
---
# 如何使用 MapView？

Garmin built itself as a company by making location aware products, and has grown to make products that serve automotive, aviation, marine, fitness, and outdoor markets. A cornerstone to location awareness is digital cartography. Garmin products are often used outside of cell coverage, and our users depend on us to know where you are even when disconnected from the cloud. For over a decade Garmin has been digitizing the world and putting maps on devices of all shapes and sizes.

With the addition of `MapView` objects, Connect IQ now allows your apps to take advantage of the digital cartography included on Garmin devices. You can use `MapView` objects to provide location context to the user, provide a preview of a course or route, or let the user browse their surroundings.

## Integrating Map Views

Let's talk through a common use case on Garmin devices. Assume the use case where you have a cloud database of routes that the user can choose to download to the device. You want to give the user a preview of the route on the map and give a clear call to action to the user to download. You also want to allow the user to touch the map to browse the route.

![](/connect-iq/resources/faq/map_view_1.png)

## Setting The Scene

The first thing 您需要 do is tell the map where on the Earth you want to focus the user's attention. The method `setMapVisibleArea` allows you to set a bounding box of `Location` objects that define what part of the world should render on screen.

## Overlaying Content

`MapView` objects allow for two kinds of overlays: *markers* and *polylines*. A `MapMarker` instance represents a single location on the map. You can use either the default Garmin pin, or you can provide your own `BitmapResource` object. If you use a custom marker, 您需要 set the pixel that will be drawn at the exact location (the hotspot). If you pass an array of `MapMarker` objects to the `MapView` instance, it will add all of them to the map. Calling `setMapMarker` will clear whatever markers are currently set.

A `MapPolyline` instance represents a series of coordinates, like a course. You can set the width and color of the polyline. You can set the polyline for a `MapView`using `setPolyline`. A `MapView` instance can only have one `MapPolyline` instance set at any given time.

## Preview and Browse

Going back to our example, remember that we want to allow the user to have a preview of the route with a call to action, but let them browse the content if they want a closer look. The `MapView` class handles both use cases in a single View using the *map mode*.

In `MAP_MODE_PREVIEW` the map view centers on an area. You can add a layout above the map with buttons and selectables to provide context and actions. You can use `setScreenVisibleArea` to communicate to the `MapView` instance what portion of the map is not obscured by your user interface.

![](/connect-iq/resources/faq/map_view_2.png)

Switching the map mode to `MAP_MODE_BROWSE` changes the map view to a browse interface. The browse interface will be same browse interface used natively by the device.

## Tying it Together

We want to show the user a preview of the course we want to download before they download it, but how can we show it before we download the full course? One way to bring a polyline to your app is with a [Google Polyline Algorithm Format](https://developers.google.com/maps/documentation/utilities/polylinealgorithm). This allows you to send a polyline to your Connect IQ app as a string that can be decoded back into a polyline. The function below will decode a polyline string into an array of `Location` objects. To conserve memory, it will begin skipping over coordinates as the polyline grows in size, essentially downscaling the line as it grows in length.

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

In our UI we want to allow the user to switch between our user interface with the call to action and allowing them to browse. Rather than pushing and popping the map view with different modes, we can use a single view and switch modes in the delegate.

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

Now in a single view we can provide a UI with a call to action and preview of the course and allow the user to browse the content as well.

## Conclusion

Hopefully you can see from this that the `MapView` class is a powerful addition to the Toybox. By combining Garmin digital cartography with your content, you can bring a whole new level of location awareness to your apps.
