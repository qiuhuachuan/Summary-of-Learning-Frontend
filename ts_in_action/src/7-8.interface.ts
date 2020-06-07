interface List {
  readonly id: number // 只读属性
  name: string
  [props: string]: any // 索引签名
  age?: number // 可选属性
}
interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log('age', value.age)
    }
    // value.id++ // 只读属性不允许修改
  })
}
let result: Result = {
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B', age: 10 }
  ]
}
render(result)
// 鸭市变形法：动态类型语言风格

// 传入字面量会报错，绕开这种报错有3种
// 1 将传入的字面量赋值给一个变量
// 2 类型断言 推荐使用第一种
// render({
//   data: [
//     { id: 1, name: 'A', sex: 'male' },
//     { id: 2, name: 'B' }
//   ]
// } as Result)
// render(<Result>{ // 在react中会造成歧义
//   data: [
//     { id: 1, name: 'A', sex: 'male' },
//     { id: 2, name: 'B' }
//   ]
// })
// 3 字符串索引签名
// [props: string]: any

// 字符串数组 等价于string[]
interface StringArray {
  [index: number]: string
}
let chars: StringArray = ['A', 'B']

interface Names {
  [x: string]: string
  // y: number // 报错
  [z: number]: string
}
let nameInstance: Names = { a: 'a', 1: '1' }
interface Names1 {
  [x: string]: string
  // y: number // 报错
  // [z: number]: number // 报错
}
let nameInstance1: Names1 = { a: 'a', b: 'b' }

// 1 定义函数类型
let add1: (x: number, y: number) => number
// 2 使用接口定义函数类型，两者等价
interface Add {
  (x: number, y: number): number
}
// 3 类型别名
type add2 = (x: number, y: number) => number
let addTwoNumbers: add2 = (a, b) => a + b // 具体实现

// 混合类型接口
interface Lib {
  (): void // Lib是一个函数，无返回值
  version: string
  doSomeThing(): void
}

function getLib() {
  let lib: Lib = (() => {}) as Lib // 需要类型断言，否则会报错
  lib.version = '1.0'
  lib.doSomeThing = () => {
    console.log('doSomeThing')
  }
  return lib
}

let lib1 = getLib()
lib1()
lib1.doSomeThing()
let lib2 = getLib()
console.log('lib1 === lib2', lib1 === lib2)
