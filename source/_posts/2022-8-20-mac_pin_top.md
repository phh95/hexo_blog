---
title: Mac任意应用窗口置顶显示，这个好用软件相见恨晚【效率工具指南】             
date: 2022-8-20 00:40:00               
tags: [Mac,窗口置顶,插件]                                                                                     
--- 

本文首发于微信公众号「[效率工具指南](https://mp.weixin.qq.com/s/u31ajN_EP8LibFSIsNw3mQ)」
文/彭宏豪      

Hello 各位周末好，我是小豪。  

相信用过截图软件 Snipaste 的朋友，应该对软件内置的「贴图」功能并不陌生：   

它可以将截图固定在屏幕最上层，不会被其他应用窗口所遮挡，这个功能有点像 Windows 上一些软件自带的「置顶」功能一样，例如 Windows 微信或幕布，点击右上角的「图钉📌」，就可以将应用「钉」在桌面最顶层。    

![](https://img.penghh.fun/2023/02/04/16610004551391.jpg)

当然并不是所有的 Windows 应用都自带「置顶」功能，为了让所有的 Windows 应用窗口都能置顶，我还写过 2 篇实现应用窗口置顶的文章：   

[截图软件Snipaste超好用的贴图功能，在别的软件也能拥有 | 窗口置顶工具](https://mp.weixin.qq.com/s?__biz=MzAxMjY0NTY5OA==&mid=2649912229&idx=1&sn=42ed51bfed7cbf30728fc6e632ddd994&chksm=83a87788b4dffe9e11e48e63f82d997427b7102f11105f9636b752902653db44d86a28cfa58e&token=827967041&lang=zh_CN#rd)    

[微软家的多功能工具箱，让我又卸掉了5个软件 | PowerToys](https://mp.weixin.qq.com/s?__biz=MzAxMjY0NTY5OA==&mid=2649919355&idx=1&sn=9a52c988fef1e8f69a436a26cf7af0b0&chksm=83a88b56b4df02406f5e844ebe347839491ce32e2e6937bcb4cf0f59ea3ac02ca0d145c8f62c&token=827967041&lang=zh_CN#rd)    


之所以会有窗口置顶的需求，主要还是觉得自己在用的电脑的屏幕太小，想要一边看视频（IINA 视频播放器），一边记笔记（MWeb），有时还要敲下代码（VS Code），需要在 3 个软件之间来回切换的体验很差。  

这时我就想到，如果可以把其中最重要的视频播放窗口固定在桌面顶部，不受另外两个软件遮挡，同时只需要在这两个软件间切换，就可以大大提高观看视频教程的体验。   

因为我用的是 Mac 电脑，因为 macOS 系统的限制，想要实现 Windows 那样的窗口置顶，并没有那么方便。  

之前就有这个想法了，但一直没找到合适且简单的软件，不过今天在网上搜了一下，终于找到 macOS 系统上将应用窗口置顶的方法啦！    


## 实现方法  

在 Mac 上将任意应用窗口置顶显示，需要用到一个软件和插件。   

* 软件：MacForge，一个开源的插件管理工具，可通过安装插件，为 macOS 系统增加本不具备的功能。    
* 插件：AfloatX，让应用窗口置顶显示的插件。   


## 下载 MacForge 

下面是 macEnhance 对 MacForge 这款软件的简要介绍：  

> MacForge，适用于 macOS 的简单插件管理器。可让您发现和管理出色的插件以增强您的 macOS 体验。   

使用 MacForge 有两个注意事项：  

* 必须禁用 macOS 系统的系统完整性保护，系统完整性保护的英文全称为 System Integrity Protection，简写为 SIP         
* MacForge 不能用于 M1 或 M2 芯片的电脑，目前只支持 Intel 芯片的 Mac 电脑，且 macOS 系统版本不得低于 10.14   

![](https://img.penghh.fun/2023/02/04/16610030947358.jpg)

MacForge 下载地址：  
https://www.macenhance.com/macforge   


## 关闭 macOS 系统 SIP   

Mac 电脑出厂时，为了提升系统的安全性，默认开启了系统完整性保护。   

更多关于系统完整性保护的介绍，可以查看来自 macEnhance 网站的介绍：  

![](https://img.penghh.fun/2023/02/04/16610036328958.jpg)


如果你不确定自己之前是否关闭了系统完整性保护，可以先打开 Mac 自带的终端，在终端中输入 `csrutil status`，根据返回的信息，就能知道当前是否关闭了 SIP。  

如下图，我的电脑当前关闭了 SIP，因此返回的信息为 disabled。      

![](https://img.penghh.fun/2023/02/04/16610037897147.jpg)


如果返回的是 enabled，那就说明系统当前的 SIP 是开启的。为了让 MacForge 能起作用，需要先关闭 SIP。   

关闭 SIP 的方法：  

先将电脑关机再开机，刚开机时长按 Command + R，直至电脑屏幕出现开机时的苹果图标，此时松手，等待进入 macOS 恢复功能界面。   

接下来的操作，因为我没有截图，这里可参考「少数派」上的一篇文章《[macOS 开启或关闭 SIP](https://sspai.com/post/55066)》：   

![QRcode_A — a1 -2-](https://img.penghh.fun/2023/02/04/qrcodea--a1-2.jpg)

简单来说，就是打开 macOS 恢复功能界面顶部菜单栏「实用工具 >> 终端」，在打开的终端中输入 `csrutil disable`后按下回车，这样就关闭了 SIP，之后重启电脑，正常进入系统。    

## Mac 终端   

重启电脑后，再次打开 Mac 电脑的终端，在终端粘贴下面的命令，按下回车，输入电脑开机密码。    

```
sudo defaults write /Library/Preferences/com.apple.security.libraryvalidation.plist DisableLibraryValidation -bool true  
```

## 运行 MacForge 软件  

打开我们安装的 MacForge，点击左侧栏的 Discover，这里显示的就是 MacForge 提供的各种系统增强插件。   

其中的 AfloatX 就是实现应用窗口置顶所需要用到的插件，点击右侧的「GET」按钮安装插件，当按钮上的文字由 GET 变为 OPEN，就说明插件已经安装完毕。     

安装好插件后，再重启一下电脑，让刚安装的插件生效。      

![](https://img.penghh.fun/2023/02/04/16610045700357.jpg)

## 将应用窗口置顶显示   

重启电脑后，打开想置顶显示的应用，右击 Dock 栏的应用图标，可以看到打开的面板中多出了一个 **AfloatX** 的选项，选择 Float Window，即「浮动窗口」，就可以将当前应用的窗口置顶显示啦！  

开心～从自己的需求出发，找到了刚好可以满足需求的工具，这种感觉太开心了。           

![](https://img.penghh.fun/2023/02/04/16610048056235.jpg)


## 另外的窗口置顶方案  

如果你觉得前面介绍的方法比较麻烦，想找一个可以简单实现窗口置顶的方法，那么可以考虑使用下面的这款工具——Fentre。  

Fentre 可以置顶显示图片、视频、网页等，只需要安装软件就能直接使用，不像前面需要很多个步骤。  

将你想要置顶显示的东西拖拽到顶部菜单栏的 Fentre 图标，软件就会打开一个悬浮在桌面顶部的窗口。  

但实际使用下来，Fentre 的自由度不如前面介绍的方法，表现在：使用 Fentre 置顶显示的视频只能用 Fentre 内置的播放器播放，无法使用 IINA 来播放，也就意味着无法倍速播放视频。。。     

![](https://img.penghh.fun/2023/02/04/16610053721374.jpg)


如果你想要使用 Fentre，可从 Mac App Store 下载，应用商店提供了两个软件版本，一个是免费的 Lite 版，一个是付费的 Pro 版，价格为 50 元。 

还需要说明的是，Fentre 目前似乎只有适配 Intel 芯片的版本，如果你想在 M1 或者 M2 芯片的电脑上使用，需要额外安装 Rosetta，对 Intel 版本的软件进行转译。      


![](https://img.penghh.fun/2023/02/04/16610058770652.jpg)


## 扫码加入我在知识星球上创建的社群「效率工具指南」  

如果你觉得本文帮到了你，想支持我做得更好，欢迎戳下方图片，加入我的知识星球。     

关于社群「效率工具指南」的介绍，可以查看我在语雀文档上发布的文档：[知识星球「效率工具指南」简介](https://www.yuque.com/penghonghao/af0aai/glwrg2dl0dqlegi6?singleDoc#)    

![48844555552858T2](https://img.penghh.fun/2023/03/25/48844555552858t2.JPG)   

## 订阅我在竹白上创建的 Newsletter   

如果对你有帮助的话，别忘了点击下方的链接，订阅我的 Newsletter，之后发布了新的内容，就能第一时间收到通知啦～  

[👉在竹白上订阅效率工具指南](https://penghh.zhubai.love/)         


## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://img.penghh.fun/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)      


















