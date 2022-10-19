---
title: Hexo博客增加文章置顶功能【效率工具指南】                
date: 2022-10-20 01:09:00               
tags: [博客,Hexo]                                                                       
---

Hello 各位好，我是小豪。   

留意过公众号「历史消息」页面的朋友，想必会在不少公众号看到下图的「**作者精选**」模块，它有点像是**置顶**🔝功能，可以让作者或运营者把最想让用户看到的内容排在所有文章的最前面。   

目前这个模块最多只支持置顶 2 篇文章，数量多了也不好，会让设计出来的精选失去了意义——要先把别的文章设为精选，就必须先取消掉原有的精选（在「订阅号助手」App 中操作）。           

![IMG_3665](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/10/20/img3665.JPEG)

因为公众号的这个精选功能，我就联想到：为啥我不给自己的个人博客也整一个呢？     

说来就来，下图就是我的 Hexo 博客添加了「**文章置顶**」功能后的效果，我选取了其中 2 篇用作测试：  

* 我终于拥有自己的独立博客了   
* 油猴脚本获取公众号文章封面       

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/10/20/16661981781654.jpg)

给 Hexo 博客添加「文章置顶」功能也非常简单，当然需要说明的是，不同的 Hexo 主题添加或配置这个功能的方法，存在着细微的差异。  

以我在用的 Hexo Fluid 主题为例，官方提供的「配置指南」也提供了详细的说明：  

安装版本号 >= 2.0.0 的 `hexo-generator-index` 插件，并在文章开头的 `Front-matter` 中额外增加一个 sticky 属性，就能将文章置顶啦。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/10/20/16661986069840.jpg)

Hexo Fluid 主题配置指南：       
https://hexo.fluid-dev.com/docs/guide/#%E6%96%87%E7%AB%A0%E6%8E%92%E5%BA%8F


我跟着配置指南的提示，分别给两篇文章添加了 sticky 属性，两个值分别为 100 和 99，数字大的文章会排在数字小的文章上方，效果就如前面你所看到的那样。           

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/10/20/16661984858109.jpg)


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/10/20/16661988818465.jpg)


如果你使用的是别的 Hexo 主题，可能要安装另外的插件 `hexo-generator-index-pin-top`，并配置 top 属性来实现文章的置顶，具体可参考网上的一篇文章：   

https://blog.51cto.com/u_15477117/4919708  


## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)       



