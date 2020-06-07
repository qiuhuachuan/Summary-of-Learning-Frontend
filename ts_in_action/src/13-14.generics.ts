// 泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定。

// 1 any类型函数，会丢失类型信息
// function log(value: any): any {
//   console.log(value)
//   return value
// }

// 泛型函数
function log<T>(value: T): T {
  console.log(value)
  return value
}
log<string[]>(['a', 'b']) // 显式指定类型
log(['a', 'b']) // 利用类型推断

// 定义泛型函数类型
type Log1 = <T>(value: T) => T
let myLog1: Log1 = arg => arg

// 2 泛型接口
interface LogInterface<T> {
  (value: T): T
}
interface log2 {
  <T = string>(value: T): T
}
interface log3<T = string> {
  // 默认为string
  (value: T): T
}
let myLog: LogInterface<number> = log
myLog(66)
let myLog2: log2 = log
myLog2(666)
myLog2('666')
let myLog3: log3 = log
myLog3('aaa')

// 泛型类，不能应用于静态成员
class Log2<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}
let log1 = new Log2<number>()
log1.run(1)
let log2 = new Log2()
log2.run({ a: 1 })

// 泛型约束
interface Length {
  length: number
}
function log3<T extends Length>(value: T): T {
  console.log(value, value.length)
  return value
}
log3([1])
log3('123')
log3({ length: 1 })

// 泛型的好处：
// 1. 函数和类可以轻松地支持多种类型，增强程序的扩展性
// 2. 不必写多条函数重载，冗长的联合类型声明，增强代码可读性
// 3. 灵活控制类型之间的约束
