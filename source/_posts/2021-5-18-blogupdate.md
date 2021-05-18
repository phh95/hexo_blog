---
title: 你可以用 RSS 订阅我的博客了          
date: 2021-5-18 00:00:00    
tags: [写作,博客,RSS]             
---

Hello 大家好，我是安哥。

去年写过一篇介绍自己[创建了一个博客](https://mp.weixin.qq.com/s?__biz=MzAxMjY0NTY5OA==&mid=2649893670&idx=1&sn=1f3f91248ade0d5f1bbe3c2046990d63&chksm=83a82f0bb4dfa61d463dfe7af7ecafa21ac0cf1bee21b1b147990b83f657f687d3857db40bf8&scene=21&token=1051004415&lang=zh_CN#wechat_redirect)的文章，创建博客之后，陆陆续续上传了一些文章，还不至于把博客完全荒废了。

博客，可以算是一个个人网站，相比于公众号，博客可以玩或者说可以自定义的地方更多，比如它可以像手机那样，换上各式各样的主题，给人不一样的视觉效果。

我的博客是用 Hexo 框架搭建的，下面是我收集的一些比较好看的 Hexo 主题（其实也没有收集很多主题，暂时只有三个）：

* [hexo-theme-next](https://github.com/iissnan/hexo-theme-next) 主题

![hexo-theme-next](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210514211522989.png)

* [hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery)：最近刚看到博客主题，页面左下角带有播放音乐的控件

![image-20210514215136167](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210514215136167.png)

* [hexo-theme-fluid](https://github.com/fluid-dev/hexo-theme-fluid)：我的博客目前正在使用的 Hexo 主题

![image-20210514215958123](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210514215958123.png)

## 如何为 Hexo 博客换上不同的主题？

如果你对前面介绍的 Hexo 主题感兴趣，可以去 GitHub 上搜索主题的名字，就能找到对应主题的代码文件。

点击绿色的「Code」按钮，选择「Download ZIP」，下载整个项目的源文件。

![-w1520](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212610267455.jpg)

将下载的 ZIP 文件解压，将解压后的整个文件放进 Hexo 博客的 themes 文件夹中。

![-w1112](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212615371840.jpg)

下载下来的主题一般都会带有主题作者的信息，在应用到自己的博客之前，需要先进行修改。

如果你不知道如何修改主题中的信息，可以查看主题的作者是否提供了主题的「说明文档」或「使用文档」。

以我在用的 Hexo 主题「hexo-theme-fluid」为例，主题的作者写了一份详细的「配置指南」，给初次使用第三方主题的人提供了非常详细的指导。

![-w1520](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212648922137.jpg)

Hexo 主题「hexo-theme-fluid」配置文档：
*https://hexo.fluid-dev.com/docs/guide/*

如果你使用的 Hexo 主题没有提供配置文档，也可以来参考上面的配置文档，因为多数 Hexo 主题的配置，都是大同小异的。

## 添加 RSS 订阅链接

虽然之前写过一篇介绍[通过 RSS 来订阅多个的内容平台](https://mp.weixin.qq.com/s?__biz=MzAxMjY0NTY5OA==&mid=2649904885&idx=1&sn=4cf0407adfa94e0e855ca3a5bc3bda20&chksm=83a852d8b4dfdbce023212961dfb446fc4fd8a8e595ea762ad8711602dd9c551811cdff19ca6&token=1051004415&lang=zh_CN#rd)的文章，但我自己却没有为自己的博客生成 RSS 订阅链接的意识🤦‍♂️

想起来要给博客添加 RSS 订阅链接，还是推特上一位网友给我提的。

为博客添加 RSS 订阅链接，需要安装一个插件「hexo-generator-feed」，具体可以参照 GitHub 上的一个项目「hexo-generator-feed」。

![-w1520](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212660487438.jpg)

hexo-generator-feed 项目地址：
*https://github.com/hexojs/hexo-generator-feed*

这个插件需要在终端中使用 **npm** 命令行工具安装
安装之前，需要打开**终端**（终端在 Windows 上叫做「命令行」），使用 `cd` 命令进入 Hexo 博客项目文件存放的位置。

例如我将 Hexo 博客项目文件存放在本地磁盘的 /workspace/hexo_blog 路径下，因此 `cd` 命令输入的内容如下：

```
cd workspace/hexo_blog
```

![-w1152](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212663991058.jpg)

进入 Hexo 博客项目文件所在的位置后，输入下方的命令安装「hexo-generator-feed」插件：

```
npm install hexo-generator-feed --save
```

安装了插件后，我们还需要对插件进行配置，插件项目的说明文档也对配置进行了说明：

![-w1520](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212667655383.jpg)

说明文档中配置的参数比较多，但其实我们可以偷懒，不需要配置那么多参数。

打开博客项目文件夹中的配置文件 `_config.yml`，可以用记事本打开，也可以用代码编辑器，例如微软推出的 VS Code 打开。

![-w1112](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212673979375.jpg)

打开配置文件，滑动到文件的最底部，在最底部加上下方的内容：

```
# 订阅 RSS
feed:
    type: atom
    path: atom.xml
    limit: false
```

![-w1066](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212674929381.jpg)

修改好 `_config.yml` 文件后，按下快捷键 Ctrl + S 保存我们的修改。

接着打开博客项目中存放主题的文件夹 themes，接着再进入博客当前使用的主题中。

以下图为例，我进入了我使用的 Hexo 主题「fluid」的文件夹中，其中也有一个名为 `_config.yml` 的配置文件，同样使用记事本或者代码编辑器打开它。

![-w1112](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212677314446.jpg)

同样滑动到配置文件的末尾，在空白处加上下面的一行内容：

```
rss: /atom.xml
```

![-w1066](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212680030990.jpg)

加入上面的一行代码之后，同样 Ctrl + S 保存文件。

此时，将所有的修改 Push 到远端的服务器，稍等一会，就可以使用 RSS 来订阅自己的博客了，RSS 链接为：`博客域名/atom.xml`

举个例子，我的个人博客域名为 `penghh.fun`，我的博客 RSS 订阅链接相应地就是：`penghh.fun/atom.xml`

如果你有使用 RSS 阅读器来获取信息的习惯，可以将我博客的 RSS 链接添加到你的 RSS 阅读器中：

![-w1400](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212686091065.jpg)

这部分给 Hexo 博客生成 RSS 订阅链接的内容，参考了网友 @千古壹号 写的内容，原文如下，可扫码阅读：

![QRcode_A — a1](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/qrcodea--a1.png)

## 添加单篇博客阅读量统计

博客不像公众号——会在文章页面的左下角显示阅读数，如果我们想要为博客添加单篇文章阅读量的统计功能，还需要手动进行配置。

配置之前，最好先查看一下你使用的 Hexo 主题的配置文件 `_config.yml` 是否已经写好了相关的代码，只是默认暂未开启统计功能。

打开 Hexo 主题的 `_config.yml` 文件，按下快捷键 Ctrl + F 打开搜索功能，你可以**试着使用下方这些关键字**进行搜索，查看 Hexo 主题是否写好了统计博客阅读量的代码：

* web analytics
* views
* leancloud

![-w1066](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212694034937.jpg)

譬如，我使用的 Hexo 主题「fluid」就写好了统计阅读量的代码，只是缺少相应的配置，默认就无法统计单篇文章的阅读量。

这里我使用一个第三方服务 **Leancloud** 来统计文章的阅读量。

首先需要打开 Leancloud 的官网，注册一个账号，注册好账号之后，点击左上角的按钮，创建一个应用。

![-w1520](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212698785178.jpg)

创建时「应用名称」可以随你自由命名，下方的「应用计价方案」选择「**开发版**」就好，不需要花钱，接着点击右下角的蓝色按钮「创建」。
![-w1520](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212699186782.jpg)

创建好应用之后，打开应用的「设置 >> 应用 Keys」，页面中有两个参数，一个是 **AppID**，一个是 **AppKey**。

这两个参数下方的值等会要用到，暂时不要把网页关掉。
![-w1520](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212701931820.jpg)

回到博客主题的配置文件中，搜索 Leancloud，如下图所示，可以看到 leancloud 下方有两个需要配置的参数，一个是 **app_id**，一个是 **app_key**，这两个参数的值就分别对应上面说到的 **AppID** 和 **AppKey**。

![-w1066](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212704379312.jpg)

接着我们还要开启每篇博客的数据统计的功能，在博客主题配置文件中搜索关键字 view。

每篇博客的数据统计 views 下方有两个参数，一个是 enable，将其设置为 enable 或 true 都可以；一个是统计的来源 source，设置为 leancloud。

![-w1066](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212718906462.jpg)

完成以上配置之后，将所有变更 Push 到服务器，稍等一小会，刷新自己的博客，一般情况下，就可以在每篇博客的顶部看到阅读量的统计数据了。

![-w1742](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212721365539.jpg)

## 交换博客「友情链接」

不像以前，现在刚起步做博客更难了，因为许多人都不怎么在电脑端阅读内容了，都更倾向于使用手机获取信息，而且人们更喜欢观看视频而非枯燥的文字内容了。

基于种种原因，从零开始做一个博客，真的难上加难。

因此，如果你刚好也有自己的博客，且有交换友情链接🔗的想法，不嫌弃的话，可以在评论区留言，我们互相在各自的博客添加彼此的链接。

你的博客链接的位置，我已经留好了。

![-w1742](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/18/16212724879342.jpg)

以上，希望有帮助。









