# node.js

## node的输入

~~~js
const arg = process.argv[2]
const arg1 = process.argv[3]
console.log(arg,arg1);
~~~

## node的输入

~~~js
console.log("aaa")
~~~

## node中的repl

* node + enter

## node中的全局对象

{ globalThis }

* global
* console
* exports
* module
* require
* ..

### 特殊的全局对象

* __dirname            目录结构
* __filename            目录结构+文件名称

## CommonJs规范

* 模块中要导出的内容  exports
* 模块中要导入的内容  require

~~~js
exports.da = da

const fo = require(' 路径 ')
const {a,b,c} = require(' 路径 ')   解构
~~~

~~~js
const path = require('path')
const http = require('http')


const why = reuqire("why") --找node_modules
~~~

* module.exports导出

~~~js
module.exports.da = da

module.exports  = {
    ..
}

~~~

## ES Module

* export导出
* import导入

~~~js
import {a,b,c} from "address"
import * as fo from "address"
~~~

~~~js
<script ssrc="adddress" type="module"></script>
~~~

### export关键字

~~~js
 export const name = '李杰'
 ..
 
 export {
     ..
 }
~~~

### export和import结合使用

~~~js
import { favourite } from "./demo";
export {
    favourite
}


export {favourite} from "./demo"
~~~

### default用法

* 默认导出(一个模块一个默认导出)

~~~js
function para() {
    return ["word"]
}
export default para

export default function(){
    ..
}
~~~

### import函数

~~~js
const paraPromise = import("./demo.js")
paraPromise.then(res => {
    console.log(res.name,res.age);
})
~~~

## 包管理工具

~~~js
npm install dayjs
const dayjs = require("dayjs")
console.log(dayjs())

//m{
//..
//}
~~~

* package.json配置 npm init -y

  * name  version description anthor

  * license 是开源协议

  * private 是否为私有

  * main 设置程序入口

  * scripts 配置一些脚本命令

    ~~~js
    scripts : {
    "start" : "node ./src/main.js"
    "bulid" : "webpack xxx.js"
    }
    
    npm run start
    ~~~

  * dependencies  生产和开发都依赖

  * devDependencies  开发依赖

    * npm install babel  --save-dev
    * npm install babel  -D
    * npm i babel -D

  * peerDependencies   

  * engines 指定引擎

  * browserslist 设备版

* package_lock.js
  * name  version  looklifeVersion requires

### npm install细节

*  -g 全局

### npm其他命令

* 卸载某个依赖包
  * npm uninstall package
  * npm uninstall package  --save-dev
  * npm uninstall package  -D

* 强制重新build
  * npm rebuild
* 清除缓存
  * npm cache clean

## yarn工具

* npm install yarn -g  全局安装
* yarn add  安装包

## cnpm工具

* npm install -g cnpm --registry=http://registry.npm.taobao.org
* cnpm config get registry # https://r.npm.taobao.org

## npx工具

