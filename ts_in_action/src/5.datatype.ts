// 基本类型

// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'
// str = 123 // 报错

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '4'] // 泛型接口 联合类型
let arr3: (number | boolean)[] = [1, 2, 3, true]

// 元组：顺序和类型固定
let tuple: [number, string] = [0, '1']
// tuple.push(2) // 可以添加新元素，但不推荐使用
// console.log(tuple)
// tuple[2] // 不允许越界访问

// 函数
let add = (x: number, y: number) => x + y // 返回值可以利用类型推断，从而省略返回值类型设定
let compute: (x: number, y: number) => number // 定义函数类型，但没有具体实现
compute = (a, b) => a + b

// 对象
// let obj: object = { x: 1, y: 2 }
// obj.x = 3 // 会报错，正确操作如下
let obj: { x: number; y: number } = { x: 1, y: 2 }
obj.x = 3

// symbol 具有唯一的值
let s1: symbol = Symbol()
let s2 = Symbol()
console.log('symbol相等比较', s1 === s2) // false

// undefined null
let un: undefined = undefined // 只能赋值为其本身
let nu: null = null
num = undefined // 方法1：需要设置"strictNullChecks": false，方法二：使用联合类型
num = null

// void 没有任何返回值
let noReturn = () => {} // undefined在ts中不是保留字

// any类型 可以任意为其赋值
let x
x = 1
x = []
x = () => {}

// never：1.抛出异常 2.死循环
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while (true) {}
}
