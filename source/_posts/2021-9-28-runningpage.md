---
title: 回看自己过去 4 年的运动数据，是一种什么样的体验？                                
date: 2021-9-28 10:00:00               
tags: [运动,Keep]                                                  
---

Hello 各位早上好。     

今天想和大家分享一件**在我看来非常酷**的事情，如下图，**将自己过去 4 年的跑步数据放到一个网站上**，数据来自 Keep App，由于在跑步的时候开启了 GPS 定位，因此右侧的地图还会显示我们跑过的路径。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327524532925.jpg)

我的运动记录 Running Page：  
*https://running-page-jet.vercel.app/*        

顺提一提，之前有一段时间我用的是 Apple Watch 的「健身记录」来记录跑步数据，有不少数据无法同步到 Keep 中，导致网站上显示的 2021 年运动记录只有 28 次。  

苹果推出的 App 都比较封闭，目前暂时无法从「健身」或「健康」App 中导出数据，如果你也要想要制作上面的跑步网站，你平时使用的记录跑步数据的 App，最好是下面这些：    

* Keep
* 悦跑圈
* 咕咚   
* Garmin
* Garmin-CN
* Nike Run Club  
* Strava
* GPX
* Nike+Strava(Using NRC Run, Strava backup data)
* Strava_to_Garmin(Using Strava Run, Garmin backup data)  

之所以推荐这些 App，是因为制作网站所用到的 GitHub 项目「**running_page**」，目前也只支持这些 App。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327541414514.jpg)

GitHub 项目「running_page」地址：   
*https://github.com/yihong0618/running_page*    

这个开源项目的作者是 @yihong 老师，在这个时间点介绍这个项目也比较巧，最近刚好是**[这个项目开源一周年](https://github.com/yihong0618/gitblog/issues/220)**的节点。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327543418049.jpg)

作者 @yihong 老师为了让更多的人可以通过这个项目、制作出属于自己的跑步页面，他在 GitHub 的 README 文档中也提供了比较详细的使用说明。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327544938315.jpg)

## 使用之前的说明  

在正式使用这个项目之前，你的电脑最好先安装下面这些软件：   

* Python3   
* Git    
* VS Code：代码编辑器，不是必须的，但为了后面更好地编辑项目中的一些代码，推荐安装   

## 下载/克隆所有代码文件

会使用 Git 命令的朋友，可以通过 Git 将远端的代码文件克隆到电脑本地：    

```
git clone https://github.com/yihong0618/running_page.git               
```       

如果你不会使用 Git 命令，可以通过仓库右上角的 **Download** 按钮下载所有文件的压缩包，记得要对文件进行解压。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327553134489.jpg)

## 安装及测试  

下载文件之后，我们要**终端**（Windows 上称为 **cmd** 或者 **Powershell**）中逐行运行下面的命令。   

```     
pip3 install -r requirements.txt
yarn install
yarn develop
```      

运行之前，请确保你当前所在的路径，是代码文件夹所在的位置。  

以我为例，我将下载的代码文件夹 running_page 放在了电脑的 `workspace/running_page`路径下。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327558932240.jpg)

因此，在运行前面的 3 个命令之前，我需要先使用 `cd` 命令，进入到对应的路径下方。  

```   
cd workspace/running_page/running_page      
```            

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327559729271.jpg)      

进到正确的路径下，再逐次运行前面的 3 个命令。     

不过，由于不同电脑的**环境配置**存在着差异，在运行那 3 个命令的过程中，你可能也会像我一样，遇到命令运行后提示错误的情况。  

这里给出我在运行这 3 个命令的过程中，遇到的 3 个问题及相应的解决方法：    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327561907413.jpg)      

## 查看网页的雏形

前面 3 个命令运行无误的话，最后可以在终端中看到下图的提示：在浏览器中打开网页 `http://localhost:8000/`，就可以看到网站的雏形。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327562571213.jpg)     

网站雏形的数据来自项目的原作者，为了得到我们自己专属的网站，还需要修改和删除一些文件。  

## 修改代码文件

修改代码文件时，可以使用电脑自带的**记事本**打开代码文件，也可以使用前面提到的 VS Code。  

首先打开 `.github/workflows` 下的 `run_data_sync.yml` 文件，定位到第 22 行代码的位置。  

`RUN_TYPE`填入你平时在用的运动 App，例如 keep，下面的 ATHLETE、TITLE、GITHUB_NAME、GITHUB_EMAIL，分别更改为自己的昵称、最终呈现在网站的热力图的标题、GitHub ID 和邮箱。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327569561383.jpg)     

例如我将 TITLE 设置为 Phh95 Running，最终就会呈现为热力图顶部的标题。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327573662968.jpg)     

接着定位到代码的 117 行，这里需要**修改一下变量的名称**，将 secrets 后面的 GITHUB_TOKEN 修改为 **G_T**。     

这里之所以要修改变量的名称，是因为 GitHub 不允许以 GITHUB 为开头来命名密钥。          

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327574744522.jpg)

打开 `gatsby-config.js` 文件，修改下图框选出来的部分参数：     

* siteTitle：跑步网站的标题，默认是 Running Page   
* siteUrl：跑步网站的网址，这里先不填，后续我们通过 vercel 部署得到网址之后，再来填写   
* logo：网站 logo 的图床链接     


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327872031973.jpg)    

* navLinks：网站右上角的两个链接，一个是 **Blog**，一个是 **About**。如果你有个人博客的话，可以将 Blog 的 url 替换成自己的博客网站。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327875646190.jpg)    

