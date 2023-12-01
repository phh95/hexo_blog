---
title: 微信小程序开发学习笔记 - 以网易云音乐小程序项目为例                                     
date: 2022-6-26 12:06:00                 
tags: [微信小程序,前端,学习笔记]                                                                 
---   

*注：笔记来自 coderwhy 老师的视频教程[小程序音乐项目开发实战-大神coderwhy新课](https://ke.qq.com/course/4162214#term_id=104318954)*    

*笔记编辑者：彭宏豪*    

## 项目成果展示

最后制作出来的音乐小程序，可以查看我发布在 B 站上的视频：[学着做了一个音乐小程序｜前端开发【效率工具指南】](https://www.bilibili.com/video/BV1CY411N7JJ)    

## 项目亮点

* 轮播图实现在不同尺寸设备上的适配      
* 音乐播放页面在不同尺寸设备上的适配     
* 小程序插槽无法像 Vue 一样设置默认值，可以使用 CSS 的条件判断巧妙地实现    
* 数据多页面共享和状态管理（难点）      
* 防抖和节流（性能优化，难点，JS 高级，课程中没有详细展开讲解）      
* 第三方 UI 组件库 Vant 的使用    
* 毛玻璃效果的制作    
* 事件冒泡和阻止冒泡      
* 项目常量数据的管理    
* 代码分包       
* 📦「封装」和「抽取」思想      

## 项目中用到的工具   

* 代码编辑器：微信官方提供的「微信开发者工具」     

* 浏览器插件：FeHelper   

FeHelper 可以对服务器请求返回的 JSON 数据进行美化（格式化），美化后的效果，就和我们在「微信开发者工具」控制台 `console.log` 打印的内容外观一致了，看起来更舒服。     

![](https://img.penghh.fun/2022/07/02/16566068661368.jpg)

顺便来看一下安装 FeHelper 插件之前，服务器返回的 JSON 数据的样式，作为对比：     

![](https://img.penghh.fun/2022/07/02/16566070159756.jpg)

* 正则表达式：正则表达式是字符串的匹配利器，在项目「解析歌词」的部分会用到。   


 

## 各大厂商支持小程序的原因

![image -3-](https://img.penghh.fun/2022/06/26/image-3.png)


## 小程序是由谁来开发？

小程序的定位：介于原生 App 和手机 H5 页面之间的一个产品定位。
小程序的技术特点，决定了由前端工程师来开发

## 开发小程序的技术选型

- 原生小程序开发
- 小程序框架
   - mpvue
   - wepy
   - 两个跨端方案开发小程序
      - uni-app：基于 Vue 开发的框架
      - taro：由京东团队开发维护

![image -4-](https://img.penghh.fun/2022/06/26/image-4.png)

下图的 RN 是 React Native 的缩写，开发好之后可以发布为 iOS 和 Android 应用

![image -5-](https://img.penghh.fun/2022/06/26/image-5.png)


uni-app 和 taro 开发原生 App：

- 无论是适配原生小程序还是原生 App，框架都有较多的适配问题，所以还是需要多了解原生的开发知识
- 产品使用体验整体相较于原生 App 差很多
- 也有其他的技术选型来开发原生 App：ReactNative、**Flutter（体验也比较好）**

作为前端工程师，不建议大家把过多精力放在原生开发上面，目前基本只有大厂才会开发原生 App，而很多小公司会开发小程序或 H5 页面。 

## 小程序开发的预备知识

小程序的核心技术主要是 3 个：

- 页面布局：WXML
- 页面样式：WXSS，几乎就是 CSS（某些不支持，某些进行了增强，但基本是一致的）
- 页面脚本：JS + WXS(WeixinScript)

如果之前已经掌握了 Vue 或者 React 等框架开发，那么学习小程序是更简单的，因为里面的核心思想都是一致的（比如**组件化开发、数据响应式、mustache 语法、事件绑定**等）

## 微信小程序的双线程架构

- 视图线程
- 逻辑线程

这两个线程通过底层的 WeixinJSBridge 进行通讯

![image -6-](https://img.penghh.fun/2022/06/26/image-6.png)


## 注册账号 - 申请 AppID

每个小程序都需要有一个唯一的 ID
前往 mp.weixin.qq.com 申请
## 开发微信小程序的工具

- 微信开发者工具：官方提供的工具，必须下载、安装
- VS Code

### 使用 VS Code 开发
推荐一些 VS Code 插件：

- WXML - Language Service
- 小程序开发助手
- wechat-snippet

注：这些插件都是差不多的，不需要全部安装，老师推荐安装第一个插件就够了

![image -7-](https://img.penghh.fun/2022/06/26/image-7.png)


## 小程序项目结构

![image -8-](https://img.penghh.fun/2022/06/26/image-8.png)


## 去除控制台的警告⚠️信息
打开项目的 `project.config.json` 文件，在其中增加一个配置信息 `"checkSiteMap": flase`，就可以去掉控制台的警告信息了。

![image -9-](https://img.penghh.fun/2022/06/26/image-9.png)


## 微信小程序基础库

我们编写的代码，其实是运行在微信小程序 SDK 之上的，SDK 是 Soft Development Kit 的缩写，即**软件开发工具包**，SDK 是集成在微信 App 中的。

这里提到的 SDK 其实就是微信小程序的基础库。

![image -10-](https://img.penghh.fun/2022/06/26/image-10.png)


基础库是会随着时间不断更新的，因此会衍生出多个版本：

- 增加功能
- 修复 bug

微信版本不同，其中包含的微信小程序基础库版本是不同的。

灰度发布：也叫金丝雀发布。
全量发布

## 向服务器请求数据

await 必须放到 async 异步函数里面。
这种方式不是在所有地方都可以使用的，在某些地方使用可能会影响性能。

![image -11-](https://img.penghh.fun/2022/06/26/image-11.png)


## 小程序的视频无法播放

遇到小程序中的视频无法播放，可能是因为向服务器请求数据时验证不通过，我们需要在 video 组件中增加一个推荐策略的属性 `referrer-policy`，这个属性的默认值是 no-referrer，我们要把它设置为 origin。

![image -12-](https://img.penghh.fun/2022/06/26/image-12.png)


## 对 wxml 的数据进行格式化

wxml 页面从服务器请求得到的视频播放量、时间（单位为毫秒 ms），转换为 XX 万播放量、几分几秒，不能直接在 wxml 的 mustache 语法使用过滤器 filter。

对 wxml 的数据进行格式化，需要用到 wxs，wxs 本质上也是 js，只不过不支持 ES6 语法，只能用 ES5。 

![image -13-](https://img.penghh.fun/2022/06/26/image-13.png)


在 utils 文件中创建一个 `format.wxs` 文件，里面定义了一个函数 formatCount，用来转换视频播放量。

![image -14-](https://img.penghh.fun/2022/06/26/image-14.png)


接着在 wxml 文件中使用 wxs 标签引用 wxs 文件，wxs 标签需要添加一个 module 属性，属性值是可以自定义的，可以是 tools，也可以是 format。
在需要调用 formatCount 函数的位置，使用 module 属性值中的方法。

![image -15-](https://img.penghh.fun/2022/06/26/image-15.png)


## 将 wxml 中的组件抽取成一个单独的组件

小程序中创建的组件，同样需要包含 4 个文件——js、json、wxml、wxss

创建组件时，右击选择「新建 Component」，会一次性创建 4 个文件。  

![image -37-](https://img.penghh.fun/2022/06/26/image-37.png)


组件的 `index.js` 文件 Component 包含 properties 和 data，这两者的区别在于：

data 和页面一样，是用来存放组件内部的数据的；properties 用来**存放外界传过来的数据**，譬如服务器请求得到的数据，

![image -38-](https://img.penghh.fun/2022/06/26/image-38.png)

properties 会接收外部传入的 item 对象。  

![image -39-](https://img.penghh.fun/2022/06/26/image-39.png)


## 在小程序中使用自定义的组件

在小程序页面使用自定义的组件时，需要先对组件进行注册，来到小程序页面的 json 文件。

注册组件的写法：
`"组件名": "组件的路径"`
组件路径最末尾不要加后缀。  

![image -40-](https://img.penghh.fun/2022/06/26/image-40.png)


在 wxml 页面使用我们自定义的组件   

![image -41-](https://img.penghh.fun/2022/06/26/image-41.png)



## 小程序页面上拉加载更多数据

在页面的 js 文件中，使用生命周期 `onReachBottom` 监听。  

![image -42-](https://img.penghh.fun/2022/06/26/image-42.png)


上拉加载数据时，可以在导航栏增加一点细节，譬如增加「加载数据」时的转圈动画
需要用到 `wx.showNavigationBarLoading()`
数据完成加载后，要把加载动画隐藏，否则加载动画会一直显示在顶部的导航栏，调用 `wx.hideNavigationBarLoading()`   

![image -43-](https://img.penghh.fun/2022/06/26/image-43.png)


## 小程序页面下拉刷新

小程序页面默认情况下是不允许下拉刷新的，需要在页面的 json 文件中，将 enablePullDownRefresh 配置为 true，才可以实现下拉刷新。

![image -44-](https://img.penghh.fun/2022/06/26/image-44.png)


同时，要在 json 中配置 `backgroundTextStyle` ，将默认的 light 更改为 dark，在下拉刷新时才能看见 3 个小点点。  

![image -45-](https://img.penghh.fun/2022/06/26/image-45.png)



当偏移量为 0 时，停止下拉刷新的动效，让动效尽快结束。

![image -46-](https://img.penghh.fun/2022/06/26/image-46.png)


## 点击组件跳转到新的页面
新的需求：点击视频页面的小卡片（组件/item），进入视频详情页。

这时我们就要监听 item 的点击，有两种方式：

- 组件内部监听点击
- 直接监听组件的点击（组件可以直接绑定事件的）


![image -47-](https://img.penghh.fun/2022/06/26/image-47.png)


### 组件内部监听点击事件
来到自定义组件的 wxml 页面，给类名为 item 的 view 组件添加 bindtap，监听点击事件。  

![image -48-](https://img.penghh.fun/2022/06/26/image-48.png)

### 直接监听组件的点击

在我们自定义的组件 `video-item-v1` 添加 bindtap 属性，可以直接监听组件的点击。

![image -49-](https://img.penghh.fun/2022/06/26/image-49.png)


我们点击不同的组件，会跳转到不同的详情页，那我们如何知道具体是点击了哪个页面呢？
——这里需要在 wxml 中给组件添加一个额外的属性 data-item。
之后在事件处理时，我们就可以通过 data-item 绑定的 item，拿到所点击的组件的 id，就可以知道用户到底是点击了哪一个组件。
这种拿到 id 的方法，并不是小程序独有的，而是 html 提供的能力。  

![image -50-](https://img.penghh.fun/2022/06/26/image-50.png)


## 在小程序引入第三方 UI 库 Vant

进入项目所在的路径，在终端输入 `npm init -y` 生成 `package.json` 文件。
如果项目中包含了中文名称的文件夹，使用上面的命令会无法生成 json 文件，需要使用命令 `npm init` 。


![image -51-](https://img.penghh.fun/2022/06/26/image-51.png)


通过 npm 安装 Vant：
```bash
npm install @vant/weapp
```

安装之后，项目文件夹会多出一个 `node_modules` 文件夹，里面就包含了我们刚安装的 Vant 库。  

![image -52-](https://img.penghh.fun/2022/06/26/image-52.png)


`node_modules` 中的 Vant 库在小程序中无法直接使用，还需要经过构建 npm 的环节，构建之后，项目路径会生成一个新的文件夹 `miniprogram_npm` 。

![image -53-](https://img.penghh.fun/2022/06/26/image-53.png)


完成构建之后，就可以开始使用 Vant 库了。
在想要使用 Vant 库的页面的 json 文件中，注册需要用到的组件，譬如其中的搜索框组件 `van-search`。    

![image -54-](https://img.penghh.fun/2022/06/26/image-54.png)


接着在 wxml 文件中使用 `van-search` 组件，编译之后就能看到搜索框了。   

![image -55-](https://img.penghh.fun/2022/06/26/image-55.png)


## 小程序轮播图组件
小程序轮播图组件 swiper 默认的高度为 150px。

![image -56-](https://img.penghh.fun/2022/06/26/image-56.png)


换到 iPhone5 小尺寸的手机上，轮播图组件高度依旧为 150px，原本位于图片上方的指示点就会显示在图片下方，看起来非常丑陋。   

![image -57-](https://img.penghh.fun/2022/06/26/image-57.png)


解决适配的问题，稍微有些麻烦。
解决的方法：轮播图组件的高度应该和图片的高度是一致的。
问题是：如何获取图片的高度（**如何获取一张网络请求得到的图片的高度**）。    

![image -58-](https://img.penghh.fun/2022/06/26/image-58.png)


这里需要注意的是，只有当图片完成加载，我们才能拿到网络图片的高度。

小程序的图片组件 image 有一个事件监听 `bindload`，可以在图片完成加载时，自动触发事件。

bindload 绑定了 handleSwiperImageLoaded 后，拿到的是图片原始的宽度和高度。

但我们这里想要的是 image 组件的高度，问题又转变成了：如何获取 image 组件的高度？
——需要用到小程序的 API `createSelectorQuery`


![image -59-](https://img.penghh.fun/2022/06/26/image-59.png)


## 请求次数过多的处理方法

请求次数过多，会造成性能的负担，这里有两种可供选择的方法：

- 防抖
- 节流

## setData 是同步的还是异步的？

在小程序的 js 文件中，我们经常会用到 setData 来给 data 对象中的变量设置值。

```javascript
data: {
  banners: []
}


this.setData({ banners: res.banners })
console.log(this.data.banners)
```
如果 setData 是同步的，setData 设置了 banner 的值，下面的打印语句可以拿到最新设置的 banners 的值。
如果 setData 是异步的，setData 可能还没执行完设置值的语句，下面的打印语句就开始运行了，因为是**异步的，setData 没执行完，并不会阻塞后面的打印语句**，因此打印语句不一定能拿到最新设置的 banners 的值。

其实，setData 在设置 data 数据时，是同步的。
而通过最新的 data 数据对 wxml 进行渲染，渲染的过程 setData 是异步的。

setData 在设置 data 数据时，之所以是同步的，可能是为了方便我们在第 7 行打印语句中拿到最新设置的 banners 值。

## 为轮播图组件设置圆角

设置圆角，需要用到 wxss 中的 `border-radius`，但这个属性设置的圆角在某些手机系统上不起作用，是因为手机系统使用 web-view 来渲染类似 html 的页面时，会存在适配的问题（web-view 的 bug）。

解决这个 bug 的方法，添加额外的样式 transform

```css
.banner {
  border-radius: 10rpx;
  overflow: hidden;
  transform: translateY(0);  
}
```

## 区域标题自定义组件 area-header  

自定义组件 `area-header` 配置好了左侧 title 的默认值，我们可以在使用的时候，为 title 设置新的值，就可以替换到默认的值。 

![image -60-](https://img.penghh.fun/2022/06/26/image-60.png)


## 小程序插槽

为什么要使用插槽？

我们封装的区域标题组件，右侧的内容，在不同的场景下，显示的内容是不一样的（内容会动态变化的），如果想要让封装的组件更加灵活，就需要用到插槽。

![image -61-](https://img.penghh.fun/2022/06/26/image-61.png)


不像 Vue，**微信小程序无法给插槽 slot 设置默认值**，但还是有相应的解决方法的，主要有两种：  

- js
- css：通过 CSS 伪类和连接器来解决

我们在封装的组件 area-header 中预留了插槽的位置，如何实现 **插槽默认值** 和 **在使用组件时往插槽插入内容** 的**互斥显示**呢？

![image -62-](https://img.penghh.fun/2022/06/26/image-62.png)


下面介绍基于 css 样式来解决这个问题的方法：

![image -63-](https://img.penghh.fun/2022/06/26/image-63.png)

使用自定义组件 area-header，不往插槽中插入内容时，就会显示插槽的默认值 `更多 >`。   

![image -64-](https://img.penghh.fun/2022/06/26/image-64.png)


## 在小程序中使用多个插槽

在一个小程序页面中使用多个插槽，可以像在 Vue 里一样，使用具名插槽，给每个插槽 slot 添加一个 name 属性，对插槽进行区分。

同时，**当你在一个页面中使用多个插槽，需要在页面的 js 文件额外配置一个 options 字段**，将 `multipleSlots`配置为 true。

![image -65-](https://img.penghh.fun/2022/06/26/image-65.png)

## 小程序多页面的状态管理

学习这个知识，是为了实现数据在多页面间共享（即多个页面会用到一份数据）的功能。

页面间的通讯包含两部分：

- **跨页面之间事件的传递**：页面发出一个事件 event，其他的页面会进行监听。现在有很多的库来帮我们实现跨页面之间事件的传递，例如 mitt，mitt 库实际上就是**事件总线**。事件总线的库一般只负责帮助我们传递事件，并**不会管理状态**。
- 跨页面之间数据的共享和响应（**状态共享**）：页面会共享出一些数据（产生一些共享数据），其他页面可以使用这些数据，并且当共享的数据发生变化时，其他用到了共享数据的页面也会做出响应，自动更新数据。

![image -66-](https://img.penghh.fun/2022/06/26/image-66.png)


在不同的框架中，采用的不同方案来完成**数据的共享**：

- Vue 框架：Vuex（即 Vue 路由）
- React：redux、react-redux
- 微信小程序
   - 方案一：把需要共享的数据放到全局的 `app.js` 中，在文件里面增加一个 globalData 的属性
   - 其他方案：官方目前没有提供更好的方案；GitHub 有一些解决方案，但不够好。
   - 更多方案：使用 coderwhy 老师写的库 `hy-event-store`，一个基于事件的全局状态管理工具，不仅可以在小程序中使用，也可以在 Vue、React 中使用。项目地址：[https://github.com/coderwhy/hy-event-store](https://github.com/coderwhy/hy-event-store)    

**方案一**

app.js -> globalData: { name: phh }
其他页面想使用共享的数据 -> getApp().globalData.name 就可以拿到共享的数据
这种方案有一个致命的缺点：**数据不是响应式的**（不能根据最新的数据，去渲染页面）

方案一实际上只能共享数据，无法做到响应式。

## 小程序状态管理第三方库 hy-event-store

安装 hy-event-store 库：
```bash
npm install hy-event-store 
```

当我们用 npm 安装了新的包之后，需要构建一下 npm。

![image -67-](https://img.penghh.fun/2022/06/26/image-67.png)


在根目录下创建一个文件夹 store，用来存放共享的数据。其中的 `index.js` 作为统一导出的出口。  

![image -68-](https://img.penghh.fun/2022/06/26/image-68.png)


在需要用到共享数据的页面的 js 文件，在 onLoad 生命周期**发起共享数据的请求**和**从 store 获取共享数据**。

![image -69-](https://img.penghh.fun/2022/06/26/image-69.png)


## 推荐歌曲列表自定义组件 song-item-v1
自定义组件 song-item-v1 用到了 mustache 语法，需要将页面请求得到的数据，通过设置的 item 属性传递给自定义组件。  


![image -70-](https://img.penghh.fun/2022/06/26/image-70.png)


自定义组件的 js 文件中的 properties 属性，接收数据。   

![image -71-](https://img.penghh.fun/2022/06/26/image-71.png)


## 全局共享数据
我们在做项目的过程当中，可能会在不同页面中用到手机的屏幕宽度，出于这个考虑，我们可以把这个数据放在 `app.js` 中。 

`wx.getSystemInfoSync`API 可以拿到当前手机设备的信息，例如手机屏幕的宽度和高度。   

![image -72-](https://img.penghh.fun/2022/06/26/image-72.png)


把获取到的手机屏幕宽度和高度数据，存入全局对象 `globalData` 中。   

![image -73-](https://img.penghh.fun/2022/06/26/image-73.png)


如何在组件中使用全局共享的数据？

两个步骤：

- 使用 getApp() 方法获取全局对象 app；
- 在 data 中使用全局对象的方法，就能得到我们刚刚获取的 screenWidth

![image -74-](https://img.penghh.fun/2022/06/26/image-74.png)


拿到屏幕宽度后，我们可以给 scroll-view 组件设置行内样式 `style="width: {{screenWidth}}px"`，这样 scroll-view 组件的宽度就和手机屏幕宽度是一致的。

![image -75-](https://img.penghh.fun/2022/06/26/image-75.png)


同样是让 scroll-view 组件宽度等于屏幕宽度，还有另外一种**更为简单的方法**：

把 scroll-view 组件的宽度设置为 **100 vw**，等于视口的宽度，即整个屏幕的宽度。  

![image -76-](https://img.penghh.fun/2022/06/26/image-76.png)


另外一个全局共享数据的例子：

我们需要根据不同的设备，动态地获取页面顶部状态栏的高度，由于这个动态获取状态栏高度的需求，可能在多个页面中都是会用到的，我们可以把它放到 `app.js` 文件中。

![image -77-](https://img.penghh.fun/2022/06/26/image-77.png)


## 编程语言 - 数据处理
coderwhy 老师在上课时候讲到一句名言：所有的编程语言最终落实到的都是对数据的处理。
我们可以怎样地把数据组织得更合适一点
之后在另外一个地方就可以更加方便地使用这些数据

![image -78-](https://img.penghh.fun/2022/06/26/image-78.png)


数据结构：告诉你应该怎样更高效地组织数据
算法：在组织数据的过程当中，如何可以进行优化（优化获取或存储）

## 单行文本溢出隐藏显示 - CSS

溢出隐藏显示为省略号

![image -79-](https://img.penghh.fun/2022/06/26/image-79.png)


## 页面跳转时携带参数
默认情况下，页面跳转 url 链接的写法为 
`url: '/pages/detail-songs/index',`

如果跳转页面时需要携带参数，url 原本的单引号就要更改为 ``，且需要在 index 末尾增加参数  

![image -80-](https://img.penghh.fun/2022/06/26/image-80.png)


在跳转的目标页面，我们可以在页面的 js 文件的 onLoad 生命周期，通过 `function(options) {}` 拿到携带过来的参数。   

![image -81-](https://img.penghh.fun/2022/06/26/image-81.png)


## CSS 制作毛玻璃效果
毛玻璃效果由两个图层组成，一个是最下方的图片，一个是上层的半透明色块，给半透明色块加上模糊滤镜，就能得到想要的毛玻璃效果。
两个图层都采取**相对定位**，`z-index` 的值为 -1，半透明色块添加 `backdrop-filter: blur(5px)`，就能加上毛玻璃效果。   

![image -82-](https://img.penghh.fun/2022/06/26/image-82.png)


## 搜索框的防抖操作
在前端开发中涉及到搜索功能时，通常都要用到防抖操作。主要是对发送网络请求的函数进行防抖操作，减少对服务器的频繁请求。

防抖函数的文件一般命名为 `debounce.js`

## 搜索框监听用户按下了回车键 Enter

在搜索框组件 `van-search` 绑定一个事件 `bind:search`，可以用来监听用户按下了回车键 Enter。
 
![image -83-](https://img.penghh.fun/2022/06/26/image-83.png)

## 搜索框固定定位

当我们把顶部的搜索框设置为**固定定位**时，搜索框不占位置，下方的搜索结果会与浮在最上面的搜索框重叠在一起。

解决方法：给页面设置一个 padding-top，padding-top 的数值等于搜索框的高度。

还有一个细节，当我们为固定定位的搜索框设置了左右两侧的距离，它就会根据设置的距离，自动计算搜索框的宽度。  

![image -84-](https://img.penghh.fun/2022/06/26/image-84.png)


## 自定义小程序页面顶部状态栏
小程序页面顶部的状态栏默认会显示系统的时间和电量，我们制作的音乐播放页面，想让播放页充满整个页面，就需要在页面的 json 中添加配置 `"navigationStyle": "custom"`。

![image -85-](https://img.penghh.fun/2022/06/26/image-85.png)


## 获取不同机型（设备）状态栏的高度

这里的获取分成两种场景：

- 页面获取
- 自定义组件获取

页面获取，要把获取状态栏高度的函数写在页面 js 的 onLoad 生命周期中。
组件获取，通常情况下把获取状态栏高度的函数，写在组件的 lifetimes 生命周期中。

![image -86-](https://img.penghh.fun/2022/06/26/image-86.png)


## 小程序分页效果

点击页面顶部的 Tab，或是左右滑动可以切换到不同的页面，这种分页效果该怎么实现呢？

有 3 种方案：

- 自己封装分页
- 使用第三方组件
- 使用小程序内置组件 swiper（类似轮播图）

![image -87-](https://img.penghh.fun/2022/06/26/image-87.png)


## 项目中的「常量」管理

不建议在 js 文件中直接使用「常量」进行运算，因为之后想要对常量进行更改，如果项目多个地方都用到了一个常量，就要在多处进行修改，维护起来比较麻烦。

![image -88-](https://img.penghh.fun/2022/06/26/image-88.png)


对「常量」的处理方法有两种：

一种是在项目中建立一个专门用来存放常量的文件夹，例如下图的 constants 文件夹，里面有一个用于存放设备信息（常量）的 `device-const.js` 文件，导出我们需要用到的导航栏高度 44。

这种常量的管理方法常用于**项目中有比较多常量**的场景。


![image -89-](https://img.penghh.fun/2022/06/26/image-89.png)


另外一种是将用到的常量放在全局的 `app.js` 文件，并对其初始化，在需要使用的时候，通过 getApp() 函数调用。

![image -90-](https://img.penghh.fun/2022/06/26/image-90.png)


## 页面在不同设备上的适配   

音乐播放页面在不同型号的设备上，会因为**屏幕高度的不同**涉及到适配的问题。

这里我们采取的布局方式是，整个页面采用 flex 布局，flex-direction 设置为 column，即垂直方向为主轴，其他的部分都是由文字内容的大小、icon 图标的高度、内外边距撑起来的，而剩下两块——专辑的封面和歌词的高度，是由屏幕的高度来动态决定的，即它们的高度之和等于 屏幕高度 - 所有其他元素的高度之和，再由设置的 flex 数值来分配剩余的高度，譬如我们这里把专辑封面高度的比例设置为 4，歌词高度的比例设置为 1。 

![image -91-](https://img.penghh.fun/2022/06/26/image-91.png)


## 小程序播放音乐

小程序的 audio 组件已经停止维护了。
想要在小程序中添加音乐，需要使用能力更强的 `wx.createInnerAudioContext` API。

```bash
const audioContext = wx.createInnerAudioContext() 

// 设置音乐的 url 地址
audioContext.src = "url" 
```

![image -92-](https://img.penghh.fun/2022/06/26/image-92.png)


![image -93-](https://img.penghh.fun/2022/06/26/image-93.png)

## 歌词解析   

课程视频：[播放器暂停、上一首、下一首、进度控制（2）](https://ke.qq.com/webcourse/4162214/104318954#taid=12375291137589926&vid=387702294493689826)

我们从服务器请求得到的歌词，是放在一个大的字符串 lyric 里面，需要先对这个大的字符串进行分割，分割成一行行的歌词。   

通过每句歌词之间的换行符 `\n` 进行分割：   

```js
const lyricString = res.lrc.lyric   
const lyricSingle = lyricString.split("\n")   
```

![](https://img.penghh.fun/2022/07/02/16566068661368.jpg)

split() 方法分割之后得到的一个数组，数组里面的每个元素是一个字符串，由时间和歌词组成。  

["[00:00.000] 作词 : 唐恬", "[00:00.576] 作曲 : 钱雷", ……]    


用 for……of 遍历上面的数据，可以得到一行行的字符串 

```js
for (const lineString of lyricSingle) {
    // [00:00.000] 作词 : 唐恬
    console.log(lineString)
}
```

得到一个个字符串之后，我们要对字符串进行拆分，取出里面的时间 `00:00.000` 和歌词文本「作词 : 唐恬」。   

取出时间比较麻烦，这里需要用到**正则表达式**。  

```js
// 我们想要匹配的是 [00:00.000]
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/     

```

正则表达式要使用 `/ /` 进行包裹。  

方括号 [] 在正则表达式中是有特殊含义的，比如当我们想匹配 a 到 z 的字母，就会写 [a-z]，在中括号里会写上**匹配的范围**。

这里想匹配的时间左右两侧有中括号，因此在匹配的时候，需要在中括号前面加上转义的反斜杆 \。   

时间左右两侧的中括号匹配出来之后，我们就可以写里面想匹配的时间（分、秒、毫秒），每一块的匹配在正则表达式中使用小括号 `()` 进行分割。   

这里需要注意的是，英文句号 `.` 在正则表达式中也有特殊含义，因此要在英文句号前面加多一个反斜杆。  

接着我们就可以逐一写每一个小括号里面的匹配规则了：  

匹配分钟：(\d{2})

(\d)，`\d` 表示**匹配数字**，也可以写成 [0-9]，但这种形式有点长，我们更倾向于写更简短的 `\d`。  

在 `\d` 后面加上 `{2}` 表示我们想匹配两个数字。  

匹配秒钟：(\d{2})

匹配毫秒：(\d{2,3})

毫秒有些特殊，既有两个数字，也有 3 个数字的情况。  

[00:02.304]
[00:04.92]   

`\d` 后面的规则需要改一改，写成 {2,3}，匹配两到三个，匹配 2 个或 3 个数字。  

⚠️ 注意：**正则表达式中不能随意加空格**，{2,3} 和 {2, 3} 在正则表达式中是不一样的。   


写好正则表达式之后，可以**使用正则表达式对字符串进行执行**，匹配出我们想要的东西。   

执行的意思是，我们要用正则表达式 timeRegExp 去匹配字符串 lineString 中的东西了。   

```js
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/   

for (const lineString of lyricSingle) {
    // [00:00.000] 作词 : 唐恬
    console.log(lineString)  
    const timeResult = timeRegExp.exec(lineString)
    console.log(timeResult)
}

```

打印正则表达式匹配出来的结果 timeResult，会发现匹配结果是一个个的数组。   

每个数组中第 2、第 3、第 4 个元素，就是我们想要的分钟、秒钟、毫秒。   

![](https://img.penghh.fun/2022/07/02/16567361817322.jpg)

```js
const minute = timeResult[1] * 60 * 1000  
const second = timeResult[2] * 1000
const millisecond = timeResult[3]  
```

这里还需要分别把分钟、秒转换为毫秒，等会方便与进度条的 currentTime（单位为毫秒） 相匹配。     

> 一个 JS 的知识点：JS 中，数字字符串（例如我们这里拿到的 "02" 就是一个数字字符串）与一个数字相乘时，数字字符串会隐式转换为一个数字，就可以正常运算了。      

最后匹配到的毫秒，比较特殊，有两位数字，也有三位数字的情况：  

三位数字 304 是正常的毫秒，不需要作任何处理。

**两位数字 92，需要先乘以 10，才能真正转换成毫秒**，92 完整的写法应该是 920 ms，因此这里需要进行判断，可以使用三元运算符：   

```js
const millisecond = timeResult[3].length === 2 ? timeResult[3] * 10 : timeResult[3] * 1   
```

三元运算符的含义是，如果毫秒字符串的长度为 2，那么就乘以 10，转换为真正的毫秒，否则的话，就让**毫秒字符串乘以 1，转换为数字类型的毫秒**。   


拿到时间之后，我们再来拿字符串 lineString `[00:00.000] 作词 : 唐恬` 中剩下的歌词文本「作词 : 唐恬」。  

```js
const lyricText = lineString.replace(timeResult[0], "")  

// 另外一种写法
// const lyricText = lineString.replace(timeRegExp, "")
```

replace() 方法可以接收两种参数：  

* 字符串  
* 正则表达式  

timeResult[0] 是正则表达式匹配结果的第一个元素，值为 `[00:00.000]`，将整个字符串前面的时间戳替换为空字符串，就能得到剩下的歌词文本了。 


## 匹配歌词

对歌词进行解析，我们就可以得到包含有时间和歌词文本的数组 lyricInfos，数组中的每一个元素是对象类型：  

[{time: 0, text: "作词：唐恬"}, {time: 576, text: "作曲：钱雷"}, ……]   

接下来，我们要根据当前播放的音乐进度 currentTime，与 lyricInfos 中的 time 进行匹配，得到对应的歌词。    

![根据时间查找歌词的分析](https://img.penghh.fun/2022/07/02/gen-ju-shi-jian-cha-zhao-ge-ci-de-fen-xi.png)


## 歌词自动滚动

歌词滚动，是用小程序自带的 scroll-view 组件制作的。

想给开头和结尾的歌词设置一个空白，不能直接给 scroll-view 的第一行歌词（第一个 item）设置 margin-top 或 padding-top，因为这样设置的话，会导致上滑的歌词被设置的空白区域遮盖掉，无法看到歌词滚动到屏幕顶部自动消失的效果。
比较好的实现方法是：**给遍历的 item 设置一个动态样式（动态的 css 样式）**，根据歌词的索引值来设置样式，第一行歌词的索引值为 0，设置 padding-top，最后一行歌词的索引值为 `歌词所在的数组长度 - 1`，设置 padding-bottom。 

```css
style="padding-top: {{index==0? (contentHeight/2-80): 0}}px; 
padding-bottom: {{index==lyricInfos.length-1? (contentHeight/2+80): 0}}px"
```

注意：这里的 contentHeight 是整个 scroll-view 的高度。之所以添加了 `contentHeight/2-80` 这样的运算，是想让程序可以根据不同的手机屏幕高度，自适应设置不同大小的 padding-top 和 padding-bottom。

想要实现**歌词自动滚动**，可以给 scroll-view 组件设置 scroll-top 属性，属性需要绑定一个动态变化的值 lyricScrollTop。

![image -94-](https://img.penghh.fun/2022/06/26/image-94.png)


动态变化的值 lyricScrollTop，是由歌词的索引值和每行歌词的高度 35px 相乘得来的。  

![image -95-](https://img.penghh.fun/2022/06/26/image-95.png)


## 点击左侧按钮返回上一页

左侧按钮位于我们自行封装的 nav-bar 组件中，我们给左侧的 left 区域绑定一个 handleLeftClick 事件。
在 nav-bar 组件的 js 文件中，只把点击的事件发射出去，而不直接写返回上一页的逻辑，因为我们要让使用 nav-bar 组件的页面自行决定点击后的逻辑，如此一来也能让 nav-bar 组件更具备扩展性。   

![image -96-](https://img.penghh.fun/2022/06/26/image-96.png)


来到使用 nav-bar 组件的音乐播放页面 music-player，我们在 nav-bar 组件监听内部发射出来的 click 事件，并绑定一个函数 handleBackBtnClick。
在函数里面调用小程序的 API `wx.navigateBack()`，就能返回上一页。    

![image -97-](https://img.penghh.fun/2022/06/26/image-97.png)


## 阻止事件向上冒泡  

在 HTML 中常用的做法：传入 event 对象，调用 event 对象的 stopPropagation() 方法。
但是小程序中是不支持这个做法的。  

![image -98-](https://img.penghh.fun/2022/06/26/image-98.png)


小程序中捕捉到一个事件后，不想让它向上冒泡，我们监听的方法要从 bindtap 更换为 catchtap。
这样当我们点击右侧的 播放/暂停 按钮，就不会触发进入播放详情页的操作。   

![image -99-](https://img.penghh.fun/2022/06/26/image-99.png)


小程序有自己的捕获和冒泡机制的，跟在 JS 中的写法稍微有一点点不一样。

## 小程序后台播放的 API（背景音频）

什么时候属于后台播放？
——点击右上角的胶囊按钮，关闭小程序，或是从微信返回到手机桌面

使用 API `wx.getBackgroundAudioManager`  

将我们之前使用 `wx.createInnerAudioContext`创建的音频上下文对象，更改为 `wx.getBackgroundAudioManager`。  

![image -100-](https://img.penghh.fun/2022/06/26/image-100.png)


使用 `wx.getBackgroundAudioManager` 有两个必须配置的参数：

- 在 App 的全局 json 文件`app.json` 中增加字段 `requireBackgroundModes` 字段

![image - 2022-06-26T102556.119](https://img.penghh.fun/2022/06/26/image--20220626t102556119.png)


- 在使用到 `wx.getBackgroundAudioManager` 的 js 文件中配置 title 属性，这个属性代表音乐的名称。

![image - 2022-06-26T102612.212](https://img.penghh.fun/2022/06/26/image--20220626t102612212.png)


## 小程序登录功能

当用户登录小程序，我们可以拿到这个用户身份的唯一标识 openid，**openid 是用户身份的唯一标识**。
每个微信用户的 openid 是唯一的，不会重复

**微信小程序获取用户的 openid，是不需要经过用户授权的**
unionid：在多个平台共享 id

### 小程序用户登录的流程

涉及到 3 个角色——小程序（客户端）、开发者服务器（开发小程序的公司的服务器）、微信接口服务（微信的服务器）

步骤：

1. 在小程序中拿到一个临时的 code，调用 API `wx.login` 可以拿到临时的 code
2. 把这个 code 传递给公司的服务器
3. 公司服务器拿到 code 之后，准备齐 3 个东西（code、小程序后台的 appid 和 appsecret 参数）
4. 公司服务器向微信服务器发送网络请求，携带前面的 3 个参数（服务器发送网络请求）
5. 微信服务器向公司服务器返回 **openid** 和 session_key 

完成前面的步骤，用户是无感知的，不知道自己已经登录过了
那应该怎么让用户知道自己已经登录过了呢？
将 openid + session_key + 其他信息，生成一个新的东西——公司服务器的 token

6. 接着将这个 token 返回给微信小程序

小程序端获取到服务器返回的 token（这个 token 可以保存到本地的缓存 storage 中），用户进行各种操作——**收藏、喜欢**或者**评论**等，将这个 token 发送给公司的服务器

7. 公司的服务器拿到小程序发送的 token

解析 token 得到 openid、session_key
在数据库中保存用户的操作行为

8. 假设用户换了另外一部手机

判断小程序本地的缓存有没有 token
没有 token 的话，**使用原始的登录流程**，就是把前面的步骤重新走一遍
如果有 token
需要先判断一下 token 是否过期了
没有过期的话，直接使用
过期了的话，重新走一遍登录流程

下图中的「自定义登录态」，就是公司服务器生成的 token。


![image - 2022-06-26T102629.475](https://img.penghh.fun/2022/06/26/image--20220626t102629475.png)


### 用户什么时候需要重新登录呢？  

* 小程序本地缓存的 token 为空
* token 已失效，或者 token 不是一个有效值  
* session_key 失效   

这里之所以涉及到 session_key，是因为生成 access token 需要有至少 2 个参数：openid 和 session_key 。  

### 判断 token 是否过期的两种方式

第一种方式：在请求一些其他接口的时候，譬如请求收藏接口、评论接口等，在请求的 header 中携带 token，让服务器来判断 token 是否过期了。

第二种方式：当用户启动小程序，在 app.js 的 onLaunch 中判断 token 是否过期。

需要注意的是，微信给我们返回的 session_key 也是会过期的，在登录时也要判断一下 session_key 是否过期了，如果过期了，也要重新登录。   

session_key 的有效期是不确定的，微信官方并没有说明 session_key 的有效期，它的有效期与用户是否频繁使用小程序有关：如果用户频繁使用我们的小程序，它的有效期会比较长一点。  

### 获取其他用户信息

openid 是用户身份的唯一标识，它不携带其他信息，不包含用户的昵称、头像。  

openid 是识别这个用户的身份，而不是拿到这个用户的更多信息。  

获取其他用户信息，需要用到 API `wx.getUserProfile`。  

在使用这个 API 时需要注意，它直接放在 `app.js` 中是无效的，它需要**在一个事件之后才能触发获取用户头像和昵称**的，例如绑定在页面按钮的点击事件中，当我们点击了按钮，页面下方才会弹出是否授权的窗口。   

![](https://img.penghh.fun/2022/06/26/16561726429178.jpg)

![](https://img.penghh.fun/2022/06/26/16561695117607.jpg)

### unionid

unionid：也是唯一标识，作为在微信的多个平台进行授权时，相同的 id。  

openid：仅仅是微信用户在同一个小程序里面多次登录的时候，它的一个身份标识。  

假设我们的产品不仅有小程序端，也有公众号端、H5 页面（第三方登录、微信登录），用户在不同端之间的操作行为，如何实现数据的共享呢？   

这时就需要用到 unionid。  

有了 unionid，用户使用同一个微信在不同的平台上登录，我们就可以通过 unionid 识别出这是同一个用户。  

获取 unionid，需要前往**微信开放平台**注册相应的账号，获取开放平台提供的 SDK。  

### 国内 App 用户登录的常见设计（用户身份多平台共享）    

用户身份多平台共享：  

* 账号绑定
* 手机号绑定（现在最常用的）     



初次打开刚下载的 App，通常都会让你进行登录，登录方式一般会提供多种第三方登录，比如：  

* QQ 登录   
* 微信登录    
* 微博登录  

假设我们选择了微信登录，跳到微信授权后再返回 App，接下来可能还会遇到另外一步操作——**绑定账号**，绑定账号也有多种情况：  

* 绑定用户名 userid
* 用户邮箱   
* 用户手机号（非常常见的）

在前面的微信登录操作，我们可以拿到 openid 或者 unionid，与后面「绑定账号」的步骤获取的一项信息进行绑定，比如将 unionid 与手机号进行绑定，这样不管你之后是使用 unionid 登录，还是使用手机号登录，我们都可以知道这是同一个用户，可以更好地实现用户数据在多个平台间的共享。   

不过需要注意的是，个人开发者是无法通过微信小程序拿到用户的手机号的。   

截图地址：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html      
![](https://img.penghh.fun/2022/06/26/16561727312023.jpg)

如果是个人开发者账号，绑定获取手机号的事件，会打印一个错误信息，提示「没有获取的权限」。   

![](https://img.penghh.fun/2022/06/26/16561732384096.jpg)

不过即便是公司主体的开发者账号，拿到的也不是手机号，而是一个动态的 code，要想真正拿到用户手机号码，我们还需要在公司服务器向微信服务器发起请求，发起请求的时候，需要携带两个参数，一个是 access_token，一个是动态的 code，请求之后微信会返回 phone_info 对象，里面就有用户的手机号。  

 
## 小程序分包   

![](https://img.penghh.fun/2022/06/26/16561736591917.jpg)

第一次打开小程序必须下载的包，称为主包。
后面才需要用到的包，称为分包。  

主包尽可能地小一些，把暂时用不到的都放到分包里面，再在需要用到的时候进行下载。  

小程序的限制：  

* 单个分包/主包大小不能超过 2MB
* 整个小程序所有分包大小不超过 20MB

分包操作：  

* 将 3 个详情页分到一个包里面 packageDetail
* 将播放页面单独分到一个包里面 packagePlayer

需要注意的是，TabBar 对应的页面是不能进行分包操作的。 

![](https://img.penghh.fun/2022/06/26/16561746955305.jpg)

### 分包预下载

加载完主包后，当小程序处于闲置状态，可以在后台预先下载分包，这个设计参考了 Webpack 中的「预加载和预获取」。   

在 `app.js` 中添加一个预下载的规则，指明当进入某个页面后，预下载哪些分包。  

譬如下面的代码，是在进入 home-music 页面后，预下载两个分包 packageDetail 和 packagePlayer。     

![](https://img.penghh.fun/2022/06/26/16561756826579.jpg)


## 项目为何要用到 Vant 组件库？  

* 学习如何在小程序中引用一些 UI 组件库，来减少开发量
* npm 包的使用
* van-search 搜索组件


## 组件按需注入

代码按需注入，俗称懒加载。   

启用组件按需注入，也就是在小程序中优先注入必须要用的组件，暂时未用到的组件之后注入，可以显著提高小程序的启动性能，配置起来也非常简单。  

只需要在项目的 `app.json` 中添加下面的一行配置，就能启用啦：   

```
"lazyCodeLoading": "requiredComponents"  
```  

## 骨架屏  

骨架屏：展示一个页面骨架，而不含有实际的页面。  

骨架屏在页面白屏的时候，给了用户及时的反馈，减缓了用户焦急等待的一个情绪，这是它的意义所在。  

点击开发者工具「模拟器」右下角的 … ，选择「生成骨架屏」。     

![](https://img.penghh.fun/2022/06/28/16562272511306.jpg)

骨架屏的详细使用，可以参考微信团队提供的视频教程： https://developers.weixin.qq.com/community/business/doc/000086539b40682ccddd8b71551c0d    

骨架屏只是在页面加载时给用户更好的体验，并不能提高页面的加载速度，因此**不能无节制地使用骨架屏**，一般只给主页添加骨架屏效果。 


## 扫码加入我在知识星球上创建的社群「效率工具指南」  

如果你觉得本文帮到了你，想支持我做得更好，欢迎戳下方图片，加入我的知识星球。     

关于社群「效率工具指南」的介绍，可以查看我在语雀文档上发布的文档：[知识星球「效率工具指南」简介](https://www.yuque.com/penghonghao/af0aai/glwrg2dl0dqlegi6?singleDoc#)    

![48844555552858T2](https://img.penghh.fun/2023/03/25/48844555552858t2.JPG)   












 
 








