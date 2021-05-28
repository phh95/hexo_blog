---
title: GitHub 个人主页美化（下）          
date: 2021-5-28 22:00:00    
tags: [GitHub]             
---

Hello 大家好，我是安哥。

虽然我不是程序员，但还是会时不时到世界上最大的代码托管网站 **GitHub** 上去逛一逛，看看自己关注的人是不是 Star（收藏）了一些有意思的项目。

之前写过一篇为自己的 GitHub 主页添加**个性小标签**的方法，效果见下图：

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222128050423.jpg)

添加个性小标签的方法见👉👉：[如何美化 GitHub 个人主页？](https://mp.weixin.qq.com/s?__biz=MzAxMjY0NTY5OA==&mid=2649909962&idx=1&sn=cc1b4341f2940a75214ead8c3c2ccf3d&chksm=83a86ee7b4dfe7f10daef1ceef82005ccc4f5d6c6fb97d57ca297039b54d0ddb4e8d389cc18a&scene=21#wechat_redirect)  

除了添加小标签，前段时间还在 GitHub 上看到另外一些有意思的 GitHub 个人主页。

一个是显示自己注册 GitHub 的时间、提交代码的次数、仓库的数量、以及自己最常使用的语言。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222128507232.jpg)

另一个则是显示自己的项目获得的 Stars 数量、今年提交代码的次数、创建的 issue 的数量、以及一个计算出来的总评分 A+。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222128802152.jpg)

这些实现起来其实都非常简单，只需要你稍微懂一点 Markdown 的语法。

和之前介绍过的在 GitHub 主页添加小标签一样，你需要先**创建一个与你 GitHub ID 同名的 GitHub 仓库**。

点击 GitHub 个人页右上角的加号 + ，在弹出的面板中，选择「**New repository**」，创建一个新的 GitHub 仓库。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222129097996.jpg)

Repository name 是仓库的名称，这里的仓库名必须与前面的 Owner 下方的 GitHub ID 一样，例如我的 ID 为 phh95，因此这里的仓库名也为 phh95。

创建时记得勾选从下方的「**Add a README file**」，在仓库中添加一个名为 README 的 Markdown 文件，等会我们就是要在这个文件中添加我们想放在 GitHub 个人主页的内容。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222129328640.jpg)

## 01. Metrics 

获得类似下图的 GitHub 数据统计，需要用到一个在线工具「Metrics」，打开网站之后，在左侧输入你的 GitHub ID，稍等一会，就会返回右侧所有和你相关的数据。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222129571049.jpg)

这里输入阮一峰老师的 ID 进行举例，右侧就是这个网站返回给我们的统计数据。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222129720474.jpg)

点击右侧的 Markdown code 选项卡，切换到统计视图对应的 Markdown 链接。

如果这是你的 GitHub 账号统计数据，可以点击下方的**蓝色链接**，它会将这个链接添加到和你 GitHub ID 同名仓库中，这样你就可以在个人首页看到这些统计数据啦。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222130089032.jpg)

Metrics 网址：
*https://metrics.lecoq.io/*

## 02. 显示常用的编程语言

在 GitHub 个人页显示最常用的编程语言，只需要在与 GitHub ID 同名的仓库的 README.md 文档中添加下面的文本：

`![这里写你的昵称's Most used languages](https://github-readme-stats.vercel.app/api/top-langs?username=这里替换成你的 GitHub ID&show_icons=true&count_private=true&theme=gotham)`

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222130457996.jpg)

复制后稍作修改，向下滑动页面，点击绿色的「**Commit changes**」按钮，提交确认刚刚作出的修改。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222130630284.jpg)

再回到自己的 GitHub 主页，它就会显示**你最常使用的编程语言**，这个统计数据来自于你 Push 到 GitHub 的内容。

譬如我之前将一些在本地写的 Python 文件 Push 到 GitHub 仓库，它就会显示我最常使用的语言为 Python。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222130817920.jpg)

如果你觉得这个显示常用语言的样式不好看，还可以更改文本链接末尾的**参数设置**，例如隐藏底部的深色边框。

下图的效果对应的文本内容为：

`![这里写你的昵称's Most used languages](https://github-readme-stats.vercel.app/api/top-langs/?username=这里替换成你的 GitHub ID&layout=compact&hide_border=true&langs_count=10)`

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222131079398.jpg)

## 03. GitHub 统计卡片

在 GitHub 上，不少人都会在自己的 GitHub 主页添加下图的 GitHub 统计卡片：

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222131263530.jpg)

这个 GitHub 统计卡片，来源于 GitHub 上的一个名为「**GitHub Readme Stats**」的项目。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222131422494.jpg)

GitHub Readme Stats 项目地址：
*https://sourl.cn/Sxq854*

这个项目提供了中文版的说明文档，将其添加到自己的 GitHub 主页也非常简单，将下方的链接复制到 GitHub ID 同名的仓库的 README.md 文档中，稍微修改一下信息就可以了。

`[![这里写你的昵称's GitHub stats](https://github-readme-stats.vercel.app/api?username=这里替换成你的 GitHub ID)](https://github.com/anuraghazra/github-readme-stats)`

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222131676869.jpg)

这个统计卡片还提供了**其他的主题样式**，即不同的配色方案，如果你想使用其他的主题，需要在上方的链接后面增加一些额外的参数。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222131892558.jpg)

举个例子，我想使用其中的一个名为 **radical** 的主题，我就得原先的链接后面加多两个参数的配置，一个是**显示图标**，一个是**设置所使用的主题名称**。

`[![这里写你的昵称's GitHub stats](https://github-readme-stats.vercel.app/api?username=这里替换成你的 GitHub ID&show_icons=true&theme=radical)](https://github.com/anuraghazra/github-readme-stats)`

增加了参数配置之后，原先配色方案为**蓝白黑**的卡片就变成了下图的**粉黑青**配色：

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222132210757.jpg)

## 04. 添加其他平台的统计数据

除了前面介绍的内容，GitHub 上还有一位开发者采用了类似于「GitHub Readme Stats」的思路，写了一个在 GitHub 个人页**显示其他平台统计数据**的工具。

目前支持统计的网站有：**知乎、B 站、LeetCode、LeetCode 中文站**和**掘金**，下图提供了**知乎统计卡片**的预览效果。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/16222132545884.jpg)

对这个项目感兴趣的朋友，可以移步开发者的 GitHub 项目页面，查看具体的使用或实现方法：

*https://github.com/songquanpeng/stats-cards*


以上就是本次想和你分享的内容。
看完文章如果觉得对你有帮助的话，别忘了点击底部的「**点赞/在看**」鼓励一下我，谢谢。

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)

