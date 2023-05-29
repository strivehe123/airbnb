# node是什么
## node.js是基于v8引擎来执行js代码,但不仅仅只有v8引擎
### v8引擎可以嵌入到任何c++应用程序中,无论是Chrome还是node.js,事实上都是嵌入了v8引擎来执行JavaScript代码
### 但是在Chrome浏览器中还需要解析html代码 渲染css 支持浏览器提供的api 浏览器的事件循环
### node.js 文件读写 网络io 加密/解密 压缩/解压缩等操作
## 01 require 导入node内置模块
### const path = require('path')
### console.log(path)
### const http = require('http')
### console.log(http)
## 02 require查找文件
### require 参数 ./ ../   X 
### 01 查看文件 X
### 02 查找文件  [X.js,X.json,X.node]
### 03 查找文件夹 X
### [X/index.js,X/index.json,X/index.node]
## 03 名称不是路径,也不是内置模块
### const why=require('why')
### 在本文件夹下 一个文件夹 node_modules/why/index/js
# 结论二 node 在引入模块的时候 会 执行一次
## module.exports={loaded:false}
## 第一次引入的时候会执行 第二次引入的时候  loaded:true  然后不会第二次执行
## 结论三 如果存在循环引入的话  node采用的是 深度优先策略