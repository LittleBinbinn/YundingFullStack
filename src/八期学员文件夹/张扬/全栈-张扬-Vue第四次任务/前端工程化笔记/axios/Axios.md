# Axios解析

## 一、JSON-Server

- 安装：`npm install -g json-server`

- 进行相关配置：

  - ```json
    //db.json
    {
        'post':[
            {'id':1,'title':'json-server','author':'typicode'}
        ],
        'comments':[
            {'id':1,'body':'some comment','postId':1}
        ],
        'profile':{'name':'typicode'}
    }
    ```

- 启动服务：`json-server --watch db.json`

## 二、axios源码解析

### 1.源码目录

~~~js
dist//项目输出目录
lib//项目源码目录
——adapters//定义请求的适配器xhr、http
————http.js//实现http适配器（包装http包）
————xhr.js//实现xhr适配器（包装xhr对象）
——cancel//定义取消功能
——core//一些核心功能
————Axios.js//axios的核心主类
————dispatchRequest.js//用来调用http请求适配器方法发送请求的函数
~~~

### 2.源码构成

~~~js
//axios.js
'use strict'
//axios入口文件

//引入文件
var utils = require('./utils')
//引入绑定函数 创建函数
var bind = require('./helpers/bind')//创建函数的
//引入Axios主文件
var Axios = require('./core/Axios')
//引入合并配置的函数
var mergeConfig = require('./core/mergeConfig')
//导入默认配置
var defaults = require('./defaults')
~~~

### 3.模拟搭建

~~~js
//构造函数
function Axios(config){
    //初始化
    this.defaults = config//为了创建default默认属性
    this.intercepters = {
        request:{},
        response:{}
    }
}
//原型添加相关的方法
Axios.prototype.request = function(config){
    consol;e.log(config.method)
}
Axios.prototype.get = function(config){
    return this.request({method:'GET'})
}
Axios.prototype.post = function(config){
    return this.request({method:'POST'})
}
//声明函数
function createInstance(config){
    //实例化一个对象
    //context.get()可以调用 但是不能单独调用context()
    let context = new Axios(config)
    //创建请求函数
    //instance是一个函数，并且可以instance({})
    let instance = Axios.prototype.request.bind()
    //将Axios.prototype对象中的方法添加到instance函数对象中
    Object.values(Axios.prototype).forEach(key=>{
        instance[key] = Axios.prototype[key].bind(context )
    })
    //为instance函数对象添加属性default和interceptors
    Object.keys(context).forEach(key=>{
        instance[key] = context[key]
    })
}
let axios = createInstance({method:'GET'})
~~~

### 4.请求发送过程

~~~js
function Axios(config){
    this.config = config
}
Axios.prototype.request = function(config){
    //发送请求
    //创建一个promise对象
    let promise = Promise.resolve(config)
    //声明一个数组
    let chains = [dispatchRequset,undefined]//undefined占位
    //调用then方法指定回调
    let result = promise.then(chains[0],chains[1])
    //返回promise结果
    return result
}
//dispatchRequest函数
function dispatchRequest(config){
    return xhrAdapter(config).then(response=>{
        //响应的结果进行转换处理
        return response
    },error=>{
        throw error
    })
}
//adapter适配器
function xhrAdapter(config){
    //调用适配器发送请求
    return new Promise((resolve,reject)=>{
        //发送ajax请求
        let xhr = new XMLHttpRequest()
        //初始化
        xhr.open(config.method,config.url)
        //发送
        xhr.send()
        //绑定事件
        xhr.onreadystatechange = function(){
            if(xhe.readyState === 4){
                //判断成功的条件
                if(xhr.status >= 200 && xhr.status < 300){
                    //成功的状态
                    resolve({
                        //配置对象
                        config:config,
                        //响应体
                        data:xhr.response,
                        //响应头
                        headers:xhr.getAllResponseHeaders,
                        //xhr 请求对象
                        request:xhr,
                        //响应状态码
                        status:xhr.status,
                        //响应状态字符串
                        statusText:xhr.statusText
                    })
                }else{
                    //失败的状态
                    reject(new Error)
                }
            }
        }
    })
}
//创建axios函数
let axios = Axios.prototype.request.bind()

axios({
    method:'GET',
    url:'http://localhost:3000/comments',
}).then(response=>{
    console.log(response)
})
~~~

### 5.拦截器

~~~js
//构造函数
function Axios(config){
    this.config = config
    this.interceptors = {
        request:new InterceptorManager(),
        response:new InterceptorManager()
    }
}
//拦截器管理器构造函数
function InterceptorManager(){
    this.handlers = []
}
//拦截管理器构造函数
InterceptorManager.prototype.use = function(fulfilled,rejected){
    this.handlers.push({
        fulfilled,rejected
    })
}
//发送请求
Axios.prototype.request = function(config){
    //创建一个promise对象
    let promise = Promise.resolve(config)
    //创建一个数组
    const chains = [dispatchRequest,undefined]
    //处理拦截器
    //请求拦截器 将请求拦截器的回调 压入到chains的前面
    this.interceptor.request.handlers.forEach(item=>{
        chains.unshift(item.fulfilled,item.rejected)
    })
    //响应拦截器
    this.interceptor.response.handlers.forEach(item=>{
        chains.push(item.fulfilled,item.rejected)
    })
    //遍历
    while(chains.length > 0){
        promise = promise.then(chains.shift(),chains.shift())
    }
    return promise
}
//发送请求
function dispatchRequest(config){
    //返回一个promise实例
    return new Promise((resolve,reject)=>{
        resolve({
            status:200,
            statusText:'ok',
        })
    })
}

//创建实例
let context = new Axios({})
//创建axios函数
let axios = Axios.prototype.request.bind(context)
//将属性添加到axios上
Object.keys(context).forEach(key=>{
    axios[key] = context[key]
})
~~~

### 6.模拟取消

~~~js
//构造函数
function Axios(config){
    this.config = config
}
//原型request
Axios.prototype.request = function(){
    return dispatchRequest(config)
}
//dispatchRequest
function dispatchRequest(config){
    return xhrAdapter(config)
}
//xhrAdapter
function xhrAdapter(config){
    //发送Ajax请求
    return new Promise((resolve,reject)=>{
        //实例化对象
        const xhe = new XMLHttpRequest()
        //初始化
        xhr.open(config.method,config.url)
        //发送
        xhr.send()
        //处理结果
        xhr.onreadystatechange = function(){
            if(xhe.readyState === 4){
                //判断结果
                if(xhr.status >= 200 &&xhr.status <300){
                    resolve({
                        status:xhr.status,
                        statusText:xhr.statusText
                    })
                }else{
                    reject(new Error('error'))
                }
            }
        }
        //关于取消请求的处理
        if(config.cancelToken){
            //对cancelToken对象身上的promise对象指定成功的回调
            config.cancelToken.promise.then(value=>{
                xhr.abort()
                //将整体结果设置为失败
                reject(new Error())
            })
        }
    })
}
//创建axios函数
const context = new Axios({})
const axios = Axios.prototype.request.bind(context)
//CancelToken构造函数
function CancelToken(executor){
    //声明一个变量
   	var resolvePromise
    //为实例对象添加属性
    this.promise = new Promise((resolve)=>{
        //将resolve赋值resolvePromise
        resolvePromise = resolve
    })
    //调用executor函数
    executor(function(){
        //执行resolvePromise函数
        resolvePromise()
    })
}
~~~

