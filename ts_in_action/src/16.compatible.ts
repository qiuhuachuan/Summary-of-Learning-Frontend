// 类型兼容性：
// 当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X兼容类型Y
// X兼容Y: X(目标类型) = Y(源类型)
// 结构之间兼容：成员少的兼容成员多的
// 函数之间兼容：参数多的兼容参数少的

let s: string = 'a'
// s = null

// 接口兼容性 成员少的兼容成员多的
interface X {
  a: any
  b: any
}
interface Y {
  a: any
  b: any
  c: any
}
let x1: X = { a: 1, b: 2 }
let y1: Y = { a: 1, b: 2, c: 3 }
x1 = y1
// y1 = x1 // 报错

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
  return handler
}

// 条件1 参数个数
let handler1 = (a: number) => {}
hof(handler1)
let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2) // 报错

// 可选参数和剩余参数
let aaa = (p1: number, p2: number) => {}
let bbb = (p1?: number, p2?: number) => {}
let ccc = (...args: number[]) => {}
aaa = bbb
aaa = ccc
// bbb = ccc // 报错 strictFunctionTypes选项可以关闭报错
// bbb = aaa // 报错
ccc = aaa
ccc = bbb

// 条件2 参数类型
let handler3 = (a: string) => {}
// hof(handler3) // 报错，参数类型不兼容

interface Point3D {
  x: number
  y: number
  z: number
}
interface Point2D {
  x: number
  y: number
}
let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d
// p2d = p3d

// 条件3 返回值类型
let fff = () => ({ name: 'Alice' })
let ggg = () => ({ name: 'Alice', location: 'Beijing' })
fff = ggg
// ggg = fff

// 函数重载
// 1.函数重载列表 2.函数具体实现
function overload(a: number, b: number): number
function overload(a: string, b: string): string
function overload(a: any, b: any): any {}

// 枚举兼容性：数值和枚举可以相互兼容
enum Fruit {
  Apple,
  Banana
}
enum Color {
  Red,
  Yellow
}
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// 枚举之间不兼容
// let color: Color.Red = Fruit.Apple

// 类兼容性：静态成员和构造函数不参与比较
class A {
  constructor(p: number, q: number) {}
  id: number = 1
  private name: string = 'a'
}
class B {
  static s = 1
  constructor(p: number) {}
  id: number = 2
  private name: string = 'a'
}
let aa = new A(1, 2)
console.log(aa.id)
let bb = new B(1)
console.log(B.s)
// aa = bb // 出现私有成员后，两个类是不兼容的
// bb = aa

// 父类和子类的实例相互兼容
class CA extends A {}
let ca = new CA(1, 2)
aa = ca
ca = aa

// 泛型兼容性
interface Empty<T> {
  value: T
}
let obj1: Empty<number> = { value: 1 }
let obj2: Empty<string> = { value: 'a' }
// obj1 = obj2
// obj2 = obj1

// 泛型函数
let log11 = <T>(x: T): T => {
  console.log('x')
  return x
}
let log22 = <U>(y: U): U => {
  console.log('y')
  return y
}
log11 = log22
log22 = log11
