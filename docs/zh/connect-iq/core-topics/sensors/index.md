---
title: "Sensors"
---
<a id="sensors"></a>
# 传感器

[Toybox.Sensor](/connect-iq/api-docs/Toybox/Sensor/) 模块允许应用启用 Garmin ANT+ 传感器并接收其数据。要接收数据，必须指定监听器方法并启用传感器：

```typescript
function initialize() {
    Sensor.setEnabledSensors( [Sensor.SENSOR_HEARTRATE] );
    Sensor.enableSensorEvents( method( :onSensor ) );
}

function onSensor(sensorInfo as Sensor.Info) as Void {
    System.println( "Heart Rate: " + sensorInfo.heartRate );
}
```

传感器信息会封装在 [Sensor.Info](/connect-iq/api-docs/Toybox/Sensor/Info/) 对象中：

| 传感器类型 | API | 单位 | API 级别 |
| --- | --- | --- | --- |
| 加速度计 | [Info.accel](/connect-iq/api-docs/Toybox/Sensor/Info/#accel-var) | 以毫 g 为单位的 x、y、z 值数组 | 1.2.0 |
| 海拔 | [Info.altitude](/connect-iq/api-docs/Toybox/Sensor/Info/#altitude-var) | 高于平均海平面的高度，单位为米（m） | 1.0.0 |
| 踏频 | [Info.cadence](/connect-iq/api-docs/Toybox/Sensor/Info/#cadence-var) | 每分钟转数（rpm） | 1.0.0 |
| 航向 | [Info.heading](/connect-iq/api-docs/Toybox/Sensor/Info/#heading-var) | 以弧度表示的真北方向 | 1.0.0 |
| 心率 | [Info.heartRate](/connect-iq/api-docs/Toybox/Sensor/Info/#heartRate-var) | 每分钟心跳次数（bpm） | 1.0.0 |
| 磁力计 | [Info.mag](/connect-iq/api-docs/Toybox/Sensor/Info/#mag-var) | 以毫高斯为单位的 x、y、z 值数组 | 1.2.0 |
| 血氧饱和度 | [Info.oxygenSaturation](/connect-iq/api-docs/Toybox/Sensor/Info/#oxygenSaturation-var) | 当前血氧饱和度（%） | 3.2.0 |
| 功率 | [Info.power](/connect-iq/api-docs/Toybox/Sensor/Info/#power-var) | 瓦特（W） | 1.0.0 |
| 压力 | [Info.pressure](/connect-iq/api-docs/Toybox/Sensor/Info/#pressure-var) | 以帕斯卡为单位的气压 | 1.0.0 |
| 温度 | [Info.temperature](/connect-iq/api-docs/Toybox/Sensor/Info/#temperature-var) | 摄氏度（C） | 1.0.0 |

模拟器可以通过 *Simulation* 菜单中的 *Fit Data* > *Simulate Data* 生成传感器数据。这些数据有效但随机，可以通过传感器接口读取。为了进行更准确的模拟，模拟器还可以播放 FIT 文件，并将其中的数据输入 [Toybox.Sensor](/connect-iq/api-docs/Toybox/Sensor/) 模块。请选择 *Simulation* > *Fit Data* > *Playback File*，然后在对话框中选择 FIT 文件。

更多信息请参阅 SDK 随附的 `AccelMag` 和 `Sensor` 示例应用。

## 高频数据

*自 API 级别 2.3.0*

[Toybox.Sensor](/connect-iq/api-docs/Toybox/Sensor/) 模块可以在指定时间段内，以指定频率采集加速度计数据样本。借助此功能，开发者可以在 Connect IQ 应用中实现自定义运动检测算法。

可以通过注册传感器数据监听器获取加速度计数据。监听器提供采样参数和用户定义的回调方法，新数据可用时系统会调用该方法。传感器数据请求通过以下 [Toybox.Sensor](/connect-iq/api-docs/Toybox/Sensor/) 方法和类管理：

| 类或函数 | 用途 | API 级别 |
| --- | --- | --- |
| [Sensor.SensorData](/connect-iq/api-docs/Toybox/Sensor/SensorData/) | 高频传感器数据的封装 | 2.3.0 |
| [Sensor.AccelerometerData](/connect-iq/api-docs/Toybox/Sensor/AccelerometerData/) | 加速度计数据的封装 | 2.3.0 |
| [Sensor.GyroscopeData](/connect-iq/api-docs/Toybox/Sensor/GyroscopeData/) | 陀螺仪数据的封装 | 3.3.0 |
| [Sensor.MagnetometerData](/connect-iq/api-docs/Toybox/Sensor/MagnetometerData/) | 磁力计数据的封装 | 3.3.0 |
| [Sensor.registerSensorDataListener()](/connect-iq/api-docs/Toybox/Sensor/#registerSensorDataListener-instance_function) | 注册回调，从各种传感器获取数据 | 2.3.0 |
| [Sensor.unregisterSensorDataListener()](/connect-iq/api-docs/Toybox/Sensor/#unregisterSensorDataListener-instance_function) | 取消已注册的数据请求 | 2.3.0 |
| [Sensor.getMaxSampleRate()](/connect-iq/api-docs/Toybox/Sensor/#getMaxSampleRate-instance_function) | 获取系统支持的最大采样率 | 2.3.0 |

调用 [Sensor.registerSensorDataListener()](/connect-iq/api-docs/Toybox/Sensor/#registerSensorDataListener-instance_function) 后，应用就能通过提供的回调接收加速度计数据。数据类型和数量通过选项字典参数配置，该参数支持以下字段：

| 选项 | 说明 |
| --- | --- |
| `:period` | 表示采样请求时长（秒）的 [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)。最大值为 4 秒。 |
| `:sampleRate` | 表示每秒采样次数（Hz）的 [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)。使用 [Sensor.getMaxSampleRate()](/connect-iq/api-docs/Toybox/Sensor/#getMaxSampleRate-instance_function) 确定系统支持的最大值。 |
| `:accelerometer` | 加速度计选项（见下文） |
| `:heartBeatIntervals` | 心跳间隔选项（见下文） |
| `:gyroscope` | 陀螺仪选项（见下文） |
| `:magnetometer` | 磁力计选项（见下文） |

`:accelerometer`、`:heartBeatIntervals`、`:gyroscope` 和 `:magnetometer` 选项支持以下字段：

| 选项 | 适用于 | 说明 |
| --- | --- | --- |
| `:enabled` | `:accelerometer`、`:heartBeatIntervals`、`:gyroscope`、`:magnetometer` | 设为 `true` 以启用传感器 |
| `:sampleRate` | `:accelerometer`、`:gyroscope`、`:magnetometer` | 表示每秒采样次数（Hz）的 [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)。使用 `getMaxSampleRate()` 确定系统支持的最大值 |
| `:includePower` | `:accelerometer` | 请求计算功率数组。默认为 `false` |
| `:includePitch` | `:accelerometer` | 请求计算俯仰角数组。默认为 `false` |
| `:includeRoll` | `:accelerometer` | 请求计算横滚角数组。默认为 `false` |

此外，必须提供一个接收单个参数的回调方法；新数据可用时，系统会调用它，并传入填充了请求传感器数据的 [Sensor.SensorData](/connect-iq/api-docs/Toybox/Sensor/SensorData/) 对象。任意时刻只能有一个传感器数据请求处于活动状态；如果要在已有请求运行时提交新请求，必须先调用 [Sensor.unregisterSensorDataListener()](/connect-iq/api-docs/Toybox/Sensor/#unregisterSensorDataListener-instance_function)。调用 [Sensor.registerSensorDataListener()](/connect-iq/api-docs/Toybox/Sensor/#registerSensorDataListener-instance_function) 后，每当一组新样本可用时，系统都会调用回调。例如，请求 4 秒、25 Hz 的数据时，回调每采集 100 个样本调用一次。

下面是一个简化的使用示例：

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

更多信息请参阅 SDK 随附的 `PitchCounter` 示例应用。

### 筛选加速度计数据

处理加速度计数据时，可能需要对应用收到的原始传感器输入进行滤波。Math 模块提供了 IIR 和 FIR 滤波器对象，帮助开发者过滤样本。新增对象如下：

| 类 | 用途 | API 级别 |
| --- | --- | --- |
| [Math.FirFilter](/connect-iq/api-docs/Toybox/Math/FirFilter/) | 创建可应用于样本数组的 FIR 滤波器 | 2.3.0 |
| [Math.IirFilter](/connect-iq/api-docs/Toybox/Math/IirFilter/) | 创建可应用于样本数组的 IIR 滤波器 | 2.3.0 |

每个滤波器类都需要通过字典参数提供系数。各滤波器支持的选项如下：

**FIR 滤波器**

| 选项 | 说明 |
| --- | --- |
| `:coefficients` | 指定滤波器系数的浮点数组，也可以是引用嵌入式 JSON 资源的资源 ID，该资源定义了数值数组。 |
| `:gain` | 应用于系数的乘数（浮点值）。 |

**IIR 滤波器**

| 选项 | 说明 |
| --- | --- |
| `:coefficientList1` | 指定滤波器系数的浮点数组，也可以是引用嵌入式 JSON 资源的资源 ID。 |
| `:coefficientList2` | 指定滤波器系数的浮点数组，也可以是引用嵌入式 JSON 资源的资源 ID。 |
| `:gain` | 应用于系数的乘数（浮点值）。 |

构造滤波器对象后，可以调用 `apply` 函数并传入样本数组；该函数会返回包含滤波结果的数组。

下面是一个简化的使用示例；更详细的示例请参阅 SDK 随附的 `PitchCounter` 应用。

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

### 记录加速度计数据

设备也可以记录加速度计数据，随后在模拟器中播放，用于测试使用加速度计数据的应用。要记录数据，请将 [SensorLogging.SensorLogger](/connect-iq/api-docs/Toybox/SensorLogging/SensorLogger/) 对象传给 FIT 录制会话。

`SensorLogging.SensorLogger` 对象使用与 [Sensor.registerSensorDataListener()](/connect-iq/api-docs/Toybox/Sensor/#registerSensorDataListener-instance_function) 相同的选项。不过，记录器始终以模拟器的标准速度记录。

下面是一个简化的使用示例；更详细的示例请参阅 SDK 随附的 `samples/PitchCounter` 应用。

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

## 天气

*自 API 级别 3.2.0*

许多 Garmin 设备都可以访问每 15 分钟更新一次的当前天气信息。设备必须能够通过已配对的智能手机访问数据连接。

Connect IQ 提供以下方法来访问这些信息：

| 函数 | 用途 | API 级别 |
| --- | --- | --- |
| [Weather.getCurrentConditions()](/connect-iq/api-docs/Toybox/Weather/#getCurrentConditions-instance_function) | 获取最近缓存的天气状况 | 3.2.0 |
| [Weather.getDailyForecast()](/connect-iq/api-docs/Toybox/Weather/#getDailyForecast-instance_function) | 获取每日预报 | 3.2.0 |
| [Weather.getHourlyForecast()](/connect-iq/api-docs/Toybox/Weather/#getHourlyForecast-instance_function) | 获取每小时预报 | 3.2.0 |
| [Weather.getSunrise()](/connect-iq/api-docs/Toybox/Weather/#getSunrise-instance_function) | 获取指定位置的日出时间 | 3.3.0 |
| [Weather.getSunset()](/connect-iq/api-docs/Toybox/Weather/#getSunset-instance_function) | 获取指定位置的日落时间 | 3.3.0 |

请注意，用户可以选择当前位置以外的天气更新地点。因此，不能假定返回的天气状况对应当前位置。
