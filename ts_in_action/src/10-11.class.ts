class Dog {
  static food: string = 'bones'
  readonly legs: number = 4
  name: string // 实例属性
  constructor(name: string) {
    // private修饰时 表示既不能继承也不能实例化
    // protected修饰时 表示只能继承，不能实例化
    this.name = name
    this.pro()
  }

  run() {
    this.pri() // private只能在Dog类中调用
    this.pro() // protected只能在类或子类中调用
    Dog.sta()
  } // 原型方法
  static sta() {
    // 静态方法为类方法
    console.log('static')
  }
  private pri() {
    console.log('private')
  }
  protected pro() {
    console.log('protected')
  }
}
console.log('Dog.prototype', Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog)
// dog.sta()
Dog.sta()
console.log(Dog.food)
dog.run()

class Husky extends Dog {
  // color: string 这一句省略，则需要在参数中增加public修饰
  constructor(name: string, public color: string) {
    super(name)
    this.color = color
    // this.pri()
    this.pro()
  }
  eat() {
    this.pro()
  }
}
console.log(Husky.food) // 属于类的静态属性和静态方法都可以被继承
console.log(Husky.prototype)

console.log('--------')

// 抽象类：只能被继承
abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void // 不指定函数的具体实现
}
// let animal = new Animal() // 不能创建实例
class Fish extends Animal {
  name: string
  constructor(name: string) {
    super()
    this.name = name
  }
  run() {}
  sleep() {
    // 在子类中实现父类中定义的抽象方法
    console.log('fish sleep')
  }
}
let fish = new Fish('miao')
fish.eat()

// 多态
class Cat extends Animal {
  sleep() {
    console.log('cat sleep')
  }
}
let cat = new Cat()

let animals: Animal[] = [fish, cat]
animals.forEach(item => {
  item.sleep()
})

// this链式调用
class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
  next() {
    return this
  }
}
// this既可以指向父类也可以指向子类
new MyFlow().next().step1().next().step2()
