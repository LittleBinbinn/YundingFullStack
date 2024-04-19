# 内置模块path

1. path模块用于对路径和文件进行处理，提供了好多好用的方法

2. 我们知道在 Mac OS，Linux和window上的路径是不一样的

   ![image-20240415215755329](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415215755329.png)

# path常见的API

- 从路径中获取信息
  - `dirname`：获取文件的父文件夹
  - `basename`：获取文件名
  - `extname`:获取文件拓展名
- 路径的拼接：`path.join`
  - 如果我们希望将多个路径进行拼接，但是不同的操作系统可能使用的是不同的分隔符
  - 这个时候我们就可以使用`path.jion`函数
- 拼接绝对路径：`path.resolve`
  - `path.resolve()`方法会把一个路径或着路径片段的序列解析为一个绝对路径
  - 给定的路径序列是从右往左被处理的，后面每个path被一次解析，直到构造完成一个绝对路径
  - 如果在处理完所有给定的path的段之后，还没有生成绝对路径，则使用当前目录
  - 生成的路径被规范会并删除尾部斜杠，零长度path段被忽略
  - 如果没有path传递段，`path.resolve()`将返回当前工作目录的绝对路径

![image-20240415235454755](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240415235454755.png)

# 什么是Webpack？

![image-20240416000734192](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416000734192.png)

webpack是一个**静态的模块化打包工具**，为现代的JavaScript的应用程序

![image-20240416000611337](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416000611337.png)

# Webpack的使用前提和安装

**Webpack的运行是依赖Node环境的，所以我们电脑上必须有Node环境**

- 所以我们需要先安装Node.js，并同时安装npm

webpack的安装主要分为两个：webpack，webpack-cli

这俩的关系：

![image-20240416001217564](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416001217564.png)

# 创建局部的webpack

1. 创建`package.json`文件，用于管理项目的信息，库依赖（npm init）
2. 安装局部的webpack（npm install webpack webpack-cli -D）
3. 使用局部的webpack（npx webpack）
4. 在`package.json`中创建scripts脚本，执行脚本打包即可（npm run build）

# 关于css-loader

![image-20240416001924109](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416001924109.png)	如何使用这个loader来加载css文件？

- 内联方式（使用较少，不方便管理）

  - 在引入的样式前加上使用的loader，并且使用！分割

    ![image-20240416002124462](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416002124462.png)

- CLI方式

  - 在webpack5中已经没有--module-bind
  - 在实际中也少用，不方便管理

- 配置方式

  - 配置方式表示的意思是在我们的**webpack.config.js**文件中**写明配置信息**

    - module.rules中允许我们配置多个loader（因为我们也会继续使用其他的loader，来完成其他文件的加载）；
    - 这种方式可以更好的表示loader的配置，也方便后期的维护，同时也让你对各个Loader有一个全局的概览；

  - module.rules的配置：

    ![image-20240416002451897](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416002451897.png)

![image-20240416002505634](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416002505634.png)

# 关于style-loader

- 因为css-loader知识负责将.css文件进行解析，并不会将解析之后的css插入页面
- 如果我们希望再完成插入style的操作，那么我们还需要另外一个loader，style-loader

![image-20240416002708698](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416002708698.png)

# 关于less-loader

- 在开发中，我们可能会使用less，sass，stylus的预处理器编写css样式
- 如何让我们的环境支持这些预处理器？
  - 首先需要确定，less，sass等编写css需要通过工具转换成普通的css

![image-20240416110916490](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416110916490.png)

我们可以使用less工具来完成编译转换：

```
npm install less -D
```

```
npx lessc ./src/csstitle.less/ title.css
```

但是在项目中我们会编写大量的css，它们如何可以自动转换？

- 这个时候我们就可以使用less-loader，来自动使用less工具转换less到css

  ```
  npm install less-loader -D
  ```

  

![image-20240416111305376](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416111305376.png)

# PostCSS工具

- PostCSS是一个通过JavaScript来转换样式的工具
- 这个工具可以帮助我们进行CSS的转换和适配，比如自动添加浏览器前缀、css样式的重置
- 但是实现这些功能，我们需要借助于PostCSS对应的插件

![image-20240416111512559](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416111512559.png)

# 关于postcss-loader

  我们可以借助于构建工具：

- 在webpack中使用postcss就是使用postcss-loader来处理的

安装postcss-loader

```
npm installpostcss-loader-D
```

![image-20240416130634094](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416130634094.png)

# postcss-preset-env

![image-20240416130746416](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416130746416.png)

# 关于asset module type

- 从webpack5开始 有了asset module type也叫作资源模块类型，可以替代之前的一些loader

![image-20240416161531357](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416161531357.png)

**asset module type的使用**

加载图片的时候 ，我们可以用下面的方式

```js
Rule {
    text: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
},
```

但是，如何自定义文件的输出路径和文件名呢？

- 方式一：修改output，添加assetModuleFilename属性
- 方式二：在Rule中，添加一个generator属性 ，并设置filename

**一些常用的placeholder**

- `[ext]`：处理文件的扩展名
- `[name]`：处理文件的名称
- `[hash]`：文件的内容，使用MD4的散列函数处理，生成一个128位的hash值（32个十六进制）

# url-loader的limit效果

- 在开发中我们一般会将较小的图片进行转换base64和页面一起被请求，减少不必要的请求过程，这个过程会增加图片的大小
- 比较大的图片一般直接通过http请求会更有效率

![image-20240416163957850](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416163957850.png)