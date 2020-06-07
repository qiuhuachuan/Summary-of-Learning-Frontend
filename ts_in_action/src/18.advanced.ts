// 交叉类型与联合类型

interface DogInterface {
  run(): void
}
interface CatInterface {
  jump(): void
}
// 交叉类型，同时具备两个接口的所有方法，取并集
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
}

let aUnion: number | string = 'a'
// 字面量联合类型
let bUnion: 'a' | 'b' | 'c'
let cUnion: 1 | 2 | 3

class Dog2 implements DogInterface {
  run() {}
  eat() {}
}
class Cat2 implements CatInterface {
  jump() {}
  eat() {}
}
enum Master {
  Boy,
  Girl
}
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog2() : new Cat2()
  pet.eat()
  return pet
}

interface Square {
  kind: 'square'
  size: number
}
interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}
interface Circle {
  kind: 'circle'
  r: number
}
function area(s: Square | Rectangle | Circle): number {
  switch (s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.width * s.height
    case 'circle':
      return Math.PI * s.r ** 2
  }
}
console.log(area({ kind: 'circle', r: 1 }))
