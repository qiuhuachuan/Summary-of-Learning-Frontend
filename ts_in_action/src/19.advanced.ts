// 索引类型

let newObj = {
  a: 1,
  b: 2,
  c: 3
}
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}
console.log(getValues(newObj, ['a', 'b']))
// console.log(getValues(newObj, ['e', 'f']))

// keyof T
interface Obj {
  a: number
  b: string
}
let key: keyof Obj

// T[K]
let value: Obj['a']

// T extends U
