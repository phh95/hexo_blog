---
title: 在 GitHub 个人主页添加一个有趣的贪吃蛇动画                                 
date: 2021-9-30 10:30:00               
tags: [GitHub]                                                     
---

Hello 各位早上好，今天是国庆小长假前的最后一个工作日。

按照我不成熟的经验，长假前和长假后，不少人可能都会临时患上「**假期综合症**」，具体表现为：无心上班、只想摸鱼，导致工作效率低下。

假期后回来也是一样，需要一两天作为过渡，从闲散、疲惫中重新找回工作的状态，就像是冬天开车之前，需要先点燃发动机预热一下，才能把你更好地带向远方。    

反正都是会摸鱼的，不妨来看一点有意思的：      

这是我前几天在逛 GitHub 发现的有意思的东西，给自己的个人 GitHub 主页添加一个贪吃蛇动画，效果如下：  

贪吃蛇会吃掉我们在 GitHub 上提交的代码记录，即吃掉那些绿色的格子。     

![贪吃蛇](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/27/tan-chi-she.gif)

这里稍微提一下，有些朋友可能对下面👇这种类型的图表不熟悉，这种类型的图表称为「**热力图**」，每一个小格子对应每一天，格子默认都是灰色的，其中绿色的格子就表示我们在那一天提交了代码，格子的颜色越深，则说明我们在那一天提交的代码次数越多。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/30/16329663719831.jpg)

除了 GitHub，**在其他互联网产品上，也可以看到热力图的影子**，例如下面这些产品：   

* 豆瓣
* Day One
* flomo  
* 幕布  
* 极客时间   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/30/16329667299571.jpg)

回到前面说的，如何在 GitHub 个人主页，实现贪吃蛇的小动画呢？  

非常简单，只需要你会复制代码就可以了，这个贪吃蛇小动画的代码来自 GitHub 上的一位用户 @L1cardo 的个人页面：  

*https://github.com/L1cardo*   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/30/16329670167145.jpg)

实现贪吃蛇动画的代码如下，作者将其做成了一个会自动运行的命令，每天自动运行一次，运行之后会生成两个文件：gif 和 svg。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/30/16329671382752.jpg)

为方便你使用，我将原作者的代码复制到了下面：     


```yml      
name: Generate Snake

on:
  schedule:
    - cron: "0 0 * * *"
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.4
      
      - name: Generate Snake
        uses: Platane/snk@master
        id: snake-gif
        with:
          github_user_name: ${{ github.repository_owner }}
          gif_out_path: ./assets/github-contribution-grid-snake.gif
          svg_out_path: ./assets/github-contribution-grid-snake.svg

      - name: Push to GitHub
        uses: EndBug/add-and-commit@v7.2.1
        with:
          branch: main
          message: 'Generate Contribution Snake'      
```     


需要注意的是，我们需要将这个代码复制到与自己的 GitHub ID 同名仓库的 `.github/workflows` 路径下。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/30/16329681948235.jpg)

同名仓库没有这个路径或文件夹📂的，且**不知道如何创建文件夹**的朋友，可以参考我之前写过的一篇文章：   

[在个人主页展示今年的时间进度 | GitHub](https://mp.weixin.qq.com/s?__biz=MzAxMjY0NTY5OA==&mid=2649917461&idx=1&sn=0b56985fa9f5a51e75cc18e569edbb5e&chksm=83a88c38b4df052e9deb1a70428c6f0c2a38cbbbed5457d3e525041921e57afa2387b989ab54&token=80706750&lang=zh_CN#rd)         

复制完代码后，我们还要将代码生成的 svg 文件放在**GitHub ID 同名仓库的 README 文档中**，它才会在个人首页显示。    

由于 README 文档是用 **Markdown** 格式进行编辑，引入 svg 文件需要使用下面这种格式。      

```markdown       
![](https://raw.githubusercontent.com/这里更换为你的 GitHub ID/这里更换为你的 GitHub ID/main/assets/github-contribution-grid-snake.svg)              
```      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/30/16329676198923.jpg)

完成以上两步操作，就可以在自己的 GitHub 主页看到这个动画啦，还是很酷😎的：    
 
![贪吃蛇](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/27/tan-chi-she.gif)


## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)        


