---
title: 佳能相机M50如何用作直播摄像头？                                       
date: 2022-7-16 20:25:00                 
tags: [直播,效率工具,OBS,相机]                                                                        
---    
本文首发于公众号「[效率工具指南](https://mp.weixin.qq.com/s/-G0BOfVRHXKXuyIqRFPimw)」        
文/彭宏豪，笔名/安哥拉    


Hello 各位周末好，我是小豪。    

今天翻出吃灰已久的相机，想起前不久在 Mac 派公众号上看到的一篇文章《[怎么把你的相机变成 Mac 网络摄像头](https://mp.weixin.qq.com/s?__biz=MzI2MTAzMzcyNQ==&mid=2648558158&idx=1&sn=b079c1661b51fdd33ba1253bccbb28e4&chksm=f249f1dcc53e78ca9d16747416c0bd7d5fbe382356dfdc1b43ae6d2aca989298a9ba71e471dc&mpshare=1&scene=1&srcid=07094gvVTUl6R8cKVwX6CiGU&sharer_sharetime=1657335757218&sharer_shareid=00d5750dc68bf55f6cd8b19d034950bf#rd)》，想自己尝试一下，怎么把手中的佳能 M50 用作直播的镜头呢？   

整体弄下来其实很快，比较花时间的环节是：找相机和电脑相连的数据线（HDMI 或者安卓手机旧款充电线都可以）、以及佳能软件与电脑系统的适配。  

先看一下最终的效果：  

下图是直播软件 OBS 从相机镜头捕获的画面，我把相机放在了笔记本电脑的后面，图片右侧的黑色物体就是笔记本电脑。          

只要 OBS 能拿到相机拍摄的东西，我们就能把相机用于直播了，不管是视频号直播，还是其他的平台。       

![Snipaste_2022-07-16_17-24-58](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/16/snipaste20220716172458.png)


整个流程需要用到两款软件：  

* 佳能推出的 EOS Webcam Utility 直播软件    
* 开源免费的直播软件 OBS    

## 常规的相机直播流程  

在说具体操作之前，我们先来简单了解一下，使用相机进行直播的流程：   

你需要先有一台支持 HDMI 输出的相机，还需要有一个硬件「**视频采集卡**」，有了视频采集卡，才能将相机拍摄到的画面，传输给我们的电脑。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/16/16579650382634.jpg)

但是在我们这个直播流程中，视频采集卡并不是必须的，我们可以使用佳能或其他相机厂商推出的「直播软件」，起到取代视频采集卡的作用，这样就省去了买硬件的钱💰了。       

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/16/16579649735843.jpg)

说明：上面👆这两张截图，来自我喜欢的一位 Up 主「极地手记」的视频《[【保姆教学】不用采集卡，佳能相机直播指南（支持G7X3，M50，M6II） by 极地手记](https://www.bilibili.com/video/BV1ya4y1v7hY)》。          

## EOS Webcam Utility    

EOS Webcam Utility，是佳能在 2020 年上线的一款直播软件，这个年份有些特殊，可能就像 Up 主极地手记在视频中说到的那样（大意）：   

> 疫情催生了在线教学或直播的需求，相机厂商看到了这个需求，顺势推出可把相机用于直播的软件。         

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/16/16579648740959.jpg)

EOS Webcam Utility 既有 Windows 也有 macOS 版本，不过 **macOS 版本的限制比较多**，你只能在 macOS 10.13-10.15 的系统上使用，如果你的 Mac 系统已经更新到了 macOS 11 以上，那就和这个软件无缘了。    

Windows 系统的限制少一些，只要是 Win10 的系统都是可以使用的。  

也是因为系统的问题，我又搬出了好久没用的 Windows 笔记本。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/16/16579655857407.jpg)

另外还需要说明的是，**并不是所有的佳能相机都可以使用这个软件来直播**，在下载软件时需要根据相机的型号来查找，才能知道佳能是否推出了对应的软件。  

如果你手里有佳能的相机，可以看看自己购买的相机型号，是否在下图的列表中：    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/16/16579659655294.jpg)

EOS Webcam Utility 下载地址：   
https://www.canon.com.cn/special/webcam/index.html      


下面以 Win10 系统使用直播软件 EOS Webcam Utility 为例进行介绍：    

将佳能的直播软件下载到本地，解压下载的文件，双击打开文件夹中的 setup 文件，就能开始安装。     

![双击setup](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/16/shuang-jisetup.png)

安装好软件后，用数据线将相机与电脑进行连接，连接后电脑和相机分别会有反应：  

Win10 电脑右下角会有一个弹窗；相机屏幕会出现一个电脑的图标，就表示相机已经连接到电脑上了。    

## OBS   

相机连接到电脑后，想要进行直播，还需要用到另外一个软件，那就是 OBS。  

打开 OBS，点击「来源」左下角的加号，在弹出的面板，选择添加「视频捕获设备」，会弹出如下图的窗口。  

点击设备，在下拉列表中选择刚安装的软件名称「EOS Webcam Utility」，顺利地说，你就能在 OBS 中看到相机捕获的画面了。    
  
![添加设备来源](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/16/tian-jia-she-bei-lai-yuan.png)

到这里，我们就完成了将相机画面导入直播软件 OBS 的步骤。  

接下来如果你想把相机捕获的画面推送到直播平台，例如视频号等，就需要再了解一点点「视频推流」的东西。   

关于 OBS 的使用，之前既有写过文章，也有录过视频，这里就不过多介绍。   

感兴趣的可以看我发布在 B 站的一个「视频号竖屏直播」的视频：   

     
![IMG_2856](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/16/img2856.PNG)



## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)     














  

 
