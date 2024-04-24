### Node.js  

##### --是什么

- Node.js是一个基于V8 javascript引擎的javascript运行时环境
- chrome和Node.js底层是C++写的，而C++可以嵌入V8,从而通过V8实现运行js代码

##### --应用场景

- 前端开发的库以node包的形式进行管理
- 越来越多的公司用node.js作为web服务器开发，中间件，代理服务器
- 大量项目需要借助node.js完成前后端渲染的同构应用
- 资深前端工程师使用js为项目编写脚本

### 模块化

- 目的是将程序划分为一个一个小的结构
- 这个结构中的逻辑有自己的作用域，定义变量名词不会影响到其他的结构
- 这个结构可以将自己希望暴露的变量，函数，对象等导出给其结构使用
- 也可以导入另外结构中的变量，函数，对象等

--**模块的加载过程**

- 模块在第一次引入时，模块中的js代码会被执行一次
- 模块被多次引入，会缓存，最终只加载一次
- 如果有循环引入时，会优先执行深度的函数

### npm配置文件 

- 项目中的`package.json`是配置文件
- 记录项目的**名称，版本号，项目描述**等

##### --如何得到？

-手动从0创建项目，npm init -y

-通过脚手架创建项目

##### --常见属性

- name项目名称（必须）

- version顶目版本号（必须）
- description描述信息
- author作者信息
- license开源协议
-  private记录是否为私有，当值为true, npm是不能发布的
- main设置程序入口
- scripts用来配置脚本命令，以键值对的形式存在
- dependencies属性，指定无论开发环境还是生成环境都需要依赖的包，npm install
- devDependencies与之对应，是在生成环境中不需要的，如webpack，babel等
- npm install webpack --save-dev，将其安装到devDependencies属性中
- peerDependencies为对等依赖，也就是你依赖一个包，它是必须以另外一个宿主包为前提+，
- engines指定Node和NPA的版本号，在安装过程会先检查对应的引擎版本，如果不符合会报错+ 
- brouserslist属性用于配置打包后的Davascript测 览器的兼容情况

##### --安装npm有两种情况： 

- 全局安装：`npm install webpack -g` 

- 局部安装：`npm install webpack` 

  ### 认识Plugin

- Loader是用于**特定的模块类型**进行转换；

- Plugin可以用于执行**更加广泛的任务**，比如打包优化，资源挂你，环境变量注入等

  ### 搭建本地服务器

  目前开发代码，为了允许需要有两个操作：
   操作一：`npm run build`，编译相关代码
   操作二：通过 live server 或者直接通过浏览器，打开index.html代码，查看效果
  这个过程经常操作会影响开发效率，我们希望可以做到，当文件发生变化的时候，可以自动完成编译和展示
  为了完成自动编译，webpack提供了几种可选的方式
   \- `webpack watch mode`
   \- `webpack-dev-server`
   \- `webpack-dev-middleware`

  ### 认识模块热替换（HMR）

  ##### 什么是HMR？

   HMR的全称是Hot Module Replacement，翻译为模块热替换
   模块热替换是指在 应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个页面
  HMR通过如下几种方式，来提高开发的速度：
   不重新加载整个页面，这样可以保留某些应用程序的状态不丢失
   只更新需要变化的内容，节省开发的时间
   修改了css、js源代码，会立即在浏览器更新，相当于直接在浏览器的devtools中直接修改样式

  ##### 如何使用HMR？

   默认情况下，webpack-dev-server已经支持HMR，我们只需要开启即可（默认已经开启）
   在不开启HMR的情况下，当我们修改了源代码之后，整个页面会自动刷新，使用的是live reloading