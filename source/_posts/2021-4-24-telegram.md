---
title: 比微信更好用的文件传输工具｜Telegram    
date: 2021-4-24 16:00:38    
tags: Telegram          
---

Hello 大家好，我是安哥。 

今天来继续说一下上回介绍过的一款国外通讯工具 Telegram 的用法。

Telegram 既有网页版也有客户端，因为我既有 Windows 也有 macOS 的电脑，因此在两台电脑上都下载了客户端。

但是使用这两个客户端分别遇到了两个不同的问题：

## macOS 客户端无法登录

在 macOS 客户端的登录页输入手机号，点击下方的 Next 之后，无法顺利进入下一页，一直停留在 loading 的动画效果。

![-w975](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/24/16192457095838.jpg)最开始我还以为是客户端的问题，卸载了从 Mac App Store 下载的软件，再从 Telegram 官网下载了另外一个版本的客户端，还是遇到了同样的问题。

后来在网上搜了一下，才找到了原因和解决方法：

![-w880](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/24/16192463162062.jpg)图片来自 @聪聪

解决方法是这样的：点击登录页右上角的按钮，在打开的面板中，选择「**Add Proxy**」。  

![-w975](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/24/16192462674658.jpg)下方会弹出一个选项，选择「SOCKS5」。

![-w975](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/24/16192464564623.jpg)这里需要填写的内容有两项，一项是 Server，一项是 Port，这两个值取决于你使用的木弟子软件。

![-w975](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/24/16192465170619.jpg)以我为例，我在 Mac 上使用的是下图这个绿色图标的木弟子软件：

![-w716](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/24/16192466542669.jpg)右击状态栏的软件图标，选择「高级设置」。

![-w274](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/24/16192467329325.jpg)

在打开的窗口中，就可以看到本地 Socks5 配置的参数，这里的监听地址和监听端口，分别对应前面提到的 Server 和 Port 的值，将这个参数分别填入即可。

![-w516](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/24/16192468052877.jpg)添加好 Proxy 之后，重启 Telegram，为保证后续登录不会出现问题，可以再次点击登录页的右上角的按钮，查看刚添加的 socks5 的连接状态，若显示的状态为 **connected**，则代表添加的 Proxy 可以正常运行。  

此时，回到 Telegram 的登录页，不出意外的话，就可以顺利登录了。

![-w975](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/24/16192470326556.jpg)

## Windows 客户端需要开启全局代理

使用 Windows 版的 Telegram，在登录时并没有遇到像 macOS 版本那样的问题，但在使用的过程中，还是会有一个困扰我已久的问题：需要开启全局代理，不然就无法查看最新的消息。  

但开启全局代理，它又会影响到国内不少网站的使用，以至于我不得不在全局与 PAC 模式之间频繁切换。

看了网友 @聪聪 写的一份文档，我发现这个问题，实质上还是和 macOS 的登录问题是一样的。

![-w933](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/24/16192487950012.jpg)解决方法：

点击 Telegram Windows 客户端左上角的三横线 >> Settings >> Advanced，进入高级选项页面。

![photo_2021-04-24 15.15.57](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/24/photo20210424-151557.jpeg)点击 Connection type，进入网络设置页面。

![photo_2021-04-24 15.16.02](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/24/photo20210424-151602.jpeg)选择使用自定义设置「Use custom proxy」，像前面介绍的方法一样，添加 socks5 配置，因为我两台电脑使用的木弟子是一样的，所以这里配置的值也是一样的。  

这样配置之后，使用 Telegram 就再也无需全局 Proxy 了。  

![03](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/24/03.png)

## 使用 Telegram 在两台电脑之间传输文件

Telegram 中有一个类似于微信「文件传输助手」的功能——Saved Messages，不过这个功能比文件传输助手更好用，好用在哪呢？

一个 Telegram 账号可以同时在两台电脑上登录，这意味着你可以借助这个功能，在两台电脑之间传输各种文件，且传输的文件不会过期，可以传输的单个文件大小上限为 2 GB。

![-w975](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/24/16192492668225.jpg)

Telegram 客户端下载地址：
*https://desktop.telegram.org*   

## 欢迎关注  

本文首发于我的微信公众号「[效率工具指南](https://mp.weixin.qq.com/s/rzXeG7L5il7nb3WEnS8-Wg)」，欢迎移步关注。     

![微信公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/18/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)   