接着来到 assets 文件夹，只保留其中的 3 个文件：`start.svg`、`end.svg`、`grid.svg`，将其余的 svg 文件删除。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327577134931.jpg)     

接着来到 scripts 文件夹，删除其中的 `data.db` 文件。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327578879290.jpg)     

来到 `src/static` 文件夹，删除其中的 `activities.json` 文件。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327579742212.jpg)     

## 导出运动数据

前面删除的文件中，包含了作者原先的运动数据，为了最后可以在网站上看到自己的运动数据，我们还需要**从运动 App 中导出我们的运动数据**。      

作者在 README 文档中，对不同运动 App 如何导出数据，也进行了相关的说明。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327870690965.jpg)     

以 **keep** App 为例，在**终端**中运行下方的命令，就会在代码文件夹中的相应位置，生成我们需要的运动数据，具体体现为文件夹中新增了两个文件，分别是 `activities.json` 和 `data.db` 文件。      

```       
python3 scripts/keep_sync.py 注册keep账号的手机号 keep账号的密码           
```       


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327876319969.jpg)

到这里，我们就算是完成了代码的修改，接着就是通过 Git，将本地的代码文件夹，上传到远端的 GitHub 仓库。   

这个过程具体如何操作，可以查看我之前的一篇文章或者参考网上别人写的文章：   

[将本地文件/文章上传到 GitHub 的流程](https://mp.weixin.qq.com/s?__biz=MzAxMjY0NTY5OA==&mid=2649912687&idx=1&sn=ebc85258bb1a00b1fdbd4caecd4983db&chksm=83a87142b4dff854cac446e217626dba9f0374a1105351e8f181c5bfdbec4a62bceeeac44702&token=1181644356&lang=zh_CN#rd)    

## GitHub 仓库配置密钥和 Token  

项目作者在代码中用到了 GitHub 自带的自动化功能 **Actions**，每天会自动运行一次 Run Data Sync，可以及时地将我们的运动数据更新到网站上。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327904976040.jpg)

为了让 Actions 可以自动更新数据，我们也要对 GitHub 仓库进行配置：配置密钥和 Token。   

配置密钥，我们要按照下图进行操作，打开仓库的 Settings 页面，左侧切换到 Secrets 选项卡，点击右上角的 New repository secret，需要我们填入**密钥名称 Name** 和**值 Value**。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327909219319.jpg)

这里的密钥名称取决于你目前正在使用的运动 App，**不同 App 的密钥名称存在着区别**，查看密钥名称需要打开 `.github/workflows/run_data_sync.yml` 文件。  

以我在用的 Keep 为例，它的两个密钥名称分别为 **KEEP_MOBILE** 和 **KEEP_PASSWORD**，它们的 Value 值其实分别对应——注册 Keep 账号的手机号和密码。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327908146049.jpg)

配好密钥后，我们还需要**配置 Token**，首先打开网页 `https://github.com/settings/tokens`，点击右上角的 Generate new token，生成一个新的 Token。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327915810978.jpg)

生成 Token 时，有两个注意点，将 Token 的**有效期 Expiration** 设置为 No expiration(长期有效)，**勾选下面的所有复选框**，将所有权限都打开。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327916589472.jpg)

生成的 Token，是一长串英文和数字混合的字符串，点击右侧的复制按钮，复制到剪贴板，接着再回到前面的 Secret 页面，添加一个新的密钥，密钥名称为 **G_T**，这个名称是我们在前面修改代码的过程中手动改过的，因此**这个密钥名称是固定了的**，不要再更改了。     

**G_T 的 Value 值就是我们刚生成的 Token**，粘贴到对应位置即可。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327919305327.jpg)

配好密钥和 Token 之后，打开仓库的 **Actions 页面**，我们来**手动运行一次 Actions**，看看它能否正常工作。   

左侧切换到 Run Data Sync，接着点击右侧的 **Run workflow**，稍等一会，等待程序运行之后给我们返回的结果。   

程序可以正常工作的话，Run Data Sync 左侧应该会有一个绿色的✅图标，如下图标注的数字 4 的位置。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327922636698.jpg)

## Vercel 部署得到自己的跑步网站     

完成前面的所有操作之后，我们所有的准备工作就算完成了，就差最后的临门一脚了，**将 GitHub 仓库部署到服务器上**，就能得到**人人都可以访问的网站了**。   

项目的作者提供了 3 种部署的方案，如下图，这里**最推荐使用 Vercel 部署**，因为最为简单，不需要过多折腾。       

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327927868831.jpg)
  
关于如何 Vercel 部署，可以查看作者写的说明文档，因为比较简单，这里就不过多介绍了：  

*https://github.com/yihong0618/running_page/blob/master/README-CN.md*

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327928379701.jpg)

通过 Vercel 部署，它会自动返回一个网站链接🔗，点击下图的 DOMAINS 下方的链接，就可以看到自己专属的跑步网站啦。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/28/16327930576052.jpg)

## 写在最后  

为了弄出这个网站，懂技术的人可能花 20 多分钟就搞定了，不懂技术的我，用了 20 多分钟几倍的时间才勉强弄出来，中间还向项目的原作者问了好几个问题，在此要感谢作者的耐心解答❤️。      

整个过程下来，我游走于 想放弃 与 不放弃 之间，做一会停一会，就像玩自己不擅长的游戏那样，很有挫败感，也总在怀疑自己是不是太辣鸡了。。。不适合搞这个，害。       

以上，就是本次想和你分享的内容。   

如果对你也有帮助的话，别忘了点击下方的**点赞、在看**和**分享**按钮，**你的小小支持，是我持续更新的最大动力**，我们下次再见。  


 


