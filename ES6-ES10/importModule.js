// 默认导出的 在导入时可以自定义导入名字
// import name2, {addr as addr2, list} from "./exportModule.js";
// console.log(name2, addr2, list);

// import {say, run, obj, Test} from "./exportModule.js";
// say("Hello world");
// run();
// console.log(obj.code);
// let test = new Test();
// console.log(test.id);

import Md from './exportModule.js'
Md.sayHi()
console.log(Md)
