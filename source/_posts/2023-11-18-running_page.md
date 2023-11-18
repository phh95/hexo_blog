---
title: Nike Run Club运动数据自动上传到running-page修复方法【效率工具指南】
date: 2023-11-12 13:38:00               
tags: [GitHub,运动,Nike]                                                                               
---
本文首发于我的微信公众号「[效率工具指南](https://mp.weixin.qq.com/s/aGah2M9vhmLSZDaJ_iJaXg)」，欢迎移步关注          
文/彭宏豪  

> 注：文章标题里说的 Nike 运动 App，是指 Nike 推出的 Nike Run Club App。  


去年 6 月 8 日，Nike Run Club App 宣布从 2022 年 7 月 8 日起停止在中国地区的运营，在表达遗憾的同时，也给用户提供了导出运动数据的选项。   

虽然这是官方发的停服公告，但其实想用的朋友，还能接着用，要点：把 Nike 账号的位置更改为海外的国家或地区，比如美国、日本等，之后在 Nike Run Club 重新登录账号，在国内就能正常使用了。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/11/18/img8978.JPG)

我相信更多的朋友应该是使用国内厂商出的运动 App，比如最知名的 Keep，还有咕咚、悦跑圈等。   

我坚持用 Nike Run Club，不是因为国内的运动 App 有广告、或是内部的营销动作太多，而是它的数据可以被抓取后上传，展示在基于 GitHub 上的一个跑步项目 `running_page` 制作的跑步记录页面，如下图。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/11/18/17002947792212.jpg)

需要说明的是，`running_page` 这个项目不仅支持展示来自 Nike Run Club 的运动数据，还支持多款其他的应用，如 Strava、Keep、悦跑圈、咕咚、TulipSport(即下图的郁金香运动)、FIT，它还额外支持不同运动应用间数据的迁移或合并。     

我最初用的是 Keep，后来换到了 Nike Run Club，不想折腾太多——更换运动 App、迁移运动数据、修改 `running_page` 项目的代码等，就一直用到了现在。              

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/11/18/17002954545541.jpg)


不过上周开始 Nike Run Club 抽风了，运动数据无法被抓取，在 GitHub Actions 中配置的「数据同步」脚本连续几天运行失败。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/11/18/17002975159063.jpg)

好在 `running_page` 项目的作者 @yihong 老师非常给力，在上周末及时修复了这个问题，我昨晚照着项目的 README 文档操作了一下，也修复了存在的问题，数据同步脚本又能正常运行了。   

相应地，跑步记录页面 `https://running-page-ruddy-eight.vercel.app/` 也会显示最新的运动数据了。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/11/18/17002979001549.jpg)

如果你也有在用 Nike Run Club 和 `running-page` 项目记录自己的跑步数据，那可以跟着下面的步骤操作，修复 Nike Run Club 数据无法同步的问题：    

首选确保你的电脑网络可以「**全局**」的方式切换到**海外的 IP**，比如美国、日本。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/11/18/17002982560655.jpg)


在浏览器打开下面的网页，输入邮箱和密码，登录你的 Nike 账号。  

https://unite.nike.com/s3/unite/mobile.html?androidSDKVersion=3.1.0&corsoverride=https%3A%2F%2Funite.nike.com&uxid=com.nike.sport.running.droid.3.8&backendEnvironment=identity&view=login&clientId=VhAeafEGJ6G8e9DxRUz8iE50CZ9MiJMG   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/11/18/17002987586458.jpg)

如果你是在 **Chrome 浏览器**中打开这个网页，按下 F12 打开浏览器开发者工具，点击 Application 选项卡，来到左侧的 Storage 面板，点击展开 Local storage，点击下方的 `https://unite.nike.com`。  

接着点击右侧的 `com.nike.commerce.nikedotcom.web.credential` Key，下方会分行显示我们选中的对象，可以看到 **refresh_token** ，复制 refresh_token 右侧的值。  


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/11/18/17002987246213.jpg)

如果你是在 **Safari 浏览器**打开 Nike 的网页，从浏览器开发者工具获取 refresh_token 的值，操作又有一点差别：  

