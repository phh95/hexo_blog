---
title: Vue前端项目集成element-plus组件库：全局引入和按需引入                  
date: 2022-10-19 09:06:00               
tags: [Vue,前端,ElementPlus]                                                                       
---

> 注：标题的「按需引入」可细分为 2 种，**按需引入**和**按需自动引入**，更推荐使用后一种。      


element-plus，基于 Vue 3.0 的桌面端**组件库**。      

element-plus 的使用方式和很多其他的组件库是一样的，所以学会 element-plus，其他类似 ant-design-vue、NaiveUI、VantUI 都是差不多的。   


安装 element-plus 库：  

```
npm install element-plus
```

在项目中集成 element-plus，有两种方式：  

* 全局引用：所有的组件全部集成，优点是集成比较简单，缺点是全部组件会打包到项目代码中       
* 按需引用：优点是打包生成的代码会小一些，缺点是引用起来麻烦一些    

### 全局引用  

在入口文件 `main.ts` 中导入安装的 element-plus 和 CSS 样式；     

在下方通过 `app.use` 安装插件。   

![](https://img.penghh.fun/2022/10/19/16658023949845.jpg)

接着就能直接在 `App.vue` 中使用 element-plus 中封装好的各种组件，例如下图的 el-button 按钮组件。    

由于这是**全局引用 element-plus**，相应地里面包含的**组件也是全局注册**的，因此我们不需要在 `App.vue` 的 script 中引用和注册组件。   

![](https://img.penghh.fun/2022/10/19/16658032948529.jpg)


### 按需引用   

按需引用，配置起来稍微有一点麻烦，我们需要在用到 element-plus 组件的 vue 文件中同时**引入组件和用到的 CSS 样式**。   

这里引入 `base.css` 文件是必须的，否则 button 组件的 CSS 文件 `el-button.css` 不会生效。     

![](https://img.penghh.fun/2022/10/19/16658089071674.jpg)

但是这样我们在开发时每次使用都要手动引入对应的 CSS 样式，使用起来会比较麻烦，我们还可以使用另外一种方法：**按需自动引入**。   

### 按需自动引入   

首先要安装两款插件 `unplugin-vue-components` 和 `unplugin-auto-import`：     

```
npm install -D unplugin-vue-components unplugin-auto-import
```

接着还要修改 Webpack 的配置，对于我们这个项目，要修改的就是 `vue.config.js` 文件，导入相应的模块，并在 configureWebpack 的 plugin 字段配置安装的 2 个插件。    

```js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
    configureWebpack: {
        plugin: [
            AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
        ]
    }
}

```

完成上面的配置后，再回到 `App.vue` 文件，**不需要引入和注册组件**，我们就能直接在 vue 文件的 template 模板使用 el-button 组件。    

![](https://img.penghh.fun/2022/10/19/16658190884582.jpg)


老师在视频课程中安装的插件(Babel 相关的插件)和这里安装的插件不一致，babel 插件配置起来更麻烦，还要在入口文件 `main.ts` 中引入和**注册全局组件**，才能实现在任意的 vue 文件中使用 el-button 组件。   

![](https://img.penghh.fun/2022/10/19/16658192180100.jpg)


## 扫码加入我在知识星球上创建的社群「效率工具指南」  

如果你觉得本文帮到了你，想支持我做得更好，欢迎戳下方图片，加入我的知识星球。     

关于社群「效率工具指南」的介绍，可以查看我在语雀文档上发布的文档：[知识星球「效率工具指南」简介](https://www.yuque.com/penghonghao/af0aai/glwrg2dl0dqlegi6?singleDoc#)    

![48844555552858T2](https://img.penghh.fun/2023/03/25/48844555552858t2.JPG)   

## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://img.penghh.fun/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)       