* npx webpack
* ./project/.bin/webpack --version 局部的webpack
* “script” ：{ “webpack” ： “webpack --version" }
* npx webpack --version

## 发布自己的包

* npm login 登录
* npm publish 发布
* npm unpublish 删除发布的包
* npm deprecate 让发布的包过期

## 硬链接与软链接

* 文件的拷贝
  * win：copy  源文件   文件
  * mac：cp  源文件   文件
* 文件的硬链接
  * win：mklink /H 文件 源文件
  * mac：In 源文件 文件
* 文件的软链接
  * win：mklink  文件 源文件
  * mac：In  -s 源文件 文件

## pnpm命令

* npm install                    pnpm install 
* npm install <pkg>            pnpm add <pkg>
* npm uninstall <pkg>       pnpm remove <pkg>
* npm run <cmd>          pnpm <cmd>
* pnpm store prune 清楚未使用的包，释放空间

## Webpack和打包

### 内置模块path

~~~js
const path = require("path")

const filepath = 'D://js/js.md'

console.log(path.extname(filepath));  //.md
console.log(path.basename(filepath));  //js.md
console.log(path.dirname(filepath));   //D://js
~~~

#### 多个路径拼接

~~~js
const path1 = "adddress1"
const path2 = "adddress2"
console.log(path.join(path1,path2));
~~~

#### 多个路径拼接，最终返回一个绝对路径

* path.resolve(path1,path2)
* 从右向左，形成截止，零被忽略

### 打包

* npx --entry ./src/main.js
* npx webpack --entry ./src/main.js --output--filename bundle.js(之后)
* webpack.config.js

~~~js
const path = require("path")

module.exports = {
    entry :"./src/main.js"
    output :{
    filename:"bundle.js"
    path:path.resolve(dirname,"./build")
}
}

//在src文件下,path为绝对路径
~~~

### css的处理和loader的使用

* css -- xxx.js  --main.js
* npm install css-loader -D
* wk.config.js中加入loader

~~~js
const path = require("path")

module.exports = {
    entry :"./src/main.js"
    output :{
    filename:"bundle.js"
    path:path.resolve(dirname,"./build")
},
    module : {
        rules:[
            {
                //告诉匹配什么文件
                test: /\.css$/,
                use :[
                    {loader:'css-loader'}
                ]
            }
        ]
    }
}
~~~

#### style-loader

~~~js
//与cssloader并列
{loader:"style-loader"}，
{loader:'css-loader'}
~~~

#### postcss-loader

- 插件
  - autoprefixer

~~~js
{
    loader:'css-loader'
    options : {
        postcssOptions:{
            plugins:[
            "autoprefixer"
        	]
        }
    }
}
~~~

* postcss.config.js

~~~js
module export = {
    plugins : [
        "autoprefixer"
    ]
}
~~~

* postcss style  css  less

#### postcss-preset-env

~~~js
module export = {
    plugins : [
        "postcss-preset-env"
    ]
}
~~~



### less文件处理

~~~less
@fontSize:50px
@fontColor:blue
    
    .title {
        font-size:@fontSize;
        color:@fontColor
        }
~~~

* style  css  less

### 图片打包

~~~js
{
    //告诉匹配什么文件
    test: /\.(png|jpe?g|svg|gif)$/,
    type:"asset"
    parser:{
        dataUrlCondition : {
            maxSize: 100 * 1024
        }
    }
    generator:{
        filename:"[name]_[hash:8][ext]"
        //占位符  name：原来图片名称  ext：扩展名
    }
}
~~~

* asset/resource  发送一个单独的文件并导出URL
* asset/inline 导出一个资源的 data URL
* asset 在导出一个URL和发送一个单独文件之间自动选择

### js文件和babel

* npm install babel-loader -D

~~~js
{
    test: /\.js$/,
    use ：[
        {
            loader:"babel-loader",
         	options:{
                plugins:[
                    "@babel/plugin-transform-arrow-functions","@babel/plugin-transform-block-scoping"
                ]
            }
        }
    ]
}
~~~

#### 插件的使用

* npm install @babel/plugin-transform-arrow-functions -D  转换箭头函数
* npm install @babel/plugin-transform-block-scoping -D

#### babel预设

* npm install @babel/preset-env -D

~~~js
module export = {
    presets : [
        "@babel/preset-env"
    ]
}
~~~

### vue文件打包

~~~js
const { VueLoaderPlugin } =require("vue-loader/dist/indes")

{
    test: /\.vue$/,
    loader:"vue-loader"
}
plugins:[
    new VueLoaderPlugin()
]
~~~

### 文件路径的解析

* wk.config.js

~~~js
module exports = {
    resolve : {
        extensions : [".js",".json",".vue"]
        //配置路径别名
        alias:{
        utils:path.resolve(_dirname,"./src/utils")
    }
    }
}
~~~

### 插件

#### CleanWebpackPlugin

~~~js
const {CleanWebpackPlugin} = reqoire ("clean-webpack-plugin")
module exports = {
    plugins:[
        new CleanWebpackPlugin()
    ]
}
~~~

#### HtmlWebpackPlugin

~~~js
const {HtmlWebpackPlugin} = reqoire ("html-webpack-plugin")
module exports = {
    plugins:[
        new HtmlWebpackPlugin({
            title:'电商项目'
            template ： "./index.html"
        })
    ]
}
~~~

#### DefinePlugin

~~~js
const {DefinePlugin} = reqoire ("define-plugin")
module exports = {
    plugins:[
        new DefinePlugin({
            BASE_URL:" './' "
        })
    ]
}
~~~

### 开发模式

- none
- development
- production
- mode：""

### webpack搭建本地服务

* webpack watch mode
* webpack-dev-server(常用)
* webpack-dev-middleware

~~~js
"scripts":{
    "serve":"webpack serve --config wk.config.js"
}
~~~

* npm install webpack-dev-server -D

### HMR

~~~js
module exports = {
    devserver :{
        hot : true
    }
}
~~~

### devServer配置信息

* host设置主机地址
  * 默认为localhost
  * 可以设置为0.0.0.0
