---
title: 学 Python 前的准备工作      
date: 2021-5-9 10:00:00    
tags: [Python,编程,Mac]          
---

## 写在前面

本文不是广告，请不要因为你在朋友圈或许多公众号看到的 Python 课程文案/广告，而也把本文误认为是一篇广告。

这只是我作为一名 Python 初学者写的一篇 Python 入坑前的准备工作的文章。

## 为什么要学 Python？

做任何一件事之前，可能都会有无数个理由，但我目前还没想得特别清楚，可能包含下面一个或多个原因：

* 想了解一下，这个语言真的有传说中的那么神奇吗？可以解放双手？可以让我们从繁琐枯燥的重复劳动中解放出来？
* 听说 Python 的学习曲线比较缓，比较适合无编程基础的人学？想来试试。
* 想知道，我学 Python 多久之后就会放弃？因为学 Python 之前，我还买过两门开发微信小程序的课程，学到一半没做出个啥就放弃了。
* 想着 100 天公众号日更即将结束（目前进度 74/100），我想试试能不能坚持做别的事情 100 天看看？于是我选择了 Python。
* 觉得会用 Python 抓取自己想要的数据，这个行为本身就很「极客」。
* 最后一个理由：人生苦短，我选 Python。

## 选择哪个版本的 Python

这可能是初学者都会面临的问题，现如今 Python 分为 Python 2 和 Python 3 两个版本。

为方便之后使用各种第三方 Python 库，这里推荐安装 Python 3。


## 安装 Python

一种比较简单的安装方式就是从官网下载安装包。

![-w1517](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/08/16204828409010.jpg)Python 官网地址：
*https://www.python.org/*

对于 Mac 用户，还可以通过包管理工具 **Homebrew** 来安装 Python。

![-w1517](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/08/16204829008263.jpg)Homebrew 官网地址：
*https://brew.sh/index_zh-cn*

不过用 Homebrew 之前，需要先安装 Homebrew。

关于 Homebrew 的安装，清华大学开源软件镜像站提供了安装的说明，但这份说明文档，对我这个编程门外汉来说，写得还是不够直白，所以就没参考下图介绍的安装方法。

![-w1517](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/08/16204833576670.jpg)清华大学开源软件镜像站：
*https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/*

我参考了一位视频 Up 主提供的方法：

打开 Mac 的终端，输入 `xcode-select --install` 安装 Xcode 的命令行工具。

输入之后，它会询问你是否安装 Xcode 命令行工具，选择安装之后等待完成下载。

注：这里其实我也不知道安装了这个 Xcode 命令行工具能干啥，我只知道 Xcode 是苹果官方推出的 IDE 工具，如果你想开发 iOS App 的话，应该离不开它。   

![-w1117](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/08/16203911851823.jpg)安装好 Xcode 命令行工具之后，我们接着就可以来安装 Homebrew 了。

Homebrew 官方提供的文件存放在 GitHub 仓库上，由于某些特殊的原因，从 GitHub 仓库下载 Homebrew 非常费劲，需要使用木弟子才能提高下载速度。

这里推荐使用**国内的 Homebrew 镜像源**来安装 Homebrew，下图是这位 Up 主基于清华大学的镜像仓库制作的安装 Homebrew 的命令行：

![-w1552](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/08/16204826102268.jpg)Homebrew install 项目地址：
*https://gitee.com/iamhefang/homebrew-install*

在终端中输入如下的命令，接着输入电脑开机密码，就能开始 Homebrew 的安装啦：

`/bin/bash -c "$(curl -fsSL https://gitee.com/iamhefang/homebrew-install/raw/master/install.sh)"`

![-w1117](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/08/16203917754742.jpg)Homebrew 的文件比较大，安装的过程需要等待比较长的时间，需要耐心，当它完成安装的时候，你可以在终端看到「Installation successful」的提示。 

![-w1117](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/08/16203921686037.jpg)初次使用 Homebrew，你可以遵照软件的提示，在终端中输入 `brew help` 来查看 Homebrew 的帮助文件。  

帮助文件中提供了一些例子供我们参考，如下图的命令 `brew install FORMULA|CASK…` 就是我们等会安装 Python 需要用到的。 

![-w1117](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/08/16203924282234.jpg)安装好 Homebrew 之后，我们就可以通过 Homebrew 来安装 Python 了。

在终端中输入 `brew install python3`，按下回车键，等待 Python3 完成安装。

![-w1270](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/08/16203930295687.jpg)安装好 Python3 之后，为了确认 Python3 已经安装到电脑上了，我们可以在终端中输入命令 `python3`，按下回车。

下方如果返回 Python3 的版本，例如我安装的 Python 版本是 3.9.4 ，则说明 Python 真的安装好啦。

顺带一提，在终端中运行 `python3` 会进入 Python 的解释环境，最下方的三个连续的大于号 `>>>`，就代表我们当前已经进入了 Python 的解释器。   

![-w1270](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/08/16203932177900.jpg)此时，如果我们可以输入许多程序员刚学一门新语言时会用到的一句代码 `print('Hello world')`，下方就会返回 `Hello world`。

![-w1086](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/08/16204840244154.jpg)


## 写 Python 代码的工具

上面介绍的系统自带的终端，虽然可以作为写 Python 代码的工具，但存在不少缺点，例如不够高效，不会自动补全代码，不会有代码提示……

本着「懒就是第一生产力」的原则，我们可以选择其他更合适的工具，例如 **PyCharm**，来作为写 Python 代码的工具。

PyCharm 分为两个版本，一个是社区版，一个是专业版，社区版可免费使用，这对初学者来说也已经够用啦。

![-w1552](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/08/16204844040829.jpg)PyCharm 官网下载地址：
https://www.jetbrains.com/pycharm/download/

顺便一提，如果你是在校学生，可以在 PyCharm 官网以学生身份免费申请使用 PyCharm 专业版。

![-w1552](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/08/16204841660100.jpg)学生授权申请方式链接：
*https://sales.jetbrains.com/hc/zh-cn/articles/207154369*

以上，就是本次想和你分享的内容。
希望对想学 Python 的朋友有帮助。

下回看看能不能给各位一些 Python 学习的教程哈哈哈哈，不🐦的话。

## 欢迎关注

更多精彩内容，欢迎关注我的个人公众号「效率工具指南」。

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/08/gong-zhong-hao-xiao-lu-gong-ju-zhi-nan.png)

