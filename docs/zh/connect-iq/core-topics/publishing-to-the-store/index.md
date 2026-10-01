---
title: "发布到 Connect IQ 商店"
---
# 发布到 Connect IQ 商店

![](/connect-iq/resources/programmers-guide/captain-monkey.png)

我们很高兴您希望为 Garmin 设备开发应用，我们也希望您取得成功。请务必[查看我们的指南](http://developer.garmin.com/connect-iq/app-review-guidelines)并在开发应用时牢记这些指南。

一旦您的应用经过充分测试并准备就绪，您就可以将应用发布和推广到 Garmin Connect IQ 应用商店。以下是准备应用提交的方法：

1.  确保清单文件指定了应用支持的所有产品

2.  使用 *Monkey C: Export Project*（导出项目）命令生成 IQ 文件，其中将包含每个支持设备的二进制文件

3.  将应用上传到应用商店

## 检查支持的产品

通过查看项目根目录中的清单 XML 文件，可以轻松快速检查应用支持的产品：

```xml
<iq:products>
    <iq:product id="fenix3"/>
    <iq:product id="vivoactive"/>
    <iq:product id="fr920xt"/>
    <iq:product id="epix"/>
</iq:products>
```

## 导出应用

在命令面板中使用 *Monkey C: Export Project*（导出项目）命令启动导出向导。设置导出目标文件夹后，Monkey C 扩展将生成项目的 `.iq` 文件。

## 发布第一个版本

要将 IQ 文件上传到开发者账户，请先访问 Garmin 开发者网站的 [Submit an App](/connect-iq/submit-an-app/) 页面。点击 *Submit an App*（提交应用）按钮，填写下方显示的表单：

![将应用上传到 App Store](/connect-iq/resources/programmers-guide/upload_app.png)

IQ 文件验证通过后，添加描述、屏幕截图以及有关您应用的详细信息：

![添加标题和说明](/connect-iq/resources/programmers-guide/title_description.png)

## GDPR

2016 年 4 月，欧盟议会通过了[通用数据保护条例（General Data Protection Regulation）](https://publications.europa.eu/en/publication-detail/-/publication/3e485e15-11bd-11e6-ba9a-01aa75ed71a1/language-en)（GDPR），这是一项旨在协调欧盟各国数据隐私法律的法案。GDPR 规定了合法处理欧盟个人数据的要求，包括与数据隐私、同意和数字服务相关的要求。GDPR 通常适用于欧盟个人数据的处理，即使您不在欧盟，也可能适用于您或您的公司。对于不合规行为，数据保护主管机构可处以最高为全球年营业额 4% 或 2000 万欧元的罚款，以较高者为准。这不是法律建议，我们建议您咨询法律顾问获取指导。

Connect IQ 是一个全球平台，正如 [Connect IQ 许可协议](/connect-iq/sdk/)中所述，开发者负责确保应用符合所有适用法律，包括与数据保护和隐私相关的法律。与隐私相关的具体责任可在[Connect IQ 许可协议](/connect-iq/sdk/)第 2 节中找到。开发者应审查 GDPR，以确定自己可能承担的义务。这些义务可能包括：

-   征求收集个人数据的同意。

-   提供有关哪些涉及用户的个人数据正在被处理、处理地点以及处理目的的信息。

-   免费向用户提供从其收集的任何个人数据。

-   允许用户完全删除其在产品中的数据和账户信息，包括停止第三方处理个人数据。


如果解决方案以任何方式收集个人数据，包括使用 `Communications` 权限收集或保留个人数据（可能与 `Sensor`、`Sensor History` 或 `Position` 权限结合使用），或使用任何其他机制，您都有责任确保解决方案符合 GDPR。

## 审批流程

成功将应用上传到应用商店后，Connect IQ 团队将审核您的提交。除特殊情况（如国家假日）外，审核将在 72 小时内完成。

如果您指示应用使用一个或多个 ANT+ 配置文件，通常需要额外 48 小时来完成 ANT+ 认证。认证完成后，我们会提供 ANT+ 品牌信息和指向 [ANT+ Directory](https://www.thisisant.com/directory) 的链接，供您添加到商店中的应用描述。

审批等待期间，您的应用不会出现在 Garmin Connect 应用商店，但您将能够预览应用并自行下载进行测试。批准后，您将收到通知，它将出现在 Connect IQ 应用商店，供所有用户下载并加载到他们的设备上！

如果您的应用因某些原因被拒绝，请不要沮丧！Connect IQ 团队将通过电子邮件提供具体的拒绝原因，并可能会与您合作解决问题。应用将继续可供您更新并在需要时重新提交以供审批，但在获得批准之前，它不会显示在 Connect IQ 应用商店上。
