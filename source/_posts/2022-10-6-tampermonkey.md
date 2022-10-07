---
title: 油猴脚本获取公众号文章封面                              
date: 2022-10-6 17:55:00               
tags: [油猴脚本,前端,微信公众号]                                                                                   
---  

本文首发于微信公众号「[效率工具指南](https://mp.weixin.qq.com/s/p8pnKX8_4tLKKkG4GsmERQ)」                 
文/彭宏豪        
   

Hello 各位好，我是小豪。  

假期过得很快，还没做啥事情，又快溜走了。        

今天回到深圳，趁着不用做其他事情，写了一个很简单的油猴脚本：**获取微信公众号文章封面**。   

这个油猴脚本已提交到寻找各类油猴脚本的网站 Greasy Fork，如果你平时也有获取公众号文章封面的需求，可以在浏览器打开下方的链接安装这个脚本：  

https://greasyfork.org/zh-CN/scripts/452548-%E8%8E%B7%E5%8F%96%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E6%96%87%E7%AB%A0%E5%B0%81%E9%9D%A2


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/10/06/16650455889598.jpg)

写这个油猴脚本的想法💡由来已久，只是一直没有付诸行动，会觉得按照之前手动获取封面的方式来写代码很难。   

但经过下午一点时间的琢磨，还在群里请教了一些朋友，把代码写出来，却发现异常地简单，用下面一行代码，就能搞定我获取公众号文章封面的需求：      

```
window.open(document.querySelector('meta[property="og:image"]').content);    
```

## 脚本使用方法

「获取微信公众号文章封面」油猴脚本的使用方法：  

浏览器安装了脚本之后，当你在浏览器打开任意一篇公众号文章，脚本会自动运行——打开一个新的标签页，里面就会显示公众号文章的封面，如下图所示。    


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/10/06/16650473197987.jpg)

需要说明的是，由于这个油猴脚本包含了一个自动打开新标签页的操作，首次使用时可能会被浏览器误以为是「有害的弹窗」而被拦截。  

解除拦截的方法：点击浏览器地址栏右侧带有「红色小叉号」的图标，选择「总是允许」就可以啦。    


## 脚本代码的简要介绍   

下面简单说一下代码的由来和含义：   


既然我们的需求是要拿到公众号文章的封面，首要的步骤就是找到文章封面的位置，或者更确切地说是**封面图片的链接**。     

按下 F12 打开浏览器开发者工具，分析下面的 HTML 代码，就能在属性名为 `og:image` 的 meta 标签中找到封面图片的链接，即 content 属性的值，就是封面图片的链接（图床链接）。           

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/10/06/16650463185503.jpg)

要拿到 content 属性的值，我们可以使用 JavaScript(DOM 操作) 和 CSS 选择器，两者搭配一下，就能拿到 meta 对象中的 content 属性的值：    

```
document.querySelector('meta[property="og:image"]').content;      
```

上面这行代码在浏览器中运行后，只会得到一个 https 开头的图片链接，想要看到最终的文章封面，还需要额外一步操作，在浏览器地址栏打开这个链接，因此我在前面那行代码的基础上，再添加了一个在新标签页中打开链接的指令：  

```
window.open(document.querySelector('meta[property="og:image"]').content);   
```

这样就得到了最终的一行代码。   

## 将代码发布为人人可用的油猴脚本  

当然，写完前面的一行代码后，实际上我只能在自己的电脑上使用，而无法很方便地分享给其他人使用，因此，一种更好的方式是，把这行代码发布为人人可安装、可用的油猴脚本。   

因此，到这里问题就变成了，**如何写一个油猴脚本？**   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/10/06/16650476850497.jpg)

关于如何写一个简单的油猴脚本，可以参考一位 Up 主「不坑老师」发布的视频教程：   

我发布的油猴脚本，也是参考这位 Up 主的教程制作出来的，这里就不复读了。   

![QRcode_A — a1](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/10/06/qrcodea--a1.jpg)


写油猴脚本用到的参考资料汇总：   

* [不用安编辑器，教你编写属于自己的第一个油猴脚本](https://www.bilibili.com/video/BV1UU4y1r72Y)，https://www.bilibili.com/video/BV1UU4y1r72Y             
* [【油猴脚本-菜单(设置按钮) GM_getValue/GM_setValue/GM_registerMenuCommand报错原因】设置按钮的制作和报错的坑](https://zhuanlan.zhihu.com/p/485574687)，https://zhuanlan.zhihu.com/p/485574687   
* [javascript跳转到新页面的三种方法](https://blog.csdn.net/apple20154350217/article/details/78639739)，https://blog.csdn.net/apple20154350217/article/details/78639739   



## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)       












 


