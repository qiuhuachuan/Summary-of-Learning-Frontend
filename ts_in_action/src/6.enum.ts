// 枚举类型

// 数字枚举 具有反向映射
enum Role {
  Reporter = 1, // 默认为0，可以设置初始值，随后以此递增
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter) // 1
console.log(Role)
// Role.Reporter = 2 // 枚举成员的值为只读类型

// 字符串枚举
enum Message {
  Success = '恭喜，你成功了',
  Fail = '抱歉，失败了'
}
console.log(Message.Success)

// 异构枚举：数字枚举和字符串枚举混用，容易造成混淆，不建议使用
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员
enum Char {
  // const 常量枚举：1.没有初始值，2.对已有枚举成员的引用，3.常量表达式
  a,
  b = Char.a,
  c = 1 + 3,
  // computed 需要被计算的枚举成员，会保留到程序的执行阶段
  d = Math.random(),
  e = '123'.length,
  f = 4 // 计算属性的枚举后的成员必须要赋值，否则会报错
}

// 常量枚举 编译后被移除，作用：当不需要对象，只需要对象的值
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E {
  a,
  b
}
enum F {
  a = 0,
  b = 1
}
enum G {
  a = 'apple',
  b = 'banana'
}

let e: E = 3
console.log(e)
let f: F = 3
// e === f // 两种不同的枚举不可以进行比较

let e1: E.a = 1
let e2: F = 3
// e1 === e2
let e3: E.a = 1
e1 === e3

// 只能是字符串枚举的值
let g1: G = G.b
let g2: G.a = G.a
