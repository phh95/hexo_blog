---
title: 给个人博客首页添加 GitHub 图标                
date: 2021-9-11 18:30:00       
tags: [博客,GitHub]                               
---    

去年 10 月份我写了一篇搭建 Hexo 博客的文章《[我终于拥有自己的独立博客了](https://mp.weixin.qq.com/s/_izXrRi6eLav8NfLRaD6Mg)》，时间很快，将近一年，连搭建博客用到的「腾讯云」这阵子都一直在提醒我：该给你的网站域名和服务器续费了。        

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/11/16313333655408.jpg)

有了公众号，为啥还要多去折腾一个博客呢？   

我之前的想法是，希望在数字世界能有一个相对比较独立的家，任凭其他平台如何变化，眼看它们**起高楼、宴宾客、见楼塌**，我的博客还是我的，至少我的博客数据在本地和 GitHub 上各自有一个备份。   

除了这个，前两天还看到播客节目「捕蛇者说」的主理人 @laike9m 在他的博客文章《[People Die, but Long Live GitHub](https://laike9m.com/blog/people-die-but-long-live-github,122/)》中，他提出了一个问题：

> **如果你希望存储一段信息，让 100 年后的人也能访问，要怎么做？**  
> 

他认为现有的大部分网络服务都不靠谱，连提供这些服务的公司，会不会在接下来的 100 年中消失了，也是个未知数。   

思来想去之后，他认为**只有 GitHub 是比较靠谱的**，原因是未来世界依旧是离不开**开源**的，开源拥有无穷的魅力和力量，正是因为有许多热心的人选择将自己做的项目开源出来，我们得以站在前人的肩膀上，站得更高、看得更远。             

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/11/16313340996566.jpg)

想要完整阅读这篇文章《People Die, but Long Live GitHub》，可以扫描下方的二维码：    

![QRcode_A — a1](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/11/qrcodea--a1.png)
如果你有一点小追求或者小念想，希望自己公开分享出来的东西，在 100 年后还有机会被别人看到，真的，我推荐你将它们存放到 GitHub 上。  

关于如何使用 GitHub 来写博客，之前写过了两篇文章，感谢的可以戳下方的链接：   

[使用 GitHub Issues 来写博客](https://mp.weixin.qq.com/s/rvcADfzfjFoZlKlHEhKZ6w)      
[可能是最最最最简单的搭建博客方法](https://mp.weixin.qq.com/s/cRqTBEfHTmt0TvxCP7PjjA)                

## 给博客首页添加 GitHub 图标   

不少个人博客或者网站，都会在网站首页的右上角添加一个**如下图的 GitHub 图标**，点击图标可以跳转到 GitHub 主页或者博客所在的仓库。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/11/16313351234309.jpg)

如果你也想要给自己的博客添加类似的图标，可以参考下面的方法：   

首先打开网站 GitHub Corners，这个网站专门提供了不同样式的 GitHub 图标，左侧是 GitHub 图标的效果图，右侧是画出图标以及给图标添加动效的代码。    

从中选择一个你喜欢的 GitHub 图标样式，复制右侧的代码。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/11/16313537087838.jpg)

GitHub Corners 地址：   
*https://tholman.com/github-corners/*

接着打开博客项目的**主题**文件夹，这里以我搭建的 Hexo 博客为例，我所使用的 Hexo 主题是 **Fluid**。

沿着 Fluid >> layout 路径，打开 `layout.ejs` 文件。需要注意的是，如果你用的是其他 Hexo 主题，`layout`文件的后缀可能与这里的 ejs 是不一样的。  

打开 layout 文件之后，可以搜索 `</header>` 导航栏标签，在 `</header>` 上面一行，粘贴我们刚刚复制的代码。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/11/16313542645249.jpg)

接着还要对粘贴的代码进行修改，将最前面的 **href** 属性值更给为自己的 GitHub 个人主页链接🔗或者博客仓库的地址。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/11/16313545431851.jpg)

修改好文件之后，将本地作出的修改 push 到远端的仓库或服务器，应该就可以看到，博客首页右上角新增了一个 GitHub 图标。   

但我昨天在测试的时候，还遇到了另外一个问题，添加的 GitHub 图标被左侧的透明导航栏覆盖掉了，如下图所示，导致 GitHub 图标可以点击的区域变得很小，非常影响用户体验。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/11/16313546411434.jpg)

后来咨询了一位网友 @无声，他通过浏览器的调试工具「开发者工具」，帮我找到了原因：

我使用的 Fluid 主题中，导航栏的层级 **z-index** 属性值为 1030，而我从 GitHub Corners 网站复制的 GitHub 图标没有设置 z-index 属性，默认为 0，即导航栏的层级比 GitHub 图标高出很多，因此 GitHub 图标就被导航栏覆盖掉了。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/11/16313553489489.jpg)

解决这个问题的方法是，给我们从 GitHub Corners 网站复制的代码添加额外的一小段代码：  

在代码中定位到 `position: absolute;` 的位置，在它的末尾添加 `z-index: 1031;`，这里的数值只要比默认的 1030 大一点的**整数**即可。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/11/16313556349126.jpg)

修改之后保存，再次将代码 push 到远端，刷新博客首页，刚遇到的问题就被解决了。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/11/16313558318142.jpg)

## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)                  
 