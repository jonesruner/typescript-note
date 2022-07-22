:1234: 已学习 [bilibili [李力超老师] 课程地址](https://www.bilibili.com/video/BV1Xy4y1v7S2?p=1)

⭐⭐⭐
## 概述
1. TypeScript 增加了什么？ 🔰
   1. 类型检测
   2. 支持Es新特性
   3. 丰富的配置项
   4. 添加ES不具备的新特性
2. TypeScript 环境
   1. 全局安装 **TypeScript**
        ```**shell**
        npm i typescript -g
        ```
   2. 创建一个ts文件
   3. 使用tsc对ts文件进行编译
        ```shell
        tsc *.ts  # 输入命令后 会生成一个 *.js 文件
        ```
⭐⭐⭐
## 基本类型 (p1-p5)
<i>这里主要对照代码，方便学习</i>
![](2022-07-21-00-33-08.png)
+ [基础试探-类型定义](./begin/basic.ts)
+ [字面量定义-类型定义](./begin/2_type.ts)
+ [(对象、函数、数组、枚举)-类型定义](./begin/2_type.ts)

![](2022-07-21-00-10-39.png)

小型试探，发现有报错了。但是编译仍然会通过。

![](./2022-07-20-23-29-11.png)
![](./2022-07-20-23-39-29.png)
****
神奇的地方。

![](2022-07-20-23-59-47.png)
 
## 编译选项 🎰
开启监视模式
```shell
tsc app.js -w # 监视app.js
```
新建 tstypescript 配置文件 **tsconfig.json**
```ts
{
  /**\
    tsconfig.json 是ts 编译器的配置文件
*/
  //  指定哪些 ts文件需要被编译
  "include": ["../compiler/**/*"],
  //   指定排除选定的ts 文件，不被编译
  "exclude": ["./hello/**/*"],
  // 编译器选项
  "compilerOptions": {
      "target": "ES2020" , //指定ts 编译的Es 版本 可传入一个错误值运行查看可选版本
      "module": "System" , //模块化规范
      //"lib": ["ES6","DOM"] , //指定运行时所包含的库
      "outDir": "../compiler/build", //指定编译后文件所在的目录
      // "outFile": "../compiler/build/app.js" , //指定合并为一个文件， 所有全局作用域中代码会合并到同一个文件
      "allowJs": true ,//允许对 js 文件进行编译 ， 默认 false
      "checkJs": false ,//是否检查js代码语法规范
      "removeComments": true, //是否删除注释
      "noEmit": false , //不生成编译后文件
      "noEmitOnError": false , //有错误不生成编译后文件
      "alwaysStrict": true , // 严格模式
      "noImplicitAny": false ,// 不允许隐式的any
      "noImplicitThis": false , //不允许明确类型的this
      "strictNullChecks": false , //严格的空检查
      "strict": false //严格检查的总开关
    }
}
```

[webpack 配置](./webpack-pro/webpack.config.js) , 配置项很多 🍈

## 面向对象
对象： 莫问，万物皆对象。不是那个异性兄弟 😸,当然也可以理解这个是一部分。
Eg. 
   windows 对象
   document 对象
   console 对象


### 类 

类就是对象的模型。

[类的继承、属性封装、接口、泛型 代码 📤](./object/src/index.ts)


## 案例-贪吃蛇
效果图：[demo地址](./demo)

![](2022-07-22-23-03-31.png)
