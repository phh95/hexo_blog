---
title: Hexo博客Fluid主题，字体全局更改为霞鹜文楷体【效率工具指南】 
date: 2023-5-7 14:41:00               
tags: [博客,字体,GitHub]                                                                                       
---

本文首发于微信公众号「[效率工具指南](https://mp.weixin.qq.com/s/fcUDWs2A6xTX1SNuOYRZIg)」
文/彭宏豪

Hello 各位周末好，我是小豪。    

说到开源免费字体，很多人都是下下来，安装到电脑上，然后就用到了自己的 PPT、设计稿、作品集、公众号封面等等，这是最常见的个人用途。     

在这之外，有些开发者或者软件公司，也会把这些字体用在自己的产品中。  

比如文章标题中提到的这款开源免费字体「**霞鹜文楷**」，就被用到了下面这些软件中：  

想下载「霞鹜文楷」这款字体的朋友，可以戳下方的网盘链接：

https://pan.quark.cn/s/e08221da914d


* 写作软件 Effie  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/07/16834356775975.jpg)


* 微信读书  

![IMG_6051](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/07/img6051.PNG)


* 在线白板软件「boardmix博思白板」   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/07/16834362061118.jpg)


还有一款国产软件，也用了这款字体，只不过人家**脸皮厚**，有勇气把这款字体设置为**会员专属的字体**……从版权和用途上说，把这款字体设置为会员功能，没啥毛病。

但如果它能慷慨大方地放出来给用户使用，我会更「敬佩」它……不想吐槽了。            

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/07/16834359382140.jpg)


每个人对「美」的理解是不同的，但对「美」的追求是无止尽的，就像我看到这么一款优雅的字体，也想把它用到自己的**Hexo博客**上，效果如下：        


博客首页：

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/07/16834351784264.jpg)


博客文章列表：  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/07/16834347751134.jpg)

博客文章正文：

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/07/16834365649022.jpg)

我的 Hexo 博客能顺利用上「霞鹜文楷」这款字体，还得感谢博客「[东评西就](https://www.dongjunke.cn/)」的作者 @小饿 对我的帮助，有了他在前面「踩坑」，给我发了他的代码，让我少走了许多弯路。     

博客「东评西就」网址：   
https://www.dongjunke.cn/    

我的 Hexo 博客用的是一个比较小众的主题 **Fluid**，在网上搜了一下「如何更改 Hexo 博客字体」，只看到有人介绍了 NexT 主题的方法，没有找到我在用的 Fluid 主题。  

既然没人写过，而且我也顺利折腾好了，那就来简单写一下 **Hexo 博客 + Fluid 主题全局更改网站字体**的方法，希望能帮到同路人或者后来者。   


打开 Hexo 博客的主题文件夹下的 `head.ejs` 文件，具体路径为 `themes/fluid/layout/_partial/head.ejs`。  

在文件的 head 标签中添加下面一行代码，通过 CDN 引入霞鹜文楷字体：    

`<link rel="stylesheet" href="https://npm.elemecdn.com/lxgw-wenkai-screen-webfont/style.css" media="print" onload="this.media='all'">`   


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/07/16834379640171.jpg)
   
接着去到 fluid 主题下的 css 文件夹下，路径为 `themes/fluid/source/css`，新建一个自定义 CSS 文件 `custom.css`，在 CSS 文件中添加样式：   

```
html, body, .markdown-body, p {
  font-family: 'LXGW WenKai Screen';
}
```

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/07/16834382087815.jpg)


再来到 fluid 主题的配置文件 `_config.yml`，路径为 `themes/fluid/_config.yml`，搜索配置项 `font_family`，在后面填上我们想用的霞鹜文楷字体对应的英文名 `"LXGW Wenkai Screen"`，记得要给字体名称加上引号哦。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/07/16834384189389.jpg)

通过上面介绍的 3 个步骤，就能把 Hexo 博客的字体全局更改为霞鹜文楷体，是不是很简单呢？   

有在用 Hexo 博客写东西的朋友，感兴趣的话，快去尝试一下吧。   


除了上面介绍的内容，最后还要附上和「霞鹜文楷」这款字体相关的资源或资料：   

* 霞鹜文楷字体作者的博客：https://lxgw.github.io/    
* 霞鹜文楷字体 GitHub 项目页面：https://github.com/lxgw/LxgwWenKai       
* 在网页上嵌入霞鹜文楷字体的 2 种方法——npm 和 cdn 引入，https://github.com/chawyehsu/lxgw-wenkai-webfont     


## 扫码加入我在知识星球上创建的社群「效率工具指南」  

关于社群「效率工具指南」的介绍，可以查看我在语雀文档上发布的文档：[知识星球「效率工具指南」简介](https://www.yuque.com/penghonghao/af0aai/glwrg2dl0dqlegi6?singleDoc#)    

![48844555552858T2](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/25/48844555552858t2.JPG)


## 订阅我在竹白上创建的 Newsletter   

如果对你有帮助的话，别忘了点击下方的链接，订阅我的 Newsletter，之后发布了新的内容，就能第一时间收到通知啦～  

[👉在竹白上订阅效率工具指南](https://penghh.zhubai.love/)         


## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)   






