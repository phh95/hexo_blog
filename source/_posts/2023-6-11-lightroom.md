---
title: 苹果电脑macOS系统安装Lightroom2022，一篇文章解决所有问题。        
date: 2023-6-11 12:42:00               
tags: [摄影,Lightroom,索尼,Mac]                                                                                       
---

本文首发于微信公众号「[效率工具指南](https://mp.weixin.qq.com/s?__biz=MzAxMjY0NTY5OA==&mid=2649922443&idx=1&sn=e2c13160e7412f10ce22e31dbacd84a1&chksm=83a89fa6b4df16b0f1a98d0835b4edd2df0b1691cb4a8bfab5b4236efa8d3b5ec2eed1936bdf&token=862859911&lang=zh_CN#rd)」    
文/彭宏豪


玩过摄影的朋友，可能有听过 Lightroom 这款软件，它是由 Adobe Systems 公司发布的一款软件，旨在帮助专业摄影师的后期制作。  

Lightroom 原名为 Adobe Photoshop Lightroom CC，从 2017 年开始更名为 Lightroom Classic CC，就像很多人会把 Photoshop 简称为 Ps/PS，为了方便起见，会把 Lightroom 称作 Lr/LR。   

我会想用 Lightroom 来修图，是因为在 Youtube 上看到了一个 Lr 的简易修图教程，使用基本中的「自动调色」、镜头校正、自动变换这 3 步，轻轻松松就把一张「废片」变好了。  

因此，我也想依葫芦画瓢，在 Mac 电脑上安装一个 Lightroom，来拯救我拍摄的照片。    

先上图：  

左边是相机拍的 raw 文件，右边是用 Lr 自动调色后的效果，最明显的差别是修过的图片，可以看清更多细节，比如建筑顶部的球⚽️的纹理、下方楼层窗户外的污渍。

原图过曝，在 Lr 进行的自动调色，帮我们完成了一系列的操作——降低曝光度、增加对比度、压暗高光、提升阴影，这样修过的图片就有了更多细节。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/06/11/16864579792568.jpg)
👆上图为深圳市气象局

最后再给它套上一个 Lr 内置的滤镜 VCR02，一张风光大片就有了😂


![7M400083](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/06/11/7m400083.jpg)

如果你对这个简易的 Lr 修图教程感兴趣，可以扫描下方的二维码观看视频，我把教程上传到了芦笋：


 
![教你如何使用Adobe Lightroom 快速处理相机拍摄的RAW原始格式照片。（20201108第15期）](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/06/11/jiao-ni-ru-he-shi-yongadobe-lightroom-kuai-su-chu.png)

说回在苹果电脑上安装 Lightroom，一波三折，弄了一晚上，搞到后面我都在想，还不如去找台 Windows 电脑来用🤦苹果真特么难整……  

最先是顺利地安装了 Lightroom，但卡在了导入 raw 文件的环节，出现下面的提示：部分导入操作没有执行，拍的 83 张图一张都没法导入，你跟我说这只是部分没法导入……

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/06/11/16864580658309.jpg)

这个我猜测是 Lr 的版本太低，软件内部没有我用的相机或镜头配置文件，干脆不让我导入，而且在软件内添加 raw 文件所在的路径后，预览视图下没法预览 raw 文件。

解决这个问题的思路：先确认一下你用的相机的上市年份，然后用这个年份 + 1 的软件版本，比如我用的相机 Sony A7M4 是 2021 年开售的，我最后安装了 Lr 2022（版本号 11.4.1），就能顺利打开 raw 文件了。    

**Lightroom 2022 macOS 版本下载链接**：
https://pan.quark.cn/s/046643921b8d    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/06/11/16864581285015.jpg)

Lr 本身是一个付费软件，价格比较高，我用的是 pj 版，在苹果电脑上安装 pj 软件，还有两个要注意的地方：  

系统设置的「安全性」开启允许安装任何来源的软件，如果你的 Mac 电脑没有这个选项，需要先在终端中输入一串命令 **sudo spctl --master-disable**   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/06/11/16864581497584.jpg)

另外一个，则是要移除下载的 dmg 文件的 Quarantine 属性，这个具体是什么我不太了解，因此请教了一下 ChatGPT(GPT-4)。    

它给了我下面的回复：

"Quarantine" 属性是 macOS 系统为所有从 Internet 下载的文件设定的一个标记。这个属性的目的是提醒用户该文件可能存在风险，因为它来自于互联网。当你试图打开一个带有 "quarantine" 属性的文件时，系统会显示一条警告信息，告诉你这个文件是从互联网上下载的。

这个功能是一个安全预防措施，用来防止用户无意中运行恶意软件。但是，在某些情况下，这个属性可能会阻止你运行一些合法的、你需要的应用程序。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/06/11/16864581695428.jpg)


去除 dmg 文件的 Quarantine 属性的方法：

打开终端，粘贴命令 sudo xattr -r -d com.apple.quarantine，在命令后面加多一个空格，接着将你下载的 dmg 文件拖到终端里，它会在空格后面自动加上 dmg 文件所在的路径，在终端里按下回车键，输入系统的登录密码，就能去除 dmg 文件的 Quarantine 属性啦。  

去除之后，再双击打开 dmg 文件，按照文件里面的指引安装 Lightroom。 

假设你顺利安装了 Lr，也能将 raw 文件导入软件中，可能还会遇到另外一个坑：

Lr 软件的「修改照片」模块没法使用……这个模块就是 Lr 的灵魂，软件能装上，真正用来修图的功能没法用，这不是逗人玩吗？

![2023-06-11 11.15.09](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/06/11/20230611-111509.png)


我也在网上找到了一个比较简单的解决方法：

通过 Creative Cloud 来启动 Lightroom，而不是直接打开 Lightroom，不知道这是什么鬼导致的，但我也不想去了解原因了，软件能用就好！

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/06/11/16864582669780.jpg)

年少不知 raw 好，错把直出（jpg）当成宝。  


好了，以上就是今天想分享的内容，希望对你有帮助。      

如果对你也有帮助的话，别忘了点击下方的**点赞、在看**和**分享**按钮，**你的小小支持，是我持续更新的最大动力**，我们下次再见。  


## 扫码加入我在知识星球上创建的社群「效率工具指南」  

关于社群「效率工具指南」的介绍，可以查看我在语雀文档上发布的文档：[知识星球「效率工具指南」简介](https://www.yuque.com/penghonghao/af0aai/glwrg2dl0dqlegi6?singleDoc#)    

![48844555552858T2](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/25/48844555552858t2.JPG)


## 订阅我在竹白上创建的 Newsletter   

如果对你有帮助的话，别忘了点击下方的链接，订阅我的 Newsletter，之后发布了新的内容，就能第一时间收到通知啦～  

[👉在竹白上订阅效率工具指南](https://penghh.zhubai.love/)         

## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)   

