---
title: 手机自带的多功能百宝箱，没人用真的太可惜了。   
date: 2021-4-12 22:00:00
tags: iPhone  
---
![图片](https://upload-images.jianshu.io/upload_images/1885171-8461d2f2f259f06e?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*题图：来自 Dribbble @cntgfyjd*

**Hello 大家好，我是安哥。**

很久之前听过一期音频节目，里面提到苹果公司采取的一种策略：用户先花高价钱购买了一部硬件设备 iPhone，之后才可以免费用上苹果提供的各种服务，例如：

* 办公软件三件套：Keynote、Numbers、Pages
* 摄影/剪辑软件：可立派、iMovie
* 音乐创作软件：库乐队

以及我们今天这篇文章的主角「**快捷指令**」，这款应用最初名为 **Workflow**，原先是 App Store 中的一款付费应用，在 2017 年被苹果公司收购，才转变成一款完全免费的应用。

这款应用是一款「**百宝箱**」般的存在，虽然日常使用的频率不是特别高，但每当我想实现某个操作但又不想单独下载一个 App 时，就会第一时间想到它。

![图片](https://upload-images.jianshu.io/upload_images/1885171-9e733f1b5371825b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
图片来自 9to5Mac

因此，今天的这篇文章，我想给大家介绍一些**好用有趣的快捷指令**、以及**创建自动化快捷指令的方法**，希望其中的内容对一些朋友有帮助。

## **01. 好用有趣的快捷指令**

**① Send to flomo**

这是一个可以将文本内容随时保存到**笔记工具 flomo** 的快捷指令，选中想保存的内容，选择共享，在共享菜单中选择「**Send to flomo**」，就可以将内容快速保存到 flomo 中。

![图片](https://upload-images.jianshu.io/upload_images/1885171-2358b2f74ac0cddb?imageMogr2/auto-orient/strip)
使用快捷指令将内容快速保存到 flomo

除了在共享菜单中使用快捷指令，我们还可以将 **Send to flomo 快捷指令小组件**添加到手机桌面。当你位于手机桌面时，点击 Send to flomo 小组件，运行快捷指令，在顶部弹出的窗口输入或粘贴想保存的文本，同样可以保存到 flomo。

![图片](https://upload-images.jianshu.io/upload_images/1885171-9b1c47ede8ba4510?imageMogr2/auto-orient/strip)

不同快捷指令的添加方法都大同小异，这里只介绍其中一个，后面的就不再介绍安装方法啦。 扫描快捷指令的二维码或者将快捷指令的链接复制到 Safari 浏览器中打开，按照提示跳转打开快捷指令 App。

![图片](https://upload-images.jianshu.io/upload_images/1885171-ad7a21042f6876b0?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在弹出的「添加快捷指令」页面，拖动到底部，选择「**添加不受信任的快捷指令**」，一般情况下，到这一步就完成了快捷指令的添加。

但对于快捷指令 Send to flomo 来说，添加的时候还需要**填入 API 链接**，填入之后才可以随时随地将内容保存到 flomo。

![图片](https://upload-images.jianshu.io/upload_images/1885171-90396afd2a183bc5?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

你可以在网页版 flomo 的「设置 >> API 及第三方工具」中查看自己专属的 API 链接，将这个链接粘贴到快捷指令的配置页，就可以完成快捷指令的添加了。

值得一提的是，使用 flomo 的 API 链接的前提是，**你必须先成为 flomo 的会员**。

![图片](https://upload-images.jianshu.io/upload_images/1885171-f60324fa41cb939b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

由于 iOS 14 新增了在桌面上添加「小组件」的功能，基于这个功能，我们可以将常用的快捷指令添加到桌面，方便快速使用。

长按手机桌面进入编辑模式，点击右上角的「**+**」号，打开**添加小组件**的页面，在顶部搜索或向下滑动找到快捷指令 App。

![图片](https://upload-images.jianshu.io/upload_images/1885171-b7fc922960d38724?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

快捷指令提供了**三种小组件样式**，这里我选择**只包含一个快捷指令**的方形样式。

如果添加的快捷指令不是你想要的，可以**单击**处于编辑状态的小组件，打开小组件的编辑面板，点击快捷指令右侧的蓝色文字，在弹出的面板中选择 Send to flomo 即可。

按照上面的操作，顺利的话，手机桌面上就会出现一个绿色的 Send to flomo 小组件啦。

![图片](https://upload-images.jianshu.io/upload_images/1885171-7000fd433f522ea2?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**② 应用图标抓取**
*https://sharecuts.cn/shortcut/6688*

这可能是设计师、剪辑师或者做图仔才会用到的快捷指令，它可以**提取 App Store 中任意应用的图标**，并将其保存到本地，得到的图片格式为 PNG。

添加了快捷指令之后，在 App Store 中搜索你想下载图标的应用，点击应用右侧的**分享**按钮，在打开的分享菜单中，运行「**应用图标抓取**」快捷指令，将应用图标保存到相册。

![图片](https://upload-images.jianshu.io/upload_images/1885171-71b5fb0cfdfa1f01?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**③ 早安 | 晚安**
*https://sharecuts.cn/shortcut/358*

这是一款会根据你当前所在位置，自动**播报实时天气预报**的快捷指令，Siri 读取的全部内容如下图左侧所示，读完之后会打开 Apple Music 播放音乐。

为了更方便地运行这个快捷指令，你可以**将这个快捷指令添加为桌面小组件**，点击小组件就会为你播放天气预报。

![图片](https://upload-images.jianshu.io/upload_images/1885171-14b41b166f3982d9?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**④ 生活助手**
*https://sharecuts.cn/shortcut/1565*

这个快捷指令集合了**日常生活中会用到的各种服务**，例如扫码付款、公交/地铁乘车、花生地铁 Wifi、打车、快递和手机充值等。

除了微信扫一扫，其他的服务都是由**支付宝**完成的，运行快捷指令之后，它就会在支付宝中打开对应的服务，不需要手动在**设计得乱糟糟的支付宝**中搜索这些服务。

![图片](https://upload-images.jianshu.io/upload_images/1885171-5426e8a95c3b6a4a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**⑤ iPhone 居中水印相机**
*https://sharecuts.cn/shortcut/6054*

之前有一小段时间看到有些人喜欢模仿苹果贺岁片的设计，在照片中央加上「**由 iPhone 12 Pro 拍摄**」的字样，可能会让人看上去觉得高端一样。

![图片](https://upload-images.jianshu.io/upload_images/1885171-cb00063d3acd7578?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
我实际上没有苹果 12，但可以假装有

如果你也想为你的图片添加这种水印，使用快捷指令「**iPhone 居中水印相机**」就可以很方便地做到，不需要使用 PS，也不需要专门在手机上下载一个 App。

这个快捷指令为图片添加苹果 logo 的**流程**是这样的：先选择 logo → 从相册中选择图片 → 选择 iPhone 型号 → 设置 logo 的颜色 → 改变水印的位置或大小 → 保存图片。

除了苹果标志性的 logo，这个快捷指令还提供了其他的图标，如 🐷 🍎 🍆 ◆，到了调整「**水印位置**」的步骤，选择「**移动位置**」，进入水印的编辑页面，**手指捏合**或**放大**水印可改变其大小。

![图片](https://upload-images.jianshu.io/upload_images/1885171-4496812f78e169d1?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**⑥ 更改视频速度**
*https://sharecuts.cn/shortcut/7579*

这是一个可用来**更改视频播放速度**的快捷指令，尤其适用于不提供倍速播放或倍速播放需要开通会员的网站，例如**百度网盘**。

添加快捷指令之后，在 Safari 浏览器中打开百度云视频，点击底部菜单栏中间的**分享**按钮，往上滑动菜单，可以看到「**更改视频速度**」的快捷指令。

点击运行快捷指令，屏幕上方会弹出更改视频播放速度的面板，选择你想要的倍速，当前播放的百度云视频就会相应地变更速度。

![图片](https://upload-images.jianshu.io/upload_images/1885171-1347b284900e20fe?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**⑦ 文字转 Emoji**
*https://sharecuts.cn/shortcut/614*

这是一个不太实用但**比较有意思**的快捷指令，它可以**将文本内容转换为 Emoji**，例如：

鸡同鸭讲 → 🐔同🦆讲
年轻人不讲武德 → 年轻👨🙅🏻‍♀️🗣️5️⃣🉐

输入你想转换为 Eomji 的文本内容，可以使用 Emoji 代替的，就会自动替换为相应的 Emoji，对于转换得到的内容，它会**自动复制到系统剪贴板**中。

![图片](https://upload-images.jianshu.io/upload_images/1885171-f073b13eab2511c1?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

实测这个快捷指令的**字库还不够丰富**，有些原本可以转换为 Emoji 的，转换之后仍为文本。

对于这个问题，这里再推荐一个更好用的**在线文本转 Emoji 网站**——**Emoji 大全**，这个网站右侧栏提供的「**emoji 语言转换**」模块，同样可以将文本转换为 Emoji。

![图片](https://upload-images.jianshu.io/upload_images/1885171-8545f329fb1e7366?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**Emoji 大全网址：**
*http://www.emojidaquan.com/*

**⑧ 发现更多好用有趣的快捷指令**

除了前面我介绍的快捷指令，如果你想找到更多有意思或者满足自己需求的快捷指令，可以到下面这些网站：

**捷径社区**
*https://sharecuts.cn/*

![图片](https://upload-images.jianshu.io/upload_images/1885171-b9005410fc0e8504?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**捷径盒**
*https://jiejinghe.com/*

![图片](https://upload-images.jianshu.io/upload_images/1885171-bd8d8f6812d4b05e?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## **02\. 自动化操作**

前面介绍的每一个快捷指令，需要我们主动实施操作，它才会运行相应的操作。

在快捷指令 App 中，它还提供了另外一种操作「**自动化**」，它可以将我们对手机的某个操作作为**触发下一个动作**的条件，帮我们自动完成某些操作，相对前者而言这是一个**被动**的过程。

**① 闹钟停止自动播放网易云每日推荐**

这是我最近在快捷指令 App 中添加的自动化操作，它会在我**关闭早晨的闹钟之后，自动打开网易云音乐，播放当天的每日推荐**。

能在大清早吵醒人的闹钟之后，听着音乐赖一小会床，于我而言也是一种**莫大的幸福**了哈哈哈哈，下面简单说一下实现方法：

先打开网易云音乐，点击左上角的按钮，打开左侧栏的面板，找到「**添加 Siri 捷径**」，在打开的页面中，将「**播放每日推荐**」或「**播放我喜欢的音乐**」**添加到 Siri**。

![图片](https://upload-images.jianshu.io/upload_images/1885171-115b6093d95d31fe?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

接着打开快捷指令 App，切换到「自动化」Tab，点击右上角的「**+**」号，选择「**创建个人自动化**」。

![图片](https://upload-images.jianshu.io/upload_images/1885171-6837ccc89d2b5b37?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

选择「闹钟」，设定当任一闹钟停止时，执行自动化操作，进入最右侧的页面，将底部的「搜索 App 和操作」自下往上滑动。

![图片](https://upload-images.jianshu.io/upload_images/1885171-7ef2a443b27de45b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

选择面板中的 App，从中选择**网易云音乐**，下方会显示与网易云音乐相关的快捷指令，按自己的喜好来，选择「播放 每日推荐」或「播放 我喜欢的音乐」都可以。

![图片](https://upload-images.jianshu.io/upload_images/1885171-2cd47dabe411a091?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

选好快捷指令之后，点击「下一步」，将「运行前询问」切换到**关闭**的状态，即**无需询问或确认操作就会自动运行快捷指令**，最后点击右上角的「**完成**」，就完成了自动化操作的添加。

![图片](https://upload-images.jianshu.io/upload_images/1885171-332c39ac9d1f5439?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

此时，在快捷指令的自动化页面，就可以看到刚刚添加的自动化操作，每当快捷指令运行这个自动化操作时，它会在**顶部的通知栏**显示「起床闹钟已停止 正在运行您的自动化操作」。![图片](https://upload-images.jianshu.io/upload_images/1885171-26a042339e0c984a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**② 戴上 AirPods 提示打开 QQ 音乐**

如果你同时持有 iPhone 和 AirPods 的话，可能体会过**苹果产品丝滑般的联动**：**戴上 AirPods 并按下耳机柄端，它会自动播放 Apple Muisc 里的音乐**。

由于 QQ 音乐或网易云音乐不像 Apple Music 拥有那么高的权限，暂时不能将按下耳机柄端播放音乐的软件更改为第三方应用。

目前一个比较可行的解决方案是，在快捷指令中创建一个**自动化操作**，当你戴上 AirPods，屏幕顶部会弹出**播放 QQ 音乐**的提示。

![图片](https://upload-images.jianshu.io/upload_images/1885171-de2c61e43cf5456f?imageMogr2/auto-orient/strip)

它的创建方法与前面介绍的「闹钟停止自动播放网易云」基本一致，先打开 QQ 音乐，添加你想要在快捷指令中触发的操作，例如「**播放我最喜欢的歌曲**」。

![图片](https://upload-images.jianshu.io/upload_images/1885171-c8f53aa991a6b669?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

切换到快捷指令 App，创建新的自动化，触发条件为**蓝牙**，即当 iPhone 和 AirPods 通过蓝牙连接时，触发运行 QQ 音乐的快捷指令。

![图片](https://upload-images.jianshu.io/upload_images/1885171-4a1c3b973050da15?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

相比前面的「关闭闹钟自动运行网易云」，「戴上 AirPods 提示打开 QQ 音乐」**并不能算严格意义上的自动化操作**，因为它还需要你**确认运行快捷指令**，才会跳转打开 QQ 音乐。

![图片](https://upload-images.jianshu.io/upload_images/1885171-3064065bb8885117?imageMogr2/auto-orient/strip)

一位创建了许多快捷指令的作者 @小悟空哥 在知乎的一个回答中说到，自动化按照触发场景可分为**自动运行**和**非自动运行**两种：

![image.png](https://upload-images.jianshu.io/upload_images/1885171-b64d4f0e1293f9ee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在前文中，我针对**自动运行**的场景和**非自动运行**的场景各列举了一个用法，其他更好玩的自动化操作，就等感兴趣的朋友自己探索了。

## **写在最后**

看到这里，如果你对快捷指令有任何疑问，可以在下方评论区留言；或是你也有**经常会用到的快捷指令**，也可以在下方留言，与大家分享交流。

以上就是本次想和你分享的内容。
看完文章如果觉得对你有帮助的话，别忘了点击底部的「点赞/在看」鼓励一下我，谢谢。

我的年度目标：公众号达到 1 万关注
目前进度 8965/10000
需要得到你的支持
公众号千千万
在比特世界相遇也是一种缘分
还没关注的朋友，请点下面👇👇的卡片关注

![公众号：效率工具指南](https://upload-images.jianshu.io/upload_images/1885171-eea84d908d380522.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
