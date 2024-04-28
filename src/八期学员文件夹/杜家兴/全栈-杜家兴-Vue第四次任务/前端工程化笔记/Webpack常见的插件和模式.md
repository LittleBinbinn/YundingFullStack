# 认识Plugin

Loader是用于**特定的模块类型**进行转换；

Plugin可以用于执行**更加广泛的任务**，比如打包优化，资源挂你，环境变量注入等

# CleanWebpackPlugin

这个插件可以帮我们在打包的时候删除dist文件夹

```
npm install clean-webpack-plugin -D
```

安装后在插件中配置

![image-20240416173848324](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416173848324.png)

# HtmlWebpackPlugin

- 我们的HTML文件是编写在根目录下的，但是最终打包的dist文件夹中 并没有index.html文件
- 在进行项目部署的时候，必然也是需要有对应的入口文件index.html
- 所以我们也需要对index.html进行打包处理

这就需要使用另一个插件**HtmlWebpackPlugin**

```
npm install html-webpack-plugin -D
```

![image-20240416174419680](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416174419680.png)

# 自定义HTML模板

- 如果我们想在直接的模块中加入一些比较特别的内容：
  - 比如添加一个`<noscript></noscript>`标签，在用户的JavaScript被关闭的时候，给与响应提示
  - 比如在开发vue或者react项目的时候，我们需要一个可以挂载后续组件的根标签

![image-20240416174920579](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240416174920579.png)

# 自定义模板数据填充

上面的语法中，**`<% 变量 %>`**，这个就是**EJS模块填充数据**的方式

在配置HtmlWebpackPlugin的时候，我们添加如下配置：

- template：指定我们要使用的模块所在的路径
- title：在进行htmlWebpackPlugin.options.title读取时，就会读到该信息

![image-20240417175244311](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240417175244311.png)

# 关于DefinePlugin

![image-20240417175456314](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240417175456314.png)

在这时我们就需要DefinePlugin插件

- DefinePlugin允许在编译的时候创建配置的全局变量，是一个webpack内置的插件（不需要单独安装）

  ![image-20240417175715262](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240417175715262.png)

这个时候就可以正常编译template了

# Mode配置

![image-20240417180125820](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240417180125820.png)