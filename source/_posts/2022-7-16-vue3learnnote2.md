---
title: 前端框架 Vue3 学习笔记（二）                                   
date: 2022-7-16 10:08:00               
tags: [Vue,前端,学习笔记]                                                                                 
---   

注：学习笔记来自 coderwhy 老师的 Vue3 课程。  


## Vue3 组件化开发    

![](https://img.penghh.fun/2022/07/16/16490467364421.jpg)


在 VS Code 中可以安装的两个提升 Vue 开发效率的插件：   

* Vue VSCode Snippets
* Vetur    

安装 Vue VSCode Snippets 插件后，在 `App.vue` 文件中输入 `vbase-css`，就可以快速插入下面的代码片段：     

![](https://img.penghh.fun/2022/07/16/16490463789945.jpg)


想在 `App.vue` 中使用其他的组件(拆分出去的组件)，例如 `Header.vue`、`Main.vue`、`Footer.vue`，有两种方法：   

* 把 `Header.vue`、`Main.vue`、`Footer.vue` 注册成全局组件（不推荐）     
* 局部注册



![](https://img.penghh.fun/2022/07/16/16490525310249.jpg)

## 组件的通信   


![](https://img.penghh.fun/2022/07/16/16490537753776.jpg)

父子组件间的通信：  

* 父组件传递给子组件：通过 props 属性；    
* 子组件传递给父组件：通过 $emit 触发事件。   


![](https://img.penghh.fun/2022/07/16/16490624835915.jpg)


### 父组件传递给子组件   



![](https://img.penghh.fun/2022/07/16/16490626628599.jpg)

父组件传递给子组件 - **字符串数组**     

这里的字符串数组，指的是：**子组件的 props 字段传入的是一个数组**。      

![](https://img.penghh.fun/2022/07/16/16490642820092.jpg)

父组件传递给子组件 - **对象类型**     

子组件的 props 的值为对象类型时，可以对传入属性的值做更多的限制：  

* 比如指定传入的 attribute 的类型    
* 指定传入的 attribute 是否必传     
* 指定的 attribute 没有传入值时，它的默认值 default         

![](https://img.penghh.fun/2022/07/16/16490701610690.jpg)


![](https://img.penghh.fun/2022/07/16/16490781070827.jpg)

传入 attribute 的值可以是哪些类型？   

![](https://img.penghh.fun/2022/07/16/16490767000197.jpg)


在 vue 文件，template 元素中的属性采用驼峰命名法是没问题的，因为 template 的代码是由 vue-loader 解析的，而不是由浏览器解析。

但建议还是采用 短横线分隔命名 的命名方式。   

![](https://img.penghh.fun/2022/07/16/16490825001812.jpg)


### 非Prop的Attribute

当我们传递给一个组件某个属性，但是该属性并没有定义对应的 props 或者 emits，就称之为 非Prop的Attribute。  

常见的包括 class、style、id 属性等。   

这里需要注意：  
div 元素都有 class 属性；而自定义的组件，例如 `<show-message>` 是没有 class 属性的。  

非Prop的Attribute 有 3 种情况：   

* 当(子)组件有单个根节点时，非Prop的Attribute将自动添加到根节点的 Attribute 中。这个称为 Attribute 继承。   
* 如果不希望(子)组件的根元素继承 attribute，可以在(子)组件中设置 `inheritAttrs: false`。  

![](https://img.penghh.fun/2022/07/16/16491198403110.jpg)

* 多个根节点的 attribute：

这里的多个根节点，是指子组件的 template 包含的多个标签，没有包裹到一个 div 标签里面。   

![](https://img.penghh.fun/2022/07/16/16491206777172.jpg)



### 子组件传递给父组件

![](https://img.penghh.fun/2022/07/16/16491443014769.jpg)


案例：子组件中创建两个按钮，当按钮发生点击后，父组件中的 counter 计数器的数字相应发生变化。  

![](https://img.penghh.fun/2022/07/16/16491389406671.jpg)

`this.$emit()` 除了可以给父组件传递事件，还可以传递其他的参数，例如下图的 this.num。   

![](https://img.penghh.fun/2022/07/16/16491436847595.jpg)


## 非父子组件的通信   

非父子组件的通信，主要有两种方式：  

* Provide/Inject   
* Mitt 全局事件总线    

### Provide 和 Inject  

Provide/Inject 用于非父子组件之间共享数据：   

* 比如有一些深度嵌套的组件（层级比较深），子组件想要获取父组件的部分内容；   
* 在这种情况下，如果我们仍然将 props 沿着组件链逐级传递下去，就会非常的麻烦；   

对于这种情况，我们可以使用 Provide 和 Inject：    

![](https://img.penghh.fun/2022/07/16/16491743528708.jpg)

从父组件向孙组件传递数据，最简单的用法，父组件的 provide 字段传入一个对象，孙组件的 inject 字段传入对象的 key。   

![](https://img.penghh.fun/2022/07/16/16492032723206.jpg)

如果父组件的 provide 需要**用到来自 data 字段的数据**，那么原先传入 provide 的对象就需要改写成一个函数。   

![](https://img.penghh.fun/2022/07/16/16492595713475.jpg)

如果我们希望父组件 provide 提供的数据变成**响应式**，一般会用到 computed 函数，当传入的参数发生变化时(依赖发生变化)，computed 就会重新计算一个新的值。   

![](https://img.penghh.fun/2022/07/16/16492642016632.jpg)


computed 函数返回的是一个 ref 对象。  

![](https://img.penghh.fun/2022/07/16/16492602515142.jpg)
    

### 全局事件总线 mitt 库

eventBus：事件总线   

总线这个概念来源于操作系统。  

需要安装第三方库 mitt：  

```
npm install mitt   
```

安装 mitt 库之后，在根目录创建一个文件 `eventbus.js`，导入 mitt 函数。   

![](https://img.penghh.fun/2022/07/16/16493478849077.jpg)

案例需求：当我们点击 About 组件中的按钮时，HomeConnect 组件可以监听到点击事件。   

![](https://img.penghh.fun/2022/07/16/16493481477101.jpg)

About 和 HomeConnect 两个组件都要引入前面安装的 mitt 库。   



![](https://img.penghh.fun/2022/07/16/16493770715963.jpg)

发射多个事件，可以使用通配符接收所有事件。  

![](https://img.penghh.fun/2022/07/16/16493792161633.jpg)

### mitt 的事件取消   

取消掉之前注册的函数监听    

![](https://img.penghh.fun/2022/07/16/16493793602777.jpg)


## 插槽 Slot   

![](https://img.penghh.fun/2022/07/16/16494385809566.jpg)

插槽的使用过程其实是**抽取共性、预留不同**；   
会将**共同的元素、内容**封装在组件内；  
同时会将不同的元素使用 Slot 作为占位，让外部决定到底显示什么样的元素。   

如何使用插槽呢？  

* Vue 中将 `<slot>` 元素作为**承载分发内容**的出口；   
* 在封装组件中，使用特殊的元素 `<slot>` 就可以为封装组件开启一个插槽；   
* 该插槽插入什么内容取决于**父组件**如何使用。   

## 插槽的基本使用    

![](https://img.penghh.fun/2022/07/16/16494403283741.jpg)

### 插槽的默认内容   

使用多个插槽，每个插槽分别显示不同的内容。  

![](https://img.penghh.fun/2022/07/16/16494728351719.jpg)


![](https://img.penghh.fun/2022/07/16/16494730576793.jpg)

动态插槽名：有时候在一些高级组件中，我们给 `<slot>` 的插槽名 name 属性赋的值不是写死的，会通过一个配置文件来传入一个值。   

使用动态插槽名的时候，template 元素的 v-slot 绑定的插槽名需要加一个 []，因为这绑定的是一个**变量**。     

![](https://img.penghh.fun/2022/07/16/16494742327221.jpg)
  

具名插槽的缩写

`v-slot:`可以简写为一个井号 #。    

![](https://img.penghh.fun/2022/07/16/16494744045184.jpg)

## 渲染作用域   

Vue 有一个渲染作用域的概念。  

看下面的一个小例子：  

button 虽然最终会替换掉插槽中的 slot 元素（button 的内容虽然最终会显示在 slot 的位置），但它是在 `App.vue` 中完成编译的，不能调用子组件 data 中的 title。    

![](https://img.penghh.fun/2022/07/16/16494772045221.jpg)

如果父组件想使用来自子组件的数据，需要用到作用域插槽。   

### 作用域插槽    

在用到一些第三方 UI 库，或者封装高级组件的时候会用到作用域插槽。   

父组件可以自由控制子组件插槽最终的显示效果。   

这里的 slotProps 可以更换为其他的名字，但通常情况下就是使用 slotProps。    

![](https://img.penghh.fun/2022/07/16/16494880092964.jpg)

![](https://img.penghh.fun/2022/07/16/16494901817611.jpg)


独占默认插槽的缩写   

![](https://img.penghh.fun/2022/07/16/16494902855215.jpg)

默认插槽 default 和具名插槽混合     

![](https://img.penghh.fun/2022/07/16/16494903178859.jpg)

## 动态组件   

需求：当我们点击父组件中的 3 个按钮时，下方的子组件（页面）会跟着切换。   

实现需求的 3 个方法：  

* 使用条件判断   
* 使用动态组件    
* 使用 Vue 路由（对简单需求来说，路由的方法比较复杂，没必要）     

![](https://img.penghh.fun/2022/07/16/16495962266742.jpg)

动态组件：  

**component 是 Vue 内置的组件**，通过绑定 is 属性可以实现子组件间的切换。  

这种方法，相比条件判断更为简洁。   

![](https://img.penghh.fun/2022/07/16/16495964525735.jpg)



![](https://img.penghh.fun/2022/07/16/16495966747791.jpg)

## 认识 keep-alive   

keep-alive 是 Vue 内置的组件，不需要自行定义。

前面点击按钮切换子组件的案例中，每次切换不同的子组件时，原先创建的子组件都会被销毁。  

如果我们想在切换的时候，保留当前子组件的状态，例如保留我们在子组件中输入的内容、或是点击按钮累计得到的数字，这时就需要用到 keep-alive。  

它可以将子组件销毁之前的状态**缓存**起来，这样当我们再次切换回子组件的时候，就可以看到切换前的状态啦。      

![](https://img.penghh.fun/2022/07/16/16495972046498.jpg)

keep-alive 的属性   


![](https://img.penghh.fun/2022/07/16/16495976097574.jpg)


keep-alive 配置 include 或 exclude 属性时，需要在组件中添加一个 name 字段，指明组件的名称。     

![](https://img.penghh.fun/2022/07/16/16495979933786.jpg)

keep-alive 不设置 include 属性时，默认都是会缓存的。    

## Webpack 的代码分包     

运行 `npm run build` 对项目进行打包时，会得到两个 js 文件，一个是 `app.js`，一个是 `chunk.js`。   

随着我们自己编写的代码逻辑变多，打包得到的 `app.js` 文件会越来越大，在生产环境中会影响用户体验。   

对于一些不需要立即使用的组件，可以单独对它们进行拆分，拆分成一些小的代码块 `chunk.js`，会在需要用到的时候从服务器加载下来。   

![](https://img.penghh.fun/2022/07/16/16497216154479.jpg)

打包生成的 `chunck-vendors.js` 文件，里面是项目用到的第三方的包，例如 vuejs、vue-router、axios。    

![](https://img.penghh.fun/2022/07/16/16497205861230.jpg)

为了缩小 `app.js` 的体积，我们可以使用 Webpack 的**分包**操作，将我们自己编写的代码单独打包为一个文件，而不是都打包到 `app.js` 文件中。      

通过 **import 函数**导入的模块，后续 Webpack 对其进行打包时就会进行分包的操作。   

在打包后得到的 dist 文件夹中会多出一个 chunk-哈希值 的 js 文件。     

> import 函数的返回值是一个 Promise，就可以用 then 方法。   

![](https://img.penghh.fun/2022/07/16/16497210627347.jpg)


讲这个知识点有什么用呢？  

**Vue 的异步组件，就是基于 import 函数来实现**。    

## Vue 异步组件   


对 Vue 组件（`.vue` 文件）利用 Webpack 进行分包，需要用到**异步组件**。   

从 Vue 框架中导入一个函数 defineAsyncComponent。   

调用函数 defineAsyncComponent 时，可以传入两种类型的参数：   

* 工厂函数（更常用）    
* 传入一个对象类型  

![](https://img.penghh.fun/2022/07/16/16501155712423.jpg)

defineAsyncComponent 函数传入工厂函数的写法：  

![](https://img.penghh.fun/2022/07/16/16501158350467.jpg)

defineAsyncComponent 函数传入对象的写法：  

![](https://img.penghh.fun/2022/07/16/16501165436309.jpg)


直接编写异步组件的情况比较少，一般是在配置路由的时候，把路由中的组件配置成异步组件。  

## 异步组件和 Suspense 结合使用     

Suspense 是悬念、悬而未决的意思。   

Suspense 是 Vue 内置的全局组件，有两个插槽：  

如果 default 插槽内的异步组件可以正常显示，那么就显示 default 插槽的内容；  
如果 default 异步组件暂时无法显示，那么就会显示 fallback 的内容。   

下图的 `<loading />` 是自定义的组件加载过程中会在页面显示的占位组件。     

![](https://img.penghh.fun/2022/07/16/16501171202222.jpg)
 
## refs 的使用   

![](https://img.penghh.fun/2022/07/16/16501322219202.jpg)

获取组件内的元素 h2 或者子组件实例 nav-bar  

![](https://img.penghh.fun/2022/07/16/16501328215886.jpg)

子组件获取父组件或根组件，需要使用 $parent 和 $root。   

![](https://img.penghh.fun/2022/07/16/16501613425848.jpg)

子组件 `NavBar.vue` 获取父组件 `App.vue` 的代码写法。   

这个比较少用，稍微了解一下就好。   

![](https://img.penghh.fun/2022/07/16/16501616500921.jpg)

## 认识生命周期   

什么是生命周期？   

每个组件都可能会经历从**创建、挂载、更新、卸载**等一系列的过程。    

![](https://img.penghh.fun/2022/07/16/16501645437477.jpg)

### 生命周期的流程    

![](https://img.penghh.fun/2022/07/16/16501778891709.jpg)

### 缓存组件的生命周期

缓存组件指的是 keep-alive。  

前面说到，keep-alive 可以保存 A 组件在切换之前的状态，之后重新用到 A 组件的时候，可以直接看到组件切换前保存的数据。  

这个过程意味着，从 A 组件切换到 B 组件的时候，A 组件不会被销毁，因而**不会调用 unmounted()**；从 B 组件切换回 A 组件的时候，A 组件不需要重新创建，因此**也不会调用生命周期中的 created()**。  

对于这两种情况，我们会使用另外两个生命周期函数：  

* activated()   
* deactivated()   

还是上面的例子，当我们从 A 组件切换到 B 组件时，会调用 deactivated()；从 B 组件切换回 A 组件时，会调用 activated()。    

![](https://img.penghh.fun/2022/07/16/16502085029627.jpg)


## 组件的 v-model   

这部分内容有点难。    

自定义组件的 v-model：  

等价于两个步骤，v-bind 绑定 modelValue，同时绑定一个事件 update。  

![](https://img.penghh.fun/2022/07/16/16503280438972.jpg)

自定义组件 PhInput 中，使用 props 接收来自父组件传入的 modelValue。   

自定义组件中的 input 元素使用双向绑定 v-model，需要用到**计算属性 computed**。     

![](https://img.penghh.fun/2022/07/16/16503285313164.jpg)

## Vue3 过渡&动画实现    

![](https://img.penghh.fun/2022/07/16/16505582043721.jpg)

如果我们希望给**单元素或者组件**实现过渡动画，可以使用 **transition 内置组件**来完成动画。   

一个简单的例子：点击按钮，实现文字淡入淡出的效果   

将添加动画的元素包裹在内置组件 transition 中   

![](https://img.penghh.fun/2022/07/16/16505606064971.jpg)

### Vue 的 transition 动画   

![](https://img.penghh.fun/2022/07/16/16505608501704.jpg)

### transition 组件的原理  

transition 组件的原理，需要了解，面试有可能会问到。  

下图的 DOM 插件、删除操作，就对应我们前面的显示和隐藏。如果 Vue 没有找到 JS 钩子或者 CSS 过渡/动画，显示和隐藏就会立即执行，不会有淡入或淡出的效果。   

![](https://img.penghh.fun/2022/07/16/16505862207763.jpg)

### 过渡动画 class   

实现过渡动画，常用的 6 个 class：   

没有给 transition 组件添加 name 属性的时候，那么所有的 class 是以 v- 作为默认前缀。    

![](https://img.penghh.fun/2022/07/16/16505869370996.jpg)

Vue 官方提供的示意图，帮助我们理解内置动画的原理：   

![](https://img.penghh.fun/2022/07/16/16505872101269.jpg)



### 过渡 CSS 动画     

前面是通过 transition(过渡) 来实现动画效果，另外我们也可以通过 animation 来实现。  

过渡动画 transition 本质上是定义了两帧，第一帧是透明度为 0，第二帧是透明度为 1，即从透明度为 0 到透明度为 1。     

![](https://img.penghh.fun/2022/07/16/16568600121665.jpg)

使用 animation 动画，不需要像前面使用 transition 过渡动画那样定义 v-enter-from 和 v-leave-to，**只需要定义 v-enter-active 和 v-leave-active**。        

使用 `@keyframes` 定义帧动画，后面的 bounce 是帧动画的名称，可以自定义。   

![](https://img.penghh.fun/2022/07/16/16507014426769.jpg)

过渡动画 transition 和 CSS 动画是可以同时存在的，即一个元素可以同时设置过渡动画和 CSS 动画。

同时设置了过渡动画和 CSS 动画，如果两个动画的时长是不一致的，就会出现某一个动画执行结束时，另外一个动画还没有结束，导致最终呈现的动画出现一些问题。  

这时我们可以在 transition 组件中添加一个额外的属性 type，指定时长更长的动画，保证添加的两个动画可以正常结束。   

![](https://img.penghh.fun/2022/07/16/16568919118991.jpg)



transition 组件使用 duration 属性来指定过渡的时间，duration 可以传入两种类型的值，一个是 number 数字类型，一个是对象类型。  

使用数字类型时，duration 属性前面需要加多一个英文的冒号: ，表示值为 number 类型而非 string 类型。   

设置了 duration 属性后，在 `<style>` 标签中设置的过渡时间就会失效。    

duration 设置的时长单位为毫秒。   

![](https://img.penghh.fun/2022/07/16/16507054945056.jpg)

### transition 过渡的 mode 属性  

点击按钮实现两个元素来回切换，需要设置一个 mode 属性，否则一个元素消失的同时，另外一个元素会进来，两个动画的执行没有先后顺序，整体的动画会看起来很丑。        

mode 有两个值，一个是 out-in，一个是 in-out，前者是上一个元素消失后，下一个元素才出来；后者是下一个元素进来之后，上一个元素才消失。    

![](https://img.penghh.fun/2022/07/16/16507064244859.jpg)

上面两个 h2 元素切换的例子，也可以把两个 h2 元素替换为两个组件：  

**组件间的切换需要用到动态组件**，使用 Vue 内置的 component 组件，is 绑定一个三元表达式。   


![](https://img.penghh.fun/2022/07/16/16507081389316.jpg)

### apear 初次渲染    

默认情况下，初次渲染（刷新页面的时候）是不会有动画的，如果希望初次渲染也有动画，可以在 transition 组件中添加一个 appear 属性。   

这里的 appear 是 `:appear="true"` 的缩写。  

![](https://img.penghh.fun/2022/07/16/16507191568653.jpg)

### 第三方动画库 `animate.css`   

跨平台：做了很多 CSS 的兼容。   

如何使用 Animate 库呢？   

* 安装 `animate.css` 库    
* 导入 `animate.css` 库的样式    
* 使用 animation 动画或者 animate 提供的类   

![](https://img.penghh.fun/2022/07/16/16507197233393.jpg)

安装动画库：  

打开终端，在项目根目录下输入

```
npm install animate.css
```

安装好之后，在入口文件 `main.js` 中导入 `animate.css`。   

![](https://img.penghh.fun/2022/07/16/16570402403705.jpg)

`animate.css` 库有两种用法：   

* 在 v-enter-active 和 v-leave-active 中配置 animation 名称、时长和动画模式（帧动画）     
* 直接使用库定义好的 class         


如果是第一种用法，在 `App.vue` 中给 transition 组件添加 name 属性，在样式部分配置 v-enter-active 和 v-leave-active，设置 animation 帧动画。 

![](https://img.penghh.fun/2022/07/16/16570424603009.jpg)

帧动画的名称或效果，可从网站 `https://animate.style/` 查看，点击对应的动画名称，可以预览动画的效果。  

确认想要使用的效果，可以**复制动画的名称**，并在 `App.vue` 的样式，给帧动画设置动画时长和动画模式。      

![](https://img.penghh.fun/2022/07/16/16570423814544.jpg)

第二种使用 `animate.css` 库的方法：直接使用动画库帮我们定义好的 class。     

通过这种方式使用 `animate.css` 库，我们不需要给 transition 组件添加 name 属性。   

点击动画名称右侧的「复制」按钮，可以复制动画对应的 class 类名。       

![](https://img.penghh.fun/2022/07/16/16509009718186.jpg)

将 class 分别粘贴到 `enter-active-class` 和 `leave-active-class`，就可以应用动画了。  

不过每一个动画的前面都要加多一个 `animate__animated`，才能真正让动画生效。  

![](https://img.penghh.fun/2022/07/16/16509010733571.jpg)

之所以每个类名前面要加上 `animate__animated`，是因为在 `animate.css` 库中，这个类名**定义了动画的持续时间**，有了时间，动画才能真正生效。   

![](https://img.penghh.fun/2022/07/16/16570436479959.jpg)

如果想对 `animate.css` 库中的动画进行反转，可以在 `App.vue` 的样式部分，给动画的类名添加 animation-direction 属性，设置反转。  

![](https://img.penghh.fun/2022/07/16/16570438163522.jpg)


如果同时存在自定义的 class，以及 name 定义的 class，那么**自定义 class 的优先级是更高的**。  

![](https://img.penghh.fun/2022/07/16/16509013060383.jpg)


### 认识 gsap 库   

gsap 是一个使用 JS 编写的动画库。   

之所以要使用 JS 动画库，是因为前面介绍的 CSS 动画库**不够灵活**，在涉及样式的值需要发生变化，或是比较复杂的动画时，CSS 动画库用起来就不够方便。   

![](https://img.penghh.fun/2022/07/16/16509016069178.jpg)

安装 gsap 库的命令：   

```
npm install gsap   
```

在 `App.vue` 的 script 标签中导入 gsap 库：   

```
import gsap from 'gsap';   
```

![](https://img.penghh.fun/2022/07/16/16516524871642.jpg)

transition 组件在帮助我们执行动画的时候，它其实会回调很多动画生命周期的钩子。    

![](https://img.penghh.fun/2022/07/16/16509899632408.jpg)



![](https://img.penghh.fun/2022/07/16/16509912640720.jpg)

before-enter 相当于动画进入之前：v-enter-from    
enter 相当于动画进入之时：v-enter-active  
after-enter 相当于动画进入之后：v-enter-to   

before-leave 相当于离开之前：v-leave-from  
leave：v-leave-active   
after-leave：v-leave-to     

![](https://img.penghh.fun/2022/07/16/16570680847413.jpg)

在这些钩子中使用 gsap 库，gsap 库常用的两个方法——from 和 to。    


使用 gsap 库对应的 api：  

传入钩子 `enter(){}` 的 el，是 element 的缩写。   

`gsap.from()` 需要传入两个参数，一个是 target，指定我们要把动画设置在哪个元素上；一个是对象。    


![](https://img.penghh.fun/2022/07/16/16516527417648.jpg)

gsap 官网提供的 JS 和 CSS 对照表：  

左侧是 gsap 库中 JS 的写法，右侧是对应的 CSS 样式含义。       

![](https://img.penghh.fun/2022/07/16/16571299889315.jpg)

在使用 js 动画的时候，一般会给组件添加 `:css="false"`，让 Vue 跳过 CSS 的检测，让我们原先给组件添加的 CSS 动画失效。    

![](https://img.penghh.fun/2022/07/16/16571303073283.jpg)


### 小案例：gsap 实现数字滚动递增动画    

这个动画，在很多后台管理系统中会用到。   

监听器 watch，用来监听 counter 的变化，当 counter 发生变化，showNumber 也会随之发生变化，不过因为我们给 showNumber 设置了过渡时间 duration，它会随着时间流逝一点点地变成和 counter 一样的值，这样就实现了数字滚动递增动画的效果。   

这里还有一个小细节，数字滚动变化的时候，它不是整数而是小数，为了得到整数，可以在后面加多 toFixed(0)，保证取整。    

注意：这里用到的计算属性并不是必须的。   

![](https://img.penghh.fun/2022/07/16/16516539070525.jpg)


### 列表的过渡   

使用 Vue 内置的 `<transition-group>` 组件。      

![](https://img.penghh.fun/2022/07/16/16572149100850.jpg)

动画案例中讲到了一个类似算法的东西：如何实现在数组中随机插入一个数字？   

需要生成一个随机数，同时用到数据的 splice() 方法。     

`Math.random()` 可以随机生成 [0,1) 区间的小数。    

`Math.random()` 乘以数组的长度 length=10，可以得到 [0,10) 之间的随机数。  

再在最后**向下取整** `Math.floor(Math.radom() * this.number.length)`，可以得到 0 到 10 之间的整数，不包括 10，这些数字其实就对应数组的**索引值**，后面结合数组的 splice() 方法，在数组中随机的位置插入数字。        

![](https://img.penghh.fun/2022/07/16/16573392061241.jpg)

插入的数字会从下而上，删除的数字会从上而下，与此同时，如果我们想让数字在（左右）移动时，也能有动画，该怎么做呢？   

![](https://img.penghh.fun/2022/07/16/16573397728519.jpg)

可以在样式中多增加一个 v-mode，过渡 transition 设置的是位移动画。    

![](https://img.penghh.fun/2022/07/16/16573405656930.jpg)


当然，即便在样式中加上 v-move，在移除数字的时候，向左移动的数字还是没有动画的，这是因为被移除的数字，它是块级元素，在移除的过程中依旧会**占据位置**，导致右侧的数字想移动的时候被「挡」住了，只能等到数字移除后，一瞬间跳过去，就看不到我们想要的**慢慢向左的移动动画**。    

为了解决这个问题，我们可以额外给 v-leave-active 增加一个绝对定位，由于绝对定位的元素会脱离标准流，不会占据位置，这样就让能右侧的数字可以正常向左👈移动了。   


![](https://img.penghh.fun/2022/07/16/16573403560090.jpg)

### 打乱数字   

给现有的动画案例，再添加一个额外的效果：**打乱数组中所有元素的位置**，也叫洗牌，英文是 shuffle。  

这需要用到一个第三方库 **lodash**，使用 npm 安装 lodash 库。   

```
npm install lodash    
```    

安装之后，在 js 部分导入 lodash 库：   

```
import _ from 'lodash';   
```

使用 _ 中的 shuffle() 方法，传入数组，将得到的值重新赋值给数组，就能打乱数组中元素的位置。   

![](https://img.penghh.fun/2022/07/16/16573414229513.jpg)

### 列表的交错过渡动画案例


![](https://img.penghh.fun/2022/07/16/16573464340722.jpg)


当我们在 input 输入框中输入英文字母（关键词 keyword）时，下面的无序列表只显示包含英文字母的文本。 

为实现过滤的效果，我们要用到 filter 高阶函数。 

![](https://img.penghh.fun/2022/07/16/16574475189848.jpg)

其中的 indexOf() 可以返回我们输入的英文字母在字符串中首次出现的位置。  

![](https://img.penghh.fun/2022/07/16/16574473537414.jpg)

这个案例中，制作动画用到了生命周期钩子，`beforeEnter() {}` 只需要传入 el 参数，不像 enter 和 leave 钩子需要传入 done 参数。     

![](https://img.penghh.fun/2022/07/16/16574481638520.jpg)



 


