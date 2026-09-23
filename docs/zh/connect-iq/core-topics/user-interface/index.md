---
title: "Views, Drawables and Layers"
---
# Views, Drawables and Layers

![](/connect-iq/resources/programmers-guide/artsy-monkey.png)

## Views

Watch faces and apps have a page stack. A [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) is an object that represents a page. Views can be pushed onto and popped off of the page stack, or a view can replace another view on the page stack with a transition.

A subclass of [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) usually implements the following functions:

-   [View.onShow()](/connect-iq/api-docs/Toybox/WatchUi/View/#onShow-instance_function): Called when your [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) is first made visible. A good time to do on demand initialization of resources and timers.

-   [View.onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function): In this function you can load a layout defined in the [Layouts](/connect-iq/core-topics/layouts/#layouts) section.

-   [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function): Called when your view needs to update the display. The default version of this function will draw the layout elements, but you call [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) to have the system draw the layout and then run your own custom drawing.

-   [View.onHide()](/connect-iq/api-docs/Toybox/WatchUi/View/#onHide-instance_function): Called when your View is being removed from the view stack.


### Enhanced Readability Mode

*Since API level 4.2.0*

Some devices have a new setting that enlarges the sizes of fonts in menus, glances and application pages to enhance readability. To add support for enhanced readability mode, check at runtime to see if you should be using larger fonts.

Some devices only have a single larger font size, but some also allow the user to scale the font. If is `true`, check to see if the [System.DeviceSettings](/connect-iq/api-docs/Toybox/System/DeviceSettings/) has `:fontScale`. You can use [Graphics.getVectorFont()](/connect-iq/api-docs/Toybox/Graphics/#getVectorFont-instance_function) to get a scaled version of a system font using the `:font` and `:scale` options.

Implementing [AppBase.onEnhancedReadabilityModeChanged()](/connect-iq/api-docs/Toybox/Application/AppBase/#onEnhancedReadabilityModeChanged-instance_function) or [AppBase.onDeviceSettingChanged()](/connect-iq/api-docs/Toybox/Application/AppBase/#onDeviceSettingChanged-instance_function) will let you know if the setting changed while the app was running.

## Drawables

Each [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) contains a layout. A layout is an array of [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) objects. A [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) can draw itself to a device context through the [Drawable.draw()](/connect-iq/api-docs/Toybox/WatchUi/Drawable/#draw-instance_function) method.

Figure 1. An illustration of Layouts, Views, and Drawables

![An illustration of Layouts, Views, and Drawables](/connect-iq/resources/programmers-guide/layout.png)

Any object that extends [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) is a drawable object, expose their properties publicly. (This will become useful when we discuss the animation system.) Monkey C provides the basic drawables [WatchUi.Text](/connect-iq/api-docs/Toybox/WatchUi/Text/) and [WatchUi.Bitmap](/connect-iq/api-docs/Toybox/WatchUi/Bitmap/), allowing text and bitmap resources to be included in layouts.

## Layers

*Since API level 3.1.0*

Layers are used to fuse multiple levels of drawable content belong to the same view. Once added to a view, layers are rendered on the screen automatically in the order they are added. Layers are conceptually closer to the [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) than a [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), and come with a similar runtime memory cost.

The following is a code snippet about how to use the [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/) system

```typescript
class MyLayerView extends WatchUi.View {

    function initialize() {
        // create a 240x240 layer, at [0,0] offset from the top-left corner of the screen
        var backgroundLayer = new WatchUi.Layer({:x=>0, :y=>0, :width=>240, :height=>240});

        // draw something on the layer
        backgroundLayer.getDc().drawBitmap( ... );
        backgroundLayer.getDc().drawPolyline( ... );

        // add layer to View as background
        addLayer(backgroundLayer);

        // create another 20x20 layer and add it to the view as foreground layer
        var foregroundLayer = new WatchUi.Layer({:x=>10, :y=>10, :width=>20, :height=>20});
        addLayer(foregroundLayer);

        // draw something on the foreground layer
        foregroundLayer.getDc().drawText( ... );
    }
}
```

### AnimationLayer

Layers are useful for fusing animations with your [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) content. The [WatchUi.AnimationLayer](/connect-iq/api-docs/Toybox/WatchUi/AnimationLayer/) is a special layer that allows integration of [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/) and your [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/). Using layers, you can overlay animations over your [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/), or overlay static content over playing animations.

Figure 2. Animation WatchFace With 3 Layers

![glance page](/connect-iq/resources/programmers-guide/layers.png)

The above screenshot illustrates a 3-layer watch face from the `samples/AnimationWatchFace` sample app. See the [Resources](/connect-iq/core-topics/resources/#animations) section to learn how to embed resources into your app. See the `samples/AnimationWatchFace` sample to learn more.
