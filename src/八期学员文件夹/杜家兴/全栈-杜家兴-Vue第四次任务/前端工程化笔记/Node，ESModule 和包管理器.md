# >什么是模块化开发？

- 事实上模块化开发最终的目的是将程序划分成**一个个小的结构**
- 这个结构中编写属于**自己的逻辑代码**，有**自己的作用域**，定义变量名词时不会影响到其他结构
- 这个结构可以将自己希望暴露的**变量，函数，对象等导出**给其结构使用
- 也可以通过某种方式，**导入**另外结构中的**变量，函数，对象**等

**上面说到的结构，就是模块；按照这种结构划分开发程序的过程，就是模块化开发的过程**

# `exports`导出

- `export`是一个对象，我们可以在这个对象中添加很多个属性，添加的属性会导出；

  ![image-20240413133919080](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240413133919080.png)

- 另一个文件中可以导入：

  <img src="https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240413133942156.png"/>

- 上面的完成了什么操作？
  - 意味着main中的**bar变量等于exports对象**
  - 也就是require通过各种查找方式，最终找到了exports这个对象
  - 并且将这个**exports对象赋值给了bar变量**
  - **bar变量就是exports对象了**

# `module.exports`导出

- `CommonJS`是没有**`module.export`**的概念的
- 但是为了实现模块的导出，**Node中使用的是`Moudle`的类，每一个模块都是`Moudle`的一个实例，也就是`moudle`**
- 所以在Node中真正用于导出的**其实不是exports，而是`module.export`**
- 因为**module才是导出的真正实现者**

**为什么`exports`也可以导出？**

- 因为**module对象的export属性是export的引用**
- 也就是说**`module.export` = `exports` = `main`中的`bar`**

# `require`细节

- `require`是一个函数，用来帮助我们**引入一个文件（模块）中导出的对象**
- 格式`require(xx)`

`require`的查找规则是什么呢？

1. X是一个Node核心模块，比如path，http

   **直接返回核心模块，停止查找**

2. X是以 ./ 或 ../ 或 / 开头

   1. 将X当作一个文件在对应的目录下寻找

      1. 如果有后缀名，按照后缀名查找
      2. 如果没有后缀名，先直接查找文件X，然后查找X.js，然后查找文件X.json，然后查找文件X.node

   2. 没有找到对应文件，将X当作一个目录

      - 查找目录下的index文件

        1. 查找X/index.js文件

        2. 查找X/index.json文件

        3. 查找X/index.node文件

           如果没找到，那么报错 `not found`

   3. 直接就是一个X（没有路径），而且X不是一个核心模块

      - ![image-20240415192840640](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415192840640.png)

# >什么是`ES Module`？

- `ES Module`和`CommonJS`模块化的一些不同：
  - 使用了`import`和`export`关键字
  - 采用**编译时的静态分析**，并且加入了**动态引用**的方式
- `ES Module`模块采用`export`和`import`关键字实现模块化
  - `export`负责将模块内的内容导出
  - `import`负责从其他模块导入

![image-20240415193524530](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415193524530.png)

# `export`关键字

- `export`关键字将一个模块中的**变量，函数，类**等导出

- 我们希望将其他的内容也导出，有如下方式：

  - 在语句声明之前加上`export`关键字

  - 将所有需要导出的标识符，放到`export`后的`{}`中

    ![image-20240415194054371](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415194054371.png)

  - 导出的时候给标识符起一个别名

    - 通过`as`关键字

    ![image-20240415194253408](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415194253408.png)

    ![image-20240415194405326](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415194405326.png)

# `import`关键字

- `import`关键字负责从另外一个模块中导入内容

- 导入的方式：

  - ```js
    import {标识符列表} from '模块'
    ```

  - 通过`as`起别名

  - 通过`*`将模块功能放到一个模块功能对象上

# `default`用法

- 默认导出（default export）
  - 默认导出`export`时可以不需要指定名字
  - 在导入时不需要使用`{}`,并且可以自己指定名字
  - 方便了我们和现有`CommonJS`等规范互相操作

**在一个模块中只能有一个默认导出**

# 关于`import`函数

- 通过`import`加载一个模块，不可以将其放入逻辑代码
- 甚至拼接路径的写法也是错误的

![image-20240415195926634](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415195926634.png)

![image-20240415195940928](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415195940928.png)

# >包管理工具

# —npm工具

![image-20240415200145008](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415200145008.png)

# npm配置文件

- 项目中的`package.json`是配置文件
- 这里会记录项目的**名称，版本号，项目描述**等
- 也会记录项目所依赖的**其他库信息**和**依赖库的版本号**

如何得到？

- `npm init -y`手动从0开始创建
- 通过脚手架创建

常见属性：

```
name项目名称（必须）
version项目版本号（必须）
description描述信息
author作者信息
license开源协议

private记录是否为私有，当值为true，npm是不能发布的

main设置程序入口

scripts用来配置脚本命令，以键值对的形式存在
配置后我们可以使用 npm run 命令执行的 key 执行这个命令

dependencies属性，指定无论开发环境还是生成环境都需要依赖的包
devDependencies与之对应，是在生成环境中不需要的，这个时候我们就会使用
npm install webpack --save-dev，将其安装到devDependencies属性中

peerDependencies为对等依赖，也就是你依赖一个包，它是必须以另外一个宿主包为前提

engines指定Node和NPM的版本号，在安装过程会先检查对应的引擎版本，如果不符合会报错

browserslist属性用于配置打包后的Javascript浏览器的兼容情况
```

![image-20240415201426366](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415201426366.png)

# 关于版本号

![image-20240415203129753](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415203129753.png)

# `npm install`命令

安装npm有两种情况：

- 全局安装：`npm install webpack -g`
- 局部安装：`npm install webpack`

全局安装

- 全局安装时直接将某个包安装到全局
- 比如全局安装yarn

![image-20240415204811566](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415204811566.png)

局部安装

![image-20240415204848281](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415204848281.png)

# package-lock.json

![image-20240415204952494](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415204952494.png)

# 其他命令

- 卸载某个依赖包

  ```
  npm uninstall package
  npm uninstall package --save-dev
  npm uninstall package -D
  ```

- 强制重新build

  ```
  npm rebuild
  ```

- 清除缓存

  ```
  npm cache clean
  ```

# —yarn工具

![image-20240415205433848](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415205433848.png)

# —cnpm工具

![image-20240415205515211](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415205515211.png)

# —npx工具

- npx比较常用的时使用它来调用项目中的某个模块的指令

- 如何使用局部的webpack，常见两种方式：

  1. 明确查找到node_module下面的webpack

  2. 在scripts定义脚本，来执行webpack

     ![image-20240415213616093](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415213616093.png)

# —pnpm工具

![image-20240415213907680](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415213907680.png)

# pnpm的存储store

![image-20240415214212115](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415214212115.png)