在 Safari 打开 Nike 的网页后，右击页面，选择「检查元素」，打开浏览器开发者工具。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/11/18/17003015259781.jpg)

点击「来源」选项卡，在左侧找到 XHR 文件夹，点击展开，在下方找到 login 文件并单击，在右侧同样可以看到 **refresh_token** ，复制 refresh_token 右侧的值。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/11/18/17003015672600.jpg)


来到自己在 GitHub 上创建的 running_page 仓库，点击顶部的 Settings 选项卡，点击左侧的 Secrets and variables，再点击 Actions，右侧可以看到名为 **NIKE_REFRESH_TOKEN** 的变量，点击变量右侧的「编辑」按钮，将我们刚复制的 refresh_token 值粘贴到输入框，更新变量的值。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/11/18/17002998490237.jpg)


除了更新变量 NIKE_REFRESH_TOKEN 的值，还要更新一下两个 python 文件的代码。    

## `config.py` 文件   

我的 GitHub 仓库用的还是 `running_page` 项目 1.0 版本的代码，代码文件的路径与最新的 2.0 存在着些许差别，这是在更改文件代码前需要了解的。       

来到 `config.py` 文件的第 14-16 行代码，将原有的这 3 行代码删除。   

下图我放的是代码提交记录的截图，会显示代码提交前后的对比，红色的行是更改前的状态，绿色的行是代码更改后，用颜色来标识代码更改前后的差别，对不懂代码的人来说，是不是也更好理解一些呢？  
 

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/11/18/17003001882856.jpg)


## `nike_sync.py` 文件

`nike_sync.py` 文件的修改幅度会大一些——    

第 5 行增加代码：`from base64 import b64decode`  
删除第 17 行的 `BASE_URL,`
删除第 20 行的 `NIKE_CLIENT_ID,`  
删除第 23 行的 `TOKEN_REFRESH_URL,`   
第 31 行增加一长串代码：  

```
BASE_URL = "https://api.nike.com/sport/v3/me"   
TOKEN_REFRESH_URL = "https://api.nike.com/idn/shim/oauth/2.0/token"    
NIKE_CLIENT_ID = "VmhBZWFmRUdKNkc4ZTlEeFJVejhpRTUwQ1o5TWlKTUc="  
NIKE_UX_ID = "Y29tLm5pa2Uuc3BvcnQucnVubmluZy5pb3MuNS4xNQ=="  
NIKE_HEADERS = {
    "Host": "api.nike.com",   
    "Accept": "application/json",   
    "Content-Type": "application/json",   
}
```

第 48 行增加代码：`headers=NIKE_HEADERS,`     
将 51 行代码 "client_id" 的值更改为 `b64decode(NIKE_CLIENT_ID).decode(),`  
第 53 行增加代码：`"ux_id": b64decode(NIKE_UX_ID).decode(),`   


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/11/18/17003007291108.jpg)



## 使用 Nike Run Club 的彩蛋   

每次使用 Nike Run Club App 结束运动时，还能听到体育运动员或明星的语音鼓励：      

* “嘿，我是刘翔！今天最棒的不是你的表现，而是你的出现”     
* “嘿，我是 Selina 任家萱，你不要这么猛好不好，好不容易领先，又被你超过了”


## 扫码加入我在知识星球上创建的社群「效率工具指南」  

如果你觉得本文帮到了你，想支持我做得更好，欢迎戳下方图片，加入我的知识星球。     

关于社群「效率工具指南」的介绍，可以查看我在语雀文档上发布的文档：[知识星球「效率工具指南」简介](https://www.yuque.com/penghonghao/af0aai/glwrg2dl0dqlegi6?singleDoc#)    

![48844555552858T2](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/25/48844555552858t2.JPG)   

## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)   

## 订阅我在竹白上创建的 Newsletter   

如果对你有帮助的话，别忘了点击下方的链接，订阅我的 Newsletter，之后发布了新的内容，就能第一时间收到通知啦～  

[👉在竹白上订阅效率工具指南](https://penghh.zhubai.love/)         


