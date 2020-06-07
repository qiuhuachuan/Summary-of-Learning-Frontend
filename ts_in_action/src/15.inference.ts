// 类型检查机制：
// TypeScript编译器在做类型检查时，所秉承的一些原则，以及表现出的一些行为。
// 作用：辅助开发，提高开发效率。

// 类型推断
// 类型兼容性
// 类型保护

// 类型推断：
// 不需要指定变量的类型(函数的返回值类型)，TypeScript可以根据某些规则自动地为其推断出一个类型。
// 基础类型推断
// 最佳通用类型推断
// 上下文类型推断

let a = 1
let b = [1, null] // 最佳通用类型推断

let cc = (x = 1) => x + 1

// 这个会报错
window.onkeydown = function (e: KeyboardEvent) {
  console.log(e)
}

interface Foo {
  bar: number
}
// 类型断言 尽量少使用
let foo = {} as Foo
foo.bar = 1
// 推荐使用如下的
let foo2: Foo = {
  bar: 1
}
