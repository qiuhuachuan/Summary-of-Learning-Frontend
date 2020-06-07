1. 初始化工程
   npm init -y

2. 全局安装 typescript，可以全局使用 tsc，查看帮助信息 tsc -h
   npm i typescript -g

3. 创建配置项
   tsc --init

4. 配置构建工具
   npm i webpack webpack-cli webpack-dev-server --save-dev

5. 创建 build 文件夹及配置文件
   4 个配置文件(区分生产环境和开发环境)
   npm i ts-loader typescript --save-dev
   npm i html-webpack-plugin --save-dev

6. 构建文件前，用于清空 dist 文件夹内的文件
   npm i clean-webpack-plugin --save-dev

7. 配置文件合并
   npm i webpack-merge --save-dev

8. 配置脚本命令

**JavaScript**是一门动态弱类型语言，对变量的类型非常宽容，而且不会在这些变量和它们的调用者之间建立`结构化的契约`。

在**ES**标准推出静态类型检查之前，**TypeScript**是当下解决此问题的最佳方案。

什么是 TypeScript
TypeScript 是拥有类型系统的 JavaScript 的超集，可以编译成纯 JavaScript：

- 类型检查
- 语言扩展
- 工具属性

强类型语言

- 静态类型语言与动态类型语言

  - 静态类型语言：在编译阶段确定所有变量的类型
  - 动态类型语言：在执行阶段确定所有变量的类型

- 类型注解：
  作用：相当于强类型语言中的类型声明
  语法：(变量/函数): type

- 枚举
  一组有名字的常量集合
