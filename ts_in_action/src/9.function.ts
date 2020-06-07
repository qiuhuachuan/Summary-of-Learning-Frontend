// 函数定义及具体实现 后三种只给出了定义
function add3(x: number, y: number): number {
  return x + y
}

let add4: (x: number, y: number) => number

type add5 = (x: number, y: number) => number

interface add6 {
  (x: number, y: number): number
}

// add3(1) // 传递的参数少一个报错
add3(1, 2)
add4 = (x, y) => x + y
// add3(1, 2, 3) // 传递的参数多一个也报错

// 可选参数，必须位于必选参数之后
function add7(x: number, y?: number): number {
  return y ? x + y : x
}
add7(1)

// 函数默认值
function add8(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q
}
console.log(add8(1, undefined, 3))

// 剩余参数
function add9(x: number, ...rest: number[]) {
  return x + rest.reduce((acc, cur) => acc + cur, 0)
}
console.log(add9(1, 2, 3, 4, 5))

console.log('----函数重载----')
// 函数重载：两个函数名相同，但是函数的参数个数和参数类型不同，即实现函数重载
function add10(...rest: number[]): number
function add10(...rest: string[]): string
// 在类型最宽泛的版本中实现
function add10(...rest: any[]): any {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    return rest.reduce(function (acc, cur) {
      return acc + cur
    }, 0)
  }
}
console.log(add10(6, 6, 6))
console.log(add10('a', 'b', 'c'))
