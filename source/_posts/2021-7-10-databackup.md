---
title: 吃了没备份数据的亏    
date: 2021-7-10 18:00:00    
tags: [数据备份,博客,GitHub]             
---


Hello 大家好，我是安哥。


之前曾介绍过用一种搭建个人博客的方法：[不会代码，如何零成本搭建个人博客？](https://mp.weixin.qq.com/s?__biz=MzAxMjY0NTY5OA==&mid=2649880748&idx=1&sn=fb0ff081986dd788107f7bc867fb1853&chksm=83abfc81b4dc75970614ff85e078d47bb012214f0c4002fa2628651f44e416d0ef31d52dbe6f&token=1045425881&lang=zh_CN#rd)  



这是一种使用 GitHub Pages 来搭建博客的方法，无需租用服务器和域名，完全免费。文章中用到了一款名为 Gridea 的静态博客客户端，以图形化的界面替代了在终端中配置博客、将本地仓库 Push 到 GitHub 的过程，对没有技术基础的人非常友好。



![image-20210710174625308](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210710174625308.png)



我很早之前就用这个方法，创建一个域名为 `phh95.github.io` 的博客，但后来因为它无法在国内正常访问，我就转移到了[现在的博客](https://mp.weixin.qq.com/s?__biz=MzAxMjY0NTY5OA==&mid=2649893670&idx=1&sn=1f3f91248ade0d5f1bbe3c2046990d63&chksm=83a82f0bb4dfa61d463dfe7af7ecafa21ac0cf1bee21b1b147990b83f657f687d3857db40bf8&token=1045425881&lang=zh_CN#rd)，于是这个用 GitHub 托管的博客，就被我遗弃了。



昨天在网上搜东西，突然想起这个被遗弃已久的博客，想着要不要继续往上面发点东西，为了贪图方便，我还是选择使用 Gridea 来发布文章。



从网上下载 Gridea 客户端，配置好仓库信息之后，点击左下角的「同步」按钮，原以为它会先拉取原先存放在远端 GitHub 仓库的数据，把老文章克隆到本地。



![gridea同步](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/gridea%E5%90%8C%E6%AD%A5.png)



但事情出乎我的意料，这个同步操作的意思是，将本地的数据 Push 到远端的 GitHub 仓库，并直接将远端仓库的数据全部覆盖掉。



哦吼完蛋，就因为这个**误操作**，我以前在这个博客上发布过的几篇旧文章，全部都没了，连过往的提交记录也一并没了，看起来就像是个刚建没多久的新仓库。



![image-20210710180154841](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210710180154841.png)



其实不止是我，还有一些用了 Gridea 的人，也同样遇到了这个问题，在 Gridea 的 GitHub 项目页面中，有位网友在 2019 年就提了一个 issue，比较幸运的是，这位网友在同步之前，还留了一手——备份。



但到了 2021 年，这个遗留已久的问题，还是存在，不过这回我就没那么幸运了，因为没有想到会发生这个问题，也就没有提前将远端仓库的数据备份下来。。。



![image-20210710180443962](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210710180443962.png)



唯一一点值得窃喜的是，还好我放在上面的文章不多，也不重要，没了也没了吧。



经过这件事，也让我想到：有时那么能让我们省去繁琐操作、帮我们避开难题来龙去脉的工具或方法，真的有那么想象中的那么靠谱吗？



现在如果你来问我，「**有哪些学了就会受用一生的技能**」，我会首先推荐：**Git 和 GitHub**，即便你不是程序员。



## 将软件安装包上传到 GitHub 上



之前我会为介绍的一些软件提供安装包，也就需要经常用到各种网盘，例如蓝奏云或者飞书的云文档。



但这些网盘的一个缺点在于，每次分享的文件都是独立的，不存在关联，这也导致了你无法查看我之前分享过的其他软件。



此外，还有一点，因为分享的软件不同，每次我都需要去后台，为每个软件单独设置不同的关键词，操作起来比较繁琐。



正好看到图床工具 PicGo 的开发者 PiEgg，在少数派上发表了一篇介绍自己使用 GitHub 的心得《[从开源到应用分发，利用 GitHub 你能做这些事](https://sspai.com/post/66131)》。



![image-20210710182407268](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210710182407268.png)



其中介绍到一个用法，使用 GitHub 的 **release** 功能，将应用作为附件上传到 GitHub，作为一种**分发应用**的方法，省去购买云服务器的费用。



![image-20210710182538741](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210710182538741.png)



受他的启发，我想到，这个 release 不就相当于一个云盘吗？于是我创建了一个名为「**Awesome-Efficiency-Software**」的仓库，将两个应用的安装包作为附件上传到 GitHub 中，效果如下图。



这样做的好处在于，其实前面也说了：你可以看到我过往分享过的软件，而且我也不需要设置多个关键词，每次想要分享软件的时候，可以先上传到这里，再把相同的链接分享给你，就够了。



![image-20210710182906878](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210710182906878.png)


Awesome-Efficiency-Software 项目地址：

*https://github.com/phh95/Awesome-Efficiency-Software/releases* 



*附：

来自 PicGo 开发者 - PiEgg 的文章《从开源到应用分发，利用 GitHub 你能做这些事》，扫描识别下方的二维码即可阅读：

![QRcode_A — a1](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/QRcode_A%20%E2%80%94%20a1.png)   


## **欢迎关注**

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)   


以上就是本次想和你分享的内容。
看完文章如果觉得对你有帮助的话，别忘了点击底部的「**点赞/在看**」鼓励一下我，谢谢。




