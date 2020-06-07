// 单个导出
// export const name = "Hello world";
// export let addr = "Beijing";
// export var list = [1, 2, 3];

// const name = 'Hello world2'
// let addr = 'Beijing'
// var list = [1, 2, 4]
// // 统一导出
// // export {name, addr, list};

// // 导出默认值 不需要使用花括号来导入 一定是默认导出 一个模块内仅有一个默认导出
// // export default name;
// export {addr, list}

// // 导出函数
// export function say(content) {
//   console.log(content)
// }
// export function run() {
//   console.log('I am running')
// }

// // 导出对象
// export const obj = {
//   code: 0,
//   message: 'Hello'
// }
// // 默认导出对象
// export default {
//   code: 1,
//   data: 'message'
// }

// // 类的导出
// export class Test {
//   id
//   constructor() {
//     this.id = 3
//   }
// }

export default {
  sayHi() {
    console.log('Hi')
    return {
      name: 'Allen',
      age: 18
    }
  }
}
