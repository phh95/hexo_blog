---
title: 在笔记软件Notion中嵌入Spotify音乐歌单        
date: 2022-9-10 11:15:00               
tags: [Spotify,Notion,音乐]                                                                                     
--- 


本文首发于微信公众号「[效率工具指南](https://mp.weixin.qq.com/s/l7FGDl_cBnGvg4hd47iIfw)」             
文/彭宏豪      


Hello 各位好，我是小豪。     

今天双节狂喜（中秋节 + 教师节），先祝各位节日快乐。   

今天这篇文章，分享一点比较轻松的东西：如何在笔记软件 Notion 中嵌入音乐歌单？  

下图右侧是我在 Notion 中嵌入的一个 Spotify 歌单，里面包含 100 首音乐，随机点击一首音乐，就可以直接在 Notion 中播放。   

![](https://img.penghh.fun/2022/09/10/16627816341703.jpg)

不过可能是 Spotify 接口的限制，在 Notion 中播放 Spotify 歌单的音乐，每首歌只有 30 秒，当然不是从头开始播放，而应该是播放副歌的部分。  

每首歌只有 30 秒，好像是用抖音的方式来听音乐啊。。。  

说回正事哈，如果你也想在 Notion 中嵌入自己喜欢的歌单，那就接着往下看吧：   

首先需要说明的是，**Notion 目前只能嵌入来自 Spotify 或者 Apple Music 的歌单**，而国内的音乐应用太封闭了。。。例如网易云音乐，嵌入后只会显示为普通的链接，想要查看歌单内的音乐，还要跳回网易云自家的网页。     

![](https://img.penghh.fun/2022/09/10/16627827991084.jpg)

更离谱的是，网易云音乐网页版虽然提供了「生成外链播放器」的按钮，但点击之后会提示：  

> 由于版权保护，无法生成外链。  

这个按钮搁这里当装饰呢？你还不如直接去掉，至少不会被我吐槽。      

![](https://img.penghh.fun/2022/09/10/16627829995168.jpg)

在 Notion 中嵌入音乐歌单，其实用到了 Notion 的 embed 功能，在 Embed link 粘贴音乐 App 提供的前端代码即可。   

![](https://img.penghh.fun/2022/09/10/16627833190202.jpg)

以 Spotify 为例，打开任意一个歌单，点击歌单内的「…」，在展开的菜单，选择「分享 >> 嵌入播放清单」。     

![](https://img.penghh.fun/2022/09/10/16627834939335.jpg)

在弹出的面板，勾选右下角的「显示代码」，下方就会显示歌单的前端代码，点击「复制」，切换回 Notion，将代码粘贴到 Embed link 的输入框中，就能在 Notion 中嵌入音乐歌单啦，整个操作过程就是这么简单。      

![](https://img.penghh.fun/2022/09/10/16627835910245.jpg)

不过，在 Notion 中嵌入的 Spotify 歌单还有一个小毛病，当你开始播放音乐，它时不时就会弹出下图的提示，让你去到 Spotify 官网收听完整的音乐。     

![](https://img.penghh.fun/2022/09/10/16627837341240.jpg)

这里只介绍了在 Notion 中添加 Spotify 歌单的方法，对于 Apple Music，也是类似的操作，由于我没开通 Apple Music 的会员，这里就不演示了。   

前面说到无法在 Notion 中嵌入国内音乐 App 的歌单，但如果你想折腾，还是有办法的：  

可以将 QQ 音乐/网易云音乐的歌单迁移到 Spotify 或者 Apple Music。  

具体的迁移方法，可以查看我发布过的一篇旧文章：  

[放弃使用网易云音乐，如何导出歌单数据？](https://mp.weixin.qq.com/s/NPV_XnulogNTUpNkopnWqw)     

这里再对文章做一下修改，或者说是补充一个新方法：  

旧文章中提到的「歌单助手」，在使用前需要先进行安装，如果你嫌麻烦，或是不想在电脑上多安装一个软件，可以使用在线的导出工具 n2s。   

n2s 网址：   
https://yyrcd.com/n2s/      


![](https://img.penghh.fun/2022/09/10/16627846803254.jpg)


将 QQ 音乐/网易云音乐歌单的 id 粘贴到 n2s，也能返回歌单中的歌词名和歌手名。   

之后使用另外一个在线工具 TunemyMusic，就能将导出的歌单导入 Spotify 或者 Apple Music 了。  

当然，由于不同音乐 App 的曲库存在着差异，从 QQ 音乐/网易云音乐歌单导入 Spotify/Apple Music，也会遇到歌曲丢失或者匹配错误的情况，这也是程序自动化操作无法避免的。      

![](https://img.penghh.fun/2022/09/10/16627848628403.jpg)

## 扫码加入我在知识星球上创建的社群「效率工具指南」  

如果你觉得本文帮到了你，想支持我做得更好，欢迎戳下方图片，加入我的知识星球。     

关于社群「效率工具指南」的介绍，可以查看我在语雀文档上发布的文档：[知识星球「效率工具指南」简介](https://www.yuque.com/penghonghao/af0aai/glwrg2dl0dqlegi6?singleDoc#)    

![48844555552858T2](https://img.penghh.fun/2023/03/25/48844555552858t2.JPG)   

## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://img.penghh.fun/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)           
