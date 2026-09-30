---
title: "Sensors"
---
# 传感器

The [Toybox.Sensor](/connect-iq/api-docs/Toybox/Sensor/) module allows the app to enable and receive information from Garmin ANT+ sensors. 要接收信息，必须分配监听器方法并启用传感器：

```typescript
function initialize() {
    Sensor.setEnabledSensors( [Sensor.SENSOR_HEARTRATE] );
    Sensor.enableSensorEvents( method( :onSensor ) );
}

function onSensor(sensorInfo as Sensor.Info) as Void {
    System.println( "Heart Rate: " + sensorInfo.heartRate );
}
```

传感器信息被包装在[Sensor.Info](/connect-iq/api-docs/Toybox/Sensor/Info/)对象中:

|传感器类型| API | Units | API Level |
| --- | --- | --- | --- |
| Accelerometer | [Info.accel](/connect-iq/api-docs/Toybox/Sensor/Info/#accel-var) |在毫克单位中的x,y,z值的数组.| 1.2.0 |
| Altitude | [Info.altitude](/connect-iq/api-docs/Toybox/Sensor/Info/#altitude-var) | Altitude above mean sea level in meters (m). | 1.0.0 |
| Cadence | [Info.cadence](/connect-iq/api-docs/Toybox/Sensor/Info/#cadence-var) | Revolutions per minute (rpm). | 1.0.0 |
| Heading | [Info.heading](/connect-iq/api-docs/Toybox/Sensor/Info/#heading-var) | True north in radians. | 1.0.0 |
| Heart Rate | [Info.heartRate](/connect-iq/api-docs/Toybox/Sensor/Info/#heartRate-var) | Beats per minute (bpm). | 1.0.0 |
| Magnetometer | [Info.mag](/connect-iq/api-docs/Toybox/Sensor/Info/#mag-var) |在毫加斯中,x,y,z值的数组.| 1.2.0 |
| Oxygen Saturation | [Info.oxygenSaturation](/connect-iq/api-docs/Toybox/Sensor/Info/#oxygenSaturation-var) |目前的氧气和率 (%).| 3.2.0 |
| Power | [Info.power](/connect-iq/api-docs/Toybox/Sensor/Info/#power-var) | Watts. | 1.0.0 |
| Pressure | [Info.pressure](/connect-iq/api-docs/Toybox/Sensor/Info/#pressure-var) | The barometric pressure in Pascals. | 1.0.0 |
| Temperature | [Info.temperature](/connect-iq/api-docs/Toybox/Sensor/Info/#temperature-var) | Degrees Celsius (C). | 1.0.0 |

模拟器可以通过 *模拟*菜单模拟传感器数据,通过选择 *Fit Data* > *Simulate Data*来模拟传感器数据.这生成可通过传感器界面读取的有效但随机值.为了更准确的模拟,模拟器可以播放FIT文件并将输入输入到[Toybox.Sensor](/connect-iq/api-docs/Toybox/Sensor/)模块中.此目的是选择 *Simulation* > *Fit Data* > *Playback File*并从对话框中选择FIT文件.

查看与SDK共享的`AccelMag`和`Sensor`样本应用.

## High Frequency Data

*Since API level 2.3.0*

[Toybox.Sensor](/connect-iq/api-docs/Toybox/Sensor/)模块包含在一定频率的时间内收集加速器数据样本的能力.该功能使开发人员能够在Connect IQ应用程序中实现自己的定制运动检测算法.

通过注册传感器数据听器来获取加速器数据,该传感器提供采样参数以及用户定义的回调方法,当新数据可用时将执行.传感器数据请求通过以下[Toybox.Sensor](/connect-iq/api-docs/Toybox/Sensor/)模块方法和类别来管理:

| Class or Function |目的| API Level |
| --- | --- | --- |
| [Sensor.SensorData](/connect-iq/api-docs/Toybox/Sensor/SensorData/) |高频传感器数据包装| 2.3.0 |
| [Sensor.AccelerometerData](/connect-iq/api-docs/Toybox/Sensor/AccelerometerData/) |包装用于加速计信息| 2.3.0 |
| [Sensor.GyroscopeData](/connect-iq/api-docs/Toybox/Sensor/GyroscopeData/) |轮镜信息包装| 3.3.0 |
| [Sensor.MagnetometerData](/connect-iq/api-docs/Toybox/Sensor/MagnetometerData/) |磁度计信息包装| 3.3.0 |
| [Sensor.registerSensorDataListener()](/connect-iq/api-docs/Toybox/Sensor/#registerSensorDataListener-instance_function) |记录回调,从各种传感器获取数据| 2.3.0 |
| [Sensor.unregisterSensorDataListener()](/connect-iq/api-docs/Toybox/Sensor/#unregisterSensorDataListener-instance_function) |撤销已注册的数据请求| 2.3.0 |
| [Sensor.getMaxSampleRate()](/connect-iq/api-docs/Toybox/Sensor/#getMaxSampleRate-instance_function) |获取系统支持的最大样本率| 2.3.0 |

调用[Sensor.registerSensorDataListener()](/connect-iq/api-docs/Toybox/Sensor/#registerSensorDataListener-instance_function)将使您的应用程序能够通过您提供的回调接收加速度计数据.提供的数据类型和数量通过选项词典参数配置,该参数支持以下字段:

| Option |描述|
| --- | --- |
| `:period` |一个[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)表示在秒钟中请求样本的时间.最高为4秒.|
| `:sampleRate` |用[Sensor.getMaxSampleRate()](/connect-iq/api-docs/Toybox/Sensor/#getMaxSampleRate-instance_function)来确定系统可以支持什么.|
| `:accelerometer` |加速计的选项 (下面见)|
| `:heartBeatIntervals` |打打间隔的选项 (见下面)|
| `:gyroscope` |打打间隔的选项 (见下面)|
| `:magnetometer` |打打间隔的选项 (见下面)|

采用`:accelerometer`,`:heartBeatIntervals`,`:gyroscope`和`:magnetometer`的选项允许:

| Option |适用于|描述|
| --- | --- | --- |
| `:enabled` | `:accelerometer`, `:heartBeatIntervals`, `:gyroscope`, `:magnetometer` |设置为`true`启动传感器|
| `:sampleRate` | `:accelerometer`, `:gyroscope`, `:magnetometer` |用`getMaxSampleRate()`来确定系统可以支持什么.|
| `:includePower` | `:accelerometer` |要求电源阵列进行计算. 默认错误|
| `:includePitch` | `:accelerometer` |要求计算的音量阵列.默认错误|
| `:includeRoll` | `:accelerometer` |要求计算滚动阵列.默认错误|

此外,您必须提供一个接受单个参数的回调方法,当新数据可用时系统调用该方法.该方法通过一个装满所需传感器数据的[Sensor.SensorData](/connect-iq/api-docs/Toybox/Sensor/SensorData/)对象.请注意,只有一种传感器数据请求可以在任何特定时间都活跃,因此如果您想在现有数据请求时提交请求,您必须首先调用[Sensor.unregisterSensorDataListener()](/connect-iq/api-docs/Toybox/Sensor/#unregisterSensorDataListener-instance_function).[Sensor.registerSensorDataListener()](/connect-iq/api-docs/Toybox/Sensor/#registerSensorDataListener-instance_function)调用后,您提供的回调将随时调用,当新组样本可用时.例如,如果您要求四秒的数据在25Hz,每100个取出的样本就会调用回调.

下面可以找到一个简单的使用例子:

```typescript
using Toybox.Sensor;

class MyAccelHistoryClass
{
    private var _samplesX = null;
    private var _samplesY = null;
    private var _samplesZ = null;

    // Initializes the view and registers for accelerometer data
    public function enableAccel() as Void {
        var maxSampleRate = Sensor.getMaxSampleRate();

         // initialize accelerometer to request the maximum amount of data possible
        var options = {:period => 4000, :sampleRate => maxSampleRate, :enableAccelerometer => true};
        try {
            Sensor.registerSensorDataListener(method(:accelHistoryCallback), options);
        }
        catch(e) {
            System.println(e.getErrorMessage());
        }
    }

    // Prints acclerometer data that is recevied from the system
    public function accelHistoryCallback(sensorData as SensorData) as Void {
        _samplesX = sensorData.accelerometerData.x;
        _samplesY = sensorData.accelerometerData.y;
        _samplesZ = sensorData.accelerometerData.z;

        System.println("Raw samples, X axis: " + _samplesX);
        System.println("Raw samples, Y axis: " + _samplesY);
        System.println("Raw samples, Z axis: " + _samplesZ);
    }

    public function disableAccel() as Void {
        Sensor.unregisterSensorDataListener();
    }
}
```

查看与SDK共享的`PitchCounter`样本应用.

### Filtering Accelerometer Data

在处理加速计数据时,您可能希望将过器应用于您的应用程序收到的原始传感器输入.IIR和FIR过器对象为开发人员提供帮助进行样品过.以下新对象已加入数学模块:

|类|目的| API Level |
| --- | --- | --- |
| [Math.FirFilter](/connect-iq/api-docs/Toybox/Math/FirFilter/) |创建一个可以应用到样本阵列的FIR过器| 2.3.0 |
| [Math.IirFilter](/connect-iq/api-docs/Toybox/Math/IirFilter/) |创建一个可以应用到样本阵列的IIR过器| 2.3.0 |

每个过器类都需要提供系数,这通过词典参数进行.每个过器类支持的选项如下:

**FIR Filter**

| Option |描述|
| --- | --- |
| `:coefficients` |一组漂浮值,指定过系数. 这也可以是指嵌入式JSON资源的资源ID,定义了数值阵列.|
| `:gain` |一个浮动值,指向对系数应应用的乘法.|

**IIR Filter**

| Option |描述|
| --- | --- |
| `:coefficientList1` |一组漂浮值,指定过系数. 这也可以是指嵌入式JSON资源的资源ID,定义了数值阵列.|
| `:coefficientList2` |一组漂浮值,指定过系数. 这也可以是指嵌入式JSON资源的资源ID,定义了数值阵列.|
| `:gain` |一个浮动值,指向对系数应应用的乘法.|

一旦过器对象构建,可以调用应用函数,通过一个样本阵列,并将返回一个包含过结果的阵列.

下面可以找到一个简单的使用例 (更详细的样本请参见 SDK 配备的`PitchCounter`样本应用程序).

```typescript
using Toybox.Sensor;

class MyAccelHistoryClass
{
    hidden var mFilter = null;
    hidden var mSamplesX = null;
    hidden var mSamplesY = null;
    hidden var mSamplesZ = null;

    function initialize() {
        mFilter = new Sensor.FirFilter({:coefficients=>[0.22,0.12,0.55], :gain=>1.2);
    }
    // Initializes the view and registers for accelerometer data
    function enableAccel() {
        var maxSampleRate = Sensor.getMaxSampleRate();

         // initialize accelerometer to request the maximum amount of data possible
        var options = {:period => 4000, :sampleRate => maxSampleRate, :enableAccelerometer => true};
        try {
            Sensor.registerSensorDataListener(method(:accelHistoryCallback), options);
        }
        catch(e) {
            System.println(e.getErrorMessage());
        }
    }

    // Prints acclerometer data that is recevied from the system
    function accelHistoryCallback(sensorData) {
        mSamplesX = mFilter.apply(sensorData.accelerometerData.x);
        mSamplesY = sensorData.accelerometerData.y;
        mSamplesZ = sensorData.accelerometerData.z;

        Toybox.System.println("Filtered samples, X axis: " + mSamplesX);
        Toybox.System.println("Raw samples, Y axis: " + mSamplesY);
        Toybox.System.println("Raw samples, Z axis: " + mSamplesZ);
    }

    function disableAccel() {
        Sensor.unregisterSensorDataListener();
    }
}
```

### Logging Accelerometer Data

加速度计数据也可以被设备记录下来,并且可以在模拟器中播放用于使用加速度计数据功能的测试应用程序. 加速度计数据的记录通过将[SensorLogging.SensorLogger](/connect-iq/api-docs/Toybox/SensorLogging/SensorLogger/)对象传递到FIT录音会话中.

采用[Sensor.registerSensorDataListener()](/connect-iq/api-docs/Toybox/Sensor/#registerSensorDataListener-instance_function)方法的相同选项的[SensorLogging.SensorLogger](/connect-iq/api-docs/Toybox/SensorLogging/SensorLogger/)对象.然而,记录器将始终以模拟器的标准速度记录.

下面可以找到一个简单的使用例 (更详细的样本请参见 SDK 配备的`samples/PitchCounter`样本应用程序).

```java
import Toybox.SensorLogging;

class LoggingController {
    private var _logger as SensorLogger;
    private var _session as Session;

    public function initialize() {
        _logger = new SensorLogging.SensorLogger({:enableAccelerometer => true});
        _session = Fit.createSession({:name=>"mySession", :sport=>Fit.SPORT_GENERIC, :sensorLogger => mLogger});
    }

    public function startLogging() {
        _session.start();
    }

    public function stopLogging() {
        _session.stop();
    }

    public function saveLogging() {
        _session.save();
    }
}
```

## Weather

*Since API level 3.2.0*

许多Garmin设备都可访问每15分钟更新的当前天气情况.此信息要求设备能够通过配对智能手机访问数据连接.

连接 IQ提供了访问这些信息的以下方法:

| Function |目的| API Level |
| --- | --- | --- |
| [Weather.getCurrentConditions()](/connect-iq/api-docs/Toybox/Weather/#getCurrentConditions-instance_function) |获取最新缓存的天气条件| 3.2.0 |
| [Weather.getDailyForecast()](/connect-iq/api-docs/Toybox/Weather/#getDailyForecast-instance_function) |获取每日预测| 3.2.0 |
| [Weather.getHourlyForecast()](/connect-iq/api-docs/Toybox/Weather/#getHourlyForecast-instance_function) |获取每小时预测| 3.2.0 |
| [Weather.getSunrise()](/connect-iq/api-docs/Toybox/Weather/#getSunrise-instance_function) |找一个特定位置的日出| 3.3.0 |
| [Weather.getSunset()](/connect-iq/api-docs/Toybox/Weather/#getSunset-instance_function) |获取日落的特定位置| 3.3.0 |

请注意,除了当前位置之外,用户还可以选择特定的天气更新地点.您不能假设返回的天气条件是当前位置的天气条件.

这一作者测量了20个PicoPedropascals.
