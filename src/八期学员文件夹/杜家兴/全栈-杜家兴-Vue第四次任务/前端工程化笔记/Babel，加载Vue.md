# 什么是Babel？

- Babel是一个工具链，主要用于旧浏览器或者环境中将ECMAScript 2015+代码转换为向后兼容版本的JavaScript
- 包括：语法转换，源代码转换等

![image-20240416164534265](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416164534265.png)

# Babel命令行的使用

![image-20240416164654249](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416164654249.png)

**插件的使用**

![image-20240416164713945](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416164713945.png)

# Babel的预设preset

![image-20240416165352544](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416165352544.png)

# 关于babel-loader

- 在实际开发中，我们通常会在构建工具中通过配置babel对其进行使用，比如webpack

- 那么我们就需要安装相关的依赖：

  - 如果之前已经安装了@babel/core，就不用再次安装

    ```npm
    npm install babel-loader -D
    ```

    ![image-20240416165712151](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416165712151.png)

# babel-preset

- 我们可以直接给webpack一个preset，webpack会直接根据我们的预设加载对应的插件列表，并且将其传递给babel

- 常见的预设有三个：env，react，TypeScript

- 安装preset-env

  ![image-20240416170246268](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416170246268.png)

![image-20240416170258275](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416170258275.png)

# 编写App.vue代码

对于Vue代码，我们需要合适的Loader来处理（vue-loader）

![image-20240416170550571](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416170550571.png)

然后再webpack的模板规则中进行配置

![image-20240416170635475](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416170635475.png)

然后我们还必须添加@vue/compiler-sfc来对template进行解析

![image-20240416170723420](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416170723420.png)

另外我们还需要配置对于的Vue插件：

![image-20240416170755577](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416170755577.png)

重新打包即可支持App.vue写法

# resolve模块解析

resolve用于设置模块如何被解析：

- 在开发中我们会有各种各样的模块依赖，这些模块可能来自于自己编写的代码，也可能来自第三方库
- presolve可以帮助webpack从每个 require/import 语句中，找到需要引入到合适的模块代码；
- pwebpack 使用 [enhanced-resolve](https://github.com/webpack/enhanced-resolve) 来解析文件路径；

**webpack能解析三种文件路径**

- 绝对路径

- 相对路径

- 模块路径

  ![image-20240416171655259](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416171655259.png)

**确认文件还是文件夹**

- 如果只是一个文件：

  - 如果文件具有拓展名，直接打包文件
  - 否则，将使用resolve.extensions选项作为文件扩展名解析

- 如果是一个文件夹：

  - 会在文件夹中根据resolve.mainFiles配置选项中指定的文件顺序查找

    ![image-20240416172920895](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416172920895.png)

# extensions和alias配置

![image-20240416172957046](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416172957046.png)